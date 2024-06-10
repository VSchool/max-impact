import { useState } from 'react'
import '../styles/faq.css'
import QuestionAndAnswer from './QuestionAndAnswer'

const FrequentlyAskedQuestions = () => {
  const [data, setData] = useState([
    {
      question: 'How do I sign up for the continuous learning program?',
      answer: 'ANSWER',
    },
    {
      question: 'Is there a cost associated with the program?',
      answer: 'ANSWER',
    },
    {
      question: 'What topics are covered in the training sessions?',
      answer: 'ANSWER',
    },
    {
      question: 'How long are the training sessions?',
      answer: 'ANSWER',
    },
    {
      question: 'Can I access the training materials on-demand?',
      answer: 'ANSWER',
    },
    {
      question: 'Will I receive a certificate upon completion of the program?',
    },
    {
      question: 'How do I track my progress through the program?',
      answer: 'ANSWER',
    },
    {
      question: 'What if I have questions or need support during the program?',
      answer: 'ANSWER',
    },
  ])

  return (
    <div className="faq">
      <div className="faq-container">
        <h2>Frequently Asked Questions (FAQs)</h2>
        <div className="q-and-as">
          {data.map((item, i) => (
            <QuestionAndAnswer
              key={i}
              num={i}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default FrequentlyAskedQuestions
