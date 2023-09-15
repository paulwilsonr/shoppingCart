import PropTypes from 'prop-types'

function ProductRating ({ratingObj}) {

    return <p>{ratingObj.rate}</p>;
}

ProductRating.propTypes = {
    ratingObj: PropTypes.object,
}

export default ProductRating;