const styles = {
  root: {
    position: 'relative',
    marginTop: '40px'
  },
  about: {
    marginLeft: '40px'
  },
  aboutIcon: {
    background: `url('/images/info-icon.svg') no-repeat`,
    height: '52px',
    width: '52px'
  },
  profileIcon: {
    background: `url('/images/profile-icon.svg') no-repeat`,
    height: '52px',
    width: '52px'
  },
  auctions: {
    marginRight: '40px'
  },
  auctionIcon: {
    background: `url('/images/auction-logo.png') no-repeat`,
    height: '52px',
    width: '52px',
    position: 'absolute',
    left: `calc(50vw - 35px)`
  },
  activeAbout: {
    '& $aboutIcon': {
      background: `url('/images/info-selected.png') no-repeat`,
      height: '60px',
      width: '170px'
    }
  },
  activeAuction: {
    '& $auctionIcon': {
      background: `url('/images/auction-selected.png') no-repeat`,
      height: '70px',
      width: '70px'
    }
  },
  activeProfile: {
    '& $profileIcon': {
      background: `url('/images/profile-selected.png') no-repeat`,
      height: '60px',
      width: '250px'
    }
  },
  text: {
    display: 'none'
  },
  '@media (max-width: 640px)': {
    aboutIcon: {
      display: 'block'
    },
    activeAbout: {
      '& $aboutIcon': {
        background: `url('/images/info-selected-responsive.png') no-repeat`,
        height: '52px',
        width: '52px'
      }
    },
    profileIcon: {
      display: 'block'
    },
    activeProfile: {
      '& $profileIcon': {
        background: `url('/images/profile-selected-responsive.png') no-repeat`,
        height: '52px',
        width: '52px'
      }
    }
  }
}

export default styles
