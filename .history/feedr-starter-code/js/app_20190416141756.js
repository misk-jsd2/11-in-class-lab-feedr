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

$.get("https://www.reddit.com/top.json", 
  function(results){
    console.log(results);

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


$('.article ').on('click', function(event){
    event.preventDefault();
    displayPopUp(event.currentTarget.id);
    
})
 

})

function displayPopUp(article) {

  let jsonArticle = jsonOfjQueryArticles[article]


  let articlePopUp = `  
  <div id="popUp" class="">
  <a href="" class="closePopUp">X</a>
  <div class="container">
  <div class="container">
  <h1>${jsonArticle.title}</h1>
  <p>
    ${jsonArticle.title}
  </p>
  <a href="${jsonArticle.articleURL}" class="popUpAction" target="_blank">Read more from source</a>
</div>

`

 $detail = $('').html(articlePopUp);

  // $('#popUp > div').html(articlePopUp);
  $('#main').append($detail)




}
function appendArticles(list) {

  $('#main').append(list)




}









