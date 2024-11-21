type StringMap = Record<string, string>;

const strings: StringMap = {
  getTicket: 'Get Your Ticket Anywhere',
  buyTicket: 'You can buy a ticket anywhere as you can.',
  planRide: 'Plan Your Ride',
  selectSeat: 'You can select which cheap and fastest route',
  showScreen: 'Show Your Screen Instead of Ticket',
  digitalTicket: "Using a digital ticket, there is no more word 'lost ticket'",
  skip: 'Skip',
  next: 'Next',
  joltBus: 'Jolt Bus',
  futureTransportation: 'Future Transportation',
  getStart: 'Get Start',
  loginWithUrAcc: 'Login to Your Account',
  enjoyFeatures: 'Able to use the application and enjoy all the features.',
  emailAddress: 'Email Address',
  password: 'Password',
  forgotPassword: 'Forgot Password?',
  forgotPasswordTitle: 'Forgot Password',
  login: 'Log In',
  loginWithMobile: 'Log In with Mobile Number',
  loginWithEmail: 'Log In with Email',
  apple: 'Apple',
  google: 'Google',
  facebook: 'Facebook',
  phoneNo: 'Phone Number',
  signInWith: 'Or Sign In With',
  noAcc: 'Don’t have an account yet?',
  createAcc: ' Create Account',
  sendOTP: 'Send OTP',
  forgotPasswordDisc:
    'You will be redirected to the main page in a few moments',
  sendCode: 'Send Code',
  email: 'Email',
  resend: 'Resend',
  didNtGetCode: 'Didn’t get the Code?',
  verify: 'Verify',
  incorrectCode: 'Verification code incorrect',
  createNewPassword: 'Create New Password',
  enterDifPassword:
    'Your new password must be different from previously used passwords',
  confirmPassword: 'Confirm Password',
  resetPassword: 'Reset Password',
  joinUs: 'Join us today for exclusive benefits!',
  firstName: 'First Name',
  middleName: 'Middle Name',
  gender: 'Gender',
  dob: 'D.O.B',
  mobileNo: 'Mobile number',
  iAgree: 'I agree to the',
  register: 'Register',
  alreadyHaveAcc: 'Already have an account?',
  or: 'Or',
  enterHere: 'Enter Here',
  policy: 'Privacy Policy',
  and: 'and',
  terms: 'Terms of service',
  verified: 'Phone Number Verified',
  verifiedDisc: 'You will be redirected to the main page in a few moments',
};

const tabBar: StringMap = {
  home: 'Home',
  myTrip: 'My Trips',
  account: 'Account',
  wallet: 'Wallet',
};

const dashboard: StringMap = {
  name: 'Olivia Rhye',
  availableDates: 'Available dates',
  person: 'Person',
  persons: 'Persons',
  searchBus: 'Search Bus',
  recentTrips: 'Recent Trips',
  searchRoute: 'Search Your Route',
  city: 'City',
  ok: 'Ok',
  cancel: 'Cancel',
};

const PLACEHOLDERS: StringMap = {
  yourCurrentLocation: 'Your current location',
  searchForDestination: 'Search for a destination',
};

const ERROR_HANDLER_TEXT: StringMap = {
  firstNameReq: 'First name is required',
  middleNameRed: 'Middle name is required',
  genderReq: 'Gender is required',
  dobReq: 'Date of birth is required',
  pleaseEnterEmail: 'Please enter email',
  pleaseEnterValidEmail: 'Please enter a valid email',
  pleaseEnterMobileNo: 'Please enter phone number',
  pleaseEnterValidMobileNo: 'Please enter a valid phone number',
  enterPassword: 'Please enter password',
  passwordIncorrect: 'Password incorrect',
};

export {strings, dashboard, tabBar, PLACEHOLDERS, ERROR_HANDLER_TEXT};