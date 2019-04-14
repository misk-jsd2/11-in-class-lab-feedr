// this class for the apis
//Note : if we want to add a new api we will creat a new function like the function api1()
class Apis{
  constructor() {
    this.newsSources = ['ign','the-verge','the-wall-street-journal','polygon','national-geographic'];
  }
  // this function to creat one api
  api1(){
    let url = 'https://newsapi.org/v2/everything?';
    let searchOptions = {
      sources: getUrlFilter(),
      from: '2019-04-01',
      language: 'en',
      apikey: '64ee82ee9a00407ca078ef42a707726d',

    };

    // this for loop to create the url link for api
    for (let key in searchOptions) {
      if (key == 'sources') {
        url += key + '=' + searchOptions[key];

      }else{
      url += '&' + key + '=' + searchOptions[key];
      }
    }
    return url;
  }
}

//this to get the news from the api and put on the page
function showTheNews(response) {

  for (var variable in response) {
    if (response.hasOwnProperty(variable)) {

      // here we check if there a an image or not .
      let image = response[variable].urlToImage;
      if (image === undefined || image === null) {
        image = "images/article_placeholder_1.jpg";
      }

      // here we extract the values from the api and append it to the main div
      var newArticle =
      `<article class="article" onclick="clicked(this)">
           <section class="featuredImage">
             <img src="${image}" alt="" />
           </section>
           <section class="articleContent">
            <a id="link" href="${response[variable].url}"></a>
             <a href="#"><h3>${response[variable].title}</h3></a>
             <h6>${response[variable].description}</h6>
           </section>
           <section class="impressions">
           ${response[variable].source.name}
           </section>
           <div class="clearfix"></div>
       </article>
                 `;
    }
    $('#main').append(newArticle);
  }
}

//this function to open the popUp
function clicked(row) {
  $('#popUp').removeClass('hidden');
  $('#popUp').children('.container').children('h1').text($(row).children('section').children('a').text());
  $('#popUp').children('.container').children('p').text($(row).children('section').children('h6').text());
  $('#popUp').children('.container').children('a').attr("href", $(row).children('section').children('#link').attr('href'));
  setTimeout(function(){ $('#popUp').removeClass('loader'); }, 1000);
}

// this function to close the popup
$('.closePopUp').click(function() {
  $('#popUp').addClass('loader');
  setTimeout(function(){ $('#popUp').addClass('hidden'); }, 1000);
});

// this function to call the ajax
function loadApi(url) {
  $.ajax({
      url: url,
      data: {format: "json"},
      success: function (response) {
        showTheNews(response.articles);
      }
  });
}

//this function to create filter
function filter(newsSources) {
  for (var i = 0; i < newsSources.length; i++) {
    var source =`<li><a href="?Source=${newsSources[i]}">${newsSources[i]}</a></li>`;
    $('#filter').append(source);
  }
}

//here we used the url to make filter for the apis
// the source of the code was from https://stackoverflow.com/questions/979975/how-to-get-the-value-from-the-get-parameters
function getUrlFilter() {
let url_string = window.location.href;
let url = new URL(url_string);
let urlValue = url.searchParams.get("Source");
if (!urlValue) {
  urlValue =api.newsSources;
}
return urlValue;
}


// here we call the functions and declare variables
let api = new Apis();
filter(api.newsSources);
loadApi(api.api1());
