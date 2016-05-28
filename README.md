##ng-dropdown
===============

To use it:
- take out the and `modules/common` and include the following as a list of dependencies:
    `dropDown.filters, dropDown.components, dropDown.directives` in you main angular.module
- Include the following stylesheets
  ```
    <link rel="stylesheet" href="app/modules/common/dropdown/stylesheets/dropdown.css">
    <link rel="stylesheet" href="app/modules/common/dropdown/components/driver_detail.css">
  ```
- And include the following script tags:
  ```
    <script src="app/modules/common/dropdown/init.js"></script>
    <script src="app/modules/common/dropdown/components/driver.js"></script>
    <script src="app/modules/common/dropdown/filters/filterDriver.js"></script>
    <script src="app/modules/common/dropdown/controllers/dropdown.js"></script>
    <script src="app/modules/common/dropdown/directives/dropdown.js"></script>
  ```

To run this project:

```
npm install
npm start
```
