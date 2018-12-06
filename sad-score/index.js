const CENTIMETERS_PER_INCH = 2.54;
const INCHES_PER_FOOT = 12;

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


    // START Height Score Calculator
    /*
        -add 1 point for every cm of your height over 177
        -subtract 1 point for every cm below 170
    */

    const MAX_HEIGHT_CM = 177;
    const MIN_HEIGHT_CM = 170;

    function get_height_score(){
        var score = 0;

        var height = parseInt($("#height_cm").val());

        if(isNaN(height)){
            height = 0;
        }

        if(height > MAX_HEIGHT_CM){
            score = height - MAX_HEIGHT_CM;
        }

        if(height < MIN_HEIGHT_CM){
            score = height - MIN_HEIGHT_CM;
        }

        console.log("Height Score: " + score);

        return score;
    }

    // END Height Calculator


    // START IQ Score Calculator
    /*
        -add 3 points if IQ above 130
        -subtract 3 points if IQ below 110
    */

    const MAX_IQ_SCORE = 130;
    const MIN_IQ_SCORE = 110;

    const IQ_SCORE_MAG = 3;

    function get_iq_score(){
        var score = 0;

        var iq_score = parseInt($("#iq").val());

        if(isNaN(iq_score)){
            iq_score = 0;
        }

        if(iq_score > MAX_IQ_SCORE){
            score = IQ_SCORE_MAG;
        }

        if(iq_score < MIN_IQ_SCORE){
            score = -IQ_SCORE_MAG;
        }

        console.log("IQ Score: " + score);

        return score;
    }

    // END IQ Score Calculator


    // START Instrument Score Calculator
    /*
        -add 3 points for every instrument you are trained classically in.
    */

    const INSTRUMENT_SCORE_MAG = 3;

    function get_instrument_score(){
        var score = 0;

        var num_instruments = parseInt($("#instruments").val());

        if(isNaN(num_instruments)){
            num_instruments = 0;
        }

        score = num_instruments * INSTRUMENT_SCORE_MAG;

        console.log("Instrument Score: " + score);

        return score;
    }

    // END Instrument Score Calculator


    // START Fluent Language Score Calculator
    /*
        -add 3 points for every language you can speak fluently other than english
    */

    const LANGUAGE_FLUENT_SCORE_MAG = 3;

    function get_language_fluent_score(){
        var score = 0;

        var num_langs = parseInt($("#foreign_langauges_fluent").val());

        if(isNaN(num_langs)){
            num_langs = 0;
        }

        score = num_langs * LANGUAGE_FLUENT_SCORE_MAG;

        console.log("Fluent Language Score: " + score);

        return score;
    }

    // END Fluent Language

    // START Non-fluent Language Score Calculator
    /*
        -add 1 point for every language you know but are not fluent in
    */

    const LANGUAGE_NONFLUENT_SCORE_MAG = 1;

    function get_language_nonfluent_score(){
        var score = 0;

        var num_langs = parseInt($("#foreign_langauges_nonfluent").val());

        if(isNaN(num_langs)){
            num_langs = 0;
        }

        score = num_langs * LANGUAGE_NONFLUENT_SCORE_MAG;

        console.log("Non-Fluent Language Score: " + score);

        return score;
    }

    // END Non-fluent Language

    // START Tattoo Score Calculator
    /*
        -subtract 1 point for every tattoo
    */

    const TATTOO_SCORE_MAG = -1;

    function get_tatoo_score(){
        var score = 0;

        var num_tattoos = parseInt($("#tattoos").val());

        if(isNaN(num_tattoos)){
            num_tattoos = 0;
        }

        score = num_tattoos * TATTOO_SCORE_MAG;

        console.log("Tattoo Language Score: " + score);

        return score;
    }

    // END Tattoo Language


    // START Calculate Score
    $("#calculate").on("click", function(){
        console.log("Calculate");
        var score = 0;

        // Handles all simple check boxes.
        $(":checkbox").each(function(index ) {
            const value = parseInt($(this).val());
            const checked = $(this).prop("checked");
            // console.log( index + ": " + value + " : " + checked);

            if(checked){
                score += value;
            }
        });

        // Calculate numeric scores.
        score += get_height_score();
        score += get_iq_score();
        score += get_instrument_score();
        score += get_language_fluent_score();
        score += get_language_nonfluent_score();
        score += get_tatoo_score();


        // Update score and show score.
        $("#score").text(score);
        $("#score_box").show();
    });
    // END Calculate Score
});