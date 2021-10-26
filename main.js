// select the targets
var screen = document.querySelector('#screen');
var btn = document.querySelectorAll('.btn');

// for of loops are itrate the value of objects 
for(item of btn){

    item.addEventListener('click', (e)=>{
        btnText = e.target.innerText;
        
        if(btnText == '00'){
            btnText = '00';
        }

        // console.log(btnText);
        screen.value += btnText;
    });
}

function getLastChar(){
    if(screen.value == ''){
        lastVal = '';
    }else{
        lastVal = screen.value.substring(screen.value.length - 1);
    }
    return lastVal;
}

function addPlus(){
    L = getLastChar();
    if(L == '*' || L == '/' || L == '+' || L == '-' || L == '.'){
        screen.value += '';
    }else{
        screen.value += '+';
    }
}

function addMinize(){
    L = getLastChar();
    if(L == '*' || L == '/' || L == '+' || L == '-' || L == '.'){
        screen.value += '';
    }else{
        screen.value += '-';
    }
}

function addMultiply(){
    L = getLastChar();
    if(L == '*' || L == '/' || L == '+' || L == '-' || L == '.'){
        screen.value += '';
    }else{
        screen.value += '*';
    }
}

function addDivision(){
    L = getLastChar();
    if(L == '*' || L == '/' || L == '+' || L == '-' || L == '.'){
        screen.value += '';
    }else{
        screen.value += '/';
    }
}

function addPoint(){
    L = getLastChar();
    if(L == '*' || L == '/' || L == '+' || L == '-' || L == '.'){
        screen.value += '';
    }else{
        screen.value += '.';
    }
}


// print function for the print result on display
function printResult(){
    if(screen.value == ''){
        screen.value == '';
    }
    else{
        screen.value = eval(screen.value);
    }
}


// function factorial(){
//     let ans = 1;
//     let n = screen.value;
//     if(n == 0 || n == 1){
//         screen.value = ans;
//     }else{
//         for(var i=n; i>=1; i--){
//             ans = ans * i;
//         }
//         screen.value = ans;
//     }
// }


