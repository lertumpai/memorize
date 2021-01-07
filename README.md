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
=== directory ===
scp -r root@203.154.83.249:path ~/Desktop
```
