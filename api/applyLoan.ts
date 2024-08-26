import config from "@/config";

interface LoanData {
  fullName: string;
  email: string;
  amount: number;
  purpose: string;
}

export default async function applyLoan(loanData: LoanData) {
  const { fullName, email, amount, purpose } = loanData;
  const response = await fetch(`${config.apiBaseUrl}/apply-loan`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      full_name: fullName,
      email,
      loan_amount: amount,
      loan_purpose: purpose,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to apply for loan");
  }

  return response.json();
}
