# Typography

All typographic styles should be based on the components exported from this directory.

## Paragraph

Our all standard text (paragraphs) are controlled via our `<P>` component. The P component exposes a number a props to help make it as flexible as possible without opening the flood gates and allowing endless customization.

### Usage

```tsx
<P>My awesome text</P>
```

### Props

| Name     | Options                          | Default |
| -------- | -------------------------------- | ------- |
| `size`   | extraSmall, small, medium, large | medium  |
| `weight` | regular, medium, bold            | regular |
| `align`  | left, center, right              | left    |
| `color`  | see `ITypographyColorContext`    | primary |

#### Sizes

| Name         | Pixel value |
| ------------ | ----------- |
| `extraSmall` | 13          |
| `small`      | 14          |
| `medium`     | 16          |
| `large`      | 17          |

You should always use the size prop for controlling the size of text, this helps ensure consistency across all of our applications. If you really need to use another size you use styled-components to add it, for example:

```tsx
const MyVerySpecialP = styled(P)`
  font-size: 8px;
`;
```
