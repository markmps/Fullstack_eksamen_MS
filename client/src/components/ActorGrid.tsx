import './css/Grid.css'
import React from 'react';
import {useQuery} from '@apollo/client';
import GET_ACTORS from '../queries/GetActors';

interface Actor {
  _id: string;
  age: string;
  name: string;
}

interface ActorGridProps {
    searchQuery: string;
  }

const ActorGrid: React.FC<ActorGridProps> = ({searchQuery}) => {
    const  { loading, error, data } = useQuery(GET_ACTORS, {
      variables: {name: searchQuery}
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>
    if (!data || data.actors.length === 0) return <p>No actors found.</p>;

    return(
      <div>
      <table className="grid">
      <caption>Actors</caption>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {data.actors.map((actor: Actor) => (
            <tr key={actor._id}>
              <td>{actor._id}</td>
              <td>{actor.name}</td>
              <td>{actor.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 

export default ActorGrid;

