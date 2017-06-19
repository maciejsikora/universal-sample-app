import fs from 'fs';
import path from 'path';
import universalApp from '../src/app'
import { Server } from 'http';
import Express from 'express';

const serverApp = new Express();
const server = new Server(serverApp);
const html = fs.readFileSync(path.join(__dirname, '../src/html/index.html'), 'utf8');

serverApp.use(Express.static(path.join(__dirname, '../dist')));

const route = (url) => {
  serverApp.get(url, (req,res) => {
    console.log('--- FAT SERVER IS RENDERING - ' + req.url + ' ---');
    universalApp.init(html.replace(`<script id="init"></script>`,`<script>window.lastRoute = "${url}"</script>`)); // add info about rendered site
    universalApp.runPage(url, (renderedPage) => {
      res.send(renderedPage);
    });
  });
};

route('/');
route('/matrix');
route('/madmax');
route('/blade-runner');

const port = 3101;
server.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.info(`FAT Server running on http://localhost:${port}`);  console.info(`
      ------
      | @ @ |
    ((       ))
    |    {}   |    FAT SERVER
    -----------
  ###############
 ##################
#@@ ########### @@#
#@@ ########### @@#
 #@@ ######### @@#
  ##@@ ##### @@##
  @@@@@@@@@@@@@@@@
  @@@@@      @@@@@
  @@@@       @@@@@
@@@@@@@@    @@@@@@@
    `);
});
