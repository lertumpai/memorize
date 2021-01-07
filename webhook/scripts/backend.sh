#!/bin/bash

cd ../../application/backend

docker-compose down --rmi all
docker-compose up -d
