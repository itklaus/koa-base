
if (process.env.TRACE) {
  require('./libs/trace');
}

const Koa = require('koa');
const app = new Koa();
const PORT = process.env.PORT || 5000

const config = require('config');

const path = require('path');
const fs = require('fs');

const handlers = fs.readdirSync(path.join(__dirname, 'handlers')).sort();
handlers.forEach(handler => require('./handlers/' + handler).init(app));

app.use(async ctx => {
  
  ctx.body = ctx.render('./templates/index.pug');

});

app.listen(PORT, () => console.log(`Listenong on ${PORT}`));
