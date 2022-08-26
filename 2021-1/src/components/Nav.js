export default function Nav({ $target, initalState, changePath }) {
  const $nav = document.createElement('nav');
  $nav.className = 'Breadcrumb';
  
  $target.appendChild($nav);
  this.changePath = changePath;

  this.state = initalState;
  this.setState = (newState) => {
    this.state = newState;
    this.render();
  }

  this.render = () => {
    $nav.innerHTML = `
      ${this.state.path.map((id, index) => `
        <div class="route" data-path-id="${id}">
          ${this.state.pathName[index]}
        </div>
      `).join('')}      
    `;
  };

  $target.addEventListener('click', (e) => {
    const $node = e.target.closest('.route');
    
    if ($node) {
      const { pathId } = $node.dataset;
      this.changePath(pathId);
    }    
  });
};