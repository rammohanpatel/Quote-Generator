import axios from 'axios';


// const options = {
//   method: 'GET',
//   url: 'https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote',
//   params: {
//     token: 'ipworld.info'
//   },
//   headers: {
//     'X-RapidAPI-Key': '6a6989dd5dmsh0d6264849432981p1fa855jsn750f7bd18a0c',
//     'X-RapidAPI-Host': 'quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com'
//   }
// };

export const fetch_api = async ( ) => {
    const { data } = await axios.get('https://api.adviceslip.com/advice');
  
    return data;
  };
  