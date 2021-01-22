let mysql = require('mysql');
// let dbConfig = require('../config/db.config');
let {HOST, USER,PASSWORD, DATABASE} = require('../config/db.config')

let pool = mysql.createPool({
  connectionLimit: 10,
  host:HOST ,
  user:USER,
  password: PASSWORD,
  database: DATABASE
});

// 封装方法
module.exports ={
   query(sql,values){
    return new Promise((resolve,reject)=>{
      pool.getConnection(function (err, connection) {
        if (err) {
          reject(err);
        } else {
          connection.query(sql,values,function (error, results) {
              connection.release(); 
              if (error) {
                reject(err);
              } else {
                resolve(results);
              }
            }
          );
        }
      });
    })
  
  }
}