const styles = {
  overlay: {
    display: 'none',
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    background: `rgba(0,0,0,0.8)`,
    zIndex: 20,
    '& img': {
      position: 'absolute',
      top: '200px',
      width: '1400px',
      marginLeft: 'auto',
      marginRight: 'auto',
      left: 0,
      right: 0
    },
    transition: `top 1s ease`
  },
  congrats: {
    color: '#fff',
    fontWeight: 900,
    fontSize: '0.875rem',
    fontFamily: 'Lato',
    lineHeight: '1rem',
    letterSpacing: '1.75px',
    textAlign: 'center',
    marginTop: '200px',
    textTransform: 'uppercase'
  },
  big: {
    fontSize: '2.813rem',
    fontWeight: 300,
    letterSpacing: '5.64px',
    lineHeight: '54px'
  }
}

export default styles
