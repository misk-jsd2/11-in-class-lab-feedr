/*
  Please add all Javascript code to this file.
*/
$(document).ready(function(){

    fetch("http://digg.com/api/news/popular.json")
    .then(function(response) {
    console.log('Fetch response object: \n');
    console.log(response);
    $("#popUp").toggleClass("hidden");
    return(response.json());
    })
    .then(function(json) {
    console.log('Fetch: \n');
    //console.log(json);
    //console.log(json.data);
    console.log(json.data.feed);
    $("#popUp").toggleClass("hidden");
    // const arrayOfjQueryArticles = [];
    $("#main").html('');
    
    $.each(json.data.feed, function( index) {
      console.log(json.data.feed[index].content);
      let Article= `<article class="article">
                      <section class="featuredImage">
                        <img src="${json.data.feed[index].content.media.images[0].url}" alt="img" />
                      </section>
                      <section class="articleContent">
                          <a href="${json.data.feed[index].content.url}"><h3>${json.data.feed[index].content.title}</h3></a>
                          <h6>${json.data.feed[index].content.tags[0].display_name}</h6>
                      </section>
                      <section class="impressions">
                        526
                      </section>
                      <div class="clearfix"></div>
                    </article>`;
    $("#main").append(Article);
    });
    });
  
});



// $.ajax({
//   url: "http://digg.com/api/news/popular.json",
//   data: {
//       format: "json"
//   },
//   success: function (response) {
//       console.log('jQuery $.ajax():');
//       console.log(response);
//       console.log(response.data);
//   }
// });

// $.get("http://digg.com/api/news/popular.json", function(response) {
//   console.log('jQuery $.get():');
//   console.log(response);
//   console.log(response.data);
// });

