/*
  Please add all Javascript code to this file.
*/

// Create 3 functions for each seperate API/AJAX call

// Create the API endpoint/URL from the documentation. Register for a key if needed.

// Make the AJAX call and parse the response. To start, console.log(response) and find the following: For each article, find the image (if there is one), the article title, category, description, URL to the actual article

// Assign those pieces of info to variables.

// $(document).ready(function()
// {
// $.get("https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json", 
//   function(response){

//     response.data.feed.forEach(function(response){
//       // $("ul").append("<li>"+response.content.title+"</li>")
//      // console.log("title add")


// function handleResponseSuccess(response) {
// const arrayOfjQueryArticles = []

// response.arrayOfArticles.forEach((article, index) => {
//   let category = article.category
//   let title = category.title
//   let imgSrc = category.src
//   let description = article.description
//   let articleURL = category.url //*

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
//    arrayOfjQueryArticles.push(newArticle)
//    $('#main').append(newArticle)

//  })
// }
// })
 
// })


// // $(#name).on('click',function(event)
// // {
// // 	event.preventDefault();
// // })

// })

///////////////////////////////////////////////// 2nd version

// $(document).ready(function()
// {
// $.get("https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json", 
//   function(response){
//   	let article = response.data.feed;
// //console.log(article)
//     $.each(article, function() {
//     	console.log(article)
//     const arrayOfjQueryArticles = []
//   // let category = article.category
//   // let title = article.title
//   // let imageSrc = article.src
//   // let description = article.description
//   // let articleURL = article.url 
//   // let index = article.id
//   let category = article.category
//   let title = article.title
//   //console.log(title)
//   let imageSrc = article.src
//   let description = article.description
//   let articleURL = article.url 
//   let index = article.content_id

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
//    arrayOfjQueryArticles.push(newArticle)
//    $('#main').append(newArticle)

//  })
//     })
//   })

//////////////////////////////////////// 3rd version


$(document).ready(function()
{

	$("#search").on("click", function() {
		// $(".rearch").toggle($(".active"))
		// $("#search").on("click", function() {
		// 	$(".active").remove();
		// })
		// $("#search").toggle(function() {
		// 	$("#search").addClass("active");
	// 	$('#search').toggle(function () {
	// 		$("#search").addClass("active");
	// 		}, function () {
	// 		$("#search").removeClass("active");
	// 	});
		
	// })
	$("#search").addClass("active");
	$("#search").on("click", function() {
			$("#search").removeClass("active");
		});
});

	

$("#digg").on('click', function() {
	console.log("digg clicked")
	$.get("https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json", 
		function(response){
			let articles = response.data.feed
			const arrayOfjQueryArticles = []
			// const arrayOfjQueryArticles2 = []
			$.each(articles, (index, article) => {
				let author = article.content.author
				let title = article.content.title_alt
				// console.log(title_alt)
				let imageSrc = article.content.media.images.original_url
				let description = article.content.description
				let articleURL = article.content.original_url 
				let newArticle = `
				<article id=${index} class="article">
				<section class="featuredImage">
				<img src="${imageSrc}" alt="" />
				</section>
				<section class="articleContent">
				<a href="${articleURL}"><h3>${title}</h3></a>
				<h6>${author}</h6>
				</section>
				<section class="impressions">
				</section>
				<div class="clearfix"></div>
				</article>`
				arrayOfjQueryArticles.push(newArticle)
				// arrayOfjQueryArticles2.push(newPopUp)
			});
			// console.log(arrayOfjQueryArticles);
			$('#main').append(arrayOfjQueryArticles)
// var test = $('#popUp').append(arrayOfjQueryArticles2)
// console.log(test);
$('.article').on('click', function() {
	let id = $(this).attr("id")
	console.log($(this).attr("id"));
	let title = articles[id].content.title_alt
  	let imageSrc = articles[id].content.media.images.original_url
  	let description = articles[id].content.description
  	let articleURL = articles[id].content.original_url 
  	//let remove = $("popUp").remove();
  	// console.log('clicked');
  	//var title = articlescontent.title_alt[$("#id").attr()]
	let newPopUp = `<div id="popUp" class="">
          <a href="#" class="closePopUp">X</a>
          <div class="container">
            <h1>${title}</h1>
            <p>
              ${description}
            </p>
            <a href="${articleURL}" class="popUpAction" target="_blank">Read more from source</a>
          </div>
        </div>`

        $('body').append(newPopUp);

        $('.closePopUp').on('click', function() {
			$("#popUp").remove();
		});
});
})
})
$("#digg").error(function() {
	$(this).allert("the page is not loaded")
})
 })