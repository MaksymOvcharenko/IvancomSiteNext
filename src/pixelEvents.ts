// // src/utils/pixelEvents.ts
// import ReactPixel from 'react-facebook-pixel';

// const pixelEvents = {
//   addToCart: () => {
//     ReactPixel.track('AddToCart');
//   },
//   initiateCheckout: () => {
//     ReactPixel.track('InitiateCheckout');
//   },
//   lead: () => {
//     ReactPixel.track('Lead');
//   },
//   contact: () => {
//     ReactPixel.track('Contact');
//   }
// };

// export default pixelEvents;
// src/utils/pixelEvents.ts

let ReactPixel: any = null;

if (typeof window !== 'undefined') {
  ReactPixel = require('react-facebook-pixel').default;
}

const pixelEvents = {
  addToCart: () => {
    ReactPixel?.track('AddToCart');
  },
  initiateCheckout: () => {
    ReactPixel?.track('InitiateCheckout');
  },
  lead: () => {
    ReactPixel?.track('Lead');
  },
  contact: () => {
    ReactPixel?.track('Contact');
  },
};

export default pixelEvents;
