var add_btn = document.getElementById('add-button');
var empty_place = document.getElementById('your-tasks');
var checkbox = document.getElementById('checkbox-col');
add_btn.addEventListener('click', function () {
    var input_field_value = document.getElementById('task-field').value;
    checkbox.innerHTML += '<input type="checkbox" name="checked" id="checked"><br>';
    empty_place.innerHTML += '<p>' + input_field_value + '<br>' + '</p>';
});
//# sourceMappingURL=script.js.map