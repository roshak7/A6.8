    function progress(value) {
        var parent = $('.progress').width();
        var child = parseInt(($("#progressbar").width() / parent * 100).toFixed());

        if (child == 100) {
            alert('yje 100 alo');
        } else {
            console.log(child);
            console.log(value);
            $('#progressbar').width((child + value) * parent / 100);
        }
    }