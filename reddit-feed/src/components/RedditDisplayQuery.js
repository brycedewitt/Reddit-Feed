import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import RedditTile from './RedditTile.js'

class FetchDemo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subreddit: "",
      allData: "",
      titleImage: "",
      posts: [],
      loading: false,
      error: null,
      show: false
    };

  }

  componentDidMount() {
  }

  updateFeed(x) {
    console.log("Making update request to: http://www.reddit.com/r/", x, ".json");
    this.state.subreddit = x;

    // Remove the 'www.' to cause a CORS error (and see the error state)
    axios.get(`http://www.reddit.com/r/`+x+`.json`)
      .then(res => {
        // Transform the raw data by extracting the nested posts
        console.log(res);
        const posts = res.data.data.children.map(obj => obj.data);

        // Update state to trigger a re-render.
        // Clear any errors, and turn off the loading indiciator.
        this.setState({
          posts,
          loading: false,
          error: null
        });
        console.log(this.state.allData);
      })
      .catch(err => {
        // Something went wrong. Save the error in state and re-render.
        this.setState({
          loading: false,
          error: err
        });
        console.log(err);
      });
  }

  renderLoading() {
    return <div>Waiting for input...</div>;
  }

  renderError() {
    if (this.state.subreddit == "") {
      return (<div></div>);
    }

    // Check if network error (Page doesn't exist)
    var errorText = "";
    if (this.state.error == "Error: Network Error") {
      errorText = "Are you sure that page exists?"
    }

    return (
      <div>
        Uh oh, there was an issue retrieving that subreddit! <br/>
        {errorText}
      </div>
    );
  }

  renderPosts() {
    if(this.state.error) {
      return this.renderError();
    }

    if (this.state.loading) {
      return this.renderLoading();
    }

    return (
      <ul>
        {this.state.posts.map(post =>
          <RedditTile content={post}/>
        )}
      </ul>
    );
  }

  render() {
    var title = "";
    if (this.state.subreddit !== "") {
      title = "/r/" + this.state.subreddit;
    }
    return (
      <div>
        <h1>{title}</h1>
        <span className="image main">
          <img src="" alt="" />
        </span>
        {this.renderPosts()}
      </div>
    );
  }
}

export default FetchDemo;
