import React, { useEffect, useState } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  //   useEffect(() => {
  //     console.log("I Only Run Once");
  //   }, []);
  //   useEffect(() => {
  //     console.log("I Run at Initial Render and at every Re render");
  //   });
  //   useEffect(() => {
  //     console.log("I Run at Initial Render and every time when the term changes");
  //   }, [term]);
  //   console.log("Runs on every Re Render");
  useEffect(() => {
    const searchWiki = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      setResults(data.query.search);
    };

    const timeoutId = setTimeout(() => {
      if (term) {
        searchWiki();
      }
    }, 300);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [term]);

  const renderedList = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go To Page
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          {/* XSS Attack */}
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
            placeholder="Enter To Search "
          />
        </div>
      </div>
      <div className="ui celled list">{renderedList}</div>
    </div>
  );
};

export default Search;
