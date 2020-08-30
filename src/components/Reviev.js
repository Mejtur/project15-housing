import React from "react";

function Reviev({ text, author }) {
  console.log(text);
  return (
    <div className="quote">
      <p className="quote-text">
        <i>{text}</i>
      </p>
      <p className="author">{author}, HomeOwner</p>
    </div>
  );
}

export default Reviev;
