import React from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#___gatsby')

const calloutStyle = {
    /* styles skipped for brevity */
}

export default function VideoPopup( props ) {
    if (!props.children) {
        return null;
    }
    constructor(props) {
        super(props)
        this.state = {
          isModalOpen: false,
        }
    }
    handleModalOpen = event => {
        this.setState({ isModalOpen: true })
    }
    handleModalClose = event => {
        this.setState({ isModalOpen: false })
    }
    const classes = `callout callout-${props.type}`;
    return(
        <div className={classes} style={calloutStyle}>
            { props.children }
        </div>

        <ReactModal
          isOpen={this.state.isModalOpen}
          onRequestClose={this.handleModalClose}
          contentLabel="Example Modal In Gatsby"
        >
        <video width="100%" heigh="100%"  controls autoplay="autoplay">
          <source src={`${process.env.GATSBY_CR_MEDIA_URL}/CampaignRabbit-Quick-Tour-Dashboard-Video.mp4`} type="video/mp4"/>
          Your browser does not support HTML5 video.
        </video>

          <button onClick={this.handleModalClose} className="close-btn"><FaTimes/></button>
        </ReactModal>
    )
}

VideoPopup.defaultProps = {
    VideoUrl: '',
};
