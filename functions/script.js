

var expressfunction = function() {
    console.log("this is our express function")
    return
}


expressfunction()

function testParamters(testString, testnumber, testBoolean) {
    console.log(testString)
    console.log(testnumber)
    console.log(testBoolean)

    testFunction();
}

function testFunction(){
    console.log("this is our test function")
    return
}

testParamters("hello", 3, false);