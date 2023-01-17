<h1 align="left">TypeScript Project - Car Shop</h1>
</br>

For this project, I applied Object Oriented Programming (OOP) principles to build a CRUD API to manage a car/bikes dealership. This will be done using the MongoDB database through the Mongoose framework.

I built a dockerized back-end using data modeling through Mongoose queries to a Mongo database. The development respected the business rules provided in the project and the API is capable of being consumed by an already Rest API Client.

In this project, I also implemented the concepts of TDD, SOLID in addition to the organization of the project in MSC layers.

<h3>:gear: Instructions</h3>

------------

<p>To run the repository locally, clone the project and use the following commands to initialize Docker and install the dependencies:</p>

````
docker-compose up -d
docker exec -it trybers_and_dragons bash
npm install // to install the dependencies
npm run dev // to execute the app and enable the api to receive requests in any Rest API Client, like Thunder Client
docker-compose down // to completely stop the application
````

<h3>## How can I run the created tests?</h3>
Considering that you have already installed all the necessary dependencies, thus running **Car Shop**, for testing purposes, you can run the following commands:
</br>
</br>

Run all the tests created for the *Model, Controller* and *Service* layers:
```
npm run test
```
</br>

Check full test coverage:
```
npm run test:coverage
```

</br>

<h3 align="left">Technologies, languages and Tools:</h3>
<p align="left"> 

<a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> <img src="https://github.com/devicons/devicon/blob/master/icons/typescript/typescript-original.svg" width="40" height="40"/> 
</a>
<a href="https://https://nodejs.org/en/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/nodejs/nodejs-original.svg" width="40" height="40"/> </a>
<a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" width="40" height="40"/>
</a>
<a href="https://www.docker.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="docker" width="40" height="40"/> 
</a>
</p>
