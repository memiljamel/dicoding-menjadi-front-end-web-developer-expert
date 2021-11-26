class SkipToMainContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="skip-content">
        <div class="skip-content-wrapper">
          <a href="#restaurant" role="link">Skip to Main Content</a>
        </div>
      </div>
    `;
  }
}

customElements.define('skip-to-main-content', SkipToMainContent);
