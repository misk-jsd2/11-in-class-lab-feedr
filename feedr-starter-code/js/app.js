var newsAPIurl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKeyNewsapi}`;
var newsSource=[
  {Name: "DIGG",url: "http://digg.com/api/news/popular.json"},
  {Name: "NewsAPI",url: newsAPIurl},
  {Name: "Mashable",url: "http://mashable.com/stories.json"}
];
var current= newsSource[0];

$(document).ready(function(){
  
  getDIGG(current);
  
});
function refresh(source){
  if(current.Name==='DIGG'){
    getDIGG(current);
  }
  else if(current.Name==='Mashable'){
    getMashable(current);
  }
  else{
    getNewsAPI(current);
  }
}
$( "#SourceSet" ).on( "click", "li", function( event ) {
  var changed =$( this ).text();
  current= newsSource.find(function(element) {
    return element.Name ==changed;
  })
  refresh(current);
});

function getNewsAPI(source){
  fetch(source.url)
  .then(function(response) {
    $("#popUp").toggleClass("hidden");
    return(response.json());
    })
  .then(function(json) {
  $("#popUp").toggleClass("hidden");
  $("#main").html('');
  console.log(json.articles);
  $.each(json.articles, function(key, value) {
    let Article = `<article class="article">
    <section class="featuredImage">
      <img src="${value.urlToImage}" alt="img" />
    </section>
    <section class="articleContent">
        <a href="${value.url}"><h3>${value.title}</h3></a>
        <h6>${value.source.name}</h6>
    </section>
    <section class="impressions">
      526
    </section>
    <div class="clearfix"></div>
  </article>`;
  $("#main").append(Article);
  })
  });
}

function getMashable(source){
  fetch(source.url)
  .then(function(response) {
    $("#popUp").toggleClass("hidden");
    return(response.json());
    })
  .then(function(json) {
  $("#popUp").toggleClass("hidden");
  $("#main").html('');
  console.log(json.new);
  $.each(json.new, function(key, value) {
    let Article = `<article class="article">
    <section class="featuredImage">
      <img src="${value.image}" alt="img" />
    </section>
    <section class="articleContent">
        <a href="${value.link}"><h3>${value.title}</h3></a>
        <h6>${value.channel}</h6>
    </section>
    <section class="impressions">
      526
    </section>
    <div class="clearfix"></div>
  </article>`;
  $("#main").append(Article);
  })
  });
}

function getDIGG(source){
  fetch(source.url)
  .then(function(response) {
  $("#popUp").toggleClass("hidden");
  return(response.json());
  })
  .then(function(json) {
  $("#popUp").toggleClass("hidden");
  $("#main").html('');
  console.log(json.data.feed);
  $.each(json.data.feed, function(key, value) {
  let Article= `<article class="article">
                    <section class="featuredImage">
                      <img src="${value.content.media.images[0].url}" alt="img" />
                    </section>
                    <section class="articleContent">
                        <a href="${value.content.url}"><h3>${value.content.title}</h3></a>
                        <h6>${value.content.tags[0].display_name}</h6>
                    </section>
                    <section class="impressions">
                      526
                    </section>
                    <div class="clearfix"></div>
                  </article>`;
  $("#main").append(Article);
  });
  });
}