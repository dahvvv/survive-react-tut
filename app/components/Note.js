var React = require('react');

var Note = React.createClass({
	getInitialState: function () {
		return { editing: false };
	},
	edit: function () {
		this.setState({ editing: true });
	},
	checkEnter: function (e) {
		if (e.key === 'Enter') {
			this.finishEdit(e);
		}
	},
	finishEdit: function (e) {
		var value = e.target.value;
		if (this.props.onEdit) {
			this.props.onEdit(value);
			this.setState({ editing: false });
		}
	},
	render: function () {
		if (this.state.editing) {
			return this.renderEdit();
		} else {
			return this.renderNote();
		}
	},
	renderEdit: function () {
		return <input type="text"
			autoFocus={true} 
			defaultValue={this.props.task} 
			onBlur={this.finishEdit} 
			onKeyPress={this.checkEnter} />;
	},
	renderNote: function () {
		return <div onClick={this.edit}>{this.props.task}</div>;
	}
});

module.exports = Note;
