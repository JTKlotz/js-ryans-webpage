
const activeElements = document.querySelectorAll('.active')
// add border
//activeElements.forEach(el => el.computedStyleMap.border = '1px solid red')

for (let i = 0; i < activeElements.length; i++) 
{
    activeElements[i].style.border = '1px solid red';
}

//const footer = document.querySelector('footer');
//const selectLink = document.querySelector('footer a');
//selectLink.style.textDecoration = 'underline';

const selectLink = document.querySelector('#link');
selectLink.style.textDecoration = 'underline';

//do something to the body
//document.body.style.backgroundColor ='red';

const contact = document.querySelector('#contact')

/*contact.addEventListener('mouseover', () => {
    contact.parentElement.style.backgroundColor = 'lightblue' 
})*/

/*contact.addEventListener('mouseover', function() {
    contact.closest('nav').style.backgroundColor = 'lightblue' 
})*/