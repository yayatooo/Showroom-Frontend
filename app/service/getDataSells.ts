import axios from "axios";

const fetchSellsBike = async () => {
    const url = "http://localhost:5000/sell/" || "";
    const response = await axios.get(url);
    if (response.status !== 200) {
      throw new Error("Could not get Sells Bike");
    }
    return response.data.data
  };

export default fetchSellsBike