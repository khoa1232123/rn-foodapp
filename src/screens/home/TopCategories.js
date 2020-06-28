import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import { Block, Button, TextView } from '../../../components';
import HeaderTop from './HeaderTop';
import categories from '../../mooks/categories.json';

const W = Dimensions.get('window').width / 4;

const TopCategories = () => {
  const renderItem = ({ item }) => {
    return (
      <Button padding={5}>
        <Image style={styles.img} source={{ uri: item.image }} />
        <TextView padding={8} center>
          {item.name}
        </TextView>
      </Button>
    );
  };
  return (
    <Block>
      <HeaderTop title="Top Categories" moreTitle="Filter" moreIcon="filter" />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        renderItem={renderItem}
        style={{paddingHorizontal: 4}}
      />
    </Block>
  );
};

export default TopCategories;

const styles = StyleSheet.create({
  img: {
    width: W,
    height: (W * 9) / 16,
    borderRadius: 8,
  },
});
