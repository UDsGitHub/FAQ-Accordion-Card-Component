const accordionItemHeaders = document.querySelectorAll(
  ".accordion-item-header"
);

function closeAccordionItem(Item) {
  Item.classList.remove("active");
  Item.nextElementSibling.style.maxHeight = 0;
}

function toggleAccordionItem(Item) {
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
    if (Header.classList.contains("active")) {
      toggleAccordionItem(Header);
    } else {
      document
        .querySelectorAll(".accordion-item-header.active")
        .forEach((openHeader) => {
          closeAccordionItem(openHeader);
        });
      Header.classList.add("active");
      if (Header.classList.contains("active")) {
        Header.nextElementSibling.style.maxHeight =
          Header.nextElementSibling.scrollHeight + "px";
      }
    }
  });
});
