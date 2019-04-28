/*
  Please add all Javascript code to this file.
*/

// Create 3 functions for each seperate API/AJAX call
// $.get("https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json", 
//   function(results){
//     console.log(results);
//     results.data.feed.forEach(function(result){
//       $("ul").append("<li>"+result.content.title+"</li>")

//   })
// })
// Create the API endpoint/URL from the documentation. Register for a key if needed.
var digarray =[];
var redarray = [];
var masharray = [];




function mashart(){
  $.get('https://accesscontrolalloworiginall.herokuapp.com/https://mashable.com/stories.json', function(results){
console.log(results);

for (var i=0 ; i<results.new.length; i++){
masharray.push({
title: results.new[i].display_title,
url: results.new[i].link,
description:results.new[i].content.plain,
pic:results.new[i].image.url,

})
 console.log(masharray);
} // for 
//append 
masharray.forEach( (article, index) => {   // arti al shay alli bnmshi 3leeh, index = i 
  let description = article.description
  let title = article.title
  let imgSrc = article.pic

  let newArticle = `
  <article id=${index} class="article"> 
    <section class="featuredImage">
      <img src="${imgSrc}" alt="" />
    </section>
    <section class="articleContent">
        <a href="#"><h3>${title}</h3></a>
        <h6>${description}</h6>
    </section>
    <section class="impressions">
      526
    </section>
    <div class="clearfix"></div>
    </article>
  `
$('#main').append(newArticle);
  // arrayOfjQueryArticles.push(newArticle)
})

//bo   mash on click 

$('.article').on('click', function(event){
var r = $(this).attr('id');
  console.log(r);
  console.log(masharray[r]);
  $('#popUp').removeClass('loader hidden');

let newpop=`
<a href="#" class="closePopUp">X</a>
          <div class="container">
            <h1>${masharray[r].title}</h1>
            <p>
              ${masharray[r].description}
            </p>
            <a href="${masharray[r].url}" class="popUpAction" target="_blank">Read more from source</a>
          </div>
`
$('#popUp').empty();
$('#popUp').append(newpop);

$('.closePopUp').on('click', function(event){
$('#popUp').addClass('loader hidden');

//bo

})
})
})
}


//// end of mash



// start of reddit

// function redart(){
//   $.get('https://www.reddit.com/top.json', function(results){
// console.log(results);

// for (var i=0 ; i<results.data.children.length; i++){
// redarray.push({
// title: results.data.children[i].data.title,
// url: results.data.children[i].data.url,
// description:results.data.children[i].data.title,
// pic:results.data.children[i].data.url,

// })
// // console.log(redarray);
// } // for 
// //append 
// redarray.forEach( (article, index) => {   // arti al shay alli bnmshi 3leeh, index = i 
//   let description = article.description
//   let title = article.title
//   let imgSrc = article.pic

//   let newArticle = `
//   <article id=${index} class="article"> 
//     <section class="featuredImage">
//       <img src="${imgSrc}" alt="" />
//     </section>
//     <section class="articleContent">
//         <a href="#"><h3>${title}</h3></a>
//         <h6>${description}</h6>
//     </section>
//     <section class="impressions">
//       526
//     </section>
//     <div class="clearfix"></div>
//     </article>
//   `
// $('#main').append(newArticle);
//   // arrayOfjQueryArticles.push(newArticle)
// })

// //boooi   red on click 

// $('.article').on('click', function(event){
// var r = $(this).attr('id');
//   console.log(r);
//   console.log(redarray[r]);
//   $('#popUp').removeClass('loader hidden');

// let newpop=`
// <a href="#" class="closePopUp">X</a>
//           <div class="container">
//             <h1>${redarray[r].title}</h1>
//             <p>
//               ${redarray[r].description}
//             </p>
//             <a href="${redarray[r].url}" class="popUpAction" target="_blank">Read more from source</a>
//           </div>
// `
// $('#popUp').empty();
// $('#popUp').append(newpop);

// $('.closePopUp').on('click', function(event){
// $('#popUp').addClass('loader hidden');

// //boooi

// })
// })
// })
// }

//tgfelat al red 

// DIG dig dig dig dig dig dig dig 
// function digart(){
//   $.get("https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json", function(results){
// console.log(results);
 
// for (var i=0 ; i<results.data.feed.length; i++){
// digarray.push({
// title: results.data.feed[i].content.title,
// url: results.data.feed[i].content.url,
// description:results.data.feed[i].content.description,
// pic:results.data.feed[i].content.media.images[0].url 

// })

// }

// // const arrayOfjQueryArticles = []

// digarray.forEach((article, index) => {   // arti al shay alli bnmshi 3leeh, index = i 
//   let description = article.description
//   let title = article.title
//   let imgSrc = article.pic

//   let newArticle = `
//   <article id=${index} class="article"> 
//     <section class="featuredImage">
//       <img src="${imgSrc}" alt="" />
//     </section>
//     <section class="articleContent">
//         <a href="#"><h3>${title}</h3></a>
//         <h6>${description}</h6>
//     </section>
//     <section class="impressions">
//       526
//     </section>
//     <div class="clearfix"></div>
//     </article>
//   `
// $('#main').append(newArticle);
//   // arrayOfjQueryArticles.push(newArticle)
// })

//  // brra al forEach 
// $('.article').on('click', function(event){
// var p = $(this).attr('id');
//   console.log(p);
//   console.log(digarray[p]);
//   $('#popUp').removeClass('loader hidden');

// let newpop=`
// <a href="#" class="closePopUp">X</a>
//           <div class="container">
//             <h1>${digarray[p].title}</h1>
//             <p>
//               ${digarray[p].description}
//             </p>
//             <a href="${digarray[p].url}" class="popUpAction" target="_blank">Read more from source</a>
//           </div>
// `
// $('#popUp').empty();
// $('#popUp').append(newpop);

// $('.closePopUp').on('click', function(event){
// $('#popUp').addClass('loader hidden');

// // })

// }) //on click closer (X)

//   }) // on click article 

//  }) // tgfelat al get )
// } // tgfelat al function 

$('#list1').on('click', function(event){
  // clean
$('#main').removeClass('#container') ;
digart();
})
$('#list2').on('click', function(event){
 // clean
 // $('#main').removeClass('#container') ;
 // $('.clearfix impressions').remove();
redart();
})

$('#list3').on('click', function(event){
 // clean
 // $('#main').removeClass('#container') ;
 // $('.clearfix impressions').remove();
mashart();
})

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