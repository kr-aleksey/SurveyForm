lang = document.getElementById('dropdown');
lang.onchange = function() {
    block = document.getElementById('block-other')
    other_input = document.getElementById('other-language')
    if (lang.value === 'other-language'){
        block.hidden = false
        other_input.required = true
    }
    else{
        block.hidden = true
        other_input.required = false
    }

}