import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Blog from './pages/Blog';
import CreatePost from './pages/CreatePost';
import PostPage from './pages/PostPage';
import EditPage from './pages/EditPage';

import styled from 'styled-components';

const Background = styled.div`
	background-color: #600d0d;
	min-height: 100vh;
`;

const Container = styled.div`
	padding: 15px 15px 0;
	margin: 0 auto;
	width: 80%;
`;

function App() {
	return (
		<Background>
			<Container>
				<BrowserRouter>
					<Routes>
						<Route path='/' exact element={<Blog />} />
						<Route path='/create' element={<CreatePost />} />
						<Route path='/post/:id' element={<PostPage />} />
						<Route path='/edit/:id' element={<EditPage />} />
					</Routes>
				</BrowserRouter>
			</Container>
		</Background>
	);
}

export default App;
