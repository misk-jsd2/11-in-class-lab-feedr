
$Mashable = $('#Mashable');
$Reddit = $('#Reddit');
$Digg = $('#Digg');


var urls = {
	Mashable : "http://feedr-api.wdidc.org/mashable.json"  ,
	Reddit :  'https://www.reddit.com/top.json',
	Digg :  'http://feedr-api.wdidc.org/digg.json',

}

function getArticles(url) {
	$.ajax({
		url:url,
		success: function(response){
			$articlesGoHere.empty();

			console.log(response);
			if ($source.text()=="Mashable") {
				var articles = response.hot
				articles.forEach(function(feeds){
				 var contents = template({title:feeds.title, image: feeds.feature_image, description:feeds.content.plain, url:feeds.short_url})
          		$articlesGoHere.append(contents)

			})
			} else if ($source.text()=="Reddit") {
				var articles = response.data.children
				articles.forEach(function(feeds){
				
				 
				 if (feeds.data.preview){
          if (feeds.data.preview){
	
				 var imageURL = feeds.data.preview.images[0].source.url;
				} else {
					var imageURL = 'images/article_placeholder_2.jpg'
				}
				var contents = template({title:feeds.data.title, image:imageURL, url:feeds.data.url})
          		$articlesGoHere.append(contents)
          		
			})
			} else if ($source.text()=="Digg") {
				var feed = response.data.feed;
				feed.forEach(function(feeds){
				
				 var contents = template({title:feeds.data.title, image:imageURL, url:feeds.data.url})
				 if (feeds.content.media){
			
				 	var imageURL = feeds.content.media.images[0].url;

				 }

				 var contents = template({title:feeds.data.title, image:imageURL, url:feeds.data.url})

          		$articlesGoHere.append(contents);  		
			})
			}
		}
	})
}

function hidePopUp() {
  $('#popUp').addClass("hidden");
  $("#popTitle").text('');
  $("#popDescription").text('');
  $("#LINK").attr('href','#');
}


