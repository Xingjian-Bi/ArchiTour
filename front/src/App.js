import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import BuildingDetail from "./components/buildings/BuildingDetail";
import LoginPage from "./components/pages/LoginPage";
import SignupPage from "./components/pages/SignupPage";
import Trip from "./components/trips/Trip";
import ArchiState from "./context/archiTour/ArchiState";
import "./App.css";

function App() {
	return (
		<ArchiState>
			<Router>
				<div className='App'>
					<Navbar />
					<div className='container'>
						<Routes>
							<Route path='/' element={<Home />} />

							{/* <Route path='/user/login' element={<Login />} /> */}
							<Route path='/building/:title' element={<BuildingDetail />} />
							<Route path='/login' element={<LoginPage />} />
							<Route path='/signup' element={<SignupPage />} />
							<Route path='/myTrips' element={<Trip />} />
						</Routes>
					</div>
				</div>
			</Router>
		</ArchiState>
	);
}

App.propTypes = {};
export default App;
