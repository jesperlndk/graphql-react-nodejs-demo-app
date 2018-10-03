import React from 'react';
import injectSheet from 'react-jss';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Section } from '../../components/layout';
import { Heading, LoadingIndicator, ErrorIndicator, Chart } from '../../components/shared';

const QUERY_STATISTICS = gql`
  query statistics($type: StatisticsType!) {
    statistics(type: $type) {
      labels
      values
    }
  }
`;

const InsightsPageChart = ({ classes, sectionOdd, text, sub, statisticsType, chartType, limit }) => (
  <Section odd={sectionOdd}>
    <Heading
      type="h2"
      text={text}
      sub={sub}
    />
    <Query query={QUERY_STATISTICS} variables={{ type: statisticsType }}>
      {({ loading, error, data }) => {
        if (loading) return <LoadingIndicator />;
        if (error) return <ErrorIndicator />;
        const { statistics } = data;
        return (
          <Chart
            className={classes.chartElement}
            type={chartType}
            legendTitle="Movies"
            data={statistics}
            limit={limit}
          />
        );
      }}
    </Query>
  </Section>
);

const styles = () => ({
  chartElement: {
    marginTop: 40,
  },
});

export default injectSheet(styles)(InsightsPageChart);
