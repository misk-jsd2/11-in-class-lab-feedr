var newsSource=[
  {Name: "DIGG",url: "https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json"},
  {Name: "NewsAPI",url: "https://newsapi.org/v2/top-headlines?country=us&apiKey="+apiKeyNewsapi},
  {Name: "Mashable",url: "https://accesscontrolalloworiginall.herokuapp.com/http://mashable.com/stories.json"}
];
articleinfo={image:'', url:'',title:'',tag:'' ,description:''};
var current= newsSource[0];

$(document).ready(function(){
  
  getDIGG(current);
  
});
$( '#SourceSet' ).on( 'click', 'li', function( event ) {
  var changed =$( this ).text();
  current= newsSource.find(function(element) {
    return element.Name ==changed;
  })
  refresh(current);
});


$('#main').on('click', '.articleContent a', function(e) {
  e.preventDefault();
  console.log(e);
  console.log($(this).attr( "href" ));
  $('#popUp .container').find('h1').text($(this).children().html());
  $('#popUp .container').find('p').text($(this).parent().find('h6').text());
  $('#popUp .container').find('a').attr("href", $(this).attr( "href"));
  $('#popUp').removeClass('hidden');
  $('.closePopUp').removeClass('hidden');
  $('#popUp').removeClass('loader');
  $(".closePopUp").on("click", function(){
    $('#popUp').addClass('hidden');
    $('#closePopUp').addClass('hidden');
  });
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
    articleinfo.image=value.urlToImage;
    articleinfo.url=value.url;
    articleinfo.title=value.title;
    articleinfo.tag=value.source.name;
  $("#main").append(getArticle(articleinfo));
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
    articleinfo.image=value.image;
    articleinfo.url=value.link;
    articleinfo.title=value.title;
    articleinfo.tag=value.channel;
    //articleinfo.description=value.content.plain;
  $("#main").append(getArticle(articleinfo));
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
  articleinfo.image=value.content.media.images[0].url
  articleinfo.url=value.content.url;
  articleinfo.title=value.content.title;
  articleinfo.tag=value.content.tags[0].display_name;
  $("#main").append(getArticle(articleinfo));
  });
  });
}
function getArticle(article){
  return `<article class="article">
    <section class="featuredImage">
      <img src="${article.image}" alt="img" />
    </section>
    <section class="articleContent">
        <a href="${article.url}"><h3>${article.title}</h3></a>
        <h6>${article.tag}</h6>
    </section>
    <section class="impressions">
      526
    </section>
    <div class="clearfix"></div>
  </article>`;
}