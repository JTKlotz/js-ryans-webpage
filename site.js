
//const activeElements = document.querySelectorAll('.active')
// add border
//activeElements.forEach(el => el.computedStyleMap.border = '1px solid red')

//for (let i = 0; i < activeElements.length; i++) 
{
    //activeElements[i].style.border = '1px solid red';
}

//const footer = document.querySelector('footer');
//const selectLink = document.querySelector('footer a');
//selectLink.style.textDecoration = 'underline';

//const selectLink = document.querySelector('#link');
//selectLink.style.textDecoration = 'underline';

//do something to the body
//document.body.style.backgroundColor ='red';

//const contact = document.querySelector('#contact')

/*contact.addEventListener('mouseover', () => {
    contact.parentElement.style.backgroundColor = 'lightblue' 
})*/

/*contact.addEventListener('mouseover', function() {
    contact.closest('nav').style.backgroundColor = 'lightblue' 
})*/

const mainContentSection = document.querySelector('h2')
mainContentSection.style.color = 'red';

const link = document.querySelector('footer a') // select the anchor in the footer
link.style.textDecoration = 'underline'; // underline the link

const link = document.querySelector('#link')// select the anchor with id of link
link.style.textDecoration = 'underline'; // underline the link