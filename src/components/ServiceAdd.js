import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {changeServiceField, addService, removeService} from '../actions/actionCreators';

function ServiceAdd() {
	const item = useSelector(state => state.serviceAdd);
	const list = useSelector(state => state.serviceList);

	const dispatch = useDispatch();

	const handleChange = evt => {
		const {name, value} = evt.target;
		dispatch(changeServiceField(name, value));
	}

	const handleSubmit = evt => {
			evt.preventDefault();
			const itemInList = list.find(el => el.name === item.name);
			if (itemInList) {
				dispatch(removeService(itemInList.id));
			}
			dispatch(addService(item.name, item.price));
	}

	const handleClear = evt => {
		evt.preventDefault();
		dispatch(changeServiceField('name', ''));
		dispatch(changeServiceField('price', ''));
	}

	return (
		<form onSubmit={handleSubmit}>
			<input name='name' onChange={handleChange} value={item.name} />
			<input name='price' onChange={handleChange} value={item.price} />
			<button type='submit'>Save</button>
			<span onClick={handleClear}>Cancel</span>
			
		</form>
	);
}

export default ServiceAdd;