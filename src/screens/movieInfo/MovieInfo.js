import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Header from '../../common/Header/Header';
import moviesData from '../../common/moviesData';
import { Typography, GridList, GridListTile, GridListTileBar } from '@material-ui/core';
import './movieInfo.css';
import Home from '../Home/Home';
import Youtube from 'react-youtube';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Rating from '@material-ui/lab/Rating';

class Details extends Component {
    constructor() {
        super();
        this.state = {
            movie: {},
            value: null,
            starIcons: [
                {
                    id: 1,
                    stateId: "star1",
                    color: "black"
                },
                {
                    id: 2,
                    stateId: "star2",
                    color: "black"
                },
                {
                    id: 3,
                    stateId: "star3",
                    color: "black"
                },
                {
                    id: 4,
                    stateId: "star4",
                    color: "black"
                },
                {
                    id: 5,
                    stateId: "star5",
                    color: "black"
                }
            ]
        }
    }
    componentWillMount() {
        let currentState = this.state;
        currentState.movie = moviesData.filter((mov) => {
            return mov.id === this.props.movieId
        })[0];
        this.setState({ currentState });
        console.log(this.state);
    }

    backToHomeHandler = () => {
        ReactDOM.render(<Home />, document.getElementById('root'));
    }
    artistClickedHandler = (url) => {
        window.location = url;
    }
    starClickedHandler = (id) => {
        this.setState({ value: id })
        console.log("star rating = " + id)

       {/* let starIconList = [];
        for (let star of this.state.starIcons) {
            let starNode = star;
            if (star.id <= id) {
                starNode.color = "yellow";
            }
            else {
                starNode.color = 'black';
            }
            starIconList.push(starNode);
        }
    this.setState({ starIcons: starIconList });*/}
    }

    render() {
        let movie = this.state.movie;
        let value = this.state.value;
        const opts = {
            height: '300',
            width: '700',
            playerVars: {
                autoplay: 0
            }
        }
        return (
            <div className="details">
                <Header />
                <div className="back-btn">
                    <Typography onClick={this.backToHomeHandler}>
                        &#60; Back to Home
                        </Typography>                </div>
                <div className="flex-containerDetails">
                    <div className="leftDetails">
                        <img src={movie.poster_url} href={movie.poster_url} alt={movie.title} />
                    </div>
                    <div className="middleDetails">
                        <div>
                            <Typography variant="h4">{movie.title} </Typography>
                        </div>
                        <div className="marginTop16">
                            <Typography><span className="bold">Genres: </span> {movie.genres.join(', ')} </Typography>
                        </div>
                        <div>
                            <Typography><span className="bold">Duration: </span> {movie.duration}</Typography>
                        </div>
                        <div>
                            <Typography><span className="bold">Release Date: </span> {new Date(movie.release_date).toDateString()}</Typography>
                        </div>
                        <div>
                            <Typography><span className="bold">Rating: </span> {movie.critics_rating}</Typography>
                        </div>
                        <div className="marginTop16">
                            <Typography><span className="bold">Plot: </span> <a href={movie.wiki_url} target="_">[Wiki]</a> {movie.storyline}</Typography>
                        </div>
                        <div className="marginTop16">
                            <Typography><span className="bold">trailer:</span></Typography>
                            <div className="trailerContainer">
                                <Youtube
                                    videoId={movie.trailer_url.split('?v=')[1]}
                                    opts={opts}
                                    onReady={this._onReady}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="rightDetails">
                        <Typography><span className="bold">Rate this movie: </span></Typography>
                        <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => this.starClickedHandler(newValue)}
                           // onClick={() => this.starClickedHandler(newValue)}
                        />
                        <br />
                        {/*this.state.starIcons.map(star => (
                            <StarBorderIcon
                                className={star.color}
                                key={"star" + star.id}
                                onClick={() => this.starClickedHandler(star.id)}
                            />
                        ))*/}
                        <div className="bold marginBottom16 marginTop16">
                            <Typography><span className="bold">Artists: </span></Typography>
                        </div>
                        <GridList cols={2} cellHeight={300} className="gridTile" >
                            {movie.artists != null && movie.artists.map(artist => (
                                <GridListTile
                                    className="gridTile"
                                    key={artist.id}>
                                    <img src={artist.profile_url} alt={artist.first_name + " " + artist.last_name} />
                                    <a href={artist.wiki_url} target="_"><GridListTileBar className="gridTileBar" title={artist.first_name + " " + artist.last_name} /></a>
                                </GridListTile>

                            ))

                            }
                        </GridList>
                    </div>
                </div>
            </div>
        )
    }
}
export default Details;