import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function CategorySelector ({ setCategory, currentCategory }) {
  return (
    <div className='categorySelector'>
      <Link to={'/'}>Home</Link>
      <p>&gt;</p>
      <select
        value={currentCategory}
        onChange={e => {
          setCategory(e.target.value)
        }}
        className='categoryDropdown'
        name='category'
        id='category-select'
      >
        <option value='all'>All</option>
        <option value="men's clothing">Men&apos;s Clothing</option>
        <option value="women's clothing">Women&apos;s Clothing</option>
        <option value='electronics'>Electronics</option>
        <option value='jewelery'>Jewelery</option>
      </select>
    </div>
  )
}

CategorySelector.propTypes = {
  setCategory: PropTypes.func,
  currentCategory: PropTypes.string
}

export default CategorySelector
