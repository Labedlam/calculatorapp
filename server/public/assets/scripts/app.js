/**
 * Created by Zeo on 10/30/15.
 */
var urlDefine;
var numbersArray=[];



$(document).ready(function() {

    $("#add").on('click', function () {
        urlDefine = "/add"
    });
    $("#subtract").on('click', function () {
        urlDefine = "/subtract"
    });
    $("#multiply").on('click', function () {
        urlDefine = "/multiple"
    });
    $("#divide").on('click', function () {
        urlDefine = "/divide"
    });


      $("#calculate").on('click', function () {

          sendDataToServer();
          console.log("these are the numbers");

      });


});


//function that gets (retrieves) the calculate data from the server
//function getCalculatedData(){
//    $.ajax({
//        type: "GET",
//        url: "/data",
//        success: function(data){
//            console.log(data);
//        }
//    });
//}

//function takes data from client side input forms and gives the information to the server
function sendDataToServer(){


    var kittyFooFoo={};


    $.each($("#inputForm").serializeArray(), function(i,field){
      kittyFooFoo[field.name]= field.value;
    });

    $("#inputForm").find("input[type=text]").val("");

    ajaxPost(kittyFooFoo);
    clearObject(kittyFooFoo);

    console.log("Is the object coming into the array now?",kittyFooFoo);
}

function ajaxPost(Numbers) {

    $.ajax({
        type: "POST",
        url: urlDefine,
        data: Numbers,
        beforeSend: function () {
            console.log("HERE IS DATA", Numbers);
        },
        success: function (data) {


            console.log("(Mario Voice):HERE YOU GO", data);
            Numbers=data;
            Numbers.answer = data.answer;
            Numbers.numberXInput=data.numberXInput;
            Numbers.numberYInput=data.numberYInput;

            console.log("Here is the Object",Numbers);
            clearButton(Numbers);
            appendResultsToDOM(Numbers);

            return Numbers;
        }

    });
//return Numbers;
}
function appendResultsToDOM(Numbers){

    console.log(Numbers.answer);
    var $el="<h1 id='finalAnswer'>"+Numbers.answer+"</h1>";
    $(".results").append($el);

}

function clearObject(Numbers){
    for (var answer in Numbers) delete Numbers[answer];
    for (var numberXInput in Numbers) delete Numbers[numberXInput];
    //for (var y in Numbers) delete Numbers[y];

}

/////APPENDING TO THE DOM
    function clearButton(Numbers){
        $("#clear").on('click', function () {
            $("#inputForm").find("input[type=text]").val("");
            $('.results').find("#finalAnswer").remove();
            clearButton(Numbers);

            console.log("what happens to numbers when I press the clear button", Numbers.numberXInput);
            console.log(Numbers.numberXInput);

        });
    }