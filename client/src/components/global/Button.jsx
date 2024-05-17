import '../../styles/button.css'

const Button = ({ onClick, disabled, children }) => {
  return (
    <button className="button" onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button
