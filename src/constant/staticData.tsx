import {strings} from './strings';

// packages
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {SvgProps} from 'react-native-svg';

// propTypes
import {FormData} from '../propTypes/formProps';

// SVG
import ONBOARDING1 from '../assets/svg/onboarding1.svg';
import ONBOARDING2 from '../assets/svg/onboarding2.svg';
import ONBOARDING3 from '../assets/svg/onboarding3.svg';

import CALENDAR from '../assets/svg/calender.svg';
import CALL from '../assets/svg/call.svg';
import DROPDOWN from '../assets/svg/downArrow.svg';
import EMAIL from '../assets/svg/mail.svg';
import PERSON from '../assets/svg/person.svg';

export const onboardingData = [
  {
    title: strings.getTicket,
    disc: strings.buyTicket,
    image: (
      <ONBOARDING1
        height={widthPercentageToDP('65%')}
        width={widthPercentageToDP('65%')}
      />
    ),
  },
  {
    title: strings.planRide,
    disc: strings.selectSeat,
    image: (
      <ONBOARDING2
        height={widthPercentageToDP('65%')}
        width={widthPercentageToDP('65%')}
      />
    ),
  },
  {
    title: strings.showScreen,
    disc: strings.digitalTicket,
    image: (
      <ONBOARDING3
        height={widthPercentageToDP('65%')}
        width={widthPercentageToDP('65%')}
      />
    ),
  },
];

export const genderData = [
  {
    label: 'Male',
    value: 'Male',
  },
  {
    label: 'Female',
    value: 'Female',
  },
  {
    label: 'Others',
    value: 'Others',
  },
];

export const registerScreenFields: {
  placeHolder: string;
  leftIcon?: React.FC<SvgProps>;
  key: keyof FormData;
  rightIcon?: React.FC<SvgProps>;
}[] = [
  {
    placeHolder: strings.firstName,
    leftIcon: PERSON,
    key: 'firstName',
  },
  {
    placeHolder: strings.middleName,
    leftIcon: PERSON,
    key: 'middleName',
  },
  {
    placeHolder: strings.gender,
    rightIcon: DROPDOWN,
    key: 'gender',
  },
  {
    placeHolder: strings.dob,
    rightIcon: CALENDAR,
    key: 'dob',
  },
  {
    placeHolder: strings.email,
    leftIcon: EMAIL,
    key: 'email',
  },
  {
    placeHolder: strings.mobileNo,
    leftIcon: CALL,
    key: 'phoneNo',
  },
];

export const filterData = [
  {id: 1, label: 'AC', value: 'AC'},
  {id: 2, label: 'Washroom', value: 'Washroom'},
  {id: 3, label: 'Sleeper', value: 'Sleeper'},
  {id: 4, label: 'Washroom', value: 'Washroom'},
  {id: 5, label: 'Semi-Sleeper', value: 'Semi-Sleeper'},
  {id: 6, label: 'Seater', value: 'Seater'},
  {id: 7, label: 'Complimentary', value: 'Complimentary'},
  {id: 8, label: 'Low price', value: 'Low price'},
];
