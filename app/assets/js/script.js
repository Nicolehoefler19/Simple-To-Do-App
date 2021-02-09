var add_btn = document.getElementById('add-button');
var empty_place = document.getElementById('your-tasks');
var checkbox = document.getElementById('checkbox-col');
var alt = document.getElementsByClassName("btn-edit");
add_btn.addEventListener('click', function () {
    var input_field_value = document.getElementById('task-field').value;
    empty_place.innerHTML += '<div class="row task-row justify-content-center">' +
        '<input type="checkbox" name="checked" id="checked">' +
        '<label class="input-p">' + input_field_value + '</label>' +
        '<a class="btn btn-edit">Delete <i class="fa fa-trash-o"></i></a>' +
        '</div>';
    var delete_buttons = document.querySelectorAll(".btn-edit");
    for (var i = 0; i < delete_buttons.length; i++) {
        function set_function(index) {
            delete_buttons[index].addEventListener('click', function () {
                console.log('works again');
            });
        }
        set_function(i);
    }
});
//# sourceMappingURL=script.js.map