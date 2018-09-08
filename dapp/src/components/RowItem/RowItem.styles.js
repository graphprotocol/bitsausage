const styles = {
  bidRow: {
    flexWrap: 'nowrap',
    textAlign: 'left'
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
  bidAmount: {
    '& $number': {
      fontSize: '2rem',
      '& span': {
        right: '-30px'
      }
    }
  },
  bidderInfo: {
    fontFamily: 'Lato',
    fontSize: '0.75rem',
    marginLeft: '15px'
  },
  bidderName: {
    fontWeight: 900,
    color: '#585858',
    textTransform: 'uppercase',
    letterSpacing: '1.75px'
  },
  bidderAddress: {
    fontWeight: 300,
    color: '#585858',
    letterSpacing: '1.5px'
  },
  bidder: {
    height: '32px',
    width: '36px',
    backgroundColor: '#DF8F8F',
    borderRadius: '50%'
  }
}

export default styles
