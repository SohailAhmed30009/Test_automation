const axios = require("axios");
const request = require("request");

class getStarted {
  get allowLocation() {
    return $(
      '//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_allow_foreground_only_button"]'
    );
  }
  get letsGoBtn() {
    return $('//android.widget.Button[@index="0"]');
  }
  get continueBtn() {
    return $('//android.widget.Button[@index="0"]');
  }
  get continueGoogleBtn() {
    return $('//android.widget.TextView[@text="Continue with Google"]');
  }
  get selectAccount() {
    return $('//android.widget.LinearLayout[@index="0"]');
  }
  get facebookLogin() {
    return $("~sign in with facebook");
  }
  get email() {
    return $('//android.widget.EditText[@resource-id="identifierId"]');
  }
  get password() {
    return $("android.widget.EditText");
  }
  get nextBtn() {
    return $('//android.widget.Button[@text="Next"]');
  }
  get passwordNextBtn() {
    return $('//android.view.View[@resource-id="passwordNext"]');
  }
  get iAgreeBtn() {
    return $('//android.view.View[@resource-id="signinconsentNext"]');
  }
  get moreBtn() {
    return $('//android.widget.Button[@text="MORE"]');
  }
  get acceptBtn() {
    return $('//android.widget.Button[@text="ACCEPT"]');
  }
  get fbEmail() {
    return $('//android.widget.EditText[@resource-id="m_login_email"]');
  }
  get fbPassword() {
    return $('//android.widget.EditText[@resource-id="m_login_password"]');
  }
  get loginBtn() {
    return $('//android.view.View[@resource-id="login_password_step_element"]');
  }
  get countinueBtn() {
    return $('//android.widget.Button[@resource-id="u_0_1_ZO"]');
  }
  get addButton() {
    return $('//android.view.ViewGroup[@index="0"]');
  }

  async getAccessToken() {
    const url = "https://web.api.gilgitapp.com/v1/auth/god-mode";
    const headers = {
      "Content-Type": "application/json",
    };
    const data = {
      email: "sohail@gilgitapp.com",
    };
    const response = await axios.post(url, data, { headers });
    return response?.data?.result?.token?.access_token;
  }

  async login() {
    const accessToken = await this.getAccessToken();
    console.log(accessToken, "Access Token");
    const loginEndPointUrl = "https://web.api.gilgitapp.com/v1/auth/login";
    const requestOptions = {
      url: loginEndPointUrl,
      headers: {
        Authorization: "Bearer " + accessToken,
      },
      json: true,
      body: JSON.stringify({
        token: {
          loginType: "GOOGLE",
          userInfo: {
            user: {
              picture:
                "https://lh3.googleusercontent.com/a/AEdFTp7d51ZhXoIf9VPDkbzMHRXmGmCTUXBleTtIDOqO=s96-c",
              name: "Sohail Ahmed",
              email: "sohail@gilgitapp.com",
              id: 0,
            },
          },
        },
        deviceInfo: null,
      }),
    };

    request.post(requestOptions, (error, response, body) => {
      if (error) {
        console.error("Error occured during login: " + error);
      } else {
        console.log("Response status code: " + response.statusCode);
        console.log("Response body: " + body);
      }
    });
  }
}
export default new getStarted();

