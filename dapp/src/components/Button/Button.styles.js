const styles = {
  button: {
    position: 'relative',
    zIndex: 12,
    '&::before, &::after': {
      content: 'close-quote',
      background: `url('/images/btn-edge.svg') no-repeat`,
      width: '44px',
      height: '32px',
      position: 'absolute',
      zIndex: 1,
      transition: `background 0.3s cubic-bezier(0.64, 0.04, 0.35, 1)`
    },
    '&::before': {
      top: '16px',
      left: '-15px'
    },
    '&::after': {
      top: '0px',
      right: '-15px',
      transform: 'rotate(180deg)'
    },
    '&:hover': {
      opacity: 0.6
    }
  },
  big: {
    top: '400px',
    left: 0,
    width: '380px',
    right: 0,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  link: {
    position: 'relative',
    height: '50px',
    padding: '0 60px',
    color: '#fff',
    fontSize: '1.25rem',
    fontFamily: 'Lato',
    fontWeight: 900,
    letterSpacing: '2px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textTransform: 'uppercase',
    textDecoration: 'none',
    background: `linear-gradient(180deg, #E99F8A 0%, #CF6652 100%)`,
    borderRadius: '26px',
    cursor: 'pointer',
    transition: `width 0.3s cubic-bezier(0.64, 0.04, 0.35, 1)`
  },
  bigInner: {
    width: '382px'
  },
  dark: {
    background: 'transparent',
    border: '1px solid #fff'
  }
}

export default styles
