import React, { useState } from "react"
import { Link, useParams } from "react-router-dom"
import { FETCH, pages } from "../../App"
import { useFetch } from "../../hooks/UseFetch"
import { ButtonComponent } from "../Button"
import { MovieList } from "../MovieList"

export const Genre = () => {
	let params = useParams()
	const [page, setPage] = useState(1)
	const genreMovies = useFetch(FETCH.genreMovies(params.genreID, page))

	return (
		<>
			{genreMovies && (
				<div className='App'>
					<MovieList movies={genreMovies.results} />
					<div className='button-container'>
						{pages &&
							pages.map((page, index) => (
								<Link
									key={index}
									to={`/moviePage-react-/genres/${params.genreID}/page=${
										index + 1
									}`}>
									<ButtonComponent
										event={() => setPage(index + 1)}
										text={page}
									/>
								</Link>
							))}
					</div>
				</div>
			)}
		</>
	)
}