import PropTypes from 'prop-types'
import React from 'react'
import { login, isAuthenticated, getProfile } from "../utils/auth"



const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-diamond"></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Reddit-Feed</h1>
        <p>
          A minimal static webpage for querying the Reddit API using Gatsby + axios.
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Public Queries
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            OAuth Queries
          </button>
        </li>
        <li>
          <button
            // onClick={() => login()}
          ><a href="https://www.reddit.com/api/v1/authorize?response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A8000%2Fcallback&scope=identity%2Cread%2Csubmit%2Cmysubreddits%2Cvote%2Clivemanage&state=tbNbGotjeMyEvKz_4hJUGB9XmfrSDKaa&client_id=hfpVQZRgLeSsuw">
            Login</a>
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
