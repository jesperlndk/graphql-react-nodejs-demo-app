import React from 'react';
import injectSheet from 'react-jss';
import config from '../../config';
import utils from '../../utils';
import { DocumentTitle } from '../../components/window';
import { Heading } from '../../components/shared';
import { Hero } from '../../components/layout';
import {
  HomePageSearchBar,
  HomePageMoviesList,
  HomePageGenresList,
} from '.';

const HomePageContainer = ({ classes, history }) => (
  <React.Fragment>
    <DocumentTitle title="Home" />

    <Hero backgroundImage={utils.assets.getAsset('city.jpg')}>
      <Heading
        type="h1"
        text={`Movies of ${config.general.city}`}
        sub="Discover movies from your neighbourhood"
        className={classes.heroTitles}
      />
      <HomePageSearchBar history={history} />
    </Hero>

    <HomePageMoviesList
      text="Most popular"
      sub="All time favorite movies"
      variables={{ sort: 'popularity', limit: 20, shuffle: true }}
      show={8}
    />

    <HomePageMoviesList
      sectionOdd
      text="New In"
      sub="Latest releases"
      variables={{ sort: 'release_date', limit: 8 }}
      show={8}
    />

    <HomePageGenresList />

  </React.Fragment>
);

const styles = theme => ({
  heroTitles: {
    ...theme.animations.fadeInSlideUp('.1s'),
    '& span': {
      ...theme.animations.fadeInSlideUp('.3s'),
      marginBottom: 40,

      ...theme.responsive.mobile({
        marginBottom: 25,
      }),
    },
  },
});

export default injectSheet(styles)(HomePageContainer);
