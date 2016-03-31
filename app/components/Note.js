var React = require('react');

var Note = React.createClass({
	getInitialState: function () {
		return { editing: false };
	},
	edit: function () {
		this.setState({ editing: true });
	},
	editSubmit: function () {
		this.setState({ editing: false });
	},
	handleInput: function (e) {
		this.setState({ inputValue: e.target.value });
	},
	render: function () {
		if (this.state.editing) {
			return this.renderEdit();
		} else {
			return this.renderNote();
		}
	}
});

module.exports = Note;
