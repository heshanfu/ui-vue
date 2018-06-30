<template>
  <div class="demo--textfield">
    <section class="hero">
      <ui-textfield id="my-text-field">Text Field</ui-textfield>
    </section>

    <section class="example">
      <h2>Full Functionality JS Component (Floating Label, Validation)</h2>
      <section id="demo-text-field-wrapper" :dir="value.rtl ? 'rtl' : false">
        <ui-textfield id="full-func-text-field"
          helptextId="my-text-field-helper-text"
          :class="{'demo-text-field-custom-colors': value.customColor}"
          :disabled="value.disabled"
          :dense="value.dense"
          :required="value.required">
          Email Address
        </ui-textfield>
        <ui-textfield-helptext v-if="value.helperText"
          id="my-text-field-helper-text"
          :visible="value.isVisible"
          :validMsg="value.isValidMsg">
          Helper Text (possibly validation message)
        </ui-textfield-helptext>
      </section>
      <ui-textfield-controls
        :options="['disabled', 'rtl', 'dense', 'required', 'customColor', 'helperText']"
        v-model="value"></ui-textfield-controls>
    </section>

    <section class="example">
      <h2>Password field with validation</h2>
      <ui-textfield type="password"
        required
        pattern=".{8,}"
        id="pw"
        helptextId="pw-validation-msg"
        autocomplete="current-password">
        Choose password
      </ui-textfield>
      <ui-textfield-helptext id="pw-validation-msg"
        visible
        validMsg>
        Must be at least 8 characters long
      </ui-textfield-helptext>
    </section>

    <section class="example">
      <h2>Outlined Text Field</h2>
      <div id="demo-tf-outlined-wrapper" :dir="value.rtl ? 'rtl' : false">
        <ui-textfield id="tf-outlined-input"
          outlined
          helptextId="name-validation-message"
          :class="{'demo-text-field-custom-colors': value.customColor}"
          :disabled="value.disabled"
          :dense="value.dense"
          :required="value.required"
          :attrs="{
            minlength: value.min ? 8 : 0,
            maxlength: value.max ? 10 : -1
          }">
          Your Name
        </ui-textfield>
        <ui-textfield-helptext id="name-validation-message" validMsg>
          {{ value.min
              ? 'Must be at least 8 characters'
              : 'Helper Text (possibly validation message)' }}
        </ui-textfield-helptext>
      </div>
      <ui-textfield-controls idPrefix="outlined"
        :options="['disabled', 'rtl', 'dense', 'required', 'customColor', 'min', 'max']"
        v-model="value"></ui-textfield-controls>
    </section>

    <section class="example" id="text-field-box-example">
      <h2>Text Field box</h2>
      <div id="demo-tf-box-wrapper" :dir="value.rtl ? 'rtl' : false">
        <ui-textfield id="tf-box"
          box
          helptextId="box-name-validation-message"
          :class="{'demo-text-field-custom-colors': value.customColor}"
          :disabled="value.disabled"
          :dense="value.dense"
          :required="value.required"
          :attrs="{
            minlength: value.min ? 8 : 0
          }">
          Your Name
        </ui-textfield>
        <ui-textfield-helptext v-if="value.helperText"
          id="box-name-validation-message"
          :visible="value.isVisible">
          {{ value.min
              ? 'Must be at least 8 characters'
              : 'Helper Text (possibly validation message)' }}
        </ui-textfield-helptext>
      </div>
      <ui-textfield-controls
        :options="['disabled', 'rtl', 'dense', 'required', 'customColor', 'helperText', 'min']"
        v-model="value"></ui-textfield-controls>
    </section>

    <section class="example" id="demo-tf-icon-container">
      <h2>Text Field - Leading/Trailing icons</h2>
      <div id="demo-tf-box-leading-wrapper" :dir="value.rtl ? 'rtl' : false">
        <ui-textfield id="tf-box-leading" box leadingIcon="event"
          :class="{'demo-text-field-custom-colors': value.customColor}"
          :disabled="value.disabled"
          :dense="value.dense"
          :required="value.required"
          :leadingIconUnclickable="value.unclickable"
          :trailingIconUnclickable="value.unclickable"
          :attrs="{
            minlength: value.min ? 8 : 0
          }">
          Your name
        </ui-textfield>
      </div>
      <div id="demo-tf-box-trailing-wrapper" :dir="value.rtl ? 'rtl' : false">
        <ui-textfield id="tf-box-trailing" box trailingIcon="delete"
          :class="{'demo-text-field-custom-colors': value.customColor}"
          :disabled="value.disabled"
          :dense="value.dense"
          :required="value.required"
          :leadingIconUnclickable="value.unclickable"
          :trailingIconUnclickable="value.unclickable"
          :attrs="{
            minlength: value.min ? 8 : 0
          }">
          Your name
        </ui-textfield>
      </div>
      <div id="demo-tf-outlined-leading-wrapper" :dir="value.rtl ? 'rtl' : false">
        <ui-textfield id="tf-outlined-leading" outlined leadingIcon="event"
          :class="{'demo-text-field-custom-colors': value.customColor}"
          :disabled="value.disabled"
          :dense="value.dense"
          :required="value.required"
          :leadingIconUnclickable="value.unclickable"
          :trailingIconUnclickable="value.unclickable"
          :attrs="{
            minlength: value.min ? 8 : 0
          }">
          Your other name
        </ui-textfield>
      </div>
      <div id="demo-tf-outlined-trailing-wrapper" :dir="value.rtl ? 'rtl' : false">
        <ui-textfield id="tf-outlined-trailing" outlined trailingIcon="delete"
          :class="{'demo-text-field-custom-colors': value.customColor}"
          :disabled="value.disabled"
          :dense="value.dense"
          :required="value.required"
          :leadingIconUnclickable="value.unclickable"
          :trailingIconUnclickable="value.unclickable"
          :attrs="{
            minlength: value.min ? 8 : 0
          }">
          Your other name
        </ui-textfield>
      </div>
      <ui-textfield-controls
        :options="['disabled', 'rtl', 'dense', 'required', 'customColor', 'min', 'unclickable']"
        v-model="value"></ui-textfield-controls>
    </section>

    <section class="example">
      <h2>Preventing FOUC</h2>
      <ui-textfield id="fouc" v-model="text">
        Label floating above
      </ui-textfield>
    </section>

    <section class="example">
      <h2>Textarea</h2>
      <section id="demo-text-field-textarea-wrapper" :dir="value.rtl ? 'rtl' : false">
        <ui-textfield type="textarea" id="textarea" rows="8" cols="40"
          :class="{'demo-text-field-custom-colors': value.customColor}"
          :disabled="value.disabled"
          :required="value.required">
          Textarea Label
        </ui-textfield>
      </section>
      <ui-textfield-controls
        :options="['disabled', 'rtl', 'required', 'customColor']"
        v-model="value"></ui-textfield-controls>
    </section>

    <section class="example">
      <h2>Full-Width Text Field and Textarea</h2>
      <div id="demo-fullwidth-wrapper">
        <ui-textfield fullwidth placeholder="Subject"
          :class="{'demo-text-field-custom-colors': value.customColor}"
          :disabled="value.disabled"
          :dense="value.dense"
          :required="value.required">
        </ui-textfield>
        <ui-textfield type="textarea"
          id="full-width-textarea"
          fullwidth
          class="full-width-textarea-example"
          rows="8"
          :class="{'demo-text-field-custom-colors': value.customColor}"
          :disabled="value.disabled"
          :dense="value.dense"
          :required="value.required">
          Textarea Label
        </ui-textfield>
      </div>
      <ui-textfield-controls
        :options="['disabled', 'dense', 'required', 'customColor']"
        v-model="value"></ui-textfield-controls>
    </section>

    <!-- <ui-apidoc name="textfield"></ui-apidoc> -->
  </div>
</template>

<script>
import snippets from '../../mixins/snippets';
import UiTextfieldControls from '../../components/textfield-controls';

export default {
  components: {
    UiTextfieldControls
  },
  mixins: [snippets],
  data() {
    return {
      value: {
        disabled: false,
        rtl: false,
        dense: false,
        required: false,
        customColor: false,
        helperText: false,
        isVisible: false,
        isValidMsg: false,
        min: false,
        max: false,
        unclickable: false
      },
      text: 'Pre-filled value'
    };
  },
  // methods: {
  //   onFocus(event) {
  //     console.log('onFocus', event);
  //   },
  //   onBlur({ valid, message }) {
  //     if (this.useValidation) {
  //       this.msg = message;
  //     } else {
  //       this.msg = 'Help Text (possibly validation message)';
  //     }
  //   },
  //   onInput(value) {
  //     console.log('onInput', value);
  //     this.text = value;
  //   },
  //   onKeydown(event) {
  //     console.log('onKeydown', event);
  //   },
  //   onEnter(value) {
  //     console.log('onEnter', value);
  //   }
  // },
  created() {
    // this.showCode('textfield', 6);
  }
};
</script>