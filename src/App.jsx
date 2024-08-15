import './styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './utils/AuthProvider';
import { Redirect } from './pages/Redirect/Redirect';

import { Home } from './pages/Home/Home';
import { Login } from './pages/Login/Login';
import { SignUp } from './pages/SignUp/SignUp';
import { MyBoard } from './pages/MyBoard/MyBoard';
import { SideMenu } from './components/SideMenu/SideMenu';
import { Work } from './pages/Work/Work';
import { Studies } from './pages/Studies/Studies';
import { Trip } from './pages/Trip/Trip';
import { Personal } from './pages/Personal/Personal';
import { Finance } from './pages/Finance/Finance';
import { Social } from './pages/Social/Social';
import { Hobbies } from './pages/Hobbies/Hobbies';
import { Settings } from './pages/Settings/Settings';

export const App = () => {
	return (
		<div className='app'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/login' element={<Login />} />
					<Route path='/signup' element={<SignUp />} />

					{/* PrivateRoutes */}
					<Route
						path='/redirect'
						element={
							<>
								<Redirect />
							</>
						}
					/>
					
					<Route
						path='/myboard'
						element={
							<>
								<SideMenu />
								<MyBoard />
							</>
						}
					/>
					
					<Route
						path='/work'
						element={
							<>
								<SideMenu />
								<Work />
							</>
						}
					/>
					
					<Route
						path='/studies'
						element={
							<>
								<SideMenu />
								<Studies />
							</>
						}
					/>
					
					<Route
						path='/trip'
						element={
							<>
								<SideMenu />
								<Trip />
							</>
						}
					/>
					
					<Route
						path='/personal'
						element={
							<>
								<SideMenu />
								<Personal />
							</>
						}
					/>
					
					<Route
						path='/finance'
						element={
							<>
								<SideMenu />
								<Finance />
							</>
						}
					/>
					
					<Route
						path='/social'
						element={
							<>
								<SideMenu />
								<Social />
							</>
						}
					/>
					
					<Route
						path='/hobbies'
						element={
							<>
								<SideMenu />
								<Hobbies />
							</>
						}
					/>
					
					<Route
						path='/settings'
						element={
							<>
								<SideMenu />
								<Settings />
							</>
						}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
};
