function resetPass(){
    var email = $("#email").val();
    $.ajax({
        type: $('#reset').attr('method'),
        url: $('#reset').attr('action'),
        contentType : 'application/json',
        data : email,
        success: function() {
            Swal.fire({
                title: 'Salvo!',
                text: 'Registro salvo com sucesso!',
                type: 'success'
            }).then((result) => {
                    window.location = '/';
                }
            );
        },
        error: function(data) {
            console.log(data);
            Swal.fire('Errou!', 'Falha ao salvar registro!', 'error');
        }
    });
    return false;

}