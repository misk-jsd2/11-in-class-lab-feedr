/*
  Please add all Javascript code to this file.
*/var Newsurl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=628fd7b3d44b4d67a682072cba2d449d'
  var GardianURL  = "https://content.guardianapis.com/search?q=debate&tag=politics/politics&from-date=2014-01-01&api-key=a00373e0-59ca-49e0-ae02-cb3efe9c189e";
  var digg = 'https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=628fd7b3d44b4d67a682072cba2d449d'

  var appid = "628fd7b3d44b4d67a682072cba2d449d";
  var appid2 = "a00373e0-59ca-49e0-ae02-cb3efe9c189e";
  var appid3 = "628fd7b3d44b4d67a682072cba2d449d"

  var id1 = document.getElementById('News').addEventListener("click", displayDate);
  var id2 = document.getElementById('Gardian').addEventListener("click", displayDate2);
  var id3 = document.getElementById('digg').addEventListener("click", displayDate3);



  var idurl = document.getElementById('popurl')
  var idpop = document.getElementById('popUp')

  var popTT = document.getElementById('poptilte')
  var popDESC = document.getElementById('popdesc')
  var rm =  document.getElementById('rmovet')

var indexes =[]
var indexes2 =[]



function displayDate() {

//document.getElementById('rm').remove('clearfix');


$.ajax({

     url:Newsurl,
	 type: "GET",
  data:{
    appid: appid

  },success: function(response){

      console.log(response)
      const arrayOfjQueryArticles = []
      var arrayOfArticles = response.articles
      arrayOfArticles.forEach((article, index) => {

  let category = article.source.name
  let title = article.title
  let imgSrc = article.urlToImage


  let newArticle = `
  <article id=${index} class="article">
    <section   id = "clickArticle" class="featuredImage">
      <img src="${imgSrc}" alt="" />
    </section>
    <section class="articleContent">
        <a  id = "" href=""><h3>${article.title}</h3></a>
        <h6>${category}</h6>
    </section>
    <section class="impressions">
      526
    </section>
    <div class="clearfix"></div>
    </article>
  `
  indexes.push(index)

   arrayOfjQueryArticles.push(newArticle)
  $('#main').append(newArticle) 
})
  var idtil = document.getElementsByClassName('article')
for(var i=0; i<= indexes.length ; i++){
idtil[i].addEventListener("click",function(){
  document.getElementById('popUp').classList.remove('loader' ,'hidden')

     event.preventDefault();
    console.log(this.id)
    console.log(arrayOfArticles[this.id].title);

  var newThingLi = popTT
  var newThingText =  document.createTextNode(arrayOfArticles[this.id].title)
  newThingLi.appendChild(newThingText);
  idpop.appendChild(newThingLi);

    var newThingL = popDESC
    var newThingTex =  document.createTextNode(arrayOfArticles[this.id].source.name)
    newThingL.appendChild(newThingTex);
    idpop.appendChild(newThingL);

       var newThing = idurl
      $("a").attr("href", idurl.attributes[0]= arrayOfArticles[this.id].url)
      idpop.appendChild(newThing);

        document.getElementById('popUp').classList.add('closePopUp')

});
}
} 
})
}

displayDate() 

function displayDate2() {

$.ajax({
     url:GardianURL,
	 type: "GET",
  data:{
    appid: appid2
  },success: function(response){
     console.log(response.response.results)
             console.log('Second hello')

        const arrayOfjQueryArticles = []
      var arrayOfArticles = response.response.results
      arrayOfArticles.forEach((article, index) => {
      	      console.log(article)
  let category = article.sectionName
  let title = article.webTitle
  let imgSrc = ""
   console.log(article)

  let newArticle = `
  <article id=${index} class="article">
    <section   id = "clickArticle" class="featuredImage">
      <img src="images/article_placeholder_1.jpg" alt="" />
    </section>
    <section class="articleContent">
        <a   href=".popUp"><h3>${title}</h3></a>
        <h6>${category}</h6>
    </section>
    <section class="impressions">
      526
    </section>
    <div class="clearfix"></div>
    </article> 
  `

  indexes2.push(index)

  arrayOfjQueryArticles.push(newArticle)
  $('#main').append(newArticle)

})

var idtil = document.getElementsByClassName('article')
for(var i=0; i<= indexes.length ; i++){
idtil[i].addEventListener("click",function(){
  document.getElementById('popUp').classList.remove('loader' ,'hidden')

     event.preventDefault();
    console.log(this.id)
    console.log(arrayOfArticles[this.id].title);

  var newThingLi = popTT
  var newThingText =  document.createTextNode(arrayOfArticles[this.id].webTitle)
  newThingLi.appendChild(newThingText);
  idpop.appendChild(newThingLi);

    var newThingL = popDESC
    var newThingTex =  document.createTextNode(arrayOfArticles[this.id].sectionName)
    newThingL.appendChild(newThingTex);
    idpop.appendChild(newThingL);

       var newThing = idurl
      $("a").attr("href", idurl.attributes[0]= arrayOfArticles[this.id].webUrl)
      idpop.appendChild(newThing);
        document.getElementById('articleid').classList.add('closePopUp')

});
}
} 
})
}

function displayDate3() {

$.ajax({
     url:digg,
   type: "GET",
  data:{
        appid: appid3


  },success: function(response){
     const arrayOfjQueryArticles = []
      var arrayOfArticles = response.articles
      arrayOfArticles.forEach((article, index) => {

  let category = article.source.name
  let title = article.title
  let imgSrc = article.urlToImage


  let newArticle = `
  <article id=${index} class="article">
    <section   id = "clickArticle" class="featuredImage">
      <img src="${imgSrc}" alt="" />
    </section>
    <section class="articleContent">
        <a  id = "" href=""><h3>${article.title}</h3></a>
        <h6>${category}</h6>
    </section>
    <section class="impressions">
      526
    </section>
    <div class="clearfix"></div>
    </article>
  `
  indexes.push(index)

   arrayOfjQueryArticles.push(newArticle)
  $('#main').append(newArticle) 
})
  var idtil = document.getElementsByClassName('article')
for(var i=0; i<= indexes.length ; i++){
idtil[i].addEventListener("click",function(){
  document.getElementById('popUp').classList.remove('loader' ,'hidden')

     event.preventDefault();
    console.log(this.id)
    console.log(arrayOfArticles[this.id].title);

  var newThingLi = popTT
  var newThingText =  document.createTextNode(arrayOfArticles[this.id].title)
  newThingLi.appendChild(newThingText);
  idpop.appendChild(newThingLi);

    var newThingL = popDESC
    var newThingTex =  document.createTextNode(arrayOfArticles[this.id].source.name)
    newThingL.appendChild(newThingTex);
    idpop.appendChild(newThingL);

       var newThing = idurl
      $("a").attr("href", idurl.attributes[0]= arrayOfArticles[this.id].url)
      idpop.appendChild(newThing);

        document.getElementById('popUp').classList.add('closePopUp')

});
}
} 
})
}