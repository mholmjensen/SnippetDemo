(function() {
	'use strict';

	angular.module('widget.service', [])
	/*
		Structure like a tree, with (currently) WidgetBrowserService being the root.
		This means all information flows from the root towards a leaf, and so the root has ownership of all data in Widget*Service
		If possible, avoid defining any functions in this file
	*/

	.factory('WidgetPaperService', function( WidgetBrowserService ) {
		//var service = {};
		//service.rawText = WidgetBrowserService.currentPaper.rawText; // TODO Copy or ref? Can just use currentPaper then
		return {};
	})

	.factory('WidgetCandidateService', function( WidgetBrowserService ) {
		//var service = {};
		//service.current = WidgetBrowserService.currentCandidate.current; // TODO Copy or ref? Can just use currentPaper then
		return {};
	})

	.factory('WidgetTransformationService', function( WidgetBrowserService ) {
		//var service = {};
		//service.replacements = WidgetBrowserService.currentTransformation.replacements; // TODO Copy or ref? Can just use currentPaper then
		return {};
	})


	.factory('WidgetBrowserService', function() {
		return {};
	})

	;

}());
