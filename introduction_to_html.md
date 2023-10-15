
### HTML Basics

HTML is made up of elements that are enclosed in angle brackets. Elements can have attributes that provide additional information about the element. Here's a basic HTML template:

```html
<!DOCTYPE html>
<html>
<head>
    <title>My First Web Page</title>
</head>
<body>
    <h1>Welcome to My Web Page</h1>
    <p>This is a paragraph of text.</p>
</body>
</html>
```

Let's break down this example:

- `<!DOCTYPE html>`: This declaration specifies the document type and version of HTML being used (HTML5 in this case).
- `<html>`: The `<html>` element is the root element that wraps all content on the page.
- `<head>`: The `<head>` element contains meta-information about the document, such as the page title.
- `<title>`: The `<title>` element sets the title of the web page (displayed in the browser's title bar or tab).
- `<body>`: The `<body>` element contains the visible content of the web page.
- `<h1>` and `<p>`: These are examples of heading and paragraph elements, respectively.

### HTML Elements

Here are some common HTML elements:

1. **Headings**: Use `<h1>` through `<h6>` for headings. `<h1>` is the highest level, and `<h6>` is the lowest.

   ```html
   <h1>Main Heading</h1>
   <h2>Subheading</h2>
   ```

2. **Paragraphs**: Use `<p>` for paragraphs of text.

   ```html
   <p>This is a paragraph of text.</p>
   ```

3. **Links**: Create hyperlinks using the `<a>` element. The `href` attribute specifies the URL.

   ```html
   <a href="https://www.example.com">Visit Example.com</a>
   ```

4. **Lists**: Create ordered (`<ol>`) or unordered (`<ul>`) lists with list items (`<li>`).

   ```html
   <ul>
       <li>Item 1</li>
       <li>Item 2</li>
   </ul>
   ```

5. **Images**: Display images using the `<img>` element. The `src` attribute specifies the image source.

   ```html
   <img src="image.jpg" alt="A beautiful image">
   ```

### HTML Attributes

Attributes provide additional information about HTML elements. Here are a few common attributes:

- `class` and `id`: Used to apply CSS styles or JavaScript functionality.
- `src`: Specifies the source URL for elements like images and iframes.
- `alt`: Provides alternative text for images (for accessibility).
- `href`: Specifies the URL for links.
- `style`: Allows inline CSS styling.

### HTML Forms

HTML also allows you to create interactive forms for user input. Here's a simple form example:

```html
<form action="/submit" method="post">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>

    <input type="submit" value="Submit">
</form>
```

In this form:

- `<form>` defines the form element.
- `<label>` provides labels for form fields.
- `<input>` elements are used for text input, email input, and the submit button.
- The `required` attribute makes fields mandatory.

### HTML Comments

You can add comments to your HTML code using `<!--` and `-->`:

```html
<!-- This is a comment -->
```

Comments are not visible on the web page but are helpful for documenting your code.

### HTML Validation

It's essential to write well-formed HTML. You can validate your HTML using online tools like the W3C Markup Validation Service (https://validator.w3.org/) to ensure it follows the HTML standards.
------------------
## Most Used HTML Tags

1. `<html>`
   - Defines the root element of an HTML document.
   ```html
   <!DOCTYPE html>
   <html>
   <!-- HTML content goes here -->
   </html>
   ```

2. `<head>`
   - Contains metadata about the HTML document.
   ```html
   <head>
       <title>Page Title</title>
       <!-- Other meta tags and links go here -->
   </head>
   ```

3. `<title>`
   - Sets the title of the HTML document displayed in the browser's title bar or tab.
   ```html
   <title>My Web Page</title>
   ```

4. `<meta>`
   - Provides metadata about the document.
   ```html
   <meta name="description" content="This is a description of the web page.">
   ```

5. `<link>`
   - Links external resources, like stylesheets.
   ```html
   <link rel="stylesheet" href="styles.css">
   ```

6. `<style>`
   - Embeds CSS styles within the HTML document.
   ```html
   <style>
       body {
           background-color: #f0f0f0;
       }
   </style>
   ```

7. `<script>`
   - Embeds JavaScript code or links to external scripts.
   ```html
   <script>
       function greet() {
           alert("Hello, World!");
       }
   </script>
   ```

8. `<body>`
   - Contains the visible content of the web page.
   ```html
   <body>
       <h1>Hello, World!</h1>
       <p>This is a paragraph.</p>
   </body>
   ```

9. `<h1> to <h6>`
   - Defines headings of different levels.
   ```html
   <h1>Main Heading</h1>
   <h2>Subheading</h2>
   ```

10. `<p>`
    - Defines a paragraph of text.
    ```html
    <p>This is a paragraph of text.</p>
    ```

11. `<a>`
    - Creates hyperlinks.
    ```html
    <a href="https://www.example.com">Visit Example.com</a>
    ```

12. `<img>`
    - Embeds images.
    ```html
    <img src="image.jpg" alt="A beautiful image">
    ```

13. `<ul>`
    - Creates an unordered list.
    ```html
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
    </ul>
    ```

14. `<ol>`
    - Creates an ordered list.
    ```html
    <ol>
        <li>First item</li>
        <li>Second item</li>
    </ol>
    ```

15. `<li>`
    - Defines a list item in `<ul>` or `<ol>`.
    ```html
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
    </ul>
    ```

16. `<table>`
    - Creates a table.
    ```html
    <table>
        <tr>
            <td>Row 1, Cell 1</td>
            <td>Row 1, Cell 2</td>
        </tr>
        <tr>
            <td>Row 2, Cell 1</td>
            <td>Row 2, Cell 2</td>
        </tr>
    </table>
    ```

17. `<tr>`
    - Defines a table row.
    ```html
    <tr>
        <td>Row 1, Cell 1</td>
        <td>Row 1, Cell 2</td>
    </tr>
    ```

18. `<th>`
    - Defines a table header cell.
    ```html
    <th>Header 1</th>
    <th>Header 2</th>
    ```

19. `<td>`
    - Defines a table data cell.
    ```html
    <td>Row 1, Cell 1</td>
    <td>Row 1, Cell 2</td>
    ```

20. `<form>`
    - Creates an HTML form for user input.
    ```html
    <form action="/submit" method="post">
        <!-- Form elements go here -->
    </form>
    ```

21. `<input>`
    - Defines an input field within a form.
    ```html
    <input type="text" name="username" id="username">
    ```

22. `<label>`
    - Provides a label for form elements.
    ```html
    <label for="username">Username:</label>
    ```

23. `<textarea>`
    - Creates a multiline text input area.
    ```html
    <textarea name="message" id="message" rows="4" cols="50"></textarea>
    ```

24. `<button>`
    - Creates a clickable button.
    ```html
    <button type="button">Click me</button>
    ```

25. `<select>`
    - Creates a dropdown list.
    ```html
    <select name="cars" id="cars">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
    </select>
    ```

