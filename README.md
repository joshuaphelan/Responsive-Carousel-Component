# Responsive Carousel Component

A responsive, touch-friendly carousel built with HTML, CSS, and JavaScript. This component supports arrow navigation, autoplay, swipe gestures, and dynamic responsiveness for both desktop and mobile devices.

## Features
- **Responsive Design**: Works seamlessly on both desktop and mobile devices.
- **Navigation Arrows**: Clickable arrows for easy navigation.
- **Autoplay**: Automatically scrolls through items with customizable intervals.
- **Swipe Support**: Swipe gestures for touch devices.
- **Customizable**: Replace images and links in the HTML to suit your needs.

---

## How to Use

1. Clone this repository or download the files.
2. Open `index.html` in your browser to see the carousel in action.
3. Replace the `<img>` `src` attributes in the HTML with your own image URLs and update the links as needed.

---

### Example HTML
Below is the example HTML structure included in the `index.html` file:

```html
<div class="card-slider">
    <button class="slider-arrow slider-arrow-left" aria-label="Previous card">&lt;</button>
    <div class="slider">
        <a href="https://earthmansoil.com/product/growvana-os/">
            <img src="https://earthmansoil.com/wp-content/uploads/2024/12/Variant8.png" alt="Growvana OS">
        </a>
        <a href="https://earthmansoil.com/product/massive-nano-science-for-big-plants/">
            <img src="https://earthmansoil.com/wp-content/uploads/2024/12/Variant4.png" alt="Massive Nano Science">
        </a>
        <a href="https://earthmansoil.com/product/root-love-science/">
            <img src="https://earthmansoil.com/wp-content/uploads/2024/12/Variant7.png" alt="Root Love Science">
        </a>
        <a href="https://earthmansoil.com/product/root-love/">
            <img src="https://earthmansoil.com/wp-content/uploads/2024/12/Variant6.png" alt="Root Love">
        </a>
        <a href="https://earthmansoil.com/product/the-big-finish/">
            <img src="https://earthmansoil.com/wp-content/uploads/2024/12/the-big-finsh.png" alt="The Big Finish">
        </a>
        <a href="https://earthmansoil.com/product/ka-bloom/">
            <img src="https://earthmansoil.com/wp-content/uploads/2024/12/Variant5.png" alt="Ka-Bloom">
        </a>
        <a href="https://earthmansoil.com/product/bokashi/">
            <img src="https://earthmansoil.com/wp-content/uploads/2024/12/bokashi.png" alt="Bokashi">
        </a>
    </div>
    <button class="slider-arrow slider-arrow-right" aria-label="Next card">&gt;</button>
</div>
```

---

## Customization

### Replace Images
To use your own images, update the `src` attributes in the `<img>` tags. Ensure your images are accessible online or included in your project directory.

### Update Links
Modify the `href` attributes in the `<a>` tags to link to your own pages or resources.

### Adjust Autoplay Timing
To change the autoplay interval, edit the `startSliderTimer` function in `script.js`:
```javascript
sliderTimer = setInterval(() => {
    currentIndex++;
    moveSlider();
}, 2000); // Adjust 2000 to your desired interval in milliseconds
```

---

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Demo
Include a live demo link if hosting on GitHub Pages or another platform.