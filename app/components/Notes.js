var React = require('react');
var Note = require('./Note');

function Notes (props) {
	var notes = props.notes.map(function (note) {
		return (
			<li key={note.id}>
				<Note task={note.task} />
			</li>
		);
	});
	return <ul>{notes}</ul>;
}

module.exports = Notes;
