import axios from 'axios'

const baseUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?';
const apikey = 'l2icBF9GGrJV8FxmyldrDLJhpHX3zOXLhoSt03EB';

export const getPhotos = async (sol: number, page: number, camera: string) => {
  try {
    let url = '';
    if ( camera === '' ) {
      url = `${baseUrl}sol=${sol}&page=${page}&api_key=${apikey}`; 
    } else {
      url = `${baseUrl}sol=${sol}&page=${page}&camera=${camera}&api_key=${apikey}` 
    }
    const photos = await axios({
      method: "GET",
      url: url,
    });
    return photos.data;
  } catch (error){
    throw new Error();
  }
}
