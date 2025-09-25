import FilterQuiz from "./components/FilterQuiz";
import QuizAccordion from "./components/QuizAccordion";
import { QuizProvider } from "./components/QuizContext";
import Container from "react-bootstrap/Container";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <QuizProvider>
      <main>
        <Container>
          <h1>Quiz Interactif</h1>
          <p>Filtrer par catégorie</p>
          <FilterQuiz />
          
          <div className="mt-4">
            <QuizAccordion />
          </div>
        </Container>
      </main>
    </QuizProvider>
  );
}

export default App;