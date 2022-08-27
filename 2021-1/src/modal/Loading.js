export default function Loading({ $target }) {
  const $loadingModal = document.createElement('div');
  $loadingModal.className = 'Modal Loading';

  this.unMount = () => {
    $target.removeChild($loadingModal);
  };

  this.render = () => {
    $target.appendChild($loadingModal);
    $loadingModal.innerHTML = `
      <div class="content">
        <iframe src="https://giphy.com/embed/swhRkVYLJDrCE" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen/>
      </div>
    `;
  };
};