// const yourName = prompt('What is your name?' , 'typing your name ...')
// console.log(yourName);

// let nameConfirm = null
// if(yourName?.trim().length !== 0 && yourName?.trim() !== null){
//     nameConfirm = confirm(`Are you ${yourName}?`)
// }//optional chaining
// nameConfirm ? alert(`Hello, ${yourName}`) : alert('hello guest')

const submitButton = document.querySelector('button')
//add evnet with annoymous handle function
const handlerButton =  (event)=> {
    console.log(event.target);
    console.log(event.currentTarget);
    console.log("Submit button was cliked!");
}
submitButton.addEventListener('click' , handlerButton , true)
// submitButton.removeEventListener('click' , handlerButton)
//work for removeEventListener with name function but that doesn't work in annonymous function

const divElement = document.querySelector('div')
divElement.addEventListener('click' , (event)=> {
    console.log(event.eventPhase);
    console.log(event.target);
    console.log(event.currentTarget);
    console.log('Div was clicked!');
    
}, true)

const bodyElement = document.body
bodyElement.addEventListener('click' , (event)=> {
    console.log(event.eventPhase);
    console.log(event.target);
    console.log(event.currentTarget);
    console.log('Body was cliked!');
    
}, true)