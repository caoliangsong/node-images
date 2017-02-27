let images = require('images')
let path = require('path')
let inputDir = path.resolve('./input/')
let outputDir = path.resolve('./output/')
let fs = require('fs')

let errors = 0;

fs.readdir(inputDir, function(err,files){
	if(err) throw err;
	for(let index = 0,len = files.length;index < len;index++){
		let file = files[index];
		let ext = file.substring(file.length-4,file.length)
		if(ext.indexOf('.') === -1){
			console.log(`发现1个不正常的图片${file}`);
			errors++;
			continue;
		} 
		// if(index > 10) break;
		images(inputDir+'/'+file)
		.size(390)
		.draw(images("./logo.png"),270,188)
		.save(outputDir+'/report'+index+ext,{quality:80});
		console.log(`生成新图片：report${index+ext}成功`);
	}
	console.log(`---------------------\n共有${errors}个错误图片\n---------------------`)

})
