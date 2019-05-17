var button = document.getElementsByClassName("button");
var display = document.getElementById("display");
var op1=0;
var op2= null;
var operator = null;
var flag = false;

for(var i=0; i<button.length ; i++){
    
    button[i].addEventListener('click',function(){
        var value = this.getAttribute('data-value');
        if(value== '+' || value == '*' || value == '-'){
            flag=false;
            operator= value;
            op1= parseFloat(display.textContent);
            display.innerText='';
        }

        else if(value == '.'){
            var a=display.textContent;
            
            if(flag==true){
                alert("Invalid Input");
                display.innerText= Error;
                flag=false;
            }

            else{
                a=a+".";
                display.innerText=a;
                flag=true;
            }
            
        }

        else if(value == '/'){
            flag=false;
            operator= value;
            op1= parseFloat(display.textContent);
            display.innerText=' ';
        }

        else if(value == '+/-'){

            flag=false;
            var a=parseFloat(display.textContent);
            a=a*(-1);
            display.innerText=a;
        }

        else if(value == '%'){
            flag=false;
            var a=parseFloat(display.textContent);
            if(a== null)
             display.innerText = Error;

             else{
                 a=a/100;
                 display.innerText = a;
             }
        }

        else if(value == '='){
            flag=false;
            op2= parseFloat(display.textContent);
            if(op1 == 0 && operator =='/' && op2== 0 ){
                display.innerText= 'Error';
            }

            else if(operator =='/' && op2== 0){
                display.innerText='Infinite';
            }
            else{
            display.innerText='';
            var ans = eval(op1+" "+ operator+" "+ op2);
            display.innerText = ans;
            }
        }

        else if(value == 'AC'){
            display.innerText='';
        }

        else{
            display.innerText += value;
        }
    });
}