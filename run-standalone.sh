#!/bin/bash
docker run --name alpha.colligence.io -p 80:80 -p 443:443 -v $(pwd)/src/html:/usr/share/nginx/html -d colligence-io/spring-boot-react 
