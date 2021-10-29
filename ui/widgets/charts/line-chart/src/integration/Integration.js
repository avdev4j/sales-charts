import axios from "axios";

const endpoint = `${process.env.REACT_APP_PUBLIC_API_URL}/stats/sales`

export const getData = async ()=>
  await axios.get(endpoint)



