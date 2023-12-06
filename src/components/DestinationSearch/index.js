// Write your code here
import {Component} from 'react'
import DestinationItem from '../DestinationItem/index'
import './index.css'

class DestinationSearch extends Component {
  state = {inputSearch: ''}

  onChangetext = event => {
    console.log(event.target.value)
    this.setState({inputSearch: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {inputSearch} = this.state
    const searchresult = destinationsList.filter(eachSearch =>
      eachSearch.name.includes(inputSearch),
    )
    return (
      <div>
        <h1>Destination Search</h1>
        <input
          type="search"
          placeholder="Search"
          onChange={this.onChangetext}
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png "
          alt="search icon"
          className="search-image"
        />
        <br />
        <ul>
          {searchresult.map(eachImage => (
            <DestinationItem imageDetails={eachImage} key={eachImage.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
