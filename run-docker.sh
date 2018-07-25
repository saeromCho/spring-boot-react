#!/bin/bash
docker run --name react-nginx -p 8081:80 -v ~/workspace/docker/nginx-react/src/html:/usr/share/nginx/html -d nginx  
