var AWS = require('aws-sdk');

exports.handler = function handler(event, context, callback) {

	if (!event.body) {
		callback({httpStatus:400,body:"Missing Image!"});
		return;
	}

	const R = new AWS.Rekognition();
	const params = {Image:{Bytes: Buffer.from(event.body,'base64')}};

	R.detectLabels(params,function(err,data) {
		if (!err){
			callback(null,{body:JSON.stringify(data)});
			return;
		}
		console.warn(err, err.stack);
		callback({httpStatus:400,body:"Something has gone wrong!"});
	});
}