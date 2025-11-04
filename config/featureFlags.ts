export const FLAGS = {
  USE_STRIPE: process.env.NEXT_PUBLIC_FEATURE_USE_STRIPE === 'true',
  USE_EMAIL: process.env.NEXT_PUBLIC_FEATURE_USE_EMAIL === 'true',
  USE_AI: process.env.NEXT_PUBLIC_FEATURE_USE_AI === 'true',
};
