let http = require('http');
let server = http.createServer(function(request, response) {
	setTimeout(() => {
		response.writeHead(200, {'Content-Type': 'text/plain'});
		response.end('Hello APP\n');
	}, 100);

}).listen(8081);


server.setTimeout(95)
server.on('timeout', (req) => {
	console.log('tming out')
	console.log(req)
	req.close()
})
console.log(server.timeout)
console.log('Server started');

// end:
// [ [Function: onReadableStreamEnd],
// 	[Function: bound socketOnEnd] ],
// drain: [ [Function: ondrain], [Function: bound socketOnDrain] ],
// timeout: [Function: socketOnTimeout],
// data: [Function: bound socketOnData],
// error: [Function: socketOnError],
// close:
// [ [Function: bound socketOnClose],
// 	[Function: onServerResponseClose] ],
// resume: [Function: onSocketResume],
// pause: [Function: onSocketPause] },

// const Koa = require('koa');
// const app = new Koa();

// app.use(async ctx => {
// 	setTimeout(() => {
// 		ctx.body = 'Hello World';
// 	}, 100)
// });

// let server = app.listen(3000)
// server.timeout = 101
// console.log(server.timeout)