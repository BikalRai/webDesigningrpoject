function changeBg() {
    let navbar = document.getElementById('mynav')
    let scrollValue = window.scrollY;
    if(scrollValue < 150) {
        navbar.classList.remove('bgColor')
    }
    else {
        navbar.classList.add('bgColor')
    };
};

window.addEventListener('scroll', changeBg);



function validate() {
    let name = document.forms['contact'].name.value;
    let email = document.forms['contact'].email.value;
    let details = document.forms['contact'].details.value;
    if(name == '' || name == null) {
        alert('Name field empty');
        document.forms['contact'].name.focus();
        return false;
    }
    else if(email == '' || email == null) {
        alert('Empty email field or invalid email type');
        document.forms['contact'].email.focus();
        return false;
    }
    else if(details == '' || details ==null) {
        alert('Project details empty or invalid');
        document.forms['contact'].details.focus();
        return false;
    }
    else {
        alert('Your Project Details has been received, ' +  name + 'we will be getting in touch with you shortly through the Email,' + email + ' address you have provided');
        return true;
    }
};