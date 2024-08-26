interface ValidationErrors {
  [key: string]: string | undefined;
}

export const validateField = (name: string, value: string): string | undefined => {
  switch (name) {
    case "fullName":
      if (!value) return "Full Name is required";
      break;
    case "email":
      if (!value) return "Email is required";
      if (!/^\S+@\S+\.\S+$/.test(value)) return "Email is invalid";
      break;
    case "amount":
      if (!value) return "Loan Amount is required";
      const numericValue = Number(value);
      if (isNaN(numericValue)) return "Loan Amount must be a number";
      if (numericValue <= 0) return "Loan Amount must be a positive number";
      break;
    case "purpose":
      if (!value) return "Loan Purpose is required";
      break;
    default:
      return undefined;
  }
  return undefined;
};
