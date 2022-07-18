import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { FETCH } from "../../App"
import { useFetch } from "../../hooks/UseFetch"

export const GenreComponent = () => {
	const genres = useFetch(FETCH.genreList())
	const [isOpen, setIsOpen] = useState(false)

	useEffect(() => {})

	return (
		<>
			<div
				style={
					isOpen
						? {
								transform: `translateX(0%)`,
						  }
						: {}
				}
				className='genre-container'>
				{genres.genres &&
					genres.genres.map((genre) => {
						return (
							<Link
								onClick={() => setIsOpen(!isOpen)}
								className='genre-item'
								to={`/moviePage-react-/genres/${genre.id}/page=1`}
								key={genre.id}>
								{genre.name.toUpperCase()}
							</Link>
						)
					})}
			</div>
			<div
				onClick={() => setIsOpen(!isOpen)}
				className='burger-button header-item'>
				{!isOpen ? "GENRES" : "x"}
			</div>
		</>
	)
}