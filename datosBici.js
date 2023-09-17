const fs= require('fs');
const biciJSON= fs.readFileSync('./bici.json','utf-8');
const bici= JSON.parse(biciJSON)
module.exports=bici;
