import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/Home'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App























// const formHandler = async (e) => {
//   e.preventDefault();

//   const formData = new FormData();
//   formData.append('file', e.target.file.files[0]);

//   try {
//     const response = await axios.post('http://localhost:4000/upload', formData, {
//       headers: {
//         'Content-Type': 'multipart/form-data',
//       },
//     });

//     console.log('File uploaded successfully', response.data);
//   } catch (error) {
//     console.error('Error uploading file', error);
//   }
// };

// return (
//   <div className="App">
//     <form onSubmit={formHandler} encType="multipart/form-data">
//       <input type='file' name='file' placeholder='upload file'/>
//       <button type="submit">submit</button>
//     </form>
//   </div>
// );