import {createTable} from './sqlite';
import db_query from './table-sqlite';
const tables = () => {
  /**
   * Tambahin table-tablenya di sini
   * createTable(nama_table, isi_table)
   */

  // Table USERS
  createTable('users', db_query.tbl_user)
    .then(res => {
      // console.log(res);
    })
    .catch(err => {
      // console.log(err);
    });
    
  // // Table PRODUCTS
  // createTable('products', db_query.tbl_user)
  //   .then(res => {
  //     console.log(res);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
};

export default tables;
