import { Dropdown, DropdownButton } from "react-bootstrap";
import { useQuiz } from "../hooks/useQuiz";

function FilterQuiz() {
	const { selectedCategory, setCategoryFilter } = useQuiz();

	const handleSelect = (eventKey) => {
		setCategoryFilter(eventKey);
	};

	return (
		<DropdownButton
			id="dropdown-basic-button"
			title={selectedCategory}
			variant="outline-secondary"
			style={{ width: "100%" }}
			onSelect={handleSelect}
		>
			<Dropdown.Item eventKey="Toutes">Toutes</Dropdown.Item>
			<Dropdown.Item eventKey="Math">Math</Dropdown.Item>
			<Dropdown.Item eventKey="Science">Science</Dropdown.Item>
			<Dropdown.Item eventKey="Histoire">Histoire</Dropdown.Item>
		</DropdownButton>
	);
}

export default FilterQuiz;
