# 1. Install docker & docker compose
## 1.1. install Docker
### ทำการอัพเดท package ของ ubuntu
```
sudo apt update
```
### ลงตัวช่วยในการติดตั้ง Docker
```
sudo apt-get install \
apt-transport-https \
ca-certificates \
curl \
gnupg-agent \
software-properties-common
```
### ติดตั้ง GPG Key ของ Docker
```
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```
### เพิ่ม Repository ของ Docker เข้าไปใน APT Repository list ในเครื่องเรา เพื่อให้ในอนาคตเราสามารถอัพเดท Docker ได้ง่ายๆ ด้วยคำสั่ง apt update/apt upgrade
```
sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
```
### ทำการอัพเดท list ของ package ที่มีอยู่

```
sudo apt-get update
```
### ทำการติดตั้ง Docker CE
```
sudo apt-get install docker-ce docker-ce-cli containerd.io
```

## 1.2. install docker compose
```
https://docs.docker.com/compose/install/
```

# 2. create mongo by docker-compose
```
docker-compose up -d
```

# 3. login with admin
```
docker exec -it memorize_mongodb mongo admin
```

# 4. create admin
```
db.createUser({
    user: "lertumpai",
    pwd: "sorawit5171718",
    roles: [ { role: "root", db: "admin" } ]
})
```

# 5. login mongo again with role root
```
docker exec -it memorize_mongodb mongo -u lertumpai -p --authenticationDatabase admin
mongo -u lertumpai -p --authenticationDatabase admin
```

# 6. create DB
### === create production ===
```
use memorize
db.createUser(
  {
    user: "lertumpai",
    pwd: "sorawit5171718",
    roles: [
      {
        role: "readWrite",
        db: "memorize"
      }
    ]
  }
)
```
### === create staging ===
```
use memorize-staging
db.createUser(
  {
    user: "lertumpai",
    pwd: "sorawit5171718",
    roles: [
      {
        role: "readWrite",
        db: "memorize-staging"
      }
    ]
  }
)
```
