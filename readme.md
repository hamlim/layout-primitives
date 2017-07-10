# Layout Primitives built using Emotion and React

## Implementation:

1. `yarn add emotion`
2. Add emotion to `.babelrc`
3. Add the `ThemeProvider` at the top level of your app, with the theme function from `utils`
4. Make awesome things

```Javascript

import { ThemeProvider } from 'emotion/react';
import { Container, makeTheme } from 'layout-primitives';

const App = () => (
  <ThemeProvider theme={...makeTheme()}>
    <Container>
      <h1>Hello World</h1>
    </Container>
  </ThemeProvider>
);
```