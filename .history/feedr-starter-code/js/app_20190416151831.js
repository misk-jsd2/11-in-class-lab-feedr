/*
  Please add all Javascript code to this file.
*/



/*
  Please add all Javascript code to this file.
*/

// Create 3 functions for each seperate API/AJAX call

// Create the API endpoint/URL from the documentation. Register for a key if needed.

// Make the AJAX call and parse the response. To start, console.log(response) and find the following: For each article, find the image (if there is one), the article title, category, description, URL to the actual article

// Assign those pieces of info to variables.

const jsonOfjQueryArticles = {};
const arrayOfjQueryArticles = [];
function redditApi() {
$.get("https://www.reddit.com/top.json", 
  function(results){


    results.data.children.forEach((article, index) => {
  let reddit_json = {

     'category' : article.data.subreddit,
     'title' : article.data.title,
     'imgSrc' : article.data.thumbnail,
     'articleURL' : article.data.url,
     'apiUsed' : 'Reddit'
    



  }
 

  let newArticle = `
  <article id=${index} class="article">
    <section class="featuredImage">
      <img src="${reddit_json.imgSrc}" alt="" />
    </section>
    <section class="articleContent">
        <a href=""><h3>${reddit_json.title}</h3></a>
        <h6>${reddit_json.category}</h6>
    </section>
    <section class="impressions">
      ${reddit_json.apiUsed}
    </section>
    <div class="clearfix"></div>
    </article>
  `
   

  jsonOfjQueryArticles[index] = reddit_json
  arrayOfjQueryArticles.push(newArticle)
})

appendArticles(arrayOfjQueryArticles);


 



})


function displayPopUp(article) {

  let jsonArticle = jsonOfjQueryArticles[article]


  let articlePopUp = `  
 
  <a href="" class="closePopUp">X</a>
  <div class="container">
  <div class="container">
  <h1>${jsonArticle.title}</h1>
  <p>
    ${jsonArticle.description}
  </p>
  <a href="${jsonArticle.articleURL}" class="popUpAction" target="_blank">Read more from source</a>


`

 $('#popUp').html(articlePopUp);
 $('#popUp').removeClass('hidden loader');
 $('#main').css('display', 'none');
  // $('#popUp > div').html(articlePopUp);
  // $('#main').append($detail)




}
function appendArticles(list) {

  $('#main').append(list)




}


function redditApi() {
  $.get("https://www.reddit.com/top.json", 
    function(results){
  
  
      results.data.children.forEach((article, index) => {
    let reddit_json = {
  
       'category' : article.data.subreddit,
       'title' : article.data.title,
       'description' : article.data.title,
       'imgSrc' : article.data.thumbnail,
       'articleURL' : article.data.url,
       'apiUsed' : 'Reddit'
      
  
  
  
    }
   
  
    let newArticle = `
    <article id=${index} class="article">
      <section class="featuredImage">
        <img src="${reddit_json.imgSrc}" alt="" />
      </section>
      <section class="articleContent">
          <a href=""><h3>${reddit_json.title}</h3></a>
          <h6>${reddit_json.category}</h6>
      </section>
      <section class="impressions">
        ${reddit_json.apiUsed}
      </section>
      <div class="clearfix"></div>
      </article>
    `
     
  
    jsonOfjQueryArticles[index] = reddit_json
    arrayOfjQueryArticles.push(newArticle)
  })
  
  appendArticles(arrayOfjQueryArticles);
  
  
   
  
  })}
  



  function diggApi() {
    $.get("http://digg.com/api/news/popular.json", 
      function(results){
    
    
        results.data.feed.children.forEach((article, index) => {
      let digg_json = {
    
         'category' : article.content.domain,
         'title' : article.content.title_alt,
         'imgSrc' : article.data.thumbnail.images[0].url,
         'articleURL' : article.data.content.url,
         'description' : article.data.content.description,
         'apiUsed' : 'digg'
        
    
    
    
      }
     
    
      let newArticle = `
      <article id=${index} class="article">
        <section class="featuredImage">
          <img src="${digg_json.imgSrc}" alt="" />
        </section>
        <section class="articleContent">
            <a href=""><h3>${digg_json.title}</h3></a>
            <h6>${digg_json.category}</h6>
        </section>
        <section class="impressions">
          ${digg_json.apiUsed}
        </section>
        <div class="clearfix"></div>
        </article>
      `
       
    
      jsonOfjQueryArticles[index] = digg_json
      arrayOfjQueryArticles.push(newArticle)
    })
    
    appendArticles(arrayOfjQueryArticles);
    
    
     
    
    })}
    
  


  })}


  $('.article ').on('click', function(event){
    event.preventDefault();
    displayPopUp(event.currentTarget.id);
    
  })
  
  
  $('.api ').on('click', function(event){
  event.preventDefault();
  if (event.currentTarget.id === '1') {
    redditApi()
  }




