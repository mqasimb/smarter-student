const React = require('react');
const { connect } = require('react-redux');
const router = require('react-router');
const actions = require('../actions/index');
const NewIssueForm = require('./new-issue-form');
const { reset } = require('redux-form');

class NewIssue extends React.Component {
    submitIssue = (values) => {
        this.props.dispatch(actions.addNewIssue(values))
            .then((boolean) => {
                this.props.dispatch(reset("NewIssueForm"))
                router.hashHistory.push('/');
            })
    }
    render() {
        var newIssueStyle={
            paddingTop: '30px'
        }
        return(
            <div style={newIssueStyle}>
                <NewIssueForm form='NewIssueForm' onSubmit={this.submitIssue}/>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {return {}}

var Container = connect(mapStateToProps)(NewIssue);

module.exports = Container;