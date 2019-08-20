![image](https://user-images.githubusercontent.com/40820154/63348417-7ab99880-c359-11e9-82ff-9b90a14c955b.png)

# openui5-svg-demo
Demo application for interactive usage of SVG with OpenUI5

The applications loads an SVG file and renders inside a [sap.ui.core.HTML](https://sapui5.hana.ondemand.com/#/api/sap.ui.core.HTML) control.

Once the SVG has been loaded and rendered, `onclick` events of the SVG `path` elements are registered via jQuery and syncronized with a local JSON model.

## How to run
 - Clone or download the repository
 - Run `npm install`
 - Run `npm run start`
 
## Resources
 - Project is served on the development server of [UI5 Tooling](https://sap.github.io/ui5-tooling/)
 
    > `width` and `height` properties of the SVG was replaced with `viewbox` so the image would fit its container
    ```diff
    - <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="2040" height="1028" xml:space="preserve">
    + <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewbox="0 0 2040 1028" xml:space="preserve">
    ```
 - SVG Map is generated via AmCharts [Pixel Map Generator](https://pixelmap.amcharts.com/)
