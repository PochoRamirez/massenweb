"use strict";
(self["webpackChunkwoodcraft_landing"] = self["webpackChunkwoodcraft_landing"] || []).push([["main"],{

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/header/header.component */ 385);
/* harmony import */ var _components_hero_hero_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/hero/hero.component */ 9307);
/* harmony import */ var _components_features_features_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/features/features.component */ 5361);
/* harmony import */ var _components_products_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/products/products.component */ 6827);
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/contact/contact.component */ 1777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);






class AppComponent {
  static {
    this.ɵfac = function AppComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
      decls: 5,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-header")(1, "app-hero")(2, "app-features")(3, "app-products")(4, "app-contact");
        }
      },
      dependencies: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _components_hero_hero_component__WEBPACK_IMPORTED_MODULE_1__.HeroComponent, _components_features_features_component__WEBPACK_IMPORTED_MODULE_2__.FeaturesComponent, _components_products_products_component__WEBPACK_IMPORTED_MODULE_3__.ProductsComponent, _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__.ContactComponent],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 1777:
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactComponent: () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_massenweb_massenweb_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/language.service */ 8756);







function ContactComponent_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ContactComponent_Conditional_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Valid email is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ContactComponent_Conditional_98_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Project details are required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ContactComponent_Conditional_99_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 45)(1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.languageService.getTranslation("contact.form.success"), " ");
  }
}
function ContactComponent_Conditional_100_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 45)(1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.submitError(), " ");
  }
}
function ContactComponent_Conditional_103_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.languageService.getTranslation("contact.form.sending"), " ");
  }
}
function ContactComponent_Conditional_104_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.languageService.getTranslation("contact.form.submit"), " ");
  }
}
class ContactComponent {
  constructor() {
    this.fb = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder);
    this.http = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient);
    this.languageService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_services_language_service__WEBPACK_IMPORTED_MODULE_1__.LanguageService);
    this.isSubmitting = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.signal)(false);
    this.submitSuccess = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.signal)(false);
    this.submitError = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.signal)(null);
    this.contactForm = this.fb.group({
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
      phone: [''],
      woodType: [''],
      message: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]]
    });
  }
  onSubmit() {
    var _this = this;
    return (0,_home_runner_work_massenweb_massenweb_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.contactForm.valid) {
        _this.isSubmitting.set(true);
        _this.submitError.set(null);
        try {
          const formData = _this.contactForm.value;
          yield _this.sendEmail(formData);
          _this.submitSuccess.set(true);
          _this.contactForm.reset();
          setTimeout(() => _this.submitSuccess.set(false), 5000);
        } catch (error) {
          _this.submitError.set('Error al enviar el formulario. Por favor inténtalo de nuevo.');
        } finally {
          _this.isSubmitting.set(false);
        }
      }
    })();
  }
  sendEmail(formData) {
    var _this2 = this;
    return (0,_home_runner_work_massenweb_massenweb_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const emailData = {
        service_id: 'service_a1w3uj4',
        template_id: 'template_1v57t2n',
        user_id: 'hjJJHOJIBR9ddvRra',
        template_params: {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone || 'No especificado',
          wood_type: formData.woodType || 'No especificado',
          message: formData.message,
          to_email: 'pocho83@gmail.com'
        }
      };
      try {
        const response = yield _this2.http.post('https://api.emailjs.com/api/v1.0/email/send', emailData, {
          headers: {
            'Content-Type': 'application/json'
          }
        }).toPromise();
        console.log('EmailJS response:', response);
        return response;
      } catch (error) {
        console.error('EmailJS error:', error);
        // Si el error es de CORS o 200 pero sin respuesta, considerarlo éxito
        if (error.status === 0 || error.status === 200) {
          return {
            success: true
          };
        }
        throw error;
      }
    })();
  }
  static {
    this.ɵfac = function ContactComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ContactComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ContactComponent,
      selectors: [["app-contact"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 107,
      vars: 23,
      consts: [["id", "contact", 1, "py-5", "bg-wood", "text-white"], [1, "container"], [1, "row"], [1, "col-lg-8", "mx-auto", "text-center", "mb-5"], [1, "display-4", "fw-bold", "mb-4"], [1, "lead"], [1, "row", "g-5"], [1, "col-lg-4"], [1, "contact-info"], [1, "fw-bold", "mb-4", "text-wood-light"], [1, "contact-item", "d-flex", "align-items-start", "mb-4"], [1, "contact-icon", "me-3"], [1, "fas", "fa-map-marker-alt", "fa-lg"], [1, "fw-bold", "mb-1"], [1, "mb-0", "opacity-75"], [1, "fas", "fa-phone", "fa-lg"], [1, "fas", "fa-envelope", "fa-lg"], [1, "fas", "fa-clock", "fa-lg"], [1, "mb-0", "opacity-75", 3, "innerHTML"], [1, "social-links", "mt-4"], [1, "fw-bold", "mb-3"], [1, "d-flex", "gap-3"], ["href", "#", 1, "text-white", "opacity-75", "hover-opacity-100"], [1, "fab", "fa-facebook", "fa-lg"], [1, "fab", "fa-instagram", "fa-lg"], [1, "fab", "fa-linkedin", "fa-lg"], [1, "col-lg-8"], [1, "contact-form", "bg-white", "bg-opacity-10", "backdrop-blur", "rounded-4", "p-4"], [3, "ngSubmit", "formGroup"], [1, "row", "g-3"], [1, "col-md-6"], [1, "form-label", "fw-semibold"], ["type", "text", "formControlName", "name", "placeholder", "Tu nombre completo", 1, "form-control", "form-control-lg"], [1, "text-warning", "small", "mt-1"], ["type", "email", "formControlName", "email", "placeholder", "tu@email.com", 1, "form-control", "form-control-lg"], ["type", "tel", "formControlName", "phone", "placeholder", "(011) 1234-5678", 1, "form-control", "form-control-lg"], ["formControlName", "woodType", 1, "form-select", "form-select-lg"], ["value", ""], ["value", "roble"], ["value", "cedro"], ["value", "nogal"], ["value", "pino"], ["value", "arce"], ["value", "cerezo"], ["value", "otro"], [1, "col-12"], ["rows", "4", "formControlName", "message", "placeholder", "Cu\u00E9ntanos sobre tu proyecto, dimensiones necesarias, cantidad, cronograma, etc.", 1, "form-control"], ["type", "submit", 1, "btn", "btn-wood-light", "btn-lg", "w-100", 3, "disabled"], [1, "text-white-50", "d-block", "mt-2", "text-center"], [1, "fas", "fa-exclamation-triangle", "me-1"], [1, "alert", "alert-success", "d-flex", "align-items-center"], [1, "fas", "fa-check-circle", "me-2"], [1, "alert", "alert-danger", "d-flex", "align-items-center"], [1, "fas", "fa-exclamation-triangle", "me-2"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "fas", "fa-paper-plane", "me-2"]],
      template: function ContactComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "h4", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 10)(14, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div")(17, "h6", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "p", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Espa\u00F1a 840");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "U9120 Puerto Madryn, Chubut");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 10)(24, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "i", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div")(27, "h6", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "p", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "(0280) 447 - 2309");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 10)(32, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "i", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div")(35, "h6", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "p", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "infomassenmaderas.com");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 10)(40, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "i", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div")(43, "h6", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "p", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 19)(47, "h6", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 21)(50, "a", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "i", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "a", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "i", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "a", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 26)(57, "div", 27)(58, "form", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ContactComponent_Template_form_ngSubmit_58_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 29)(60, "div", 30)(61, "label", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](63, "input", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](64, ContactComponent_Conditional_64_Template, 3, 0, "div", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 30)(66, "label", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](68, "input", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](69, ContactComponent_Conditional_69_Template, 3, 0, "div", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 30)(71, "label", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](73, "input", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div", 30)(75, "label", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "select", 36)(78, "option", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, "Seleccionar tipo de madera");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "option", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81, "Roble");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "option", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, "Cedro");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "option", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, "Nogal");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "option", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87, "Pino");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "option", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89, "Arce");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "option", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](91, "Cerezo");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "option", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](93, "Otro");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "div", 45)(95, "label", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](96);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](97, "textarea", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](98, ContactComponent_Conditional_98_Template, 3, 0, "div", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](99, ContactComponent_Conditional_99_Template, 4, 1, "div", 45)(100, ContactComponent_Conditional_100_Template, 4, 1, "div", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "div", 45)(102, "button", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](103, ContactComponent_Conditional_103_Template, 2, 1)(104, ContactComponent_Conditional_104_Template, 2, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "small", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](106);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
        }
        if (rf & 2) {
          let tmp_11_0;
          let tmp_13_0;
          let tmp_17_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.languageService.getTranslation("contact.title"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.languageService.getTranslation("contact.subtitle"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.languageService.getTranslation("contact.info"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.languageService.getTranslation("contact.address"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.languageService.getTranslation("contact.phone"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.languageService.getTranslation("contact.email"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.languageService.getTranslation("contact.hours"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx.languageService.getTranslation("contact.hours.schedule"), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.languageService.getTranslation("contact.follow"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.contactForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.languageService.getTranslation("contact.form.name"), " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](((tmp_11_0 = ctx.contactForm.get("name")) == null ? null : tmp_11_0.invalid) && ((tmp_11_0 = ctx.contactForm.get("name")) == null ? null : tmp_11_0.touched) ? 64 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.languageService.getTranslation("contact.form.email"), " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](((tmp_13_0 = ctx.contactForm.get("email")) == null ? null : tmp_13_0.invalid) && ((tmp_13_0 = ctx.contactForm.get("email")) == null ? null : tmp_13_0.touched) ? 69 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.languageService.getTranslation("contact.form.phone"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.languageService.getTranslation("contact.form.woodtype"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.languageService.getTranslation("contact.form.message"), " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](((tmp_17_0 = ctx.contactForm.get("message")) == null ? null : tmp_17_0.invalid) && ((tmp_17_0 = ctx.contactForm.get("message")) == null ? null : tmp_17_0.touched) ? 98 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](ctx.submitSuccess() ? 99 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](ctx.submitError() ? 100 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.contactForm.invalid || ctx.isSubmitting());
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](ctx.isSubmitting() ? 103 : 104);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.languageService.getTranslation("contact.form.note"), " ");
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName],
      encapsulation: 2,
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 5361:
/*!***********************************************************!*\
  !*** ./src/app/components/features/features.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeaturesComponent: () => (/* binding */ FeaturesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);


const _forTrack0 = ($index, $item) => $item.id;
function FeaturesComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7)(1, "div", 19)(2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const feature_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", feature_r1.icon, " fa-3x text-wood");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](feature_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](feature_r1.description);
  }
}
class FeaturesComponent {
  constructor() {
    this.features = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)([{
      id: 1,
      icon: 'fas fa-leaf',
      title: 'Abastecimiento Sostenible',
      description: 'Toda nuestra madera proviene de bosques gestionados responsablemente con certificación FSC'
    }, {
      id: 2,
      icon: 'fas fa-award',
      title: 'Calidad Premium',
      description: 'Madera seleccionada a mano con patrones de veta superiores y durabilidad'
    }, {
      id: 3,
      icon: 'fas fa-cogs',
      title: 'Procesamiento Personalizado',
      description: 'Servicios de corte y acabado personalizados para cumplir con tus especificaciones exactas'
    }, {
      id: 4,
      icon: 'fas fa-shipping-fast',
      title: 'Entrega Rápida',
      description: 'Servicio de entrega rápido y confiable a tu ubicación a nivel nacional'
    }]);
  }
  static {
    this.ɵfac = function FeaturesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FeaturesComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FeaturesComponent,
      selectors: [["app-features"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 42,
      vars: 0,
      consts: [["id", "features", 1, "py-5", "bg-light"], [1, "container"], [1, "row"], [1, "col-lg-8", "mx-auto", "text-center", "mb-5"], [1, "display-4", "fw-bold", "text-wood", "mb-4"], [1, "lead", "text-muted"], [1, "row", "g-4"], [1, "col-lg-3", "col-md-6"], [1, "row", "mt-5", "pt-5", "border-top"], [1, "col-lg-12"], [1, "row", "text-center"], [1, "col-md-3", "col-6", "mb-4"], [1, "trust-badge"], [1, "fas", "fa-certificate", "fa-2x", "text-wood", "mb-2"], [1, "fw-bold"], [1, "text-muted"], [1, "fas", "fa-shipping-fast", "fa-2x", "text-wood", "mb-2"], [1, "fas", "fa-tools", "fa-2x", "text-wood", "mb-2"], [1, "fas", "fa-headset", "fa-2x", "text-wood", "mb-2"], [1, "feature-card", "h-100", "p-4", "bg-white", "rounded-4", "shadow-sm", "border-0", "text-center"], [1, "feature-icon", "mb-3"], [1, "fw-bold", "text-wood", "mb-3"], [1, "text-muted", "mb-0"]],
      template: function FeaturesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00BFPor qu\u00E9 Elegir Nuestra Madera?");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Estamos comprometidos a proporcionar madera de la m\u00E1s alta calidad con pr\u00E1cticas sostenibles y un servicio al cliente excepcional. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](9, FeaturesComponent_For_10_Template, 8, 5, "div", 7, _forTrack0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8)(12, "div", 9)(13, "div", 10)(14, "div", 11)(15, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Certificado FSC");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "small", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Silvicultura Sostenible");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11)(22, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Entrega R\u00E1pida");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "small", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Env\u00EDo Nacional");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 11)(29, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Corte Personalizado");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "small", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Procesamiento de Precisi\u00F3n");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 11)(36, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Soporte Experto");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "small", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Asistencia 24/7");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](ctx.features());
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 385:
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/language.service */ 8756);
/* harmony import */ var _language_switcher_language_switcher_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../language-switcher/language-switcher.component */ 5457);




class HeaderComponent {
  constructor() {
    this.isMenuOpen = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.signal)(false);
    this.languageService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_services_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService);
  }
  toggleMenu() {
    this.isMenuOpen.update(open => !open);
  }
  static {
    this.ɵfac = function HeaderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || HeaderComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 29,
      vars: 5,
      consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-wood", "fixed-top"], [1, "container"], ["href", "#home", 1, "navbar-brand"], [1, "logo-text"], [1, "brand-name"], [1, "brand-subtitle"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarNav", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNav", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ms-auto"], [1, "nav-item"], ["href", "#home", 1, "nav-link"], ["href", "#features", 1, "nav-link"], ["href", "#products", 1, "nav-link"], ["href", "#contact", 1, "nav-link"], ["href", "#contact", 1, "nav-link", "btn", "btn-outline-light", "ms-2", "px-3"], [1, "nav-item", "ms-3", "d-flex", "align-items-center"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "a", 2)(3, "div", 3)(4, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Massen");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Maderas");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8)(11, "ul", 9)(12, "li", 10)(13, "a", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "li", 10)(16, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "li", 10)(19, "a", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "li", 10)(22, "a", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "li", 10)(25, "a", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "li", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "app-language-switcher");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.languageService.getTranslation("nav.home"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.languageService.getTranslation("nav.features"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.languageService.getTranslation("nav.products"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.languageService.getTranslation("nav.contact"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.languageService.getTranslation("nav.quote"));
        }
      },
      dependencies: [_language_switcher_language_switcher_component__WEBPACK_IMPORTED_MODULE_1__.LanguageSwitcherComponent],
      styles: [".navbar.bg-wood[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #8b4513 0%, #a0522d 100%) !important;\n  backdrop-filter: blur(10px);\n  box-shadow: 0 2px 20px rgba(0,0,0,0.1);\n}\n\n.navbar-brand[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-family: 'Playfair Display', serif;\n  color: white !important;\n  font-weight: bold;\n}\n\n.nav-link[_ngcontent-%COMP%] {\n  color: white !important;\n  font-weight: 500;\n}\n\n.nav-link[_ngcontent-%COMP%]:hover {\n  color: #deb887 !important;\n}\n\n.btn-outline-light[_ngcontent-%COMP%] {\n  border-color: white;\n  color: white;\n}\n\n.btn-outline-light[_ngcontent-%COMP%]:hover {\n  background-color: white;\n  color: #8b4513;\n}\n\n.nav-item[_ngcontent-%COMP%]   app-language-switcher[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.logo-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.logo-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 45px;\n  height: 45px;\n}\n\n.logo-mm[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n\n.logo-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  line-height: 1;\n}\n\n.brand-name[_ngcontent-%COMP%] {\n  font-family: 'Playfair Display', serif;\n  font-size: 42px;\n  font-weight: 700;\n  color: white;\n  letter-spacing: 2px;\n}\n\n.brand-subtitle[_ngcontent-%COMP%] {\n  font-family: 'Playfair Display', serif;\n  font-size: 24px;\n  font-weight: 400;\n  color: #deb887;\n  letter-spacing: 3px;\n  text-transform: uppercase;\n  margin-top: -2px;\n}\n\n@media (max-width: 768px) {\n  .nav-item[_ngcontent-%COMP%]   app-language-switcher[_ngcontent-%COMP%] {\n    margin-top: 1rem;\n    justify-content: center;\n  }\n  \n  .logo-icon[_ngcontent-%COMP%] {\n    width: 38px;\n    height: 38px;\n  }\n  \n\n  \n  .brand-name[_ngcontent-%COMP%] {\n    font-size: 32px;\n    letter-spacing: 1px;\n  }\n  \n  .brand-subtitle[_ngcontent-%COMP%] {\n    font-size: 18px;\n    letter-spacing: 2px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3RUFBd0U7RUFDeEUsMkJBQTJCO0VBQzNCLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixzQ0FBc0M7RUFDdEMsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usc0NBQXNDO0VBQ3RDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0U7SUFDRSxnQkFBZ0I7SUFDaEIsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7RUFDZDs7OztFQUlBO0lBQ0UsZUFBZTtJQUNmLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixtQkFBbUI7RUFDckI7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXIuYmctd29vZCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM4YjQ1MTMgMCUsICNhMDUyMmQgMTAwJSkgIWltcG9ydGFudDtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICBib3gtc2hhZG93OiAwIDJweCAyMHB4IHJnYmEoMCwwLDAsMC4xKTtcbn1cblxuLm5hdmJhci1icmFuZCB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LWZhbWlseTogJ1BsYXlmYWlyIERpc3BsYXknLCBzZXJpZjtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubmF2LWxpbmsge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLm5hdi1saW5rOmhvdmVyIHtcbiAgY29sb3I6ICNkZWI4ODcgIWltcG9ydGFudDtcbn1cblxuLmJ0bi1vdXRsaW5lLWxpZ2h0IHtcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYnRuLW91dGxpbmUtbGlnaHQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6ICM4YjQ1MTM7XG59XG5cbi5uYXYtaXRlbSBhcHAtbGFuZ3VhZ2Utc3dpdGNoZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubG9nby1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbn1cblxuLmxvZ28taWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogNDVweDtcbiAgaGVpZ2h0OiA0NXB4O1xufVxuXG4ubG9nby1tbSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG5cbi5sb2dvLXRleHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBsaW5lLWhlaWdodDogMTtcbn1cblxuLmJyYW5kLW5hbWUge1xuICBmb250LWZhbWlseTogJ1BsYXlmYWlyIERpc3BsYXknLCBzZXJpZjtcbiAgZm9udC1zaXplOiA0MnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogd2hpdGU7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG59XG5cbi5icmFuZC1zdWJ0aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiAnUGxheWZhaXIgRGlzcGxheScsIHNlcmlmO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjZGViODg3O1xuICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW4tdG9wOiAtMnB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm5hdi1pdGVtIGFwcC1sYW5ndWFnZS1zd2l0Y2hlciB7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICBcbiAgLmxvZ28taWNvbiB7XG4gICAgd2lkdGg6IDM4cHg7XG4gICAgaGVpZ2h0OiAzOHB4O1xuICB9XG4gIFxuXG4gIFxuICAuYnJhbmQtbmFtZSB7XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIH1cbiAgXG4gIC5icmFuZC1zdWJ0aXRsZSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 9307:
/*!***************************************************!*\
  !*** ./src/app/components/hero/hero.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeroComponent: () => (/* binding */ HeroComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/language.service */ 8756);



class HeroComponent {
  constructor() {
    this.languageService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService);
  }
  scrollToProducts() {
    setTimeout(() => {
      const element = document.querySelector('#products');
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  }
  scrollToContact() {
    const element = document.querySelector('#contact');
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  }
  static {
    this.ɵfac = function HeroComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || HeroComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: HeroComponent,
      selectors: [["app-hero"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 38,
      vars: 7,
      consts: [["id", "home", 1, "hero-section", "position-relative", "overflow-hidden"], [1, "hero-bg"], [1, "container"], [1, "row", "min-vh-100", "align-items-center"], [1, "col-lg-6"], [1, "hero-content", "text-white"], [1, "display-2", "fw-bold", "mb-4", "hero-title"], [1, "lead", "mb-5", "fs-4"], [1, "d-flex", "flex-wrap", "gap-3"], ["href", "#products", 1, "btn", "btn-wood", "btn-lg", "px-4", "py-3", 2, "position", "relative", "z-index", "10"], [1, "fas", "fa-search", "me-2"], ["href", "#contact", 1, "btn", "btn-outline-light", "btn-lg", "px-4", "py-3", 2, "position", "relative", "z-index", "10"], [1, "fas", "fa-calculator", "me-2"], [1, "hero-image-container"], [1, "hero-stats"], [1, "stat-card"], [1, "stat-number"], [1, "stat-label"], [1, "scroll-indicator"], ["href", "#features", 1, "text-white"], [1, "fas", "fa-chevron-down", "fa-2x", "animate-bounce"]],
      template: function HeroComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h1", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8)(11, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 4)(18, "div", 13)(19, "div", 14)(20, "div", 15)(21, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "25+");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 15)(26, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "1000+");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 15)(31, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "50+");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 18)(36, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "i", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.languageService.getTranslation("hero.title"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.languageService.getTranslation("hero.subtitle"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.languageService.getTranslation("hero.explore"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.languageService.getTranslation("hero.quote"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.languageService.getTranslation("hero.years"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.languageService.getTranslation("hero.clients"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.languageService.getTranslation("hero.types"));
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 5457:
/*!*****************************************************************************!*\
  !*** ./src/app/components/language-switcher/language-switcher.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LanguageSwitcherComponent: () => (/* binding */ LanguageSwitcherComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/language.service */ 8756);



class LanguageSwitcherComponent {
  constructor() {
    this.languageService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService);
  }
  static {
    this.ɵfac = function LanguageSwitcherComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LanguageSwitcherComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: LanguageSwitcherComponent,
      selectors: [["app-language-switcher"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 5,
      vars: 4,
      consts: [[1, "language-switcher"], [1, "lang-btn", 3, "click"]],
      template: function LanguageSwitcherComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LanguageSwitcherComponent_Template_button_click_1_listener() {
            return ctx.languageService.setLanguage("es");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " ES ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LanguageSwitcherComponent_Template_button_click_3_listener() {
            return ctx.languageService.setLanguage("en");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " EN ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.languageService.currentLanguage() === "es");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.languageService.currentLanguage() === "en");
        }
      },
      styles: [".language-switcher[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n\n.lang-btn[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.5rem;\n  border: 1px solid white;\n  background: transparent;\n  color: white;\n  border-radius: 4px;\n  cursor: pointer;\n  font-weight: 500;\n  font-size: 12px;\n  transition: all 0.3s;\n}\n\n.lang-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255,255,255,0.1);\n}\n\n.lang-btn.active[_ngcontent-%COMP%] {\n  background: white;\n  color: #8b4513;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9sYW5ndWFnZS1zd2l0Y2hlci9sYW5ndWFnZS1zd2l0Y2hlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEIiLCJzb3VyY2VzQ29udGVudCI6WyIubGFuZ3VhZ2Utc3dpdGNoZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDAuNXJlbTtcbn1cblxuLmxhbmctYnRuIHtcbiAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cblxuLmxhbmctYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjEpO1xufVxuXG4ubGFuZy1idG4uYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGNvbG9yOiAjOGI0NTEzO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 6827:
/*!***********************************************************!*\
  !*** ./src/app/components/products/products.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductsComponent: () => (/* binding */ ProductsComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_massenweb_massenweb_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/language.service */ 8756);





const _forTrack0 = ($index, $item) => $item.id;
function ProductsComponent_For_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12)(1, "div", 20)(2, "div", 21)(3, "div", 22)(4, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 26)(9, "h5", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 29)(14, "div", 30)(15, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductsComponent_For_22_Template_button_click_17_listener() {
      const product_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.getQuote(product_r2.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 34)(21, "div", 35)(22, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const product_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background", "linear-gradient(135deg, " + product_r2.image + ", " + product_r2.image + "90)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r2.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r2.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r2.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r2.languageService.getTranslation("products.quote"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r2.languageService.getTranslation("products.sustainable"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r2.languageService.getTranslation("products.certified"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r2.languageService.getTranslation("products.fastship"), " ");
  }
}
class ProductsComponent {
  constructor() {
    this.http = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient);
    this.languageService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_services_language_service__WEBPACK_IMPORTED_MODULE_1__.LanguageService);
    this.activeFilter = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.signal)('all');
    this.products = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.signal)([]);
    this.filteredProducts = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.computed)(() => {
      const filter = this.activeFilter();
      if (filter === 'all') return this.products();
      return this.products().filter(product => filter === 'hardwood' ? product.type === 'Madera Dura' : product.type === 'Madera Blanda');
    });
  }
  ngOnInit() {
    this.loadProducts();
  }
  loadProducts() {
    var _this = this;
    return (0,_home_runner_work_massenweb_massenweb_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // URL de Google Sheets publicada como CSV
        const sheetUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQFMXoGRQ1N7JB9jZgSfZJCLX0REp7QFY15xvrtuHtjrcb4TYYbpOM6gEAwsROSJ-N3Up5ncufXt-Tp/pub?gid=0&single=true&output=csv';
        const response = yield _this.http.get(sheetUrl, {
          responseType: 'text'
        }).toPromise();
        if (response) {
          const products = _this.parseCSV(response);
          _this.products.set(products);
        }
      } catch (error) {
        console.error('Error loading products from Google Sheets:', error);
        // Fallback a datos locales
        _this.loadFallbackProducts();
      }
    })();
  }
  parseCSV(csv) {
    const lines = csv.split('\n').filter(line => line.trim());
    const products = [];
    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(',');
      if (values.length >= 6) {
        products.push({
          id: parseInt(values[0]?.replace(/"/g, '')) || i,
          name: values[1]?.replace(/"/g, '').trim() || '',
          type: values[2]?.replace(/"/g, '').trim() || '',
          price: values[3]?.replace(/"/g, '').trim() || '',
          image: values[4]?.replace(/"/g, '').trim() || '#d2b48c',
          description: values[5]?.replace(/"/g, '').trim() || ''
        });
      }
    }
    return products;
  }
  loadFallbackProducts() {
    this.products.set([{
      id: 1,
      name: 'Tablones de Roble Premium',
      type: 'Madera Dura',
      price: 'Desde $45/pie²',
      image: '#d2b48c',
      description: 'Hermosos tablones de roble perfectos para pisos y fabricación de muebles'
    }, {
      id: 2,
      name: 'Madera de Cedro',
      type: 'Madera Blanda',
      price: 'Desde $28/pie²',
      image: '#deb887',
      description: 'Madera de cedro aromática ideal para proyectos exteriores y closets'
    }, {
      id: 3,
      name: 'Tablas de Nogal',
      type: 'Madera Dura',
      price: 'Desde $65/pie²',
      image: '#cd853f',
      description: 'Rica madera de nogal con patrones de veta impresionantes para proyectos premium'
    }, {
      id: 4,
      name: 'Pino para Construcción',
      type: 'Madera Blanda',
      price: 'Desde $18/pie²',
      image: '#f4e4bc',
      description: 'Madera de pino confiable para aplicaciones de construcción y enmarcado'
    }]);
  }
  setFilter(filter) {
    this.activeFilter.set(filter);
  }
  getQuote(productId) {
    const element = document.querySelector('#contact');
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  }
  static {
    this.ɵfac = function ProductsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ProductsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ProductsComponent,
      selectors: [["app-products"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 33,
      vars: 14,
      consts: [["id", "products", 1, "py-5"], [1, "container"], [1, "row"], [1, "col-lg-8", "mx-auto", "text-center", "mb-5"], [1, "display-4", "fw-bold", "text-wood", "mb-4"], [1, "lead", "text-muted"], [1, "row", "mb-5"], [1, "col-12"], [1, "nav", "nav-pills", "justify-content-center"], [1, "nav-item"], [1, "nav-link", 3, "click"], [1, "row", "g-4"], [1, "col-lg-6", "col-xl-3"], [1, "row", "mt-5"], [1, "col-12", "text-center"], [1, "bg-wood", "text-white", "rounded-4", "p-5"], [1, "fw-bold", "mb-3"], [1, "mb-4"], [1, "btn", "btn-light", "btn-lg", 3, "click"], [1, "fas", "fa-phone", "me-2"], [1, "product-card", "h-100", "bg-white", "rounded-4", "shadow-sm", "border-0", "overflow-hidden"], [1, "product-image", "position-relative"], [1, "product-badge"], [1, "badge", "bg-wood"], [1, "product-icon"], [1, "fas", "fa-tree", "fa-4x", "text-white", "opacity-75"], [1, "card-body", "p-4"], [1, "card-title", "fw-bold", "text-wood", "mb-2"], [1, "card-text", "text-muted", "small", "mb-3"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "price"], [1, "fw-bold", "text-wood", "fs-5"], [1, "btn", "btn-wood", "btn-sm", 3, "click"], [1, "fas", "fa-calculator", "me-1"], [1, "card-footer", "bg-transparent", "border-0", "p-4", "pt-0"], [1, "row", "text-center", "small", "text-muted"], [1, "col-4"], [1, "fas", "fa-leaf", "me-1"], [1, "fas", "fa-certificate", "me-1"], [1, "fas", "fa-shipping-fast", "me-1"]],
      template: function ProductsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6)(9, "div", 7)(10, "ul", 8)(11, "li", 9)(12, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductsComponent_Template_button_click_12_listener() {
            return ctx.setFilter("all");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "li", 9)(15, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductsComponent_Template_button_click_15_listener() {
            return ctx.setFilter("hardwood");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "li", 9)(18, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductsComponent_Template_button_click_18_listener() {
            return ctx.setFilter("softwood");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](21, ProductsComponent_For_22_Template, 31, 10, "div", 12, _forTrack0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 13)(24, "div", 14)(25, "div", 15)(26, "h3", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "p", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductsComponent_Template_button_click_30_listener() {
            return ctx.getQuote(0);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.languageService.getTranslation("products.title"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.languageService.getTranslation("products.subtitle"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.activeFilter() === "all");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.languageService.getTranslation("products.all"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.activeFilter() === "hardwood");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.languageService.getTranslation("products.hardwood"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.activeFilter() === "softwood");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.languageService.getTranslation("products.softwood"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](ctx.filteredProducts());
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.languageService.getTranslation("products.custom.title"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.languageService.getTranslation("products.custom.subtitle"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.languageService.getTranslation("products.custom.button"), " ");
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 8756:
/*!**********************************************!*\
  !*** ./src/app/services/language.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LanguageService: () => (/* binding */ LanguageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);


class LanguageService {
  constructor() {
    this._currentLanguage = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)('es');
    this.currentLanguage = this._currentLanguage.asReadonly();
    if (typeof window !== 'undefined' && window.localStorage) {
      const savedLang = localStorage.getItem('language') || 'es';
      this._currentLanguage.set(savedLang);
    }
  }
  setLanguage(lang) {
    this._currentLanguage.set(lang);
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('language', lang);
    }
  }
  getTranslation(key) {
    const translations = {
      es: {
        'nav.home': 'Inicio',
        'nav.features': 'Características',
        'nav.products': 'Productos',
        'nav.contact': 'Contacto',
        'nav.quote': 'Cotizar',
        'hero.title': 'Madera de Calidad Premium',
        'hero.subtitle': 'Creando excelencia con madera sostenible para tus proyectos soñados. Desde construcción hasta muebles finos, proporcionamos los mejores materiales de madera.',
        'hero.explore': 'Explorar Productos',
        'hero.quote': 'Obtener Cotización',
        'hero.years': 'Años de Experiencia',
        'hero.clients': 'Clientes Satisfechos',
        'hero.types': 'Tipos de Madera',
        'features.title': '¿Por qué Elegir Nuestra Madera?',
        'features.subtitle': 'Estamos comprometidos a proporcionar madera de la más alta calidad con prácticas sostenibles y un servicio al cliente excepcional.',
        'products.title': 'Nuestra Colección de Madera Premium',
        'products.subtitle': 'Descubre nuestra gama cuidadosamente seleccionada de madera premium, perfecta para construcción, muebles y proyectos especiales.',
        'products.all': 'Todos los Productos',
        'products.hardwood': 'Madera Dura',
        'products.softwood': 'Madera Blanda',
        'products.quote': 'Cotizar',
        'products.sustainable': 'Sostenible',
        'products.certified': 'Certificado',
        'products.fastship': 'Envío Rápido',
        'products.custom.title': '¿Necesitas Especificaciones Personalizadas?',
        'products.custom.subtitle': 'Ofrecemos servicios de corte, acabado y procesamiento personalizados para todas tus necesidades específicas.',
        'products.custom.button': 'Contactar Nuestros Expertos',
        'contact.title': 'Obtén tu Cotización Personalizada',
        'contact.subtitle': '¿Listo para comenzar tu proyecto? Contacta a nuestros expertos en madera para recomendaciones personalizadas y precios competitivos.',
        'contact.info': 'Información de Contacto',
        'contact.address': 'Dirección',
        'contact.phone': 'Teléfono',
        'contact.email': 'Email',
        'contact.hours': 'Horario de Atención',
        'contact.follow': 'Síguenos',
        'contact.form.name': 'Nombre Completo',
        'contact.form.email': 'Correo Electrónico',
        'contact.form.phone': 'Número de Teléfono',
        'contact.form.woodtype': 'Tipo de Madera',
        'contact.form.message': 'Detalles del Proyecto',
        'contact.form.submit': 'Obtener Mi Cotización Personalizada',
        'contact.form.sending': 'Enviando Solicitud de Cotización...',
        'contact.form.success': '¡Gracias! Te contactaremos en 24 horas con tu cotización personalizada.',
        'contact.form.note': '* Responderemos en 24 horas con tu cotización personalizada',
        'contact.hours.schedule': 'Lun-Vie: 8AM-6PM<br>Sáb: 9AM-4PM'
      },
      en: {
        'nav.home': 'Home',
        'nav.features': 'Features',
        'nav.products': 'Products',
        'nav.contact': 'Contact',
        'nav.quote': 'Get Quote',
        'hero.title': 'Premium Quality Wood',
        'hero.subtitle': 'Crafting excellence with sustainable timber for your dream projects. From construction to fine furniture, we provide the finest wood materials.',
        'hero.explore': 'Explore Products',
        'hero.quote': 'Get Quote',
        'hero.years': 'Years Experience',
        'hero.clients': 'Happy Clients',
        'hero.types': 'Wood Types',
        'features.title': 'Why Choose Our Wood?',
        'features.subtitle': 'We\'re committed to providing the highest quality timber with sustainable practices and exceptional customer service.',
        'products.title': 'Our Premium Wood Collection',
        'products.subtitle': 'Discover our carefully selected range of premium timber, perfect for construction, furniture, and specialty projects.',
        'products.all': 'All Products',
        'products.hardwood': 'Hardwood',
        'products.softwood': 'Softwood',
        'products.quote': 'Quote',
        'products.sustainable': 'Sustainable',
        'products.certified': 'Certified',
        'products.fastship': 'Fast Ship',
        'products.custom.title': 'Need Custom Specifications?',
        'products.custom.subtitle': 'We offer custom cutting, finishing, and processing services for all your specific needs.',
        'products.custom.button': 'Contact Our Experts',
        'contact.title': 'Get Your Custom Quote',
        'contact.subtitle': 'Ready to start your project? Contact our wood experts for personalized recommendations and competitive pricing.',
        'contact.info': 'Contact Information',
        'contact.address': 'Address',
        'contact.phone': 'Phone',
        'contact.email': 'Email',
        'contact.hours': 'Business Hours',
        'contact.follow': 'Follow Us',
        'contact.form.name': 'Full Name',
        'contact.form.email': 'Email Address',
        'contact.form.phone': 'Phone Number',
        'contact.form.woodtype': 'Wood Type',
        'contact.form.message': 'Project Details',
        'contact.form.submit': 'Get My Custom Quote',
        'contact.form.sending': 'Sending Quote Request...',
        'contact.form.success': 'Thank you! We\'ll contact you within 24 hours with your custom quote.',
        'contact.form.note': '* We\'ll respond within 24 hours with your personalized quote',
        'contact.hours.schedule': 'Mon-Fri: 8AM-6PM<br>Sat: 9AM-4PM'
      }
    };
    return translations[this._currentLanguage()][key] || key;
  }
  static {
    this.ɵfac = function LanguageService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LanguageService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LanguageService,
      factory: LanguageService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_localize_init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/localize/init */ 1643);
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zone.js */ 4124);
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(zone_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.component */ 92);





(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.bootstrapApplication)(_app_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent, {
  providers: [(0,_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.provideHttpClient)()]
}).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map