//             .,ad88888888baa,
//         ,d8P"""        ""9888ba.
//      .a8"          ,ad88888888888a
//     aP'          ,88888888888888888a
//   ,8"           ,88888888888888888888,
//  ,8'            (888888888( )888888888,
// ,8'             `8888888888888888888888
// 8)               `888888888888888888888,
// 8                  "8888888888888888888)
// 8                   `888888888888888888)
// 8)                    "8888888888888888
// (b                     "88888888888888'
// `8,        (8)          8888888888888)
//  "8a                   ,888888888888)
//    V8,                 d88888888888"
//     `8b,             ,d8888888888P'
//       `V8a,       ,ad8888888888P'  
//          ""88888888888888888P"     
//               """"""""""""
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
