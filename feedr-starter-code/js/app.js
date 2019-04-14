/*
  Please add all Javascript code to this file.
*/



      let url = 'https://content.guardianapis.com/search?api-key=3e7d591d-d098-4943-9ae4-8ee8ad7a9a01'; // base URL
      // Object storing each key and value we need in our query.
      // This makes it clear what options we're choosing, and makes it easier
      // to change the values or add/remove options.

      $.get(url)
        .done(function(response) {
        	for(var i = 0; i<= 9; i ++ ){
var test = response.response.results[i].webTitle;
    //    		console.log(response.response.results[i].type);
        		console.log(response.response.results[i].webTitle);
        		$("articleContent").addClass(test)
          
      }});