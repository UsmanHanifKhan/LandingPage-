import '../assets/css/btn.css'
const Button = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className='btn fw-semibold text'>
      {children}
    </button>
  );
}

export default Button;
