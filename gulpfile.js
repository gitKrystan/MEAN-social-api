// require all files in the gulp folder
var fs = require('fs');
fs.readdirSync(__dirname + '/gulp').forEach(function(task) {
  require('./gulp/' + task);
});
