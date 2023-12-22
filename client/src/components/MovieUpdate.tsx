import React, {useState} from "react";
import { useMutation } from '@apollo/client';
import UPDATE_MOVIE from '../queries/UpdateMovie';

const MovieUpdate= () => {
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [year, setYear] = useState<number>(0);
    const [updateMovie, { loading, error }] = useMutation(UPDATE_MOVIE);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
          await updateMovie({ variables: 
            { 
                id: id, 
                title: title, 
                year: year 
            } 
        });
          console.log('Movie updated successfully');
        } catch (err) {
          console.error('Error updating movie:', err);
        }
      };

    return (
        <div>
        <h2>Update Movie</h2>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
                placeholder="Movie ID"
                required
            />
          <br />
            
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="New Title"
                required
            />
          <br />

            <input
                type="number"
                value={year === 0 ? '' : year}
                onChange={(e) => setYear(parseInt(e.target.value))}
                placeholder="New Year"
            />
          <br />

            <button type="submit" disabled={loading}>Update Movie</button>
            {loading && <p>Updating...</p>}
            {error && <p>Error updating movie: {error.message}</p>}
            </form>
    </div>
      );
}

export default MovieUpdate;
