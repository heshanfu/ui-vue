```html
<ui-textfield label="Text lines..." :model="text" @input.native="onInputChange('text', $event)"
  type="textarea"
  :rows="3"></ui-textfield>
```