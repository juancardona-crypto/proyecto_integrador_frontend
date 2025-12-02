// lib/api.js
const API_URL = 'https://6927218826e7e41498fd20b1.mockapi.io/Bag';

export const bagsAPI = {
  getAllBags: async () => {
    try {
      const response = await fetch(API_URL);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching bags:', error);
      throw new Error(`No se pudieron cargar los bolsos: ${error.message}`);
    }
  },

  getBagById: async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return response.json();
    } catch (error) {
      console.error('Error fetching bag:', error);
      throw new Error(`No se pudo cargar el bolso: ${error.message}`);
    }
  },
};