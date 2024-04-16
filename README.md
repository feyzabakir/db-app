## Sanal Makinede Çalıştırmak için Adımlar
Sanal sunucuya bağlandıktan sonra bu komutları tek tek çalıştırın.

```bash
sudo apt-get update

sudo apt-get install -y ca-certificates curl gnupg

sudo mkdir -p /etc/apt/keyrings

curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | sudo gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg
NODE_MAJOR=20

echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_MAJOR.x nodistro main" | sudo tee /etc/apt/sources.list.d/nodesource.list

sudo apt-get update

sudo apt-get install nodejs -y
```
### GitHub SSH Key için
`ssh-keygen -t rsa -m PEM`

`sudo cat ~/.ssh/id_rsa.pub` 

`ssh-keyscan -t rsa github.com >> ~/.ssh/known_hosts`

-------------------------------------------------------------
Daha sonra bu repoyu klonlayın.

```bash
git clone git@github.com:feyzabakir/db-app.git
```

`cd db-app` ile içine gir.

:bangbang: Bu projede, veritabanına bağlanmak için kullanılan mysql.js dosyasında sunucusu adresi ve parolası gibi bilgiler kod içine doğrudan yerleştirilmemiştir. DB_HOST ve DB_PASSWORD alanları bir .env dosyasında tutulmaktadır. Bunun için bir .env dosyası oluşturup bu verileri eklemek gerekir.

`nano .env`  --> diyerek bir .env dosyası oluştur. `DB_HOST=sunucu adresi` ve `DB_PASSWORD=sunucu şifresi` ekle ve dosyayı kaydet.

`npm install`

`npm start`

:small_blue_diamond: 34.248.30.222:3000/students --> adresinden öğrencileri listeleyebilirisiniz.

![image](https://github.com/feyzabakir/db-app/assets/120409251/230a26c4-b75b-43e1-a1de-21158c9117ad)

:small_blue_diamond: 34.248.30.222:3000/students/2 --> ID'si 2 numara olan öğrnciyi listeleyebilirsiniz.

![image](https://github.com/feyzabakir/db-app/assets/120409251/ec7be6f4-bbd6-44fc-a84c-014fb163c24c)

:small_blue_diamond: 34.248.30.222:3000/students/add --> yeni öğrenci ekleyebilirsiniz.

![image](https://github.com/feyzabakir/db-app/assets/120409251/6f20b9c1-2b1c-430c-92f1-0e84e3553748)

![image](https://github.com/feyzabakir/db-app/assets/120409251/e07da61f-296b-4f3c-b879-41f958823283)


