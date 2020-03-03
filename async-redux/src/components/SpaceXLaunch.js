import React from 'react';
import { connect } from 'react-redux';
import { getLaunch } from '../actions';

const SpaceXLaunch = ({ getLaunch ,launchDetails, isFetching, error }) => {
    if (isFetching) {
        return <h2>Finding the newest launch</h2>
    }

    return(
        <div>
            <h1>SpaceXLaunch</h1>
                <div>
                    <h2>{launchDetails.mission_name}</h2>
                    <p>{launchDetails.launch_year}</p>
                    <p>{launchDetails.rocket_name}</p>
                    <p>{launchDetails.site_name}</p>
                    <p>{launchDetails.details}</p>
                </div>
            <button onClick={getLaunch}>click</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        launchDetails: state.launchDetails,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, { getLaunch } )(SpaceXLaunch);

//<img src={launchDetails.links.flickr_images[0]} alt="rocket" />
