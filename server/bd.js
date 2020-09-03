exports.banco = function (){
    var pool = require('pg');
    var banco = new pool.Pool({
        host: process.env.HOST,
        password: process.env.PASSWORD,
        database: process.env.BD,
        user: process.env.USER,
        port: process.env.PORT
    });
    return banco;
}
