import React, { Component } from 'react'
import { Content, Grid, Col, Item, Text } from 'native-base';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux'
import { Languages } from '@common'
import { toast } from '@app/Omni'

import styles from './styles'

class Blogs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false
        }
        this.checkConnection = this.checkConnection.bind(this)
        this.stopAndToast = this.stopAndToast.bind(this)
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
            <ScrollView contentContainerStyle={styles.container}>
                <Content>
                    <Grid style={styles.centerInfoBox}>
                        <Col>
                            <Text style={styles.pickText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                        </Col>
                    </Grid>
                    <Grid style={styles.centerInfoBox}>
                        <Col>
                            <Text style={styles.pickText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                        </Col>
                    </Grid>
                    <Grid style={styles.centerInfoBox}>
                        <Col>
                            <Text style={styles.pickText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                        </Col>
                    </Grid>
                    <Grid style={styles.centerInfoBox}>
                        <Col>
                            <Text style={styles.pickText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                        </Col>
                    </Grid>
                    <Grid style={styles.centerInfoBox}>
                        <Col>
                            <Text style={styles.pickText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                        </Col>
                    </Grid>
                    <Grid style={styles.centerInfoBox}>
                        <Col>
                            <Text style={styles.pickText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                        </Col>
                    </Grid>
                    <Grid style={styles.centerInfoBox}>
                        <Col>
                            <Text style={styles.pickText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                        </Col>
                    </Grid>
                    <Grid style={styles.centerInfoBox}>
                        <Col>
                            <Text style={styles.pickText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                        </Col>
                    </Grid>
                    <Grid style={styles.centerInfoBox}>
                        <Col>
                            <Text style={styles.pickText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                        </Col>
                    </Grid>
                </Content>
            </ScrollView>
        )
    }
}

const mapStateToProps = ({ netInfo }) => ({ netInfo })
export default connect(mapStateToProps, null)(Blogs)
