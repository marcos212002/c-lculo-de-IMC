const form = document.getElementById('form');

form.addEventListener('submit', function(event){
    event.preventDefault();

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    const bmi = (weight / (height * height)).toFixed(2);

    const value = document.getElementById('value');
    let description = '';

    value.classList.add('danger');

    document.getElementById('infos').classList.remove('hidden');


    if(bmi < 18.5){
        description = 'cuidado! você esta abaixo do peso!'
        value.classList.remove('danger');
        value.classList.add('atention');
    }

    else if(bmi >= 18.5 && bmi < 25){
        description = "voce esta no peso ideal"

           value.classList.remove('danger');
           value.classList.remove('atention')
           value.classList.add('normal')
    }

    else if(bmi >= 24.9 && bmi < 30 ){
        description = "cuidado voce esta com sobrepeso"
        
        value.classList.remove('danger');
        value.classList.add('atention');

    }

    else if(bmi >=20.9 && bmi < 40){
        description = "cuidado voce esta com obesidade moderada "
 
    }

    else if (bmi > 40){
        description = "cuidado voce esta com obesidade severa"
    }
    else{
        description = "cuidado voce esta com obesidade morbida"
    }


    value.textContent = bmi.replace('.', ',');
    document.getElementById('description').textContent = description;
});

