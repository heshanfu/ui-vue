<template>
  <div :class="[$tt('body1'), 'demo--switch']">
    <section class="hero component">
      <ui-switch v-model="toggle">{{ toggle }}</ui-switch>
    </section>

    <div :class="$tt('body2')">
      <h4 :class="$tt('headline4')">0. Usage</h4>
      <ui-markdown :text="code[0]"></ui-markdown>

      <h4 :class="$tt('headline4')">1. Example</h4>
      <section class="example">
        <h2>1.1 Enabled</h2>
        <div class="demo-switch-wrapper">
          <ui-switch id="basic-switch"
            :trueValue="1"
            :falseValue="0"
            v-model="toggle1">
            {{ toggle1 }}
          </ui-switch>
        </div>
        <div class="demo-switch-wrapper">
          <ui-switch id="basic-switch-custom"
            class="demo-switch--custom"
            trueValue="on"
            falseValue="off"
            v-model="toggle2">
            {{ toggle2 }} (custom color)
          </ui-switch>
        </div>
      </section>
      <ui-accordion>
        <ui-markdown :code="code[1]"></ui-markdown>
      </ui-accordion>

      <section class="example">
        <h2>1.2 Disabled</h2>
        <div class="demo-switch-wrapper">
          <ui-switch disabled>off/on</ui-switch>
        </div>
      </section>

      <h4 :class="$tt('headline4')">2. APIs</h4>
      <ui-apidocs name="switch"></ui-apidocs>
    </div>
  </div>
</template>

<script>
import snippets from '../../mixins/snippets';

export default {
  metaInfo: {
    titleTemplate: '%s - Switch'
  },
  mixins: [snippets],
  data() {
    return {
      toggle: false,
      toggle1: 0,
      toggle2: 'on'
    };
  },
  created() {
    this.showCode('switch');
  }
};
</script>
