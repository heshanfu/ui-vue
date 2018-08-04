<template>
  <span :class="className.outer">
    <span :class="className.inner">{{ icon }}</span>
  </span>
</template>

<script>
import tabIndicatorMixin from '../../mixins/tab-indicator';

export default {
  name: 'ui-tab-indicator',
  mixins: [tabIndicatorMixin],
  computed: {
    className() {
      return {
        outer: {
          'mdc-tab-indicator': true,
          'mdc-tab-indicator--active': this.active,
          'mdc-tab-indicator--fade': this.fade
        },
        inner: {
          'mdc-tab-indicator__content': true,
          'mdc-tab-indicator__content--underline': !this.icon,
          'mdc-tab-indicator__content--icon material-icons': this.icon
        }
      };
    }
  }
};
</script>
