import type { FC } from 'react'

interface ButtonProps {
  disabled: boolean
  onClick: () => void
}

const Button: FC<ButtonProps> = (props) => {
  return (
    <button type='button' {...props}>
      Retry
    </button>
  )
}

export default Button
