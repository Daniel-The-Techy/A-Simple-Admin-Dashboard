const btn=document.getElementById('menu-icon');
const bit=document.getElementById('bit');
btn.addEventListener('click', MyText);

function MyText(){
    const wrapper=document.querySelector('.navigation');
    wrapper.classList.toggle('active');
    bit.classList.toggle('bit');


}




