const parameters = document.getElementsByClassName('param');
const calcDiscriminant = document.getElementById('calc-discriminant');
const calcViet = document.getElementById('calc-viet');
const answer = document.getElementById('answer');


function getParameters() {
    const getParameterValue = item => Number.parseFloat(parameters.item(item).querySelector('input').value);
    
    const a = getParameterValue(0);
    const b = getParameterValue(1);
    const c = getParameterValue(2);
    
    if (isNaN(a)) return alert('Укажи первый параметр уравнения.');
    if (isNaN(b)) return alert('Укажи второй параметр уравнения.');
    if (isNaN(c)) return alert('Укажи третий параметр уравнения.');

    return [ a, b, c ];
}


calcDiscriminant.onclick = function() {
    const [ paramA, paramB, paramC ] = getParameters();
    const discriminant = (paramB * paramB) - ((paramA * paramC) * 4);

    answer.innerHTML = `Дискриминант уравнения равен ${discriminant}.</br>`;

    if (discriminant > 0) {
        const root1 = -paramB + Math.sqrt(discriminant);
        const root2 = -paramB - Math.sqrt(discriminant);

        answer.innerHTML += `Поскольку дискриминант больше единицы, уравнения имеет два действительных корня:</br>`;
        answer.innerHTML += `<div class="block" class="math">x<sub>1</sub> = ${root1.toFixed(2)}</div>`;
        answer.innerHTML += `<div class="block" class="math">x<sub>2</sub> = ${root2.toFixed(2)}</div>`;
    } else if (discriminant == 0) {
        const root = -paramB / (paramA * 2);
        
        answer.innerHTML += `Поскольку дискриминант равен нулю, у уравнения есть единственный действительный корень:</br>`;
        answer.innerHTML += `<div class="block" class="math">x = ${root.toFixed(2)}</div>`
    } else {
        answer.innerHTML += `Поскольку дискриминант меньше нуля, уравнение не имеет действительных корней.`;
    }
}

calcViet.onclick = function() {
    let [ paramA, paramB, paramC ] = getParameters();
    // parameters.item(0).querySelector('input').value = 1;
    const rootsSum = -(paramA / paramB);
    const rootsComp = paramC / paramA;

    answer.innerHTML = `По теореме Виета, сумма корней уравнения равна отрицательному частному a на b, а произведение — частному c на a. Тогда:</br>`;
    answer.innerHTML += `x<sub>1</sub> + x<sub>2</sub> = ${rootsSum.toFixed(2)}</br>`;
    answer.innerHTML += `x<sub>1</sub>x<sub>2</sub> = ${rootsComp.toFixed(2)}`;
}