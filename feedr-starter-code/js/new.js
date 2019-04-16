
$(function () {
    $("#popUp").removeClass("hidden");
    
    var fahad = [
  ];
    function test(array_name, source) {
        var main_url = "https://newsapi.org/v1/articles?"
        var api_key = "apiKey=1f237dd5aac5431b86c2f5597690b2f6"

        var url = main_url + source + api_key;

        $.ajax({
            type: 'GET',
            url: url,
            // contentType: "json",
            success: function (data) {
                $(".article").empty();
                $(".loader").hide();
                var data1 = data.articles ;     
                data1.forEach((currentValue, index) => {
                  
                  console.log(currentValue);
                    let category = "lifestyle";
                    let title = currentValue.title;
                    let imgSrc = currentValue.urlToImage;
                    let articleURL = currentValue.url;
                    let description = currentValue.description;                  
                    fahad.push(currentValue);
                    let newArticle = `
                    <article id=${index} class="article">
                        <section class="featuredImage">
                        <img src="${imgSrc}" alt="" />
                        </section>
                        <section class="articleContent">
                            <a href="${articleURL}"><h3>${title}</h3></a>
                            <h6>${description}</h6>
                        </section>
                        <section class="impressions">
                        526
                        </section>
                        <div class="clearfix"></div>
                        </article>
                    `;

                    array_name.push(newArticle);
                })
                $("#main").append(array_name);
                $('.article').click(function() {
                  event.preventDefault();
                    console.log(this)
                    var article_id = $(this).attr("id");
                    var articleURL = $( `#${article_id} > .articleContent > a`).attr("href");
                    // var articleimgSrc = $( `#${article_id} > .featuredImage > img`).attr("src");
                    var articletitle = $( `#${article_id} > .articleContent > a > h3`).text();
                    var articledescription = $( `#${article_id} > .articleContent > h6`).text();  
                    $("#cont").empty();
                  $(".loader").css("display", "block");
                  $(".container").show();
                  let art = `
                        <article id=${article_id}>
                        <h1>${articletitle}</h1>
                        <p>
                          ${articledescription}
                        </p>
                        <a href="${articleURL}" class="popUpAction" target="_blank">Read more from source</a>
                    
                      </div>                               
                    `;
                  $("#cont").append(art);
                });
            },
            error: function (error) {
                alert("something went wrong please try again ");            }


        })
    }

    const arrayOfjQueryArticles = []
    test(arrayOfjQueryArticles, "source=CNN&ign&bbc-news&sortBy=random&");
    
    $("#CNN").on("click", function () {
        const arrayOfCNNArticles = [];
        test(arrayOfCNNArticles, "source=CNN&sortBy=top&")

    })
    $("#IGN").on("click", function() {
        // $("#popUp").removeClass("hidden");
        const arrayOfIGNArticles = [];
        test(arrayOfIGNArticles, "source=ign&sortBy=top&");
    
    });

    $("#BBC").on("click", function() {
        const arrayOfBBCArticles = [];
        test(arrayOfBBCArticles, "source=bbc-news&sortBy=top&");
    });      
    $(".closePopUp").on("click", function() {
      $(".loader").hide();
    });
    $("#search").on("click", function() {
      $("#search").toggleClass("active");

    });
    $(".container a").on("click", function() {
      var mainPage = window.location.href;
      $(".container a").attr("href",mainPage);
      window.location.reload()
      console.log (mainPage);

    });
})