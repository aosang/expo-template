import { useState } from 'react'  
import { View, StyleSheet } from 'react-native'  
import { WebView } from 'react-native-webview'  

import Loading from '@/components/loading'  

/**  
 * 带加载中和进度条的 WebView  
 * @param props  
 */  
export default function ProgressWebView(props) {
  return (  
    <WebView
      {...props}
      startInLoadingState={true}
      renderLoading={() => <Loading />}
    />  
  )  
}  

const styles = StyleSheet.create({

})
