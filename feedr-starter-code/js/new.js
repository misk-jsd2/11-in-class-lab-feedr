
$(function () {
    $("#popUp").removeClass("hidden");
    
    var fahad = {
      index : "",
      title: "",
     description: "",
      imgSrc: "",
      articleURL: ""
    };
    function test(array_name, source) {
        var main_url = "https://newsapi.org/v1/articles?"
        var api_key = "apiKey=1f237dd5aac5431b86c2f5597690b2f6"

        // var source = "source=CNN&ign&bbc-news&sortBy=random&";
        var url = main_url + source + api_key;

        $.ajax({
            type: 'GET',
            url: url,
            contentType: "json",
            success: function (data) {
                $(".article").empty();
                $(".loader").hide()


                var data1 = data.articles
                data1.forEach((currentValue, index) => {
                    let category = "lifestyle";
                    let title = currentValue.title;
                    let imgSrc = currentValue.urlToImage;
                    let articleURL = currentValue.url;
                    let description = currentValue.description;
                    fahad.title = title;
                    fahad.description = description;
                    fahad.imgSrc = imgSrc;
                    fahad.index = index
                    fahad.articleURL = articleURL;
                    console.log(fahad);



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
            },
            error: function (error) {
                console.log("something went wrong please try again ")
                console.log(error)
            }


        })
    }

    const arrayOfjQueryArticles = []
    test(arrayOfjQueryArticles, "source=CNN&ign&bbc-news&sortBy=random&");
    
    $("#CNN").on("click", function () {
        const arrayOfCNNArticles = [];
        test(arrayOfCNNArticles, "source=CNN&sortBy=top&")

    })
    $("#IGN").on("click", function() {
        $("#popUp").removeClass("hidden");
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

    $(".container").on("click", function(index) {
        // const arrayOfpopUpArticles = [];
        $("#cont").empty();
      $(".loader").css("display", "block");
      $(".container").show();

      let art = `
            <article id=${fahad.index}>
            <h1>${fahad.title}</h1>
            <p>
              ${fahad.description}
            </p>
            <a href="${fahad.articleURL}" class="popUpAction" target="_blank">Read more from source</a>
        
          </div>

       
        
        `;
      $("#cont").append(art);
    });

    
    $("#s_image").on("click", function() {
      console.log("hi fahad");
    });
})
