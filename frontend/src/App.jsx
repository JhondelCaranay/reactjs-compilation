import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Upload from "./pages/Upload";
import Home from "./pages/Home";
function App() {
	return (
		<div className="container">
			<nav className="nav">
				<div className="nav-brand">Cloudinary Demo</div>
				<ul className="nav-items">
					<li className="nav-item">
						<Link to="/">Gallery</Link>
					</li>
					<li className="nav-item">
						<Link to="/upload">Upload</Link>
					</li>
				</ul>
			</nav>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/upload" element={<Upload />} />
			</Routes>
		</div>
	);
}

export default App;
