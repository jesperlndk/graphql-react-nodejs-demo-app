import React from 'react';
import injectSheet from 'react-jss';
import _ from 'lodash';
import classNames from 'classnames';
import { PersonsListItem } from '.';

const PersonsList = ({ classes, className, centered, persons }) => {
  const uniquePersonList = [];
  persons.forEach((person) => {
    const i = _.findIndex(uniquePersonList, { name: person.name });
    if (i >= 0) {
      uniquePersonList[i] = {
        ...uniquePersonList[i],
        type: [uniquePersonList[i].type, person.type].join(' & '),
      };
      return;
    }
    uniquePersonList.push(person);
  });

  return (
    <div
      className={classNames({
        [classes.list]: true,
        [classes.listCentered]: centered,
        [className]: !!className,
      })}
    >
      {uniquePersonList.map(person => (
        <PersonsListItem
          key={person.name}
          person={person}
        />
      ))}
    </div>
  );
};

const styles = () => ({
  list: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  listCentered: {
    justifyContent: 'center',
  },
});

export default injectSheet(styles)(PersonsList);
