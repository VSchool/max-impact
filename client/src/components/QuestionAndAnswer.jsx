import { useState } from 'react'
import dropdown from '../assets/vector1.svg'

const QuestionAndAnswer = ({ num, question, answer }) => {
  const [dropdownToggle, setDropdownToggle] = useState(false)

  const handleToggleDropdown = () => {
    setDropdownToggle((prevDropdownToggle) => !prevDropdownToggle)
  }

  return (
    <div className="qa">
      <div className="qa-container">
        <p>
          {num + 1}. {question}
        </p>
        <div className="qa-dropdown" onClick={handleToggleDropdown}>
          <img alt="dropdown" src={dropdown} />
        </div>
      </div>
      <div className={dropdownToggle ? 'qa-answer show' : 'qa-answer'}>
        {answer}
      </div>
    </div>
  )
}

export default QuestionAndAnswer
