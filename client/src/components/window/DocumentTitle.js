import config from '../../config';

const DocumentTitle = ({ title, appName, separator }) => {
  document.title = `${title} ${separator} ${appName}`;
  return null;
};

DocumentTitle.defaultProps = {
  appName: config.general.appName,
  separator: '–',
};

export default DocumentTitle;
