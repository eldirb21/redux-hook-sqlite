var SQLite = require('react-native-sqlite-storage');

var db = SQLite.openDatabase('test.db');

export const createTable = (tableName, values) => {
  var newValues = [];
  Object.entries(values).map(([key, value]) => {
    newValues.push(' ' + key + ' ' + value);
  });

  return new Promise((resolve, reject) => {
    db.transaction(txn => {
      // txn.executeSql(`DROP TABLE IF EXISTS ${tableName}`, []);
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS ${tableName} (${newValues.toString()})`,
        [],
        (sqlTxn, res) => {
          resolve(`Table "${table}" created successfully`);
        },
        err => reject(`Table "${table}" creating error => ` + err.message),
      );
    });
  });
};

export const getAll = tableName => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(`SELECT * FROM ${tableName}`, [], (tx, results) => {
        var len = results.rows.length;
        if (len > 0) {
          for (let i = 0; i < len; i++) {
            let row = results.rows.item(i);
            resolve(row);
          }
        } else {
          reject('No user found');
        }
      });
    });
  });
};
export const getSingle = (tableName, key) => {
  var dataKey = [];
  var dataValue = [];
  Object.entries(key).map(([key, value]) => {
    dataKey.push(`${key} = ?`);
    dataValue.push(value);
  });
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM ${tableName} WHERE ${dataKey[0].toString()}`,
        [dataValue[0]],
        (tx, results) => {
          setTimeout(() => {
            var len = results.rows.length;
            if (len > 0) {
              let res = results.rows.item(0);
              resolve(res);
            } else {
              reject('No user found');
            }
          }, 3000);
        },
      );
    });
  });
};
export const post = (tableName, data) => {
  //pertama buat variable penampuang
  var dataKey = [];
  var dataValue = [];
  var dataLenght = [];
  Object.entries(data).map(([key, value]) => {
    dataKey.push(key);
    dataValue.push(value);
    dataLenght.push('?');
  });
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `INSERT INTO ${tableName} (${dataKey.toString()}) VALUES (${dataLenght.toString()})`,
        dataValue,
        (tx, results) => {
          setTimeout(() => {
            if (results.rowsAffected > 0) {
              resolve(`Insert into ${tableName} is succesfully!`);
            } else reject('Registration Failed');
          }, 3000);
        },
      );
    });
  });
};
export const update = (tableName, key) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `UPDATE ${tableName} set user_name=?, user_contact=? , user_address=? where user_id=?`,
        [userName, userContact, userAddress, inputUserId],
        (tx, results) => {
          if (results.rowsAffected > 0) {
            resolve('Success', 'User updated successfully');
          } else reject('Updation Failed');
        },
      );
    });
  });
};
export const deletes = (tableName, key) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `DELETE FROM  ${tableName} where user_id=?`,
        [key],
        (tx, results) => {
          if (results.rowsAffected > 0) {
            resolve('Success', 'User deleted successfully');
          } else {
            reject('Please insert a valid User Id');
          }
        },
      );
    });
  });
};
