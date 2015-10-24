$(document).ready(function(){

    $.ajax({
        type: "GET",
        url: "/data",
        success: function (data) {
            //makeWebpage(data) Idea at the very end once you get it working, try to the carousel function to call all of the other functions, then have this one call carousel.

            var studentsArray=data.zeta;
            createCarousel(studentsArray);
            appendDOM(studentsArray);
        }
    });



});
var indexTracker=0;
//Initial student at index 0 is showing upon page load, but next button does not work because "property name of undefined" cannot be read.
function appendDOM(studentsArray){
    //for (var i=0; i<studentsArray.length; i++) {
    //    if(indexTracker==i) {
         $("#studentbox").empty();
        $("#studentbox").append("<div></div>");
        var $el = $("#studentbox").children().last();
        $el.append("<p>" + studentsArray[indexTracker]["name"] + "</p>");
        $el.append("<p>" + studentsArray[indexTracker]["shoutout"] + "</p>");
        $el.append("<p>" + studentsArray[indexTracker]["github"] + "</p>");
//    }
//}

}


function createCarousel (studentsArray){
    $("#navigation").append("<div id='prevBtn'>Prev</div>");
    $("#prevBtn").on('click', prevSlide);
    createNavBtn(studentsArray);
    $("#navigation").append("<div id='nextBtn'>Next</div>");
    $("#nextBtn").on('click', nextSlide);

}



function nextSlide(array){
    indexTracker++;
    if(indexTracker>=array.length){
        indexTracker=0;
    }
    console.log("forwards");
    indexUpdate(array);
    console.log(indexTracker);
    appendDOM(array);

}

function createNavBtn (array){
    for (var i=0; i<array.length; i++) {
        $("#navigation").append("<div class='indexbox' id='index" + i + "'></div");
    }

}

function prevSlide(array){
    indexTracker--
    if(indexTracker<0){
        indexTracker=array.length -1;
    }
    indexUpdate(array);
    console.log("backwards");
}


function indexUpdate(array){//Do not see the shift in the index buttons. Check out css. Check to see if class is added.
    for (var i=0;i<array.length; i++){
        $("#index" + i).removeClass("index-active");

        if(i==indexTracker){
            $("#index" + i).addClass("index-active");
        }
    }

}


