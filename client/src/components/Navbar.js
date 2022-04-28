import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth";

export default function Navbar() {
	const { isLoggedIn, user, logoutUser } = useContext(AuthContext);

	return (
		<nav className="nav">
			<div className="nav-left">
		<img id="brand-logo" src="/logo.png" alt="brand logo"/>
			</div>
			<Link to="/">
				<button className="btn">Home</button>
			</Link>
			<Link to="/pricing">
				<button className="btn">Prices</button>
			</Link>

			{isLoggedIn ? (
				<>
					<Link to="/groups">
						<button>Rides</button>
					</Link>
					<button onClick={logoutUser} to='/'>Logout</button>
					<Link to="/userProfile">
						<button>Profile</button>
					</Link>
				</>
			) : (
				<>
					<Link to="/signup">
						<button>Signup</button>
					</Link>
					<Link to="/login">
						<button>Login</button>
					</Link>
				</>
			)}
		</nav>
	);
}
