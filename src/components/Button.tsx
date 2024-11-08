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
// May */
// Jun */
// Aug */
// Sep */
// Oct */
// Nov */
// Dec */
# Jan 25
# Mar 5
# Apr 8
# May 10
# Jun 10
# Jul 12
# Aug 8
# Sep 5
# Oct 12
# Nov 8
