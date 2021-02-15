var add_btn = document.getElementById('add-button');
var empty_place = document.getElementById('your-tasks');
var checkbox = document.getElementById('checkbox-col');
var complete_task_row;
add_btn.addEventListener('click', function () {
    var input_field_value = document.getElementById('task-field').value;
    empty_place.innerHTML += '<div class="row task-row justify-content-center" id="' + input_field_value + '">' +
        '<input type="checkbox" name="checked" id="checked">' +
        '<label class="input-p">' + input_field_value + '</label>' +
        '<a onclick="removeDocument(\'' + input_field_value + '\')" class="btn btn-edit">Delete <i class="fa fa-trash-o"></i></a>' +
        '</div>';
});
function removeDocument(text) {
    var current_row = document.getElementById(text);
    current_row.style.display = 'none';
}
// for(let i: number = 0; i < delete_buttons.length; i++){
// console.log("ji");
//     function set_function(index: number){
//         delete_buttons[index].addEventListener('click', function(){
//             function removeDocument(){
//                 if (index > -1){
//                     delete_buttons[index].remove;                    
//                     complete_task_row[index].innerHTML = '';
//                 }
//             }                    
//             console.log(index);
//             console.log(delete_buttons.length);
//             removeDocument();
//         });
//     }
//     set_function(i);
// }
//# sourceMappingURL=script.js.map