var image = document.getElementById("image");
var index = 1; //First Pic

function Next() {

    index++;
    if(index > 6) {

        index = 1;
    }

    image.src = index + ".jpg";
}

function Prev() {

    index--;
    if(index < 1) {

        index = 6;
    }

    image.src = index + ".jpg";
} 


function Show() {


    set = setInterval(Next, 1000);
}

function Stop() {

    clearInterval(set);
}