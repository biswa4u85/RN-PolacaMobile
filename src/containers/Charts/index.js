import React, { Component } from 'react'
import { Image, ScrollView, Text, View, } from 'react-native';
import { connect } from 'react-redux'
import { Languages, Images } from '@common'
import { Spinner } from '@components'
import { toast } from '@app/Omni'
import PieChart from 'react-native-pie-chart';

import styles from './styles'

class Charts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            coalitions: [],
            election: '',
            resultsByStates: [],
        }
        this.checkConnection = this.checkConnection.bind(this)
        this.stopAndToast = this.stopAndToast.bind(this)
    }

    checkConnection() {
        const { netInfo } = this.props
        if (!netInfo.isConnected) toast(Languages.noConnection)
        return netInfo.isConnected
    }

    componentDidMount() {
        this.fetchChaerData();
    }

    fetchChaerData() {
        fetch('https://polaca-ppe.azurewebsites.net/api/election/7161c04b-2052-4b23-8a8e-175b3b85dc0f/results?code=Qq3jYRVGlil26eRwjBYXnzW2VaeyFuNpV2WF31wwGjSncd4bQbWF4Q==')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    coalitions: responseJson.Coalitions,
                    election: responseJson.Election,
                    resultsByStates: responseJson.ResultsByStates,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    stopAndToast(msg) {
        toast(msg)
        this.setState({ isLoading: false })
    }

    randerChart() {
        const { resultsByStates } = this.state;
        const chart_wh = 250
        const series = []
        const sliceColor = []
        for (let item of resultsByStates) {
            series.push(item.NumberOfImages)
            sliceColor.push("#" + ((1 << 24) * Math.random() | 0).toString(16))
        }
        if (series.length > 0 && sliceColor.length > 0) {
            return (
                <View style={styles.circleImg}>
                    <PieChart
                        chart_wh={chart_wh}
                        series={series}
                        sliceColor={sliceColor}
                    />
                </View>
            )
        }
    }

    render() {
        const { election, coalitions, isLoading } = this.state;

        if (coalitions) {
            return (
                <View style={styles.container}>
                    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                        <View style={styles.getStartedContainer}>
                            <Text style={styles.getStartedText}>{election ? election.Description : ''}</Text>
                        </View>
                        {this.randerChart()}
                        <View style={styles.membersArea}>
                            {coalitions.map((item, i) =>
                                <View key={i} style={styles.memberBox}>
                                    <Text style={styles.memberName}>{item.CandidateName}</Text>
                                    <View style={[styles.memberBack1, { backgroundColor: item.Color }]}>
                                        <Text style={styles.percentTxt}>{(100 / coalitions.length).toFixed()}%</Text>
                                        <View style={styles.memberImg}>
                                            <Image source={{
                                                uri: item.CandidatePictureUrl,
                                            }} style={{ width: 148, height: 90 }} />
                                        </View>
                                        <Text style={styles.memberTxt}>{item.CoalitionName}</Text>
                                    </View>
                                </View>
                            )}
                        </View>
                    </ScrollView>
                </View>
            )
        } else {
            return (
                <View style={styles.container}>
                    <Spinner mode={'overlay'} />
                </View>

            )
        }
    }
}

const mapStateToProps = ({ netInfo }) => ({ netInfo })
export default connect(mapStateToProps, null)(Charts)
