import router from './router';
import renderer from './renderer';
import binder from './binder';
import movieContent from './content/movie.content';
import mainContent from './content/main.content';
import whoAmI from './who-am-i';

const app = {
  init: (layout) => {
    renderer.setLayout(layout);
    renderer.setRootElement('app');
    if (whoAmI.client()) {
      if (window.lastRoute) {
        router.setLastRouteUrl(window.lastRoute);
        app.bind();
      } else {
        app.runPage(window.location.pathname, app.bind);
      }
    }
  },
  bind: () => {

    const bindDesc = () => {
      binder.getElement('#show-desc-button').bind('click', (e) => {
        binder.getElement('#desc').show();
        binder.getElement('#show-desc-button').hide();
      });
    };

    const bindMenu = () => {
      binder.getElement('#menu').bind('click', (e) => {
        e.preventDefault();
        if (e.target.href) {
          const url = '/' + e.target.href.split('/').pop();
          app.runPage(url, bindDesc);
        }
      });
    };

    bindMenu();
    bindDesc();
  },
  runPage: (url, callback) => {
    // main page
    if (url === '/') {
      return callback(renderer.render(new mainContent()));
    }

    // movies
    return router.routeTo(url)
    .then((response) => {
      return new movieContent(response);
    })
    .then((content) => {
      return renderer.render(content);
    })
    .then(callback)
    .catch(() => {});
  }
};

export default app;
