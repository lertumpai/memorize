# 1. create mongo by docker-compose
```
docker-compose up -d
```

# 2. login with admin
```
docker exec -it memorize_mongodb mongo admin
```

# 3. create admin
```
db.createUser({
    user: "lertumpai",
    pwd: "sorawit5171718",
    roles: [ { role: "root", db: "admin" } ]
})
```

# 4. login mongo again with role root
```
docker exec -it memorize_mongodb mongo -u lertumpai -p --authenticationDatabase admin
mongo -u lertumpai -p --authenticationDatabase admin
```

# 5. create DB
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
