import { Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function FilterQuiz({ selectedCategory, onCategoryChange }) {
	const handleSelect = (category) => {
		onCategoryChange(category);
	};

	return (
		<Dropdown className="w-100 mb-4">
			<Dropdown.Toggle
				variant="outline-secondary"
				className="w-100 d-flex justify-content-between align-items-center"
			>
				<span>{selectedCategory}</span>
			</Dropdown.Toggle>
			<Dropdown.Menu className="w-100">
				<Dropdown.Item onClick={() => handleSelect("Toutes")}>
					Toutes
				</Dropdown.Item>
				<Dropdown.Item onClick={() => handleSelect("Math")}>Math</Dropdown.Item>
				<Dropdown.Item onClick={() => handleSelect("Science")}>
					Science
				</Dropdown.Item>
				<Dropdown.Item onClick={() => handleSelect("Histoire")}>
					Histoire
				</Dropdown.Item>
			</Dropdown.Menu>
		</Dropdown>
	);
}

export default FilterQuiz;
