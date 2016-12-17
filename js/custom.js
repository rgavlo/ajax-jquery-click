"use strict"
function ajax( options ) {
    
    options = {
        type: options.type || "POST" , 
        url: options.url || "", 
        onComplete: options.onComplete || function () {},
        onError: options.onError || function () {},
        onSuccess: options.onSuccess || function () {},
        dataTypes: options.dataTypes || "text"
        
    };
    
    function httpSuccess ( httpRequest ) {
        try {
           return (httpReq.status >= 200 && httpReq.status < 300 || 
                httpRequest.status == 304 || 
                navigator.userAgent.indexOf('Safari') >= 0 && typeof 
                httpRequest.status == "undefined"); 
        } catch (e) {
            return false;
        }
    }
    
    
    
    var httpReq = new XMLHttpRequest();

    httpReq.open(options.type, options.url, true);


 
    
    httpReq.onreadystatechange = function () {


        //   jesli stan dokumentu zostal zmieniony -> httpReq.State
        //   0: polaczenie nie nawiazane,
        //   1: polaczenie nawiazane,
        //   2: żądanie odebrane, 
        //   3: przetwarzanie, 
        //   4: dane zwrócone i gotowe do użycia.



        if (httpReq.readyState == 4) {

            if (httpSuccess(httpReq)) {

                options.onSuccess(httpReq.responseText);



                httpReq = null;
            } else {
                options.onError(httpReq.statusText);
            }

        }

    }


    httpReq.send();

}

//
//function pobierzDane(event) {
//    event.preventDefault();
//    ajax ( {
//        type: "GET",
//        url: "http://echo.jsontest.com/imie/roman/oczy/brazowe/trawa/zielona",
//        onError: function(msg) {
//            console.log(msg);
//        },
//        onSuccess: function(response) {
//            
//            
//            var jsonObj = JSON.parse(response);
//            
//            var imie = document.createElement("p");
//            
//            imie.innerHTML = "Imie:" + jsonObj.imie;
//            
//            document.body.appendChild(imie);
//            
//            
//           
//            
//            var oczy = document.createElement("p");
//            
//            oczy.innerHTML = "Oczy:" + jsonObj.oczy;
//            
//            document.body.appendChild(oczy);
//            
//            
//            
//            
//            
//            var trawa = document.createElement("p");
//            
//            trawa.innerHTML = "Trawa:" + jsonObj.trawa;
//            
//            document.body.appendChild(trawa);
//            
//            
//            
//        }
    


  $.getJSON {
                url: "http://echo.jsontest.com/imie/roman/oczy/brazowe/trawa/zielona",
            }
            
    } );
