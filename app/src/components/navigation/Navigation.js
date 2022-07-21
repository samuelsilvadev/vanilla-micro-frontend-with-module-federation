import "./Navigation.css";

class Navigation {
  render({ items = [] } = {}) {
    const allListItemsMarkup = items
      .map(({ name, link }) => `<li><a href="${link}">${name}</a></li>`)
      .join("");

    const markup = `
        <ul class="app-navigation-list">
            ${allListItemsMarkup}
        </ul>
    `;

    document.querySelector("body").innerHTML += markup;
  }
}

export default Navigation;
