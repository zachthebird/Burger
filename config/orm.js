var sequelize = require('./connection.js');

var orm = {
    selectAll: function(tableName, cb){
        var queryString = 'SELECT * FROM ' + tableName + ';';
        connection.query(queryString, function(err, result){
            if(err){
                throw err;
            } else {
                cb(result);
            }
        });
    },

    insertOne: function(table, cols, vals, cb){
        var queryString = 'INSERT INTO ?? (??) VALUES (?);';

        connection.query(queryString, [table, cols, vals], function(err, res){
            if (err){
                throw err; 
            } else {
                cb(res);
            }
        });
    },

    updateOne: function(table, tableColumn, newVal, burgId, cb){
        var queryString = "UPDATE ?? SET ?? TO ? WHERE id = ?" ;
        connection.query(queryString, [table, tableColumn, newVal, burgId], function(err, res){
            if(err){
                throw err;
            } else {
                cb(res);
            }
        });
    }
};