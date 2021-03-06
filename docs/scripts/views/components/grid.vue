<template>
  <div :class="[$tt('body1'), 'demo--grid']">
    <ui-top-app-bar fixed contentSelector=".demo-content">
      <template slot="nav-icon">
        <span class="catalog-back">
          <ui-toolbar-anchor type="menu" href="javascript:void(0)"
            @click.native="() => { $router.back(); }">&#xE5C4;</ui-toolbar-anchor>
        </span>
      </template>
      <span class="['catalog-title', $themeColor('on-primary')]">Layout Grid</span>
    </ui-top-app-bar>

    <div class="demo-content">
      <section class="hero component">
        <ui-grid class="demo-grid">
          <ui-grid-cell class="demo-cell"></ui-grid-cell>
          <ui-grid-cell class="demo-cell" colspan="4"></ui-grid-cell>
          <ui-grid-cell class="demo-cell" :colspan="{'default': 4}"></ui-grid-cell>
        </ui-grid>
      </section>

      <div :class="$tt('body2')">
        <h4 :class="$tt('headline4')">0. Usage</h4>
        <ui-markdown :text="code[0]"></ui-markdown>

        <h4 :class="$tt('headline4')">1. Example</h4>
        <section class="examples">
          <h2 class="demo-grid-legend">1.1 Layout grid (in fluid container)</h2>
          <ui-grid>
            <ui-grid-cell>
              <div class="demo-controls">
                Desktop Margin:
                <ui-select
                  :options="gutterOptions"
                  :model="desktop.margin"
                  @change="$setGrid('margin', 'desktop', $event)">
                </ui-select>

                <br>

                Desktop Gutter:
                <ui-select
                  :options="gutterOptions"
                  :model="desktop.gutter"
                  @change="$setGrid('gutter', 'desktop', $event)">
                </ui-select>
              </div>
            </ui-grid-cell>
            <ui-grid-cell>
              <div class="demo-controls">
                Tablet Margin:
                <ui-select
                  :options="gutterOptions"
                  :model="tablet.margin"
                  @change="$setGrid('margin', 'tablet', $event)">
                </ui-select>

                <br>

                Tablet Gutter:
                <ui-select
                  :options="gutterOptions"
                  :model="tablet.gutter"
                  @change="$setGrid('gutter', 'tablet', $event)">
                </ui-select>
              </div>
            </ui-grid-cell>
            <ui-grid-cell>
              <div class="demo-controls">
                Phone Margin:
                <ui-select
                  :options="gutterOptions"
                  :model="phone.margin"
                  @change="$setGrid('margin', 'phone', $event)">
                </ui-select>

                <br>

                Phone Gutter:
                <ui-select
                  :options="gutterOptions"
                  :model="phone.gutter"
                  @change="$setGrid('gutter', 'phone', $event)">
                </ui-select>
              </div>
            </ui-grid-cell>
          </ui-grid>

          <div class="demo-grid-legend">Grid of default wide (4 columns) items</div>
          <ui-grid class="demo-grid">
            <ui-grid-cell class="demo-cell">4</ui-grid-cell>
            <ui-grid-cell class="demo-cell">4</ui-grid-cell>
            <ui-grid-cell class="demo-cell">4</ui-grid-cell>
          </ui-grid>
          <ui-accordion>
            <ui-markdown :code="code[1]"></ui-markdown>
          </ui-accordion>

          <div class="demo-grid-legend">Grid of 1 column wide items</div>
          <ui-grid class="demo-grid">
            <ui-grid-cell v-for="i in 12"
              :key="i"
              class="demo-cell"
              colspan="1">1</ui-grid-cell>
          </ui-grid>
          <ui-accordion>
            <ui-markdown :code="code[2]"></ui-markdown>
          </ui-accordion>

          <div class="demo-grid-legend">Grid of differently sized items</div>
          <ui-grid class="demo-grid">
            <ui-grid-cell class="demo-cell" colspan="6">6</ui-grid-cell>
            <ui-grid-cell class="demo-cell" colspan="4">4</ui-grid-cell>
            <ui-grid-cell class="demo-cell" colspan="2">2</ui-grid-cell>
          </ui-grid>
          <ui-accordion>
            <ui-markdown :code="code[3]"></ui-markdown>
          </ui-accordion>

          <div class="demo-grid-legend">Grid of items with tweaks at different screen sizes</div>
          <ui-grid class="demo-grid">
            <ui-grid-cell class="demo-cell" :colspan="{default:6, tablet:8}">6 (8 tablet)</ui-grid-cell>
            <ui-grid-cell class="demo-cell" :colspan="{default:4, tablet:6}">4 (6 tablet)</ui-grid-cell>
            <ui-grid-cell class="demo-cell" :colspan="{default:2, phone:4}">2 (4 phone)</ui-grid-cell>
          </ui-grid>
          <ui-accordion>
            <ui-markdown :code="code[4]"></ui-markdown>
          </ui-accordion>

          <div class="demo-grid-legend">Grid nested within parent grid cell</div>
          <ui-grid class="demo-grid">
            <ui-grid-cell class="demo-parent-cell" colspan="4">
              <ui-grid-inner>
                <ui-grid-cell class="demo-child-cell demo-cell" colspan="4">
                  <span>Child 4</span>
                </ui-grid-cell>
                <ui-grid-cell class="demo-child-cell demo-cell" colspan="4">
                  <span>Child 4</span>
                </ui-grid-cell>
                <ui-grid-cell class="demo-child-cell demo-cell" colspan="4">
                  <span>Child 4</span>
                </ui-grid-cell>
              </ui-grid-inner>
              <span>Parent 4</span>
            </ui-grid-cell>
            <ui-grid-cell class="demo-cell" colspan="4">4</ui-grid-cell>
            <ui-grid-cell class="demo-cell" colspan="4">4</ui-grid-cell>
          </ui-grid>
          <ui-accordion>
            <ui-markdown :code="code[5]"></ui-markdown>
          </ui-accordion>

          <h3 class="demo-grid-legend">Grid with max width</h3>
          <div class="demo-grid-legend">Grid with max width (1280px) and center alignment by default</div>
          <ui-grid class="demo-grid max-width">
            <ui-grid-cell class="demo-cell" colspan="4"></ui-grid-cell>
            <ui-grid-cell class="demo-cell" colspan="4"></ui-grid-cell>
            <ui-grid-cell class="demo-cell" colspan="4"></ui-grid-cell>
          </ui-grid>
          <ui-accordion>
            <ui-markdown :code="code[6]"></ui-markdown>
          </ui-accordion>

          <div class="demo-grid-legend">Grid with max width (1280px) and left alignment</div>
          <ui-grid class="demo-grid max-width" position="left">
            <ui-grid-cell class="demo-cell" colspan="4"></ui-grid-cell>
            <ui-grid-cell class="demo-cell" colspan="4"></ui-grid-cell>
            <ui-grid-cell class="demo-cell" colspan="4"></ui-grid-cell>
          </ui-grid>
          <ui-accordion>
            <ui-markdown :code="code[7]"></ui-markdown>
          </ui-accordion>

          <h2 class="demo-grid-legend">1.2 Fixed column width layout grid (Widescreen Only)</h2>
          <template v-if="isWideScreen">
            <ui-grid>
              <ui-grid-cell>
                <div class="demo-controls">
                  Desktop Column Width:
                  <ui-select
                    :options="widthOptions"
                    :model="desktop.width"
                    @change="$setGrid('column-width', 'desktop', $event)">
                  </ui-select>
                </div>
              </ui-grid-cell>
              <ui-grid-cell>
                <div class="demo-controls">
                  Tablet Column Width:
                  <ui-select
                    :options="widthOptions"
                    :model="tablet.width"
                    @change="$setGrid('column-width', 'tablet', $event)">
                  </ui-select>
                </div>
              </ui-grid-cell>
              <ui-grid-cell>
                <div class="demo-controls">
                  Phone Column Width:
                  <ui-select
                    :options="widthOptions"
                    :model="phone.width"
                    @change="$setGrid('column-width', 'phone', $event)">
                  </ui-select>
                </div>
              </ui-grid-cell>
            </ui-grid>

            <div class="demo-grid-legend">Fixed column width layout grid and center alignment by default</div>
            <ui-grid class="demo-grid" fixedColumnWidth>
              <ui-grid-cell class="demo-cell" colspan="1"></ui-grid-cell>
              <ui-grid-cell class="demo-cell" colspan="1"></ui-grid-cell>
              <ui-grid-cell class="demo-cell" colspan="1"></ui-grid-cell>
            </ui-grid>
            <ui-accordion>
              <ui-markdown :code="code[8]"></ui-markdown>
            </ui-accordion>

            <div class="demo-grid-legend">Fixed column width layout grid and right alignment</div>
            <ui-grid class="demo-grid" fixedColumnWidth position="right">
              <ui-grid-cell class="demo-cell" colspan="1"></ui-grid-cell>
              <ui-grid-cell class="demo-cell" colspan="1"></ui-grid-cell>
              <ui-grid-cell class="demo-cell" colspan="1"></ui-grid-cell>
            </ui-grid>
            <ui-accordion>
              <ui-markdown :code="code[9]"></ui-markdown>
            </ui-accordion>
          </template>
          <template v-else>
            <p>Your browser is not widescreen(Screen Size >= 1440px).</p>
          </template>

          <div class="demo-ruler"><div id="current" ref="ruler"></div></div>
        </section>

        <h4 :class="$tt('headline4')">2. APIs</h4>
        <ui-apidocs name="grid"></ui-apidocs>
        <ui-apidocs name="grid-cell"></ui-apidocs>
      </div>
    </div>
  </div>
</template>

<script>
import snippets from '../../mixins/snippets';

const wideScreenSize = 1440;

const gutterOptions = [
  {
    label: '8px',
    value: '8px'
  },
  {
    label: '16px',
    value: '16px'
  },
  {
    label: '24px',
    value: '24px'
  },
  {
    label: '40px',
    value: '40px'
  }
];
const widthOptions = [
  {
    label: '72px',
    value: '72px'
  },
  {
    label: '84px',
    value: '84px'
  }
];

export default {
  metaInfo: {
    titleTemplate: '%s - Layout Grid'
  },
  mixins: [snippets],
  data() {
    return {
      gutterOptions,
      widthOptions,
      desktop: {
        margin: '24px',
        gutter: '24px',
        width: '72px'
      },
      tablet: {
        margin: '16px',
        gutter: '16px',
        width: '72px'
      },
      phone: {
        margin: '16px',
        gutter: '16px',
        width: '72px'
      },
      isWideScreen: false
    };
  },
  created() {
    this.showCode('grid', 9);
  },
  mounted() {
    // this.showCode('grid');
    window.addEventListener('balmResize', this.initRuler);
    this.initRuler();
  },
  methods: {
    initRuler() {
      let size = '(phone)';
      if (window.innerWidth >= 840) {
        size = '(desktop)';
      } else if (window.innerWidth >= 480) {
        size = '(tablet)';
      }
      if (this.$refs.ruler) {
        this.$refs.ruler.textContent = window.innerWidth + 'px ' + size;
      }
      this.isWideScreen = window.innerWidth >= wideScreenSize;
    }
  }
};
</script>
