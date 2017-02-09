var images = require('images')
var path = require('path')
var inputDir = path.resolve('./randoms/')
var outputDir = path.resolve('./output/')
var fs = require('fs')

fs.readdir(inputDir, function(err,files){
	if(err) throw err;
	// console.log(files);
	files.forEach(function(file,index){
		images(inputDir+'/'+file)
		.draw(images("./logo.png"),180,150)
		.save(outputDir+'/'+file,{quality:80})
	})
})
