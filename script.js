function attach_card_handlers(){
  $('.card').click(function(){
    $(this).html("<p>"+$(this).attr("description")+"</p>");
  });
}

$(document).ready(function(){
  $('form').submit(function(){
    var fields = $(this).serializeArray();
    console.log(fields[0]["value"]);
    $('#cards').append('<div class="card">');
    $('#cards .card:last').attr("firstname", fields[0]["value"]);
    $('#cards .card:last').attr("lastname", fields[1]["value"]);
    $('#cards .card:last').attr("description", fields[2]["value"]);
    $('.card:last').append('<h1>'+$(".card:last").attr("firstname")+" "+$(".card:last").attr("lastname")+"</h1>"+"<p>Click for description!</p>");
    attach_card_handlers();
    return false
  });
});
