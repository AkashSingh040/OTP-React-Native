const BASE_URL = 'https://stapubox.com/trial';

const API_TOKEN =
  process.env.EXPO_PUBLIC_API_TOKEN || 'API_TOKEN_HERE';

const headers = {
  'Content-Type': 'application/json',
  'X-Api-Token': API_TOKEN,
};

export const sendOtp = async (mobile) => {
  const res = await fetch(`${BASE_URL}/sendOtp`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ mobile }),
  });
  return res.json();
};

export const verifyOtp = async (mobile, otp) => {
  const res = await fetch(
    `${BASE_URL}/verifyOtp?mobile=${mobile}&otp=${otp}`,
    { method: 'POST', headers }
  );
  return res.json();
};

export const resendOtp = async (mobile) => {
  const res = await fetch(
    `${BASE_URL}/resendOtp?mobile=${mobile}`,
    { method: 'POST', headers }
  );
  return res.json();
};
