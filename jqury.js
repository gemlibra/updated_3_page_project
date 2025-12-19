

$('#btnlit').on('click', function(){
        $('#s1').hide();
        $('#s2').show();
    });


    $('#btndark').on('click', function(){
        $('#s1').fadeOut('fast');
        $('#s3').delay(3000).fadeIn(2000);    /* This code sytax replaces setTimeout() */
    });    



//document.getElementById('btnlit').onclick = function(){
//    document.getElementById('s1').style.display = 'none';
//    document.getElementById('s2').style.display = 'block';
//};
//
//document.getElementById('btndark').onclick = function(){
//    document.getElementById('s1').style.display = 'none';
//    document.getElementById('s3').style.display = 'block';
//};