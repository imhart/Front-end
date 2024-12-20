const btn11 = document.querySelector('.btn1')
const btn22 = document.querySelector('.btn2')
const btn33 = document.querySelector('.btn3')

btn11.addEventListener('click', function() {
    console.log('kliknięto nie!');
})

btn22.addEventListener('mouseover', () => console.log('najechano na mnie'))

const test = () => {
 console.log('double click') 
}


btn33.addEventListener('click', test) 