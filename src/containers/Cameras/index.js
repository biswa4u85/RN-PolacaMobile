import React from 'react';
import { ScrollView, Image, View, TouchableOpacity } from 'react-native';
import { Content, Grid, Col, Text } from 'native-base';
import { Location, Camera, Permissions } from 'expo';

import styles from './styles'

export default class Cameras extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            location: null,
            errorMessage: null,
            isLoading: false
        }
        this._getLocationAsync();
        this._handlePress = this._handlePress.bind(this)
    }

    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({
                errorMessage: 'Permission to access location was denied',
            });
        }

        let location = await Location.getCurrentPositionAsync({});
        this.setState({ location });
    };

    state = {
        hasCameraPermission: null,
        type: Camera.Constants.Type.back,
        openCamera: false,
        photo: null,
    };

    async componentWillMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    }

    showImg() {
        if (this.state.photo) {
            return (
                <Image
                    style={{ width: 400, height: 400 }}
                    source={{ uri: this.state.photo }}
                />
            )
        } else {
            return (
                <Text style={styles.noImg}>No Image</Text>
            )
        }
    }

    _handlePress() {
        console.log(this.state.location)
        console.log(this.state.photo)
        this.setState({
            photo: null,
        });
    }

    render() {
        const { hasCameraPermission, openCamera } = this.state;
        if (hasCameraPermission === null) {
            return <View />;
        } else if (hasCameraPermission === false) {
            return <Text>No access to camera</Text>;
        } else if (hasCameraPermission === true && openCamera === true) {
            return (
                <View style={{ flex: 1 }}>
                    <Camera ref={ref => { this.camera = ref; }} style={{ flex: 1 }} type={this.state.type}>
                        <View style={{ flex: 10, flexDirection: 'row', backgroundColor: 'transparent' }}>
                            <TouchableOpacity
                                onPress={() => {
                                    this.setState({
                                        type: this.state.type === Camera.Constants.Type.back
                                            ? Camera.Constants.Type.front
                                            : Camera.Constants.Type.back,
                                    });
                                }}>
                                <Text style={{ fontSize: 18, marginLeft: 20, marginTop: 40, color: 'white' }}>Flip</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', backgroundColor: 'transparent' }}>
                            <TouchableOpacity
                                onPress={() => {
                                    if (this.camera) {
                                        this.camera.takePictureAsync()
                                            .then(data => {
                                                this.setState({
                                                    openCamera: false,
                                                    photo: data.uri
                                                });
                                            })
                                    }
                                }}>
                                <Text style={{ fontSize: 18, margin: 10, color: 'white' }}>Keep</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    alignItems: 'center',
                                }}
                                onPress={() => {
                                    this.setState({
                                        openCamera: false,
                                        photo: null
                                    });
                                }}>
                                <Text style={{ fontSize: 18, margin: 10, color: 'white' }}>Discard</Text>
                            </TouchableOpacity>
                        </View>
                    </Camera>
                </View>
            )
        } else {
            return (
                <ScrollView contentContainerStyle={styles.container}>
                    <Content>
                        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', marginTop: 100 }}>
                            <View>
                                {this.showImg()}
                            </View>
                            <Grid style={styles.centerInfoBox}>
                                <Col size={50}>
                                    <TouchableOpacity
                                        style={styles.pickButton}
                                        onPress={() => {
                                            this.setState({ openCamera: true });
                                        }}>
                                        <Text style={styles.butText}>Take A Pick</Text>
                                    </TouchableOpacity>
                                </Col>
                                <Col size={50}>
                                    <TouchableOpacity onPress={this._handlePress} style={styles.saveButton}>
                                        <Text style={styles.butText}>Save</Text>
                                    </TouchableOpacity>
                                </Col>
                            </Grid>
                        </View>
                    </Content>
                </ScrollView>
            );
        }
    }
}