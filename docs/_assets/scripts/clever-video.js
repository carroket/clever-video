/*============================================================================*\

	JavaScript for Clever Video
	-----------------------------------------------------------------------
	© 2015-2017 by Carroket, Inc.
	https://carroket.com/
	-----------------------------------------------------------------------
	Made by Brian Sexton.
	https://briansexton.com/

 \*============================================================================*/


(function(document, angular, options) {

	var cleverVideo = new CleverVideo();

	function CleverVideo() {

		// TO DO: Consider whether any options should be addressed here.
	}

	// Let's keep our HTML5 valid. OR DIE TRYING.

	if (document.registerElement) {

		document.registerElement("clever-video");
	}

	// Create an AngularJS module.

	angular.module("cleverVideoModule", ["ngSanitize"])

		// Now let's paint a happy little directive.

		.directive("cleverVideo", function() {

			return {

				restrict: "EA",

				scope: {

					service: "@service",
					videoId: "@videoId",
					width: "@width",
					height: "@height",
					allowFullScreen: "@allowFullScreen"
				},

				// Note: templateUrl seems to be relative to the element
				// context. Yuck.

				// Also Note: The following path does not currently exist
				// anywhere in the library project.

				// TO DO: Try to make this more flexible without resorting to an absolute path, which could be problematic for non-root site deployment.
				//templateUrl: "_assets/modules/clever-video/video.html",

				template: '<div><iframe width="{{width}}" height="{{height}}" src="{{srcUrl}}" allowfullscreen></iframe></div>',

				replace: true,

				controller: function($scope, $sce) {

					$scope.srcUrl = "";

					if ($scope.service == "YouTube") {

						$scope.srcUrl = $sce.trustAsResourceUrl("https://www.youtube.com/embed/" + $scope.videoId);
					}
				},

				compile: function(element, attrs) {

					if (!attrs.width) { attrs.width = 640; }

					if (!attrs.height) { attrs.height = 360; }

					if (!attrs.allowFullScreen) { attrs.allowFullScreen = true; }
				}
			};
		});

	// If a namespace was specified, attach cleverVideo to it.

	if (options instanceof Object && options.namespace instanceof Object) {

		options.namespace.cleverVideo = cleverVideo;
	}

})(window.document, window.angular);