function sayHello (){
    setTimeout(function () {
        console.log(`${2 + 2}`);
    }, 3000);
    setTimeout(function () {
        console.log(`${3 + 3}`);
    }, 2000);
    console.log("This is outside my timeout");
}
sayHello();