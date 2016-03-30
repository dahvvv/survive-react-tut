var React = require('react');
var Note = require('./Note');
var uuid = require('node-uuid');

function Notes (props) {
	var notes = props.notes.map(function (note) {
		return <li key={uuid.v4()}>{note.task}</li>;
	});
	return <ul>{notes}</ul>;
}

module.exports = Notes;
