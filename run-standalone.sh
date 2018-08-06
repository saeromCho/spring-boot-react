#!/bin/bash
docker run --name spring-boot-react -p 8081:80 -v $(pwd)/src/html:/usr/share/nginx/html -d colligence-io/spring-boot-react  
