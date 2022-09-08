
function btnCalculator (){
    let textInput = document.querySelector('.input-btn'),
        buttons = ['C', 'EC', '%', '÷', '7', '8', '9', '×', '4', '5', '6', '-', '1', '2', '3', '+',  '0', '.', '='],
        i = 0;
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
        }else if(button === '0'){
            div.classList.add('container-btn-whit');
        }
        div.append(btn)
        textInput.append(div);
    }
}
btnCalculator()





