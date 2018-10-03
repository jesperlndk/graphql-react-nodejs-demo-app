import React from 'react';
import { Bar, HorizontalBar, Doughnut } from 'react-chartjs-2';
import utils from '../../utils';

const TYPES = {
  BAR: 'bar',
  HORIZONTAL_BAR: 'horizontalBar',
  DOUGHNUT: 'doughnut',
};

const OPTIONS_BAR = {
  legend: {
    display: false,
  },
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true,
      },
    }],
    xAxes: [{
      ticks: {
        beginAtZero: true,
      },
    }],
  },
};

const OPTIONS_DOUGHNUT = {
  legend: {
    position: 'right',
  },
};

const getItems = (items, limit) => (limit > 0 ? items.slice(0, limit) : items.slice(limit));

const getData = (legendTitle, limit, { labels, values }) => {
  const colors = getItems(labels, limit).map(label => utils.misc.getRandomColor(label, 'rgba'));
  return {
    labels: getItems(labels, limit),
    datasets: [{
      label: legendTitle,
      data: getItems(values, limit),
      backgroundColor: colors,
      borderColor: colors,
      borderWidth: 1,
    }],
  };
};

const getOptions = (type) => {
  switch (type) {
    case TYPES.BAR:
    case TYPES.HORIZONTAL_BAR:
      return OPTIONS_BAR;
    case TYPES.DOUGHNUT:
      return OPTIONS_DOUGHNUT;
    default:
      return {};
  }
};

const Chart = ({ className, type, legendTitle, data, limit }) => {
  const componentProps = {
    data: getData(legendTitle, limit, data),
    options: getOptions(type),
  };

  const ChartComponent = () => {
    switch (type) {
      case TYPES.DOUGHNUT:
        return <Doughnut {...componentProps} />;
      case TYPES.BAR:
        return <Bar {...componentProps} />;
      case TYPES.HORIZONTAL_BAR:
        return <HorizontalBar {...componentProps} />;
      default:
        return null;
    }
  };

  return (
    <div className={className}>
      <ChartComponent />
    </div>
  );
};

export default Chart;
