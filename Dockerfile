FROM fotinakis/baseimage-ruby:2.1.3
RUN apt-get update
RUN apt-get install -y curl
RUN apt-get install -y nodejs-legacy
RUN apt-get install -y npm
RUN apt-get install libsqlite3-dev
RUN apt-get install -y git
RUN apt-get install -y chromium-browser firefox
RUN apt-get update

RUN apt-get install -y openjdk-7-jre
RUN npm install -g protractor
RUN npm install -g chromedriver
RUN npm install -g grunt-cli

RUN mkdir /demo/
ADD Gemfile /demo/
ADD Gemfile.lock /demo/
ADD package.json /demo/
RUN gem install bundler
RUN gem install sqlite3 -v '1.3.10'
WORKDIR /demo/

RUN npm install protractor
RUN webdriver-manager update
RUN npm install
RUN bundle install
ADD . /demo/

CMD sh jenkins-grunt.sh
