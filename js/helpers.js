function match_heights() {
    var id_list = arguments;
    window.onload = function() {
        for (id in id_list) {
          $('#' + id_list[id]).css('height', 'auto');
        }
        var max_height = 0;
        for (id in id_list) {
            max_height = Math.max(max_height, $('#' + id_list[id]).outerHeight());
        };
        for (id in id_list) {
            $('#' + id_list[id]).innerHeight(max_height);
        };
    };
}
