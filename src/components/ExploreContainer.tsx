import React from 'react';
import './ExploreContainer.css';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <strong>Ready to create an app?</strong>
      <p>This demo is using <strong>New Relic</strong></p>
    </div>
  );
};

export default ExploreContainer;
