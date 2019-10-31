const axios = require('axios');

async function process(id) {
  console.log(id)
  const title_data = await axios('https://jsonplaceholder.typicode.com/albums/' + id);
  //console.log(title_data.data.title);  
  //const jsonObject = JSON.parse(title_data.data)
  const users_data = await axios('https://jsonplaceholder.typicode.com/users/' + title_data.data.userId);
  //console.log(users_data.data); 
  // const title = await getTitle(id)
  // console.log(title)
  var info={"title":title_data.data.title,"username":users_data.data.username};
  return info;
};


module.exports = process;