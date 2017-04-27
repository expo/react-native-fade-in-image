## react-native-fade-in-image-fixed

Wrap Image components in `<FadeIn>` to have them fade in pleasantly when they finish loading.

This is a (hopefully) temporary version of Expo's react-native-fade-in-image by @brentvatne with some fixes and mods

### Installation

```
yarn add react-native-fade-in-image-fixed
```

### Usage

```javascript
import React from 'react';
import { Image } from 'react-native';
import FadeIn from 'react-native-fade-in-image-fixed';

const uri = 'https://d3lwq5rlu14cro.cloudfront.net/v1/AQ5jDS5SYyUkapWWEviV.png';

class FancyImage extends React.Component {
  render() {
    return (
      <FadeIn>
        <Image source={{ uri }} style={{ width: 162, height: 28 }} />
      </FadeIn>
    );
  }
}
```

#### props

- `style` adds style to the image wrapper.
- `renderPlaceholderContent` renders an element while loading the image, e.g. a spinner.
- `placeholderStyle` adds style to the placeholder wrapper, default background color is `#eee`.

