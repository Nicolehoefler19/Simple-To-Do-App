var add_btn: HTMLElement = document.getElementById('add-button');
var empty_place: HTMLElement = document.getElementById('your-tasks');
var checkbox: HTMLElement = document.getElementById('checkbox-col');
var alt: HTMLCollectionOf<Element> = document.getElementsByClassName("btn-edit");

add_btn.addEventListener('click', function(){
    var input_field_value = (document.getElementById('task-field') as HTMLInputElement).value;    
    empty_place.innerHTML += '<div class="row task-row justify-content-center">' +
                            '<input type="checkbox" name="checked" id="checked">' +
                            '<label class="input-p">'+input_field_value+'</label>'+
                            '<a class="btn btn-edit">Delete <i class="fa fa-trash-o"></i></a>' +
                            '</div>';
    var delete_buttons: NodeListOf<Element> = document.querySelectorAll(".btn-edit");

        for(let i: number = 0; i < delete_buttons.length; i++){
            function set_function(index: number){
                delete_buttons[index].addEventListener('click', function(){
                    console.log('works again');
                });
            }

            set_function(i);
        }
    }


);


