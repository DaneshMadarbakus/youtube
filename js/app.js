console.log('Danesh');
document.addEventListener('')
const youtubeApiKey = ;
const apiURL = 'https://www.googleapis.com/youtube/v3';
const makanMustyId = 'UC167j-qCguSgHu20raA211w';

fetch( `${apiURL}/search?part=snippet&channelId=${makanMustyId}&maxResults=20&key=${youtubeApiKey}`)
  .then(response => {
    return response.json();
  })
  .then(responseJSON => {
    console.log(responseJSON);
  });
  
