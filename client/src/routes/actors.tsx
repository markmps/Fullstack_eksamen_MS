import React from 'react';
import CreateActor from '../components/CreateActor';
import AddActorToMovie from '../components/AddActorToMovie';
import AddMovieToActor from '../components/AddMovieToActor';

const Actors: React.FC = () => {
  return (
    <div>
      <h2>Actors Management</h2>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <CreateActor />
        <AddActorToMovie />
        <AddMovieToActor />
      </div>
    </div>
  );
};

export default Actors;
