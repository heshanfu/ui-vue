/**
 * @license
 * Copyright 2018 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import MDCComponent from '../base/component';
/* eslint-disable no-unused-vars */
import {MDCSelectionControlState, MDCSelectionControl} from '../selection-control/index';
/* eslint-enable no-unused-vars */
import MDCSwitchFoundation from './foundation';
import {MDCRipple, MDCRippleFoundation} from '../ripple/index';
import {getMatchesProperty} from '../ripple/util';

/**
 * @extends MDCComponent<!MDCSwitchFoundation>
 * @implements {MDCSelectionControl}
 */
class MDCSwitch extends MDCComponent {
  static attachTo(root) {
    return new MDCSwitch(root);
  }

  constructor(...args) {
    super(...args);

    /** @private {!MDCRipple} */
    this.ripple_ = this.initRipple_();

    /** @private {!Function} */
    this.changeHandler_;
  }

  destroy() {
    super.destroy();
    this.ripple_.destroy();
    this.nativeControl_.removeEventListener('change', this.changeHandler_);
  }

  initialSyncWithDOM() {
    this.changeHandler_ = this.foundation_.handleChange.bind(this.foundation_);
    this.nativeControl_.addEventListener('change', this.changeHandler_);
  }

  /**
   * Returns the state of the native control element, or null if the native control element is not present.
   * @return {?MDCSelectionControlState}
   * @private
   */
  get nativeControl_() {
    const {NATIVE_CONTROL_SELECTOR} = MDCSwitchFoundation.strings;
    const el = /** @type {?MDCSelectionControlState} */ (
      this.root_.querySelector(NATIVE_CONTROL_SELECTOR));
    return el;
  }

  /**
   * @return {!MDCRipple}
   * @private
   */
  initRipple_() {
    const {RIPPLE_SURFACE_SELECTOR} = MDCSwitchFoundation.strings;
    const rippleSurface = /** @type {!Element} */ (this.root_.querySelector(RIPPLE_SURFACE_SELECTOR));

    const MATCHES = getMatchesProperty(HTMLElement.prototype);
    const adapter = Object.assign(MDCRipple.createAdapter(this), {
      isUnbounded: () => true,
      isSurfaceActive: () => this.nativeControl_[MATCHES](':active'),
      addClass: (className) => rippleSurface.classList.add(className),
      removeClass: (className) => rippleSurface.classList.remove(className),
      registerInteractionHandler: (type, handler) => this.nativeControl_.addEventListener(type, handler),
      deregisterInteractionHandler: (type, handler) => this.nativeControl_.removeEventListener(type, handler),
      updateCssVariable: (varName, value) => rippleSurface.style.setProperty(varName, value),
      computeBoundingRect: () => rippleSurface.getBoundingClientRect(),
    });
    const foundation = new MDCRippleFoundation(adapter);
    return new MDCRipple(this.root_, foundation);
  }

  /** @return {!MDCSwitchFoundation} */
  getDefaultFoundation() {
    return new MDCSwitchFoundation({
      addClass: (className) => this.root_.classList.add(className),
      removeClass: (className) => this.root_.classList.remove(className),
      setNativeControlChecked: (checked) => this.nativeControl_.checked = checked,
      isNativeControlChecked: () => this.nativeControl_.checked,
      setNativeControlDisabled: (disabled) => this.nativeControl_.disabled = disabled,
      isNativeControlDisabled: () => this.nativeControl_.disabled,
    });
  }

  /** @return {!MDCRipple} */
  get ripple() {
    return this.ripple_;
  }

  /** @return {boolean} */
  get checked() {
    return this.foundation_.isChecked();
  }

  /** @param {boolean} checked */
  set checked(checked) {
    this.foundation_.setChecked(checked);
  }

  /** @return {boolean} */
  get disabled() {
    return this.foundation_.isDisabled();
  }

  /** @param {boolean} disabled */
  set disabled(disabled) {
    this.foundation_.setDisabled(disabled);
  }
}

export {MDCSwitchFoundation, MDCSwitch};
