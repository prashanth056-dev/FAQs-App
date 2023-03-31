// Write your code here.
import './index.css'
import {Component} from 'react'
import FaqItem from '../FaqItem'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props

    return (
      <div className="mainBg">
        <div className="card">
          <h1>FAQs</h1>
          <ul>
            {faqsList.map(eachItem => (
              <FaqItem key={eachItem.id} obj={eachItem} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Faqs
