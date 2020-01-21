$(function () {
    $('.create-form').on('submit', function (event) {
        event.preventDefault();

        let newBurger = {
            burger_name: $('#newburger').val().trim(),
            devoured: 0
        };

        $.ajax('/api/burgers', {
            type: 'POST',
            data: newBurger
        }).then(function () {
            console.log('Added new burger');
            location.reload();
        });
    });

    $('.eatburger').on('click', function (event) {
        event.preventDefault();

        let id = $(this).data('id');
        let devourState = {
            devoured: 1
        };

        $.ajax('/api/burgers/' + id, {
            type: 'PUT',
            data: devourState
        }).then(function () {
            console.log('Devoured');
            location.reload();
        });
    });

    $('.deleteburger').on('click', function (event) {
        event.preventDefault();

        let id = $(this).data('id');

        $.ajax('/api/burgers/' + id, {
            type: 'DELETE'
        }).then(
            function () {
                console.log('Deleted burger');
                location.reload();
            }
        );
    });
});