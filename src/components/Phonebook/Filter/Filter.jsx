import PropTypes from 'prop-types';

import s from './filter.module.css'

function Filter({ onChange, filter }) {
  return (
    <div className={s.container}>
      <label htmlFor="filter" >
        {' '}
        Find contact
      </label>
      <input
        className={s.input}
        value={filter}
        id="filter"
        type="text"
        name="filter"
        onChange={onChange}
      />
    </div>
  );
}

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default Filter