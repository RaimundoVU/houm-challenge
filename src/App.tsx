import  PhotoComponent  from './components/PhotoComponent'
import Container from '@mui/material/Container';
import './styles/header.css'
import HoumLogo from './assets/houmLogo.svg'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useState } from 'react'
import Center from './components/Center';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import theme from './Theme'
import { ThemeProvider } from '@mui/material/styles';



function App() {
  const [page, setPage] = useState(1);
  const [camera, setCamera] = useState('');
  const onChange = (e: React.ChangeEvent<unknown>, page: number) => {
    setPage(page);
  }
  const selectorOnChange = (event: SelectChangeEvent) => {
    setPage(1);
    setCamera(event.target.value as string);
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <header><img src={HoumLogo} alt="houmLogo"/></header>
        <Container style={{padding: 15 }}maxWidth="lg">
          <Center>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="camera">Camera</InputLabel>
                <Select
                  labelId="camera"
                  id="camera"
                  value={camera}
                  label="Camera"
                  onChange={selectorOnChange}
                >
                  <MenuItem value={""}>ALL</MenuItem>
                  <MenuItem value={"FHAZ"}>FHAZ</MenuItem>
                  <MenuItem value={"RHAZ"}>RHAZ</MenuItem>
                  <MenuItem value={"MAST"}>MAST</MenuItem>
                  <MenuItem value={"CHEMCAM"}>CHEMCAM</MenuItem>
                  <MenuItem value={"MAHLI"}>MAHLI</MenuItem>
                  <MenuItem value={"MARDI"}>MARDI</MenuItem>
                  <MenuItem value={"NAVCAM"}>NAVCAM</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Center>
          <PhotoComponent page={page} camera={camera}/>
          <Center>
          <Stack spacing={2}>
            <Pagination count={10} size="large" onChange={onChange}/>
          </Stack>
          </Center>
        </Container>
      </div>
    </ThemeProvider>

  );
}

export default App;
