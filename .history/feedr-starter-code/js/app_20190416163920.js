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

// const jsonOfjQueryArticles = {};
// const arrayOfjQueryArticles = [];


$('.api ').on('click', function(event){
jsonOfjQueryArticles = {};
arrayOfjQueryArticles = [];
event.preventDefault();
if (event.currentTarget.id === '1') {
  redditApi();
  
}


if (event.currentTarget.id === '2') {
  diggApi();
}

})








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
  
  
   
$('.article').on('click', function(event){
  console.log('dsd')
  event.preventDefault();
  displayPopUp(event.currentTarget.id);
  
})

  
  })}
  



  function diggApi() {
    $.get('https://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'apiKey=ba2974daef134da89b901a3c6a26e815', 
      function(results){
        console.log(results.articles)
    
        results.articles.forEach((article, index) => {
      let digg_json = {
    
         'category' : article.source.name,
         'title' : article.title,
         'imgSrc' : article.urlToImage,
         'articleURL' : article.url,
         'description' : article.description,
         'apiUsed' : 'News'
        
    
    
    
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
    
  


    function displayPopUp(article) {
      console.log(article)
      console.log('dsdsdd')

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

  

