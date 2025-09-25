import { useContext } from "react";
import { Accordion, Button } from "react-bootstrap";
import { QuizContext } from "../contexts/QuizContext";

function QuizAccordion({ selectedCategory }) {
	const { questions, validateQuestion } = useContext(QuizContext);

	const handleValidation = (questionId, validation) => {
		validateQuestion(questionId, validation);
	};

	// Filtrage des questions selon la catégorie sélectionnée
	const filteredQuestions =
		selectedCategory === "Toutes"
			? questions
			: questions.filter((q) => q.category === selectedCategory);

	return (
		<Accordion>
			{filteredQuestions.map((question) => (
				<Accordion.Item eventKey={question.id.toString()} key={question.id}>
					<Accordion.Header>
						<div className="d-flex justify-content-between w-100">
							<span>{question.question}</span>
							{question.validation && (
								<span
									className={`badge me-3 ${
										question.validation === "Juste" ? "bg-success" : "bg-danger"
									}`}
								>
									{question.validation}
								</span>
							)}
						</div>
					</Accordion.Header>
					<Accordion.Body>
						<div>
							<strong>Réponse :</strong>
							<br />
							{question.answer}
							<div className="mt-3">
								<Button
									variant="success"
									className="me-2"
									disabled={question.validation !== null}
									onClick={() => handleValidation(question.id, "Juste")}
								>
									Juste
								</Button>
								<Button
									variant="danger"
									disabled={question.validation !== null}
									onClick={() => handleValidation(question.id, "Faux")}
								>
									Faux
								</Button>
							</div>
						</div>
					</Accordion.Body>
				</Accordion.Item>
			))}
		</Accordion>
	);
}

export default QuizAccordion;
