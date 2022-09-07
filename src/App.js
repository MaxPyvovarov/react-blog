import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import CreatePost from './pages/CreatePost';
// import styled from 'styled-components';

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path='/' exact element={<Home />} />
				<Route path='/create' element={<CreatePost />} />
				{/* <Route path='/post/:id' element={<PostPage />} /> */}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
