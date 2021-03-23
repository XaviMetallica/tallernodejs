const promise = require('bluebird');
const options = {
    promiseLib:promise
};
const pgp= require('pg-promise')(options);

//host, usuario, contraseña, nombreBD, puerto
const cn = 'postgresq://postgres:halofran50@localhost:5432/event_uc';

const db = pgp(cn);

module.exports = db;