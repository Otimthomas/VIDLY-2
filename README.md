# VIDLY-2

A RESTful API that performs CRUD operation that is create, read, update and delete from a mongo database.
This is a CRUD RESTful API that can create a genre, retrieve a genre/genres, update a genre, and delete a genre from the genre database(Video store).

SETUP
Install all the dependencies in the package.json
Install mongodb and mongodb compass
Run nodemon index.js to start the server
Test the API endpoints using postman

COURSES:
http://localhost:3000/api/genres GET: This URL will return all the courses in the genres in the database

http://localhost:3000/api/genres/:id GET: This URL will return a particular genres in the database

http://localhost:3000/api/genres POST: This URL will create a new genre

http://localhost:3000/api/genress/:id DELETE: This URL will delete an existing genre from the mongodb

http://localhost:3000/api/genres/:id PUT: This URL will update a genre with the specified id
