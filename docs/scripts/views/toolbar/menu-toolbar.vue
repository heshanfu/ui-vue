<template>
  <div class="demo--menu-toolbar">
    <ui-toolbar fixed>
      <ui-toolbar-row>
        <ui-toolbar-section align="start">
          <ui-toolbar-anchor type="menu"></ui-toolbar-anchor>
          <ui-toolbar-title>Title</ui-toolbar-title>
        </ui-toolbar-section>
        <ui-toolbar-section align="end">
          <ui-toolbar-anchor alt="Download">file_download</ui-toolbar-anchor>
          <ui-toolbar-anchor alt="Print this page">print</ui-toolbar-anchor>

          <ui-menu-anchor>
            <ui-toolbar-anchor alt="More" @click.native="$balmUI.onOpen('open')">more_vert</ui-toolbar-anchor>
            <ui-menu v-model="open"
              :items="menu"
              @selected="onSelected">
            </ui-menu>
          </ui-menu-anchor>
        </ui-toolbar-section>
      </ui-toolbar-row>
    </ui-toolbar>
    <main>
      <div class="mdc-toolbar-fixed-adjust">
        <p class="demo-paragraph">
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.
        </p>
        <p class="demo-paragraph">
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.
        </p>
        <p class="demo-paragraph">
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.
        </p>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false,
      menu: ['Back', 'Forward', 'Reload', '-', 'Save As...']
    };
  },
  methods: {
    onSelected(data) {
      console.log('onSelected', data);
    }
  }
};
</script>
