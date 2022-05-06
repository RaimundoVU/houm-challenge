import React, {useState, useEffect} from 'react';
import { getPhotos } from '../services/api'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Center from './Center';


const PhotoComponent: React.FC<{page: number, camera: string}> = ({...props}) => {
  const [photos, setPhotos] = useState<IPhoto[]>([]);
  const [loading, setLoading] = useState(false)
  const { page, camera } = props;

  useEffect( () => {
    const fetchPhotos = async () => {
      setLoading(true)
      const response = await getPhotos( 1000, page, camera);
      const transformedData = response.photos.map( (photo: any) => {
        let newPhoto: IPhoto;
        let newCamera: ICamera;
        let newRover: IRover;
        newCamera = { ...photo.camera }
        newRover = { ...photo.rover }
        newPhoto = { 
          id: photo.id,
          rover_id: photo.rover_id,
          name: photo.name,
          img_src: photo.img_src,
          earth_date: photo.earth_date,
          rover: newRover,
          camera: newCamera
        }
        return newPhoto;
      })
      setPhotos(transformedData)
      setLoading(false)
    }

    fetchPhotos();
  }, [page, camera])

  return (
    <Box sx={{ flexGrow: 1}}>
      <Grid container spacing={4} columns={{xs: 4, sm: 8, md: 12}}>
        { !loading ? 
             photos.map( (photo: IPhoto) => 
            <Grid item xs={3} key={photo.id}>
              <Card key={photo.id} sx={{ maxWidth: 400 }} style={{borderRadius: 15}}>
                <CardMedia
                  component="img"
                  width="100%"
                  height="200"
                  image={photo.img_src}
                  alt="picture of the mars rover curiosity"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    Picture taken by the rover {photo.rover.name} on the date {photo.earth_date} with the {photo.camera.full_name}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="medium" variant='outlined' style={{borderRadius: 15}}
                    onClick={ () => window.open(photo.img_src)}
                  >
                    View full size
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            ) 
            : <Center> <CircularProgress /></Center>}

      </Grid>
    </Box>
    
  )
}

export default PhotoComponent;
