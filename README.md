# Web Application Resources on OpenWhisk


*Work in Progress*



docker build -t nheidloff/openwhisk-png:new3 .

docker push nheidloff/openwhisk-png:new3

ibmcloud fn action create new3 --docker nheidloff/openwhisk-png:new3 --web true




