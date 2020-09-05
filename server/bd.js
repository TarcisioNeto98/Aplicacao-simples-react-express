exports.banco = function (){
    var pool = require('pg');
    var banco = new pool.Pool({
        host: 'localhost',
        password: 'neto1998',
        database: 'escola',
        user: 'postgres',
        port: 5432
    });
    return banco;
}
