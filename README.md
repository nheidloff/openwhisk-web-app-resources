# Web Application Resources on OpenWhisk


*Work in Progress*



docker build -t nheidloff/openwhisk-png:new3 .

docker push nheidloff/openwhisk-png:new3

ibmcloud fn action create new3 --docker nheidloff/openwhisk-png:new4 --web true
ibmcloud fn action update new3 --docker nheidloff/openwhisk-png:new4 --web true

ibmcloud fn api create -n "angular-web-app" /web /resources get new3 --response-type http

https://service.us.apiconnect.ibmcloud.com/gws/apigateway/api/a172f687d4c7fac2da3546903009090a18a9643313d2d6e47ff43dd8ede5fa3a/web/resources/index.html



================

ng serve

ng build --prod