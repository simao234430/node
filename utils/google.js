var GoogleSpreadsheet = require('google-spreadsheet');
var creds = require('./client_secret.json');
const {promisify} = require('util')

async function access(datas){
  var doc = new GoogleSpreadsheet('1WjZ3mk8iAz19CkvIEcOow6MgQroBbyRDj1iNsUAK2Go');
  await promisify(doc.useServiceAccountAuth)(creds);
  const info = await promisify(doc.getInfo)();
  console.log(info);

  datas.forEach(newrow => {
    doc.addRow(1, newrow, function( err, rows ){
      if (err) console.log(err);
      console.log(rows);
  
    });
  });
}

module.exports = access;
