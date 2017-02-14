# arobs-nodejs-2017 T2 (HTTP servers in nodejs)

* create simple static http server (using http-server module)
* create simple static https server (using http-server module)
* create a simple nodejs proxy
* add/alter response headers
* use Express.js to build a http/s server


Resources:
https://github.com/indexzero/http-server
https://github.com/nodejitsu/node-http-proxy
http://www.fullstacktraining.com/articles/how-to-serve-static-files-with-express
https://www.html5rocks.com/en/tutorials/cors/
http://www.restapitutorial.com/httpstatuscodes.html

Homework:
Build an expressjs app that uploads a file, stores it in a private location, lists all uploaded files and gives you the posibility to download it.
1. The upload will be available via PUT method
2. Add a middleware to check for "X-API-KEY" header. Each request to server should have this header set
3. Make sure you use CORS headers
4. Creating a web client is optional, if you don't do it, please add a Postman export example on how to use the file upload/listing/download
5. The app needs to have a package.json file with all dependencies

Resources:
https://www.npmjs.com/package/express-fileupload
https://www.npmjs.com/package/node-dir
http://expressjs.com/en/guide/routing.html
https://github.com/expressjs/cors