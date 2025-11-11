export interface CustomerImagesResponse {
  success: boolean;
  data: {
    docs: Array<{
      _id?: string;
      id?: number;
      name?: string;
      clientLogo?: string;
    }>;
  } | null;
  message?: string;
  code?: number;
}

export function getAllCustomerImages(page?: number, limit?: number): Promise<CustomerImagesResponse>;

