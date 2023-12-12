function submitcomment(event, elem) {
    event.preventDefault;
    const url = event.getAttribute('action');
    const data = $("#" + elem);
    $.ajax({
        url: url,
        type: 'post',
        data: data.serialize(),
    })
        .done(function (data) {
            if (data.trim() == 'success') {
                alert("Commentaire ajoute avec succes");
                $("#" + elem)[0].reset() ;
            }
        })
}