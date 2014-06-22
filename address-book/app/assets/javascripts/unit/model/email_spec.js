module('Email model');

test('email address attribute', function () {
	respondsTo('Email', 'address', 'string');
});