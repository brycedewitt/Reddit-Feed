import PropTypes from 'prop-types'
import React from 'react'
import Helmet from "react-helmet"
import FetchDemo from "./RedditDisplayQuery.js"
import pic01 from '../images/pic01.png'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import { login, isAuthenticated, getProfile } from "../utils/auth"


class Main extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      subreddit: "",
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.onSubmitNew = this.onSubmitNew.bind(this)
    this.onSubmitTop = this.onSubmitTop.bind(this)

  }

  onSubmit(e) {
      console.log(e);
      e.preventDefault();
      this.refs.updatefeed.updateFeed(this.state.subreddit, "hot");
  }

  onSubmitNew(e) {
      console.log(e);
      e.preventDefault();
      this.refs.updatefeed.updateFeed(this.state.subreddit, "new");
  }

  onSubmitTop(e) {
      console.log(e);
      e.preventDefault();
      this.refs.updatefeed.updateFeed(this.state.subreddit, "top");
  }

  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <h2>Frameworks</h2>
          <p>
            Since the specs for this exersize were fairly basic and involved only AJAX requests to the Reddit API based on user input and no persistant data, I used <b>Gatsby</b> and <b>React</b> to generate static files that could then be built and hosted for free at a <b>Netlify</b> domain.  I used a <b>Gatsby template</b> from html5up.net to generate basic pages and styling, as well as <b>axios</b> to help simplify the AJAX requests and <b>webpack</b> for development and building.  Additionally, I used <b>Auth0</b> to verify users, which allowed me to access the <b>OAuth2</b> endpoints of the API, used for more interesting requests.
          </p>
          <h2>Design</h2>
          <p>
          </p>
          <h2>Local Deployment</h2>
          <h3>Requires Gatsby</h3>
          <p>
            To run this site locally, clone and cd into the repo:
          </p>
          <code>git clone https://github.com/brycedewitt/Reddit-Feed.git && cd Reddit-Feed</code>
          <p>Install required packages:</p>
          <code>npm install</code>
          <p>...and run the Gatsby development server</p>
          <code>gatsby develop</code>
          <p>The authentication features of the site may/may not work locally due to the redirects designated in Auth0</p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Public Query</h2>
          <p>
            Enter a subreddit name to retrieve the current top content.
            </p>
            <p>This may not work correctly on Netlify due to CORS issues when served from HTTPS. If so, please <a onClick={() => login()}>login</a> and use the authenticated queries.
            </p>

            <p>
            <form className="pub-query-form">
            <input id="pub-query-text" type="text" placeholder="examples: awww, cars, historymemes, talesfromretail" value={this.state.subreddit} onChange={(e) => this.setState({ subreddit: e.target.value})}></input>
            <button class="query-button" onClick={this.onSubmit}>Get hot</button>
            <button class="query-button" onClick={this.onSubmitNew}>Get New</button>
            <button class="query-button" onClick={this.onSubmitTop}>Get Top</button>
            </form>
            <div className='results-container'>
                <FetchDemo ref="updatefeed"/>
            </div>
          </p>
          <p>

          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">{() => getProfile()}</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            This will only be accessable if logged in.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Login</h2>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
