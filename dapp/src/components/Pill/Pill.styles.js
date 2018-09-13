const styles = {
  pill: {
    backgroundColor: '#3C0A0C',
    display: 'inline-block',
    padding: '2px 12px',
    borderRadius: '21px',
    position: 'relative',
    '&::before': {
      content: 'close-quote',
      position: 'absolute',
      background: `url('/images/pill-triangle.svg') no-repeat`,
      left: '-8px',
      top: '8px',
      width: '10px',
      height: '10px'
    },
    '&::after': {
      content: 'close-quote',
      position: 'absolute',
      background: `url('/images/pill-triangle.svg') no-repeat`,
      transform: 'rotate(180deg)',
      right: '-8px',
      top: '8px',
      width: '10px',
      height: '10px'
    }
  },
  text: {
    fontFamily: 'Lato',
    fontWeight: 900,
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    lineHeight: '15px',
    fontSize: '0.75rem'
  }
}

export default styles
