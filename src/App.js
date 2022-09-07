import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Blog from './pages/Blog';
// import Navbar from './components/Navbar';
import CreatePost from './pages/CreatePost';
import styled from 'styled-components';

const Background = styled.div`
	background-color: #8bc6ec;
	background-image: linear-gradient(135deg, #8bc6ec 0%, #9599e2 100%);
	min-height: 100vh;
`;

function App() {
	return (
		<Background>
			<BrowserRouter>
				{/* <Navbar /> */}
				<Routes>
					<Route path='/' exact element={<Blog />} />
					<Route path='/create' element={<CreatePost />} />
					{/* <Route path='/post/:id' element={<PostPage />} /> */}
				</Routes>
			</BrowserRouter>
		</Background>
	);
}

export default App;
