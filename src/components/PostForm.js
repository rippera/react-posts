import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost, showAlert } from '../redux/action';
import { Alert } from './alert';
class PostFrom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }
  handleSubmit(e) {
    e.preventDefault();
    const newPost = {
      title: this.state.title,
      id: Date.now().toString(),
    };
    if (!this.state.title.trim()) {
      return this.props.showAlert('Enter Title');
    }
    this.props.createPost(newPost);
    this.setState({
      title: '',
    });
  }
  onChangeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} className='form-group mt-2'>
        {this.props.alert && <Alert text={this.props.alert} />}
        <input
          type='text'
          className='form-control'
          placeholder='Enter Title'
          value={this.state.title}
          name='title'
          onChange={this.onChangeHandler.bind(this)}
          autoComplete='off'
        />
        <button type='submit' className='btn btn-success mt-1'>
          Add Post
        </button>
      </form>
    );
  }
}
const mapDispatchToProps = {
  createPost,
  showAlert,
};
const mapStateToProps = (state) => ({
  alert: state.app.alert,
});
export default connect(mapStateToProps, mapDispatchToProps)(PostFrom);
