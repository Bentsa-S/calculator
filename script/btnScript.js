let textInput = document.querySelector('.input-btn'),
    buttons = ['C', 'EC', '%', '/', 7, 8, 9, '*', 4, 5, 6, '-', 1, 2, 3, '+',  0, '.', '='],
    i = 0,
    signSensor = 0,


    outputArea = document.querySelector('section.input-area');





function btnCalculator (){
    for (let button of buttons){
        i++
        let btn = document.createElement('button');
        let div = document.createElement('div');
        btn.textContent = button;
        div.classList.add('container-btn')
        btn.classList.add('btn')
        if (i < 4) {
            btn.classList.add('btn-grey');
        }else if (i % 4 === 0 || button === '=') {
            btn.classList.add('btn-orange');
        }else if(button === 0){
            div.classList.add('container-btn-whit');
        }
        div.append(btn);
        textInput.append(div);
    }
}




function ec(){
    outputArea.textContent = '';
}
function c(){
    let e = outputArea.textContent.split('');
    e.pop();
    outputArea.textContent = e.join('');
}
function button(value){
        let e = buttons[value];
    outputArea.append(e);
    signSensor = 0;
    console.log(outputArea.textContent.length)
    if(outputArea.textContent.length === 22)
        outputArea.classList.add('x-scroll');
}
function signButton (value){
    if (signSensor === 0){
        button(value)
        signSensor++
    }
}
function equalsSign(value){
    let number = eval(outputArea.innerText)
    outputArea.textContent = '';
    outputArea.append(number)
}




btnCalculator()




let logButton = document.querySelectorAll('.btn')


for (let i = 0; i < buttons.length; i++){


    switch (i) {
        case 0:
            //кнобка С
            logButton[i].addEventListener('click', c);
            break;
        case 1:
            //кнобка EС
            logButton[i].addEventListener('click', ec);
            break;
        case 2:
            break;
        case 3:
            //кнобка '/'
            logButton[i].addEventListener('click', () =>signButton(i))
            break;
        case 7:
            //кнобка '*'
            logButton[i].addEventListener('click', () =>signButton(i))
            break;
        case 11:
            //кнобка '+'
            logButton[i].addEventListener('click', () =>signButton(i));
            break;
        case 15:
            //кнобка '-'
            logButton[i].addEventListener('click', () =>signButton(i))
            break;
        case 18:
            //кнобка '='
            logButton[i].addEventListener('click', () =>equalsSign(i))
            break;

        default:
            //остальние
            logButton[i].addEventListener('click', () =>button(i))
            break;
    }
}







