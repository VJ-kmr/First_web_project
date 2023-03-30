let checkBox = document.querySelector('#toggle');
let Monthly = document.querySelectorAll('.price-Monthly');
let Yearly = document.querySelectorAll('.price-Annually');

checkBox.addEventListener('change', function(){
    if(checkBox.checked){
         Yearly.forEach(price => price.style.display = 'none');
         Monthly.forEach(price => price.style.display = 'flex');
    } else {
       Yearly.forEach(price => price.style.display = 'flex');
         Monthly.forEach(price => price.style.display = 'none');
    }
});