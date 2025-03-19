export function validatePassword(password: string): {
  valid: boolean;
  message: string;
} {
  if (!password) {
    return { valid: false, message: "Password is required." };
  }

  if (password.length < 6 || password.length > 16) {
    return {
      valid: false,
      message: "Password must be between 6 and 16 characters long.",
    };
  }

  if (!/[a-zA-Z]/.test(password)) {
    return {
      valid: false,
      message: "Password must contain at least one letter.",
    };
  }

  if (!/\d/.test(password)) {
    return {
      valid: false,
      message: "Password must contain at least one number.",
    };
  }

  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    return {
      valid: false,
      message: "Password must contain at least one special character.",
    };
  }

  return { valid: true, message: "Password is valid" };
}
