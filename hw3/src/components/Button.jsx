
const Button = ({children, ...props}) => {
  return (
    <div className="button" {...props}>
      {children}
    </div>
  )
}

export default Button
