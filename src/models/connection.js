const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('../../bagy.db', (err) => {
  if (err) {
    console.error(err.message);
  }
})

module.exports = db;
