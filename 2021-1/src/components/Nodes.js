import ImageViewer from "../modal/ImageViewer.js";

const IMAGE_PATH_PREFIX = 'https://fe-dev-matching-2021-03-serverlessdeploymentbuck-t3kpj3way537.s3.ap-northeast-2.amazonaws.com/public'

export default function Nodes({ $target, initalState, onClick, onBackClick }) {
  const $nodes = document.createElement('div');
  $nodes.className = 'Nodes';
  let imageModal;
  $target.appendChild($nodes);

  this.state = initalState;
  this.setState = (newState) => {
    this.state= newState;
    this.render();
  }
  
  this.onClick = onClick;
  this.onBackClick = onBackClick;

  this.render = () => {
    if(this.state.rength === 0) return;
    const nodesTemplate = `
      ${this.state.map((node) => {
        const iconPath = node.type === 'FILE' ? './assets/file.png' : './assets/directory.png'

        return `
          <div class="Node" data-node-id="${node.id}">
            <img src="${iconPath}" />
            <div>${node.name}</div>
          </div>
        `}).join('')
    }`;

    $nodes.innerHTML = this.state[0].parent !== null ? `
      <div class="Node">
        <img src="./assets/prev.png"/>
      </div>${nodesTemplate}` : nodesTemplate 
    
    $nodes.querySelectorAll('.Node').forEach($node => {
      $node.addEventListener('click', (e) => {
        const { nodeId } = $node.dataset;
        const selectedNode = this.state.find(node => node.id === nodeId);
        if (selectedNode) {
          if (selectedNode.type === "DIRECTORY") {
            this.onClick(selectedNode);
          } else {
            imageModal = new ImageViewer({ $target, imageUrl: selectedNode.filePath }).render();
          }          
        } else {
          this.onBackClick();
        }
      });    
    });
  };  
}; 