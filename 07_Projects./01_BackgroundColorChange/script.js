const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")
const div = document.querySelector("canvas")


buttons.forEach(function (button){
    console.log(button);
    button.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);
        switch (e.target.id) {
            case 'grey':
                body.style.backgroundColor = e.target.id;

            case 'yellow':
                body.style.backgroundColor = e.target.id;
            case 'blue':
                body.style.backgroundColor = e.target.id;
            case 'white':
                body.style.backgroundColor = e.target.id;
            case 'purple':
                body.style.backgroundColor = e.target.id;
            case 'red':
                body.style.backgroundColor = e.target.id;
                
                break;
        
            default:
                break;
        }
    })
});