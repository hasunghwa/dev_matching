export default function Suggestion({
  $target,
  initalState
}) {
  this.$element = document.createElement('div');
  this.$element.className = 'Suggestion';
  $target.appendChild(this.$element);

  this.state = {
    selectedIndex: 0,
    items: initalState.items
  };

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    const { items = [], selectedIndex } = this.state;
    if (items.length > 0) {
      this.$element.style.display = 'block';
      this.$element.innerHTML = `
        ${items.map((item, index) => `
          <ul>
            <li class="${index === selectedIndex ? 'Suggestion__item--selected' : ''}" data-index="${index}">${item}</li>
          </ul> 
        `).join('')}             
      `;
    } else {
      this.$element.style.display = 'none';
      this.$element.innerHTML = '';
    };
  };

  window.addEventListener('keyup', (e) => {
    if (this.state.items.length > 0) {
      const { selectedIndex } = this.state;
      const lastIndex = this.state.items.length -1;
      const navigationKeys = ['ArrowUp', ArrowDown;]
    };
  });
};