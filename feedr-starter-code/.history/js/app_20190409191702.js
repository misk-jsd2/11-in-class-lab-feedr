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



$.get("https://www.reddit.com/top.json", 
  function(results){
    console.log(results);
  //   results.data.feed.forEach(function(result){
  //     $("ul").append("<li>"+result.content.title+"</li>")
  // })
})

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