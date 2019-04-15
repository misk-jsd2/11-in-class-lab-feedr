/*
  Please add all Javascript code to this file.
*/

// Create 3 functions for each seperate API/AJAX call

    var indexArray = [];

$(document).ready(function(){
  getDiggData();
//     $.get( 'http://digg.com/api/news/popular.json', function( r ) {
//      // We get the data back from the request in the parameter we pass in the function
//      console.log(r);
//  });
    
    $("#list1").click(function(event){
          event.preventDefault();
    console.log("list 1 clicked");
        $('#main').empty()
        getDiggData();
        
    });
    $("#list2").click(function(event){
          event.preventDefault();
    console.log("list 2 clicked");
        $('#main').empty()
        getNewsApiData();
        
    });
      $("#list3").click(function(event){
          event.preventDefault();
    console.log("list 3 clicked");
        $('#main').empty()
        getMashableData();
        });
    
    
    
//     $('.article').on('click', function() { 
//         
//                     console.log("article clicked!!!!!!!");
//         console.log(this)
//         $("#popUp").removeClass( "loader hidden" )
//         //var retval = []
//         $('.article').each(function(){
//            // console.log(this)
//             retval.push($(this).find('featuredImage').attr('section'))
//         })
//        // return console.log(retval);
//         //console.log(retval);
//        
////        $("#popUp").style.display = 'flex';
//        
////         var popup = document.getElementById("#popUp");
////  popup.classList.toggle(".show");
//
// });

    $('.closePopUp').click(function(event){
                    console.log("x clicked");
        $("#popUp").addClass( "loader hidden" );

    })
    
//    $("#list1").on('click', function(event) {
//  event.preventDefault();
//    console.log("list 1 clicked");
//
//});
    
});

function getDiggData(){
           console.log("in");

     $.get('https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json')
     .then(response => {
         var feedArray = response.data.feed;
         fillArticles(feedArray);
             //   console.log(response.data.feed);

//         feedArray.forEach(function(element) {
//            console.log(element.content.title);
//            console.log(element.content.domain_name);
//            console.log(element.content.description);
//            console.log(element.content.media.images[3].url);

         
     });
}
    console.log(indexArray.length);

//news api url need to be update every day
 function getNewsApiData(){
             console.log("in newsApi");

     $.get('https://accesscontrolalloworiginall.herokuapp.com/https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=e75626217a1249919184dd5d7679e3e7')
     .then(response => {
                     // console.log(response);

         var feedArray = response.articles;
                      console.log(feedArray);

        // fillArticles(feedArray);
                const arrayOfjQueryArticles = [];

feedArray.forEach((article, index) => {

  let title = article.title;
    //console.log(title);
var defaultImg = "http://www.himalayansolution.com/img/medium-default-product.jpg"
  let imagSrc = article.urlToImage;
    let imgSrc = imagSrc ? imagSrc :defaultImg
    let articleURL = article.url;
    //console.log(articleURL)
    let category = "news";
    let source = article.source.name;
//  if (imgSrc === ""){
//      imgSrc = "http://www.himalayansolution.com/img/medium-default-product.jpg";
//  }
  
 //$('#no').text(title)
 let newArticle = fillOneArticle(title ,imgSrc , articleURL, category, source, index);

  arrayOfjQueryArticles.push(newArticle);
    $('#main').append(newArticle);
    indexArray.push(newArticle);
    
     //   arrayOfjQueryArticles = [] 
});
                            $('.article').on('click', function() { 
         
        console.log("article clicked!!!!!!!");
         var indexArray = $(this).attr('id');
                 var popTitle = feedArray[indexArray].title;
                 var popDescription = feedArray[indexArray].description;
                 var popUrl = feedArray[indexArray].url;
          $('#title').text(popTitle); 
          $('#desc').text(popDescription); 
                 $("#url").attr("href", popUrl);

                 
//             console.log($('#0 > .articleContent  > a > h3'))
             
         $("#popUp").removeClass( "loader hidden" )
//         var retval = []
//         $('.article').each(function(){
//            // console.log(this)
//             retval.push($(this).find('featuredImage').attr('section'))
//         })
        // return console.log(retval);
         //console.log(retval);
        
//        $("#popUp").style.display = 'flex';
        
//         var popup = document.getElementById("#popUp");
//  popup.classList.toggle(".show");

 });  
         
    });
 };

 function getMashableData(){
             console.log("in mashable");

     $.get('https://accesscontrolalloworiginall.herokuapp.com/https://mashable.com/stories.json')
     .then(response => {
                     // console.log(response);

         var feedArray = response.new;
                      console.log(feedArray);

        // fillArticles(feedArray);
                const arrayOfjQueryArticles = [];

feedArray.forEach((article, index) => {

  let title = article.title
    //console.log(title);

  let imgSrc = article.image
    let articleURL = article.link
    //console.log(articleURL)
    let category = article.channel
    let source = article.formatted_date
  
  
 //$('#no').text(title)
    
let newArticle = fillOneArticle(title ,imgSrc , articleURL, category, source, index);


  arrayOfjQueryArticles.push(newArticle)
    $('#main').append(newArticle)
    
     //   arrayOfjQueryArticles = [] 
})
                      $('.article').on('click', function() { 
         
        console.log("article clicked!!!!!!!");
         var indexArray = $(this).attr('id');
                 var popTitle = feedArray[indexArray].title;
                 var popDescription = feedArray[indexArray].content.plain;
                 var popUrl = feedArray[indexArray].link;
          $('#title').text(popTitle); 
          $('#desc').text(popDescription); 
                 $("#url").attr("href", popUrl);

                 
//             console.log($('#0 > .articleContent  > a > h3'))
             
         $("#popUp").removeClass( "loader hidden" )
//         var retval = []
//         $('.article').each(function(){
//            // console.log(this)
//             retval.push($(this).find('featuredImage').attr('section'))
//         })
        // return console.log(retval);
         //console.log(retval);
        
//        $("#popUp").style.display = 'flex';
        
//         var popup = document.getElementById("#popUp");
//  popup.classList.toggle(".show");

 });
        
    });
 }



function fillArticles(feedArray){
    console.log("i'm in baby")
       const arrayOfjQueryArticles = [];
    console.log(feedArray)

feedArray.forEach((article, index) => {

  let content = article.content
  let title = content.title_alt
  let imgSrc = content.media.images[3].url
    let articleURL = content.original_url
//    console.log(articleURL)
    let category = content.tags[0].name
    let source = content.domain_name
  let popData = ''
  

    let newArticle = fillOneArticle(title ,imgSrc , articleURL, category, source, index);
//$("#"+index).click(function(event){
//    alert("hhh")
//})
  arrayOfjQueryArticles.push(newArticle)
    $('#main').append(newArticle);

     //   arrayOfjQueryArticles = [] 
});
    
             $('.article').on('click', function() { 
         
        console.log("article clicked!!!!!!!");
         var indexArray = $(this).attr('id');
                 var popTitle = feedArray[indexArray].content.title_alt;
                 var popDescription = feedArray[indexArray].content.description;
                 var popUrl = feedArray[indexArray].content.original_url;
          $('#title').text(popTitle); 
          $('#desc').text(popDescription); 
                 $("#url").attr("href", popUrl);

                 
//             console.log($('#0 > .articleContent  > a > h3'))
             
         $("#popUp").removeClass( "loader hidden" )
//         var retval = []
//         $('.article').each(function(){
//            // console.log(this)
//             retval.push($(this).find('featuredImage').attr('section'))
//         })
        // return console.log(retval);
         //console.log(retval);
        
//        $("#popUp").style.display = 'flex';
        
//         var popup = document.getElementById("#popUp");
//  popup.classList.toggle(".show");

 });
    
//        arrayOfjQueryArticles = [] 

}


function fillOneArticle(title ,imgSrc , articleURL, category, source, index){
    let newArticle = `
  <article id=${index} class="article">
    <section class="featuredImage">
      <img src="${imgSrc}" alt="" />
    </section>
    <section class="articleContent">
        <a href="${articleURL}" target="_blank"><h3 >${title}</h3></a>
        <h6>${source}</h6>
    </section>
    <section class="impressions">
      ${category}
    </section>
    <div class="clearfix"></div>
    </article>
    `
    return newArticle;
    
}
   

// Create the API endpoint/URL from the documentation. Register for a key if needed.

// Make the AJAX call and parse the response. To start, console.log(response) and find the following: For each article, find the image (if there is one), the article title, category, description, URL to the actual article

// Assign those pieces of info to variables.



//const arrayOfjQueryArticles = [];
//
//arrayOfArticles.forEach((article, index) => {
//  let category = article.category
//  let title = category.title
//  let imgSrc = category.src
//
//  let newArticle = `
//  <article id=${index} class="article">
//    <section class="featuredImage">
//      <img src="${imageSrc}" alt="" />
//    </section>
//    <section class="articleContent">
//        <a href="${articleURL}"><h3>${title}</h3></a>
//        <h6>${category}</h6>
//    </section>
//    <section class="impressions">
//      526
//    </section>
//    <div class="clearfix"></div>
//    </article>
//  `
//
//  arrayOfjQueryArticles.push(newArticle)
//})
//
//$('#main').append(newArticle)