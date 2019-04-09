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
    console.log(json);
    console.log(json.data);
    console.log(json.data.feed);
    $("#popUp").toggleClass("hidden");
    $("#main").html('');
    $.each(json.data.feed, function(key, value) {
      console.log(value.content);
      console.log(value.content.url);
      let Article= `<article class="article">
                      <section class="featuredImage">
                        <img src="${value.content.media.images[0].url}" alt="img" />
                      </section>
                      <section class="articleContent">
                          <a href="${value.content.url}"><h3>${value.content.title}</h3></a>
                          <h6>${value.content.tags[0].display_name}</h6>
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

$( "#SourceSet" ).on( "click", "li", function( event ) {
  event.preventDefault();
  console.log( $( this ).text() );
});