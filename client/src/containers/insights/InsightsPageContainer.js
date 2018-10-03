import React from 'react';
import injectSheet from 'react-jss';
import { DocumentTitle } from '../../components/window';
import { Section } from '../../components/layout';
import { Heading } from '../../components/shared';
import utils from '../../utils';
import {
  InsightsPageChart,
  InsightsPageMap,
} from '.';

const InsightsPageContainer = ({ classes }) => (
  <React.Fragment>
    <DocumentTitle title="Insights" />

    <Section className={classes.header}>
      <Heading
        type="h1"
        text="Insights"
      />
    </Section>

    <InsightsPageChart
      text="Movies released"
      sub="Last 20 years"
      statisticsType="totalMoviesByYear"
      chartType="bar"
      limit={-20}
    />

    <InsightsPageChart
      sectionOdd
      text="Production companies"
      sub="Most producing companies"
      statisticsType="totalMoviesByProductionCompany"
      chartType="horizontalBar"
      limit={10}
    />

    <InsightsPageChart
      text="Genre"
      sub="Movies produced by genre"
      statisticsType="totalMoviesByGenres"
      chartType="doughnut"
      limit={30}
    />

    <InsightsPageMap />

  </React.Fragment>
);

const styles = theme => ({
  header: {
    ...theme.animations.fadeIn('0s', '1s'),
    ...theme.mixins.backgroundImageCover(utils.assets.getAsset('bridge.jpg'), 'center 34%'),
    backgroundColor: '#000',
    paddingTop: '15%',
    paddingBottom: '4%',
    ...theme.responsive.mobile({
      paddingTop: 85,
      paddingBottom: 30,
    }),

    '& h1': {
      color: '#fff',
    },
  },
});

export default injectSheet(styles)(InsightsPageContainer);
