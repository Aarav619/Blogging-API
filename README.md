# Blogging API for TODO Manager

# Getting Started
## Requirements
- nodejs
- mongodb

## Running the server
```bash
git clone https://github.com/Aarav619/Blogging-API.git
cd Blogging-API && npm i && node app.js
```

# Routes
## User Routes
- **/signup**: Create a new user.

    POST /signup
    ```json
    {
        "firstName": "Alexander",
        "lastName":"Grahmbell",
        "email": "alexander@email.com",
        "password": "telephone",
        "dateofBirth":"22-02-1912"
    }
    ```
    Response Headers
    ```
    HTTP/1.1 200 OK
    Connection: close
    Content-Length: 169
    Content-Type: application/json; charset=utf-8
    Date: Tue, 21 Dec 2021 17:54:22 GMT
    ETag: W/"a9-ucAOBNG6dj100Xg0dnaCh+wClr0"
    X-Powered-By: Express

    ```
- **/login**: Login an existing user.

    POST /login
    ```json
    {
        "email": "alexander@email.com",
        "password": "telephone"
    }
    ```
    Response Headers
    ```
    HTTP/1.1 200 OK
    Connection: close
    Content-Length: 178
    Content-Type: application/json; charset=utf-8
    Date: Tue, 21 Dec 2021 17:58:15 GMT
    ETag: W/"b2-faPt0jYwMpJbYZg68yKFpUIJzL0"
    X-Powered-By: Express

    User with email alexander@email.com sucessfully found.
    login Successful
    ```
- **/blog**: Create a Blog.

    POST /blog
    ```json
    {
        "headings":"Complete task",
        "userBlog":"Finish given task in time!",
        "userID":"<user._id>"
    }
    ```
    Response Headers
    ```
    HTTP/1.1 200 OK
    Connection: close
    Content-Length: 109
    Content-Type: application/json; charset=utf-8
    Date: Tue, 21 Dec 2021 18:04:24 GMT
    ETag: W/"6d-NS66zHIH2iXqTD+G64ZQcZh8kiY"
    X-Powered-By: Express

    ```
- **/user/blog/:userID**: Get all blogs of a user.

    GET /user/blog/<user._id>

    Response Headers
    ```
    HTTP/1.1 404 Not Found
    Connection: close
    Content-Length: 9
    Content-Type: text/html; charset=utf-8
    Date: Tue, 21 Dec 2021 18:11:39 GMT
    ETag: W/"9-sY7popcGqLc1L9zwEvAsd8vdCOE"
    X-Powered-By: Express

    No Blog for user with UserID:61a50ce50711bc134237df95 found!
    ```

    GET /user/blog/<user._id>

    Response Headers
    ```
    HTTP/1.1 200 OK
    Connection: close
    Content-Length: 147
    Content-Type: application/json; charset=utf-8
    Date: Wed, 22 Dec 2021 10:24:22 GMT
    ETag: W/"93-yuqjIOfWp58jXx7IIVJsG85v6fM"
    X-Powered-By: Express
    [
        {
            "_id": "61c2fc7e6fe1e736fc54157a",
            "headings": "Complete task",
            "userBlog": "Finish given task in time!",
            "userID": "61c214c03edd834e961333bd",
            "__v": 0
        }
    ]
    Blog for User with UserID:61c214c03edd834e961333bd was successfully found.    
    ```
- **/user/:id**: Finding user with unique Mongoose ID.

    GET /user/61c214c03edd834e961333bd"
   
    Response Headers
    ```
    HTTP/1.1 200 OK
    Connection: close
    Content-Length: 169
    Content-Type: application/json; charset=utf-8
    Date: Tue, 21 Dec 2021 18:22:49 GMT
    ETag: W/"a9-uXXrD69Sp6G47l3LNxvrhOqG8QQ"
    X-Powered-By: Express

    User found successfully.
    ```
## Admin Routes
- **/admin/signup**: To Create a new admin.

    POST /admin/signup
    ```json
    {
        "firstName":"Adam",
        "lastName":"Smith",
        "email":"adam@email.com",
        "password":"adam@12345678"
    }
    ```
    Response Headers
    ```
    HTTP/1.1 200 OK
    Connection: close
    Content-Length: 132
    Content-Type: text/html; charset=utf-8
    Date: Tue, 21 Dec 2021 17:33:44 GMT
    ETag: W/"84-f7jQ0moaYp5nKkdkyClnCho2D+E"
    X-Powered-By: Express

    ```
- **/admin/login**: Login with existing credentials.

    GET /admin/login
    ```json
    {
        "email":"alan@email.com",
        "password":"turingMachine"
    }
    ```
    Response Headers
    ```
    HTTP/1.1 200 OK
    Connection: close
    Content-Length: 143
    Content-Type: application/json; charset=utf-8
    Date: Tue, 21 Dec 2021 17:47:35 GMT
    ETag: W/"8f-wg5fG+/wCocK86TZKtHXEbr2Q0I"
    X-Powered-By: Express

    Admin with email alan@email.com sucessfully found.
    login Successful
    ```