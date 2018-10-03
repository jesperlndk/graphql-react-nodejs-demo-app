import React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';

const headingTags = ['h1', 'h2', 'h6'];
const getHeadingTag = type => headingTags[headingTags.indexOf(type)] || headingTags[0];

const Heading = ({ text, sub, type, classes, className }) => {
  const Tag = getHeadingTag(type);
  return (
    <Tag className={classNames(classes.title, classes[Tag], className)}>
      {text}
      {sub ? (<span className={classNames(classes.sub)}>{sub}</span>) : null}
    </Tag>
  );
};

const styles = theme => ({
  title: {
    margin: 0,
    padding: 0,
    fontFamily: theme.fonts.heading,
  },
  sub: {
    display: 'block',
  },

  h1: {
    fontSize: 40,
    fontWeight: theme.weights.medium,
    lineHeight: 1.4,
    color: theme.colors.primary,

    ...theme.responsive.desktop({
      fontSize: 36,
    }),
    ...theme.responsive.tablet({
      fontSize: 32,
    }),
    ...theme.responsive.mobile({
      fontSize: 26,
    }),

    '& span': {
      fontSize: 36,
      fontWeight: theme.weights.light,

      ...theme.responsive.desktop({
        fontSize: 33,
      }),
      ...theme.responsive.tablet({
        fontSize: 30,
      }),
      ...theme.responsive.mobile({
        fontSize: 24,
      }),
    },
  },

  h2: {
    fontWeight: theme.weights.light,
    fontSize: 24,
    color: theme.colors.secondary,
    lineHeight: 1.35,

    ...theme.responsive.tablet({
      fontSize: 22,
    }),
    ...theme.responsive.mobile({
      fontSize: 19,
    }),

    '& span': {
      fontWeight: theme.weights.medium,
      fontSize: 36,
      color: theme.colors.primary,

      ...theme.responsive.tablet({
        fontSize: 30,
      }),
      ...theme.responsive.mobile({
        fontSize: 24,
      }),
    },
  },

  h6: {
    fontSize: 14,
    fontWeight: theme.weights.bold,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
});

export default injectSheet(styles)(Heading);
