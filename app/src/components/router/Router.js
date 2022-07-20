class Router {
  constructor(initialPath = window.location.pathname) {
    this.currentPath = initialPath;
  }

  #createLoading() {
    return `
        <p id="router-loading">Loading...</p>
    `;
  }

  #renderLoading() {
    document.querySelector("body").innerHTML = this.#createLoading();
  }

  #removeLoading() {
    document.getElementById("router-loading").remove();
  }

  render({ config = [] } = {}) {
    const currentConfig = config.find(({ path }) => path === this.currentPath);

    if (currentConfig) {
      const { componentFn } = currentConfig;

      this.#renderLoading();

      componentFn().finally(() => {
        this.#removeLoading();
      });
    }
  }
}

export default Router;
