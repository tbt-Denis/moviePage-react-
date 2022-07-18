import React from "react"
import { Link } from "react-router-dom"
import logo from "../../assets/logo.png"
import { GenreComponent } from "./Genres"
import { SearchComponent } from "./Search"
import "./Header.css"
import { LoginComponent } from "./Login/Login"

export const Header = ({ searchTerm, handleOnChange }) => {
	return (
		<header className='App-header'>
			<Link to={"/moviePage-react-/page=1"}>
				<img className='header-logo' src={logo} alt='logo' />
			</Link>
			{/* <SearchComponent
				searchTerm={searchTerm}
				handleOnChange={handleOnChange}
			/> */}
			<div className='nav-container'>
				<Link className='header-item' to={"/moviePage-react-/upcoming"}>
					Upcoming
				</Link>
				<Link className='header-item' to={"/moviePage-react-/trending"}>
					Trending
				</Link>
			</div>
			<GenreComponent />
			{/* <Link to={"/login"}>login</Link> */}
		</header>
	)
}