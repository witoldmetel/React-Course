import React from 'react';

export default class googleMap extends React.Component {
    componentDidMount() {
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }

    render () {
        return <div ref="map" />
    }
}

