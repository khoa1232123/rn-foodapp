import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Block, TextView } from '../../../components';

import Feather from 'react-native-vector-icons/Feather';

const HeaderTop = ({ title, moreTitle, moreIcon }) => {
  return (
    <Block direction="row" justifyContent="space-between" middle padding={8}>
      <TextView bold h6>{title}</TextView>
      <Button>
        <Block direction="row" middle>
          <Feather color="#adabac" size={20} name={moreIcon} />
          <TextView color="#adabac">{' '}{moreTitle}</TextView>
        </Block>
      </Button>
    </Block>
  );
};

export default HeaderTop;

const styles = StyleSheet.create({});
