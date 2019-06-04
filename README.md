# VIDLY-2

A RESTful API that performs CRUD operation that is create, read, update and delete from a mongo database.
This application has two resources, the genres and the customers api.
This is a CRUD RESTful API that can create a genre/customer, retrieve a genre/genres/customer/customers, update a genre/customer, and delete a genre/customer from the genre/customer collection in the vidly database.(Video store).

SETUP
Install all the dependencies in the package.json
Install mongodb and mongodb compass
Run nodemon index.js to start the server
Test the API endpoints using postman

Genres:
http://localhost:3000/api/genres GET: This URL will return all the genres in the database

http://localhost:3000/api/genres/:id GET: This URL will return a particular genres in the database

http://localhost:3000/api/genres POST: This URL will create a new genre

http://localhost:3000/api/genress/:id DELETE: This URL will delete an existing genre from the mongodb

http://localhost:3000/api/genres/:id PUT: This URL will update a genre with the specified id

Customers:
http://localhost:3000/api/customers GET: This URL will return all the customers in the database

http://localhost:3000/api/customers/:id GET: This URL will return a particular customer in the database

http://localhost:3000/api/customers POST: This URL will create a new customer

http://localhost:3000/api/customers/:id DELETE: This URL will delete an existing customer

http://localhost:3000/api/customers/:id PUT: This URL will update a customer with the specified id

Movies:
http://localhost:3000/api/movies GET: This URL will return all the movies in the database

http://localhost:3000/api/movies/:id GET: This URL will return a particular movie in the database

http://localhost:3000/api/movies POST: This URL will create a new movie that belongs to an already existing genreId

http://localhost:3000/api/movies/:id DELETE: This URL will delete an existing movie

http://localhost:3000/api/movies/:id PUT: This URL will update a movie with the specified id
