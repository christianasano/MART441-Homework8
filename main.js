var dogSelector = "#orange";
var allDogs = new Array();
class DogInfo{
    constructor(selector, imagePath)
    {
        this.selector = selector;
        this.imagePath = imagePath;
    }

    get theSelector(){
        return this.selector;
    }

    get theImagePath(){
        return this.imagePath;
    }

    toString()
    {
        return this.selector + ":" + this.imagePath; 
    }
}

function initializeArray()
{

    var dog = new DogInfo("#orange", "images/orange.jpg");
    allDogs.push(dog);

}
$(document).ready(function(){
    initializeArray();
    console.log(allDogs.length);
    console.log(allDogs[0].toString());
    console.log(allDogs[0].theSelector);
    console.log(allDogs[0].theImagePath);
    
    //$(allDogs[0].theSelector).src = allDogs[0].theImagePath;
    //$("#my_image").attr("src","second.jpg");
    $(allDogs[0].theSelector).attr("src", allDogs[0].theImagePath);

    $("button").click(function(){
       
        $(".stuff").fadeOut();

        $("#third").toggle();
           setInterval(moveSquare, 1000);
        
        $(allDogs[0].theSelector).fadeOut().fadeIn();
        
    });
    
});

function moveSquare()
{
    $("#square").animate({left:250}).animate({top:400}).animate({left:0}).animate({top:300});
}
$(document).ready(function() {
    // Initially hide the second image
    $("#views").hide();

    // Function to fade in and out the second image
    function fadeInOut() {
        $("#views").fadeIn(1000).delay(2000).fadeOut(1000);
    }

    // Call the fadeInOut function every 4 seconds
    setInterval(fadeInOut, 4000);
});
function moveShapes() {
    $("#square").animate({left:250}).animate({top:400}).animate({left:0}).animate({top:300});
    $("#circle").animate({left:221}).animate({top:300}).animate({left:250}).animate({top:400});
}

$(document).ready(function() {
    setInterval(moveShapes, 3000); // Call moveShapes function every 3 seconds
});
function moveText() {
    $("#movingText").animate({left:400}).animate({top:200}).animate({left:0}).animate({top:100});
}

$(document).ready(function() {
    $("#moveTextButton").click(moveText); // Call moveText function when button is clicked
});
$(document).ready(function() {
    // Initially hide the second image
    $("#views").hide();

    // Function to fade in and out the first and second images
    function fadeInOutImages() {
        $("#orange").fadeIn(1000).delay(2000).fadeOut(1000);
        $("#views").fadeIn(1000).delay(2000).fadeOut(1000);
    }

    // Call the fadeInOutImages function every 4 seconds
    setInterval(fadeInOutImages, 4000);
});
