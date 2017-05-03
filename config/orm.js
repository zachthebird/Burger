var sequelize = require('./connection.js');

var orm = {
    selectAll: function(tableInput, cb){
        var queryString = 'SELECT * FROM ' + tableInput + ';';
        connection.query(queryString, function(err, result){
            if(err){
                throw err;
            } else {
                cb(result);
            }
        });
    },

    insertOne: function(table, cols, vals, cb){
        var queryString = 'INSERT INTO ' + table;
            queryString += ' (',
            queryString += cols.toString();
            queryString += ') ';
            queryString += vals;
            queryString += ';';
        connection.query(queryString, function(err, res){
            if (err){
                throw err; 
            } else {
                cb(res);
            }
        });
    },

    updateOne: function(table, ObjColVals, condition, cb){
        var queryString = "UPDATE " + table;
            queryString += " WHERE " + objColVals;
            queryString += ";";
    }
};