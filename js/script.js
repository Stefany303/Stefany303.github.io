
function mostrarCard(step, cardNumber) {
    var cardId = 'card' + cardNumber;
    var card = document.getElementById(cardId);
    var stepElement = step;
    if (card.style.display === 'none') {
        card.style.display = 'block';
        stepElement.classList.add('clicked');
      } else {
        card.style.display = 'none';
        stepElement.classList.remove('clicked');
      }
  }
  