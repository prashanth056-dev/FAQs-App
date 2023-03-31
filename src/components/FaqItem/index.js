// Write your code here.
import './index.css'
import {Component} from 'react'

class FaqItem extends Component {
  state = {ishidden: false}

  onClickBtn = () => {
    console.log('kanna')
    this.setState(prev => ({ishidden: !prev.ishidden}))
  }

  render() {
    const {obj} = this.props
    const {questionText, answerText} = obj

    const {ishidden} = this.state
    const imgUrl = !ishidden
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    const altTxt = !ishidden ? 'plus' : 'minus'

    return (
      <li className="cards">
        <div className="row">
          <h1>{questionText}</h1>
          <button className="btn" type="button" onClick={this.onClickBtn}>
            <img src={imgUrl} alt={altTxt} />
          </button>
        </div>

        {ishidden && (
          <div>
            <hr />
            <p>{answerText}</p>
          </div>
        )}
      </li>
    )
  }
}
export default FaqItem
