var one = 1;

function sayOne(){
    console.log("Message inside sayOne function");
    console.log(one);
}

sayOne();

function sayOne(){
    console.log("new scope of sayOne function")
    var one = 2;
    console.log(one);
}

function sayOne() {
    var one = 2;
    (function () {
        var one = 3;
        console.log(one);
    })();



}