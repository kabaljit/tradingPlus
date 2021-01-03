# Base Button

The `<BaseButton>` component does what it says on the tin - it serves as the base of our core buttons. All other buttons should be composed from this component as it covers loading, disabled states and allows for right and left accessories, i.e icons.

### Example

**Standard**

```tsx
<BaseButton
  backgroundColor="mango"
  loading={false}
  disabled={false}
  onPress={() => youWin()}
>
  Click me to win £1,000,000
</BaseButton>
```

**Accessory**

```tsx
<BaseButton
  rightAccessory={() => <Image source={images.icon} tintColor="charcoal">}
>
  I'll show a right icon
</BaseButton>
```
