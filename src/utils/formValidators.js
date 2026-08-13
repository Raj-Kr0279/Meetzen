const isFilled = (value) => value.trim() !== "";
const isEmailValid = (value) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
const strongPassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
