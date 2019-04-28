

// Create 3 functions for each seperate API/AJAX call

// Create the API endpoint/URL from the documentation. Register for a key if needed.

// Make the AJAX call and parse the response. To start, console.log(response) and find the following: For each article, find the image (if there is one), the article title, category, description, URL to the actual article


  $(function () {

  $popUp.removeClass('hidden');

  let url = 'https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json';
  
  
  $.get(url).done(function(response) {
    let newDiggArticle = {
      description: article.content.description,
      url: article.content.original_url,
      image: article.content.media.images[0].original_url,
      title: article.content.title
    }

     
    });

   let newArticle = `
  <article id=${index} class="article">
      <section class="featuredImage">
      <img src="${imgSrc}" alt="" />
      </section>
      <section class="articleContent">
          <a href="${articleURL}"><h3>${title}</h3></a>
          <h6>${description}</h6>
      </section>
      <section class="impressions">
      526
      </section>
      <div class="clearfix"></div>
      </article>
  `;
  
  
       $main.append(diggArticleDOMNodes)


      });
  

