<template>
  <div :class="className">
    <slot><!-- Form item: input + label --></slot>
  </div>
</template>

<script>
import formFieldMixin from '../../mixins/form-field';

export default {
  name: 'ui-form-field',
  mixins: [formFieldMixin],
  computed: {
    className() {
      return {
        'mdc-form-field': !this.noWrap,
        'mdc-form-field--block': this.block,
        'mdc-form-field--align-end': this.alignEnd
      };
    }
  }
};
</script>
