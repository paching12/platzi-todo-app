import React from "react";
import ContentLoader from "react-content-loader";

const ItemLoading = (props) => (
  <ContentLoader
    speed={2}
    width={window.innerWidth}
    height={160}
    viewBox={`0 0 ${window.innerWidth} 160`}
    backgroundColor="#000957"
    foregroundColor="#577bc1"
    {...props}
  >
    <rect x="-2" y="17" rx="3" ry="3" width={window.innerWidth} height="42" />
    <rect x="-6" y="67" rx="3" ry="3" width={window.innerWidth} height="42" />
    <rect x="-8" y="117" rx="0" ry="0" width={window.innerWidth} height="42" />
  </ContentLoader>
);

export { ItemLoading };
