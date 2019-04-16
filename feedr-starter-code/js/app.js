/*
  Please add all Javascript code to this file.
*/

$(document).ready(function(){
  $('#linkOne').click(function(e){
    $.ajax({
      url: 'https://github-trending-api.now.sh/repositories?language=javascript&since=weekly',
      success: function(data){
        var count = $('#main');
        count.html('')
        $.each(data,function(i,v){
          count.append('<article class="article"><section class="featuredImage"><img src="' + v.builtBy[0].avatar + '" alt="" />'+
            '</section><section class="articleContent"> <a href="' + v.url + '"><h3>' + v.name +  '</h3></a><h6>' + v.language + '</h6>'+
            '</section><section class="impressions">' + v.stars +'</section><div class="clearfix"></div></article>')
        })
      },
      error: function(e){
        alert('Please try again later');
      }
    })
    e.preventDefaults();
    return false;
  })
});
