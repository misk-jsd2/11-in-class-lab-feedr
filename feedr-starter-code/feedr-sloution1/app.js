var diggArticlesArray = [];

function getDiggArticles() {
  let url = 'https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json';

  fetch(url)
    .then(response => {
      console.log(response)
      return response.json()
    })
    .then(jsonResponse => {
      console.log(jsonResponse)
    })

}


getDiggArticles()