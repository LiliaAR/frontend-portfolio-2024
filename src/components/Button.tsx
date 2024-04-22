interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', 
children }) => {
  return <button className={`btn-${variant}`}>{children}</button>
}
// Jan component
// Feb */
// Mar */
// Apr */
