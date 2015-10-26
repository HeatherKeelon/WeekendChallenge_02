$(document).ready(function(){

    callAjax();//Calls the functon that contains the asynchronous ajax data. Will wait for doc.ready to call.



});
var indexTracker=0;
//Contains all of the data from ajax. On success, it will call the setUp function. Important to have, the setUp can now access the data from ajax.
function callAjax() {
    $.ajax({
        type: "GET",
        url: "/data",
        success: setUp


    });

}
//This function contains all of the information needed to update the carousel. Sets data as a parameter, which it gets from the ajax. Var studentArray pulls the array from the ajax data so that it can be accessed much easier via a single variable.
//Function also creates the navigation buttons, and sets the content of #studentbox. Also allows studentArray to be passed to all of the other functions so that they can access the data content.
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

//The content in #studentbox.
function updateStudents(array){

    for (var i=0; i<array.length; i++) {
        if(indexTracker==i) {
            var $el = $("#studentbox").children().last();
            var gitLink = array[indexTracker]["github"];
            var shout = array[indexTracker]["shoutout"];
            //$("#studentbox").append("<div></div>");
            $("#studentbox").fadeOut(200, function(){
                $("#studentbox").empty();


                $("#studentbox").append("<h3>Name: " + array[indexTracker]["name"] + "</h3>").hide().fadeIn();
                $("#studentbox").append("<p class='shoutout'>" + shout + "</p>").hide().fadeIn();
                $("#studentbox").append("<p class='address'>GitHub Address: <a href=gitLink>" + gitLink + "</a></p>").hide().fadeIn();
            });
        }
    }
}

//creates all divs within the #navigation. Set up so that the index buttons are between prev and next.
function createNav (array){
    $("#navigation").append("<div id='prevBtn' class='btn btn-success'><</div>");
    createNavBtn(array);
    $("#navigation").append("<div id='nextBtn' class='btn btn-success'>></div>");

}

//creates the index divs.
function createNavBtn (array){
    for (var i=0; i<array.length; i++) {
        $("#navigation").append("<div class='indexbox' id='index" + i + "'></div");
        $("#index0").addClass("index-active");
    }

}

//updates index that carries the index-active class.
function indexUpdate(array){
    for (var i=0;i<array.length; i++){
        $("#index" + i).removeClass("index-active");

        if(i==indexTracker){
            $("#index" + i).addClass("index-active");
        }
    }

}

//The function called from the #nextbtn.on. Also calls updateStudents to update content of #studentbox.
function nextSlide(array){
    indexTracker++;
    if(indexTracker>=array.length){
        indexTracker=0;
    }


    console.log("forwards");
    indexUpdate(array);
    console.log(indexTracker);

   // $("#studentbox").children().fadeIn(500, function(){
        updateStudents(array);
      //  });

}

//Opposite of function nextSlide.
function prevSlide(array){
    indexTracker--
    if(indexTracker<0){
        indexTracker=array.length -1;
    }
    indexUpdate(array);
    console.log("backwards");
    $("#studentbox").children().fadeIn(500, function(){
    updateStudents(array);
    });
}


















