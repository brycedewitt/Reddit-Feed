import React from 'react';
import ReactDOM from 'react-dom';

class RedditTile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      post: {},
      error: false
    };
  }

  componentDidMount() {
    this.state.title = this.props.title;
  }

  renderError() {
    console.log("rendering error");

    return (
      <div>
        Uh oh: This post could not be rendered!
      </div>
    );
  }

  renderPost() {
    if(this.state.error) {
      return this.renderError();
    }
    console.log(this.props.content);

    return (
      <li key={this.props.content.id} class="reddit-tile">
      <h3>{this.props.content.title}</h3>
        <ul>
        <li><img src={this.props.content.thumbnail}/></li>
        <li>Author: {this.props.content.author}</li>
        <li>Score: {this.props.content.score}</li>
        <li>Comments: {this.props.content.num_comments}</li>
        </ul>
      </li>
    );
  }

  render() {
    return (
      <div>
      {this.renderPost()}
      </div>
    );
  }
}

export default RedditTile;
