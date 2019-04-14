/*
  Please add all Javascript code to this file.
*/

// Create 3 functions for each seperate API/AJAX call

// Create the API endpoint/URL from the documentation. Register for a key if needed.

// Make the AJAX call and parse the response. To start, console.log(response) and find the following: For each article, find the image (if there is one), the article title, category, description, URL to the actual article

// Assign those pieces of info to variables.

const arrayOfjQueryArticles = [];


function show() {
  var newsrUrl = "https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json";


  $.ajax({
    url: newsrUrl,
    type: 'GET',
    data: {

    },
    success: function (response) {

      console.log(response.data.feed)
      for (var i=0; i<response.data.feed.length; i++) {

        let description = response.data.feed[i].content.description
        let title = response.data.feed[i].content.title
        let imgSrc = response.data.feed[i].content.media.images[0].original_url
        let articleURL = response.data.feed[i].content.original_url
       
        let newArticle = `
        <article id="xyz" class="article" >
          <section class="featuredImage">
            <img src="${imgSrc}" alt="" />
          </section>
          <section class="articleContent">
              <a><h3>${title}</h3></a>
              <h6>${description}</h6>
          </section>
          <section class="impressions">
         
          </section>
          <div class="clearfix" onclick="show()"></div>
          </article>
        `
       
        arrayOfjQueryArticles.push(newArticle)
  
      }
   
      $('#main').append(arrayOfjQueryArticles)   
    
}
  })
}





