export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    "X-RapidAPI-Key": "86fbd23c38msh45b1f1f6f1b6051p1e19eajsn11a68ae0efa4",
  },
};

console.log(process.env);
export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
