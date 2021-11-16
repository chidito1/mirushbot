const fs = require("fs");
const Wuser = JSON.parse(fs.readFileSync('./database/warn.json'));

/**
 * Verifique los datos de usuarios prohibidos en la base de datos
 * @param { string } id 
 */
const cekWarn = (id) => {
  let position = false;
  Object.keys(Wuser).forEach((i) => {
    if (Wuser[i].id === id) {
      position = i;
    }
  });
  if (position !== false) {
    return Wuser[position].warn;
    }
};

/**
 * cambiar el estado del usuario prohibido en la base de datos
 * @param { string } id
*/
const addWarn = (id) => {
  let position = false;
  Object.keys(Wuser).forEach((i) => {
    if (Wuser[i].id === id) {
      position = i;
    }
  });
  if (position !== false) {
    Wuser[position].warn += 1
    fs.writeFileSync('./database/warn.json', JSON.stringify(Wuser, null, "\t"));
  }
};

/**
 * cambiar el estado del usuario prohibido en la base de datos
 * @param { string } id
 * @param { number } Monto
*/
const delWarn = (id, jumlah) => {
  let position = false;
  Object.keys(Wuser).forEach((i) => {
    if (Wuser[i].id === id) {
      position = i;
    }
  });
  if (position !== false) {
    Wuser[position].warn -= jumlah;
    fs.writeFileSync('./database/warn.json', JSON.stringify(Wuser, null, "\t"));
  }
};

module.exports = {
  Wuser, 
  addWarn, 
  delWarn, 
  cekWarn
 };