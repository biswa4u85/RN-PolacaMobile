import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Languages } from '@common'
import { toast } from '@app/Omni'
import { MapView } from "expo";

import styles from './styles'

class Map extends Component {
    constructor(props) {
        super(props);
        this.state = { isLoading: false, markers: [] };
    }

    componentDidMount() {
        this.setState({
            markers: [
                {
                    id: 72,
                    stationName: 'W 52 St & 11 Ave',
                    availableDocks: 24,
                    latitude: 40.76727216,
                    longitude: - 73.99392888,
                    statusValue: 'In Service',
                    statusKey: 1,
                    availableBikes: 12,
                    stAddress1: 'W 52 St & 11 Ave',
                    lastCommunicationTime: '2018 - 06 - 14 01: 49: 55 AM'
                },
                {
                    id: 73,
                    stationName: 'W 52 St & 11 Ave',
                    availableDocks: 24,
                    latitude: 40.71911552,
                    longitude: -74.00666661,
                    statusValue: 'In Service',
                    statusKey: 1,
                    availableBikes: 12,
                    stAddress1: 'W 52 St & 11 Ave',
                    lastCommunicationTime: '2018 - 06 - 14 01: 49: 55 AM'
                }
            ]
        })
    }

    checkConnection() {
        const { netInfo } = this.props
        if (!netInfo.isConnected) toast(Languages.noConnection)
        return netInfo.isConnected
    }

    stopAndToast(msg) {
        toast(msg)
        this.setState({ isLoading: false })
    }


    render() {
        return (
            <MapView
                style={styles.container}
                region={{
                    latitude: 40.76727216,
                    longitude: -73.99392888,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                }}
            >
                {this.state.isLoading
                    ? null
                    : this.state.markers.map((marker, index) => {
                        const coords = {
                            latitude: marker.latitude,
                            longitude: marker.longitude
                        };

                        const metadata = `Status: ${marker.statusValue}`;

                        return (
                            <MapView.Marker
                                key={index}
                                coordinate={coords}
                                title={marker.stationName}
                                description={metadata}
                            />
                        );
                    })}
            </MapView>
        )
    }
}

const mapStateToProps = ({ netInfo }) => ({ netInfo })
export default connect(mapStateToProps, null)(Map)
