# Chapter 04 — Code the App 🧑‍💻

[⬅️ Chapter 03](./chapter-03-igniting-our-app.md) | [⬆️ Back to README](../README.md) | [➡️ Chapter 05](./chapter-05-react-hooks.md)

## App Structure

A FoodieHUB app can be divided into reusable components:

```text
App
├── Header
├── Body
│   └── RestaurantCard
└── Footer
```

## Navbar

```jsx
const Header = () => {
  return (
    <nav>
      <h1>FoodieHUB</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </nav>
  );
};
```

## Body

```jsx
const Body = () => {
  return (
    <main>
      <h2>Restaurants</h2>
      <RestaurantCard />
    </main>
  );
};
```

## Two Ways to Write CSS

### External CSS

```jsx
import "../css/Header.css";

const Header = () => {
  return <h1 className="header">FoodieHUB</h1>;
};
```

```css
.header {
  font-size: 30px;
}
```

### Inline CSS

```jsx
const Header = () => {
  return (
    <h1 style={{ fontSize: "30px", color: "orange" }}>
      FoodieHUB
    </h1>
  );
};
```

## Props

**Props (properties)** are values passed from a parent component to a child component. They are similar to arguments passed to a function.

### Parent

```jsx
<RestaurantCard
  name="Biryani House"
  avgRatings="4.5"
/>
```

### Child — using props

```jsx
const RestaurantCard = (props) => {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>{props.avgRatings}</p>
    </div>
  );
};
```

### Child — destructuring props

```jsx
const RestaurantCard = ({ name, avgRatings }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{avgRatings}</p>
    </div>
  );
};
```

## Config-Driven UI

**Config-driven UI** means generating UI from configuration/data instead of hardcoding every repeated item.

```jsx
const restaurants = [
  {
    id: 1,
    name: "Biryani House",
    avgRatings: 4.5,
  },
  {
    id: 2,
    name: "Pizza Corner",
    avgRatings: 4.2,
  },
];
```

```jsx
{restaurants.map((restaurant) => (
  <RestaurantCard
    key={restaurant.id}
    name={restaurant.name}
    avgRatings={restaurant.avgRatings}
  />
))}
```

## Key Property

When rendering a list, give each item a stable unique `key`.

```jsx
{restaurants.map((restaurant) => (
  <RestaurantCard
    key={restaurant.id}
    name={restaurant.name}
    avgRatings={restaurant.avgRatings}
  />
))}
```

### Why is `key` important?

Keys help React identify which list item corresponds to which previous item during reconciliation.

Example:

```text
Previous: A B C
New:      A C D
```

With stable keys, React can match A and C, remove B, and add D.

Prefer a stable unique ID:

```jsx
key={restaurant.id}
```

rather than an array index when the list can change order, be inserted into, or deleted from.

## Rendering and Reconciliation

When props or state change, React renders the component again and uses reconciliation to determine what UI changes are needed.

Simplified:

```text
Props / State change
       ↓
Component renders
       ↓
New React element tree
       ↓
Reconciliation
       ↓
Required changes
       ↓
Browser DOM update
```
