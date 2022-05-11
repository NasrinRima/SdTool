require('jquery-validation');

(function () {
    'use strict';

    var errTemplate = '<span class="invalid-feedback">' +
        '               <span class="mb-0 d-block">\n' +
        '                    <span class="initialism form-error-icon badge badge-danger">Error</span> ' +
        '                </span>' +
        '               </span>';

    window.handleValidation = function($form) {
        var validator = null;
        var error = $('.alert-danger', $form);
        var success = $('.alert-success', $form);

        function shouldContinueRegularFormSubmission($form) {
            var formId = $form.attr('id');
            if (formId) {
                var event = $.Event(formId + '.submit');

                validator.resetForm();
                $('body').trigger(event, [$form]);

                if (event.isDefaultPrevented()) {
                    return false;
                }
            }

            return true;
        }

        validator = $form.validate({
            errorElement: 'span', //default input error message container
            errorClass: 'form-error-message', // default input error message class
            focusInvalid: true,
            ignore: "",

            errorPlacement: function (error, element) { // render error placement for each input type
                if (element.attr("data-error-container")) {
                    var $errorPlacement = $(element.attr("data-error-container"));
                    error.insertAfter($errorPlacement);
                }else if (element.attr("data-error-marker")) {
                    $(element.attr("data-error-marker")).html("");
                    error.insertAfter(element.attr("data-error-marker"));
                } else if ($('label[for="'+ element.attr("id") +'"]')) {
                    var $label = $('label[for="'+ element.attr("id") +'"]');

                    if($label.find('.invalid-feedback').length === 0) {
                        $label.append($(errTemplate))
                    }

                    error.appendTo($label.find('span.mb-0'));
                } else {
                    error.insertAfter(element); // for other inputs, just perform default behavior
                }
            },

            invalidHandler: function (event, validator) { //display error alert on form submit
                var errorEvent = $.Event('jq-validation-error');
                $('body').trigger(errorEvent, [validator]);
                success.hide();
                error.show();
            },

            highlight: function (element) { // hightlight error inputs
                $(element)
                    .addClass('is-invalid')
                    .closest('.form-group').addClass('has-error'); // set error class to the control group
            },

            unhighlight: function (element) { // revert the change done by hightlight
                $(element)
                    .removeClass('is-invalid')
                    .closest('.form-group').removeClass('has-error'); // set error class to the control group
            },

            success: function (label) {
                label
                    .closest('.form-group').removeClass('has-error'); // set success class to the control group
            },

            submitHandler: function (formObject) {
                success.show();
                error.hide();

                var form = formObject instanceof jQuery ? formObject[0] : formObject;

                if(shouldContinueRegularFormSubmission($(form))){
                    form.submit(); // submit the form
                }
            }

        });

        $('.date-picker .form-control').change(function() {
            $form.validate().element($(this)); //revalidate the chosen dropdown value and show error or success message for the input
        })
    };

    $('form.jq-validate').each(function(index, el) {
        handleValidation($(el));
    });

})();
