```html
<ui-tab-bar type="1" v-model="active">
  <ui-tab v-for="(tab, index) in tabs" :key="index"
    :icon="tab.icon" :href="tab.url">
  </ui-tab>
</ui-tab-bar>
```

```js
export default {
  data() {
    return {
      active: 0,
      tabs: [
        {
          icon: 'phone',
          url: '#recents'
        },
        {
          icon: 'favorite',
          url: '#favorites'
        },
        {
          icon: 'person_pin',
          url: '#nearby'
        }
      ]
    };
  }
};
```
