const footEventConsts = {
  previewImg: 'img/photos-7884lejLFH9MN8IC.png',
  day: '15',
  month: 'Jan',
  title: 'Lorem ipsum dolor sit amet',
  year: '2016',
};

const footEventsSection = document.querySelector('.footer-blogs');

function renderEvents(previewImg, title, month, day, year) {
  const element = document.createElement('DIV');
  element.classList.add('footer-blog');
  const footEventContent = `
    <div>
        <img src="${previewImg}" alt="photo">
    </div>
    <div class="footer-blog-text">
        <p>${title}</p>
        <p class="footer-blog-date">
            <span>${month}</span> <span>${day}</span>, <span>${year}</span>
        </p>
    </div>
   `;
  element.innerHTML = footEventContent;
  footEventsSection.append(element);
}

renderEvents(footEventConsts.previewImg, footEventConsts.title,
    footEventConsts.month, footEventConsts.day, footEventConsts.year);
renderEvents(footEventConsts.previewImg, footEventConsts.title,
    footEventConsts.month, footEventConsts.day, footEventConsts.year);
renderEvents(footEventConsts.previewImg, footEventConsts.title,
    footEventConsts.month, footEventConsts.day, footEventConsts.year);
renderEvents(footEventConsts.previewImg, footEventConsts.title,
    footEventConsts.month, footEventConsts.day, footEventConsts.year);
renderEvents(footEventConsts.previewImg, footEventConsts.title,
    footEventConsts.month, footEventConsts.day, footEventConsts.year);
