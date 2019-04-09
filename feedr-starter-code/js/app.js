var template = {
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
      parent.insertAdjacentHTML("beforeend", liHtml);
    });
  }
};
var api = {
  getNews: source => {
    try {
      return fetch(source.link).then(res => {
        return res.json().then(json => json.data);
      });
    } catch (e) {
      console.log(e);
    }
  }
};
(function() {
  var sources = [
    {
      key: "reddit",
      title: "Reddit",
      link: "http://digg.com/api/news/popular.json"
    },
    {
      key: "mashable",
      title: "Mashable",
      link: "http://mashable.com/stories.json"
    },
    { key: "digg", title: "Digg", link: "http://mashable.com/stories.json" }
  ];
  // get DOMs
  var sourcesUl = document.getElementById("sourcesUl");
  template.createUl(sources, sourcesUl);
  api.getNews(sources[0]).then(data => {
    data = res;
    console.log(data)
  });
  
  
})();
