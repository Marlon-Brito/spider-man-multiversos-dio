// Adicionará a classe no elemento
function handleMouseEnter() {
  console.log('Elemento que o mouse passou: ', this) // O this é o elemento que o mouse passou e se sobrepôs
  this.classList.add('s-card--hovered')
  // Ao passar o mouse trocar o background do spider através do seu id
  document.body.id = `${this.id}-hovered`;
}

// Retirará a classe no elemento
function handleMouseLeave() {
  this.classList.remove('s-card--hovered') // A classe sairá
  document.body.id = ''; // Tira o id ao não sobrepor um spider
}

// Adicionará eventListeners a esses cards
function addEventListenersToCards() {
  const cardElements = document.getElementsByClassName('s-card');
  console.log(cardElements);
  // Ao colocar o mouse sobre cada card adicionará uma classe css dinamicamente
  for (let index = 0; index < cardElements.length; index++) {
    const card = cardElements[index];
    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);
  }
}

document.addEventListener('DOMContentLoaded', addEventListenersToCards, false);

// Gerencia a rotação da bandeja dependendo do botão clicado
function selectCarouselItem(selectedButtonElement) {
  // console.log('Selecionando item', selectItem)
  const selectedItem = selectedButtonElement.id;
  const carousel = document.querySelector('.s-cards-carousel')
  // console.log(selectedItem)
  // console.log(carousel)
  const transform = carousel.style.transform;
  //console.log(transform)
  const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i); // regEx. Retornará um array no rotateY
  //console.log(rotateY);
  const rotateYDeg = -120 * (Number(selectedItem) - 1); // 360 / 3 = Divisão de graus para 3 cards. Valor negativo para ir no sentido anti-horário. Subtrai 1 porque a contagem começa com 0 no Tobey.
  // console.log(rotateYDeg);
  // Aplicando o valor contruído no transform
  const newTransform = transform.replace(rotateY[0], `rotateY(${rotateYDeg}deg)`);
  console.log(newTransform);

  carousel.style.transform = newTransform;

  // Deixando o botão clicado ativo
  const activeButtonElement = document.querySelector('.s-controller__button--active');
  activeButtonElement.classList.remove('s-controller__button--active');
  selectedButtonElement.classList.add('s-controller__button--active');
}