import React, {Component} from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { BasicCard } from './../components'
class HomeScreen extends Component {

    render() {
      return (
        <ScrollView>
          <BasicCard
            cardTitle = "Card_1"
            cardSubtitle = "Subtitle_1"
            cardIcon = "gamepad"
            cardImageURL = "https://picsum.photos/700"
          />
          <BasicCard
            cardTitle = "Card_2"
            cardSubtitle = "Subtitle_2"
            cardIcon = "headset"
            cardImageURL = "https://picsum.photos/701"
          />
        </ScrollView>
      )
    }
}

export { HomeScreen };