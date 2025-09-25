export const VALIDATE_QUESTION = "VALIDATE_QUESTION";
export const SET_CATEGORY_FILTER = "SET_CATEGORY_FILTER";

export const initialState = {
	selectedCategory: "Toutes",
	questions: [
		{
			id: 1,
			category: "Math",
			question: "Combien font 2+2 ?",
			answer: "4",
			validation: null,
		},
		{
			id: 2,
			category: "Science",
			question: "Quelle est la formule de l'eau ?",
			answer: "H2O",
			validation: null,
		},
		{
			id: 3,
			category: "Histoire",
			question: "Qui a découvert l'Amérique ?",
			answer: "Christophe Colomb",
			validation: null,
		},
	],
};

export function quizReducer(state, action) {
	switch (action.type) {
		case VALIDATE_QUESTION:
			return {
				...state,
				questions: state.questions.map((question) =>
					question.id === action.questionId && question.validation === null
						? { ...question, validation: action.validation }
						: question
				),
			};
		case SET_CATEGORY_FILTER:
			return {
				...state,
				selectedCategory: action.category,
			};
		default:
			return state;
	}
}
