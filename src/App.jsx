import { useState } from "react";
import FilterQuiz from "./components/FilterQuiz";
import QuizAccordion from "./components/QuizAccordion";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import { QuizProvider } from "./contexts/QuizContext";

function App() {
	const [selectedCategory, setSelectedCategory] = useState("Toutes");

	return (
		<QuizProvider>
			<main>
				<Container>
					<h1>Quiz Interactif</h1>
					<p>Filtrer par catégorie</p>
					<FilterQuiz
						selectedCategory={selectedCategory}
						onCategoryChange={setSelectedCategory}
					/>
						<QuizAccordion selectedCategory={selectedCategory} className="mt-4"/>
				</Container>
			</main>
		</QuizProvider>
	);
}

export default App;