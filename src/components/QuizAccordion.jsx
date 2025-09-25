import { Accordion, Button } from "react-bootstrap";
import { useQuiz } from "../hooks/useQuiz";

function QuizAccordion() {
	const { questions, validateQuestion } = useQuiz();

	const handleValidation = (questionId, validation) => {
		validateQuestion(questionId, validation);
	};

	return (
		<Accordion>
			{questions.map((question) => (
				<Accordion.Item eventKey={question.id.toString()} key={question.id}>
					<Accordion.Header>
						<div
							style={{
								display: "flex",
								justifyContent: "space-between",
								width: "100%",
							}}
						>
							<span>{question.question}</span>
							{question.validation && (
								<span
									className={`badge ${
										question.validation === "Juste" ? "bg-success" : "bg-danger"
									}`}
									style={{ marginRight: "20px" }}
								>
									{question.validation}
								</span>
							)}
						</div>
					</Accordion.Header>
					<Accordion.Body>
						<div>
							<p>
								<strong>Réponse :</strong> {question.answer}
							</p>
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
