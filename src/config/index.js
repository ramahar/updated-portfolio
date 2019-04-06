module.exports = {
  siteTitle: 'Rayyan Mahar | Software Developer',
  siteDescription:
    'Software engineer based in San Francisco, CA.',
  siteKeywords:
    'Rayyan Mahar, software engineer, front-end engineer, web developer, javascript, developer',
  siteUrl: 'https://ramahar.github.io',
  siteLanguage: 'en_US',

  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',

  name: 'Rayyan Mahar',
  location: 'San Francisco, CA',
  email: 'rayyanamahar@gmail.com',
  socialMedia: [
    {
      name: 'Github',
      url: 'https://github.com/ramahar',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/rayyan-mahar',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/rayyan-mahar',
    },
  ],

  nav: [
    {
      name: 'About',
      url: '#about',
    },
    // {
    //   name: 'Experience',
    //   url: '#jobs',
    // },
    {
      name: 'Projects',
      url: '#projects',
    },
    {
      name: 'Contact',
      url: '#contact',
    },
  ],

  googleAnalyticsID: 'UA-45666519-2',

  headerHeight: 100,

  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => {
    return {
      origin: 'bottom',
      distance: '20px',
      duration: 500,
      delay,
      rotate: { x: 0, y: 0, z: 0 },
      opacity: 0,
      scale: 1,
      easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      mobile: true,
      reset: false,
      useDelay: 'always',
      viewFactor: 0.25,
      viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
    };
  },
};
