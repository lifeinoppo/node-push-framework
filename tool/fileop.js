// the followings are all exports functions 
var fs = require('fs');
var path = require('path');
var util = require('util');

exports.copyfile = function copyfile(des,src,callback) 
{
// reference from ndir in github source repo
des=path.resolve(des);
src=path.resolve(src);

if(src===des)
{
 var msg = 'cp the same file, action not performed..'
 return msg;  // opti needed later 
}

var ws = fs.createWriteStream(des);
var rs = fs.createReadStream(src);

// add some error handing
rs.pipe(ws);

}
