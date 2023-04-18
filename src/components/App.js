import React from "react";
import MovieCard from "./MovieCard";
import SocialMedia from "./SocialMedia"

function App() {
  const title = "Mad Max";
  const posterURL =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn1OTYGz2GDC1XjA9tirh_1Rd571yE5UFIYsmZp4nACMd7CCHM";
  const genresArr = ["Action", "Adventure", "Science Fiction", "Thriller"];
  // SocialMedia Component
  const socialLinks = {
    github: "https://github.com/liza",
    linkedin: "https://www.linkedin.com/in/liza/",
  };
  return (
    <div className="App">
      <MovieCard title={title} 
      // posterSrc={posterURL} - poster ommitted thus the default is displayed
      genres={genresArr} />
      {/* <SocialMedia links={socialLinks} />  */}
    </div>
  );
}



export default App;
