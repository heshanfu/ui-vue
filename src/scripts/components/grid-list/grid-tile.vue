<template>
  <li class="mdc-grid-tile">
    <div v-if="!noImage" class="mdc-grid-tile__primary">
      <slot name="image" :className="UI_GRID_LIST.SLOT_CLASS.image">
        <img v-if="src" :class="[UI_GRID_LIST.SLOT_CLASS.image, imageClass]" :src="src" :alt="alt">
        <div v-else :class="[UI_GRID_LIST.SLOT_CLASS.image, imageClass]"></div>
      </slot>
    </div>
    <span v-if="!imageOnly" class="mdc-grid-tile__secondary">
      <i v-if="icon" :class="[UI_GRID_LIST.SLOT_CLASS.icon, 'material-icons']">{{ icon }}</i>
      <template v-else>
        <slot name="icon" :className="UI_GRID_LIST.SLOT_CLASS.icon"></slot>
      </template>
      <slot><!-- Title --></slot>
    </span>
  </li>
</template>

<script>
// Define constants
const UI_GRID_LIST = {
  SLOT_CLASS: {
    image: 'mdc-grid-tile__primary-content',
    icon: 'mdc-grid-tile__icon'
  }
};

export default {
  name: 'ui-grid-tile',
  props: {
    // UI attributes
    src: String,
    alt: String,
    imageClass: String,
    icon: String,
    imageOnly: {
      type: Boolean,
      default: false
    },
    noImage: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      UI_GRID_LIST
    };
  }
};
</script>
