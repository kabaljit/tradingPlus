# Form Element - Text Input

[![View in Playground](https://img.shields.io/badge/%20View%20in-⛰️%20Playground-262834.svg?style=flat-square)](playground/screens/FormElements.tsx)

`TextInput` components do not handle their own validation, they rely on the `InputWrapper` to add validation.

The `TextInput` has been designed to be easily composable, i.e we should be able to extend this component to build others and not create it again and again from scratch.

### Usage

**Standard**

```jsx
<TextInput label="This is a label" />
```

**With validation**

```jsx
<InputWrapper error={true} errorMessage="This is an error message">
  <Dropdown
    value="2"
    error={true}
    items={[
      { label: 'Options 1 ', value: '1' },
      { label: 'Options 2 ', value: '2' },
      { label: 'Options 3', value: '3' },
    ]}
    onValueChange={() => {}}
  />
</InputWrapper>
```

