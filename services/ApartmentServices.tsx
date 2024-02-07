// apartmentService.ts
const API_BASE_URL = 'https://nawy-backend-eta.vercel.app/api';

export const getAllApartments = async (page : number) => {
  try {
    const response = await fetch(`${API_BASE_URL}/apartments/${page}`);
    const { data, totalPages } = await response.json();
    return { data, totalPages };
  } catch (error) {
    throw new Error('Error fetching apartments');
  }
};

export const getApartmentByRefNo = async (refNo : string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/apartment/${refNo}`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    throw new Error('Error fetching apartment by refNo');
  }
};
