# Material Resume

## [Demo](https://rrdelaney.github.io/material-resume/)

## Latest versions

```html
<link href="https://unpkg.com/material-resume@1.0.1/resume.min.css" rel="stylesheet">
<script src="https://unpkg.com/material-resume@1.0.1/resume.min.js"></script>
```

## Getting Started

1. Download the [`index.html`](https://github.com/rrdelaney/material-resume/blob/gh-pages/index.html) file
2. Open in your favorite editor
3. Open document in chrome
4. Start editing in the `<body>`
5. To save:
  - Right click
  - `Print...`
  - `Save as PDF`

Building the resume is as easy as adding `ng-app="Resume"` to your body
and then using the directives listed below.

## Directives

### `<resume>`

Holds the entire document.

__Example__:
```html
<html>
  <head>...</head>
  <body ng-app="Resume">
    <resume>
      ...
    </resume>
  </body>
</html>
```

### `<resume-heading>`

Heading the for the resume. Should come immediately after `<resume>`.

 __Options__:
- `first-name`: Your first name
- `last-name`: Your last name
- `website`: Your website, optional
- `email`: Your email, optional
- `phone`: Your phone number, optional
- `github`: Your github username, optional
- `linkedin`: Your linkedin username, optional

__Example__:
```html
<resume>
  <resume-heading first-name="Joe"
                  last-name="Smith"
                  phone="555-555-555">
  </resume-heading>
</resume>
```

### `<resume-body>`

Contains the body of the resume.

__Example__:
```html
<resume>
  <resume-body>
    ...
  </resume-body>
</resume>
```

### `<resume-column>`

Adds a column to the resume. The width of the column must also be specified.
There can be more than one column side-by-side, but the flex values
should add up to 100.

__Options__:
- `flex`: The width of the column out of 100

__Example__:
```html
<resume>
  <resume-heading></resume-heading>
  <resume-body>
    <resume-column flex="30">
      <!-- This will be 30% of the page -->
    </resume-column>
    <resume-column flex="70">
      <!-- This will be 30% of the page -->
    </resume-column>
  </resume-body>
</resume>
```

### `<sidebar-category>`

A small category window meant to hold a couple of points. Useful for things
in a sidebar, like coursework. Meant for small bullets. Child items should use
the `<p>` tag.

__Options__:
- `name`: The name of the category. Will appear in bold font above the items

__Example__:
```html
<resume-body>
  <resume-column flex="30">
    <sidebar-category name="Facts">
      <p>I am awesome</p>
      <p>I am cool</p>
    </sidebar-category>
  </resume-column>
</resume-body>
```

### `<category>`

A larger category for the main section of the resume. Meant for multiple items
to be be elaborated upon. Child items should be the `<category-item>` tag. An
example would be to create a category called "Jobs" and then each item would
be a previous job that would then be expanded upon.

__Options__:
- `name`: The name of the category

__Example__:
```html
<resume-body>
  <resume-column flex="70">
    <category name="Jobs">
      <category-item title="My First Job">...</category-item>
      <category-item title="My Second Job">...</category-item>
      <category-item title="My Third Job">...</category-item>    
    </category>
  </resume-column>
</resume-body>
```

### `<category-item>`

A point to elaborate upon in a category. E.x. a job in the "Jobs" category.
Child items should use the `<li>` tag.

__Options__:
- `title`: The title of the item. Will be displayed in bold under the category
- `subtitle`: Extra info, next to the title, optional

__Example__:
```html
<category name="Jobs">
  <category-item title="Marketing Intern" subtitle="Contoso (Summer 2014)">
    <li>Created content for marketing</li>
    <li>Worked with others, sometimes successfully</li>
  </category-item>
  <category-item title="Cashier" subtitle="Micheal's (November 2014 - May 2015)">
    <li>Checked items out</li>
    <li>Did inventory</li>
  </category-item>   
</category>
```

## Updating

To update this resume to a newer version, copy the `<link>` and `<script>`
tags you see at the top of this file and replace lines 13 and 14 with them.
