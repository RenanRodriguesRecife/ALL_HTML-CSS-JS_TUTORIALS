let b7validator = {
    handleSubmit:(event)=>{
        event.preventDefault();

        let send = true;

        let inputs = form.querySelectorAll('input');
        console.log(inputs);
        for(let i=0; i<inputs.lengh; i++){
            let input = inputs[i];
            console.log(input);
        }
        send = false;

        if(send){
            form.submit();
        }
    }
};

let form = document.querySelector('.b7validator');
form.addEventListener('submit',b7validator.handleSubmit);