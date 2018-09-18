const styles = {
  stats: {
    marginTop: '100px',
    margin: '40px auto',
    paddingBottom: '140px',
    '& .sell': {
      maxWidth: '270px',
      margin: '0 auto'
    }
  },
  title: {
    fontSize: '2rem',
    fontFamily: 'Lato',
    fontWeight: 300,
    letterSpacing: '4px',
    textAlign: 'center',
    color: '#000',
    marginBottom: '40px',
    textTransform: 'uppercase'
  },
  bidWrapper: {
    maxWidth: '720px',
    margin: '40px auto'
  },
  coin: {
    position: 'relative',
    width: '100px',
    margin: '0 auto'
  },
  value: {
    position: 'absolute',
    top: '18px',
    left: 0,
    right: 0,
    fontSize: '45px',
    color: '#fff',
    fontFamily: 'Lato',
    fontWeight: 900
  },
  sausageImg: {
    width: '100%',
    height: '100%',
    maxWidth: '250px',
    maxHeight: '92px',
    objectFit: 'cover',
    marginBottom: '20px'
  }
}

export default styles
