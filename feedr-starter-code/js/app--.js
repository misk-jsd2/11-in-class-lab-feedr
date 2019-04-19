/*
  Please add all Javascript code to this file.
*/

// Create 3 functions for each seperate API/AJAX call
var urls = {
	Mashable : "http://feedr-api.wdidc.org/mashable.json"  ,
	Reddit :  'https://www.reddit.com/top.json',
	Digg :  'http://feedr-api.wdidc.org/digg.json',
}

function getArticle(url) {

  $.get("http://feedr-api.wdidc.org/mashable.json", 
  function(results){
    console.log(results);
    results.data.feed.forEach(function(result){
      $("ul").append("<li>"+result.content.title+"</li>")
  })
}) 
	$.ajax({
		url:url,
		success: function(response){
			$articles1.empty();

			console.log(response);
      
      if ($source.text()=="Mashable") {
				var articles = response.hot
				articles.forEach(function(article){
				 var b = template({title:article.title, image: article.feature_image, type:article.channel, description:article.content.plain, url:article.short_url})	 
          		$articles1.append(b)
  })} else if ($source.text()=="Reddit") {
				var articles = response.data.children
				articles.forEach(function(article){
				 if (article.data.preview){
				 var imageURL = article.data.preview.images[0].source.url;
				} else {
					var imageURL = 'images/article_placeholder_2.jpg'
				}
				var b = template({title:article.data.title, image:imageURL, type: article.data.subreddit, url:article.data.url})
        $articles1.append(b)  		
      })
      
      function updateUIError() {
        alert("There was an error getting weather data :(");
      }

      $.ajax({
        url: "https://data.cityofnewyork.us/api/views/jb7j-dtam/rows.json?accessType=DOWNLOAD",
  
        // Tell YQL what we want and that we want JSON
        data: {
            // q: "select title,abstract,url from search.news where query=\"cat\"",
            format: "json"
        },
  
        // Work with the response
        success: function( response ) {
            console.log( response ); // server response
        }


// Create the API endpoint/URL from the documentation. Register for a key if needed.

// Make the AJAX call and parse the response. To start, console.log(response) and find the following: For each article, find the image (if there is one), the article title, category, description, URL to the actual article

// Assign those pieces of info to variables.

const arrayOfjQueryArticles = []

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


$(document).on("click", ".article",function() {
       console.log(this);
        $('#popTitle').text($(this).find(".title").text());
        $('#popDescription').text($(this).find("#description").text());
        $('#popUp.loader .container').show();
        $('#popUp').removeClass("hidden");
        $("#LINK").attr("href", $(this).find("#url").text());
});