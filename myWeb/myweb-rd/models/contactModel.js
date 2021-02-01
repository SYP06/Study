const db = require('./db');

module.exports = {
    saveContact(name, email, subject,comments){
        return db.query('insert into t_contact set ?', {
          name, 
          email, 
          subject,
          comments
        });
    }
}