/*
  Please add all Javascript code to this file.
*/

$( document ).ready(function() {

function firstSourceFunction() {
$.get("https://newsapi.org/v2/top-headlines?country=sa&apiKey=7482da6bb90a4055b3a214402af13c5a", 
  function(results){
  	if (results.status === 'fail') {
          alert("Error");
        }  else {
          console.log(results);
          sourceOne(results);
        }
});

function sourceOne(newsOne){
	let arrayOfjQueryArticles = [];
	let arrayOfDescription =[];
	let arrayOfUrl = [];
newsOne.articles.forEach((article, index) => {
  let author =article.author;
  let title = article.title;
  let imgSrc = article.urlToImage;
  let url = article.url;
  let description = article.description;
  let newArticle =`<article class="article">
    <section class="featuredImage">
      <img src="${imgSrc}" alt="" />
    </section>
    <section class="articleContent">
        <a href="#"><h3 id='${index}'>${title}</h3></a>
        <h6>${author}</h6>
    </section>
    <section class="impressions">
      New
    </section>
    <div class="clearfix"></div>
    </article>`;
  arrayOfjQueryArticles.push(newArticle);
  arrayOfDescription.push(description);
  arrayOfUrl.push(url);
 });
    $('#main').append(arrayOfjQueryArticles);

$('h3').click(function(){
	$('#popUp').fadeIn();
	$('.closePopUp').fadeIn();
	let tit = $(this).html();
	$('.container h2').text(tit);
	let p = $(this).attr('id');
	$('#p').html(arrayOfDescription[p]);
	$('.popUpAction').attr('href',arrayOfUrl[p]);
 });

$('.closePopUp').click(function(){
	$('#popUp').fadeOut();
  });
 };  
};

$('.container h1').click(function(){
	$('#main').empty();
	firstSourceFunction();
	$('#sN').html($('#s1').text());
  });

$(window).on('load', function(event) {
    firstSourceFunction(); 
    $('#popUp.loaderHidden').hide();
    $('#sN').html($('#s1').text());
  });

$('#s1').on('click', function(event) {
	$('#main').empty();
    firstSourceFunction();
    $('#sN').html($('#s1').text());
  });

$('#s2').on('click', function(event) {
    $('#main').empty(); 
    event.preventDefault();
    $('#sN').html($('#s2').text());

$.get("https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json", 
  function(results){
    if (results.status === 'fail') {
          alert("Error");
        }  else {
          console.log(results);
        }
        sourceTwo(results); 
  });

function sourceTwo(newsTwo){
	let arrayOfjQueryArticles2 = [];
	let arrayOfDescription2 =[];
	let arrayOfUrl2 = [];
newsTwo.data.feed.forEach((article2, index) => {
  let author2 =article2.content.author;
  let title2 = article2.content.title;
  let imgSrc2 = article2.content.media.images[0].original_url;
  let description2 = article2.content.description;
  let url2 = article2.content.original_url;
  let newArticle2 =`<article class="article">
    <section class="featuredImage">
      <img src="${imgSrc2}" alt="" />
    </section>
    <section class="articleContent">
        <a href="#"><h3 id=${index}>${title2}</h3></a>
        <h6>${author2}</h6>
    </section>
    <section class="impressions">
      New
    </section>
    <div class="clearfix"></div>
    </article>`
  arrayOfjQueryArticles2.push(newArticle2);
  arrayOfDescription2.push(description2);
  arrayOfUrl2.push(url2);
});
  $('#main').append(arrayOfjQueryArticles2);

$('h3').click(function(){
	$('#popUp').fadeIn();
	$('.closePopUp').fadeIn();
	let tit = $(this).html();
	$('.container h2').text(tit);
	let p = $(this).attr('id');
	$('#p').html(arrayOfDescription2[p]);
	$('.popUpAction').attr('href',arrayOfUrl2[p]);
});

$('.closePopUp').click(function(){
	$('#popUp').fadeOut();
   });
  };
 });

$('#s3').on('click', function(event) {
	$('#main').empty();
    event.preventDefault();
    $('#sN').html($('#s3').text());

$.get("https://accesscontrolalloworiginall.herokuapp.com/https://www.reddit.com/top.json",function(results){ 
    console.log(results);
    sourceThree(results); 
  });

function sourceThree(newsThree){
	let arrayOfjQueryArticles3 = [];
	let arrayOfDescription3 =[];
	let arrayOfUrl3=[];
newsThree.data.children.forEach((article3, index) => {
  let author3 =article3.data.author;
  let title3 = article3.data.title;
  let imgSrc3 = article3.data.thumbnail;
  let description3 = article3.data.title;
  let url3 = article3.data.permalink;
  let newArticle3 =`<article class="article">
    <section class="featuredImage">
      <img src="${imgSrc3}" alt="" />
    </section>
    <section class="articleContent">
        <a href="#"><h3 id=${index} >${title3}</h3></a>
        <h6>${author3}</h6>
    </section>
    <section class="impressions">
      New
    </section>
    <div class="clearfix"></div>
    </article>`
  arrayOfjQueryArticles3.push(newArticle3);
  arrayOfDescription3.push(description3);
  arrayOfUrl3.push(url3);
});
  $('#main').append(arrayOfjQueryArticles3);

$('h3').click(function(){
	$('#popUp').fadeIn();
	$('.closePopUp').fadeIn();
	let tit = $(this).html();
	$('.container h2').text(tit);
	let p = $(this).attr('id');
	$('#p').html(arrayOfDescription3[p]);
	$('.popUpAction').attr('href',arrayOfUrl3[p]);
});

$('.closePopUp').click(function(){
	$('#popUp').fadeOut();
   });
  };
 });
});