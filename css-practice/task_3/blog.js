const eventConsts = {
  previewImg: 'img/Layer_54.png',
  day: '15',
  month: 'Jan',
  title: 'Lorem ipsum dolor sit amet',
  watched: '542',
  comments: '17',
};

const eventsSection = document.querySelector('.events-list');

function renderEvents(previewImg, title, watched, comments, month, day) {
  const element = document.createElement('DIV');
  element.classList.add('event');
  const eventContent = `
    <img src="${previewImg}" alt="photo">
    <h6>${title}</h6>
    <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <div class="counter">
        <img src="img/VIEW.png" alt="icon">
        <p>${watched}</p>
        <img src="img/SPEECH_BUBBLE_2.png" alt="icon">
        <p>${comments}</p>
    </div>
    <div class="date">
        <p class="big-num">${day}</p>
        <p>${month}</p>
    </div>
 `;
  element.innerHTML = eventContent;
  eventsSection.append(element);
}

renderEvents(eventConsts.previewImg, eventConsts.title, eventConsts.watched,
    eventConsts.comments, eventConsts.month, eventConsts.day);
renderEvents(eventConsts.previewImg, eventConsts.title, eventConsts.watched,
    eventConsts.comments, eventConsts.month, eventConsts.day);
renderEvents(eventConsts.previewImg, eventConsts.title, eventConsts.watched,
    eventConsts.comments, eventConsts.month, eventConsts.day);
renderEvents(eventConsts.previewImg, eventConsts.title, eventConsts.watched,
    eventConsts.comments, eventConsts.month, eventConsts.day);

