import { CommonActions, StackActions } from '@react-navigation/native';

export default class NavigationService {
  static _navigator = null;

  static setNavigator(navigatorRef) {
    if (navigatorRef) {
      NavigationService._navigator = navigatorRef;
    }
  }

  static navigate({routeName, params}) {
    if (NavigationService._navigator) {
      NavigationService._navigator.dispatch(
        CommonActions.navigate({
          name: routeName,
          params: params,
        })
      );
    }
  }

  static push({routeName, params}) {
    if (NavigationService._navigator) {
      NavigationService._navigator.dispatch(
        StackActions.push(
          routeName,
           params,
        )
      );
    }
  }

  static pushReplacement({routeName, params}) {
    if (NavigationService._navigator) {
      NavigationService._navigator.dispatch(
        StackActions.replace(
          routeName,
           params,
        )
      );
    }
  }

  static pop() {
    if (NavigationService._navigator) {
      NavigationService._navigator.dispatch(StackActions.pop());
    }
  }
}