const styles = {
  name: {
    fontFamily: 'Lato',
    fontSize: '2.813rem',
    fontWeight: 300,
    color: '#000',
    paddingTop: '100px',
    paddingBottom: '10px',
    letterSpacing: '5.63px',
    textTransform: 'uppercase'
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
    maxWidth: '620px',
    width: '100%',
    margin: '0 auto',
    marginTop: '10px',
    fontSize: '15px',
    fontWeight: '500',
    textAlign: 'center',
    color: '#585858',
    fontFamily: 'Lato',
    letterSpacing: '1.75px',
    zIndex: 16,
    position: 'relative'
  },
  image: {
    width: '100%',
    maxWidth: '800px'
  },
  text: {
    color: '#585858',
    textTransform: 'uppercase',
    fontFamily: 'Lato',
    fontSize: '14px',
    fontWeight: 900,
    letterSpacing: '1.75px'
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
      left: '40px',
      position: 'absolute',
      textTransform: 'uppercase',
      fontSize: ' 0.875rem',
      color: '#585858',
      opacity: 0.5,
      fontWeight: 900,
      right: '80px'
    },
    '& $leadingBid': {
      right: '-40px'
    }
  },
  leadingBid: {
    position: 'absolute'
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
    '& input::-webkit-inner-spin-button, & input::-webkit-outer-spin-button': {
      appearance: 'none',
      margin: 0
    },
    '& span': {
      position: 'absolute',
      color: '#CF6652',
      top: '-2px',
      right: '40px'
    }
  }
}

export default styles
