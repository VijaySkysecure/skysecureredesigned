// API service for contact form submission
const API_BASE_URL = import.meta.env.VITE_API_URL;

console.log("API_BASE_URL:", API_BASE_URL);

export const contactApi = {
  async submitContactForm(formData) {
    try {
      const response = await fetch(`${API_BASE_URL}/form/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log('API Response:', data); // Debug logging
      
      // Handle both success and error responses
      if (response.ok) {
        return {
          success: data.status,
          message: data.message,
          data: data.data,
        };
      } else {
        // Handle HTTP error responses (400, 500, etc.)
        return {
          success: false,
          message: data.message || `HTTP error! status: ${response.status}`,
          data: data.data,
        };
      }
    } catch (error) {
      console.error('Contact form submission error:', error);
      return {
        success: false,
        message: error instanceof Error ? error.message : 'An unexpected error occurred',
      };
    }
  },
};
