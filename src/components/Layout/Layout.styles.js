const styles = {
  root: {
    backgroundColor: '#1b1e2a',
    position: 'relative',
    overflow: 'hidden',
    padding: '160px 0px 600px 0',
    textAlign: 'center',
    '&::before': {
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      content: 'close-quote',
      opacity: 0.5,
      background: `url('/images/background-dots.png') repeat`
    }
  },
  shape1: {
    background: `url('/images/shape1.svg') no-repeat`,
    position: 'absolute',
    height: '1260px',
    width: '100%',
    left: 0,
    top: '400px',
    zIndex: 4
  },
  shape2: {
    background: `url('/images/shape2.svg') no-repeat`,
    position: 'absolute',
    height: '440px',
    width: '100%',
    left: 0,
    bottom: '0px',
    zIndex: 4
  },
  shape3: {
    background: `url('/images/shape3.svg') no-repeat`,
    position: 'absolute',
    height: '1800px',
    width: '1000px',
    right: '-200px',
    top: 0,
    zIndex: 4
  },
  shape4: {
    background: `url('/images/shape4.svg') no-repeat`,
    backgroundSize: 'cover',
    position: 'absolute',
    height: '500px',
    width: '100%',
    left: 0,
    bottom: '-30px',
    zIndex: 4
  },
  section: {
    maxWidth: '580px',
    width: '100%',
    margin: '0 auto'
  },
  title: {
    fontSize: '2.5rem',
    fontFamily: 'Dosis',
    fontWeight: 300,
    color: 'rgba(255,255,255,0.9)',
    textTransform: 'uppercase',
    letterSpacing: '2px'
  },
  welcome: {
    fontFamily: 'Fira Sans',
    fontSize: '1.25rem',
    fontWeight: 300,
    color: 'rgba(255,255,255,0.9)'
  },
  divider: {
    display: 'block',
    margin: '24px auto',
    width: '204px',
    height: '12px',
    background: `url('/images/divider-small.svg') no-repeat`
  },
  buttons: {
    marginTop: '54px',
    '& div:last-child': {
      marginTop: '36px'
    }
  },
  ornament: {
    background: `url('/images/ornament.svg') no-repeat`,
    position: 'absolute',
    width: '400px',
    height: '400px',
    right: '10%',
    bottom: '15%',
    zIndex: 7,
    transition: `background 1s ease`
  },
  social: {
    position: 'absolute',
    bottom: '60px',
    zIndex: 10
  }
}

export default styles
