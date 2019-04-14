/*
  Please add all Javascript code to this file.
*/

// Create 3 functions for each seperate API/AJAX call

// Create the API endpoint/URL from the documentation. Register for a key if needed.

// Make the AJAX call and parse the response. To start, console.log(response) and find the following: For each article, find the image (if there is one), the article title, category, description, URL to the actual article

// Assign those pieces of info to variables.

// const arrayOfjQueryArticles = []

// arrayOfArticles.forEach((article, index) => {
//   let category = article.category
//   let title = category.title
//   let imgSrc = category.src

//   let newArticle = `
//   <article id=${index} class="article">
//     <section class="featuredImage">
//       <img src="${imageSrc}" alt="" />
//     </section>
//     <section class="articleContent">
//         <a href="${articleURL}"><h3>${title}</h3></a>
//         <h6>${category}</h6>
//     </section>
//     <section class="impressions">
//       526
//     </section>
//     <div class="clearfix"></div>
//     </article>
//   `

//   arrayOfjQueryArticles.push(newArticle)
// })

// $('#main').append(newArticle)


//------------------------------

$(function () {
  $.get("https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json",
    function (results) {
      console.log(results);
      results.data.feed.forEach(function (result) {
        // $(".articleContent").append("<li>" + result.content.title + "</li>")
        var article = $("<article/>").addClass('article');
        var section1 = $("<section/>").addClass('featuredImage');
        var img = $("<img/>").attr('src', result.content.media.images[0].url);
        var section2 = $("<section/>").addClass('articleContent');
        var link = $("<a/>").attr('href','index.html');
        var h3 = $("<h3/>").html(result.content.title).css('color', 'black');;
        var h6 = $("<h6/>").html("Lifestyle");
        var div = $("<div/>").addClass('clearfix').appendTo(section2);
        var p = $("<p/>").html(result.content.description);

        $('.container').append(article);

        $('.article').append(section1);
        $('.featuredImage').append(img);
        $('.article').append(section2);
        $('.articleContent').append(link);
        $('.articleContent').append(h3);
        $('.articleContent').append(h6);
        $('.articleContent').append(link);
        $('.articleContent').append(p);
      })
    })
});