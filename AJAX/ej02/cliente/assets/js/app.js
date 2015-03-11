$(function(){
    var $provincias = $('#provincias'),
        $municipios = $('#municipios');

    var fillSelect = function($select, values) {
        var options = [];

        for (var i in values) {
            options.push(new Option(values[i], i));
        }

        $select.children().remove();
        $select.append(options);
        $select.removeAttr('disabled');
    };

    $.getJSON('../servidor/cargaProvinciasJSON.php', {}, function(provincias){
        fillSelect($provincias, provincias);
    });

    $provincias.on('change', function(e){
        var provincia = $provincias.val();

        $.ajax('../servidor/cargaMunicipiosJSON.php', {
            method : 'POST',
            data : {
                provincia : provincia
            },
            dataType : 'json',
            success : function(municipios) {
                fillSelect($municipios, municipios);
            }
        });
    });
});