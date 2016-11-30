import Exponent from 'exponent';

import React from 'react';
import { ActivityIndicator, Image, View } from 'react-native';

import FadeIn from '@exponent/react-native-fade-in-image';

const Placeholder = () => (
  <View style={landing}>
    <ActivityIndicator />
  </View>
);

const uri1 = 'http://media.idownloadblog.com/wp-content/uploads/2016/06/macOS-Sierra-Wallpaper-Macbook-Wallpaper.jpg';
const uri2 = 'http://media.idownloadblog.com/wp-content/uploads/2015/06/Wallpaper-OS-X-El-Capitan-Mac.jpg';

const FancyImage = ({ uri, style }) => (
  <FadeIn
    style={style}
    renderPlaceholderContent={ <Placeholder /> }
    placeholderStyle={{ backgroundColor: '#fff' }}>
    <Image source={{ uri }} style={full} />
  </FadeIn>
);

const FadeInExample = () => (
  <View style={full}>
    <FancyImage uri={uri1} style={full} />
    <FancyImage uri={uri2} style={full} />
  </View>
);

const full = { flex: 1 };
const landing = { flex: 1, alignItems: 'center', justifyContent: 'center' };

Exponent.registerRootComponent(FadeInExample);
