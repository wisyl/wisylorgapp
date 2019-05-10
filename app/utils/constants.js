import { css } from 'styled-components';

/**
 * SCREEN SIZES FOR MEDIA BREAKPOINTS
 */
const screenSizes = {
  desktop: 1199,
  tablet: 991,
  phone: 767,
  phonePortrait: 575,
  phone5s: 350,
};

// Iterate through the sizes and create a media template
export const Media = Object.keys(screenSizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${screenSizes[label] / 16}em) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});
