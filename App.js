/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import HttpService from './common/httpservice';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {

  // HttpService.callRequest('https://www.googletagmanager.com/gtm.js?id=GTM-M973827','GET',{},{})
  // .them((res) => {
  //   console.log(res);
    
  // })

    fetch('https://www.googletagmanager.com/gtm.js?id=GTM-M973827')
      .then((response) => {
        console.log(response);
        return response.json()
      });

      let url = 'https://www.google-analytics.com/collect?v=1&_v=j81&aip=1&a=2109375502&t=pageview&_s=1&dl=http%3A%2F%2F127.0.0.1%2Findex.html&dp=pruebLIZ&ul=en-us&de=UTF-8&sd=24-bit&sr=1280x720&vp=416x610&je=0&_u=SCCAgEAB~&jid=&gjid=&cid=2005546363.1577480242&tid=UA-146500273-10&_gid=1840858150.1582861076&gtm=2wg2j0M973827&cd1=http%3A%2F%2F127.0.0.1%3A60957%2Findex.html&cd2=&cd3=HomeBankingPF&cd4=Tarjetas&cd5=Credito&cd6=Solicitar&cd7=&cd8=RELOAD&cd9=&cd10=&cd12=Web&cd13=dev&cd14=&cd15=GTM-M973827&cd16=1582863684244&cd18=1582941304610&cd19=&cd20=&cd22=&cd24=&cd30=&cd53=&cd54=&cd57=&cd63=&cd68=SolicitudTC&cd75=&cm25=1&cd28=2005546363.1577480242&z=1992111908'

      fetch(url)
      .then((response) => {
        console.log(response);
        return response.json()
      });

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                wilmer
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>Mimel</Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
