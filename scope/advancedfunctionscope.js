console.log("first function");
var numbers = [1,2,3];
for (var i in numbers) {
    console.log(numbers[i]);

}
//blocks create scopes
//counts from 1..3

console.log("second function ");
for(var i in numbers){
    setTimeout(function(){
        console.log(numbers[i]);
    }, 3000);
    //does not create a scope
    //prints 3 out 3 times
}

console.log("third function");
for (var i in numbers) {
    (function() {
        var j = i;
        setTimeout(function(){
            console.log(numbers[i]);
        }, 2000);
    })();
}