```html
<ui-card-media><!-- the card media content component --></ui-card-media>
```

> Media area that displays a custom `background-image` with `background-size: cover`.

#### Props

| Name      | Type      | Default | Description                                                                                          |
| --------- | --------- | ------- | ---------------------------------------------------------------------------------------------------- |
| square    | `Boolean` | `false` | Automatically scales the media area's height to equal its width                                      |
| rectangle | `Boolean` | `false` | Automatically scales the media area's height according to its width, maintaining a 16:9 aspect ratio |

#### Slots

| Name      | Description                                                                   |
| --------- | ----------------------------------------------------------------------------- |
| (default) | The default slot holds the card media content component and can contain HTML. |
