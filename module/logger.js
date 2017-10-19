
module.exports = function(module) {

	return function() {
		var args = [module.filenmae].concat([].slice.call(arguments));
		console.log.apply(console, arguments);
	};
};