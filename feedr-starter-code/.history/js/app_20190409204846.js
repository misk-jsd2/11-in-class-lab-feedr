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

const arrayOfjQueryArticles = [];

$.get("https://www.reddit.com/top.json", 
  function(results){
    console.log(results);

    results.data.children.forEach((article, index) => {
  let category = article.data.subreddit;
  let title = article.data.title;
  let imgSrc = article.data.thumbnail;
  let articleURL = article.data.url;
  let apiUsed = 'Reddit'
  

  let newArticle = `
  <article id=${index} class="article">
    <section class="featuredImage">
      <img src="${imgSrc}" alt="" />
    </section>
    <section class="articleContent">
        <a href=""><h3>${title}</h3></a>
        <h6>${category}</h6>
    </section>
    <section class="impressions">
      ${apiUsed}
    </section>
    <div class="clearfix"></div>
    </article>
  `
   

  arrayOfjQueryArticles.push(newArticle)
})


$('.article ').on('click', function(event){
    event.preventDefault();
    console.log(event);
})
 

})

function displayPopUp(article) {
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

  $('#popUp > div').html(articlePopUp);




}
function appendArticles(list) {

  $('#main').append(list)




}









