Default Usage

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI);
```

Standalone Usage

```js
import Vue from 'vue';
import theme from 'balm-ui/plugins/theme';

// (Recommended) Splitting CSS out from the main application, see BalmUI advanced usage.
import 'balm-ui/components/core.css'; // (Include 'plugins/theme.css')
// OR
import 'balm-ui/plugins/theme.css';

Vue.use(theme);
```
