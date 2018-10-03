import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import mapStyles from '../../styles/googlemaps';
import config from '../../config';
import utils from '../../utils';

const zoomLevel = {
  default: 13,
  clicked: 14,
};

const defaultState = {
  bounds: null,
  center: {},
  zoom: zoomLevel.default,
  showingInfoWindow: false,
  activeMarker: {},
  selectedPlace: {},
};

class MapContainer extends React.Component {
  state = defaultState;

  onMapReady = () => {
    const { movies } = this.props;
    const positions = utils.movies.getMapOfCoordinates(movies);

    if (positions.length > 1) {
      const bounds = new window.google.maps.LatLngBounds();
      positions.forEach(p => bounds.extend(p));
      this.setState({ bounds });
    } else if (positions.length === 1) {
      this.setState({ center: positions[0] });
    }
  }

  onMarkerClick = (props, marker) => {
    this.setState({
      center: marker.position,
      zoom: zoomLevel.clicked,
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });
  }

  onMapClicked = () => {
    const { showingInfoWindow } = this.state;
    if (showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  renderMarkers = () => {
    const { movies } = this.props;
    const markers = [];

    // iterate through all movies
    for (let i = 0; i < movies.length; i++) {
      const movie = movies[i];

      // iterate through all valid locations
      for (let x = 0; x < movie.locations.length; x++) {
        const location = movie.locations[x];

        // put a marker for each location
        markers.push(
          <Marker
            key={`${i}${x}${location.name}`}
            title={`${i}`} // set the index of the movie
            name={`${x}`} // set the index of the location
            position={location}
            onClick={this.onMarkerClick}
            /*
            icon={{
              url: utils.assets.getAsset('marker.svg'),
              anchor: new window.google.maps.Point(18, 36),
              scaledSize: new window.google.maps.Size(36, 36),
            }}
            */
          />,
        );
      }
    }

    return markers;
  }

  renderInfoWindow = () => {
    const { renderInfoWindowContent } = this.props;
    if (!renderInfoWindowContent) {
      return null;
    }

    const { activeMarker, showingInfoWindow } = this.state;
    return (
      <InfoWindow marker={activeMarker} visible={showingInfoWindow}>
        {this.renderSelectedWindowContent()}
      </InfoWindow>
    );
  }

  renderSelectedWindowContent = () => {
    const { movies, renderInfoWindowContent } = this.props;
    const { selectedPlace } = this.state;

    if (!selectedPlace.title || !selectedPlace.name) {
      // 'children' of InfoWindow is required, so return empty div
      return <div />;
    }

    const movieIndex = Math.abs(selectedPlace.title); // title is the index of the selected movie in the movies array
    const locationIndex = Math.abs(selectedPlace.name); // name is the index of the selected location in the movie's locations array

    return renderInfoWindowContent(movies[movieIndex], movies[movieIndex].locations[locationIndex]);
  }

  render() {
    const {
      className,
      height = 600,
      gestureHandling,
    } = this.props;

    const {
      bounds,
      center,
      zoom,
    } = this.state;

    return (
      <div className={className} style={{ position: 'relative', height }}>
        <Map
          google={window.google}
          gestureHandling={gestureHandling}
          style={{ width: '100%', height: '100%' }}
          styles={mapStyles}
          onReady={this.onMapReady}
          onClick={this.onMapClicked}
          bounds={bounds}
          center={center}
          zoom={zoom}
        >
          {this.renderMarkers()}
          {this.renderInfoWindow()}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: config.googleMaps.apiKey,
})(MapContainer);
