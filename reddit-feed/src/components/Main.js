import PropTypes from 'prop-types'
import React from 'react'
import Helmet from "react-helmet"
import FetchDemo from "./RedditDisplayQuery.js"
import pic01 from '../images/pic01.png'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      subreddit: "",
    }
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(e) {
      e.preventDefault();
      this.refs.updatefeed.updateFeed(this.state.subreddit);
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
          <p>
            Here's some info about this site.
          </p>
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
            Enter a subreddit to retrieve the current content.
            <form classname="pub-query-form">
            <input id="pub-query-text" type="text" placeholder="examples: awww, cars, historymemes, talesfromretail" value={this.state.subreddit} onChange={(e) => this.setState({ subreddit: e.target.value})}></input>
            <button id="pub-query-search" onClick={this.onSubmit}>Search</button>
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
          <h2 className="major">About</h2>
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
          <p>I'll change this to link to Auth0 in the future.</p>
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
