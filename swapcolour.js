var box1 = document.getElementById('box1');
        var box2 = document.getElementById('box2');

        // Function to swap the colors
        function swapColors() {
            
            var color1 = window.getComputedStyle(box1).backgroundColor;
            var color2 = window.getComputedStyle(box2).backgroundColor;

           
            box1.style.backgroundColor = color2;
            box2.style.backgroundColor = color1;
        }

        
        box1.onclick = swapColors;
        box2.onclick = swapColors;