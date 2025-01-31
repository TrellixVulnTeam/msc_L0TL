function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-default\" role=\"navigation\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <li routerLinkActive=\"active\"><a routerLink=\"/mySpace\">Home</a></li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"navbar-collapse collapse\">\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n        <li routerLinkActive=\"active\"><a routerLink=\"/services\">Nos offres et services</a></li>\r\n        <li routerLinkActive=\"active\"><a routerLink=\"/howItWorks\">Comment ça marche</a></li>\r\n<!--        <li routerLinkActive=\"active\"><a>{{ pseudo }}Menu</a></li>-->\r\n        <li routerLinkActive=\"active\" *ngIf=\"isLoggedIn()\"><a (click)=\"signOut()\">Déconnexion</a></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signin/signin.component.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signin/signin.component.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthSigninSigninComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\r\n  <div class=\"col-sm-3 col-sm-offset-4\">\r\n    <form [formGroup]=\"signinForm\" (ngSubmit)=\"onSubmit()\">\r\n      <div class=\"form-group\">\r\n        <label for=\"email\">Adresse mail</label>\r\n        <input type=\"text\" id=\"email\" class=\"form-control\" formControlName=\"email\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"password\">Mot de passe</label>\r\n        <input type=\"password\" id=\"password\" class=\"form-control\" formControlName=\"password\">\r\n      </div>\r\n      <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"signinForm.invalid\">Connecter</button>\r\n      <a routerLink=\"/signup\">S'inscrire</a>\r\n    </form>\r\n    <p class=\"text-danger\">{{ errorMessage }}</p>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthSignupSignupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\r\n  <div class=\"col-sm-3 col-sm-offset-2\">\r\n    <h2>Créer un compte</h2>\r\n    <form [formGroup]=\"signupForm\" (ngSubmit)=\"onSubmit()\">\r\n      <div class=\"form-group\">\r\n        <label for=\"displayName\">Pseudo</label>\r\n        <input type=\"text\" id=\"displayName\" class=\"form-control\" formControlName=\"displayName\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <input type=\"radio\" id=\"client\" formControlName=\"profile\" value=\"C\">\r\n        <label for=\"client\">Client</label><br>\r\n        <input type=\"radio\" id=\"owner\" formControlName=\"profile\" value=\"O\">\r\n        <label for=\"owner\">Propriétaire</label><br>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"email\">Adresse mail</label>\r\n        <input type=\"text\" id=\"email\" class=\"form-control\" formControlName=\"email\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"password\">Mot de passe</label>\r\n        <input type=\"password\" id=\"password\" class=\"form-control\" formControlName=\"password\">\r\n      </div>\r\n      <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"signupForm.invalid\">Créer mon compte</button>\r\n    </form>\r\n    <p class=\"text-danger\">{{ errorMessage }}</p>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/event/event.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/event/event.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEventEventComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row eventBlock\">\r\n  <div class=\"col-md-2\" (click)=\"goToRoom(event)\">\r\n    <img src=\"assets/img/appli.png\" alt=\"photo de l'évènement\">\r\n  </div>\r\n  <div class=\"col-md-5\" (click)=\"goToRoom(event)\">\r\n    <span>{{event.name}}</span><br>\r\n    {{event.startDate | date : \"dd/MM/yyyy\"}}<br>\r\n    {{event.guestNumber}}<br>\r\n    4 000 000 fcfa\r\n  </div>\r\n  <div class=\"col-md-2\" (click)=\"goToRoom(event)\">\r\n    {{event.where}}<br>\r\n    Douala, Cameroun\r\n  </div>\r\n  <div class=\"col-md-3\" style=\"height: 110px;\">\r\n    <div #map class=\"map\">Map is loading</div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/my-event/my-event.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/my-event/my-event.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMyEventMyEventComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n  <div><h2><span>></span> {{event.name}}</h2></div>\r\n  <div class=\"row\">\r\n    <div class=\"col-5\">\r\n      <div class=\"row\">\r\n        <div class=\"col-6\">\r\n          <label>Date :</label>\r\n        </div>\r\n        <div class=\"col-6\">\r\n          <!--<div class=\"input-group\">\r\n            <input class=\"form-control\" uib-datepicker-popup=\"dd/MM/yyyy\" ng-model=\"event.startDate\" is-open=\"popup.opened\" datepicker-options=\"dateOptions\" close-text=\"Close\" />\r\n            <span class=\"input-group-btn\" style=\"padding-bottom: 10px;\">\r\n              <button type=\"button\" class=\"btn btn-default\" ng-click=\"open()\"><i class=\"glyphicon glyphicon-calendar\"></i></button>\r\n            </span>\r\n          </div>-->\r\n          <!--<input class=\"form-control\" ng-model=\"event.startDate | date : 'dd/MM/yyyy'\" disabled>-->\r\n          {{event.startDate | date : \"dd/MM/yyyy hh:mm\"}}\r\n        </div><!--\r\n        <div class=\"col-xs-2\">\r\n          <input class=\"form-control\" ng-model=\"event.startDate | date : 'hh'\" disabled>\r\n        </div>\r\n        <div class=\"col-xs-2\">\r\n          <input class=\"form-control\" ng-model=\"event.startDate | date : 'mm'\" disabled>\r\n        </div>-->\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-4\">\r\n          <label>Nombre d'invités :</label>\r\n        </div>\r\n        <div class=\"col-4\">\r\n          <!--<input class=\"form-control\" type=\"number\" min=\"1\" id=\"ex2\" ng-model=\"event.guestNumber\" disabled>-->\r\n          {{event.guestNumber}}\r\n        </div>\r\n      </div>\r\n      <!--<div class=\"row\">\r\n        <div class=\"col-xs-4\">\r\n          <label>Budget :</label>\r\n        </div>\r\n        <div class=\"col-xs-4\">\r\n          <input class=\"form-control\" type=\"number\" min=\"1\" id=\"ex3\" disabled>\r\n        </div>\r\n        <div class=\"col-xs-2\">\r\n          F cfa\r\n        </div>\r\n      </div>-->\r\n    </div>\r\n    <div class=\"col-4\">\r\n      <div class=\"row\">\r\n        <div class=\"col-6\" style=\"text-align: right;\">\r\n          <label>Lieu :</label>\r\n        </div>\r\n        <div class=\"col-6\">\r\n          <!--<textarea class=\"form-control\" name=\"place\" ng-model=\"event.where\" disabled></textarea>-->\r\n          {{event.where}}\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-6\" style=\"text-align: right;\">\r\n          <label>Organisateur (trice) :</label>\r\n        </div>\r\n        <div class=\"col-6\">\r\n          <!--<input class=\"form-control\" name=\"planner\" ng-model=\"event.owner\" disabled>-->\r\n          {{event.owner}}\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-3\">\r\n      <div align=\"center\">\r\n        <img alt=\"User Pic\" src=\"https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg\" id=\"profile-image1\" class=\"img-circle img-responsive\">\r\n        <input id=\"profile-image-upload\" class=\"hidden\" type=\"file\">\r\n        <div style=\"color:#999;\" >Cliquer ici pour changer la photo</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <br>\r\n  <!--<div class=\"tab-content\">\r\n    <div id=\"homeBar\" class=\"row\">\r\n      <div class=\"col-md-5\" style=\"margin-top: 7px;\">\r\n        <span>{{evtName}}</span>\r\n      </div>\r\n      <div class=\"btn-group col-md-3\">\r\n        <label class=\"btn btn-primary\" id=\"DMBack\" ng-class=\"{'active':!isFullScreen}\">\r\n          <input type=\"radio\" name=\"options\" autocomplete=\"off\" value=\"DMBack\" ng-model=\"displayMode\" ng-checked=\"!isFullScreen\">Backend\r\n        </label>\r\n        <label class=\"btn btn-primary\" id=\"DMFront\" ng-class=\"{'active':isFullScreen}\">\r\n          <input type=\"radio\" name=\"options\" autocomplete=\"off\" value=\"DMFront\" ng-model=\"displayMode\" ng-click=\"goFullScreen()\" ng-checked=\"isFullScreen\">Frontend\r\n        </label>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <button class=\"btn btn-large btn-primary\" ng-click=\"saveMap()\">Sauvegarder</button>\r\n        <button class=\"btn btn-large btn-primary\">Print</button>\r\n        &lt;!&ndash;<label class=\"btn btn-primary\">\r\n          Importer&hellip; <input type=\"file\" style=\"display: none;\">\r\n        </label>&ndash;&gt;\r\n        &lt;!&ndash;<input type=\"file\" id =\"importFile\" />&ndash;&gt;\r\n        <button class=\"btn btn-large btn-primary\" data-toggle=\"modal\" data-target=\"#importModal\">Importer</button>\r\n      </div>\r\n      <div class=\"col-md-1\">\r\n        <span> 14 tables <br> 30 places</span>\r\n      </div>\r\n    </div>\r\n  </div>-->\r\n\r\n  <nav ngbNav #nav=\"ngbNav\" class=\"nav-tabs\">\r\n    <ng-container ngbNavItem>\r\n      <a ngbNavLink>Liste des Invités</a>\r\n      <ng-template ngbNavContent>\r\n        <div class=\"row\">\r\n          <div class=\"form-group col-md-2 col-sm-3\">\r\n            <input class=\"form-control\" ng-model=\"searchedGuest\" placeholder=\"Rechercher\"/>\r\n            <i class=\"glyphicon glyphicon-search\"></i>\r\n          </div>\r\n          <!--<div class=\"form-group col-xs-2\">\r\n            <button class=\"btn btn-large btn-primary\" ng-click=\"addGuest()\">Nouveau invité</button>\r\n          </div>-->\r\n        </div>\r\n\r\n        <div ng-repeat=\"guest in guests | orderBy:['firstName','name','title','position'] | searchedGuestFilter:searchedGuest\">\r\n          <div class=\"row guestBlock\" ng-click=\"\">\r\n            <div class=\"col col-md-2 col-sm-1\">\r\n              <i class=\"cui-user-female\"></i>\r\n            </div>\r\n            <div class=\"col col-md-3 col-sm-3\">\r\n              <!--            <span>{{guest.name}} {{guest.firstName}}</span>-->\r\n            </div>\r\n            <div class=\"col col-md-2 col-sm-3\">\r\n              <!--            <i class=\"cui-screen-smartphone\"></i>&nbsp;{{guest.phoneNumber}}-->\r\n            </div>\r\n            <div class=\"col col-md-2 col-sm-2\">\r\n              <!--            <i class=\"cui-envelope-closed\"></i>&nbsp;{{guest.email}}-->\r\n            </div>\r\n            <div class=\"col col-md-3 col-sm-3\">\r\n              <!--            <i class=\"cui-location-pin\"></i>&nbsp;Table {{guest.table}}, place {{guest.seat}}-->\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row guestInfoBlock\">\r\n            <div class=\"col-md-2\" ng-click=\"goToRoom(event)\">\r\n              <img src=\"assets/img/appli.png\" alt=\"\">\r\n            </div>\r\n            <div class=\"form-group col-md-10\">\r\n              <div class=\"row\">\r\n                <div class=\"col col-md-2 col-sm-2\">\r\n                  <div class=\"row\"><label>Nom :</label></div>\r\n                </div>\r\n                <div class=\"col col-md-2 col-sm-2\">\r\n                  <div class=\"row\"><input class=\"form-control\" name=\"lastName\" placeholder=\"Nom\" required></div>\r\n                </div>\r\n                <div class=\"col col-md-2 col-sm-2\">\r\n                  &nbsp;\r\n                </div>\r\n                <div class=\"col col-md-2 col-sm-2\">\r\n                  <div class=\"row\"><label>Téléphone :</label></div>\r\n                </div>\r\n                <div class=\"col col-md-2 col-sm-2\">\r\n                  <div class=\"row\"><input class=\"form-control\" name=\"phoneNunmber\" placeholder=\"Téléphone\" required></div>\r\n                </div>\r\n                <div class=\"col col-md-1 col-sm-1\">\r\n                  &nbsp;\r\n                </div>\r\n                <div class=\"col col-md-1 col-sm-1\">\r\n                  &nbsp;\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col col-md-2 col-sm-2\">\r\n                  <div class=\"row\"><label>Prénom :</label></div>\r\n                </div>\r\n                <div class=\"col col-md-2 col-sm-2\">\r\n                  <div class=\"row\"><input class=\"form-control\" name=\"firstName\" placeholder=\"Prénom\" required></div>\r\n                </div>\r\n                <div class=\"col col-md-2 col-sm-2\">\r\n                  &nbsp;\r\n                </div>\r\n                <div class=\"col col-md-2 col-sm-2\">\r\n                  <div class=\"row\"><label>Email :</label></div>\r\n                </div>\r\n                <div class=\"col col-md-2 col-sm-2\">\r\n                  <div class=\"row\"><input class=\"form-control\" name=\"email\" placeholder=\"Email\" required></div>\r\n                </div>\r\n                <div class=\"col col-md-1 col-sm-1\">\r\n                  &nbsp;\r\n                </div>\r\n                <div class=\"col col-md-1 col-sm-1\">\r\n                  &nbsp;\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col col-md-2 col-sm-2\">\r\n                  <div class=\"row\"><label>Sexe :</label></div>\r\n                </div>\r\n                <div class=\"col col-md-2 col-sm-2\">\r\n                  <div class=\"row\"><input class=\"form-control\" name=\"sexe\" placeholder=\"Sexe\" required></div>\r\n                </div>\r\n                <div class=\"col col-md-2 col-sm-2\">\r\n                  &nbsp;\r\n                </div>\r\n                <div class=\"col col-md-2 col-sm-2\">\r\n                  <div class=\"row\"><label>Table :</label></div>\r\n                </div>\r\n                <div class=\"col col-md-2 col-sm-2\">\r\n                  <div class=\"row\"><input class=\"form-control\" name=\"position\" placeholder=\"Numéro de table\" required></div>\r\n                </div>\r\n                <div class=\"col col-md-1 col-sm-1\">\r\n                  &nbsp;\r\n                </div>\r\n                <div class=\"col col-md-1 col-sm-1\">\r\n                  <i class=\"glyphicon glyphicon-ok\" style=\"color: #337ab7;\"></i>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col col-md-2 col-sm-2\">\r\n                  <div class=\"row\"><label>Date de naissance :</label></div>\r\n                </div>\r\n                <div class=\"col col-md-2 col-sm-2\">\r\n                  <div class=\"row\"><input class=\"form-control\" name=\"birthday\" placeholder=\"Date de naissance\" required></div>\r\n                </div>\r\n                <div class=\"col col-md-2 col-sm-2\">\r\n                  &nbsp;\r\n                </div>\r\n                <div class=\"col col-md-2 col-sm-2\">\r\n                  <div class=\"row\"><label>Accompagné(e) de :</label></div>\r\n                </div>\r\n                <div class=\"col col-md-2 col-sm-2\">\r\n                  <div class=\"row\"><input class=\"form-control\" name=\"friend\" placeholder=\"Avec\" required></div>\r\n                </div>\r\n                <div class=\"col col-md-1 col-sm-1\">\r\n                  &nbsp;\r\n                </div>\r\n                <div class=\"col col-md-1 col-sm-1\">\r\n                  <i class=\"glyphicon glyphicon-trash\"></i>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n    </ng-container>\r\n    <ng-container ngbNavItem>\r\n      <a ngbNavLink>Plan de table</a>\r\n      <ng-template ngbNavContent>\r\n        <div class=\"dropdown\">\r\n          <button class=\"btn btn-default dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">Ajouter une table\r\n            <span class=\"caret\"></span></button>\r\n          <ul class=\"dropdown-menu\">\r\n            <li class=\"dropdown-submenu\">\r\n              <a tabindex=\"-1\" href=\"#\">Rectangle<span class=\"caret\"></span></a>\r\n              <ul class=\"dropdown-menu\">\r\n                <li><a tabindex=\"-1\" href=\"#\" ng-click=\"addTable('R3')\">3 places</a></li>\r\n                <li><a tabindex=\"-1\" ng-click=\"addTable('R4')\">4 places</a></li>\r\n                <li><a tabindex=\"-1\" ng-click=\"addTable('R6')\">6 places</a></li>\r\n                <li><a tabindex=\"-1\" ng-click=\"addTable('R8')\">8 places</a></li>\r\n              </ul>\r\n            </li>\r\n            <li class=\"dropdown-submenu\">\r\n              <a tabindex=\"-1\" href=\"#\">Ronde<span class=\"caret\"></span></a>\r\n              <ul class=\"dropdown-menu\">\r\n                <li><a tabindex=\"-1\" href=\"#\" ng-click=\"addTable('C8')\">8 places</a></li>\r\n              </ul>\r\n            </li>\r\n          </ul>\r\n          <button ng-click=\"triggerPosition()\">Déclencher la position</button><br/>\r\n        </div>\r\n\r\n        <div id=\"myFlexDiv\">\r\n          <!--<div id=\"myGuests\"></div>-->\r\n          <gojs-palette #myPalette [initPalette]='initPalette' [divClassName]='paletteDivClassName' [nodeDataArray]='paletteNodeData'\r\n                        [linkDataArray]='paletteLinkData' [modelData]='paletteModelData' (modelChange)='paletteModelChange($event)' [skipsPaletteUpdate]='skipsPaletteUpdate'></gojs-palette>\r\n\r\n          <!-- a go-diagram element referring to the model, originally written as: -->\r\n          <!-- &lt;go-diagram go-model=\"model\" style=\"border: solid 1px blue; width:100%; height:400px\"&gt;&lt;/go-diagram&gt; -->\r\n          <!--<app-go-diagram go-model=\"model\" guest-list=\"guestList\" ng-model=\"map\" style=\"border: solid 1px black;\"></app-go-diagram>-->\r\n          <gojs-diagram #myDiagram [initDiagram]='initDiagram' [nodeDataArray]='diagramNodeData' [linkDataArray]='diagramLinkData'\r\n                        [divClassName]='diagramDivClassName' [modelData]='diagramModelData' [skipsDiagramUpdate]='skipsDiagramUpdate'\r\n                        (modelChange)='diagramModelChange($event)'>\r\n          </gojs-diagram>\r\n        </div>\r\n\r\n        Overview\r\n        <gojs-overview #myOverview [initOverview]='initOverview' [divClassName]='oDivClassName' [observedDiagram]='observedDiagram'></gojs-overview>\r\n\r\n        <!--&lt;!&ndash;list guest : {{guestList.nodeDataArray}}\r\n        <br/>\r\n        guest selected : {{guestList.selectedNodeData}}\r\n        <br/>\r\n        Number of node data: {{model.nodeDataArray.length}}\r\n        <br />\r\n        Alpha node location: {{model.findNodeDataForKey(1).loc}}\r\n        <br />\r\n        Selected node: {{model.selectedNodeData.key}} <input ng-model=\"model.selectedNodeData.name\"/>\r\n        <br />\r\n        Number of link data: {{model.linkDataArray.length}}\r\n        <br/>\r\n        model.nodeDataArray : {{model.nodeDataArray}}-->\r\n        <br/>\r\n        model : {{model}}&ndash;&gt;\r\n        <div id=\"savedModel\"></div>\r\n        <p>\r\n          You can also replace the <a>Diagram.model</a> just by setting the \"model\" property on the $scope,\r\n          since the \"goDiagram\" directive watches that property for changes.\r\n        </p>\r\n        <button (click)=\"replaceModel()\">Replace Model</button>\r\n      </ng-template>\r\n    </ng-container>\r\n  </nav>\r\n\r\n  <div [ngbNavOutlet]=\"nav\" class=\"mt-2\"></div>\r\n\r\n  <div class=\"modal fade\" id=\"importModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"importModalLabel\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\" id=\"importModalLabel\">Information</h5>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span>&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"input-group\">\r\n            <label class=\"input-group-btn\">\r\n            <span class=\"btn btn-primary\">\r\n                Browse&hellip; <input type=\"file\" style=\"display: none;\" multiple>\r\n            </span>\r\n            </label>\r\n            <input class=\"form-control\" readonly>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Annuler</button>\r\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"import()\">Valider</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n<!--</div>-->\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/myspace/myspace.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/myspace/myspace.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMyspaceMyspaceComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2>Mes évènements</h2>\r\n\r\n<form [formGroup]=\"codeForm\" (ngSubmit)=\"saveEvent()\">\r\n\t<div class=\"form-group row\">\r\n\t\t<div class=\"col-sm-3\">\r\n\t\t  <input id=\"code\" class=\"form-control\" formControlName=\"code\" placeholder=\"Entrer le code de l'évènement\">\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-2\">\r\n\t\t\t<button type=\"submit\" class=\"btn btn-success\" [disabled]=\"codeForm.invalid\">Ajouter</button>\r\n\t\t</div>\r\n\t</div>\r\n</form>\r\n\r\n<!-- <mat-tab-group mat-align-tabs=\"start\">\r\n  <mat-tab label=\"First\">Content 1</mat-tab>\r\n  <mat-tab label=\"Second\">Content 2</mat-tab>\r\n  <mat-tab label=\"Third\">Content 3</mat-tab>\r\n</mat-tab-group> -->\r\n\r\n<mat-tab-group mat-align-tabs=\"center\" [selectedIndex]=\"selectedIndex\" (selectedIndexChange)=\"changeTab($event)\">\r\n  <mat-tab label=\"Tous\">\r\n\t  <app-event *ngFor=\"let event of evtsPromise | async | orderBy:orderList:true:true | filterBy : nameFilter\" [event]=\"event\"></app-event>\r\n  </mat-tab>\r\n  <mat-tab label=\"En cours\">\r\n  \t<app-event *ngFor=\"let event of evtsInProgressPromise | async | orderBy:orderList:true:true | filterBy : nameFilter\" [event]=\"event\"></app-event>\r\n  </mat-tab>\r\n  <mat-tab label=\"terminés\">\r\n  \t<app-event *ngFor=\"let event of evtsDonePromise | async | orderBy:orderList:true:true | filterBy : nameFilter\" [event]=\"event\"></app-event>\r\n  </mat-tab>\r\n</mat-tab-group>\r\n\r\n<!-- <mat-tab-group mat-align-tabs=\"end\">\r\n  <mat-tab label=\"First\">Content 1</mat-tab>\r\n  <mat-tab label=\"Second\">Content 2</mat-tab>\r\n  <mat-tab label=\"Third\">Content 3</mat-tab>\r\n</mat-tab-group> -->\r\n\r\n<!-- <mat-slider min=\"1\" max=\"100\" step=\"1\" value=\"1\"></mat-slider> -->\r\n";
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/auth.service */
    "./src/app/services/auth.service.ts"); // import { User } from './models/user';


    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(authService) {
        _classCallCheck(this, AppComponent);

        this.authService = authService;
        this.title = 'msc';
      }
      /*ngOnInit() {
        this.userSubscription = this.authService.userSubject.subscribe(
          (user: User) => {
            // this.pseudo = user.getPseudo();
          });
      }*/

      /*ngOnDestroy() {
        this.userSubscription.unsubscribe();
      }*/


      _createClass(AppComponent, [{
        key: "signOut",
        value: function signOut() {
          this.authService.SignOut();
        }
      }, {
        key: "isLoggedIn",
        value: function isLoggedIn() {
          return this.authService.isLoggedIn;
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/tabs.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/slider.js");
    /* harmony import */


    var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-order-pipe */
    "./node_modules/ngx-order-pipe/__ivy_ngcc__/fesm2015/ngx-order-pipe.js");
    /* harmony import */


    var ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-filter-pipe */
    "./node_modules/ngx-filter-pipe/__ivy_ngcc__/esm2015/ngx-filter-pipe.js");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./guards/auth.guard */
    "./src/app/guards/auth.guard.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./auth/signin/signin.component */
    "./src/app/auth/signin/signin.component.ts");
    /* harmony import */


    var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./auth/signup/signup.component */
    "./src/app/auth/signup/signup.component.ts");
    /* harmony import */


    var _myspace_myspace_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./myspace/myspace.component */
    "./src/app/myspace/myspace.component.ts");
    /* harmony import */


    var _event_event_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./event/event.component */
    "./src/app/event/event.component.ts");
    /* harmony import */


    var _pipes_event_filter_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./pipes/event-filter.pipe */
    "./src/app/pipes/event-filter.pipe.ts");
    /* harmony import */


    var gojs_angular__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! gojs-angular */
    "./node_modules/gojs-angular/__ivy_ngcc__/fesm2015/gojs-angular.js");
    /* harmony import */


    var _my_event_my_event_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./my-event/my-event.component */
    "./src/app/my-event/my-event.component.ts");
    /*import { MatButtonModule, MatCheckboxModule } from '@angular/material';*/


    var appRoutes = [{
      path: 'signin',
      component: _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_16__["SigninComponent"]
    }, {
      path: 'signup',
      component: _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_17__["SignupComponent"]
    }, {
      path: 'signout',
      component: _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_17__["SignupComponent"]
    }, {
      path: 'mySpace',
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]],
      component: _myspace_myspace_component__WEBPACK_IMPORTED_MODULE_18__["MyspaceComponent"]
    }, {
      path: 'myEvent',
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]],
      component: _my_event_my_event_component__WEBPACK_IMPORTED_MODULE_22__["MyEventComponent"]
    }, {
      path: '',
      redirectTo: 'mySpace',
      pathMatch: 'full'
    }, {
      path: '**',
      redirectTo: 'mySpace'
    }];

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"], _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_16__["SigninComponent"], _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_17__["SignupComponent"], _myspace_myspace_component__WEBPACK_IMPORTED_MODULE_18__["MyspaceComponent"], _event_event_component__WEBPACK_IMPORTED_MODULE_19__["EventComponent"], _pipes_event_filter_pipe__WEBPACK_IMPORTED_MODULE_20__["EventFilterPipe"], _my_event_my_event_component__WEBPACK_IMPORTED_MODULE_22__["MyEventComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_10__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].firebase), _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__["AngularFirestoreModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes, {
        relativeLinkResolution: 'legacy'
      }), _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__["MatSliderModule"],
      /*MatButtonModule,
      MatCheckboxModule,*/
      ngx_order_pipe__WEBPACK_IMPORTED_MODULE_8__["OrderModule"], ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["FilterPipeModule"], gojs_angular__WEBPACK_IMPORTED_MODULE_21__["GojsAngularModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/auth/signin/signin.component.css":
  /*!**************************************************!*\
    !*** ./src/app/auth/signin/signin.component.css ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthSigninSigninComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvc2lnbmluL3NpZ25pbi5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/auth/signin/signin.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/auth/signin/signin.component.ts ***!
    \*************************************************/

  /*! exports provided: SigninComponent */

  /***/
  function srcAppAuthSigninSigninComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SigninComponent", function () {
      return SigninComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts"); // import { User } from '../../models/user';


    var SigninComponent = /*#__PURE__*/function () {
      function SigninComponent(formBuilder, authService, router) {
        _classCallCheck(this, SigninComponent);

        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
      }

      _createClass(SigninComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initForm();
        }
      }, {
        key: "initForm",
        value: function initForm() {
          this.signinForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/[0-9a-zA-Z]{6,}/)]]
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this = this;

          var email = this.signinForm.value.email;
          var password = this.signinForm.value.password;
          this.authService.SignIn(email, password).then(function () {// this.router.navigate(['/mySpace']);
          }, function (error) {
            _this.errorMessage = error;
          });
        }
      }]);

      return SigninComponent;
    }();

    SigninComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    SigninComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signin',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./signin.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signin/signin.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./signin.component.css */
      "./src/app/auth/signin/signin.component.css"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], SigninComponent);
    /***/
  },

  /***/
  "./src/app/auth/signup/signup.component.css":
  /*!**************************************************!*\
    !*** ./src/app/auth/signup/signup.component.css ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthSignupSignupComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/auth/signup/signup.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/auth/signup/signup.component.ts ***!
    \*************************************************/

  /*! exports provided: SignupComponent */

  /***/
  function srcAppAuthSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts"); // import { User } from '../../models/user';


    var SignupComponent = /*#__PURE__*/function () {
      function SignupComponent(formBuilder, authService, router) {
        _classCallCheck(this, SignupComponent);

        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
      }

      _createClass(SignupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initForm();
        }
      }, {
        key: "initForm",
        value: function initForm() {
          this.signupForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/[0-9a-zA-Z]{6,}/)]],
            displayName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(15)]],
            profile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            /*, Validators.maxLength(1), Validators.pattern(/[A-Z]/)*/
            ]]
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this2 = this;

          this.authService.SignUp(this.signupForm.value).then(function () {
            _this2.router.navigate(['/mySpace']);
          }, function (error) {
            _this2.errorMessage = error;
          });
        }
      }]);

      return SignupComponent;
    }();

    SignupComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    SignupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signup',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./signup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./signup.component.css */
      "./src/app/auth/signup/signup.component.css"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], SignupComponent);
    /***/
  },

  /***/
  "./src/app/event/event.component.css":
  /*!*******************************************!*\
    !*** ./src/app/event/event.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppEventEventComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "span {\r\n  color: #cf6515;\r\n}\r\n\r\nimg {\r\n  width: 100%;\r\n}\r\n\r\n.eventBlock {\r\n  border: 1px solid #e6e6e6;\r\n  padding: 5px;\r\n  margin-bottom: 8px;\r\n  margin-right: 0px;\r\n  margin-left: 0px;\r\n  box-shadow: 8px 8px 7px #aaa;\r\n\tcursor: pointer;\r\n}\r\n\r\n.map {\r\n  height: 100%;\r\n  border: 1px solid #e6e6e6;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXZlbnQvZXZlbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLDRCQUE0QjtDQUM3QixlQUFlO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2V2ZW50L2V2ZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzcGFuIHtcclxuICBjb2xvcjogI2NmNjUxNTtcclxufVxyXG5cclxuaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmV2ZW50QmxvY2sge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNmU2ZTY7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxuICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIGJveC1zaGFkb3c6IDhweCA4cHggN3B4ICNhYWE7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubWFwIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2U2ZTZlNjtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/event/event.component.ts":
  /*!******************************************!*\
    !*** ./src/app/event/event.component.ts ***!
    \******************************************/

  /*! exports provided: EventComponent */

  /***/
  function srcAppEventEventComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventComponent", function () {
      return EventComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var EventComponent = /*#__PURE__*/function () {
      function EventComponent(router) {
        _classCallCheck(this, EventComponent);

        this.router = router;
        this.uluru = {
          lat: 4.029837,
          lng: 9.687983
        };
        this.zoom = 10;
      }

      _createClass(EventComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this3 = this;

          // used setTimeout google map is delayed in loading, in stackBlitz
          setTimeout(function () {
            _this3.map = new google.maps.Map(_this3.mapRef.nativeElement, {
              zoom: _this3.zoom,
              center: _this3.uluru
            });
            _this3.marker = new google.maps.Marker({
              position: _this3.uluru,
              map: _this3.map
            });
          }, 2000); // console.log(this.map.getZoom())
        }
      }, {
        key: "goToRoom",
        value: function goToRoom(evt) {
          localStorage.setItem('event', JSON.stringify(this.event));
          this.router.navigate(['myEvent']);
        }
      }]);

      return EventComponent;
    }();

    EventComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], EventComponent.prototype, "event", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map', {
      "static": true
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], EventComponent.prototype, "mapRef", void 0);
    EventComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-event',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./event.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/event/event.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./event.component.css */
      "./src/app/event/event.component.css"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], EventComponent);
    /***/
  },

  /***/
  "./src/app/guards/auth.guard.ts":
  /*!**************************************!*\
    !*** ./src/app/guards/auth.guard.ts ***!
    \**************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppGuardsAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts"); // import * as firebase from 'firebase/app';
    // import { User } from '../models/user';


    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(authService, router) {
        _classCallCheck(this, AuthGuard);

        this.authService = authService;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          /*return new Promise(
            (resolve, reject) => {
              /!*firebase.auth().onAuthStateChanged(
              (user) => {
                if (user) {
                  this.authService.emitUser(new User(user.email, user.email, ''));
                  resolve(true);
                } else {
                  this.router.navigate(['/auth', 'signin']);
                  resolve(false);
                }
              });*!/
              /!*if(this.authService.isLogged()) {
                resolve(true);
              } else {
                this.router.navigate(['/auth', 'signin']);
                resolve(false);
              }*!/
            });*/
          if (this.authService.isLoggedIn !== true) {
            this.router.navigate(['signin']);
          }

          return true;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], AuthGuard);
    /***/
  },

  /***/
  "./src/app/my-event/my-event.component.css":
  /*!*************************************************!*\
    !*** ./src/app/my-event/my-event.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMyEventMyEventComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* Use a Flexbox to make the Palette/Diagram responsive */\r\n#myFlexDiv {\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  width: 100%;\r\n  justify-content: center;\r\n}\r\n.myDiagramDiv {\r\n  background: whitesmoke;\r\n  width: 700px;\r\n  height: 300px;\r\n  border: 1px solid black;\r\n}\r\n#myGuests {\r\n  border: solid 1px black;\r\n}\r\n.myPaletteDiv {\r\n  background: lightcyan;\r\n  border: 1px solid navy;\r\n  width: 200px;\r\n  height: 300px;\r\n}\r\n@media (min-width: 768px) {\r\n  #myGuests {\r\n    width: 100px;\r\n    height: 500px;\r\n    margin-right: 10px;\r\n  }\r\n  .myPaletteDiv {\r\n    width: 200px;\r\n    height: 500px;\r\n    margin-right: 10px;\r\n  }\r\n  .myDiagramDiv {\r\n    height: 500px;\r\n    flex: 1;\r\n  }\r\n}\r\n@media (max-width: 767px) {\r\n  #myGuests {\r\n    width: 90%;\r\n    height: 100px;\r\n    margin-bottom: 10px;\r\n  }\r\n  .myPaletteDiv {\r\n    width: 200px;\r\n    height: 100px;\r\n    margin-bottom: 10px;\r\n  }\r\n  .myDiagramDiv {\r\n    /*width: 90%;*/\r\n    height: 500px;\r\n    flex: 1;\r\n  }\r\n}\r\n.myOverviewDiv {\r\n  width: 200px;\r\n  height: 150px;\r\n  background: whitesmoke;\r\n  border: 1px solid black;\r\n}\r\n/* ************ */\r\n#homeBar {\r\n  margin: 0 0 15px -15px;\r\n}\r\n#home .form-control + .glyphicon {\r\n  position: absolute;\r\n  right: 0;\r\n  padding: 8px 27px;\r\n}\r\n#home .dropdown-menu {\r\n  min-width: 80px;\r\n}\r\n#home .dropdown-submenu {\r\n  position: relative;\r\n}\r\n#home .dropdown-submenu .dropdown-menu {\r\n  top: 0;\r\n  left: 100%;\r\n  margin-top: -1px;\r\n}\r\n#home span,i {\r\n  color: #cf6515;\r\n}\r\n#home img {\r\n  width: 30%;\r\n}\r\n#home .guestBlock {\r\n  border: 1px solid #e6e6e6;\r\n  padding: 5px;\r\n  margin-bottom: 8px;\r\n  margin-right: 0;\r\n  margin-left: 0;\r\n  box-shadow: 8px 8px 12px #aaa;\r\n  cursor: pointer;\r\n}\r\n#home .guestInfoBlock {\r\n  border: 1px solid #e6e6e6;\r\n  padding: 5px;\r\n  margin-bottom: 8px;\r\n  margin-right: -10px;\r\n  margin-left: 10px;\r\n  box-shadow: 8px 8px 12px #aaa;\r\n}\r\n#home .guestInfoBlock img {\r\n  width: 100%;\r\n}\r\n#home .form-group {\r\n  margin-bottom: 10px;\r\n}\r\n#home .form-group input,textarea {\r\n  margin-bottom: 3px;\r\n  text-align: center;\r\n}\r\n#home .form-group label {\r\n  margin-bottom: 0;\r\n  padding-top: 8px;\r\n}\r\n#home .nav-tabs > li.active > a {\r\n  color: #cf6515;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXktZXZlbnQvbXktZXZlbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5REFBeUQ7QUFDekQ7RUFFRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixhQUFhO0FBQ2Y7QUFDQTtFQUNFO0lBQ0UsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsT0FBTztFQUNUO0FBQ0Y7QUFFQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLGFBQWE7SUFDYixtQkFBbUI7RUFDckI7RUFDQTtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxjQUFjO0lBQ2QsYUFBYTtJQUNiLE9BQU87RUFDVDtBQUNGO0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekI7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSxzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLE1BQU07RUFDTixVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxVQUFVO0FBQ1o7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixjQUFjO0VBQ2QsNkJBQTZCO0VBQzdCLGVBQWU7QUFDakI7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsNkJBQTZCO0FBQy9CO0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL215LWV2ZW50L215LWV2ZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBVc2UgYSBGbGV4Ym94IHRvIG1ha2UgdGhlIFBhbGV0dGUvRGlhZ3JhbSByZXNwb25zaXZlICovXHJcbiNteUZsZXhEaXYge1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLm15RGlhZ3JhbURpdiB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcclxuICB3aWR0aDogNzAwcHg7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG4jbXlHdWVzdHMge1xyXG4gIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xyXG59XHJcblxyXG4ubXlQYWxldHRlRGl2IHtcclxuICBiYWNrZ3JvdW5kOiBsaWdodGN5YW47XHJcbiAgYm9yZGVyOiAxcHggc29saWQgbmF2eTtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAjbXlHdWVzdHMge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9XHJcbiAgLm15UGFsZXR0ZURpdiB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuICAubXlEaWFncmFtRGl2IHtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICBmbGV4OiAxO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgI215R3Vlc3RzIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgLm15UGFsZXR0ZURpdiB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgLm15RGlhZ3JhbURpdiB7XHJcbiAgICAvKndpZHRoOiA5MCU7Ki9cclxuICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICBmbGV4OiAxO1xyXG4gIH1cclxufVxyXG5cclxuLm15T3ZlcnZpZXdEaXYge1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbi8qICoqKioqKioqKioqKiAqL1xyXG4jaG9tZUJhciB7XHJcbiAgbWFyZ2luOiAwIDAgMTVweCAtMTVweDtcclxufVxyXG5cclxuI2hvbWUgLmZvcm0tY29udHJvbCArIC5nbHlwaGljb24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuICBwYWRkaW5nOiA4cHggMjdweDtcclxufVxyXG5cclxuI2hvbWUgLmRyb3Bkb3duLW1lbnUge1xyXG4gIG1pbi13aWR0aDogODBweDtcclxufVxyXG5cclxuI2hvbWUgLmRyb3Bkb3duLXN1Ym1lbnUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuI2hvbWUgLmRyb3Bkb3duLXN1Ym1lbnUgLmRyb3Bkb3duLW1lbnUge1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IC0xcHg7XHJcbn1cclxuXHJcbiNob21lIHNwYW4saSB7XHJcbiAgY29sb3I6ICNjZjY1MTU7XHJcbn1cclxuXHJcbiNob21lIGltZyB7XHJcbiAgd2lkdGg6IDMwJTtcclxufVxyXG5cclxuI2hvbWUgLmd1ZXN0QmxvY2sge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNmU2ZTY7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxuICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgYm94LXNoYWRvdzogOHB4IDhweCAxMnB4ICNhYWE7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4jaG9tZSAuZ3Vlc3RJbmZvQmxvY2sge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNmU2ZTY7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxuICBtYXJnaW4tcmlnaHQ6IC0xMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDhweCA4cHggMTJweCAjYWFhO1xyXG59XHJcblxyXG4jaG9tZSAuZ3Vlc3RJbmZvQmxvY2sgaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuI2hvbWUgLmZvcm0tZ3JvdXAge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbiNob21lIC5mb3JtLWdyb3VwIGlucHV0LHRleHRhcmVhIHtcclxuICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jaG9tZSAuZm9ybS1ncm91cCBsYWJlbCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBwYWRkaW5nLXRvcDogOHB4O1xyXG59XHJcblxyXG4jaG9tZSAubmF2LXRhYnMgPiBsaS5hY3RpdmUgPiBhIHtcclxuICBjb2xvcjogI2NmNjUxNTtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/my-event/my-event.component.ts":
  /*!************************************************!*\
    !*** ./src/app/my-event/my-event.component.ts ***!
    \************************************************/

  /*! exports provided: MyEventComponent */

  /***/
  function srcAppMyEventMyEventComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyEventComponent", function () {
      return MyEventComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var gojs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! gojs */
    "./node_modules/gojs/release/go.js");
    /* harmony import */


    var gojs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gojs__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var gojs_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! gojs-angular */
    "./node_modules/gojs-angular/__ivy_ngcc__/fesm2015/gojs-angular.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);

    var MyEventComponent = /*#__PURE__*/function () {
      function MyEventComponent(cdr) {
        _classCallCheck(this, MyEventComponent);

        this.cdr = cdr;
        this.diagramNodeData = [{
          key: 'Alpha',
          text: 'Node Alpha',
          color: 'lightblue'
        }, {
          key: 'Beta',
          text: 'Node Beta',
          color: 'orange'
        }, {
          key: 'Gamma',
          text: 'Node Gamma',
          color: 'lightgreen'
        }, {
          key: 'Delta',
          text: 'Node Delta',
          color: 'pink'
        }];
        this.diagramLinkData = [
          /*{ key: -1, from: 'Alpha', to: 'Beta', fromPort: 'r', toPort: 'l' },
          { key: -2, from: 'Alpha', to: 'Gamma', fromPort: 'b', toPort: 't' },
          { key: -3, from: 'Beta', to: 'Beta' },
          { key: -4, from: 'Gamma', to: 'Delta', fromPort: 'r', toPort: 'l' },
          { key: -5, from: 'Delta', to: 'Alpha', fromPort: 't', toPort: 'r' }*/
        ];
        this.diagramDivClassName = 'myDiagramDiv';
        this.diagramModelData = {
          prop: 'value'
        };
        this.skipsDiagramUpdate = false;
        this.paletteNodeData = [{
          key: 'PaletteNode1',
          color: 'firebrick'
        }, {
          key: 'PaletteNode2',
          color: 'blueviolet'
        }];
        this.paletteLinkData = [{}];
        this.paletteModelData = {
          prop: 'val'
        };
        this.paletteDivClassName = 'myPaletteDiv';
        this.skipsPaletteUpdate = false; // Overview Component testing

        this.oDivClassName = 'myOverviewDiv';
        this.observedDiagram = null; // currently selected node; for inspector

        this.selectedNode = null; // When the diagram model changes, update app data to reflect those changes

        this.diagramModelChange = function (changes) {
          // when setting state here, be sure to set skipsDiagramUpdate: true since GoJS already has this update
          // (since this is a GoJS model changed listener event function)
          // this way, we don't log an unneeded transaction in the Diagram's undoManager history
          this.skipsDiagramUpdate = true;
          this.diagramNodeData = gojs_angular__WEBPACK_IMPORTED_MODULE_3__["DataSyncService"].syncNodeData(changes, this.diagramNodeData);
          this.diagramLinkData = gojs_angular__WEBPACK_IMPORTED_MODULE_3__["DataSyncService"].syncLinkData(changes, this.diagramLinkData);
          this.diagramModelData = gojs_angular__WEBPACK_IMPORTED_MODULE_3__["DataSyncService"].syncModelData(changes, this.diagramModelData);
        };

        this.paletteModelChange = function (changes) {
          // when setting state here, be sure to set skipsPaletteUpdate: true since GoJS already has this update
          // (since this is a GoJS model changed listener event function)
          // this way, we don't log an unneeded transaction in the Palette's undoManager history
          this.skipsPaletteUpdate = true;
          this.paletteNodeData = gojs_angular__WEBPACK_IMPORTED_MODULE_3__["DataSyncService"].syncNodeData(changes, this.paletteNodeData);
          this.paletteLinkData = gojs_angular__WEBPACK_IMPORTED_MODULE_3__["DataSyncService"].syncLinkData(changes, this.paletteLinkData);
          this.paletteModelData = gojs_angular__WEBPACK_IMPORTED_MODULE_3__["DataSyncService"].syncModelData(changes, this.paletteModelData);
        };
      } // initialize diagram / templates


      _createClass(MyEventComponent, [{
        key: "initDiagram",
        value: function initDiagram() {
          var $ = gojs__WEBPACK_IMPORTED_MODULE_2__["GraphObject"].make;
          var dia = $(gojs__WEBPACK_IMPORTED_MODULE_2__["Diagram"], {
            'undoManager.isEnabled': true,
            model: $(gojs__WEBPACK_IMPORTED_MODULE_2__["GraphLinksModel"], {
              linkToPortIdProperty: 'toPort',
              linkFromPortIdProperty: 'fromPort',
              linkKeyProperty: 'key' // IMPORTANT! must be defined for merges and data sync when using GraphLinksModel

            }),
            ModelChanged: function ModelChanged(e) {
              if (e.isTransactionFinished) {
                document.getElementById('savedModel').textContent = dia.model.toJson();
              }
            }
          });
          dia.commandHandler.archetypeGroupData = {
            key: 'Group',
            isGroup: true
          };

          function makePort(id, spot) {
            return $(gojs__WEBPACK_IMPORTED_MODULE_2__["Shape"], 'Circle', {
              opacity: .5,
              fill: 'gray',
              strokeWidth: 0,
              desiredSize: new gojs__WEBPACK_IMPORTED_MODULE_2__["Size"](8, 8),
              portId: id,
              alignment: spot,
              fromLinkable: true,
              toLinkable: true
            });
          }

          function conv(o) {
            return o.diagram.selection.count > 1;
          } // define the Node template


          dia.nodeTemplate = $(gojs__WEBPACK_IMPORTED_MODULE_2__["Node"], 'Spot', {
            contextMenu: $('ContextMenu', $('ContextMenuButton', $(gojs__WEBPACK_IMPORTED_MODULE_2__["TextBlock"], 'Group'), {
              click: function click(e, obj) {
                e.diagram.commandHandler.groupSelection();
              }
            }, new gojs__WEBPACK_IMPORTED_MODULE_2__["Binding"]('visible', '', conv).ofObject()))
          }, $(gojs__WEBPACK_IMPORTED_MODULE_2__["Panel"], 'Auto', $(gojs__WEBPACK_IMPORTED_MODULE_2__["Shape"], 'RoundedRectangle', {
            stroke: null
          }, new gojs__WEBPACK_IMPORTED_MODULE_2__["Binding"]('fill', 'color')), $(gojs__WEBPACK_IMPORTED_MODULE_2__["TextBlock"], {
            margin: 8
          }, new gojs__WEBPACK_IMPORTED_MODULE_2__["Binding"]('text'))), // Ports
          makePort('t', gojs__WEBPACK_IMPORTED_MODULE_2__["Spot"].TopCenter), makePort('l', gojs__WEBPACK_IMPORTED_MODULE_2__["Spot"].Left), makePort('r', gojs__WEBPACK_IMPORTED_MODULE_2__["Spot"].Right), makePort('b', gojs__WEBPACK_IMPORTED_MODULE_2__["Spot"].BottomCenter));
          return dia;
        }
      }, {
        key: "initPalette",
        value: function initPalette() {
          var $ = gojs__WEBPACK_IMPORTED_MODULE_2__["GraphObject"].make;
          var palette = $(gojs__WEBPACK_IMPORTED_MODULE_2__["Palette"]); // define the Node template

          palette.nodeTemplate = $(gojs__WEBPACK_IMPORTED_MODULE_2__["Node"], 'Auto', $(gojs__WEBPACK_IMPORTED_MODULE_2__["Shape"], 'RoundedRectangle', {
            stroke: null
          }, new gojs__WEBPACK_IMPORTED_MODULE_2__["Binding"]('fill', 'color')), $(gojs__WEBPACK_IMPORTED_MODULE_2__["TextBlock"], {
            margin: 8
          }, new gojs__WEBPACK_IMPORTED_MODULE_2__["Binding"]('text', 'key')));
          palette.model = $(gojs__WEBPACK_IMPORTED_MODULE_2__["GraphLinksModel"], {
            linkKeyProperty: 'key' // IMPORTANT! must be defined for merges and data sync when using GraphLinksModel

          });
          return palette;
        }
      }, {
        key: "initOverview",
        value: function initOverview() {
          var $ = gojs__WEBPACK_IMPORTED_MODULE_2__["GraphObject"].make;
          return $(gojs__WEBPACK_IMPORTED_MODULE_2__["Overview"]);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.event = JSON.parse(localStorage.getItem('event'));
          console.log(this.event);
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          if (this.observedDiagram) {
            return;
          }

          this.observedDiagram = this.myDiagramComponent.diagram;
          this.cdr.detectChanges(); // IMPORTANT: without this, Angular will throw ExpressionChangedAfterItHasBeenCheckedError (dev mode only)

          var appComp = this; // listener for inspector

          this.myDiagramComponent.diagram.addDiagramListener('ChangedSelection', function (e) {
            if (e.diagram.selection.count === 0) {
              appComp.selectedNode = null;
            }

            var node = e.diagram.selection.first();

            if (node instanceof gojs__WEBPACK_IMPORTED_MODULE_2__["Node"]) {
              appComp.selectedNode = node;
            } else {
              appComp.selectedNode = null;
            }
          });
        } // end ngAfterViewInit

      }, {
        key: "handleInspectorChange",
        value: function handleInspectorChange(newNodeData) {
          var key = newNodeData.key; // find the entry in nodeDataArray with this key, replace it with newNodeData

          var index = null;

          for (var i = 0; i < this.diagramNodeData.length; i++) {
            var entry = this.diagramNodeData[i];

            if (entry.key && entry.key === key) {
              index = i;
            }
          }

          if (index >= 0) {
            // here, we set skipsDiagramUpdate to false, since GoJS does not yet have this update
            this.skipsDiagramUpdate = false;
            this.diagramNodeData[index] = lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"](newNodeData);
          }
        }
      }, {
        key: "replaceModel",
        value: function replaceModel() {}
      }, {
        key: "import",
        value: function _import() {}
      }]);

      return MyEventComponent;
    }();

    MyEventComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myDiagram', {
      "static": true
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", gojs_angular__WEBPACK_IMPORTED_MODULE_3__["DiagramComponent"])], MyEventComponent.prototype, "myDiagramComponent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myPalette', {
      "static": true
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", gojs_angular__WEBPACK_IMPORTED_MODULE_3__["PaletteComponent"])], MyEventComponent.prototype, "myPaletteComponent", void 0);
    MyEventComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-my-event',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./my-event.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/my-event/my-event.component.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [__importDefault(__webpack_require__(
      /*! ./my-event.component.css */
      "./src/app/my-event/my-event.component.css"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], MyEventComponent);
    /***/
  },

  /***/
  "./src/app/myspace/myspace.component.css":
  /*!***********************************************!*\
    !*** ./src/app/myspace/myspace.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppMyspaceMyspaceComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215c3BhY2UvbXlzcGFjZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/myspace/myspace.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/myspace/myspace.component.ts ***!
    \**********************************************/

  /*! exports provided: MyspaceComponent */

  /***/
  function srcAppMyspaceMyspaceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyspaceComponent", function () {
      return MyspaceComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/event.service */
    "./src/app/services/event.service.ts"); // import { MatTabGroup } from '@angular/material';
    // import * as $ from 'jquery';


    var MyspaceComponent = /*#__PURE__*/function () {
      function MyspaceComponent(formBuilder, eventService) {
        _classCallCheck(this, MyspaceComponent);

        this.formBuilder = formBuilder;
        this.eventService = eventService;
        this.today = new Date();
        this.selectedIndex = 1;
        this.orderList = ['startDate', 'name', 'where'];
        this.searchTerm = '';
        this.nameFilter = {
          name: 'e'
        };
      }

      _createClass(MyspaceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getEvents();
          this.initForm();
          this.today.setHours(0, 0, 0, 0);
          var tomorrow = new Date();
          tomorrow.setMonth(this.today.getDate() + 1);
          var lastMonth = new Date();
          lastMonth.setMonth(this.today.getMonth() - 1);
          this.evts = [{
            uid: '1',
            name: 'evt1',
            by: 'user1',
            owner: 'owner1',
            where: 'where1',
            startDate: this.today,
            endDate: tomorrow,
            creationDate: new Date()
          }, {
            uid: '2',
            name: 'evt2',
            by: 'user2',
            owner: 'owner2',
            where: 'where2',
            startDate: this.today,
            endDate: tomorrow,
            creationDate: new Date()
          }];
          this.changeTab(this.selectedIndex);
        }
      }, {
        key: "getEvents",
        value: function getEvents() {
          var _this4 = this;

          this.eventService.getEvents().subscribe(function (res) {
            return _this4.events = res;
          });
        }
      }, {
        key: "initForm",
        value: function initForm() {
          this.codeForm = this.formBuilder.group({
            code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "saveEvent",
        value: function saveEvent() {
          alert(this.codeForm.value.code);
        }
      }, {
        key: "changeTab",
        value: function changeTab(status) {
          var _this5 = this;

          if (status === 1) {
            this.evtsInProgressPromise = new Promise(function (resolve) {
              var evtsInProgress = _this5.evts.filter(function (elt) {
                return elt.startDate <= _this5.today && elt.endDate >= _this5.today;
              });

              window.setTimeout(function () {
                return resolve(evtsInProgress);
              }, 1000);
            });
          } else if (status === 2) {
            this.evtsDonePromise = new Promise(function (resolve) {
              var evtsDone = _this5.evts.filter(function (elt) {
                return elt.endDate < _this5.today;
              });

              window.setTimeout(function () {
                return resolve(evtsDone);
              }, 1000);
            });
          } else {
            this.evtsPromise = new Promise(function (resolve) {
              window.setTimeout(function () {
                return resolve(_this5.evts);
              }, 1000);
            });
          }
        }
      }, {
        key: "statusFilter",
        value: function statusFilter() {
          return true;
        }
      }]);

      return MyspaceComponent;
    }();

    MyspaceComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"]
      }];
    };

    MyspaceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-myspace',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./myspace.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/myspace/myspace.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./myspace.component.css */
      "./src/app/myspace/myspace.component.css"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"]])], MyspaceComponent);
    /***/
  },

  /***/
  "./src/app/pipes/event-filter.pipe.ts":
  /*!********************************************!*\
    !*** ./src/app/pipes/event-filter.pipe.ts ***!
    \********************************************/

  /*! exports provided: EventFilterPipe */

  /***/
  function srcAppPipesEventFilterPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventFilterPipe", function () {
      return EventFilterPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var EventFilterPipe = /*#__PURE__*/function () {
      function EventFilterPipe() {
        _classCallCheck(this, EventFilterPipe);
      }

      _createClass(EventFilterPipe, [{
        key: "transform",
        value: // args : 1 - status = { 0 : all, 1 : in progress, 2 : done }
        // args : 2 - keyword = filter on the name
        function transform(value) {
          switch (arguments.length <= 1 ? 0 : arguments.length - 1) {
            case 1:
              // code...
              break;

            case 2:
              // code...
              break;

            default:
              // code...
              break;
          }

          return null;
        }
      }]);

      return EventFilterPipe;
    }();

    EventFilterPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'eventFilter'
    })], EventFilterPipe);
    /***/
  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.esm.js");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(afs, // Inject Firestore service
      afAuth, // Inject Firebase auth service
      router, ngZone // NgZone service to remove outside scope warning
      ) {
        var _this6 = this;

        _classCallCheck(this, AuthService);

        this.afs = afs;
        this.afAuth = afAuth;
        this.router = router;
        this.ngZone = ngZone;
        this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /* Saving userData data in localstorage when
        logged in and setting up null when logged out */

        this.afAuth.authState.subscribe(function (user) {
          if (user) {
            _this6.userData = user;
            localStorage.setItem('user', JSON.stringify(_this6.userData));
            JSON.parse(localStorage.getItem('user'));
          } else {
            localStorage.setItem('user', null);
            JSON.parse(localStorage.getItem('user'));
          }
        });
      }

      _createClass(AuthService, [{
        key: "emitUser",
        value: function emitUser(u) {
          this.userSubject.next(u ? u : this.userData);
        }
        /*signin(email: string, password: string) {
          return new Promise<void>(
            (resolve, reject) => {
              firebase.auth().signInWithEmailAndPassword(email, password).then(
                () => {
                  this.userData = new User(email, email, password);
                  this.emitUser();
                  resolve();
                },
                (error) => {
                  reject(error);
                });
            });
        }*/
        // Sign in with email/password

      }, {
        key: "SignIn",
        value: function SignIn(email, password) {
          var _this7 = this;

          return this.afAuth.signInWithEmailAndPassword(email, password).then(function (result) {
            _this7.ngZone.run(function () {
              localStorage.setItem('user', JSON.stringify(result.user));

              _this7.router.navigate(['mySpace']);
            });

            _this7.SetUserData(result.user);
          })["catch"](function (error) {
            window.alert(error.message);
          });
        }
        /*signup(email: string, password: string) {
          return new Promise<void>(
            (resolve, reject) => {
              firebase.auth().createUserWithEmailAndPassword(email, password).then(
                () => {
                  resolve();
                },
                (error) => {
                  reject(error);
                });
            });
        }*/
        // Sign up with email/password

      }, {
        key: "SignUp",
        value: function SignUp(user) {
          var _this8 = this;

          return this.afAuth.createUserWithEmailAndPassword(user.email, user.password).then(function (result) {
            /* Call the SendVerificationMail() function when new userData sign
            up and returns promise */
            _this8.SendVerificationMail();

            result.user.updateProfile({
              displayName: user.displayName
            });

            _this8.SetUserData(result.user);
          })["catch"](function (error) {
            window.alert(error.message);
          });
        } // Send email verfificaiton when new userData sign up

      }, {
        key: "SendVerificationMail",
        value: function SendVerificationMail() {
          var _this9 = this;

          return this.afAuth.currentUser.then(function (u) {
            return u.sendEmailVerification();
          }).then(function () {
            _this9.router.navigate(['verify-email-address']);
          });
        } // Reset Forggot password

      }, {
        key: "ForgotPassword",
        value: function ForgotPassword(passwordResetEmail) {
          return this.afAuth.sendPasswordResetEmail(passwordResetEmail).then(function () {
            window.alert('Password reset email sent, check your inbox.');
          })["catch"](function (error) {
            window.alert(error);
          });
        }
        /*isLogged() {
          return this.userData != null;
          // firebase.auth().isSignInWithEmailLink();
        }*/
        // Returns true when userData is logged in and email is verified

      }, {
        key: "isLoggedIn",
        get: function get() {
          var user = JSON.parse(localStorage.getItem('user'));
          return user !== null && user.emailVerified !== false;
        } // Sign in with Google

      }, {
        key: "GoogleAuth",
        value: function GoogleAuth() {
          return this.AuthLogin(new firebase_app__WEBPACK_IMPORTED_MODULE_6__["default"].auth.GoogleAuthProvider());
        } // Auth logic to run auth providers

      }, {
        key: "AuthLogin",
        value: function AuthLogin(provider) {
          var _this10 = this;

          return this.afAuth.signInWithPopup(provider).then(function (result) {
            _this10.ngZone.run(function () {
              _this10.router.navigate(['dashboard']);
            });

            _this10.SetUserData(result.user);
          })["catch"](function (error) {
            window.alert(error);
          });
        } // Setting up userData data when sign in with username/password,
        // sign up with username/password and sign in with social auth
        // provider in Firestore database using AngularFirestore + AngularFirestoreDocument service

      }, {
        key: "SetUserData",
        value: function SetUserData(user) {
          var userRef = this.afs.doc("users/".concat(user.uid));
          var userData = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            // profile: user.profile,
            photoURL: user.photoURL,
            emailVerified: user.emailVerified
          };
          return userRef.set(userData, {
            merge: true
          });
        }
        /*signout() {
          this.userData = null;
          firebase.auth().signOut();
        }*/
        // Sign out

      }, {
        key: "SignOut",
        value: function SignOut() {
          var _this11 = this;

          return this.afAuth.signOut().then(function () {
            localStorage.removeItem('user');

            _this11.router.navigate(['signin']);
          });
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] // NgZone service to remove outside scope warning

      }];
    };

    AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] // NgZone service to remove outside scope warning
    ])], AuthService);
    /***/
  },

  /***/
  "./src/app/services/event.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/event.service.ts ***!
    \*******************************************/

  /*! exports provided: EventService */

  /***/
  function srcAppServicesEventServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventService", function () {
      return EventService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");

    var EventService = /*#__PURE__*/function () {
      function EventService(afs) {
        _classCallCheck(this, EventService);

        this.afs = afs;
      }

      _createClass(EventService, [{
        key: "getEvents",
        value: function getEvents() {
          return this.afs.collection('events').snapshotChanges();
        }
      }]);

      return EventService;
    }();

    EventService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }];
    };

    EventService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])], EventService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var environment = {
      production: false,
      firebase: {
        apiKey: 'AIzaSyDjXmABWsHaf069HqxkfqEtf7RHW4dDdsc',
        authDomain: 'mscdb-3dcc4.firebaseapp.com',
        databaseURL: 'https://mscdb-3dcc4.firebaseio.com',
        projectId: 'mscdb-3dcc4',
        storageBucket: 'mscdb-3dcc4.appspot.com',
        messagingSenderId: '937692415291',
        appId: '1:937692415291:web:afbbed639607d0523ba31e'
      }
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\Dev\workspace\msc\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map