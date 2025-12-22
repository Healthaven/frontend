// Single source of truth for API configuration
const isDev = import.meta.env.DEV;

export const API_BASE_URL = isDev
  ? "https://staging.healthaven.co"
  : "https://api.healthaven.co";

// Helper function to build full API URLs
export const apiUrl = (endpoint: string): string => {
  const normalizedEndpoint = endpoint.startsWith("/") ? endpoint : `/${endpoint}`;
  return `${API_BASE_URL}${normalizedEndpoint}`;
};