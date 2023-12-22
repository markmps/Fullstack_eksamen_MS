import './App.css'
import client from './MyApolloClient';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CreateMovie from './components/MovieForm';
import HomePage from './routes/home';
import MovieUpdate from './components/MovieUpdate'
import MovieDelete from './components/MovieDelete'
import Actors from './routes/actors'

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <nav>
            <ul className="navbar">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/create-movie">Create Movie</Link>
              </li>
              <li>
                <Link to="/update-movie">Update Movie</Link>
              </li>
              <li>
                <Link to="/delete-movie">Delete Movie</Link>
              </li>
              <li>
                <Link to="/actors">Create/add Actors</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/create-movie" element={<CreateMovie />} />
            <Route path="/update-movie" element={<MovieUpdate />} />
            <Route path="/delete-movie" element={<MovieDelete />} />
            <Route path="/actors" element={<Actors />} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider >
  )
}

export default App
