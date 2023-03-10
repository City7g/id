const development = () => {
  // Prevent All Links
  document.querySelectorAll('a[href="#"]').forEach((item) => [
    item.addEventListener("click", (e) => {
      e.preventDefault();
    }),
  ]);

  // Prevent All Forms
  const forms = document.querySelectorAll('form')
  forms.forEach(item => {
    item.addEventListener('submit', e => {
      e.preventDefault()
      const formData = new FormData(item)
      console.log(formData)
    })
  })

  // Device Width
  const deviceWidth = document.createElement("div");
  deviceWidth.style.position = "fixed";
  deviceWidth.style.zIndex = "100000";
  deviceWidth.style.right = "20px";
  deviceWidth.style.bottom = "20px";
  deviceWidth.style.background = "white";
  deviceWidth.style.padding = "2px 8px";
  deviceWidth.style.fontWeight = "700";
  deviceWidth.style.border = "1px solid black";
  deviceWidth.style.borderRadius = "2px";
  deviceWidth.textContent = window.innerWidth
  document.querySelector("body").append(deviceWidth);

  window.addEventListener("resize", () => {
    deviceWidth.textContent = window.innerWidth;
  });

  // Add Grid
  const addGrid = () => {
    const gridItemNav = document.createElement("a");
    gridItemNav.setAttribute("href", "#grid");
    gridItemNav.classList.add("link-main");
    gridItemNav.textContent = "Grid";
    document
      .querySelector(".header-nav a:last-child")
      .after(gridItemNav);

    gridItemNav.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector("body").classList.toggle("grid");
    });
  }
  addGrid()
};

export default development;