var CENTIMETERS_PER_INCH = 2.54;
var INCHES_PER_FOOT = 12;

$(document).ready(function(){
    // Hide Score Box until score is calculated.
    $("#score_box").hide();

    // START Height Calculator

    function imperial_to_centimeters(feet, inches){
        const total_inches = (feet * INCHES_PER_FOOT) + inches;
        const centimeters = total_inches * CENTIMETERS_PER_INCH;
        return centimeters;
    }

    function centimeters_to_imperial(centimeters){
        var inches = centimeters / CENTIMETERS_PER_INCH;
        var feet = Math.floor(inches/INCHES_PER_FOOT);
        inches -= feet * INCHES_PER_FOOT;
        inches = Math.round(inches);
        var height = {
            "feet": feet,
            "inches": inches
        }
        return height;
    }

    function update_cm(){
        var feet = $("#height_ft").val();
        var inches = $("#height_in").val();

        feet = parseInt(feet);
        inches = parseInt(inches);
        
        if(isNaN(feet)){

            console.log("Feet is NaN: " + feet);
            feet = 0;
        }
        if(isNaN(inches)){
            console.log("Inches is NaN: " + inches);
            inches = 0;
        }
        console.log("Feet = " + feet);
        console.log("Feet type: " + typeof(feet));
        console.log("Inches = " + inches);
        const cm = Math.round(imperial_to_centimeters(feet, inches));
        console.log("CM = " + cm);
        $("#height_cm").val(cm);
    }

    $("#height_cm").on("keyup", function(){
        const cm = parseInt(this.value);
        var height = centimeters_to_imperial(cm);

        const feet = height.feet;
        const inches = height.inches;
        $("#height_ft").val(feet);
        $("#height_in").val(inches);

    });

    $("#height_ft").on("keyup", function(){
        update_cm();
    });

    $("#height_in").on("keyup", function(){
        update_cm();
    });

    // END Height Calculator

    // START Calculate Score
    $("#calculate").on("click", function(){
        console.log("Click");
        $("#score_box").show();
    });
    // END Calculate Score
});