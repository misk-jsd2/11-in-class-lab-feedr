/*
  Please add all Javascript code to this file.
*/	
var r="All responses"
$(document).ready(function(){
	var responsedata ;

	var api = 'aa28b95f219e40b6b1f576b974ca4def';
	var Url2 = "https://newsapi.org/v2/top-headlines";
	var Url3 = "https://newsapi.org/v2/everything";
	$("#ser").html(r);
    getappidAPI2(api,Url2);
    getappidAPI3(api,Url3);

    

    $('#source1').on('click', function(){
    	var Url1 = "https://newsapi.org/v2/everything";
    	var r1="Bitcoin";
    	$("#ser").html(r1);
    	var x = document.getElementById("main");
   		x.innerHTML = '';
        getappidAPI1(api,Url1);
    });
    $('#source2').on('click', function(){
    	var Url2 = "https://newsapi.org/v2/top-headlines";
    	var r2="Country US"
    	$("#ser").html(r2);
    	var x = document.getElementById("main");
   		x.innerHTML = '';
        getappidAPI2(api,Url2);
    });
    $('#source3').on('click', function(){
    	var Url3 = "https://newsapi.org/v2/everything";
    	var r3="Apple";
    	$("#ser").html(r3);
    	var x = document.getElementById("main");
   		x.innerHTML = '';
        getappidAPI3(api,Url3);
    });
});

function getappidAPI1(api,Url1){
	$.ajax({
   	url: Url1,
   	type:'GET',
   	data: {
     	q : 'bitcoin',
     	from : '2019-03-14',
     	sortBy : 'publishedAt',
     	apiKey : api
   	},
   	success: function (response) {
   	responsedata=response;
    setdata(response);
    
    console.log(response);
   },
      error: function(){
       alert('request failed');
    }
 })
}

function getappidAPI2(api,Url2){
	$.ajax({
   	url: Url2,
   	type:'GET',
   	data: {
     	country : 'us',
     	category : 'business',
     	apiKey : api
   	},
   	success: function (response) {
   	responsedata=response;
    setdata(response);
    console.log(response);
   },
      error: function(){
       alert('request failed');
    }
 })
}

function getappidAPI3(api,Url3){
	$.ajax({
   	url: Url3,
   	type:'GET',
   	data: {
     	q : 'apple',
     	from : '2019-04-13',
     	to : '2019-04-13',
     	sortBy : 'popularity',
     	apiKey : api
   	},
   	success: function (response) {
   	responsedata=response;
   	setdata(responsedata);
    console.log(response);
   },
      error: function(){
       alert('request failed');
    }
 	})
}

function setdata(data){

	var x = document.getElementById("main");
	if(r!="All responses")
   		x.innerHTML = '';

	var length=data.articles.length;
	for (var i = 0; i <= length; i++) {
	
	var title1 = document.createTextNode(data.articles[i].title);
    var url = data.articles[i].url;
    var urlToImage = data.articles[i].urlToImage;
    var author = document.createTextNode(data.articles[i].author);
    var nameapi = document.createTextNode(data.articles[i].source.name);

    var article = document.createElement("article");
    article.setAttribute('class', 'article');

	var section1 = document.createElement("section");
	section1.setAttribute('class', 'featuredImage');
	var Img = document.createElement("img");
	Img.setAttribute('src', urlToImage );
	Img.setAttribute('alt', '' );
	section1.appendChild(Img);

	var section2 = document.createElement("section");
	section2.setAttribute('class', 'articleContent');
	var link = document.createElement("a");
	link.setAttribute('href', url );
	var h3 = document.createElement("h3");
	h3.appendChild(title1);
	link.appendChild(h3);
	section2.appendChild(link);
	var h6 = document.createElement("h6");
	section2.appendChild(author);

	
	var section3 = document.createElement("section");
	section3.setAttribute('class', 'impressions');
	section3.appendChild(nameapi);

	var div = document.createElement("div");
	div.setAttribute('id', i);
	div.setAttribute('onclick', 'myFunction()');
	div.setAttribute('class', 'clearfix');

	article.appendChild(section1);
	article.appendChild(section2);
	article.appendChild(section3);
	article.appendChild(div);


	x.appendChild(article);
	document.body.appendChild(x);
}
}

function myFunction() {
  var y = event.srcElement.id ;
  $('#popUp').removeClass("loader hidden");
  //console.log(event.srcElement.id);
  document.getElementById("poplink").href = responsedata.articles[y].url ;
  $("#h1").html("Title : "+responsedata.articles[y].title);
  $("#p").html("Description : "+responsedata.articles[y].description+" <br>author : "+responsedata.articles[y].author);
  $('.closePopUp').on('click', function(){
  	$('#poplink').class="";
    	$('#popUp').addClass("loader hidden");

    });
}