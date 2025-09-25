import { useContext } from "react";
import { QuizContext } from "../components/QuizContext";

export function useQuiz() {
	const context = useContext(QuizContext);
	return context;
}
