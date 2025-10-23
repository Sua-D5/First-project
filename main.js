const display = document.getElementById("display");
const buttons= document.querySelectorAll("button");


buttons.forEach(button =>{
    button.addEventListener('click', () =>{
        const value = button.textContent;

        if (value ==="C") {
            display.value= "";
        }else if(value==="D") {
            display.value= display.value.slice(0, -1);
        }else if(value==="=") {
            try{
                display.value= eval(display.value);
            }catch {
                display.value="Error";
            }
        }else {
            display.value +=value;
        }
    });
});

/*
* This is a multiline comment line in JS
* */

// this is a single line comment in JS