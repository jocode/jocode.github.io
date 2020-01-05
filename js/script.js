$(function () {

    $('a.page-scroll').on('click', function (event) {
        var element = $(this);
        var section = $(element.attr('href'));
        $('html, body').animate({
            scrollTop: section.offset().top
        }, 1000);
        event.preventDefault();
    });

    var form = document.getElementById("formulario");
    var result = document.getElementById("result");
    var send = document.getElementById("send");

    var name = form.nombre;
    var email = form.email;
    var message = form.mensaje;

    form.addEventListener('submit', check);

    function check(e) {
        e.preventDefault();
        $.post(
            "https://jocode.000webhostapp.com/mail/me/",
            {
                "send": "send",
                "name": name.value,
                "email": email.value,
                "message": message.value
            },
            function (response) {
                console.log(response);
                if (response.status) {
                    result.classList.toggle('alert-primary');
                    result.innerText = response.message;
                    form.reset();
                } else {
                    result.classList.toggle('alert-danger');
                    result.innerText = response.message;
                }
            },
            'json'
        );
    }

    function disabledButton() {
        send.setAttribute('disabled', true);
    }

});