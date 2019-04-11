
$('#sources li a').click(function(){
  var sourceID = $(this).attr("id");

  if (sourceID === "source1"){
    $('#main.container article').remove();
    var url = 'https://newsapi.org/v2/top-headlines?' +
              'country=us&' +
              'apiKey=5b6c1d967bad4c538b0e03cb15aa9950';

    var arrayOfjQueryArticles = []
    var arrayOfArticles = []

    $.get(url)
    .done(function(response) {
	     for (var i=0; i<response.articles.length; i++) {

  		  let source = response.articles[i].source.name
  		  let title = response.articles[i].title
    		let imgSrc = response.articles[i].urlToImage
  		  let articleURL = response.articles[i].url
  		  let newArticle = `
  			 <article id=${i} class="article">
    		  <section class="featuredImage">
      		<img src="${imgSrc}" alt="" />
    		  </section>
    		  <section class="articleContent">
        	<a href="${articleURL}"><h3>${title}</h3></a>
        	<h6>${source}</h6>
    		  </section>
    		  <section class="impressions">
      		${i+1}
    		  </section>
    		  <div class="clearfix"></div>
    		  </article>
  			 ` 

  		  arrayOfjQueryArticles.push(newArticle)
	     } //for close

	     $('#main').append(arrayOfjQueryArticles)

    	 $(document).ready(function(){ 
   	  	 $('#main').on('click','.article',function(){
      		  var popupId = $(this).attr('id');
      		  var x = document.getElementById(popupId);

      		  x.onclick = function(event) {
				      event.preventDefault();
				      document.getElementById("popUp").setAttribute("class","");
				      let newPopup =`
					     <h1>${response.articles[popupId].title}</h1>
					     <p>${response.articles[popupId].description}</p>
					     <a href="${response.articles[popupId].url}" 
               class="popUpAction" target="_blank">Read more from source</a>
					     `
				      $('#popUpSummary').append(newPopup);
            }

  		    });

  		    $('#popUp').on('click','.closePopUp',function(){
            document.getElementById("popUp").setAttribute("class","loader hidden");
			       $('#popUpSummary.container h1').remove();
			       $('#popUpSummary.container p').remove();
			       $('#popUpSummary.container a').remove();
		      });

	       });
	
    }); //.done close
  } //if close


  if (sourceID === "source2"){
    $('#main.container article').remove();
    var url = 'https://content.guardianapis.com/search?api-key=79653edc-ecdf-49fc-8be6-31f8cf7d3c38';

    var arrayOfjQueryArticles = []
    var arrayOfArticles = []

    $.get(url)
    .done(function(response) {
       for (var i=0; i<response.response.results.length; i++) {

        let source = response.response.results[i].sectionName
        let title = response.response.results[i].webTitle
        //let imgSrc = response.results[i].thumbnail
        let articleURL = response.response.results[i].webUrl
        let newArticle = `
          <article id=${i} class="article">
          <section class="articleContent">
          <a href="${articleURL}"><h3>${title}</h3></a>
          <h6>${source}</h6>
          </section>
          <section class="impressions">
          ${i+1}
          </section>
          <div class="clearfix"></div>
          </article>
          ` 

        arrayOfjQueryArticles.push(newArticle)
       } //for close

       $('#main').append(arrayOfjQueryArticles)

       $(document).ready(function(){ 
         $('#main').on('click','.article',function(){
            var popupId = $(this).attr('id');
            var x = document.getElementById(popupId);

            x.onclick = function(event) {
              event.preventDefault();
              document.getElementById("popUp").setAttribute("class","");
              let newPopup =`
               <h1>${response.response.results[popupId].webTitle}</h1>
               <p>${response.response.results[popupId].sectionName}</p>
               <a href="${response.response.results[popupId].webUrl}" 
               class="popUpAction" target="_blank">Read more from source</a>
               `
              $('#popUpSummary').append(newPopup);
            }

          });

          $('#popUp').on('click','.closePopUp',function(){
            document.getElementById("popUp").setAttribute("class","loader hidden");
             $('#popUpSummary.container h1').remove();
             $('#popUpSummary.container p').remove();
             $('#popUpSummary.container a').remove();
          });

         });
  
    }); //.done close
  } //if close


  if (sourceID === "source3"){
    $('#main.container article').remove();
    var url = 'https://api.nytimes.com/svc/news/v3/content/all/all.json?' +
              'api-key=CGAVaD7Wp9DvW2YEZ2TZe8aJgw4msGX1';

    var arrayOfjQueryArticles = []
    var arrayOfArticles = []

    $.get(url)
    .done(function(response) {
       for (var i=0; i<response.results.length; i++) {

        let source = response.results[i].material_type_facet
        let title = response.results[i].title
        let imgSrc = response.results[i].thumbnail_standard
        let articleURL = response.results[i].url
        let newArticle = `
          <article id=${i} class="article">
          <section class="featuredImage">
          <img src="${imgSrc}" alt="" />
          </section>
          <section class="articleContent">
          <a href="${articleURL}"><h3>${title}</h3></a>
          <h6>${source}</h6>
          </section>
          <section class="impressions">
          ${i+1}
          </section>
          <div class="clearfix"></div>
          </article>
          ` 

        arrayOfjQueryArticles.push(newArticle)
       } //for close

       $('#main').append(arrayOfjQueryArticles)

       $(document).ready(function(){ 
         $('#main').on('click','.article',function(){
            var popupId = $(this).attr('id');
            var x = document.getElementById(popupId);

            x.onclick = function(event) {
              event.preventDefault();
              document.getElementById("popUp").setAttribute("class","");
              let newPopup =`
               <h1>${response.results[popupId].title}</h1>
               <p>${response.results[popupId].abstract}</p>
               <a href="${response.results[popupId].url}" 
               class="popUpAction" target="_blank">Read more from source</a>
               `
              $('#popUpSummary').append(newPopup);
            }

          });

          $('#popUp').on('click','.closePopUp',function(){
            document.getElementById("popUp").setAttribute("class","loader hidden");
             $('#popUpSummary.container h1').remove();
             $('#popUpSummary.container p').remove();
             $('#popUpSummary.container a').remove();
          });

         });
  
    }); //.done close
  } //if close

}); //sourceID close
