```html
<ui-permanent-drawer>
  <ui-drawer-toolbar-spacer></ui-drawer-toolbar-spacer>
  <ui-drawer-content>
    <ui-list-group>
      <ui-list-nav>
        <ui-item-link v-for="(item, index) in menu1" :key="index" :firstIcon="item.icon">
          {{ item.name }}
        </ui-item-link>
      </ui-list-nav>
      <ui-list-divider></ui-list-divider>
      <ui-list-nav>
        <ui-item-link v-for="(item, index) in menu2" :key="index" :firstIcon="item.icon">
          {{ item.name }}
        </ui-item-link>
      </ui-list-nav>
    </ui-list-group>
  </ui-drawer-content>
</ui-permanent-drawer>

<div class="demo-content">
  <ui-top-app-bar contentSelector=".demo-main" :class="$shadow(4)">
    <template slot="logo">
      <ui-toolbar-anchor type="menu"
        @click.native="() => { $router.back(); }">&#xE5C4;</ui-toolbar-anchor>
    </template>
    Permanent Drawer Above Toolbar
  </ui-top-app-bar>

  <main class="demo-main">
    <h1 :class="$tt('headline4')">Permanent Drawer</h1>
    <p :class="$tt('body1')">It sits to the left of this content.</p>
  </main>
</div>
```
