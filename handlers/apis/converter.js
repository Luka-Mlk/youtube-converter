const converter = async (id) => {
  console.log(id);
  const fetchAPI = await fetch(
    `https://youtube-mp36.p.rapidapi.com/dl?id=${id}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": process.env.API_KEY,
        "x-rapidapi-host": process.env.API_HOST,
      },
    }
  );
  const fetchResponse = await fetchAPI.json();
  /*if (fetchResponse.status === "ok")*/
  return fetchResponse;
};

module.exports = {
  converter,
};
