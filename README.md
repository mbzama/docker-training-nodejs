
## Run without Docker
 	`npm install`
 	`npm start`


## Run with Docker
    - Build docker image: 
 		     `docker build -t node-api .`
    - Create/Run the docker container: 
 		     `docker run -d --name nodeapi -p 8500:8500 node-api 
## Run without Docker
 	`npm install`
 	`npm start`


## Run with Docker
- Build docker image: 
 		 `docker build -t node-api .`
- Create/Run the docker container: 
 	     `docker run -d --name nodeapi -p 8500:8500 node-api`

## Verifying
- Root endpoint: http://localhost:8500/


- Endpoint with params: http://localhost:8500/greet?message=learningdocker
 
