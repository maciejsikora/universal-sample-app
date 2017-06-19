import whoAmI from './who-am-i';
let rootElement;
let layout;

export default {
  setLayout: html => {
    layout = html;
  },
  setRootElement: elementId => {
    rootElement = whoAmI.server() ? null : document.getElementById(elementId);
  },
  render: content => {
    if (whoAmI.server()) {
      return layout.replace(`<div id="app"></div>`, `<div id="app">${content.getHtml()}</div>`);
    } else {
      return rootElement.innerHTML = content.getHtml();
    }
  }
};
