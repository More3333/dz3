
function f1(x,y){
    let n = x / y
    $('#result1').html('Вам нужно двигаться со скоростью' + (Math.floor(n)) + 'км.ч')
}
$('#but1').click(function (){
    f1($('#v1').val(), $('#v11').val())
    })

