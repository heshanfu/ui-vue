<template>
  <div v-if="recordCount" :class="className">
    <div v-if="showRecord" class="mdc-pagination--record">
      <slot :recordCount="recordCount"
            :pageSize="pageSize"
            :pageCount="pageCount"></slot>
    </div>
    <div class="mdc-pagination--paging">
      <a class="mdc-pagination--paging-previous">
        <span @click="handleClick(currentPage === 1 ? 1 : currentPage - 1)"
              v-html="currentPrev"></span>
      </a>
      <a v-for="(page, index) in pageCount"
        v-if="!mini && isShow(page)"
        :key="index"
        :class="{active: page === currentPage}">
        <span v-if="showPage(page)" @click="handleClick(page)">{{ page }}</span>
        <span v-else class="ellipsis">...</span>
      </a>
      <a class="mdc-pagination--paging-next">
        <span @click="handleClick(currentPage === pageCount ? pageCount : currentPage + 1)"
              v-html="currentNext"></span>
      </a>
      <div v-if="!mini && showJumper" class="mdc-pagination--jumper">
        <span>{{ jumperBefore }}</span>
        <input v-model="pager"
               type="number"
               min="1"
               :max="pageCount"
               @keydown.prevent.enter="handleClick($event.target.value)">
        <span>{{ jumperAfter }}</span>
        <ui-button v-if="jumperButton"
                   @click.native="handleClick(pager)">{{ jumperButton }}</ui-button>
      </div>
    </div>
  </div>
</template>

<script>
const DOUBLE_ARROW_LEFT = '&laquo;';
const DOUBLE_ARROW_RIGHT = '&raquo;';
const SINGLE_ARROW_LEFT = '&lsaquo;';
const SINGLE_ARROW_RIGHT = '&rsaquo;';
const POSITION_LEFT = 'left';
const POSITION_RIGHT = 'right';
const UI_EVENT_CHANGE = 'change';

export default {
  name: 'ui-pagination',
  props: {
    // state
    page: {
      type: Number,
      default: 1
    },
    // ui attributes
    recordCount: {
      type: Number,
      required: true
    },
    pageSize: {
      type: Number,
      required: true
    },
    prev: String,
    next: String,
    pageSpan: {
      type: Number,
      default: 3
    },
    showRecord: {
      type: Boolean,
      default: false
    },
    showJumper: {
      type: Boolean,
      default: false
    },
    jumperBefore: {
      type: String,
      default: 'Goto'
    },
    jumperAfter: {
      type: String,
      default: ''
    },
    jumperButton: {
      type: String,
      default: ''
    },
    position: String,
    mini: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currentPage: this.page,
      pager: this.page
    };
  },
  computed: {
    className() {
      let result = ['mdc-pagination'];

      if (this.mini) {
        result.push('mdc-pagination--mini');
      } else {
        if (this.showRecord) {
          result.push(`mdc-pagination--between`);
        } else if ([POSITION_LEFT, POSITION_RIGHT].includes(this.position)) {
          result.push(`mdc-pagination--${this.position}`);
        }
      }

      return result;
    },
    pageCount() {
      return Math.ceil(this.recordCount / this.pageSize);
    },
    currentPrev() {
      let arrow = this.mini ? SINGLE_ARROW_LEFT : DOUBLE_ARROW_LEFT;
      return this.prev || arrow;
    },
    currentNext() {
      let arrow = this.mini ? SINGLE_ARROW_RIGHT : DOUBLE_ARROW_RIGHT;
      return this.next || arrow;
    }
  },
  watch: {
    page(val) {
      this.currentPage = val;
    }
  },
  methods: {
    isShow(page) {
      let show = false;
      switch (true) {
        case (page === 1):
        case (page === this.pageCount):
        case (this.currentPage >= page && page >= this.currentPage - this.pageSpan):
        case (this.currentPage <= page && page <= this.currentPage + this.pageSpan):
          show = true;
          break;
      }
      return show;
    },
    showPage(page) {
      let isExisted = (this.currentPage === page - this.pageSpan || this.currentPage === page + this.pageSpan);
      let noFirstOrLast = (page !== 1 && page !== this.pageCount);
      return !(isExisted && noFirstOrLast);
    },
    handleClick(page) { // page: number
      if (!isNaN(page)) {
        switch (true) {
          case (page > this.pageCount):
            page = this.pageCount;
            break;
          case (page < 1):
            page = 1;
            break;
        }
        this.$emit(UI_EVENT_CHANGE, +page);
        this.pager = page;
      } else {
        this.pager = this.currentPage;
      }
    }
  }
};
</script>
