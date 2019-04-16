$(document).ready(function()
{
$.get("https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json", 
  function(response){

    response.data.feed.forEach(function(response){
      // $("ul").append("<li>"+response.content.title+"</li>")
     // console.log("title add")


function handleResponseSuccess(response) {
const arrayOfjQueryArticles = []

response.arrayOfArticles.forEach((article, index) => {
  let category = article.category
  let title = category.title
  let imgSrc = category.src
  let description = article.description
  let articleURL = category.url //*

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
      526
    </section>
    <div class="clearfix"></div>
    </article>
  `
   arrayOfjQueryArticles.push(newArticle)
   $('#main').append(newArticle)

 })
}
})
 
})


// $(#name).on('click',function(event)
// {
// 	event.preventDefault();
// })

})