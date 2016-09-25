import React from 'react';
import { StyleSheet, View } from 'react-native';

let onlyChild = React.Children.only;

export default class FadeIn extends React.Component {

  render() {
    let image = onlyChild(this.props.children);

    return (
      <View {...this.props}>
        <View style={styles.placeholderContainer}>
          <View style={[image.props.style, styles.placeholder, this.props.placeholderStyle]} />
        </View>

        {image}
      </View>
    );
  }
}

let styles = StyleSheet.create({
  placeholderContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  placeholder: {
    backgroundColor: '#eee',
  },
});
