import {
	StyledContent,
	StyledImg,
	StyledInput,
	StyledSelect
} from './ingredients.styles';

const Ingredients = ({
	ingredient,
	onAdd,
	onDelete,
	showAddButton,
	onChange
}) => {
	return (
		<StyledContent>
			<StyledInput
				type='number'
				placeholder='Amount'
				name='amount'
				value={ingredient.amount}
				onChange={e => handleInputChange(e, ingredient.id, onChange)}
			/>
			<StyledSelect
				name='unit'
				value={ingredient.unit}
				onChange={e => handleInputChange(e, ingredient.id, onChange)}
			>
				<option value=''>Unit of measurement</option>
				<option value='Gusto'>Al gusto</option>
				<option value='Kg'>Kilogramos</option>
				<option value='Cucharada'>Cucharada</option>
				<option value='Cucharadita'>Cucharadita</option>
				<option value='Pizca'>Pizca</option>
				<option value='Pizca'>Puñado</option>
			</StyledSelect>
			<StyledInput
				type='text'
				placeholder='Ingredient'
				name='ingredient'
				value={ingredient.ingredient}
				onChange={e => handleInputChange(e, ingredient.id, onChange)}
			/>
			{onDelete && (
				<StyledImg src='/images/delete.svg' alt='Delete' onClick={onDelete} />
			)}
			{showAddButton && (
				<StyledImg src='/images/add.svg' alt='Add' onClick={onAdd} />
			)}
		</StyledContent>
	);
};

// Función para manejar cambios en los inputs
const handleInputChange = (e, id, onChange) => {
	const { name, value } = e.target;
	onChange(id, name, value);
};

export default Ingredients;
