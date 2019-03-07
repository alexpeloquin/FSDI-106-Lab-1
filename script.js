var DB = [];

function Todo(text, imp) {
    this.text = text;
    this.imp = imp;
}

$(document).ready(function () {

    $('#btnAdd').click(createTodo);

    $('#txtText').keypress(function (e) {

        if (e.keyCode == 13) {

            createTodo();
        }
    });
    var h1JQ = $('#mainH1');

    h1JQ.addClass('test');
    console.log(h1JQ.text());
    console.log(h1JQ.html());
});

function createTodo() {

    var text = $('#txtText').val();
    var imp = $("#selImp").val();

    console.log(imp);
    var objTodo = new Todo(text, imp);
    DB.push(objTodo);
    var li = `<li class="list-group-item list-group-item-success">
        ${text} - ${imp}
        <button class='btn-right btn btn-danger btn-sm'>Remove</button>
        </li>`;
    $('#list').append(li);

    $('#txtText').val('');
    $('#txtText').focus();
}