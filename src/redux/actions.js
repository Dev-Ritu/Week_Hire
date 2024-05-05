import axios from "axios";

export const fetchJobsList =
  ({ url, params }) =>
  async () => {
    try {
      const response = await axios.post(
        (url = "https://api.weekday.technology/adhoc/getSampleJdJSON"),
        { params },
        { headers: { "Content-Type": "application/json" } }
      );
      return response.data; // Return the fetched data
    } catch (error) {
      console.error("Error fetching data from API:", error);
      throw error; // Throw the error to handle it in the calling code
    }
  };
