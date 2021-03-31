import React, {Component} from "react";
import './movie.css';
import LinesEllipsis from 'react-lines-ellipsis'

class Movie extends Component{

    // static propTypes = {
    //     title: React.PropTypes.string,
    //     poster: React.PropTypes.string
    // }

    render() {
        return(
            <div className="Movie">
                <div className="Movie_Columns">
                <MoviePoster poster={this.props.poster}/>
                </div>
                <div className="Movie_Columns">
                    <h1>{this.props.title}</h1>
                    <div className="Movie_Genres">
                        {this.props.genres.map((genre, index) => <MovieGenre genre={genre} key={index}/>)}
                    </div>
                    <div className="Movie_synopsis">
                        <LinesEllipsis
                            text= {this.props.synopsis}
                            maxLine= '3'
                            ellipsis='...'
                            trimRight
                            basedOn='letters'
                        />
                    </div>
                </div>
            </div>
        )
    }
}

// function Movie({title, poster}){
//     return (
//             <div>
//                 <MoviePoster poster={poster}/>
//                 <h1>{title}</h1>
//             </div>
//     )
// }

class MoviePoster extends Component{
    render() {
        return(
            <img src={this.props.poster} alt="Movie Poster" className="Movie_Poster"/>
        )
    }
}

function MovieGenre({genre}){
    return(
        <span className="Movie_Genre">{genre} </span>
    )
}

// function MoviePoster({poster}){
//     return (
//         <img src={poster} alt={"movie poster"} />
//     )
// }

export default Movie

