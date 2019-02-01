# Presenter
## prop-types
- prop-types check
- HomePresenter.js
```js
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const HomePresenter = ({ nowPlaying, popular, upcomfing, loading, error }) =>
  null;

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  popular: PropTypes.array,
  upcomfing: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default HomePresenter;
```

## first component
- triple check
  - nowPlaying이 존재하는지? 
  - Section이 렌더링이 되는지? 

```js
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Section from "components/Section";

const Container = styled.div`
  padding: 0px 10px;
`;

const HomePresenter = ({ nowPlaying, popular, upcoming, loading, error }) =>
  loading ? null : (
    <Container> 
      {nowPlaying && nowPlaying.length > 0 && (     
        <Section title="Now Playing">
          {nowPlaying.map(movie => movie.title)}    // children
        </Section>
      )}
    </Container>
  );

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  popular: PropTypes.array,
  upcoming: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default HomePresenter;
```