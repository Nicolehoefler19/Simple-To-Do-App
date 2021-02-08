var add_btn: HTMLElement = document.getElementById('add-button');
var empty_place: HTMLElement = document.getElementById('your-tasks');
var checkbox: HTMLElement = document.getElementById('checkbox-col');

add_btn.addEventListener('click', function(){
    var input_field_value = (document.getElementById('task-field') as HTMLInputElement).value;    
    checkbox.innerHTML += '<input type="checkbox" name="checked" id="checked">';
    empty_place.innerHTML += '<p>'+input_field_value+'<br>'+'</p>'+'';

})
