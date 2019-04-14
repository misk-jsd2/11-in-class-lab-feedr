/*
  Please add all Javascript code to this file.
*/


// Create 3 functions for each seperate API/AJAX call

// Create the API endpoint/URL from the documentation. Register for a key if needed.

// Make the AJAX call and parse the response. To start, console.log(response) and find the following: For each article, find the image (if there is one), the article title, category, description, URL to the actual article

// Assign those pieces of info to variables.




var data = []

function changePopUp (e,index) {
  e.preventDefault();
  let article = data[index]
  var $popUpTitle = $("#popUp h1");
  var $clickedTitle = $(e.target);
  var $selectedArticle = $clickedTitle.closest('.article');
  var $popUp = $("#popUp");
  var $popUpContent = $("#popUp p");
  var $popUpLink = $(".popUpAction");
  var titleText = article.title
  var contentText = article.description
  var storyLink = article.url
  $popUpTitle.html(titleText);
  $popUpContent.html(contentText);
  $popUpLink.attr("href", storyLink);
  $popUp.removeClass("loader hidden");
}


(function() {

searchDigg()
  
})()


function createHtml(arrayOfArticles){


var arrayOfjQueryArticles=[]
arrayOfArticles.forEach((article, index) => {
 var category = ''
  let newArticle = `
  <article onclick="changePopUp(event,${index})" id="${index}" class="article">
    <section class="featuredImage">
      <img src="${article.image}" alt="" />
    </section>
    <section class="articleContent">
        <a href="${article.url}"><h3>${article.title}</h3></a>
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
$('#main').append(arrayOfjQueryArticles)
}
  var $closePopUp = $(".closePopUp");
  var $popUp = $("#popUp");

$closePopUp.click(function(e) {
  e.preventDefault();
  $popUp.addClass("loader hidden");
})



function searchDigg() {
$('#main').html('')

$('#popUp').removeClass('hidden')
  $.get("http://digg.com/api/news/popular.json",function(respons){
   respons.data.feed.forEach(function(article) {
    var articleobject = {}
    articleobject.title = article.content.title
    articleobject.url = article.content.url
    articleobject.image = article.content.media.images[0].url
    articleobject.description = article.content.description
    data.push(articleobject)

  })
   createHtml(data)
   $('#popUp').addClass('hidden')

}) }
var $sourceLink = $(".sourceLink");

$sourceLink.click(function(){
      searchDigg();

})