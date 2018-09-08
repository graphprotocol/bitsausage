const styles = {
  root: {
    backgroundColor: '#fff',
    position: 'relative',
    textAlign: 'center'
  },
  banner: {
    background: `url('/images/banner.png') no-repeat`,
    backgroundPosition: 'top left',
    backgroundSize: 'cover',
    height: '200px',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0
  },
  space: {
    height: '40px',
    width: '100%'
  },
  circle: {
    width: '366px',
    height: '366px',
    borderRadius: '50%',
    zIndex: 1,
    position: 'relative',
    margin: '0 auto',
    backgroundColor: '#fff',
    '&::before': {
      content: 'close-quote',
      position: 'absolute',
      background: `url('/images/sausage-logo.svg') no-repeat`,
      width: '100px',
      height: '75px',
      top: '45px',
      right: '133px'
    }
  },
  name: {
    fontFamily: 'Lato',
    fontSize: 45,
    fontWeight: 300,
    color: '#000',
    paddingTop: '150px',
    paddingBottom: '10px',
    letterSpacing: '5.63px'
  },
  pillCopy: {
    position: 'absolute',
    color: '#fff',
    fontFamily: 'Lato',
    width: '100%',
    left: 0,
    textTransform: 'uppercase',
    fontSize: '12px',
    fontWeight: 900,
    paddingTop: '2px'
  },
  description: {
    width: '500px',
    margin: '0 auto',
    fontSize: '15px',
    fontWeight: '500',
    textAlign: 'center',
    lineHeight: '19px',
    color: '#585858',
    fontFamily: 'Lato',
    letterSpacing: '1.75px',
    marginBottom: '50px'
  },
  text: {
    color: '#585858',
    textTransform: 'uppercase',
    fontFamily: 'Lato',
    fontSize: '14px'
  },
  divider: {
    background: `url('/images/swiggly.svg') no-repeat`,
    width: '60px',
    height: '8px',
    margin: '0 auto',
    padding: '18px 0',
    backgroundPositionY: 'center'
  },
  bids: {
    width: '600px',
    margin: '20px auto',
    marginTop: '60px'
  },
  number: {
    position: 'relative',
    fontFamily: 'Lato',
    fontSize: '4rem',
    color: '#000',
    fontWeight: 500,
    '& span': {
      top: '-12px',
      position: 'absolute',
      textTransform: 'uppercase',
      fontSize: ' 0.875rem',
      color: '#585858',
      opacity: 0.5,
      fontWeight: 900,
      right: '80px'
    }
  },
  seconds: {
    color: '#CF6652',
    '& span': {
      color: '#CF6652'
    }
  },
  bidButtons: {
    marginBottom: '130px',
    marginTop: '60px'
  },
  label: {
    position: 'relative',
    '& input': {
      borderRadius: '26px',
      outline: 'none',
      backgroundColor: '#ECECEC',
      borderStyle: 'none',
      padding: '8px',
      height: '34px',
      marginRight: '20px',
      fontSize: '24px',
      maxWidth: '120px',
      fontFamily: 'Lato',
      color: '#000',
      opacity: 0.5,
      fontWeight: 300,
      textAlign: 'center',
      paddingRight: '24px'
    },
    '& span': {
      position: 'absolute',
      color: '#CF6652',
      top: '-2px',
      right: '40px'
    }
  },
  history: {
    marginTop: '100px',
    margin: '0 auto'
  },
  title: {
    fontSize: '2rem',
    fontFamily: 'Lato',
    fontWeight: 300,
    letterSpacing: '4px',
    textAlign: 'center',
    color: '#000'
  },
  count: {
    width: '80px',
    height: '20px',
    borderRadius: '21px',
    backgroundColor: '#C7C7C7',
    margin: '40px auto',
    color: '#fff',
    fontFamily: 'Lato',
    fontSize: '0.75rem',
    lineHeight: '20px',
    fontWeight: 900,
    position: 'relative',
    '&::before, &::after': {
      content: 'close-quote',
      background: `url('/images/btn-edge-small.svg') no-repeat`,
      width: '9px',
      height: '9px',
      position: 'absolute',
      zIndex: 1,
      transition: `background 0.3s cubic-bezier(0.64, 0.04, 0.35, 1)`
    },
    '&::before': {
      top: '6px',
      left: '-8px'
    },
    '&::after': {
      top: '6px',
      right: '-8px',
      transform: 'rotate(180deg)'
    }
  },
  bidWrapper: {
    maxWidth: '720px',
    margin: '0 auto'
  }
}

export default styles
