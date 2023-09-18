import PropTypes from 'prop-types'
import '../styles/starStyles.css'

function ProductRating ({ ratingObj }) {
    const width = ratingObj.rate * 100 / 5;

  return (
    <div className='productRating'>
      
        <div className='stars'>
            <div className='percent' style={{width: width + '%'}} ></div>
          </div>
        
      <p className='ratingCount'>{ratingObj.count}</p>
    </div>
  )
}

ProductRating.propTypes = {
  ratingObj: PropTypes.object
}

export default ProductRating
