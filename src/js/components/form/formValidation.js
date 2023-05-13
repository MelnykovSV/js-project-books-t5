import JustValidate from 'just-validate';

// eslint-disable-next-line quotes
const alarmSvg = `<svg aria-hidden="true" fill="currentColor" width="16px" height="16px" viewBox="0 0 24 24" ><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>`;

const validationSignUp = new JustValidate('.sign-up-form', {
  validateBeforeSubmitting: false,
});

const validationSignIn = new JustValidate('.sign-in-form', {
  validateBeforeSubmitting: false,
});

export function addValidation() {
  validationSignUp
    .addField('#sign-up-name', [
      {
        rule: 'required',
        errorMessage: `${alarmSvg}   Name is required`,
      },
      {
        rule: 'minLength',
        value: 3,
        errorMessage: `${alarmSvg}   Use 3 characters ore more for your password`,
      },

      {
        rule: 'maxLength',
        value: 20,
        errorMessage: `${alarmSvg}   Use 20 characters ore less for your password`,
      },
    ])
    .addField('#sign-up-email', [
      {
        rule: 'required',
        errorMessage: `${alarmSvg}   Email is required`,
      },

      {
        rule: 'email',
        errorMessage: `${alarmSvg}   Email is invalid!`,
      },
    ])
    .addField('#sign-up-password', [
      {
        rule: 'required',
        errorMessage: `${alarmSvg}   Password is required`,
      },
      {
        rule: 'minLength',
        value: 6,
        errorMessage: `${alarmSvg}   Use 6 characters ore more for your password`,
      },
      {
        rule: 'customRegexp',
        value: /[a-z]+/,
        errorMessage: `${alarmSvg}   Password shout contain at least one regular letter`,
      },
      {
        rule: 'customRegexp',
        value: /[A-Z]+/,
        errorMessage: `${alarmSvg}   Password shout contain at least one capital letter`,
      },
      {
        rule: 'customRegexp',
        value: /[1-9]+/,
        errorMessage: `${alarmSvg}   Password shout contain at least one number`,
      },
    ]);

  validationSignIn
    .addField('#sign-in-email', [
      {
        rule: 'required',
        errorMessage: `${alarmSvg}   Email is required`,
      },
    ])
    .addField('#sign-in-password', [
      {
        rule: 'required',
        errorMessage: `${alarmSvg}   Password is required`,
      },
    ]);
}

// export function removeValidation() {
//   validation.destroy();
// }
