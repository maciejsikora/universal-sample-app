export default function (data) {
  return {
    getHtml: () => {
      return `
        <p>Title: ${data.title}</p>
        <p>Year: ${data.year}</p>
        <p>Type: ${data.type}</p>
        <a id="show-desc-button" class="waves-effect waves-light btn">Show description</a>
        <p id="desc" style="display:none"> ${data.description}</p>
        `;
    }
  }
};
