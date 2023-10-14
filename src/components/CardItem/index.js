import './index.css'

// Write your code here.

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails
  return (
    <li className={className}>
      <h1 className="card-title">{title}</h1>
      <p className="card-description">{description}</p>
      <div className="img-container">
        <img className="card-image" src={imgUrl} alt={title} />
      </div>
    </li>
  )
}
export default CardItem
