import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import { Block, TextView, Input, Button } from '../../components';
import SearchBar from './home/SearchBar';
import TopCategories from './home/TopCategories';
import PopularItems from './home/PopularItems';
import NearByDeals from './home/NearByDeals';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Block block bgColor="#f8f6f6">
        <SearchBar />
        <ScrollView>
          <TopCategories />
          <Block height={2} color="#ebebeb" margin={8} />
          <PopularItems />
          <Block height={2} color="#ebebeb" margin={8} />
          <NearByDeals />
        </ScrollView>
      </Block>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
