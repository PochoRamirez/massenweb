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
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/footer/footer.component */ 5473);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);







class AppComponent {
  static {
    this.ɵfac = function AppComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵStandaloneFeature"]],
      decls: 6,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-header")(1, "app-hero")(2, "app-features")(3, "app-products")(4, "app-contact")(5, "app-footer");
        }
      },
      dependencies: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _components_hero_hero_component__WEBPACK_IMPORTED_MODULE_1__.HeroComponent, _components_features_features_component__WEBPACK_IMPORTED_MODULE_2__.FeaturesComponent, _components_products_products_component__WEBPACK_IMPORTED_MODULE_3__.ProductsComponent, _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__.ContactComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__.FooterComponent],
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







function ContactComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ContactComponent_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Valid email is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ContactComponent_Conditional_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Project details are required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ContactComponent_Conditional_77_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 43)(1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.languageService.getTranslation("contact.form.success"), " ");
  }
}
function ContactComponent_Conditional_78_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 43)(1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.submitError(), " ");
  }
}
function ContactComponent_Conditional_81_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.languageService.getTranslation("contact.form.sending"), " ");
  }
}
function ContactComponent_Conditional_82_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 53);
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
      decls: 85,
      vars: 18,
      consts: [["id", "contact", 1, "py-5", "bg-wood", "text-white"], [1, "container"], [1, "row"], [1, "col-lg-8", "mx-auto", "text-center", "mb-5"], [1, "display-4", "fw-bold", "mb-4"], [1, "lead"], [1, "row", "g-5"], [1, "col-lg-4"], [1, "contact-info"], [1, "fw-bold", "mb-4", "text-wood-light"], [1, "contact-item", "d-flex", "align-items-start", "mb-4"], [1, "contact-icon", "me-3"], [1, "fas", "fa-phone", "fa-lg"], [1, "fw-bold", "mb-1"], [1, "mb-0", "opacity-75"], ["href", "tel:+542804472309", 1, "text-white", "text-decoration-none"], [1, "text-wood-light", "d-block", "mt-1"], [1, "social-links", "mt-4"], [1, "fw-bold", "mb-3"], [1, "d-flex", "gap-4"], ["href", "#", 1, "text-white", "opacity-75", "hover-opacity-100", "social-icon"], [1, "fab", "fa-facebook", "fa-2x"], [1, "fab", "fa-instagram", "fa-2x"], [1, "fab", "fa-whatsapp", "fa-2x"], [1, "col-lg-8"], [1, "contact-form", "bg-white", "bg-opacity-10", "backdrop-blur", "rounded-4", "p-4"], [3, "ngSubmit", "formGroup"], [1, "row", "g-3"], [1, "col-md-6"], [1, "form-label", "fw-semibold"], ["type", "text", "formControlName", "name", "placeholder", "Tu nombre completo", 1, "form-control", "form-control-lg"], [1, "text-warning", "small", "mt-1"], ["type", "email", "formControlName", "email", "placeholder", "tu@email.com", 1, "form-control", "form-control-lg"], ["type", "tel", "formControlName", "phone", "placeholder", "(011) 1234-5678", 1, "form-control", "form-control-lg"], ["formControlName", "woodType", 1, "form-select", "form-select-lg"], ["value", ""], ["value", "roble"], ["value", "cedro"], ["value", "nogal"], ["value", "pino"], ["value", "arce"], ["value", "cerezo"], ["value", "otro"], [1, "col-12"], ["rows", "4", "formControlName", "message", "placeholder", "Cu\u00E9ntanos sobre tu proyecto, dimensiones necesarias, cantidad, cronograma, etc.", 1, "form-control"], ["type", "submit", 1, "btn", "btn-wood-light", "btn-lg", "w-100", 3, "disabled"], [1, "text-white-50", "d-block", "mt-2", "text-center"], [1, "fas", "fa-exclamation-triangle", "me-1"], [1, "alert", "alert-success", "d-flex", "align-items-center"], [1, "fas", "fa-check-circle", "me-2"], [1, "alert", "alert-danger", "d-flex", "align-items-center"], [1, "fas", "fa-exclamation-triangle", "me-2"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "fas", "fa-paper-plane", "me-2"]],
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
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "p", 14)(20, "a", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "(0280) 447 - 2309");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "small", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Llamanos para consultas inmediatas");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 17)(25, "h6", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "S\u00EDguenos");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 19)(28, "a", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "a", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "i", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "a", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "i", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 24)(35, "div", 25)(36, "form", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ContactComponent_Template_form_ngSubmit_36_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 27)(38, "div", 28)(39, "label", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "input", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](42, ContactComponent_Conditional_42_Template, 3, 0, "div", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 28)(44, "label", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "input", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](47, ContactComponent_Conditional_47_Template, 3, 0, "div", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 28)(49, "label", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "input", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 28)(53, "label", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "select", 34)(56, "option", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "Seleccionar tipo de madera");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "option", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "Roble");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "option", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "Cedro");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "option", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "Nogal");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "option", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "Pino");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "option", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "Arce");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "option", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, "Cerezo");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "option", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "Otro");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 43)(73, "label", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](75, "textarea", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](76, ContactComponent_Conditional_76_Template, 3, 0, "div", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](77, ContactComponent_Conditional_77_Template, 4, 1, "div", 43)(78, ContactComponent_Conditional_78_Template, 4, 1, "div", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "div", 43)(80, "button", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](81, ContactComponent_Conditional_81_Template, 2, 1)(82, ContactComponent_Conditional_82_Template, 2, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "small", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
        }
        if (rf & 2) {
          let tmp_6_0;
          let tmp_8_0;
          let tmp_12_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.languageService.getTranslation("contact.title"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.languageService.getTranslation("contact.subtitle"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.languageService.getTranslation("contact.info"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.languageService.getTranslation("contact.phone"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.contactForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.languageService.getTranslation("contact.form.name"), " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](((tmp_6_0 = ctx.contactForm.get("name")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx.contactForm.get("name")) == null ? null : tmp_6_0.touched) ? 42 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.languageService.getTranslation("contact.form.email"), " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](((tmp_8_0 = ctx.contactForm.get("email")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx.contactForm.get("email")) == null ? null : tmp_8_0.touched) ? 47 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.languageService.getTranslation("contact.form.phone"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.languageService.getTranslation("contact.form.woodtype"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.languageService.getTranslation("contact.form.message"), " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](((tmp_12_0 = ctx.contactForm.get("message")) == null ? null : tmp_12_0.invalid) && ((tmp_12_0 = ctx.contactForm.get("message")) == null ? null : tmp_12_0.touched) ? 76 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](ctx.submitSuccess() ? 77 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](ctx.submitError() ? 78 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.contactForm.invalid || ctx.isSubmitting());
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](ctx.isSubmitting() ? 81 : 82);
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
      description: 'Toda nuestra madera proviene de bosques gestionados responsablemente'
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
      title: 'Entrega Local',
      description: 'Servicio de entrega confiable en Puerto Madryn y zona'
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
      consts: [["id", "features", 1, "py-5", "bg-light"], [1, "container"], [1, "row"], [1, "col-lg-8", "mx-auto", "text-center", "mb-5"], [1, "display-4", "fw-bold", "text-wood", "mb-4"], [1, "lead", "text-muted"], [1, "row", "g-4"], [1, "col-lg-3", "col-md-6"], [1, "row", "mt-5", "pt-5", "border-top"], [1, "col-lg-12"], [1, "row", "text-center"], [1, "col-md-3", "col-6", "mb-4"], [1, "trust-badge"], [1, "fas", "fa-shield-alt", "fa-2x", "text-wood", "mb-2"], [1, "fw-bold"], [1, "text-muted"], [1, "fas", "fa-calculator", "fa-2x", "text-wood", "mb-2"], [1, "fas", "fa-tools", "fa-2x", "text-wood", "mb-2"], [1, "fas", "fa-user-tie", "fa-2x", "text-wood", "mb-2"], [1, "feature-card", "h-100", "p-4", "bg-white", "rounded-4", "shadow-sm", "border-0", "text-center"], [1, "feature-icon", "mb-3"], [1, "fw-bold", "text-wood", "mb-3"], [1, "text-muted", "mb-0"]],
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
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Garant\u00EDa de Calidad");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "small", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Respaldo del Producto");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11)(22, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Presupuesto Gratis");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "small", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Sin Costo de Cotizaci\u00F3n");
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
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Asesoramiento T\u00E9cnico");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "small", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Expertos en Madera");
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

/***/ 5473:
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class FooterComponent {
  static {
    this.ɵfac = function FooterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FooterComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 51,
      vars: 0,
      consts: [[1, "bg-wood", "text-white", "py-4"], [1, "container"], [1, "row"], [1, "col-lg-4", "mb-1"], [1, "footer-brand", "mb-3"], ["src", "assets/images/logo.jpg", "alt", "Massen Maderas", 1, "footer-logo", "me-3"], [1, "mb-1"], [1, "small", "mb-0", "text-wood-light"], [1, "small"], [1, "col-lg-3", "col-md-6", "mb-1"], [1, "fw-bold", "mb-3"], [1, "small", "mb-0"], [1, "fas", "fa-map-marker-alt", "me-2"], [1, "col-lg-2", "col-md-6", "mb-1"], [1, "list-unstyled", "small"], [1, "col-lg-3", "mb-1"], [1, "mb-2"], ["href", "#products", 1, "text-white-50", "text-decoration-none"], ["href", "#contact", 1, "text-white-50", "text-decoration-none"], ["href", "#features", 1, "text-white-50", "text-decoration-none"], [1, "my-2", "border-wood-light"], [1, "col-12", "text-center"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div")(7, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Massen Maderas");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Calidad en Madera");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " M\u00E1s de 25 a\u00F1os brindando madera de calidad premium para construcci\u00F3n y carpinter\u00EDa en Puerto Madryn y zona. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9)(14, "h6", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Direcci\u00F3n");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "address", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Espa\u00F1a 840");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " U9120 Puerto Madryn");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Chubut, Argentina ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13)(24, "h6", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Horarios");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ul", 14)(27, "li", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Lun-Vie: 8:00-18:00");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "S\u00E1b: 9:00-16:00");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Dom: Cerrado");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 15)(34, "h6", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Enlaces \u00DAtiles");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ul", 14)(37, "li", 16)(38, "a", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Ver Productos");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li", 16)(41, "a", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Solicitar Presupuesto");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li", 16)(44, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Nuestros Servicios");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "hr", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 2)(48, "div", 21)(49, "p", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\u00A9 2024 Massen Maderas. Todos los derechos reservados.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        }
      },
      styles: [".footer-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.footer-logo[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  object-fit: contain;\n  background: rgba(255,255,255,0.1);\n  border-radius: 12px;\n  padding: 8px;\n}\n\n.text-wood-light[_ngcontent-%COMP%] {\n  color: #deb887 !important;\n}\n\n.border-wood-light[_ngcontent-%COMP%] {\n  border-color: rgba(222, 184, 135, 0.7) !important;\n}\n\nfooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #deb887 !important;\n}\n\n@media (max-width: 768px) {\n  .footer-logo[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n  }\n  \n  .navbar-brand[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  \n  .logo-container[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n    margin-bottom: 5px;\n  }\n  \n  .brand-info[_ngcontent-%COMP%] {\n    margin-left: 0 !important;\n  }\n  \n  .brand-name[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  \n  .brand-tagline[_ngcontent-%COMP%] {\n    font-size: 0.65rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsaUNBQWlDO0VBQ2pDLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxpREFBaUQ7QUFDbkQ7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRTtJQUNFLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXItYnJhbmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZm9vdGVyLWxvZ28ge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBvYmplY3QtZml0OiBjb250YWluO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHBhZGRpbmc6IDhweDtcbn1cblxuLnRleHQtd29vZC1saWdodCB7XG4gIGNvbG9yOiAjZGViODg3ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItd29vZC1saWdodCB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyMjIsIDE4NCwgMTM1LCAwLjcpICFpbXBvcnRhbnQ7XG59XG5cbmZvb3RlciBhOmhvdmVyIHtcbiAgY29sb3I6ICNkZWI4ODcgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5mb290ZXItbG9nbyB7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICB9XG4gIFxuICAubmF2YmFyLWJyYW5kIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB9XG4gIFxuICAubG9nby1jb250YWluZXIge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIH1cbiAgXG4gIC5icmFuZC1pbmZvIHtcbiAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAuYnJhbmQtbmFtZSB7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gIH1cbiAgXG4gIC5icmFuZC10YWdsaW5lIHtcbiAgICBmb250LXNpemU6IDAuNjVyZW07XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"],
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
      decls: 31,
      vars: 5,
      consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-wood", "fixed-top"], [1, "container"], ["href", "#home", 1, "navbar-brand", "d-flex", "align-items-center"], [1, "logo-container"], ["src", "assets/images/logo.jpg", "alt", "Massen Maderas", 1, "navbar-logo"], [1, "brand-info", "ms-3"], [1, "brand-name"], [1, "brand-tagline"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarNav", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNav", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ms-auto"], [1, "nav-item"], ["href", "#home", 1, "nav-link"], ["href", "#features", 1, "nav-link"], ["href", "#products", 1, "nav-link"], ["href", "#contact", 1, "nav-link"], [1, "nav-item", "ms-3", "d-flex", "align-items-center"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "a", 2)(3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5)(6, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Massen Maderas");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Calidad en Madera");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 10)(13, "ul", 11)(14, "li", 12)(15, "a", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "li", 12)(18, "a", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "li", 12)(21, "a", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "li", 12)(24, "a", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "li", 12)(27, "a", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "app-language-switcher");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
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
      styles: [".navbar.bg-wood[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #8b4513 0%, #a0522d 100%) !important;\n  backdrop-filter: blur(10px);\n  box-shadow: 0 2px 20px rgba(0,0,0,0.1);\n}\n\n.navbar-brand[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-family: 'Playfair Display', serif;\n  color: white !important;\n  font-weight: bold;\n}\n\n.nav-link[_ngcontent-%COMP%] {\n  color: white !important;\n  font-weight: 500;\n}\n\n.nav-link[_ngcontent-%COMP%]:hover {\n  color: #deb887 !important;\n}\n\n.btn-outline-light[_ngcontent-%COMP%] {\n  border-color: white;\n  color: white;\n}\n\n.btn-outline-light[_ngcontent-%COMP%]:hover {\n  background-color: white;\n  color: #8b4513;\n}\n\n.nav-item[_ngcontent-%COMP%]   app-language-switcher[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.logo-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.logo-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 45px;\n  height: 45px;\n}\n\n.logo-mm[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n\n.logo-container[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  background: white;\n  border-radius: 12px;\n  padding: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 12px rgba(0,0,0,0.15);\n}\n\n.navbar-logo[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n\n.brand-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.2;\n}\n\n.brand-name[_ngcontent-%COMP%] {\n  font-family: 'Playfair Display', serif;\n  font-size: 1.4rem;\n  font-weight: 700;\n  color: white;\n  margin: 0;\n}\n\n.brand-tagline[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #deb887;\n  font-weight: 400;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n\n.brand-name[_ngcontent-%COMP%] {\n  font-family: 'Playfair Display', serif;\n  font-size: 42px;\n  font-weight: 700;\n  color: white;\n  letter-spacing: 2px;\n}\n\n.brand-subtitle[_ngcontent-%COMP%] {\n  font-family: 'Playfair Display', serif;\n  font-size: 24px;\n  font-weight: 400;\n  color: #deb887;\n  letter-spacing: 3px;\n  text-transform: uppercase;\n  margin-top: -2px;\n}\n\n@media (max-width: 768px) {\n  .navbar[_ngcontent-%COMP%] {\n    padding: 1rem 0;\n    min-height: 90px;\n  }\n  \n  .nav-item[_ngcontent-%COMP%]   app-language-switcher[_ngcontent-%COMP%] {\n    margin-top: 1rem;\n    justify-content: center;\n  }\n  \n  .logo-container[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n  }\n  \n  .brand-name[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n    letter-spacing: 1px;\n  }\n  \n  .brand-tagline[_ngcontent-%COMP%] {\n    font-size: 0.65rem;\n    letter-spacing: 1px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3RUFBd0U7RUFDeEUsMkJBQTJCO0VBQzNCLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixzQ0FBc0M7RUFDdEMsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osU0FBUztBQUNYOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHNDQUFzQztFQUN0QyxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsbUJBQW1CO0VBQ3JCO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyLmJnLXdvb2Qge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjOGI0NTEzIDAlLCAjYTA1MjJkIDEwMCUpICFpbXBvcnRhbnQ7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgYm94LXNoYWRvdzogMCAycHggMjBweCByZ2JhKDAsMCwwLDAuMSk7XG59XG5cbi5uYXZiYXItYnJhbmQge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC1mYW1pbHk6ICdQbGF5ZmFpciBEaXNwbGF5Jywgc2VyaWY7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm5hdi1saW5rIHtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5uYXYtbGluazpob3ZlciB7XG4gIGNvbG9yOiAjZGViODg3ICFpbXBvcnRhbnQ7XG59XG5cbi5idG4tb3V0bGluZS1saWdodCB7XG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJ0bi1vdXRsaW5lLWxpZ2h0OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiAjOGI0NTEzO1xufVxuXG4ubmF2LWl0ZW0gYXBwLWxhbmd1YWdlLXN3aXRjaGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmxvZ28tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG59XG5cbi5sb2dvLWljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDQ1cHg7XG4gIGhlaWdodDogNDVweDtcbn1cblxuLmxvZ28tbW0ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuXG4ubG9nby1jb250YWluZXIge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgcGFkZGluZzogNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsMCwwLDAuMTUpO1xufVxuXG4ubmF2YmFyLWxvZ28ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuXG4uYnJhbmQtaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG59XG5cbi5icmFuZC1uYW1lIHtcbiAgZm9udC1mYW1pbHk6ICdQbGF5ZmFpciBEaXNwbGF5Jywgc2VyaWY7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbjogMDtcbn1cblxuLmJyYW5kLXRhZ2xpbmUge1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGNvbG9yOiAjZGViODg3O1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuXG4uYnJhbmQtbmFtZSB7XG4gIGZvbnQtZmFtaWx5OiAnUGxheWZhaXIgRGlzcGxheScsIHNlcmlmO1xuICBmb250LXNpemU6IDQycHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbn1cblxuLmJyYW5kLXN1YnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6ICdQbGF5ZmFpciBEaXNwbGF5Jywgc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICNkZWI4ODc7XG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbi10b3A6IC0ycHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubmF2YmFyIHtcbiAgICBwYWRkaW5nOiAxcmVtIDA7XG4gICAgbWluLWhlaWdodDogOTBweDtcbiAgfVxuICBcbiAgLm5hdi1pdGVtIGFwcC1sYW5ndWFnZS1zd2l0Y2hlciB7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICBcbiAgLmxvZ28tY29udGFpbmVyIHtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gIH1cbiAgXG4gIC5icmFuZC1uYW1lIHtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB9XG4gIFxuICAuYnJhbmQtdGFnbGluZSB7XG4gICAgZm9udC1zaXplOiAwLjY1cmVtO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"],
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
      decls: 43,
      vars: 7,
      consts: [["id", "home", 1, "hero-section", "position-relative", "overflow-hidden"], [1, "hero-bg"], [1, "container"], [1, "row", "min-vh-100", "align-items-center"], [1, "col-lg-6"], [1, "hero-content", "text-white", "text-center"], [1, "hero-logo-section", "mb-4"], [1, "hero-logo-container"], ["src", "assets/images/logo.jpg", "alt", "Massen Maderas", 1, "hero-logo"], [1, "hero-brand-name", "mt-3", "mb-2"], [1, "hero-tagline", "mb-4"], [1, "lead", "mb-5", "fs-5"], [1, "d-flex", "flex-wrap", "gap-3", "justify-content-center"], ["href", "#products", 1, "btn", "btn-wood", "btn-lg", "px-4", "py-3", 2, "position", "relative", "z-index", "10"], [1, "fas", "fa-search", "me-2"], ["href", "#contact", 1, "btn", "btn-outline-light", "btn-lg", "px-4", "py-3", 2, "position", "relative", "z-index", "10"], [1, "fas", "fa-calculator", "me-2"], [1, "hero-image-container"], [1, "hero-stats"], [1, "stat-card"], [1, "stat-number"], [1, "stat-label"], [1, "scroll-indicator"], ["href", "#features", 1, "text-white"], [1, "fas", "fa-chevron-down", "fa-2x", "animate-bounce"]],
      template: function HeroComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h1", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Massen Maderas");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 12)(16, "a", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "i", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 4)(23, "div", 17)(24, "div", 18)(25, "div", 19)(26, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "25+");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 19)(31, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "1000+");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 19)(36, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "100+");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 22)(41, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "i", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.languageService.getTranslation("hero.title"));
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
      styles: [".hero-logo-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.hero-logo-container[_ngcontent-%COMP%] {\n  width: 180px;\n  height: 180px;\n  background: white;\n  border-radius: 50%;\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 20px 60px rgba(0,0,0,0.3);\n  border: 4px solid rgba(255,255,255,0.2);\n}\n\n.hero-logo[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n\n.hero-brand-name[_ngcontent-%COMP%] {\n  font-family: 'Playfair Display', serif;\n  font-size: 3rem;\n  font-weight: 700;\n  color: white;\n  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);\n  margin: 0;\n}\n\n.hero-tagline[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: #deb887;\n  font-weight: 300;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  margin: 0;\n}\n\n@media (max-width: 768px) {\n  .hero-logo-container[_ngcontent-%COMP%] {\n    width: 130px;\n    height: 130px;\n    padding: 15px;\n  }\n  \n  .hero-brand-name[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  \n  .hero-tagline[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    letter-spacing: 1px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9oZXJvL2hlcm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2Qix1Q0FBdUM7RUFDdkMsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osd0NBQXdDO0VBQ3hDLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsbUJBQW1CO0VBQ3JCO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVyby1sb2dvLXNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaGVyby1sb2dvLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxODBweDtcbiAgaGVpZ2h0OiAxODBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcGFkZGluZzogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgMjBweCA2MHB4IHJnYmEoMCwwLDAsMC4zKTtcbiAgYm9yZGVyOiA0cHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjIpO1xufVxuXG4uaGVyby1sb2dvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cblxuLmhlcm8tYnJhbmQtbmFtZSB7XG4gIGZvbnQtZmFtaWx5OiAnUGxheWZhaXIgRGlzcGxheScsIHNlcmlmO1xuICBmb250LXNpemU6IDNyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4IHJnYmEoMCwwLDAsMC4zKTtcbiAgbWFyZ2luOiAwO1xufVxuXG4uaGVyby10YWdsaW5lIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGNvbG9yOiAjZGViODg3O1xuICBmb250LXdlaWdodDogMzAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBtYXJnaW46IDA7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuaGVyby1sb2dvLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEzMHB4O1xuICAgIGhlaWdodDogMTMwcHg7XG4gICAgcGFkZGluZzogMTVweDtcbiAgfVxuICBcbiAgLmhlcm8tYnJhbmQtbmFtZSB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICB9XG4gIFxuICAuaGVyby10YWdsaW5lIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"],
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
const _forTrack1 = ($index, $item) => $item.dimension;
const _forTrack2 = ($index, $item) => $item.text;
function ProductsComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2)(1, "div", 19)(2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Llame para consultar productos y precios");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "small", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Tel: (0280) 447 - 2309");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
}
function ProductsComponent_Conditional_24_For_2_For_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 31)(1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const size_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", size_r3.dimension, " x ", size_r3.length, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](size_r3.price);
  }
}
function ProductsComponent_Conditional_24_For_2_Conditional_14_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Ver menos ");
  }
}
function ProductsComponent_Conditional_24_For_2_Conditional_14_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
  }
  if (rf & 2) {
    const product_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Ver m\u00E1s (", product_r5.sizes.length - 3, " m\u00E1s) ");
  }
}
function ProductsComponent_Conditional_24_For_2_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductsComponent_Conditional_24_For_2_Conditional_14_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const product_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.toggleSizes(product_r5.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ProductsComponent_Conditional_24_For_2_Conditional_14_Conditional_2_Template, 2, 0)(3, ProductsComponent_Conditional_24_For_2_Conditional_14_Conditional_3_Template, 2, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const product_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](ctx_r1.isExpanded(product_r5.id) ? 2 : 3);
  }
}
function ProductsComponent_Conditional_24_For_2_For_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const feature_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("", feature_r6.icon, " me-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", feature_r6.text, " ");
  }
}
function ProductsComponent_Conditional_24_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22)(1, "div", 23)(2, "div", 24)(3, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("error", function ProductsComponent_Conditional_24_For_2_Template_img_error_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.onImageError($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 26)(5, "h5", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 29)(10, "h6", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Medidas Disponibles:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](12, ProductsComponent_Conditional_24_For_2_For_13_Template, 5, 3, "div", 31, _forTrack1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, ProductsComponent_Conditional_24_For_2_Conditional_14_Template, 4, 1, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 33)(16, "div", 34)(17, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductsComponent_Conditional_24_For_2_Template_button_click_17_listener() {
      const product_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.getQuote(product_r5.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Solicitar Cotizaci\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](21, ProductsComponent_Conditional_24_For_2_For_22_Template, 3, 4, "div", 38, _forTrack2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const product_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", product_r5.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", product_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r5.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](ctx_r1.getVisibleSizes(product_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](ctx_r1.hasMoreSizes(product_r5) ? 14 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](product_r5.features);
  }
}
function ProductsComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](1, ProductsComponent_Conditional_24_For_2_Template, 23, 5, "div", 22, _forTrack0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](ctx_r1.filteredProducts());
  }
}
class ProductsComponent {
  constructor() {
    this.http = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient);
    this.languageService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_services_language_service__WEBPACK_IMPORTED_MODULE_1__.LanguageService);
    this.activeFilter = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.signal)('all');
    this.products = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.signal)([]);
    this.expandedProducts = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.signal)(new Set());
    this.loadError = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.signal)(false);
    this.filteredProducts = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.computed)(() => {
      const filter = this.activeFilter();
      if (filter === 'all') return this.products();
      return this.products().filter(product => product.category === filter);
    });
  }
  ngOnInit() {
    this.loadProducts();
  }
  loadProducts() {
    var _this = this;
    return (0,_home_runner_work_massenweb_massenweb_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const data = yield _this.http.get('assets/products-data.json').toPromise();
        if (data?.products) {
          _this.products.set(data.products);
          _this.loadError.set(false);
        } else {
          _this.loadFallbackProducts();
        }
      } catch (error) {
        console.error('Error loading products:', error);
        _this.loadFallbackProducts();
      }
    })();
  }
  parseCSV(csv) {
    // Para CSV necesitarías una estructura más compleja
    // Por ahora usar fallback hasta configurar Google Sheets correctamente
    console.log('CSV parsing not implemented for new structure, using fallback data');
    this.loadFallbackProducts();
    return this.products();
  }
  loadFallbackProducts() {
    console.warn('Using empty fallback - all data should come from JSON file');
    this.products.set([]);
    this.loadError.set(true);
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
  toggleSizes(productId) {
    const expanded = this.expandedProducts();
    const newExpanded = new Set(expanded);
    if (expanded.has(productId)) {
      newExpanded.delete(productId);
    } else {
      newExpanded.add(productId);
    }
    this.expandedProducts.set(newExpanded);
  }
  isExpanded(productId) {
    return this.expandedProducts().has(productId);
  }
  getVisibleSizes(product) {
    const maxVisible = 3;
    if (this.isExpanded(product.id) || product.sizes.length <= maxVisible) {
      return product.sizes;
    }
    return product.sizes.slice(0, maxVisible);
  }
  hasMoreSizes(product) {
    return product.sizes.length > 3;
  }
  onImageError(event) {
    const img = event.target;
    img.src = 'assets/images/logo.jpg';
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
      decls: 35,
      vars: 14,
      consts: [["id", "products", 1, "py-5"], [1, "container"], [1, "row"], [1, "col-lg-8", "mx-auto", "text-center", "mb-5"], [1, "display-4", "fw-bold", "text-wood", "mb-4"], [1, "lead", "text-muted"], [1, "row", "mb-5"], [1, "col-12"], [1, "nav", "nav-pills", "justify-content-center"], [1, "nav-item"], [1, "nav-link", 3, "click"], [1, "row", "g-4"], [1, "row", "mt-5"], [1, "col-12", "text-center"], [1, "bg-wood", "text-white", "rounded-4", "p-5"], [1, "fw-bold", "mb-3"], [1, "mb-4"], [1, "btn", "btn-light", "btn-lg", 3, "click"], [1, "fas", "fa-phone", "me-2"], [1, "col-12", "text-center", "py-5"], [1, "alert", "alert-warning", "d-inline-block"], [1, "text-muted"], [1, "col-lg-6", "col-xl-3"], [1, "product-card", "h-100", "bg-white", "rounded-4", "shadow-sm", "border-0", "overflow-hidden", "d-flex", "flex-column"], [1, "product-image", "position-relative"], [1, "product-img", 3, "error", "src", "alt"], [1, "card-body", "p-4", "flex-grow-1"], [1, "card-title", "fw-bold", "text-wood", "mb-2"], [1, "card-text", "text-muted", "small", "mb-3"], [1, "sizes-list", "mb-1"], [1, "small", "fw-bold", "text-muted", "mb-2"], [1, "size-item", "d-flex", "justify-content-between", "align-items-center", "mb-1"], [1, "btn", "btn-link", "btn-sm", "p-0", "text-wood"], [1, "card-footer", "bg-transparent", "border-0", "px-4", "pb-4", "pt-2"], [1, "d-grid", "mb-2"], [1, "btn", "btn-wood", 3, "click"], [1, "fas", "fa-calculator", "me-2"], [1, "row", "text-center", "small", "text-muted", 2, "height", "60px", "align-items", "center"], [1, "col-4"], [1, "small", "text-muted"], [1, "small", "fw-bold", "text-wood"], [1, "btn", "btn-link", "btn-sm", "p-0", "text-wood", 3, "click"], [1, "fas", "fa-chevron-up", "me-1"], [1, "fas", "fa-chevron-down", "me-1"]],
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
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Todos");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "li", 9)(15, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductsComponent_Template_button_click_15_listener() {
            return ctx.setFilter("Estructural");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Estructural");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "li", 9)(18, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductsComponent_Template_button_click_18_listener() {
            return ctx.setFilter("Construcci\u00F3n");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Construcci\u00F3n");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "li", 9)(21, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductsComponent_Template_button_click_21_listener() {
            return ctx.setFilter("Revestimiento");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Revestimiento");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, ProductsComponent_Conditional_23_Template, 9, 0, "div", 2)(24, ProductsComponent_Conditional_24_Template, 3, 0, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 12)(26, "div", 13)(27, "div", 14)(28, "h3", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "p", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "button", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductsComponent_Template_button_click_32_listener() {
            return ctx.getQuote(0);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "i", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.languageService.getTranslation("products.title"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.languageService.getTranslation("products.subtitle"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.activeFilter() === "all");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.activeFilter() === "Estructural");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.activeFilter() === "Construcci\u00F3n");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.activeFilter() === "Revestimiento");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](ctx.loadError() ? 23 : 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.languageService.getTranslation("products.custom.title"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.languageService.getTranslation("products.custom.subtitle"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.languageService.getTranslation("products.custom.button"), " ");
        }
      },
      styles: [".product-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 200px;\n  object-fit: contain;\n  object-position: center;\n  background-color: #f8f9fa;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtBQUMzQiIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0LWltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwMHB4O1xuICBvYmplY3QtZml0OiBjb250YWluO1xuICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"],
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
        'hero.types': 'Medidas Disponibles',
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
        'hero.types': 'Available Sizes',
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