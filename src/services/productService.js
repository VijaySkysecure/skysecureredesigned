// API service for customer images
const ADMIN_CONTROL_BACKEND_URL = 'https://qa-backend.skysecure.ai/api/adminControl';

export async function getAllCustomerImages(page = 1, limit = 50) {
  try {
    
    const response = await fetch(
      `${ADMIN_CONTROL_BACKEND_URL}/trusted-enterprises/public/get-all-trusted-enterprises?page=${page}&limit=${limit}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const data = await response.json();
    console.log("Customer images response:", data);

    return {
      success: data.status,
      data: data.data,
      message: data.message,
      code: data.code,
    };
  } catch (error) {
    console.error("Error fetching customer images:", error);
    return {
      success: false,
      data: null,
      message: error instanceof Error ? error.message : "Failed to fetch customer images",
      code: 500,
    };
  }
}

