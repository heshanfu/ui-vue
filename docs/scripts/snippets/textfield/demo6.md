```html
<ui-textfield :model="text" @input.native="onInputChange('text', $event)"
  expandable
  id="search">
  <i slot="icon" class="material-icons">search</i>
</ui-textfield>
```