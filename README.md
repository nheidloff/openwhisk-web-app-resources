# Web Application Resources on OpenWhisk


*Work in Progress*



docker build -t nheidloff/openwhisk-png:new3 .

docker push nheidloff/openwhisk-png:new3

ibmcloud fn action update new3 --docker nheidloff/openwhisk-png:new4 --web true




