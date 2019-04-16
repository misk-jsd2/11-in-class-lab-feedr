/*
  Please add all Javascript code to this file.
*/

// Create 3 functions for each seperate API/AJAX call

// Create the API endpoint/URL from the documentation. Register for a key if needed.

// Make the AJAX call and parse the response. To start, console.log(response) and find the following: For each article, find the image (if there is one), the article title, category, description, URL to the actual article

// Assign those pieces of info to variables.
/*
  Please add all Javascript code to this file.
  var GetFirstSource = function(){
  $.ajax({
    type:'GET',
    url: 'https://newsapi.org/v2/everything?q=bitcoin&from=2019-03-15&sortBy=publishedAt&apiKey=e6564a39b1674add83fa7bd5d92cc15b',
    data: {
      format: 'json'
   },
   dataType: 'json',
    
   success: function(data) {
      console.log('Data: ' + data);   
   },
   error: function() {
      alert('Error');
   }   
  });
};
*/


var GetFirstSource = function(){
  $.get("https://newsapi.org/v2/everything?q=bitcoin&from=2019-03-15&sortBy=publishedAt&apiKey=e6564a39b1674add83fa7bd5d92cc15b", 
    function(results){
      $("#main").html('');
      results.articles.forEach(function(result){
        $("#main").append("<article class='article'><section class='featuredImage'><img src='"+result.urlToImage+"' alt=''' /></section><section class='articleContent'><a href='"+result.url+"' ><h3>"+result.title+"</h3></a><h6>"+result.source.name+"</h6></section><section class='impressions'>"+result.publishedAt+ "</section><div class='clearfix'></div></article>")
    })
  })
  };
  
  
  var GetSecondSource = function(){
    $.get("https://accesscontrolalloworiginall.herokuapp.com/https://mashable.com/stories.json", 
      function(results){
        $("#main").html('');
        results.new.forEach(function(result){
          $("#main").append("<article class='article'><section class='featuredImage'><img src='"+result.image+"' alt='' /></section><section class='articleContent'><a href='#' onclick=\"ShowSource2ArticlePopup('"+result._id+"')\"><h3>"+result.title+"</h3></a><h6>"+result.author+"</h6></section><section class='impressions'>"+result.post_date+ "</section><div class='clearfix'></div></article>")
      })
    })
    };
  
  
    var ShowPopup = function(){
        $("#popUp").removeClass("loader");
    };
  
    var ShowPopupWithLoading = function(){
        $("#popUp").removeClass("hidden");
    };
  
    var HidePopup = function(){
      $("#popUp").addClass("hidden loader");
  };
  
  var ShowSource1ArticlePopup = function(title){
    ShowPopupWithLoading();
    $.get("https://accesscontrolalloworiginall.herokuapp.com/https://mashable.com/stories.json", 
      function(results){
        
        results.new.forEach(function(result){
          var newId = title.replace(/\s/g, '');
          if(result.title === newId){
           $("#popupTitle").html(result.title);
          $("#popupContent").html(result.content.source);
          $("#popupArticleLink").attr("href", result.source);
            ShowPopup();
          }
  
      })
    })
    };
  var ShowSource2ArticlePopup = function(_id){
    ShowPopupWithLoading();
    $.get("https://accesscontrolalloworiginall.herokuapp.com/https://mashable.com/stories.json", 
      function(results){
        
        results.new.forEach(function(result){
          var newId = _id.replace(/\s/g, '');
          if(result._id === newId){
           $("#popupTitle").html(result.title);
          $("#popupContent").html(result.content.plain);
          $("#popupArticleLink").attr("href", result.link);
            ShowPopup();
          }
  
      })
    })
    };

