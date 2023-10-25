const jwt = require('jsonwebtoken');

let secretKey = "fqdslgkhjqdvslkfjhvealkqjh";

let payload = {
    id: 34,
    name: "John Doe",
    email : "mgeiss@wevox.eu"
};

let token = jwt.sign(payload, secretKey);

console.log(token);

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzQsIm5hbWUiOiJKb2huIERvZSIsImVtYWlsIjoibWdlaXNzQDx3ZXZveC5ldSIsImlhdCI6MTY5ODI0Mjg4N30.pamwJLZ0Boa0yY3APg3Q6jbQB5Hzw6KGbAWoFrugWU0
