<template>
  <div :class="[$tt('body1'), 'demo--shape']">
    <section class="hero directive">
      <div class="four-corner-container"
        v-shape>
        <ui-button unelevated>Filled Button</ui-button>
      </div>
      <div class="four-corner-container four-corner-container--outlined"
         v-shape>
        <ui-button outlined>Outlined Button</ui-button>
      </div>
    </section>

    <div :class="$tt('body2')">
      <h4 :class="$tt('headline4')">0. Usage</h4>
      <ui-markdown :text="code[0]"></ui-markdown>

      <h4 :class="$tt('headline4')">1. Example</h4>

      <h4 :class="$tt('headline4')">2. APIs</h4>
      <ui-apidocs name="shape" type="directive"></ui-apidocs>
    </div>
  </div>
</template>

<script>
import snippets from '../../mixins/snippets';

export default {
  metaInfo: {
    titleTemplate: '%s - Shape'
  },
  mixins: [snippets],
  created() {
    this.showCode('shape');
  }
};
</script>
