import whoAmI from './who-am-i';

const elementBuilder = {
  build: (selector) => {

    const el = whoAmI.server() ? null : document.querySelector(selector);

    return {
      bind: (eventName, callback) => {
        return el && el.addEventListener(eventName, callback);
      },
      hide: () => {
        if (!el) { return };
        el.style.display = 'none';
      },
      show: () => {
        if (!el) { return };
        el.style.display = 'block';
      }
    };
  }
};

export default {
  getElement: (selector) => {
    return elementBuilder.build(selector);
  }
};
