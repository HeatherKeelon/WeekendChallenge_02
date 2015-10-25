$(document).ready(function(){

    callAjax();



});
var indexTracker=0;

function callAjax() {
    $.ajax({
        type: "GET",
        url: "/data",
        success: setUp


    });

}

function setUp(data){
    var studentsArray=data.zeta;

    createNav(studentsArray);
    updateStudents(studentsArray);

    $("#navigation").on('click', '#nextBtn', function(){
        nextSlide(studentsArray);
    });
    $("#navigation").on('click', '#prevBtn', function(){
        prevSlide(studentsArray);
    });
}


function updateStudents(array){
    for (var i=0; i<array.length; i++) {
        if(indexTracker==i) {
            $("#studentbox").empty();
            $("#studentbox").append("<div></div>");
            var $el = $("#studentbox").children().last();
            var gitLink = array[indexTracker]["github"];
            var shout = array[indexTracker]["shoutout"];
            $el.append("<h3>Name: " + array[indexTracker]["name"] + "</h3>");
            $el.append("<p class='shoutout'>" + shout + "</p>");
            $el.append("<p class='address'>GitHub Address: <a href=gitLink>" + gitLink + "</a></p>");
        }
    }

}

function createNav (array){
    $("#navigation").append("<div id='prevBtn'><</div>");
    createNavBtn(array);
    $("#navigation").append("<div id='nextBtn'>></div>");

}


function createNavBtn (array){
    for (var i=0; i<array.length; i++) {
        $("#navigation").append("<div class='indexbox' id='index" + i + "'></div");
        $("#index0").addClass("index-active");
    }

}

function indexUpdate(array){
    for (var i=0;i<array.length; i++){
        $("#index" + i).removeClass("index-active");

        if(i==indexTracker){
            $("#index" + i).addClass("index-active");
        }
    }

}

function nextSlide(array){
    indexTracker++;
    if(indexTracker>=array.length){
        indexTracker=0;
    }
    console.log("forwards");
    indexUpdate(array);
    console.log(indexTracker);
    updateStudents(array);

}


function prevSlide(array){
    indexTracker--
    if(indexTracker<0){
        indexTracker=array.length -1;
    }
    indexUpdate(array);
    console.log("backwards");
    updateStudents(array);
}


















//var indexTracker=0;
//
//$(document).ready(function(){
//
//    callAjax();
//
//    $("#navigation").append("<div id='prevBtn'>Prev</div>");
//    $("#prevBtn").on('click', prevSlide);
//    console.log(studentsArray);
//    createNavBtn(studentsArray);
//    $("#navigation").append("<div id='nextBtn'>Next</div>");
//    $("#nextBtn").on('click', nextSlide);
//    //indexUpdate();
//
//    });
//
//
//
//
//
////Initial student at index 0 is showing upon page load, but next button does not work because "property name of undefined" cannot be read.
//
////function callAjax () {
////    $.ajax({
////        type: "GET",
////        url: "/data",
////        success: function (data) {
////            //makeWebpage(data) Idea at the very end once you get it working, try to the carousel function to call all of the other functions, then have this one call carousel.
////
////            studentsArray=data.zeta;
////            appendDOM(studentsArray);
////
////
////        }
////    })
////}
////
////
////
////function nextSlide(studentsArray){
////    indexTracker++;
////    if(indexTracker>=studentsArray.length){
////        indexTracker=0;
////    }
////    console.log("forwards");
////    //indexUpdate(studentsArray);
////    console.log(indexTracker);
////    console.log(studentsArray);
////    callAjax();
////
////
////}
////
////function createNavBtn (array){
////   for (var i=0; i<array.length; i++) {
////       $("#navigation").append("<div class='indexbox' id='index" + i + "'></div");
////    }
////
////}
////
////function prevSlide(array){
////    indexTracker--
////    if(indexTracker<0){
////        indexTracker=array.length -1;
////    }
////    indexUpdate(array);
////    console.log("backwards");
////}
////
////
//////function indexUpdate(){//Do not see the shift in the index buttons. Check out css. Check to see if class is added.
//////    for (var i=0;i<studentsArray.length; i++){
//////        $("#index" + i).removeClass("index-active");
//////
//////        if(i==indexTracker){
//////            $("#index" + i).addClass("index-active");
//////        }
//////    }
//////
//////}
////
////
////function appendDOM(studentsArray){
////    for (var i=0; i<studentsArray.length; i++) {
////        if(indexTracker==i) {
////            $("#studentbox").empty();
////            $("#studentbox").append("<div></div>");
////            var $el = $("#studentbox").children().last();
////            $el.append("<p>" + studentsArray[indexTracker]["name"] + "</p>");
////            $el.append("<p>" + studentsArray[indexTracker]["shoutout"] + "</p>");
////            $el.append("<p>" + studentsArray[indexTracker]["github"] + "</p>");
////
////            $("#navigation").append("<div class='indexbox' id='index" + i + "'></div");
////            $("#index" + (i-1)).removeClass("index-active");
////
////            if(i==indexTracker){
////                $("#index" + i).addClass("index-active");
////            }
////        }
////    }
////
//}