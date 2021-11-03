const accordionItemHeaders = document.querySelectorAll(
  ".accordion-item-header"
);

function closeAccordionItem(Item) {
  Item.classList.remove("active");
  Item.nextElementSibling.style.maxHeight = 0;
}

function toggleAccordionItem(Item) {
  // Toggle functionality
  if (Item.classList.contains("active")) {
    Item.classList.remove("active");
    Item.nextElementSibling.style.maxHeight = 0;
  } else {
    Item.classList.add("active");
    Item.nextElementSibling.style.maxHeight =
      Item.nextElementSibling.scrollHeight + "px";
  }
}

accordionItemHeaders.forEach((Header) => {
  Header.addEventListener("click", () => {
    // toggle clicked header
    if (Header.classList.contains("active")) {
      toggleAccordionItem(Header);
    } else {
      //close all open accordion items
      document
        .querySelectorAll(".accordion-item-header.active")
        .forEach((openHeader) => {
          closeAccordionItem(openHeader);
        });
        // open individual header
      Header.classList.add("active");
      if (Header.classList.contains("active")) {
        Header.nextElementSibling.style.maxHeight =
          Header.nextElementSibling.scrollHeight + "px";
      }
    }
  });
});
