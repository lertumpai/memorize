# 1. create mongo by docker-compose
```
docker-compose up -d
```

# 2. create admin
```
db.createUser({
    user: "lertumpai",
    pwd: "sorawit5171718",
    roles: [ { role: "root", db: "admin" } ]
})
```

# 3. login mongo again with role root
```
mongo -u lertumpai -p sorawit5171718 --authenticationDatabase admin
```

# 4. create DB
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
