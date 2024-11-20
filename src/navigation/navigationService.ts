import {
  CommonActions,
  createNavigationContainerRef,
} from '@react-navigation/native';

const navigationRef = createNavigationContainerRef<any>();

function navigate(name: string, params?: object) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

function navigateAndReset(name: string, params?: object) {
  if (navigationRef.isReady()) {
    navigationRef.resetRoot({
      index: 0,
      routes: [{ name, params }],
    });
  }
}

function goBack() {
  navigationRef.dispatch(CommonActions.goBack());
}

export default {
  navigationRef,
  navigate,
  navigateAndReset,
  goBack,
};
