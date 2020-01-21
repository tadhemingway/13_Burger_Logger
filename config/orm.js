const connection = require('./connection.js');

function createQuestionMarks(num) {
    let arr = [];

    for (let i = 0; i < num; i++) {
        arr.push('?');
    }
    return arr.toString();
}

function objToSql(obj) {
    let arr = [];

    for (let key in obj) {
        let value = obj[key];

        if (Object.hasOwnProperty.call(obj, key)) {
            if (typeof value === 'string' && value.indexOf(' ') >= 0) {
                value = `'${value}'`;
            }
            arr.push(key + '=' + value);
        }
    }
    return arr.toString();
}


let orm = {
    selectAll: function (table, cb) {
        let dbQuery = `SELECT * FROM ${table};`;

        connection.query(dbQuery, function (err, res) {
            if (err) throw err;

            cb(res);
        });
    },

    create: function (table, cols, vals, cb) {
        let dbQuery = `INSERT INTO ${table} (${cols.toString()}) VALUES (${createQuestionMarks(vals.length)})`;

        console.log(dbQuery);

        connection.query(dbQuery, vals, function (err, res) {
            if (err) throw err;

            cb(res);
        });
    },

    update: function (table, objColVals, condition, cb) {
        let dbQuery = `UPDATE ${table} SET ${objToSql(objColVals)} WHERE ${condition}`;

        console.log(dbQuery);

        connection.query(dbQuery, function (err, res) {
            if (err) throw err;

            cb(res);
        });
    },

    delete: function (table, condition, cb) {
        let dbQuery = `DELETE FROM ${table} WHERE ${condition}`;

        console.log(dbQuery);

        connection.query(dbQuery, function (err, res) {
            if (err) throw err;

            cb(res);
        });
    }
};

module.exports = orm;