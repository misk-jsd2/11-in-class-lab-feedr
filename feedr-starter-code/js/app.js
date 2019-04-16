/*
  Please add all Javascript code to this file.
*/
$ (function(){

  /*---------- DIGG ---------*/ 

let urlDIGG = 'https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json';


$.get(urlDIGG).done(function(response) {
  console.log(response);
  if (response.stat === 'fail') {
    console.log(response.message); 
  } else {
    console.log('DIGG Request succeeded!');
  }

  const arrayOfArticles = []
  //const oneArticle = []
  //var allArticle = response.data.feed;

  let aDIGG = $('<a>').attr('href', '#')
  let span =$('<span>').text(response.data.meta.display)
  let ul =  $('<ul>').append(aDIGG.append(span));
  $("li").append(ul)

  $( "a" ).click(function (event){
    event.preventDefault();

  response.data.feed.forEach(function(response){
    arrayOfArticles.push(Article(response))
  })
  //  $('#main').append(article,sectionImg ,sectionCont, sectionImp,div)
  $('#main').append(arrayOfArticles);
})
  
  function Article(response) {
    let article =  $('<article>').addClass('article');
  
     let sectionImg = $('<section>').addClass('featuredImage');
      let img = $('<img>').attr('src', response.content.media.images[0].url);
      $('.featuredImage').prepend(img)
     
     let sectionCont = $('<section>').addClass('articleContent');
       let a = $('<a>').attr('href', response.content.original_url);
       let h3 = $('<h3>').text(response.content.title);
       $('.articleContent').append(a);
     
     let sectionImp = $('<section>').addClass('impressions');
       $('.impressions').text('new');
     

     let div= $('<div>').addClass('clearfix');
  
     article.prepend(article, sectionImg.append(img),sectionCont.append(a.append(h3)),sectionImp.text('new'),div)

     return article;
      }

});

/*---------- Reddit ---------*/ 

// let urlReddit = 'https://accesscontrolalloworiginall.herokuapp.com/https://www.reddit.com/top.json';

// $.get(urlReddit).done(function(response) {
//   console.log(response);
//   if (response.stat === 'fail') {
//     console.log(response.message); 
//   } else {
//     console.log('Reddit Request succeeded!');
//   }
//   const arrayOfArticles = []
//   let aRidd = $('<a>').attr('href', '#')
//   let span =$('<span>').text('Reddit Popular Stories')
//   let ul =  $('<ul>').append(aRidd.append(span));
//   $("li").append(ul)

//   $( "a" ).click(function (event){
//     event.preventDefault();

//   response.data.children.forEach(function(response){
//     arrayOfArticles.push(Article(response))
//   })
//   $('#main').append(arrayOfArticles);
// })
  
//   function Article(response) {
//     let article =  $('<article>').addClass('article');
  
//      let sectionImg = $('<section>').addClass('featuredImage');
//       let img = $('<img>').attr('src', response.data.preview.images.source.url);
//       $('.featuredImage').prepend(img)
     
//      let sectionCont = $('<section>').addClass('articleContent');
//        let a = $('<a>').attr('href', response.data.url);
//        let h3 = $('<h3>').text(response.data.title);
//        $('.articleContent').append(a);
     
//      let sectionImp = $('<section>').addClass('impressions');
//        $('.impressions').text('new');
     

//      let div= $('<div>').addClass('clearfix');
  
//      article.prepend(article, sectionImg.append(img),sectionCont.append(a.append(h3)),sectionImp.text('new'),div)

//      return article;
//       }

// });

});

//function Article(allArticle ,response){
//  let article =  $('<article>').addClass('article');

//  let sectionImg = $('<section>').addClass('featuredImage');
//  let img = $('<img>').attr('src', response.content.media.images[0]);
//   $('.featuredImage').prepend(img);

// let sectionCont = $('<section>').addClass('articleContent');
//   let a = $('<a>').attr('href', response.content.original_url);
//   let h3 = $('<h3>').attr(('id', 'title'),('text', response.content.title) );
//   $('.articleContent').prepend(a,h3);

//   let sectionImp = $('<section>').addClass('impressions');
//   let p = $('<p>').attr('text', 'new');
//   $('.impressions').prepend(p);

//    let div= $('<div>').addClass('clearfix');

//   $('#main').append(article)
//   $('#main').append(sectionImg)
//   $('#main').append(sectionCont)
//   $('#main').append(sectionImp)
//   $('#main').append(div)
//  // }


  // let Title = response.content.title
  // console.log(Title)
  
  // $('#title').text(Title);

  // arrayOfArticles.push(newArticle)

  // response.data.feed.forEach(function(response){
  //   $("ul").append("<li>"+response.content.title_alt+"</li>")


/*---------- NEWS-API ---------*/ 
// let urlNEWs = 'https://accesscontrolalloworiginall.herokuapp.com/https://newsapi.org/';

// $.get(urlNEWs).done(function(response) {
//   console.log(response);
//   if (response.stat === 'fail') {
//     console.log(response.message); 
//   } else {
//     console.log('NEWS Request succeeded!');
//   }
// });
