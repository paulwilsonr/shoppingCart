import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useEffect } from 'react'

function CategorySelector ({ setCategory, currentCategory }) {
  useEffect(() => {}, [currentCategory])

  return (
    <div className='categorySelector'>
      <Link className='categoryLink' to={'/'}>
        Home
      </Link>
      <p className='categoryDash'>&gt;</p>
      <select
        value={currentCategory}
        onChange={e => {
          setCategory(e.target.value)
          let width = (e.target.value.length + 2) * 8
          document
            .querySelector('select')
            .setAttribute('style', 'width: ' + width + 'px')
        }}
        className='categoryDropdown'
        name='category'
        id='category-select'
      >
        <option className='categoryOptions' value='all'>
          All
        </option>
        <option className='categoryOptions' value="men's clothing">
          Men&apos;s Clothing
        </option>
        <option className='categoryOptions' value="women's clothing">
          Women&apos;s Clothing
        </option>
        <option className='categoryOptions' value='electronics'>
          Electronics
        </option>
        <option className='categoryOptions' value='jewelery'>
          Jewelery
        </option>
      </select>
    </div>
  )
}

CategorySelector.propTypes = {
  setCategory: PropTypes.func,
  currentCategory: PropTypes.string
}

export default CategorySelector
