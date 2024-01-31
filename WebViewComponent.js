import React from 'react';
import { WebView } from 'react-native-webview';

const WebViewComponent = ({url}) => {
    console.log(url)
    return (
        <>
            {url &&
                <WebView
                source={{ uri: url }}
                style={{ marginTop: 20 }}
                />
            }

        </>
        
    )
}

export default WebViewComponent