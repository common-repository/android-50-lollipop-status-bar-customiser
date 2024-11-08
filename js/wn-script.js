// Credit to Mike Jolley for this code
// http://mikejolley.com/2012/12/using-the-new-wordpress-3-5-media-uploader-in-plugins/

// Uploading files
var file_frame;

jQuery('.upload_image_button').on('click', function( event ){

  event.preventDefault();

  // If the media frame already exists, reopen it.
  if ( file_frame ) {
    file_frame.open();
    return;
  }

  // Create the media frame.
  file_frame = wp.media.frames.file_frame = wp.media({
    title: jQuery( this ).data( 'uploader-title' ),
    button: {
      text: jQuery( this ).data( 'uploader-button-text' ),
    },
    multiple: false  // Set to true to allow multiple files to be selected
  });

  // When an image is selected, run a callback.
  file_frame.on( 'select', function() {
    // We set multiple to false so only get one image from the uploader
    attachment = file_frame.state().get('selection').first().toJSON();

    // Do something with attachment.id and/or attachment.url here
    jQuery('[name="wn_android_statusbar[android-icon]"]').val( attachment.url );
  });

  // Finally, open the modal
  file_frame.open();
});
