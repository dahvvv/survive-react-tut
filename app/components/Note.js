var React = require('react');

var Note = React.createClass({
	getInitialState: function () {
		return { editing: false };
	},
	edit: function () {
		alert('yo');
		this.setState({ editing: true });
	},
	render: function () {
		if (this.state.editing) {
			return (
				<div>
					<h1>Edit the Note!</h1>
				</div>
			);
		} else {
			return (
				<div onClick={this.edit}>
					{this.props.task}
				</div>
			);
		}
	}
});

module.exports = Note;
