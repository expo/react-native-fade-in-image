## @exponent/react-native-fade-in-image

Wrap Image components in `<FadeIn>` to have them fade in pleasantly when they finish loading.

### Installation

```
npm i @exponent/react-native-fade-in-image --save
```

### Usage

```javascript
const uri = 'https://d3lwq5rlu14cro.cloudfront.net/v1/AQ5jDS5SYyUkapWWEviV.png';

const FancyImage = () => (
  <FadeIn>
    <Image source={{ uri }} style={{ width: 162, height: 28 }} />
  </FadeIn>
);
```

#### Props
- `style` adds style to the image wrapper.
- `renderPlaceholder` renders an element while loading the image, e.g. a spinner.
- `placeholderStyle` adds style to the placeholder wrapper, default background color is `#eee`.

### Full Example

```javascript
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
    renderPlaceholder={<Placeholder />}
    placeholderStyle={{ backgroundColor: '#fff' }}
  >
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
```
