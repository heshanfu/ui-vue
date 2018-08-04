<template>
  <div :class="['mdc-tab-scroller', alignClass]">
    <div class="mdc-tab-scroller__scroll-area">
      <div class="mdc-tab-scroller__scroll-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { MDCTabScroller } from '../../../material-components-web/tab-scroller';
import tabBarMixin from '../../mixins/tab-bar';

export default {
  name: 'ui-tab-bar-scroller',
  mixins: [tabBarMixin],
  data() {
    return {
      $tabBarScroller: null
    };
  },
  mounted() {
    if (!this.$tabBarScroller) {
      this.$tabBarScroller = new MDCTabScroller(this.$el);
    }
  }
};
</script>
