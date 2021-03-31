
import React, {Component} from "react";
import './App.css';
import Movie from "./movie";

class App extends Component{

    state = {}

    // 처음에는 state로 렌더링 하고 다음에 didmount로 인해서
    // setState해서 다시 렌더링한다.
    // componentDidMount() {
    //     setTimeout(()=> {
    //         this.setState({
    //             movies: [
    //                 {
    //                     title: "Metrics",
    //                     poster: "https://upload.wikimedia.org/wikipedia/ko/2/26/

    componentDidMount() {
        this._getMovies();
    }

    _renderMovies = () => {
        const movies = this.state.movies.map(movie => {
            console.log(movie)
            return <Movie title={movie.title_english}
                          poster={movie.medium_cover_image}
                          key={movie.id}
                          genres={movie.genres}
                          synopsis={movie.synopsis}
            />
        })
        return movies
    }

    _getMovies = async () => {
        const movies = await this._callApi()
        this.setState({
            movies
        })
    }

    _callApi = () => {
        return fetch('https://yts.mx/api/v2/list_movies.json')
            .then(response => response.json())
            .then(json => json.data.movies)
            .catch(err => console.log(err))
    }


    render() {
        const {movies} = this.state;
        return (
            <div className={movies ? "App" : "App--loading"}>
                {movies ? this._renderMovies() : "Loading"}
            </div>
        );
    }
}

export default App;
