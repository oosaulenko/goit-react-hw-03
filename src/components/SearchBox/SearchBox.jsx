import css from './SearchBox.module.css';

const SearchBox = ({ updateFilter }) => {
    return (
        <div className={css.filter}>
            <label htmlFor="filter">Find contacts by name</label>
            <input onChange={updateFilter} id="filter"></input>
        </div>
    )
}

export default SearchBox;