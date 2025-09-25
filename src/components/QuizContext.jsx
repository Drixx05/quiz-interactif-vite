import { createContext, useReducer } from "react";
import { initialState, quizReducer, VALIDATE_QUESTION, SET_CATEGORY_FILTER } from "../reducers/quizReducer";

const QuizContext = createContext();

export function QuizProvider({ children }) {
	const [state, dispatch] = useReducer(quizReducer, initialState);

	const validateQuestion = (questionId, validation) => {
		dispatch({
			type: VALIDATE_QUESTION,
			questionId,
			validation,
		});
	};

	const setCategoryFilter = (category) => {
		dispatch({
			type: SET_CATEGORY_FILTER,
			category,
		});
	};

	// Questions filtrées
	const filteredQuestions = state.selectedCategory === "Toutes" 
		? state.questions 
		: state.questions.filter(q => q.category === state.selectedCategory);

	return (
		<QuizContext.Provider
			value={{
				questions: filteredQuestions,
				selectedCategory: state.selectedCategory,
				validateQuestion,
				setCategoryFilter,
			}}
		>
			{children}
		</QuizContext.Provider>
	);
}

export { QuizContext };