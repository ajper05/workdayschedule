$(document).ready(function() {
    //Delcaring time variables. 
    let time = moment().hours();
    let hour = $(".time-block");
    let day = moment().format("MMM Do YY");   
    
//Iterates over each element with id attribute and checks the time against the time specified by the id value to determine if it is past, present or future and then adds the appropriate class styling
    hour.each(function(){
        let currentId = $(this).attr("id")
        if(parseInt(currentId) == time){
            $(this).addClass("present")
        }
        else if(parseInt(currentId) > time){
            $(this).addClass("future");
        }
        else{
            $(this).addClass("past");
        }
    }) 
     
    //Grabs the time and input and stores them in local storage
    $(".saveBtn").click(function(){
        let time = $(this).parent().attr("id");
        let userInput = $(this).siblings(".description").val();
        

        localStorage.setItem(time, userInput);
    })

    //Grabs any text that was saved in any description class textarea fields from local storage
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));




 //displays today's date in the currentday <p> tag
 currentday = $("#currentDay");
 currentday.text(day);


});