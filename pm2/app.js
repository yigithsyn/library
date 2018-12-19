
var pm2 = require('pm2');

var Table = require('cli-table')

pm2.connect(true, function (err) {
  if (err) {
    console.error(err);
    process.exit(2);
  }
	

  pm2.list((err, processList)=>{
		var table = new Table({head:['name','pid']})
		//table = processList
		//console.log('Name');
		processList.forEach(process=>{
    	//console.log(process.name)
			table.push([process.name, process.pid])
		})
		console.log(table.toString())
		pm2.disconnect()
  })

});

