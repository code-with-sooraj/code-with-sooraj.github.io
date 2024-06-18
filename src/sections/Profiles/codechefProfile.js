import express from 'express';
import axios from 'axios';
import cheerio from 'cheerio';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/codechef', async (req, res) => {
  const username = 'im_soorajkumar';
  const password = 'Maa@papa123';

  try {
    const loginResponse = await axios.post('https://www.codechef.com/login', {
      name: username,
      pass: password
    });
    const cookie = loginResponse.headers['set-cookie'][0].split(';')[0];
    const profileResponse = await axios.get(`https://www.codechef.com/users/${username}`, {
      headers: {
        Cookie: cookie
      }
    });
    const $ = cheerio.load(profileResponse.data);
    const ratings = $('div.rating-number').text().trim();
    const contestsJoined = $('div.contest-participated-count > b').text().trim();
    res.send({ ratings, contestsJoined });
  } catch (error) {
    console.error(error);
    res.status(error.response ? 401 : 500).json({ error: 'Failed to fetch data' });
  }
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
