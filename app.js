"use strict";
const express = require("express");
const dbConnection = require("./helper/mysql");

const app = express();
app.use(express.json());

//check db connection
dbConnection.getConnection((err, connection) => {
  if (err) {
    console.log("Database connection error: ", err);
  } else {
    console.log("Database connected");
  }
});


 // LİSTELEME İŞLEMİ
app.get("/students", (req, res) => {
  dbConnection.query("SELECT * FROM students", (err, results, fields) => {
    if (err) {
      console.log("Database query error: ", err);
    } else {
      res.status(200).json({
        status: "success",
        data: results,
      });
    }
  });
});

// ID'ye göre öğrenci getirme ve not ortalamasını hesaplama işlemi
app.get("/students/:id", (req, res) => {
  const studentId = req.params.id;

  dbConnection.query(
    "SELECT *, (Midterm_grade + Final_grade) / 2 AS average FROM students WHERE id = ?",
    [studentId],
    (err, results, fields) => {
      if (err) {
        console.log("Database query error", err);
        res.status(500).json({
          status: "error",
          message: "Database query error",
          error: err
        });
      } else {
        if (results.length > 0) {
          const studentData = results[0];
          res.status(200).json({
            status: "success",
            data: studentData
          });
        } else {
          res.status(404).json({
            status: "error",
            message: "Student not found"
          });
        }
      }
    }
  );
});

// EKLEME İŞLEMİ
app.post("/students/add", (req, res) => {
  const { name, age, midtermGrade, finalGrade } = req.body;

  // Veritabanına öğrenci ekleme işlemi
  const queryString = "INSERT INTO students (Name, Age, Midterm_grade, Final_grade) VALUES (?, ?, ?, ?)";
  dbConnection.query(queryString, [name, age, midtermGrade, finalGrade], (err, results, fields) => {
    if (err) {
      console.log("Database query error: ", err);
      res.status(500).json({
        status: "error",
        message: "Student addition failed",
        error: err
      });
    } else {
      console.log("Student added successfully");
      res.status(200).json({
        status: "success",
        message: "Student added successfully"
      });
    }
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});