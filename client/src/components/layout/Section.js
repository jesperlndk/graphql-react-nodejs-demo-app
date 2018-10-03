import React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import { Wrapper } from '.';

const Section = ({ classes, className, style, odd, children }) => (
  <section
    className={classNames({
      [classes.section]: true,
      [classes.sectionOdd]: odd,
      [className]: !!className,
    })}
    style={style}
  >
    <Wrapper>
      {children}
    </Wrapper>
  </section>
);

const styles = theme => ({
  section: {
    background: '#fff',
    padding: '75px 0',

    ...theme.responsive.tablet({
      padding: '55px 0',
    }),
    ...theme.responsive.mobile({
      padding: '40px 0',
    }),
  },
  sectionOdd: {
    background: theme.colors.backgroundAlternative,
  },
});

export default injectSheet(styles)(Section);
