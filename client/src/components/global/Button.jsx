import '../../styles/button.css'

const Button = ({ onClick, disabled, children, style = 'default-btn' }) => {
  return (
    <button className={`${style} button`} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button
