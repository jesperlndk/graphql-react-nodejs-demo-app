import React from 'react';
import injectSheet from 'react-jss';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Autocomplete from 'react-autocomplete';
import classNames from 'classnames';
import utils from '../../utils';

const QUERY_SUGGESTIONS = gql`
  query movies($query: String!, $limit: Int) {
    search(query: $query, limit: $limit) {
      title
      slug
    }
  }
`;

const TEMP_RANDOM_TITLES = [
  'Ant-Man',
  'Doctor Dolittle',
  'Forrest Gump',
  'Hulk',
  'Pretty Woman',
  'San Andreas',
  'The Princess Diaries',
  'The Sweetest Thing',
];

class HomePageSearchBar extends React.Component {
  state = {
    query: '',
  };

  handleChange = (event) => {
    this.setState({ query: event.target.value });
  }

  onItemSelect = (slug) => {
    this.props.history.push(`/movie/${slug}`);
  }

  renderMenu = (items) => {
    if (!items || items.length <= 0) {
      return <div />;
    }
    const { classes } = this.props;
    return <div className={classes.suggestionsList}>{items}</div>;
  }

  renderItem = (item, isHighlighted) => {
    const { classes } = this.props;
    return (
      <div
        key={item.slug}
        className={classNames({
          [classes.suggestionsItem]: true,
          [classes.suggestionsItemHighlighted]: isHighlighted,
        })}
      >
        {item.title}
      </div>
    );
  }

  render() {
    const { classes } = this.props;
    const randomMovieName = TEMP_RANDOM_TITLES[Math.floor(Math.random() * TEMP_RANDOM_TITLES.length)];
    return (
      <div className={classes.bar}>
        <div className={classes.icon}>
          <img src={utils.assets.getAsset('search.svg')} alt="search" />
        </div>
        <div className={classes.inputContainer}>
          <Query query={QUERY_SUGGESTIONS} variables={{ query: this.state.query, limit: 6 }}>
            {({ data }) => (
              <Autocomplete
                getItemValue={item => item.slug}
                items={(data && data.search) || []}
                renderItem={this.renderItem}
                renderMenu={this.renderMenu}
                value={this.state.query}
                onChange={this.handleChange}
                onSelect={this.onItemSelect}
                inputProps={{
                  placeholder: `Try "${randomMovieName}"`,
                }}
                wrapperStyle={{
                  display: 'block',
                  autoComplete: 'false',
                  autoCorrect: 'false',
                  spellCheck: 'false',
                }}
              />
            )}
          </Query>
        </div>
      </div>
    );
  }
}

const styles = theme => ({
  bar: {
    ...theme.animations.fadeInSlideUp('.5s'),
    position: 'relative',
    background: '#fff',
    borderRadius: 4,
    boxShadow: '0 0 20px 0px rgba(34, 34, 34, 0.5)',
    padding: '10px 25px',
    ...theme.responsive.mobile({
      padding: '8px 20px',
    }),
  },
  icon: {
    float: 'left',
    paddingTop: 12,
    width: 27,
    ...theme.responsive.mobile({
      paddingTop: 7,
      width: 22,
    }),
    '& img': {
      display: 'block',
      width: '100%',
    },
  },
  inputContainer: {
    marginLeft: 50,
    ...theme.responsive.mobile({
      marginLeft: 37,
    }),

    '& input': {
      display: 'block',
      width: '100%',
      height: 50,
      lineHeight: '50px',
      fontFamily: theme.fonts.text,
      fontSize: 20,
      fontWeight: theme.weights.medium,
      color: '#222',
      border: 'none',
      outline: 'none',
      ...theme.responsive.mobile({
        fontSize: 17,
        height: 36,
        lineHeight: '36px',
      }),
    },
  },
  suggestionsList: {
    position: 'absolute',
    top: 67,
    left: 0,
    right: 0,
    borderRadius: '0 0 4px 4px',
    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
    background: '#fff',
    overflow: 'auto',
    maxHeight: '500px',
    ...theme.responsive.mobile({
      top: 50,
      maxHeight: 160,
    }),
  },
  suggestionsItem: {
    fontSize: 18,
    padding: '10px 15px 10px 75px',
    ...theme.responsive.mobile({
      fontSize: 16,
      padding: '8px 10px 8px 57px',
    }),
  },
  suggestionsItemHighlighted: {
    background: '#dadada',
  },
});

export default injectSheet(styles)(HomePageSearchBar);
