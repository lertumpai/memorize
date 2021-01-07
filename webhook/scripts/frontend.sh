#!/bin/bash

cd ../../application/frontend

docker-compose down --rmi all
docker-compose up -d
