HTMLFormElement.prototype.validate = function(cfg) {
    console.log('Validate function');

    var validator = {
        required : function(value) {
            return value !== undefined &&
                   value !== null &&
                   value.length > 0 &&
                   !/^\s+$/.test(value);
        },
        email : function(value) {
            return /^\w([\w.\-]*\w)?@[a-zA-Z0-9]([\w.\-]*\w)?\.[a-zA-Z]{2,3}$/.test(value);
        },
        password : function(value) {
            return this.required(value) &&
                   value.length > 6 &&
                   /[a-z]/.test(value) &&
                   /[A-Z]/.test(value) &&
                   /[0-9]/.test(value);
        }
    };

    var errors = [];
    var required = this.querySelectorAll('.required');
    var emails = this.querySelectorAll('.email');

    var validateForm = function(e) {
        console.log('Validating form...');

        for(var i=0; i<required.length; i++) {
            var input = required.item(i);

            validateRequired.element = required[i];
            validateRequired.validator = validator.required;
            validateRequired.msg = 'Error';
            validateRequired.call(input);
        }

        for(i=0; i<emails.length; i++) {
            var email = emails.item(i);

            if (!validator.email(email.value)) {
                errors.push(email.name + ' no es correcto.');
            }
        }

        if (errors.length) {
            e.preventDefault();
        }
    };

    var validateRequired = function(e) {
        errors = [];

        console.log(this);
        
        if (this.type === 'checkbox' && !this.checked) {
            errors.push(this.name + ' no está marcado.');
        } else if (this.type === 'password') {
            if (!validator.password(this.value)) {
                errors.push(this.name + ' no es un password válido.');
            }
        } else {
            if (!validator.required(this.value)) {
                errors.push(this.name + ' es obligatorio.');
            }
        }

        if (errors.length) {
            showError.call(this, errors.join('\n'));
        }
    };

    var showError = function(msgError) {
        // Crear un nodo span
        var span = document.createElement('span');
        span.classList.add('help-block');
        span.innerText = msgError;

        this.parentNode.classList.add('has-error');
        this.parentNode.appendChild(span);
    };
    
    this.addEventListener('submit', validateForm, false);
    for (var i = required.length - 1; i >= 0; i--) {
        required[i].addEventListener('blur', validateRequired, false);
    }
};