import React from 'react';
import ContentLoader from 'react-content-loader';

const CardSkeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={400}
      height={300}
      viewBox="0 0 400 300"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="40" y="14" rx="0" ry="0" width="175" height="275" />
      <rect x="244" y="55" rx="0" ry="0" width="165" height="8" />
      <rect x="244" y="117" rx="0" ry="0" width="165" height="11" />
      <rect x="244" y="238" rx="0" ry="0" width="165" height="48" />
      <rect x="244" y="158" rx="0" ry="0" width="165" height="55" />
      <rect x="244" y="88" rx="0" ry="0" width="165" height="12" />
    </ContentLoader>
  );
};

export default CardSkeleton;
