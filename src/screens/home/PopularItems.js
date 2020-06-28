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
import foodapp from '../../mooks/foodapp.json';

const W = Dimensions.get('window').width / 4;

const PopularItems = () => {
  const renderItem = ({ item }) => {
    return (
      <Button margin={8} color="#fff" shadow borderRadius="8" padding={8}>
        <Block direction="row">
          <Image style={styles.img} source={{ uri: item.image }} />
          <Block>
            <Block block>
              <TextView h6>{item.name}</TextView>
              <TextView color="#aaa">By {item.location}</TextView>
            </Block>
            <TextView>{item.price}</TextView>
          </Block>
        </Block>
      </Button>
    );
  };
  return (
    <Block>
      <HeaderTop title="Popular Items" moreTitle="View all" />
      <FlatList horizontal showsHorizontalScrollIndicator={false} data={foodapp} renderItem={renderItem} />
    </Block>
  );
};

export default PopularItems;

const styles = StyleSheet.create({
  img: {
    width: W,
    height: W,
    borderRadius: 8,
    marginRight: 8,
  },
});
