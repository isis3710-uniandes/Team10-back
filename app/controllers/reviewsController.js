var contorller = require('./generalController');
var file  = './files/reviews.json';
exports.getAll = contorller.getAll(file);
exports.get = contorller.get(file);
exports.post = contorller.post(file);
exports.put = contorller.put(file);
exports.delete = contorller.delete(file);