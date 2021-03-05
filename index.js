const showTemplateEl = document.getElementById('show-template');
const calcEl = document.getElementById('calc');
const valueEl = document.getElementById('value');
const getParam = i => document.getElementById(`${i}-param`);

function showTemplate() {
    showTemplateEl.innerText = 'поле ввода';

    ['a', 'b', 'c'].forEach(paramName => {
        const param = getParam(paramName);
        param.type = 'text'
        param.value = paramName;
        param.disabled = true;
    });
}

function hideTemplate() {
    showTemplateEl.innerText = 'показать шаблон';

    ['a', 'b', 'c'].forEach(paramName => {
        const param = getParam(paramName);
        param.type = 'number'
        param.value = 0;
        param.disabled = false;
    });
}

let templateShowed = false;

showTemplateEl.onclick = () => {
    if (templateShowed) {
        templateShowed = false;
        hideTemplate();
    } else {
        templateShowed = true;
        showTemplate();
    }
}

calcEl.onclick = function() {
    const a = Number(getParam('a').value);
    const b = Number(getParam('b').value);
    const c = Number(getParam('c').value);

    if (!a || !b || !c) return alert('Введи все переменные');
    if (a < -1000 || a > 1000 || b < -1000 || b > 1000 || c < -1000 || c > 1000) return alert('Введи числа поменьше')

    const D = (b * b) - ((a * c) * 4);

    if (D > 0) {
        valueEl.innerHTML = `x<sub>1</sub> = ${(-b + Math.sqrt(D)).toFixed(2)};<br>` 
                          + `x<sub>2</sub> = ${(-b - Math.sqrt(D)).toFixed(2)};`
    } else if (D == 0) {
        valueEl.innerHTML = `x = ${-b / (a * 2)};`;
    } else if (D < 0) {
        valueEl.innerHTML = `Нет действительных корней`;
    }
}