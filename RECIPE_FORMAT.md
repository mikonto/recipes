# Recipe Format Guide

This guide explains how to add new recipes to the site.

## Creating a New Recipe

1. Create a new markdown file in the `src/recipes/` directory
2. Name it with a URL-friendly format: `recipe-name.md` (lowercase, hyphens for spaces)

## Required Frontmatter

Every recipe must include the following frontmatter at the top of the file:

```yaml
---
layout: layouts/recipe.njk
title: Recipe Name
tags:
  - recipes  # Always include this
  - category1
  - category2
---
```

## Optional Frontmatter Fields

```yaml
author: Chef Name
description: Brief description for the recipe card
prepTime: 15 min
cookTime: 30 min
servings: 4
ingredients:
  - 1 cup flour
  - 2 eggs
  - etc.
instructions:
  - "Step 1: Do this"
  - "Step 2: Then do this"
  - "Step 3: Finally do this"
notes: Any special notes or tips about the recipe
```

## Example Recipe

```markdown
---
layout: layouts/recipe.njk
title: Avocado Pasta
author: Alexander Gullichsen
description: A creamy, no-cook avocado pasta sauce
prepTime: 15 min
cookTime: 10 min
servings: 4
tags:
  - recipes
  - pasta
  - vegetarian
  - quick
ingredients:
  - 2 ripe avocados
  - 1 garlic clove
  - 1 lime
  - Salt and pepper to taste
instructions:
  - "Dice the avocados and place in a bowl"
  - "Add minced garlic and lime juice"
  - "Mix with cooked pasta and serve"
notes: Make sure avocados are perfectly ripe
---
```

## Tips

- Keep instructions clear and concise
- List ingredients in the order they're used
- Include specific measurements where important
- Add helpful notes for tricky steps
- Use tags to categorize recipes (e.g., breakfast, dinner, vegan, quick)

## Building and Testing

1. Run `npm start` to preview locally at http://localhost:8080
2. Check that your recipe appears on the homepage
3. Click through to ensure all fields display correctly
4. Test the ingredient checkboxes and screen toggle on mobile