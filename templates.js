angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("app/content/content.tpl.html","<div class=\"woo-playground\"\n     woo-playground></div>\n<!-- add for instance debug woo directives next to playground -->\n");
$templateCache.put("app/menu/menu.tpl.html","<div role=\"navigation\" class=\"navbar navbar-default navbar-fixed-top\" id=\"woo-menu\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#site-menu-links\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" ui-sref=\"default\">\n        WooWidgets\n      </a>\n    </div>\n  </div>\n</div>\n");
$templateCache.put("app/content/playground/playground.tpl.html","<div class=\"row\">\n	<div class=\"col-md-10 col-md-offset-1\">\n		<div class=\"well well-sm\">\n			<div class=\"woo-toolbar\"\n					 woo-toolbar>\n			</div>\n		</div>\n	</div>\n</div>\n\n<div class=\"row\">\n	<div class=\"col-md-1 col-md-offset-1\">\n		<div class=\"panel panel-info\">\n			<div class=\"panel-heading\">Browser</div>\n			<div class=\"panel-body\">\n				<div class=\"woo-browser\"\n						 woo-browser\n						 files=\"browser.files\"\n						 transformation=\"transformation.currentTransformation\"\n						 candidate=\"candidate.currentCandidate\"\n						 paper=\"paper.currentPaper\">\n				</div>\n			</div>\n		</div>\n	</div>\n	<div class=\"col-md-3\">\n		<div class=\"panel panel-default\">\n			<div class=\"panel-heading\">Transformations</div>\n			<div class=\"panel-body\">\n				<div class=\"woo-transformation\"\n						 woo-transformation\n						 transformation=\"transformation.currentTransformation\"\n						 candidate=\"candidate.currentCandidate\">\n				</div>\n			</div>\n		</div>\n	</div>\n	<div class=\"col-md-6 col-md-offset-0\">\n		<div class=\"panel panel-info\">\n			<div class=\"panel-heading\">Paper</div>\n			<div class=\"panel-body\">\n				<div class=\"woo-paper\"\n						 woo-paper\n				     paper=\"paper.currentPaper\"\n						 transformation=\"transformation.currentTransformation\"\n						 candidate=\"candidate.currentCandidate\">\n				</div>\n			</div>\n		</div>\n	</div>\n</div>\n");
$templateCache.put("app/content/playground/browser/browser-file.tpl.html","\n{{file.name}}\n<span class=\"pull-right\">\n  <span class=\"glyphicon glyphicon-pencil\" aria-hidden=\"true\" ng-show=\"file.type === \'paper\'\"></span>\n  <span class=\"glyphicon glyphicon-cog\" aria-hidden=\"true\" ng-show=\"file.type === \'workbench\'\"></span>\n  <span class=\"glyphicon glyphicon-music\" aria-hidden=\"true\" ng-show=\"file.type === \'tabs\'\"></span>\n</span>\n<!-- TODO: modes for unsaved? recently edited? -->\n");
$templateCache.put("app/content/playground/browser/browser.tpl.html","<ul class=\"list-group woo-browser-file-list\"\n    dnd-list=\"{{files}}\"\n    ng-init=\"playgroundBrowserCtrl.list.selected(files[0])\">\n    <!-- The dnd-draggable directive makes an element draggable and will\n         transfer the object that was assigned to it. If an element was\n         dragged away, you have to remove it from the original list\n         yourself using the dnd-moved attribute -->\n    <li ng-repeat=\"file in files\"\n        dnd-draggable=\"file\"\n        dnd-moved=\"playgroundBrowserCtrl.list.moved(event, $index, file)\"\n        dnd-effect-allowed=\"move\"\n        dnd-selected=\"playgroundBrowserCtrl.list.selected(file)\"\n        class=\"list-group-item\"\n        ng-class=\"{\'active\': playgroundBrowserCtrl.status.selected === file}\"\n        >\n        <span woo-browser-file\n              file=\"file\">\n        </span>\n    </li>\n</ul>\n");
$templateCache.put("app/content/playground/paper/line.tpl.html","\n<span class=\"woo-word\" woo-word\n      ng-repeat=\"word in letters | substitute: transformation.replacements | lettersToWords track by $index\"\n      word=\"{{word}}\"\n      transformation=\"transformation\"\n      candidate=\"candidate\"\n      >\n</span>\n");
$templateCache.put("app/content/playground/paper/paper.tpl.html","<div>\n  <button type=\"button\" class=\"btn btn-primary btn-sm woo-btn-paper-mode\" ng-model=\"isViewing\" btn-checkbox  btn-checkbox-true=\"1\" btn-checkbox-false=\"0\" ng-click=\"isViewing=!isViewing\">\n    <span ng-show=\"!isViewing\"><span class=\"glyphicon glyphicon-pencil\" aria-hidden=\"true\"></span></span>\n    <span ng-show=\"isViewing\"><span class=\"glyphicon glyphicon-eye-open\" aria-hidden=\"true\"></span></span>\n  </button>\n</div>\n<div>\n  <blockquote class=\"small woo-paper-blockquote\" ng-show=\"!isViewing\">\n\n    <div  class=\"woo-line\" woo-line\n          ng-repeat=\"line in paper.rawText | rawToLines track by $index\"\n          number=\"{{$index}}\"\n          letters=\"{{line}}\"\n          candidate=\"candidate\"\n          transformation=\"transformation\"\n          ng-attr-class=\"{{line.length == 0 && \'woo-line-empty\' || \'woo-line\' }}\"\n          >\n    </div>\n  </blockquote>\n  <textarea class=\"form-control input-sm small woo-paper-textarea msd-elastic\"\n            rows=\"{{ ( paper.rawText | rawToLines ).length }}\"\n            ng-show=\"isViewing\"\n            ng-model=\"paper.rawText\">\n  </textarea>\n</div>\n");
$templateCache.put("app/content/playground/paper/word.tpl.html","<span ng-click=\"candidate.current.from = word\"\n      ng-bind-html=\"word | highlight: transformation.highlight | html \">\n</span>\n<!--      ng-click=\"widgetPaperCtrl.lineClicked( number )\"\n      ng-bind-html=\"letters |\n                     substitute: widgetPaperCtrl.transformation.replacements |\n                     highlight: widgetPaperCtrl.transformation.active |\n                     highlight: widgetPaperCtrl.candidate.current |\n                     html\">\n</span>\n&zwnj;\n-->\n");
$templateCache.put("app/content/playground/toolbar/toolbar.tpl.html","<div class=\"btn-group\">\n  <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">\n    <span class=\"caret\"></span>\n  </button>\n  <ul class=\"dropdown-menu\" role=\"menu\">\n    <li><a href=\"#\">Active Widgets</a></li>\n    <li class=\"divider\"></li>\n    <li><a href=\"#\">About</a></li>\n  </ul>\n\n  <button type=\"button\" class=\"btn btn-default\" aria-expanded=\"false\" ng-model=\"toolbar.active\" ng-click=\"\">\n    <span class=\"glyphicon glyphicon-plus\"></span> New\n  </button>\n</div>\n");
$templateCache.put("app/content/playground/transformation/candidate.tpl.html","<div class=\"input-group input-group-sm\">\n  <div class=\"input-group-btn\">\n    <button type=\"button\" class=\"btn btn-default btn-sm\"\n            data-toggle=\"tooltip\" data-placement=\"bottom\" aria-expanded=\"false\">\n      <span class=\"glyphicon glyphicon-question-sign\" aria-hidden=\"true\"></span>\n    </button>\n  </div>\n  <span class=\"input-group-addon text-left\" style=\"width: 120px; text-align: left;\">{{candidate.current.from}}</span>\n  <input type=\"text\" class=\"form-control\" aria-label=\"...\" placeholder=\"Click paper\"\n          ng-model=\"candidate.current.to\"\n          >\n  <div class=\"input-group-btn\">\n    <button type=\"button\" class=\"btn btn-suggested btn-sm\" aria-label=\"\"\n            ng-click=\"addCandidate( candidate.current.from, candidate.current.to )\">\n      <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span>\n    </button>\n  </div>\n</div>\n");
$templateCache.put("app/content/playground/transformation/transformation.tpl.html","<div class=\"input-group input-group-sm\" ng-repeat=\"replacement in transformation.replacements\">\n  <div class=\"input-group-btn\">\n    <button type=\"button\" class=\"btn btn-default btn-sm dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">\n      <span class=\"glyphicon glyphicon-cog\" aria-hidden=\"true\"></span>\n    </button>\n    <ul class=\"dropdown-menu\" role=\"menu\">\n      <li><a href=\"#\">Textarea</a></li>\n      <li class=\"divider\"></li>\n      <li><a href=\"#\">Markdown</a></li>\n    </ul>\n  </div>\n  <span class=\"input-group-addon text-left\" style=\"width: 120px; text-align: left;\"\n        ng-click=\"transformation.highlight = replacement\">\n        {{replacement.from}}\n  </span>\n  <input type=\"text\" class=\"form-control\" aria-label=\"...\"\n          ng-model=\"replacement.to\"\n          ng-click=\"transformation.highlight = replacement\"\n          >\n  <div class=\"input-group-btn\">\n    <button type=\"button\" class=\"btn btn-default btn-sm\" aria-label=\"Left Align\"\n            ng-model=\"replacement.enabled\"\n            ng-click=\"replacement.enabled = !replacement.enabled\">\n      <span class=\"glyphicon glyphicon-ok\" aria-hidden=\"true\"\n            ng-show=\"replacement.enabled\"></span>\n      <span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"\n            ng-show=\"!replacement.enabled\"></span>\n    </button>\n  </div>\n\n</div>\n<div style=\"height: 10px\">\n</div>\n<div class=\"woo-candidate\"\n     woo-candidate\n     candidate=\"candidate\"\n     transformation=\"transformation\">\n</div>\n");}]);