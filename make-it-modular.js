var myModule = require ('./myModule');
var directory= process.argv[2];
var extension = process.argv[3];
 myModule(directory , extension , (err , filteredList) =>{
  if (err) 
  return console.log(err);
  filteredList.forEach(file => {
    console.log(file)
  });
})