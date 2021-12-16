$(".botaoGerador").click(function(){
    let APIurl = 'https://api.nasa.gov/planetary/apod?'
    let APIkey = 'api_key=2rBaP6gpzWRR82PEGmVW7UV0taElpN1UFu85nOJM&'
    let bruteData = $('#dateInput').val()
    let APIdata = "date="+String(bruteData)+"&"
    let APIurlFull =  APIurl + APIkey + APIdata
    $.ajax({
        url: APIurlFull,
        success: function(response) {
            console.log(response)
            //pegar hdurl, explanation, title,date
            let title = response["title"]
            let date = response["date"]
            let hdurl = response["hdurl"]
            let url = response["url"]
            let explanation = response["explanation"]
            
            $(".mainAPI").show()
            $(".mainAPI").css('display','flex')

            $(".tituloAPI").text(title)
            $(".dataAPI").text(date)
            
            if(response.media_type == "image"){
                $(".imgAPI").attr("src",hdurl)
                $(".imgAPI").show()
                $(".videoAPI").hide()
            }else{
                $(".videoAPI").attr("src",url)
                $(".videoAPI").css("display","block")
                $(".videoAPI").show()
                $(".imgAPI").hide()
            }
            

            $(".lightboxAPI").attr("src",hdurl)
            $(".lightboxAPI").show()

            $(".explanationAPI").text(explanation)
        },
        error:function(erro) {
            console.log(erro)
        }
    })
})