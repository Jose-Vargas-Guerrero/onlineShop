import './Product.css'

// eslint-disable-next-line react/prop-types
function Product({image,title,description,category,price}) {
  return (
    <div className='card'>
        <img className='image' src={image}/>
        <h2 className='name'>{title}</h2>
        <p className='text'>{description}</p>
        <p className='text'>{category}</p>
        <p className='price'>${price}</p>
    </div>
  )
}

export default Product