   function change(color)
    {
getComputedStyle(element).getPropertyValue("--my-var");

element.style.setProperty("--my-var", color);
    }