import React from 'react';
import { Images } from '@common';
import { Asset, Font } from '@expo';
import RootRouter from './src/Router';
import Reactotron from 'reactotron-react-native'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from '@redux';
import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/es/integration/react'

let store = null;
const middleware = [thunk];
store = compose(applyMiddleware(...middleware))(createStore)(reducers);
let persistor = persistStore(store)


function cacheImages(images) {
    return images.map(image => {
        if (typeof image === 'string') {
            return Image.prefetch(image);
        } else {
            return Asset.fromModule(image).downloadAsync();
        }
    });
}

function cacheFonts(fonts) {
    return fonts.map(font => Font.loadAsync(font));
}

export default class App extends React.Component {

    state = { appIsReady: false };

    componentWillMount() {
        console.ignoredYellowBox = ['Warning: View.propTypes', 'Warning: BackAndroid'];
        if (__DEV__) {
            Reactotron.connect()
            Reactotron.clear()
        }
    }

    async loadAssets() {
        const imageAssets = cacheImages([
            Images.IconCamera,
            Images.IconChart,
            Images.IconBlog,
            Images.IconMap,
            Images.LogoImage
        ]);

        await Promise.all([
            ...imageAssets
        ]);
    }

    render() {
        if (!this.state.appIsReady) {
            return <Expo.AppLoading
                startAsync={this.loadAssets}
                onFinish={() => this.setState({ appIsReady: true })}
            />;
        }

        return <Provider store={store}>
            <PersistGate persistor={persistor}>
                <RootRouter />
            </PersistGate>
        </Provider>
    }
}
