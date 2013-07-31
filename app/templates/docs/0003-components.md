# Components

## What is a component for us?

We don't have a strong definition about it, but we are completely sure about
develop modules with the following principles:

  1. Reusable
  2. Maintainable
  3. Testable

You are the responsible of define the granularity based on your project size.

## Directory layout in detail for component

It's important to mentions here that you are the responsible of create the
layout based on your needs. Here you will see a simple example:

* [ComponentNameInCamelCase][component/namespace]
    - [index.hbs][component/template]
    - [index.js][component/module]
    - [style.less][component/styles]

### Component namespace
[component/namespace]: #component-namespace

It's just a convention where the folder must be in CamelCase and we recommend to
suffix the name of the folder based on the following rules:

1. If the component is a layout, then apply the suffix **Layout**. 
   
   *Example: **MainPageLayout***
   
2. If the component is widget like, the apply a descriptive name.

   *Example: **UserProfile***

### Component template
[component/template]: #component-template

The components generally define a minimal template to play with. As a gold rule
the top HTML element must define a class with the same name as the component.

For example, if the component's name is **UserProfile** then your minimal template
will look like:

```html
<section class="user-profile">
...
</section>
```

### Component logic
[component/module]: #component-logic

Component logic. Generally it's a Backbone.View / Marionette.ItemView /
Marionette.Controller / or anything you consider a module API.

By default we use AMD modules.

### Component styles
[component/styles]: #component-styles

Depending on your needs, generally it's required to do some kind of layout or
custom styles for each component in your App. This file is the correct place to
include that code.

Suppose we continue using the last example, your minimal CSS will looks like:

```css
.user-profile {
    /* add something here */
}
```

## Tamagotchi support for components

Some examples of components:

`yo tamagotchi:component UserProfile`

`yo tamagotchi:component MainPageLayout`