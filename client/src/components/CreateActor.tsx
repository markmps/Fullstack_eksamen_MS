import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import ADD_ACTOR  from '../queries/CreateActor';

const CreateActor: React.FC = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState<number>(0);
  const [addActor, { loading, error }] = useMutation(ADD_ACTOR);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await addActor({ variables: 
        { 
            name: name,
            age: age 
        } 
    });
      console.log('Actor created successfully');
      setName('');
      setAge(0);
    } catch (err) {
      console.error('Error creating actor:', err);
    }
  };

  return (
    <div>
      <h2>Create Actor</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Actor Name"
          required
        />
      <br />

        <input
          type="number"
          value={age === 0 ? '' : age}
          onChange={(e) => setAge(parseInt(e.target.value) || 0)}
          placeholder="Actor Age"
        />
      <br />

        <button type="submit" disabled={loading}>Create Actor</button>
        {loading && <p>Creating actor...</p>}
        {error && <p>Error creating actor: {error.message}</p>}
      </form>
    </div>
  );
};

export default CreateActor;