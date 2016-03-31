var React = require('react');

var Note = React.createClass({
	getInitialState: function () {
		return {
			editing: false,
			inputValue: this.props.task
		};
	},
	edit: function () {
		this.setState({ editing: true });
	},
	handleInput: function (e) {
		this.setState({ inputValue: e.target.value });
	},
	render: function () {
		if (this.state.editing) {
			return <input type="text" 
									value={this.state.inputValue} 
									onChange={this.handleInput} />;
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
