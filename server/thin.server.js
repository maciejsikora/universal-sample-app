import fs from 'fs';
import path from 'path';
import { Server } from 'http';
import Express from 'express';

const serverApp = new Express();
const server = new Server(serverApp);


const html = fs.readFileSync(path.join(__dirname, '../src/html/index.html'), 'utf8');

serverApp.use(Express.static(path.join(__dirname, '../dist')));
serverApp.get('*', (req, res) => {
  console.log('--- THIN SERVER IS RENDERING - ' + req.url + ' ---');
  res.status(200).send(html);
});

const port = 3102;
server.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.info(`THIN Server running on http://localhost:${port}`);
  console.info(`
         ------
         | @@ |
         |    |
         | {} |  THIN SERVER
           ||
          ####
         @####@
        @ #### @
        @ #### @
        @  ##  @
         %%%%%
         %   %
         %   $
         %   %
        ##   ##
    `);
});
