import React, { Component } from "react";
import { View, FlatList, Text } from "react-native";

const WatchlistItem = ({
  CoinInfo: { Name, FullName, ImageUrl },
  RAW: {
    USD: { PRICE }
  }
}) => <Text>{Name}</Text>;

export default WatchlistItem;
