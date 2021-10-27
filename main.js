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
        lastCharVal = '';
    }else{
        lastCharVal = screen.value.substring(screen.value.length - 1);
    }
    return lastCharVal;
}

function addPlus(){
    L = getLastChar();
    if(L == '*' || L == '/' || L == '+' || L == '-' || L == '.' || screen.value == ''){
        screen.value += '';
    }else{
        screen.value += '+';
        document.querySelector('#point').classList.remove('avoid-clicks');
    }
}

function addMinize(){
    L = getLastChar();
    if(L == '*' || L == '/' || L == '+' || L == '-' || L == '.' || screen.value == ''){
        screen.value += '';
    }else{
        screen.value += '-';
        document.querySelector('#point').classList.remove('avoid-clicks');
    }
}

function addMultiply(){
    L = getLastChar();
    if(L == '*' || L == '/' || L == '+' || L == '-' || L == '.' || screen.value == ''){
        screen.value += '';
    }else{
        screen.value += '*';
        document.querySelector('#point').classList.remove('avoid-clicks');
    }
}

function addDivision(){
    L = getLastChar();
    if(L == '*' || L == '/' || L == '+' || L == '-' || L == '.' || screen.value == ''){
        screen.value += '';
    }else{
        screen.value += '/';
        document.querySelector('#point').classList.remove('avoid-clicks');
    }
}

function addPoint(){

    L = getLastChar();
    let flag = 0;
    if(L == '*' || L == '/' || L == '+' || L == '-' || L == '.' || screen.value == ''){
        screen.value += '';
    }else{
        screen.value += '.';
        flag = 1;
    }
        
    if(flag == 1){
        document.querySelector('#point').classList.add('avoid-clicks');
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


function clearScreen(){
    screen.value = '';
    document.querySelector('#point').classList.remove('avoid-clicks');
}

