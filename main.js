$(document).ready(function() {
    let time = moment().hours();
    console.log(time)
    let hour = $(".time-block")

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

});