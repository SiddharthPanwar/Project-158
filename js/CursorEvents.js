AFRAME.registerComponent("cursor-listener", {
    schema: {
      selectedItemId: { default: "", type: "string" },
    },
    init: function () {
      this.handleMouseEnterEvents();
      this.handleMouseLeaveEvents();
    },
    handlePosterState: function () {
      const id = this.el.getAttribute("id");
      const posterId = ["superman", "spiderman", "captain-aero", "outer-space"];
      if (posterId.includes(id)) {
        const posterContainer = document.querySelector("#posters-container");
        posterContainer.setAttribute("cursor-listener", {
          selectedItemId: id,
        });
        this.el.setAttribute("material", {
          color: "#D76B30",
          opacity: 1,
        });
      }
    },
    handleMouseEnterEvents: function () {
     
      this.el.addEventListener("mouseenter", () => {
        this.handlePosterState();
      });
    },
    handleMouseLeaveEvents: function () {
      
      this.el.addEventListener("mouseleave", () => {
        const { selectedItemId } = this.data;
        if (selectedItemId) {
          const el = document.querySelector(`#${selectedItemId}`);
          const id = el.getAttribute("id");
          if (id == selectedItemId) {
            el.setAttribute("material", {
              color: "#0077CC",
              opacity: 1,
            });
          }
        }
      });
    },
  });