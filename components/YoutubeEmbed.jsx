import React from "react";


const YoutubeEmbed = (embedID) => (
  <div className="video-responsive">
    <iframe
      width="560"
      height="315"
      // eslint-disable-next-line no-undef
      src={`https://www.youtube.com/embed/${embedID}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);


export default YoutubeEmbed;