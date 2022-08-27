export default function ImageViewer({ $target, imageUrl }) {
  const $imageModal = document.createElement('div');
  $imageModal.className = 'Modal ImageViewer';

  $target.appendChild($imageModal);

  this.unMount = () => {
    if($target.querySelector('.ImageViewer'))
      $target.removeChild($imageModal);
  };

  this.render = () => {
    $imageModal.innerHTML = `
      <div class="content">
        <img src="https://fe-dev-matching-2021-03-serverlessdeploymentbuck-t3kpj3way537.s3.ap-northeast-2.amazonaws.com/public${imageUrl}"/>
      </div>
    `;

    $imageModal.addEventListener('click', e => {
      if (e.target.className === 'Modal ImageViewer'){
        this.unMount();
      }      
    });
  };
  
  this.render();
};