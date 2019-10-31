

var GoogleSpreadsheet = require('google-spreadsheet');
// see notes below for authentication instructions!
var creds = require('./client_secret.json');
// spreadsheet key is the long id in the sheets URL
const {promisify} = require('util')

async function access(){
  var doc = new GoogleSpreadsheet('1WjZ3mk8iAz19CkvIEcOow6MgQroBbyRDj1iNsUAK2Go');
  await promisify(doc.useServiceAccountAuth)(creds);
  const info = await promisify(doc.getInfo)();
  console.log(info);
}
access()
 

  