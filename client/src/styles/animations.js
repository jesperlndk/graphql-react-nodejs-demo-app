export default {
  fadeIn: (delay = '0s', duration = '2s') => ({
    opacity: 0,
    animationDelay: delay,
    animation: `fadeIn-animation ${duration} normal forwards`,
  }),
  fadeInSlideUp: (delay = '0s', duration = '2s') => ({
    opacity: 0,
    animationDelay: delay,
    animation: `fadeInSlideUp-animation ${duration} cubic-bezier(0, 1, 0.5, 1) 1 normal forwards`,
  }),
  fadeInSlideUpSubtle: (delay = '0s', duration = '2s') => ({
    opacity: 0,
    animationDelay: delay,
    animation: `fadeInSlideUpSubtle-animation ${duration} cubic-bezier(0, 1, 0.5, 1) 1 normal forwards`,
  }),
};
