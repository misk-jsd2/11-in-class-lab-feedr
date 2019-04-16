/*
  Please add all Javascript code to this file.
*/

// crete 3 functions for each sperate API /AJAX call
//استخدم واحد من هذي الروابط
// News API
//The Guardian
// Mashable: http://mashable.com/stories.json
var Guardian =
var Digg = "http://digg.com/api/news/popular.json"

// crete the API endpoint /URL

//make the AJAX call and parse the response . to statrt , console loge

// for each article , find the image(if there is one), the articale title , category , descrptions
// var $Source = $('#source');
// var $search = $('#search');
// var $main = $('#main')
 // var articleContent = 'http://digg.com/api/news/popular.json'

 $(window).on('load', function() {
    $('#popUp').removeClass('hidden');
    $('#popUp a').hide();

});

 // var digg = "http://digg.com/api/news/popular.json";
 //
 // $.get(digg,function(data){ajaxCallback(data,1)}),
 $.get("https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json", function(results){
   console.log(results);
   results.data.feed.forEach(function(result){
     $("ul").append("<li>"+result.content.title+"</li>")
   })
 })
// var $searchSection = $('#search');



// const arrayOfjQueryArticles = []

var arrayOfjQueryArticles = []
var arrayOfArticles = []
// //$.get// استخدمها
$.get("https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json",
//   function(article){
//     console.log(article);
//     results.data.feed.forEach(function(article){
//       $("ul").append("<li>"+article.content.title+"</li>")
//   })
// })

arrayOfArticles.forEach((article, index) => {
  let category = article.category
  let title = category.title
  let imgSrc = category.src

  let newArticle = `
  <article id=${index} class="article">
    <section class="featuredImage">
      <img src="${imageSrc}" alt="" />
    </section>
    <section class="articleContent">
        <a href="${articleURL}"><h3>${title}</h3></a>
        <h6>${category}</h6>
    </section>
    <section class="impressions">
      526
    </section>
    <div class="clearfix"></div>
    </article>
  `

  arrayOfjQueryArticles.push(newArticle)
})

$('#main').append(newArticle)


// search dosnt work

$("#search a").on("click", function(){
   $("#search").toggleClass("active");
 });
 //it make it inactive on Enter click event
 $("#search").keydown(function(event){
   if(event.which == 20){
     if($("#search").hasClass("active")){
       $("#search").removeClass("active");
     }
   }
 });
