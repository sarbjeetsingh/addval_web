/*!
 * React
 * Project Website: http://react.pimmey.com
 * @version 1.0
 * @author Yegor Borisenco <pimmey@pimmey.com>
 */

'use strict';

// This is going to be used in /assets/js/app.js
var CONFIG = {};

CONFIG = {

    // Various toast messages
    toastMessages: {
        nameMissing: 'Looks like you forgot to introduce yourself.',
        contactMissing: 'Let us know how to contact you.',
        messageMissing: 'You forgot to include a message to us, duh :-)',
        enterValidEmail: 'Please enter a valid email address.',
        messageSent: 'Your message has been sent. We\'ll get back to you soon.',
        somethingWrong: 'Something went wrong, try again. Error: '
    },

    // Default Toast dismissal time
    toastSpeed: 4000,

    // Google map position and zoom level
    googleMaps1: 
        {
            lat: 34.019376,
            lng: -118.502828,
            zoom: 15,
            marker: true,
            markerTitle: 'Chandigarh, India',
            stylesConfigFile: 'maps-apple-style.json'
        },
        
        googleMaps2:{
            lat: 30.675430,
            lng: 76.740548,
            zoom: 15,
            marker: true,
            markerTitle: 'Santa Monica, CA',
            stylesConfigFile: 'maps-apple-style.json'
        },
        googleMaps3:{
            lat: 12.973576,
            lng: 77.609238,
            zoom: 15,
            marker: true,
            markerTitle: 'Bangalore, India',
            stylesConfigFile: 'maps-apple-style.json'
        }
};
