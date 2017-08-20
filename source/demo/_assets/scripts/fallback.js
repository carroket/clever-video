/*============================================================================*\

	JavaScript for Clever Video
	-----------------------------------------------------------------------
	© 2015-2017 by Carroket, Inc.
	https://carroket.com/
	-----------------------------------------------------------------------
	Made by Brian Sexton.
	https://briansexton.com/

\*============================================================================*/


/*----------------------------------------------------------------------------*\
	Fallback Behavior
\*----------------------------------------------------------------------------*/

window.addEventListener('load', function() {

	// If the layout width of a video iframe is zero then something seems to be
	// amiss. Specifically, flexible layout module support is probably borked.

	var borked = document.querySelector('.videos > .content iframe').offsetWidth === 0;

	if (borked) {

		// TO DO: Work around Internet Explorer's flexbox bugs.
		// Reference: https://github.com/philipwalton/flexbugs

		// Fall back to block display for now.

		document.querySelector('.videos > .content').style.display = 'block';
	}
});