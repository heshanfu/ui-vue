<template>
  <div class="mdc-tab-bar" role="tablist">
    <div :class="['mdc-tab-scroller', alignClass]">
      <div class="mdc-tab-scroller__scroll-area">
        <div class="mdc-tab-scroller__scroll-content">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { MDCTabBar } from '../../../material-components-web/tab-bar';
import tabBarMixin from '../../mixins/tab-bar';

export default {
  name: 'ui-tab-bar',
  mixins: [tabBarMixin],
  data() {
    return {
      $tabBar: null
    };
  },
  mounted() {
    if (!this.$tabBar) {
      this.$tabBar = new MDCTabBar(this.$el);

      this.$tabBar.listen('MDCTabBar:activated', ({ detail: activatedTab }) => {
        console.log(activatedTab);
      });
    }
  }
};
</script>
