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
var newsUrl = "https://newsapi.org/v2/everything?q=bitcoin&apiKey=31b842d19ab647dc94fd31301e4d9475";
    
let publishedAt = '';
      let title = '';
      let id = '';
      let description = '';
      let author = '';
      let url = '';
      let img = '';



$.get(newsUrl, function(response) {

  
  

  const arrayOfjQueryArticles = [];
  const indexs = [];
  

    console.log(response);
    console.log(response.articles[0].title);

   
    response.articles.forEach((article, index) => {
      
       publishedAt = article.publishedAt;
       title = article.title;
       id = article.source.id;
       description = article.description;
       author = article.author;
       url = article.url;
      img = article.urlToImage;
      
      
      indexs.push(index);
      
      

      // console.log(id);
      // console.log(author);
      // console.log(description);
      // console.log(url);
      


      let newArticle = `
      <article id=${id} class="article">
      <section class="featuredImage">
      <img src="${img}" alt="images/article_placeholder_1.jpg" />
      </section>
      <section class="articleContent">
      <h3>${title}</h3>
      <h6>${author}</h6>
      </section>
      <section class="impressions">
      ${id}
      </section>
      <div class="clearfix"></div>
      </article>
      `
      arrayOfjQueryArticles.push(newArticle);
    });
    console.log(indexs);
    // console.log(articlesProprty);
    
      
    
  
    
    $('#main').append(arrayOfjQueryArticles);
    
    // $("a").click(function(event){
    //   event.preventDefault();
    // });

    // console.log(arrayOfjQueryArticles);
    

    let event = document.getElementsByClassName("articleContent");
   


    // ------ to use the article index to match the popup index'x article ------

    
  for (let i = 0; i < indexs.length; i++) {

      event[i].addEventListener("click", function() {
      console.log("Hello World!");
      console.log(i);

      
      let popup = document.querySelector('#popUp');
      popup.classList.toggle("hidden");
      if(popup){
        
        
      document.querySelector("#popTitle").innerHTML = response.articles[i].title;

      document.querySelector("#popDescrpt").innerHTML = response.articles[i].description;

      document.querySelector("#articaleLink").href = response.articles[i].url;   

        
      }
      document.querySelector(".closePopUp").addEventListener("click", function(){
        let closePopup = document.querySelector('#popUp');
        closePopup.classList.toggle("hidden");
           });
      
    }
 )}
});


