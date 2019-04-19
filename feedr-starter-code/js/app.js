var diggArticlesArray = [];
$main = $("#main");
$popUp = $('#popUp');

function getDiggArticles() {
  $popUp.removeClass('hidden');

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

      $main.append(diggArticleDOMNodes)

      $('.articleContent h3').on('click', (event) => {
        event.preventDefault()
        console.log(event.target.id)
        
        let chosenArticle = diggArticlesArray[event.target.id]

        $popUp
          .attr('class', '')
          .empty()
          .html(`
            <a href="#" class="closePopUp">X</a>
            <div class="container">
              <h1>${chosenArticle.title}</h1>
              <p>
                ${chosenArticle.description}
              </p>
              <a href=${chosenArticle.url} class="popUpAction" target="_blank">Read more from source</a>
            </div>
          `)

        $('.closePopUp').on('click', () => {
          console.log("close pop up clicked")
          $popUp.addClass('hidden');
        }); 
      })

      $popUp.addClass('hidden');
    })
}


getDiggArticles()