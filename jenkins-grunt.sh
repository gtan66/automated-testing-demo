#!/bin/bash

export PATH=/usr/local/bin:/path/to/node:/path/to/node_bin:/path/to/phantomjs:/path/to/jscoverage:$PATH;
grunt


#docker pull vvoyer/docker-selenium-firefox-chrome
#docker run --privileged -p 4444:4444 -p 5999:5999 -d vvoyer/docker-selenium-firefox-chrome
#CONTAINER=$( docker ps -a -q )
#echo $CONTAINER
#docker stop  $(docker ps -a -q)
#docker rm $(docker ps -a -q)
#webdriver-manager start &
#grunt
