import  PhotoComponent  from './components/PhotoComponent'
import Container from '@mui/material/Container';
import './styles/header.css'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useState } from 'react'


function App() {
  const [page, setPage] = useState(1);
  const onChange = (e: React.ChangeEvent<unknown>, page: number) => {
    setPage(page);
  }

  return (
    <div>
    <header>TEST</header>
    <Container maxWidth="lg">
      <PhotoComponent page={page} />
      <Stack spacing={2}>
        <Pagination count={10} size="large" onChange={onChange}/>
      </Stack>
    </Container>
    </div>
  );
}

export default App;
