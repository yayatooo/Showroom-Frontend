import axios from "axios";

const fetchSoldData = async () => {
    const url = "http://localhost:5000/sold/"
    const response = await axios.get(url)
    if (response.status !== 200) {
        throw new Error("Could not get Sold Bike");
      }
      return response.data.data
}

export default fetchSoldData