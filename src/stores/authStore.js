import { create } from 'zustand';

export const useInputValue = create((set) => ({
  inputValue: '',
  setInputValue: (value) => set({ inputValue: value }),
  clearInputValue: () => set({ inputValue: '' }),
}));

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const useLoginForm = create((set, get) => ({
  email: '',
  password: '',
  isEmailValid: false,
  setEmail: (email) =>
    set({
      email,
      isEmailValid: isValidEmail(email),
    }),
  setPassword: (password) => set({ password }),
  isFormValid: () => {
    const { email, password, isEmailValid } = get();
    return isEmailValid && email.trim() !== '' && password.trim() !== '';
  },
  clearForm: () => set({ email: '', password: '', isEmailValid: false }),
}));

export const useSignup = create((set, get) => ({
  email: '',
  password: '',
  confirmPassword: '',
  phoneNumber: '',
  verificationCode: '',
  agreeToTerms: {
    all: false,
    terms: false,
    privacy: false,
    age: false,
  },
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  setConfirmPassword: (confirmPassword) => set({ confirmPassword }),
  setPhoneNumber: (phoneNumber) => set({ phoneNumber }),
  setVerificationCode: (verificationCode) => set({ verificationCode }),
  setAgreeToTerms: (updater) =>
    set((state) => ({
      agreeToTerms:
        typeof updater === 'function'
          ? updater(state.agreeToTerms)
          : { ...state.agreeToTerms, ...updater },
    })),
  isPasswordMatching: () => {
    const { password, confirmPassword } = get();
    return password === confirmPassword && password.length > 0;
  },
  isNextEnabled: () => {
    const { password, confirmPassword } = get();
    return password === confirmPassword && password.length > 0;
  },
}));
