let buttons = document.getElementsByClassName('button');
let body = document.querySelector('body');
let heading=document.querySelector('h1')

// Convert HTMLCollection to array
buttons = Array.from(buttons);

buttons.forEach(function(button) {
    console.log(button);
    button.addEventListener('click', function(e) {
        console.log(e);
        console.log(e.target);
        if (e.target.id === 'grey') {
            body.style.backgroundColor = e.target.id;
            button.style.borderRadius='25%'
            heading.innerHTML='Now the color is Grey'

        }
        if (e.target.id === 'white') {
            body.style.backgroundColor = e.target.id;
            button.style.borderRadius='25%'

            heading.innerHTML='Now the color is white'

        }
        if (e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id;
            button.style.borderRadius='50px'

            heading.innerHTML='Now the color is Blue'            
        }
        if (e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id;
            button.style.borderRadius='50px'

            heading.innerHTML='Now the color is Yellow'        }
    });
});

