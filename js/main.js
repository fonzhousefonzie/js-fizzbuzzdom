const contenitore = document.getElementById('contenitore');
const style = 'style="width: calc(100% / 8); aspect-ratio: 1 / 1; display: flex; align-items:center; justify-content:center;"';

for (let i = 1; i < 101; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)){
        contenitore.innerHTML += `<div class="bg-danger" ${style} ><p>FizzBuzz</p></div>`;
    } else if (i % 5 == 0){
        contenitore.innerHTML += `<div class="bg-warning" ${style} ><p>Buzz</p></div>`;
    } else if (i % 3 == 0){
        contenitore.innerHTML += `<div class="bg-secondary" ${style} ><p>Fizz</p></div>`;
    } else {
        contenitore.innerHTML += `<div class="bg-primary" ${style} ><p>${i}</p></div>`;
    }
}