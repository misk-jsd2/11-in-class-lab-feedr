var template = {
  // createElement:(element,text)=>{
  //   let el = document.createElement(element);
  //   let t = document.createTextNode(text);
  //   el.appendChild(t)
  //   return el
  // },
  createUl: (sources, parent) => {
    let createLi = (title, href) => {
      return `
        <li>
            <a href="${href}">${title}</a>
        </li>
      `;
    };
    sources.forEach(source => {
      let liHtml = createLi(source.title, "#");
      parent.insertAdjacentHTML('beforeend',liHtml);
    });
  }
};

(function() {
  var sources = [
    { key: "reddit", title: "Reddit" },
    { key: "mashable", title: "Mashable" },
    { key: "digg", title: "Digg" }
  ];
  // get DOMs
  var sourcesUl = document.getElementById("sourcesUl");
  template.createUl(sources, sourcesUl);
})();
