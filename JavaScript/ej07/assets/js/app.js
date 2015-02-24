(function(){
    var validar_email = /^\w([\w.\-]*\w)?@[a-zA-Z0-9]([\w.\-]*\w)?\.[a-zA-Z]{2,3}$/;

    console.log(validar_email.test("hola@arkaitzgarro.com") === true);
    console.log(validar_email.test("arkaitz.garro@gmail.com") === true);
    console.log(validar_email.test("arkaitz.garro@gmail.es") === true);
    console.log(validar_email.test("arkaitzgarro@gmail.es") === true);
    console.log(validar_email.test("@gmail.es") === false);
    console.log(validar_email.test("a@gmail.") === false);
    console.log(validar_email.test(".@gmail.") === false);
    console.log(validar_email.test(".@gmail.es") === false);
    console.log(validar_email.test(".a@gmail.es") === false);
    console.log(validar_email.test("-a@gmail.es") === false);
    console.log(validar_email.test("a.@gmail.es") === false);
    console.log(validar_email.test("a.aa@gmail.es") === true);
})();