var React = require('react');
var Note = require('./Note');

function Notes (props) {
	var notes = props.notes.map(function (note) {
		return (
			<li key={note.id}>
				<Note 
					task={note.task} 
					onEdit={props.onEdit.bind(null, note.id)} 
					onDelete={props.onDelete.bind(null, note.id)} />
			</li>
		);
	});
	return <ul>{notes}</ul>;
}

module.exports = Notes;
