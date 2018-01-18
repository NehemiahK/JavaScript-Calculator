$( document ).ready(function() {

    var display = "0";
    $("#display").html(display);

    $('button').click(getValue)

    function getValue(){
        if ($(this).val()=='equals'){
            display = eval(display);
        }
        else if($(this).val()=='clear'){
            display = "0";
        }
        else if (display==='0'){
            display = $(this).val();
        }
        else{
            display += $(this).val();
        }

        $("#display").html(display);

    }

});
