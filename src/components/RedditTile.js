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

  ifImage() {
    if (this.props.content.thumbnail) {
      return (
        <li><img src={this.props.content.thumbnail}/></li>
      );
    }
  }

  renderPost() {
    if(this.state.error) {
      return this.renderError();
    }
    console.log(this.props.content);

    return (
      <li key={this.props.content.id} class="reddit-tile">
      <div className="tile-title">
      <h3>{this.props.content.title}</h3>
      <a href={"https://www.reddit.com" + this.props.content.permalink}>View Post</a>
      </div>
      <div className="tile-content">
        <ul>
        {this.ifImage()}
        <li><b>Author</b>: {this.props.content.author}</li>
        <li><b>Score</b>: {this.props.content.score}</li>
        <li><b>Comments</b>: {this.props.content.num_comments}</li>
        </ul>
        </div>
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
