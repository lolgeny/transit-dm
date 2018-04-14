function match_heights() {
    var id_list = arguments;
    window.addEventListener('load', function() {
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
    }, true);
}

window.addEventListener('load', function() {
    all_dds = this.document.getElementsByClassName('has-dropdown');
    for (i=0; i<all_dds.length; ++i) {
        dd = all_dds[i];
        var menu = dd.getElementsByClassName('dropdown')[0];
        dd.addEventListener("mouseover", function() { menu.classList.add('show'); }, true);
        dd.addEventListener("mouseleave", function() { menu.classList.remove('show'); }, true);
        dd.addEventListener("click", function() { menu.classList.toggle('clickshow'); }, true);
    }
}, true);
