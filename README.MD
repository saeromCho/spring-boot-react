spring-boot-react

# build docker image
docker build -t colligence-io/spring-boot-react .

# for prod deploy
docker run -it -p 80:80 --name spring-boot-react -d colligence-io/spring-boot-react

# for dev
docker run -it -p 8081:80 --name spring-boot-react -v ~/workspace/docker/nginx-react/src/html:/usr/share/nginx/html -d colligence-io/spring-boot-react

# docker-compose