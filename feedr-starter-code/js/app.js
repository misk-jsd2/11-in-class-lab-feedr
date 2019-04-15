/*
  Please add all Javascript code to this file.
*/

// Create 3 functions for each seperate API/AJAX call

// Create the API endpoint/URL from the documentation. Register for a key if needed.

// Make the AJAX call and parse the response. To start, console.log(response) and find the following: For each article, find the image (if there is one), the article title, category, description, URL to the actual article

// Assign those pieces of info to variables.

$('#sources li a').click(function(){
	  var mysource = $(this).attr("id");

	  if (mysource === "source1"){
	    $('#main.container article').remove();
	    var url = 'https://newsapi.org/v2/top-headlines?' +
           'country=sa&' +
           'apiKey=c3259ffd981d45d2a054ab2afcf73e7d';

	    var arrayOfjQueryArticles = []
	    var arrayOfArticles = []

	    $.get(url)
	    .done(function(response) {
		     for (var i=0; i<response.articles.length; i++) {

	  		  let source = response.articles[i].source.name
	  		  let title = response.articles[i].title
	    		let imgSrc = response.articles[i].urlToImage
	  		  let articleURL = response.articles[i].url
	  		  let newArticle = `
	  			 <article id=${i} class="article">
	    		  <section class="featuredImage">
	      		<img src="${imgSrc}" alt="" />
	    		  </section>
	    		  <section class="articleContent">
	        	<a href="${articleURL}"><h3>${title}</h3></a>
	        	<h6>${source}</h6>
	    		  </section>
	    		  <section class="impressions">
	      		${i+1}
	    		  </section>
	    		  <div class="clearfix"></div>
	    		  </article>
	  			 `
	  		  arrayOfjQueryArticles.push(newArticle)
		     }
		     $('#main').append(arrayOfjQueryArticles)
	    });
	  }


    if (mysource === "source2"){
      $('#main.container article').remove();
      var url = 'https://newsapi.org/v2/top-headlines?' +
           'country=au&' +
           'apiKey=c3259ffd981d45d2a054ab2afcf73e7d';

      var arrayOfjQueryArticles = []
      var arrayOfArticles = []

      $.get(url)
      .done(function(response) {
         for (var i=0; i<response.articles.length; i++) {

          let source = response.articles[i].source.name
          let title = response.articles[i].title
          let imgSrc = response.articles[i].urlToImage
          let articleURL = response.articles[i].url
          let newArticle = `
           <article id=${i} class="article">
            <section class="featuredImage">
            <img src="${imgSrc}" alt="" />
            </section>
            <section class="articleContent">
            <a href="${articleURL}"><h3>${title}</h3></a>
            <h6>${source}</h6>
            </section>
            <section class="impressions">
            ${i+1}
            </section>
            <div class="clearfix"></div>
            </article>
           `
          arrayOfjQueryArticles.push(newArticle)
         }
         $('#main').append(arrayOfjQueryArticles)
      });
    }
    if (mysource === "source3"){
      $('#main.container article').remove();
      var url = 'https://newsapi.org/v2/everything?' +
           'q=bitcoin&'+'from=2019-03-15&'+'sortBy=publishedAt&' +
           'apiKey=c3259ffd981d45d2a054ab2afcf73e7d';

      var arrayOfjQueryArticles = []
      var arrayOfArticles = []

      $.get(url)
      .done(function(response) {
         for (var i=0; i<response.articles.length; i++) {

          let source = response.articles[i].source.name
          let title = response.articles[i].title
          let imgSrc = response.articles[i].urlToImage
          let articleURL = response.articles[i].url
          let newArticle = `
           <article id=${i} class="article">
            <section class="featuredImage">
            <img src="${imgSrc}" alt="" />
            </section>
            <section class="articleContent">
            <a href="${articleURL}"><h3>${title}</h3></a>
            <h6>${source}</h6>
            </section>
            <section class="impressions">
            ${i+1}
            </section>
            <div class="clearfix"></div>
            </article>
           `
          arrayOfjQueryArticles.push(newArticle)
         }
         $('#main').append(arrayOfjQueryArticles)
      });
    }
    if (mysource === "source4"){
      $('#main.container article').remove();
      var url = 'https://newsapi.org/v2/everything?' +
           'q=apple&f'+'rom=2019-04-14&'+'to=2019-04-14&'+'sortBy=popularity&' +
           'apiKey=c3259ffd981d45d2a054ab2afcf73e7d';

      var arrayOfjQueryArticles = []
      var arrayOfArticles = []

      $.get(url)
      .done(function(response) {
         for (var i=0; i<response.articles.length; i++) {

          let source = response.articles[i].source.name
          let title = response.articles[i].title
          let imgSrc = response.articles[i].urlToImage
          let articleURL = response.articles[i].url
          let newArticle = `
           <article id=${i} class="article">
            <section class="featuredImage">
            <img src="${imgSrc}" alt="" />
            </section>
            <section class="articleContent">
            <a href="${articleURL}"><h3>${title}</h3></a>
            <h6>${source}</h6>
            </section>
            <section class="impressions">
            ${i+1}
            </section>
            <div class="clearfix"></div>
            </article>
           `
          arrayOfjQueryArticles.push(newArticle)
         }
         $('#main').append(arrayOfjQueryArticles)
      });
    }

	 });
  $("#search").click(function(){
$("#search").toggleClass("active");
});
