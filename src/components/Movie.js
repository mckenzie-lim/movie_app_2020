import React from 'react';
import {Link} from 'react-router-dom'; 
import PropTypes from 'prop-types';
import './Movie.css'; 

// Doesn't need state so doesn't need to be class componenent  
function Movie({ id, year, title, summary, poster, genres }) {
    return ( 
    <div className="movie">
    <Link to={{
        pathname:`/movie/${id}`, 
        state: {
            // thanks to JS we don't need to type year:year, 
            year, 
            title, 
            summary, 
            poster, 
            genres
        }
    }}>
    
            {/* <label htmlFor=> */}
        <img src={poster} alt={title} title={title} />
        <div className="movie_data">
            <h3 className="movie_title">{title}</h3>
            <h5 className="movie_year">{year}</h5>
            <ul className="movie_genres">{genres.map((genres, index) => ( <li key={index} className="genres_genres">{genres}</li>))}</ul>
            <p className="movie_summary">{summary.slice(0, 180)}...</p>
        </div>
    </Link>
    </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired, 
    genres: PropTypes.arrayOf(PropTypes.string).isRequired

};
export default Movie; 