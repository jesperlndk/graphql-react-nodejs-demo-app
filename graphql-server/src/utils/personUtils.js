const _ = require('lodash');
const config = require('../config');

const getTypes = type =>
  (type && config.personTypeMap[type]) || [];

const getAllTypes = () =>
  _.flatten(Object.keys(config.personTypeMap).map(key => config.personTypeMap[key]));

const getKeyOfPersonType = type =>
  Object.keys(config.personTypeMap).find(key => config.personTypeMap[key].includes(type));

const isIgnored = name =>
  config.personNamesIgnoreList.includes(name);

module.exports = {
  getTypes,
  getAllTypes,
  getKeyOfPersonType,
  isIgnored,
};
