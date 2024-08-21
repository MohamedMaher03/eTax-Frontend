

    // CALL PAGINATION
fetch("/components/pagination.html")
.then((res) => res.text())
.then((text) => {
  let select = document.querySelector("script#pagination");
  let add = document.createElement("div");
  add.innerHTML = text;
  select.parentNode.replaceChild(add, select);
});
