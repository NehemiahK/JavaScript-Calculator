var symbols = ["/","*","-","+","."]

$( document ).ready(function() {

    var display = "0";
    $("#display").html(display);

    $('button').click(getValue)

    function getValue(){
        var currVal = $(this).val()
        var functional = true;

        if (symbols.includes(currVal) ){
            functional =  handleOp(currVal,display);
        }

        if (functional){
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
            if (display.length>10){
                display = display.substr(0,11)
            }
        }

        $("#display").html(display);

    }
    function handleOp(op,x){
        var lastChar = x[x.length-1];

        if (symbols.includes(lastChar)){
            return false;
        }
        return true;

    }

});
