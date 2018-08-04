const ALIGNMENT = ['start', 'end', 'center'];

export default {
  props: {
    align: {
      type: String,
      default: ''
    }
  },
  computed: {
    alignClass() {
      return ALIGNMENT.includes(this.align)
        ? `mdc-tab-scroller--align-${this.align}`
        : '';
    }
  }
};
