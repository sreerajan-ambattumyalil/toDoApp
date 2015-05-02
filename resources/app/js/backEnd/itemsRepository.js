var fs = require('fs');
var file = __dirname + '/../../store/items.json';

exports.saveItems = function(arg) {
  console.log(arg);
  fs.truncate(file, 0, function(){
    console.log('File truncated');
  });
  var data = JSON.stringify(arg);
  fs.writeFile(file, data, function (err) {
    if (err) return console.log(err);
  });
};

exports.loadItems = function() {
  console.log(file);
  var dataBuffer = fs.readFileSync(file, 'utf8');
  console.log("Data : " + dataBuffer);
  if(dataBuffer.length == 0){
    dataBuffer = '[]'
  }
  console.log(dataBuffer);
  return dataBuffer;
};
