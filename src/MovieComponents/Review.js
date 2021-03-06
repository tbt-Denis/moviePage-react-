import "./Review.css"
import monke3 from "../assets/monke3.png"
import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/UseFetch"
import { useMoviePage } from "../context/MoviePageContext"

export const ReviewComponent = () => {
	const params = useParams()
	const { FETCH, IMG_API } = useMoviePage()
	const reviews = useFetch(FETCH.reviews(params.movieID))

	const convertURL = (url) => {
		if (url && url.toString().startsWith("/https")) {
			return url.toString().replace("/", "")
		} else return IMG_API(url)
	}

	return (
		<>
			{reviews.results ? (
				reviews.results.map((review) => (
					<div key={review.id} className='review'>
						<img
							className='review-avatar'
							src={
								// If img url true, convert it or replace with monkey image
								(review.author_details.avatar_path &&
									convertURL(review.author_details.avatar_path)) ||
								monke3
							}
							alt='avatar'
						/>
						<div className='review-details'>
							<p className='review-username'>
								{review.author_details.username}
							</p>
							{review.author_details.rating && (
								<p className='review-rating'>
									Rating: {review.author_details.rating}
								</p>
							)}
							<p className='review-content'>{review.content}</p>
							<p className='review-created_at'>
								Created at: {review.created_at}
							</p>
							<p className='review-updated_at'>
								Updated at: {review.updated_at}
							</p>
						</div>
					</div>
				))
			) : (
				<p>No reviews yet</p>
			)}
		</>
	)
}
