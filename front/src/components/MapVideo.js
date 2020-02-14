import React from 'react';
import videoLoop from '../assets/videos/videoformap.m4v';

class MapVideo extends React.Component {

	render() {
		return (
			<video className="video-map" loop autoPlay muted>
				<source src={videoLoop} type='video/mp4' />
			</video>
		)
	}
};


export default MapVideo;
