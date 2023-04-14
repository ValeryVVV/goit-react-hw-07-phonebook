import React from "react";

import style from './Filter.module.css';
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "redux/filtersSlice";
import { getFilter } from "redux/selectors";

const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(getFilter);

    const handleChangeFilter = event => {
        dispatch(setFilter(event.currentTarget.value.toLowerCase()));
      };

    

    return(
        <div className={style.filter}>
        <label className={style.labelFilter}>
            Filter contacts by name <input className={style.filterInput} type='text' value={filter} onChange={handleChangeFilter} />
        </label>
    </div>
    )
};

// Filter.propTypes = {
//     value: PropTypes.string.isRequired,
//     onChange: PropTypes.func.isRequired,
//   };

export default Filter;
