console.log('Danesh');
const youtubeApiKey = 'AIzaSyDkPTSj7RXHi1kSBemfQYm9TNu8CIweTUg';
const apiURL = 'https://www.googleapis.com/youtube/v3';
const makanMustyId = 'UC167j-qCguSgHu20raA211w';
const state = {};

document.addEventListener('DOMContentLoaded', async () => {
  async function getYoutubeData() {
    const response = await fetch(`${apiURL}/search?part=snippet&channelId=${makanMustyId}&maxResults=20&key=${youtubeApiKey}`);
    const data = await response.json();
    console.log(data);
    state.regionCode = data.regionCode;
    return data.regionCode;
  
    // return Promise.resolve(fetch(`${apiURL}/search?part=snippet&channelId=${makanMustyId}&maxResults=20&key=${youtubeApiKey}`)
    // .then(response => response.json())
    // .then(responseJSON => state.pageInfo = responseJSON.pageInfo));
  }
  
  const response = await getYoutubeData();
  console.log(response, state);
  
})
