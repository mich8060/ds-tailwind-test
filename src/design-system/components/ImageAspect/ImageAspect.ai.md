# ImageAspect

Image component with enforced aspect ratio and object-fit control.

## When to Use
- Responsive images that maintain consistent aspect ratios
- Card thumbnails, gallery items, hero images
- Any image that needs fixed proportions

## Props

| Prop | Type | Default | Values | Description |
|------|------|---------|--------|-------------|
| `src` | `string` | — | Image URL | Image source |
| `alt` | `string` | `""` | — | Alt text |
| `ratio` | `string` | `"16/9"` | `"1/1"`, `"4/3"`, `"16/9"`, `"21/9"`, custom | Aspect ratio |
| `fit` | `string` | `"cover"` | `"cover"`, `"contain"`, `"fill"`, `"none"` | Object-fit behavior |
| `className` | `string` | `""` | — | Additional CSS classes |

## Examples

```jsx
<ImageAspect src="/photos/hero.jpg" ratio="16/9" alt="Hero image" />
<ImageAspect src="/photos/profile.jpg" ratio="1/1" fit="cover" />
<ImageAspect src="/photos/banner.jpg" ratio="21/9" />
```

### In a card
```jsx
<Card>
  <ImageAspect src={item.thumbnail} ratio="4/3" />
  <div className="card-body">
    <h3>{item.title}</h3>
    <p>{item.description}</p>
  </div>
</Card>
```
