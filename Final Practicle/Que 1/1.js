function synchronousFunction() {
    console.log("hello Sam,");
    
    console.log("How are you?");
}

function asynchronousFunction() {

    console.log("hello Rahul,");
    setTimeout(() => { console.log("Goodbye!");}, 2000); 
    console.log("How are you?");
}


synchronousFunction();
asynchronousFunction();
