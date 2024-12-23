export default function Container({ children, className }) {
  return (
    <div className={`w-full max-w-7xl px-4 md:px-2 mx-auto  ${className}`}>
      { children }
    </div>
  )
}