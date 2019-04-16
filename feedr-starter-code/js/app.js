/*
  Please add all Javascript code to this file.
*/



//       let url = 'https://content.guardianapis.com/search?api-key=3e7d591d-d098-4943-9ae4-8ee8ad7a9a01'; // base URL
//       // Object storing each key and value we need in our query.
//       // This makes it clear what options we're choosing, and makes it easier
//       // to change the values or add/remove options.

//       $.get(url)
//         .done(function(response) {
//         	for(var i = 0; i<= 9; i ++ ){
// var webTitle1 = response.response.results[i].webTitle;
// var sectionName1 = response.response.results[i].sectionName;
// var pillarName1 = response.response.results[i].pillarName;
// var webUrl1 = webTitle1.link(response.response.results[i].webUrl);

//         		console.log(webTitle1);
//             console.log(sectionName1, '/' ,pillarName1);
//         		$(".articleContent").addClass(webTitle1);


          
//       }});

        /*
  Please add all Javascript code to this file.
*/

// Create 3 functions for each seperate API/AJAX call

// Create the API endpoint/URL from the documentation. Register for a key if needed.

// Make the AJAX call and parse the response. To start, console.log(response) and find the following: For each article, find the image (if there is one), the article title, category, description, URL to the actual article

// Assign those pieces of info to variables.
let urlm = 'https://content.guardianapis.com/search?api-key=3e7d591d-d098-4943-9ae4-8ee8ad7a9a01';

       $.get(urlm)
         .done(function(response) {
          // for(var i = 0; i<= 9; i ++ ){

const arrayOfjQueryArticles = []
console.log(response);

response.response.results.forEach((article, index) => {
  let category = response.response.results[index].sectionName;
  let title = response.response.results[index].webTitle;
  let imageSrc = response.response.results[index].webUrl;
  let articleURL = response.response.results[index].webUrl;
  //let index = response.response.results[i].pillarName;
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
      News
    </section>
    <div class="clearfix"></div>
    </article>
  `

  arrayOfjQueryArticles.push(newArticle)
  $('#main').append(newArticle)
})


});
 
 $("#feedr1").on("click", function(){
function myFunction() {
  var popup = document.getElementById("popUp");
  popup.classList.toggle("show");
}
});
let url = 'https://content.guardianapis.com/search?api-key=3e7d591d-d098-4943-9ae4-8ee8ad7a9a01';

       $.get(url)
         .done(function(response) {
          // for(var i = 0; i<= 9; i ++ ){
       $("#Guardian").on("click", function(){
        $("article").remove();
const arrayOfjQueryArticles = []
console.log(response);

response.response.results.forEach((article, index) => {
  let category = response.response.results[index].sectionName;
  let title = response.response.results[index].webTitle;
  let imageSrc = response.response.results[index].webUrl;
  let articleURL = response.response.results[index].webUrl;
  //let index = response.response.results[i].pillarName;
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
      News
    </section>
    <div class="clearfix"></div>
    </article>
  `

  arrayOfjQueryArticles.push(newArticle)
  $('#main').append(newArticle)
})


});
});


let url2 = 'https://newsapi.org/v2/everything?q=bitcoin&from=2019-03-15&sortBy=publishedAt&apiKey=641cf2464004442b860d841b17cb8b89';

       $.get(url2)
         .done(function(response) {
          // for(var i = 0; i<= 9; i ++ ){
    $("#Bitcoin").on("click", function(){
      $("article").remove();


const arrayOfjQueryArticles = []
console.log(response);

response.articles.forEach((article, index) => {
  let category = response.articles[index].author;
  let title = response.articles[index].title;
  let imageSrc = response.articles[index].urlToImage;
  let articleURL = response.articles[index].url;
  //let index = response.response.results[i].pillarName;
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
      News
    </section>
    <div class="clearfix"></div>
    </article>
  `

  arrayOfjQueryArticles.push(newArticle)
  $('#main').append(newArticle)
})


});
});

         let url3 = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=641cf2464004442b860d841b17cb8b89';

       $.get(url3)
         .done(function(response) {
          // for(var i = 0; i<= 9; i ++ ){
    $("#TechCrunch").on("click", function(){
      $("article").remove();


const arrayOfjQueryArticles = []
console.log(response);

response.articles.forEach((article, index) => {
  let category = response.articles[index].author;
  let title = response.articles[index].title;
  let imageSrc = response.articles[index].urlToImage;
  let articleURL = response.articles[index].url;
  //let index = response.response.results[i].pillarName;
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
      News
    </section>
    <div class="clearfix"></div>
    </article>
  `

  arrayOfjQueryArticles.push(newArticle)
  $('#main').append(newArticle)
})


});
});