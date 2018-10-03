// css
import './css/fonts.css';
import './css/normalize.css';
import './css/animations.css';

// js
import animations from './animations';
import mixins from './mixins';
import responsive from './responsive';

// themes
import standard from './themes/standard';

const themes = { standard };

const styles = theme => ({
  ...themes[theme],
  animations,
  mixins,
  responsive,
});

export default styles;
