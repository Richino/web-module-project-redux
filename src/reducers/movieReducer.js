import { ADD_MOVIE, DELETE_MOVIE } from "../actions/movieActions.js";
import movies from "./../data.js";

export const initialState = {
	movies: movies,
	appTitle: "IMDB Movie Database",
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case DELETE_MOVIE:
			return {
				movies: state.movies.filter(item => {
					return action.payload !== item.id;
				}),
			};
		case ADD_MOVIE:
			movies.push(action.payload);
			let list = movies;
			console.log("new movie", list);
			return {
				...state,
				movies: list,
			};
		default:
			return state;
	}
};

export default reducer;
