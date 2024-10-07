/*
.fadeOut( ).slideUp( ).slideDown( ).slideToggle( ).show( ).hide( ).toggle( )
*/

$('documnet').ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#cancelar').click(function(){
        $("form").slideUp();
    })

    $('form').on("submit", function(e){
        e.preventDefault();
        const EndereçoImgNova = $('#add').val()
        const NovoIten = $('<li style="display:none;"></li>')
    
    $(`<img src="${EndereçoImgNova}" alt=" nova foto da galeria"/>`).appendTo(NovoIten)
    
    $(`<div class="overlay-img-link">
        <a href="${EndereçoImgNova}" target="_blank" title="Ver imagem em tamanho real">
            Ver imagem em tamanho real
        </a>
        </div>`).appendTo(NovoIten)
        
    $(NovoIten).appendTo('ul')
    $(NovoIten).fadeIn('0300')
    $('#add').val('')
    })
})