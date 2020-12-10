import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie'; 
import './Home.css';

class Home extends React.Component {
    state = {
        isLoading: true,
        movies: []
    };
    getMovies = async () => {
        // before ES6
        // const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
        // console.log(movies.data.data.movies);
        // ES6 
        const {
            data: {
                data: {movies}
                }
            } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
        console.log(movies); 
        // this.setState({movies:movies}); old version 
        this.setState({movies, isLoading: false}); 
    }
    // instead of fetch() we use axios 
    // 1st way
    componentDidMount() {
        this.getMovies();
    }
    // 2nd Way
    // async componentDidMount() {
    //     const movies = axios.get("https://yts-proxy.now.sh/list_movies.json");
    // }

    // un exemple   
    // componentDidMount(){
    //     // setTimeout(() => {
    //     //     this.setState({isLoading : false}); 
    //     // }, 6000);   
    // }


    render() {
        const { isLoading, movies } = this.state;
        return (
        <section className="container">
            {isLoading ? ( 
                <div className="loader">
                    <span className="loader_text">"Loading..."</span>
                </div>
                ) : (
                <div className="movies">
                    {movies.map(movie => (
                <Movie 
                key={movie.id}
                id={movie.id} 
                year={movie.year} 
                title={movie.title} 
                summary={movie.summary} 
                poster={movie.medium_cover_image} 
                genres={movie.genres}
                />
                ))}
                </div>
        )}
        </section>
        )}}

export default Home;