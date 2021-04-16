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

# mongo backup
```
mongodump --uri mongodb://localhost:27017/memorize/memorize
mongorestore --uri mongodb://localhost:27017/memorize/memorize
```

# k8s rolling update
```
kubectl set image deployment/memorize-frontend memorize-frontend=lertumpai/memorize-frontend:1.0.7 --record
kubectl set image deployment/memorize-backend memorize-backend=lertumpai/memorize-backend:1.0.5 --record
```

# setup memorize project in GCP cloud
```
1. create bucket storage and migrate data
    - download file from storage using `gsutil -m cp -r "gs://memorize-bucket/articles/" "gs://memorize-bucket/profiles/" .`
2. create mongodb instance and migrate data
    - using 'mongo backup'
3. create k8s cluster
4. install
    - cert-manager -> https://cert-manager.io/docs/installation/kubernetes/
    - nginx -> https://kubernetes.github.io/ingress-nginx/deploy/#using-helm
5. apply k8s yaml
```
