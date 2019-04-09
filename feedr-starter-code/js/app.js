/*
  Please add all Javascript code to this file.
*/

// by defult windows shuold be the firt scource

//creat 3 function for each API/AJAX call and parse the response

/*
  for each response 
      1- find an image
      2- artical
      3- catagory
      4- description 
      5- the for the url (the actual artical)

*/

var newsAPI = '31b842d19ab647dc94fd31301e4d9475';
var newsUrl = 'https://newsapi.org/v2/sources?apiKey=31b842d19ab647dc94fd31301e4d9475';
    
$.get(newsUrl, function(response) {

  const arrayOfjQueryArticles = [];

    console.log(response);

   
    response.sources.forEach((article, index) => {
      
      let id = article.id;
      let description = article.description;
      let catagory = article.category;
      let url = article.url;
      

      // console.log(id);
      // console.log(catagory);
      // console.log(description);
      // console.log(url);


      let newArticle = `
      <article id=${id} class="article">
      <section class="featuredImage">
      <img src="${''}" alt="images/article_placeholder_1.jpg" />
      </section>
      <section class="articleContent">
      <a href="${url}"><h3>${description}</h3></a>
      <h6>${catagory}</h6>
      </section>
      <section class="impressions">
      526
      </section>
      <div class="clearfix"></div>
      </article>
      `
    
      arrayOfjQueryArticles.push(newArticle);
     
      
    });
    
    
    $('#main').append(arrayOfjQueryArticles);
    
    $("a").click(function(event){
      event.preventDefault();

      
    });

    let event = document.getElementsByClassName("articleContent");
   
    let i;
  for (i = 0; i < event.length; i++) {
      event[i].addEventListener("click", function() {
      console.log("Hello World!");
      let popup = document.querySelector('#popUp');
      popup.classList.toggle("hidden");
      })
    }
    let closePopup = document.querySelector(".closePopUp").addEventListener("click", function(){
      let popup = document.querySelector('#popUp');
      popup.classList.toggle("hidden");

      let newPopup = `
      <div class="container">
      <h1>Article title here</h1>
      <p>
        Article description/content here.
      </p>
      <a href="#" class="popUpAction" target="_blank">Read more from source</a>
    </div>`
    })




  });
      


  