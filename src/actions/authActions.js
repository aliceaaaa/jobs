import { AcyncStorage } from "react-native";
import FBSDK from "react-native-fbsdk";

import { FACEBOOK_LOGIN_SUCCESS, FACEBOOK_LOGIN_FAIL } from "./types";

const { LoginManager } = FBSDK;

export const facebookLogin = () => async dispatch => {
  let token = await AcyncStorage.getItem("fb_token");
  if (token) {
    dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
  } else {
    doFacebookLogin(dispatch);
  }
};

doFacebookLogin = async dispatch => {
  let { type, token } = await LoginManager.logInWithReadPermissionsAsync(
    "688779421503816",
    {
      permissions: ["public_profile"]
    }
  );
  if (type === "cancel") {
    return dispatch({ type: FACEBOOK_LOGIN_FAIL });
  }
  await AsyncStorage.setItem("fb_token", token);
  dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
};
