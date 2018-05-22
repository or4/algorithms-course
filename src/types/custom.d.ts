
declare interface SubmitEvent {
  preventDefault: Function;
}

declare interface AppState {
  routing: {
    location: {
      pathname: string;
    };
  };
  auth: {
    login: {
      loginVerifyAttempt: number;
      error: {
        status: number;
      };
    };
    register: {
      name: string;
      surname: string;
      confirmPinError: boolean;
      words: Array<string>;
      mixedWords: Array<string>;
      registerEmailVerifyAttempt: 1;
      registerPinConfirmAttempt: 1;
      error: {
        status: number;
      };
    };
    recovery: {
      recoveryPasswordSecretAttempt: number;
      expired: number;
      error: {
        status: number;
      };
    };
    token: string;
  };
}
