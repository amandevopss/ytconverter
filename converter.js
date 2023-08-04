const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://youtube-mp36.p.rapidapi.com/dl',
  params: {id: 'UxxajLWwzqY'},
  headers: {
    'X-RapidAPI-Key': '5c6eecb389mshcd5be48286c497ep16ae5ejsn2a58edaa6333',
    'X-RapidAPI-Host': 'youtube-mp36.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
