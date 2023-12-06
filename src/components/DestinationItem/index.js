// Write your code here
import './index.css'

const DestinationItem = props => {
  const {imageDetails} = props
  const {name, imgUrl} = imageDetails
  return (
    <li>
      <img src={imgUrl} className="image-size" alt={name} />
      <p>{name}</p>
    </li>
  )
}

export default DestinationItem
