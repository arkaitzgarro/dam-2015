$(function(){
    var $divs = $('div.module');
    var $li  = $('#myList li:nth-child(3)');
    var $lis = $('#myList > li');

    console.log($lis.eq(2));

    var $ul = $('#myList');
    console.log($ul.find('li').eq(2));

    var $input = $('input[name="q"]');
    var $label = $('label[for="' + $input.attr('name') + '"]');

    console.log($label);

    var $hidden = $(':hidden');

    $hidden.each(function(idx, elem){
        $(elem).show();
    });

    var $imgs = $('img');
    $imgs.each(function(idx, elem){
        console.log(elem.alt);
        console.log($(elem).attr('alt'));
    });

    $input.closest('form').addClass('form');
    $input.closest('form').removeClass('form');
    $input.closest('form').toggleClass('form');

    var $current = $('#myList .current');

    $current.removeClass('current').next().addClass('current');

    var $submit = $('#specials select')
                    .closest('ul')
                    .find('input[type="submit"]');

    $('#slideshow li')
        .first()
        .addClass('current')
        .siblings()
        .addClass('disabled');

    var lis = [];
    for (var i = 0; i < 5; i++) {
        lis.push('<li class="">Element ' + i + '</li>');
    }

    $ul.append(lis.join(''));

    $li = $('<li/>', {
        class : 'current',
        text : 'Node list',
        id : 'myli'
    });
    $ul.append($li);
    $li.appendTo($ul);

    $ul.find('li:odd').remove();
    
    $ul.on('click', 'li', function(e){
        console.log(e);
        console.log(this);
    });
});