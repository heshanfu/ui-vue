<template>
  <button class="mdc-tab" role="tab" aria-selected="false" tabindex="-1">
    <div class="mdc-tab__content">
      <template v-if="icon">
        <span class="mdc-tab__icon material-icons">{{ icon }}</span>
      </template>
      <span class="mdc-tab__text-label">
        <slot>{{ text }}</slot>
      </span>
    </div>
    <ui-tab-indicator></ui-tab-indicator>
    <div class="mdc-tab__ripple"></div>
  </button>
</template>

<script>
import UiTabIndicator from './tab-indicator';
import tabIndicatorMixin from '../../mixins/tab-indicator';
import getType from '../../utils/typeof';

// Define constants
const UI_TAB = {
  SLOT_CLASS: {
    icon: 'mdc-tab__icon'
  }
};

export default {
  name: 'ui-tab',
  components: {
    UiTabIndicator
  },
  mixins: [tabIndicatorMixin],
  props: {
    // UI attributes
    text: String,
    icon: String
  },
  data() {
    return {
      UI_TAB
    };
  }
};
</script>
