# Phone Catalogue


Web app created powered with React and Redux.

## Installation

* Install clonning the repo with `git clone "https://github.com/ManuelPortero/phonecatalogue.git"`
  
  after this command execute the command `npm install`
  
* To run the server:
  
  Install JSON-server `npm install -g json-server`
  and run the JSON-server `json-server public/phones.json --port 8000`


<br />

## Guide

### Starting Phone Catalogue
After run the JSON server; in the root app folder, execute this command: 

`npm start`

## Starting with Docker 
### Creating and running the docker image 
If we want to run our app with docker, the first step is create the docker image of our app with this command: 

`sudo docker build -t phoneimage .`

and after that run the image pointing to a port in your machine: 

`sudo docker run -it -p 4000:3000 phoneimage`


