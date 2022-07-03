import FirstSvg from '../../images/svg-1.svg';
import Profile from '../../images/profile.jpg';
import SecondSvg from '../../images/svg-2.svg';
import ThirdSvg from '../../images/svg-3.svg';

export const homeObjOne = {
    lightBg: false,
    primary: true, 
    imgStart: '', 
    lightTopLine: true, 
    lightTextDesc: true,
    buttonLabel: 'Get Started',
    description: 
        'We help business owners increase their revenue. Our team of unique specialist can help you achieve your business goals.',
    headline: 'Lead Generation Specialist for Online Businesses',
    lightText: true,
    topLine: 'Marketing Agency',
    img: FirstSvg,
    alt: 'Image',
    start: ''
};

export const homeObjTwo = {
    primary: false,
    lightBg: true,
    lightTopLine: false,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Sarah Jeni',
    headline:
      'Ultra helped me increase my revenue by over 3X in less than 3 months!',
    description:
      "Their team is wonderful! I can't believe I didn't start working with them earlier.",
    buttonLabel: 'View Case Study',
    imgStart: 'start',
    img: Profile,
    alt: 'Vault',
    start: 'true'
};

export const homeObjThree = {
    primary: true,
    lightBg: false,
    lightTopLine: true,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Instant Setup',
    headline: 'Extremely quick onboarding process',
    description:
      "Once you've joined, our team of specialist will reach out to you and get you set up in minutes.",
    buttonLabel: 'Learn More',
    imgStart: '',
    img: SecondSvg,
    alt: 'Vault',
    start: ''
};

export const homeObjFour = {
    primary: true,
    lightBg: false,
    lightTopLine: true,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Secure Database',
    headline: 'All your data is stored on our secure server',
    description:
      'You will never have to worry about your information getting leaked. Our team of security experts will ensure your records are kept safe.',
    buttonLabel: 'Sign Up Now',
    imgStart: 'start',
    img: ThirdSvg,
    alt: 'Vault',
    start: 'true'
};
