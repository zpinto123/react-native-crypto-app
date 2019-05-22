import React, { Component } from "react";
import { View, FlatList, Text } from "react-native";

import { WatchlistItem } from "./parts";

class Watchlist extends Component {
  componentDidMount() {
    const { data, getCoinPrices } = this.props;
    if (!data) getCoinPrices();
  }

  _keyExtractor = ({ CoinInfo: { Id } }) => Id;

  render() {
    const { data, error } = this.props;
    // const {
    //   CoinInfo: { Name, FullName, ImageUrl },
    //   RAW: {
    //     USD: { PRICE }
    //   }
    // } = this.props;
    return (
      <View>
        <FlatList
          keyExtractor={this._keyExtractor}
          data={data}
          renderItem={({ item }) => <WatchlistItem {...item} />}
        />
      </View>
    );
  }
}

export default Watchlist;
