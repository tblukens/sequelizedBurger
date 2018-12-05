const con = require ('../config/connection.js');

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];

    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
        var value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
            // e.g. {sleepy: true} => ["sleepy=true"]
            arr.push(key + "=" + value);
        }
    }

    // translate array of strings to a single comma-separated string
    return arr.toString();
}

const orm = {
    selectAll: function(table, cb){
        let queryString = `SELECT * FROM ${table}`;
        con.query(queryString, (err,res) => {
            if (err) throw err;
            cb(res)
        })
    },
    insertOne: function(table, col, val, cb){
        let queryString = `INSERT INTO ${table} (${col}) VALUES ("${val}");`;
        // console.log(queryString)
        con.query(queryString, (err, res) => {
            if (err) throw err;
            cb(res);
        })
    },
    updateOne: function(table, objColVals, id, cb){
        let val = objToSql(objColVals);
        let queryString = `UPDATE ${table} SET ${val} WHERE id = ${id}`
        console.log(queryString)
        con.query(queryString, (err, res) => {
            if (err) throw err;
            cb(res);
        })
    }    
}

module.exports = orm;