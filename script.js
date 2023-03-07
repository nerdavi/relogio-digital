// variavéis puxando dados do HTML

const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

// função do relógio

const relogio = setInterval(function tempo() {
    
    //puxando as horas, minutos e segundos com dateToday()

    let dateToday = new Date();
    let hour = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

    // adicionando 0 nos valores menos de 10

    if (hour < 10) hour = '0' + hour;
    if (min < 10) min = '0' + min;
    if (sec < 10) sec = '0' + sec;

    // mudando os valores no HTML

    horas.textContent = hour;
    minutos.textContent = min;
    segundos.textContent = sec;
})
