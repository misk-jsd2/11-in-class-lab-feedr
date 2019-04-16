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

const arrayOfjQueryArticles = {};

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
   

  arrayOfjQueryArticles[index] = reddit_json
})

appendArticles(arrayOfjQueryArticles);


$('.article ').on('click', function(event){
    event.preventDefault();
    displayPopUp(event.currentTarget.id);
    
})
 

})

function displayPopUp(article) {

  console.log(arrayOfjQueryArticles[article])
  
  let category = article.data.subreddit;
  let title = article.data.title;
  let imgSrc = article.data.thumbnail;
  let articleURL = article.data.url;

  let articlePopUp = `  <div class="container">
  <h1>${title}</h1>
  <p>
    ${title}
  </p>
  <a href="${articleURL}" class="popUpAction" target="_blank">Read more from source</a>
</div>`

  $("#popUp").removeClass('hidden loader')

  $('#popUp > div').html(article);




}
function appendArticles(list) {

  $('#main').append(list)




}









