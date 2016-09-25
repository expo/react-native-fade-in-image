## @exponent/react-native-fade-in-image

Wrap Image components in &lt;FadeIn&gt; to have them fade in pleasantly when they finish loading.

### Installation

```
npm i @exponent/react-native-fade-in-image --save
```

### Usage

```javascript
export class FancyImage extends React.Component {
  render() {
    const uri = 'https://d3lwq5rlu14cro.cloudfront.net/v1/AQ5jDS5SYyUkapWWEviV.png';
    return (
      <FadeIn>
        <Image source={{uri}} style={{width: 162, height: 28}} />
      </FadeIn>
    );
  }
}
```
