import axios, { AxiosResponse } from 'axios'

const baseUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?';
const apikey = 'l2icBF9GGrJV8FxmyldrDLJhpHX3zOXLhoSt03EB';

export const getPhotos = async (sol: number, page: number) => {
  try {
    const photos = await axios({
      method: "GET",
      url: `${baseUrl}sol=${sol}&page=${page}&api_key=${apikey}` 
    });
    console.log('response');
    console.log(photos.data)
    return photos.data;
  } catch (error){
    throw new Error();
  }
}
