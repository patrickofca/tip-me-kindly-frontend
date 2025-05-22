const DEV_API_URL = "http://localhost:3000";
const PROD_API_URL = "your-production-api-url";

export const API_URL = __DEV__ ? DEV_API_URL : PROD_API_URL;
