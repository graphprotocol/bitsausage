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
    width: '52px'
  },
  activeAbout: {
    '& $aboutIcon': {
      background: `url('/images/info-selected-responsive.png') no-repeat`
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
      background: `url('/images/profile-selected-responsive.png') no-repeat`
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
