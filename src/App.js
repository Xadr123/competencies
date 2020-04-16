import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      {/* This is a link to a stylesheet (not a real sheet in this example) */}
      <link href="./aCssSheet.css" rel="stylesheet" />
      <section>
        This is an HTML Section
      </section>
      <div id="scriptId">
        <script>
          {document.getElementById("scriptId").innerHTML = "A script tag"}
        </script>
      </div>
      <div className="position-selector">
        A div with a selector being positioned
      </div>
      {/* This is a match for routing, and would match you to the page id specified
      {props.match.params.pageId} */}
      <div className="flexbox">
        A flexbox
      </div>
      {/* Meta Data */}
      <meta
      name="Meta Example"
      content="An example of meta-data"
      />
      {/* HTML 5 AND ACCESSIBILITY (Splits into readable section, p tags, and body for screen readers) */}
      <div>
        <section className="text-section">
          <body>
            <p>

            </p>

            <p>


            </p>
          </body>
        </section>
        <section className="image-section">
          <body>
            <img>

            </img>
          </body>
        </section>
      </div>
      {/* SEO Example */}
      <title>An Interesting Title Can Help with SEO so the search engine can find your site easier</title>
    </div>
  );
}

export default App;
