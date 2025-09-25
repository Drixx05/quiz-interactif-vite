import { createContext, useReducer } from "react";
import {
	initialState,
	quizReducer,
	VALIDATE_QUESTION,
} from "../reducers/quizReducer";

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

	return (
		<QuizContext.Provider
			value={{
				questions: state.questions,
				validateQuestion,
			}}
		>
			{children}
		</QuizContext.Provider>
	);
}

export { QuizContext };
