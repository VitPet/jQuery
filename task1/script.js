function validName() {
var isValid = true;

var name = $('input[name="name"]').val()

if (name.length < 5 || name.length > 30) {
        alert('Username should be more than 5 and less than 30 symbols');
        isValid = false;
    }
    else if (!name.match(/[^!-*@#&\/]/g)) {
        alert('Username can`t contain special symbols');
        isValid = false;
    }
    return isValid;
}
function validEmail() {
    var isValid = true;
    var email = $('[name="email"]').val();
    if (!_.findWhere(email, '@')) {
        alert('Email should contain @');
    } else if (!email.match(/([a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,6})/g)) {
        alert('Email should be in special format. As example: test@test.com');
    }
    return isValid;
}

function validDate() {
    var isValid = true;
    var date = $('[name="date"]').val();
    if (!date.match(/(([0-2]{1}[1-9]{1})|([3]{1}[01]{1}))\.([0]{1}[1-9]{1}|([1]{1}[12]{1}))\.(\d{4})/g)) {
        alert('Date should be in format dd.mm.yyyy');
    }
    return isValid;
}

function validIP() {
    var isValid = true;
    var ip = $('[name="ip"]').val();
    var pattern = /^\d+\.\d+\.\d+\.\d+$/g;
    if(ip.search(pattern) === -1) {
        alert('IP should be in format 0.0.0.0');
    }
    return isValid;
}

$('#submit').click(function (event) {
    event.preventDefault();
    validName() &&
    validEmail() &&
    validDate() &&
    validIP();
});        
        