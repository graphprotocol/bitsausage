const styles = {
  button: {
    position: 'relative',
    zIndex: 12,
    '&::before, &::after': {
      content: 'close-quote',
      background: `url('/images/btn-handle.svg') no-repeat`,
      width: '44px',
      height: '32px',
      position: 'absolute',
      zIndex: 1,
      transition: `background 0.3s cubic-bezier(0.64, 0.04, 0.35, 1)`
    },
    '&::before': {
      top: '8px',
      left: '-24px'
    },
    '&::after': {
      top: '2px',
      right: '-24px',
      transform: 'rotate(180deg)'
    },
    '&:hover': {
      opacity: 0.6
    }
  },
  link: {
    position: 'relative',
    height: '42px',
    width: '332px',
    color: '#fff',
    fontSize: '1rem',
    fontFamily: 'Dosis',
    letterSpacing: '2px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textTransform: 'uppercase',
    textDecoration: 'none',
    background: `linear-gradient(
    135deg,
    rgba(101, 0, 255, 0.7) 0%,
    rgba(101, 0, 255, 0.73) 34%,
    rgba(0, 168, 255, 0.8) 99%,
    rgba(0, 168, 255, 0.8) 100%
  )`,
    borderRadius: '21px',
    cursor: 'pointer',
    transition: `width 0.3s cubic-bezier(0.64, 0.04, 0.35, 1)`
  },
  dark: {
    background: 'transparent',
    border: '1px solid #fff'
  }
}

export default styles
