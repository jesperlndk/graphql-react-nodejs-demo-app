const responsiveStyle = (maxWidth, style = {}) => ({
  [`@media (max-width: ${maxWidth}px)`]: {
    ...style,
  },
});

export default {
  desktop: (style = {}) => responsiveStyle(1100, style),
  tablet: (style = {}) => responsiveStyle(900, style),
  mobile: (style = {}) => responsiveStyle(650, style),
};
