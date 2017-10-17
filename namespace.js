var SING0961 = {
    init: function () {
        console.log("script in SING0961 called");
        var div = document.createElement("div");
      

        div.className = "box";
        div.textContent = "SING0961";

        document.getElementById("boxes").appendChild(div);

        div.addEventListener("click", clickMe);
        div.addEventListener("mouseover", hoverMe);
        div.addEventListener("mouseout", hoverMe);

        function hoverMe(ev) {
            this.classList.toggle("highlight");
        }

        function clickMe(ev) {

                this.style.backgroundColor = "#d131a3";
                this.style.borderColor = "#bf0a0a";
            }

        }

    }