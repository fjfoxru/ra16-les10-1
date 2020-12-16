import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {removeService, changeServiceField, searchService} from '../actions/actionCreators';

function ServiceList() {
  const search = useSelector(state => state.serviceSearch.value);

  const items = useSelector(state => {
    
    let arrayServiceList = state.serviceList;
    let searchValue = search;

    if (!searchValue) {
      return arrayServiceList;
    } else {
      searchValue = searchValue.trim().toLowerCase();
      arrayServiceList = arrayServiceList.filter(item => {
        if (item.name.toLowerCase().indexOf(searchValue) !== -1) {
          return item;
        }
      })
      return arrayServiceList;
    }
  }
    );

  const dispatch = useDispatch();

  const handleRemove = id => {
    dispatch(removeService(id));
  }

  const handleEdit = o => {
    dispatch(changeServiceField('name', o.name));
    dispatch(changeServiceField('price', o.price));
  }

  const handleSearch = evt => {
    const {value} = evt.target;
    dispatch(searchService(value));
  }

  return (
    <>
      <input type="search" onChange={handleSearch} value={search} />
      <ul>
        {items.map(o => (
          <li key={o.id}>
            {o.name} {o.price}
            <button onClick={() => handleRemove(o.id)}>✕</button>
            <button onClick={() => handleEdit(o)}>edit</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default ServiceList