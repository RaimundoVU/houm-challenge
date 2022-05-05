import React, {useState, useEffect} from 'react';
import { getPhotos } from '../services/api'
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


const PhotoComponent: React.FC<{page: number}> = ({...props}) => {
  const [photos, setPhotos] = useState<IPhoto[]>([]);
  const [loading, setLoading] = useState(false)
  const { page } = props;

  useEffect( () => {
    const fetchPhotos = async () => {
      setLoading(true)
      const response = await getPhotos( 1000, page );
      const transformedData = response.photos.map( (photo: any) => {
        let newPhoto: IPhoto;
        newPhoto = {id: photo.id, rover_id: photo.rover_id, name: photo.name, img_src: photo.img_src}
        return newPhoto;
      })
      setPhotos(transformedData)
      setLoading(false)
    }

    fetchPhotos();
  }, [page])

  return (
    <Box sx={{ flexGrow: 1}}>
      <Grid container spacing={3} columns={{xs: 4, sm: 8, md: 12}}>
        { !loading ? 
             photos.map( (photo: IPhoto) => 
            <Grid item xs={3} key={photo.id}>
              <Card key={photo.id} sx={{ maxWidth: 353 }}>
                <CardMedia
                  component="img"
                  width="100%"
                  height="200"
                  image={photo.img_src}
                  alt="green iguana"
                />
                <CardContent>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
            ) 
        : <p>loading</p> }
      </Grid>
    </Box>
    
  )
}

export default PhotoComponent;
