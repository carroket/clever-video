# Clever Video

**Clean and Fast Video Display for Web Pages**

## Overview

Clever Video is a JavaScript, HTML5, and CSS 3 video-display library for the Web. It has several high-level goals:

* to improve user experiences involving video display, especially initial loading speed and responsiveness
* to make video-embedding clean, fast, and consistent
* to make videos integrate well into responsive designs
* to support both well-established and developing standards and movements such as ECMAScript (JavaScript), HTML5, CSS 3, and [Web components](https://webcomponents.org/)
* to enable clean and easy integration with other libraries such as [Cleverlay](https://cleverlay.com/)
* to evolve with the Web

While there is some overlap among those goals, each one has value apart from other goals and warrants its own consideration.

Clever Video is still very much a work in progress. It already uses [custom HTML elements](https://webcomponents.org/articles/introduction-to-custom-elements/), but for now it replaces them via [AngularJS](https://angularjs.org/). AngularJS may or may not be required for future versions.

## Live Demo

You can see a live demo running [here](http://carroket.github.io/clever-video/).

## Known Issues

* Internet Explorer does not display dynamically created iframes as expected.
* In browsers that *do* display dynamically created iframes as expected (e.g., Google Chrome, Mozilla Firefox, and Apple Safari), there can be a significant delay when loading several videos at once. This is not a problem specific to Clever Video, but one of the specific issues Clever Video is being made to address.
* Grunt does not yet do anything. Soon! :)

## Who is making this?

Clever Video is being made by [Brian Sexton](https://briansexton.com/) of [Carroket, Inc.](https://carroket.com/)