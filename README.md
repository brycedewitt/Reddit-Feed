<h2>Frameworks</h2>
<p>
  Since the specs for this exersize were fairly basic and involved only AJAX requests to the Reddit API based on user input and no persistant data, I used <b>Gatsby</b> and <b>React</b> to generate static files that could then be built and hosted for free at a <b>Netlify</b> domain.  I used a <b>Gatsby template</b> from html5up.net to generate basic pages and styling, as well as the <b>axios</b> plugin to help simplify the AJAX requests, and <b>webpack</b> (as part of Gatsby) for development and building.  Additionally, I intended to use <b>Auth0</b> to verify users, which would allow me to access the <b>OAuth2</b> endpoints of the API for more interesting requests, but I've run into some issues exchanging my keys for an authorization token and haven't had time to investigate.
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
<p>The authentication features of the site may/may not work locally due to the authorized callback URLs designated in Auth0</p>
<h4>Prod Deployment</h4>
<p>https://blissful-almeida-65089b.netlify.com/</p>
<h2>Design</h2>
<p>
As a <b>React</b> application, this single page application is broken into a handful of componenents prior to being generated into static HTML/CSS/JS files, the most interesting of which are the <code>RedditDisplayQuery</code> and <code>RedditTile</code> components.  After a user inputs text into the Public Queries search box and selects one of the submission buttons, both the search parameters and the type of request are passed to the <code>RedditDisplayQuery</code> component, which performs the AJAX request and holds the result within its own state.  To render the result tiles, it creates a <code>RedditTile</code> for each "tile" the the corresponding json result parameters, which in turn sorts out the most interesting information and constructs an HTML template to display it.  The OAuth Queries tab was intended to return user-specific query results, but I haven't been able to figure out how to get <b>Auth0</b> to return the correct token to my callback URL.  I knew it would be a little easier to roll my own OAuth login, but I wanted to use <b>Auth0</b> to store my UserID and Secret somewhere not on a static site.
</p>

# Credits

Gatsby.js V2 starter based on the Dimension site template, designed by HTML5 UP. Check out https://codebushi.com/gatsby-starters-and-themes/ for more Gatsby starters and templates.
