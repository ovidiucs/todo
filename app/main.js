//javascript-test.js

//var unique = require('uniq');

//var data = [1, 2, 2, 3, 4, 5, 5, 5, 6];

//console.log(unique(data))

var forms = require('forms'),
    fields = forms.fields,
    validators = forms.validators;

var reg_form = forms.create({
    username: fields.string({required: true}),
    password: fields.password({required: true}),
    confirm:  fields.password({
        required: true,
        validators: [validators.matchField('password')]
    }),
    email: fields.email()
});

