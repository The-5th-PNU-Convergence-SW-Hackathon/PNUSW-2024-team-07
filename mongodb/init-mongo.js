// init-mongo.js

db = db.getSiblingDB('familing'); // familing 데이터베이스로 전환

db.createUser({
    user: 'root',
    pwd: '1234',
    roles: [{
        role: 'readWrite',
        db: 'familing'
    }]
});