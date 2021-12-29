export const validatePassword = (password) => {
  const passwordPattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/g;
  const isValid = passwordPattern.test(password);
  const result = {
    isPasswordValid: true,
    passwordErrorText: "",
  };
  if (!isValid) {
    result.isPasswordValid = false;
    result.passwordErrorText =
      "Password harus minimal 8 karakter yang terdiri dari huruf kapital, non-kapital dan angka";
  }
  return result;
};

export const validateEmail = (email) => {
  const emailPattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const isValid = emailPattern.test(email);
  const result = {
    isEmailValid: true,
    emailErrorText: "",
  };
  if (!isValid) {
    result.isEmailValid = false;
    result.emailErrorText = "Email yang Anda masukkan tidak valid";
  }
  return result;
};

export const validateUsername = (username) => {
  const usernamePattern = /([^\s])/;
  const isValid = usernamePattern.test(username);
  const result = {
    isUsernameValid: true,
    usernameErrorText: "",
  };
  if (!isValid) {
    result.isUsernameValid = false;
    result.usernameErrorText =
      "Nama yang Anda masukkan tidak valid, gunakan hanya karakter non kapital";
  }
  return result;
};
