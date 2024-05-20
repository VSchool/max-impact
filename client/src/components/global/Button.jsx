import '../../styles/button.css'

const Button = ({ onClick, disabled, children, width = '80' }) => {
  return (
    <button
      style={{ width: `${width}px` }}
      className="button"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
