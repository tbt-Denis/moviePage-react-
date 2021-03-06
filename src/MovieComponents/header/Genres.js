import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useMoviePage } from "../../context/MoviePageContext"
import { useFetch } from "../../hooks/UseFetch"

export const GenreComponent = () => {
	const { FETCH } = useMoviePage()
	const genres = useFetch(FETCH.genresList())
	const [isOpen, setIsOpen] = useState(false)

	useEffect(() => {})

	return (
		<>
			<div
				style={
					isOpen
						? {
								transform: `translateX(-0.4%)`,
						  }
						: {
								transform: `translateX(-100%)`,
						  }
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
