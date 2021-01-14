# SSH to cloud
```
ssh -i ~/.ssh/id_rsa root@203.154.83.249

== Check Storage ==
df -hT
```

# run compose
```
docker-compose up -d
```

# Clean docker
```
1. Stop the container(s) using the following command:
docker-compose down
2. Delete all containers using the following command:
docker rm -f $(docker ps -a -q)
3.1 Delete all volumes using the following command:
docker volume rm $(docker volume ls -q)
3.2 Delete all volumes that are not used
docker volume prune
4. Restart the containers using the following command:
docker-compose up -d
```

# download data from ssh
```
=== Single file ===
scp root@203.154.83.249:path ~/Desktop
docker cp memorize_upload:/usr/src/memorize-upload/public .
=== directory ===
scp -r root@203.154.83.249:path ~/Desktop
```

# Docker watchtower
```
docker run -d \
  --name watchtower \
  -v /var/run/docker.sock:/var/run/docker.sock \
  v2tec/watchtower \
  --interval 30 --cleanup \
  memorize_frontend \
  memorize_backend
```

# Deploy step
```
1. pull docker watcher
docker pull v2tec/watchtower
run follow 'Docker watchtower'

2. start storage
pwd: /storage -> docker-compose up

3. start backend
pwd: /application/backend -> docker-compose up

2. start frontend
pwd: /application/frontend -> docker-compose up
```

# mongo backup
```
mongodump --host 35.187.254.42 --port 27017 -u lertumpai -p sorawit5171718 --db memorize --forceTableScan
mongorestore -u lertumpai -p sorawit5171718
```
