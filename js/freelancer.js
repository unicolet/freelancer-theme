$(document).ready(function(){
    $("area").hover(
    function() {
        $($(this).attr('data-placement')).html($(this).attr('data-content'));
    },
    function() {
        $($(this).attr('data-placement')).html('&nbsp;');
    }
    );
});