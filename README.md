# magnolia-ui-svelte

Implementation library of [Magnolia UI](https://www.figma.com/file/Zr7WdyAMrNvdTn3q1hGhgA/Magnolia-UI?type=design&mode=design&t=Alg8wBksaHjUfxZK-1) for Svelte

## 🚧 Under construction 🚧
This library does not yet include every component and may not function properly.

## Installation
In a Svelte project, run
```
npm install highlanderrobotics/magnolia-ui-svelte#production
```

As close to the root of the project as possible, surround the rest of your UI with
```html
<script>
    import { MagnoliaUIRoot } from "magnolia-ui-svelte";
</script>

<MagnoliaUIRoot>
    <!-- The rest of your code goes here -->
</MagnoliaUIRoot>
```
> 💡 If you're using SvelteKit, you can put this in a root `+layout.svelte` file.

Then, you can use any supported Magnolia UI components in your project.
```html
<script>
    import { Button } from "magnolia-ui-svelte";
</script>

<Button>Click me!</Button>
```
