// Single source of truth for API configuration
export const API_BASE_URL = "https://staging.healthaven.co";

// Helper function to build full API URLs
export const apiUrl = (endpoint: string): string => {
  // Ensure endpoint starts with /
  const normalizedEndpoint = endpoint.startsWith("/") ? endpoint : `/${endpoint}`;
  return `${API_BASE_URL}${normalizedEndpoint}`;
};
