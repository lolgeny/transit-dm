function match_heights() {
    var id_list = arguments;
    window.onload = function() {
        var max_height = 0;
        for (id in id_list) {
            max_height = Math.max(max_height, $('#' + id_list[id]).innerHeight());
        };
        for (id in id_list) {
            $('#' + id_list[id]).innerHeight(max_height);
        };
    };
}
