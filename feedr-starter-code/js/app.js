/*
  Please add all Javascript code to this file.
*/

/* Create 3 functions for each seperate API/AJAX call

 Create the API endpoint/URL from the documentation. Register for a key if needed.

 Make the AJAX call and parse the response. 
 To start, console.log(response) and find the following: For each article, 
 find the image (if there is one), 
 the article title, category, description, URL to the actual article

 Assign those pieces of info to variables.
*/

/*
$(document).ready(function(){
    
  $("#searchbtn").on("click",function(e){
    e.preventDefault();
    
    let query = $("#searchquery").val();
    let url = "https://newsapi.org/v2/top-headlines?q="+query+"&country=us&category=business&apiKey=bbfbe02a38fa4d99a0891738e8d14c8c";
    
    if(query !== ""){
      
      $.ajax({
        
        url: url,
        method: "GET",
        dataType: "json",
        
        beforeSend: function(){
          $("#loader").show();
        },
        
        complete: function(){
          $("#loader").hide();
        },
        
        success: function(news){
          let output = "";
          let latestNews = news.articles;
          
          for(var i in latestNews){
            output +=`
              <div class="articleContent">
              <
              </div>
            `;
          }
          
          if(output !== ""){
            $("#newsResults").html(output);
             M.toast({
              html: "There you go, nice reading",
              classes: 'green'
            });
            
          }else{
            let noNews = `<div style='text-align:center; font-size:36px; margin-top:40px;'>This news isn't available. Sorry about that.<br>Try searching for something else </div>`;
             $("#newsResults").html(noNews);
            M.toast({
              html: "This news isn't available",
              classes: 'red'
            });
          }
          
        },
        
        error: function(){
           let internetFailure = `
           <div style="font-size:34px; text-align:center; margin-top:40px;">Please check your internet connection and try again.
           <img src="img/internet.png" class="responsive-img">
           </div>`;
           
          $("#newsResults").html(internetFailure);
           M.toast({
              html: "We encountered an error, please try again",
              classes: 'red'
            });
        }
        
        
      });
      
    }else{
      let missingVal = `<div style="font-size:34px; text-align:center; margin-top:40px;">Please enter any search term in the search engine</div>`;
      $("#newsResults").html(missingVal);
       M.toast({
              html: "Please enter something",
              classes: 'red'
            });
    }
    
  });
  
});
*/


$(document).ready(function(){
    
  $("#search").on("click",function(e){
    e.preventDefault();



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
     <a href="${articleURL}"> <h3>${url}</h3></a>
    </section>
    <div class="clearfix"></div>
    </article>
  `

  arrayOfjQueryArticles.push(newArticle)
})

$('#main').append(newArticle)
  

$(function(){

  
      let url = 'https://newsapi.org/v2/top-headlines?';

      var req = new Request(url);
        fetch(req)
                .then(function(response) {
            console.log(response.json());
            })
        
      let searchOptions = {
        
        api_key: apiAKey, // stored in js/keys.js
 
        format: 'json',
        nojsoncallback: 1,
        extras: 'url_n',
        per_page: 10,
        content_type: 1,
        safe_search: 1,
        sort: 'relevance',
      };
      
      for (let key in searchOptions) {
        url += '&' + key + '=' + searchOptions[key];
      }
      console.log(url);
  
  //USE AJAX
  
       // Now that we've built our URL, we can send our GET request
       $.get(url).done(function(response) {
          console.log(response);
          if (response.stat === 'fail') {
            console.log(response.message); // point out that for end users, we'll want to use DOM manipulation, but this is a quick and dirty
        // way of seeing if there's an error while we're building the app
          } else if (response.photos.photo.length === 0) {
            console.log('No photos found!'); // same as previous
          } else {
              console.log(response.photos);
            // Handle the successful response here
            console.log('Request succeeded!');// note that we will replace this with code to handle the data when it's received; this is just
            // to make sure our code is working to this point
  
            TheAPIN(response)
  
  
          }
        });
  //APPEND RESPONSE
  
  });
  })


  function TheAPIN(response) {
     
  
      let allData = response.data.children; // not a jQuery object, so we have to use $.each below
      $.each(allData, function() {
        // photos without titles may not be carefully tagged, so exclude them 
        if (this.title !== '') {
          let elementI = $('<img>').attr('src', this.url_n).addClass('image');
          let elementT = $('<h3>').attr('articleURL',this.title).addClass('h3');
          let elementD = $('<h6>').attr('articleURL',this.category).addClass('h6');
          //let elementC = $('<>').attr(,).addClass('');
          let elementU = $('<h3>').attr('articleURL',this.url).addClass('<h3>');
          $('.images').append(elementI);
          $('.h3').append(elementT);
          $('.h6').append(elementD);
         // $('.images').append(elementC);
          $('.images').append(elementU);
        }
      });
    }

    /*function RedditF(response) {
      // get the array of photos from the response object
      // use $.each()
      // grab the url from each photo object
      // use jquery to create img elements and the src should be the url of each photo
      // add image class
      // append to the DOM
  
      let allData = response.photos.photo; // not a jQuery object, so we have to use $.each below
      $.each(allData, function() {
        // photos without titles may not be carefully tagged, so exclude them 
        if (this.title !== '') {
          let element = $('<img>').attr('src', this.url_n).addClass('image');
          $('.images').append(element);
        }
      });
    } 
  */
  //