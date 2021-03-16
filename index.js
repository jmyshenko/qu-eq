const parameters = document.getElementsByClassName('param');
const calcDiscriminant = document.getElementById('calc-discriminant');
const calcViet = document.getElementById('calc-viet');
const answer = document.getElementById('answer');


function getParameters() {
    const getParameterValue = item => Number.parseFloat(parameters.item(item).value);
    
    const a = getParameterValue(0);
    const b = getParameterValue(1);
    const c = getParameterValue(2);
    
    if (isNaN(a)) return alert('Укажи первый параметр уравнения.');
    if (isNaN(b)) return alert('Укажи второй параметр уравнения.');
    if (isNaN(c)) return alert('Укажи третий параметр уравнения.');

    return [ a, b, c ];
}


calcDiscriminant.onclick = function() {
    const _parameters = getParameters();
    if (!_parameters) return;
    const [ paramA, paramB, paramC ] = _parameters; 
    const discriminant = (paramB * paramB) - ((paramA * paramC) * 4);

    let rootsLi = '';
    if (discriminant < 0) rootsLi = `<li>Поскольку дискриминант меньше нуля, действительных корней нет</li>`;
    else if (discriminant === 0) rootsLi = `<li>x = ${rounder(-paramB / (paramA * 2))}</li>`
    else {
        const rounder = number => Math.round(number * 100) / 100;
        
        const root1 = (-paramB + Math.sqrt(discriminant)) / (paramA * 2);
        const root2 = (-paramB - Math.sqrt(discriminant)) / (paramA * 2);

        rootsLi += `<li>x<sub>1</sub> = ${rounder(root1)}</li>`;
        rootsLi += `<li>x<sub>2</sub> = ${rounder(root2)}</li>`
    }

    answer.innerHTML = `
        <h4>Дискриминант и корни</h4>
        <div class="block">
            <ul>
                <li>D = ${discriminant}</li>
                ${rootsLi}
            </ul>
        </div>
    `
    answer.innerHTML += `
    <h4>Подсказки</h4>
    <div class="block">
        <ul>
            <li>Формула дискриминанта: <i>b<sup>2</sup> - 4ac</i></li>
            <li>Формула корней при D > 0: <i>(-b ± √D) / 2a</i></li>
            <li>Формула корней при D = 0: <i>-b / 2a</i></li>
            <li>При D < 0 <i>действительных корней нет.</i></li>
        </ul>
    </div>`
}

calcViet.onclick = function() {
    const _parameters = getParameters();
    if (!_parameters) return;
    const [ paramA, paramB, paramC ] = _parameters; 
    const discriminant = (paramB * paramB) - ((paramA * paramC) * 4);

    alert('Эта функциональность пока не реализована.');
}