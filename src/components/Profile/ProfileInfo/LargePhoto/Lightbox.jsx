import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
import userDefaultPhoto from '../../../../assets/images/defaultUser.jpg'




export default class LightboxEx extends Component {
    constructor(props) {
        super(props);


    }


    render() {
        let { mainPhoto, toogleLightbox, changeToggleLightBox } = this.props;

        if(!mainPhoto) {
           mainPhoto = userDefaultPhoto;
        }

        return (
            <div>
                {toogleLightbox && (
                    <Lightbox
                        mainSrc={mainPhoto}
                        onCloseRequest={changeToggleLightBox}
                        enableZoom={false}
                    />
                )}
            </div>
        );
    }
}