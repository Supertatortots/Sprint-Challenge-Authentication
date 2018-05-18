<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.

Middleware: Functions that use request (req) and response (res) objects that make changes towards it, then sends it off.

Sessions: A middleware that stores data within cookies, memory cache, or a database and provides each user with a unique session. Sessions provide infomation about the 
current usage of it, like the current account that is logged in. 

bcrypt: A hashing function designed to recieve a plaintext password and returned it as a hashed string. 

JWT: Jsonwebtoken is a JSON object that is used for authetication.  It is stored locally on the user's browser and is used as a verfication method for websites. 

2.  What does bcrypt do in order to prevent attacks?

It takes a password given to it and then hashes it, returning a long string of characters like ($#52fas21$e53200294) or something similar. 
This prevents the passwords from being found out if a database were to have been hacked, as only the hashed passwords should be stored and ideally not the plaintext passwords at all. 


3.  What are the three parts of the JSON Web Token?

Header, payload, signature. 