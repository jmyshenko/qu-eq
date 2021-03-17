const parameters = document.getElementsByClassName('param');
const calcDiscriminant = document.getElementById('calc-discriminant');
const calcViet = document.getElementById('calc-viet');
const answer = document.getElementById('answer');

const rounder = number => Math.round(number * 100) / 100;

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

    let roots = '';
    if (discriminant < 0) roots = `<li>Поскольку дискриминант меньше нуля, действительных корней нет</li>`;
    else if (discriminant === 0) roots = `<li>x = ${rounder(-paramB / (paramA * 2))}</li>`
    else {
        
        const root1 = (-paramB + Math.sqrt(discriminant)) / (paramA * 2);
        const root2 = (-paramB - Math.sqrt(discriminant)) / (paramA * 2);

        roots += `<li>x<sub>1</sub> = ${rounder(root1)}</li>`;
        roots += `<li>x<sub>2</sub> = ${rounder(root2)}</li>`
    }

    answer.innerHTML = `
        <h4>Дискриминант и корни</h4>
        <div class="block">
            <ul>
                <li>D = ${discriminant}</li>
                ${roots}
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

    let rootsSumAndMultiply = '';
    if (paramA === 1) {
        rootsSumAndMultiply += `<li>x<sub>1</sub> + x<sub>2</sub> = ${rounder(-paramB)}</li>`;        
        rootsSumAndMultiply += `<li>x<sub>1</sub>x<sub>2</sub> = ${rounder(paramC)}</li>`;
    } else {
        rootsSumAndMultiply += `<li>x<sub>1</sub> + x<sub>2</sub> = ${rounder(-paramB / paramA)}</li>`;
        rootsSumAndMultiply += `<li>x<sub>1</sub>x<sub>2</sub> = ${rounder(paramC / paramA)}</li>`;
    }

    let rootsAndDiscriminant = `<li>Дискриминант: ${discriminant}</li>`; 
    if (discriminant < 0) rootsAndDiscriminant += `<li>У уравнения нет действительных корней.</li>` 
    else if (discriminant === 0) rootsAndDiscriminant +=  `<li>x<sub>1</sub>, x<sub>2</sub> = ${rounder(Math.sqrt(paramC / paramA))}</li>`
    else rootsAndDiscriminant += `<li>У уравнения два действительных корня. Найди их перебором.</li>` 

    answer.innerHTML = `
        <h4>Дискриминант, сумма и произведение корней</h4>
        <ul>${rootsSumAndMultiply}</ul>
        <h4>Корни и дискриминант</h4>
        <ul>${rootsAndDiscriminant}</ul>
    `
    answer.innerHTML += `
    <h4>Подсказки</h4>
    <div class="block">
        <ul>
            <li>Формула дискриминанта: <i>b<sup>2</sup> - 4ac</i></li>
            <li>Сумма корней: <i>-b / a</i></li>
            <li>Произведение корней: <i>c / a</i></li>
        </ul>
    </div>
    `
}