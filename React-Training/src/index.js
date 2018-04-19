import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import VideoList from './components/videoList';
import SearchBar from './components/searchBar';
import VideoDetail from './components/videoDetail';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyDKaapYk7By-_XFfMk1nWYsU66TufPJVFc';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch("surfboards")
    }

    videoSearch(term) {
        YTSearch({ key: API_KEY, term: term }, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300) //called function after 300ms

        return (
            <div>
                <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    videos={this.state.videos}
                    onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('container')
)