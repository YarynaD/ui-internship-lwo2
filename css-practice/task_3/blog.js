const eventsSection = document.querySelector('.events-list');
const footerSection = document.querySelector('.footer-blogs');

function RenderBlogItem(model, parsedDate) {
  const {previewImg, title, description, watched, comments} = model;
  const element = document.createElement('div');
  element.classList.add('event');

  const blogContent = `
        <img class="blog-image" src=${previewImg} alt="photo">
        <h6>${title}</h6>
        <p>${description}</p>
        <div class="counter">
            <img src="img/VIEW.png" alt="icon">
            <p>${watched}</p>
            <img src="img/SPEECH_BUBBLE_2.png" alt="icon">
            <p>${comments}</p>
        </div>
        <div class="date">
            <p class="big-num">${parsedDate[2]}</p>
            <p>${parsedDate[1]}</p>
        </div>
    `;
  element.innerHTML = blogContent;
  return (element);
}
function RenderFootItem(model, parsedDate) {
  const {previewImg, title} = model;
  const element = document.createElement('div');
  element.classList.add('footer-blog');


  const footBlogContent = `
            <div>
                <img src=${previewImg} alt="photo">
            </div>
            <div class="footer-blog-text">
                <p>${title}</p>
                <p class="footer-blog-date">${parsedDate[2]}, ${parsedDate[1]} ${parsedDate[0]}</p>
            </div>
    `;
  element.innerHTML = footBlogContent;
  return (element);
}

fetch('http://localhost:3000/api/blogs')
    .then((response) => response.json()
        .then((data) => [data.latest, data.blogs.sort(function(a, b) {
          let aDate = new Date(a.published);
          let bDate = new Date(b.published); return bDate.getTime() - aDate.getTime();
        })]))
    .then(renderer);

function renderer(res) {
  res[1].filter(function(item, index) {
    return res[0].includes(index);
}).forEach(((model)=> {
    let tempDate = new Date(model.published);
    let locale = 'en-us';
    let month = tempDate.toLocaleString(locale, {month: 'short'});
    let theDate = [tempDate.getFullYear(), month, tempDate.getDate()];
    eventsSection.appendChild(new RenderBlogItem(model, theDate));
  }));
  res[1].filter(function(item, index) {
    return res[0].includes(index) === false;
  }).forEach(((model)=> {
    let tempDate = new Date(model.published);
    let locale = 'en-us';
    let month = tempDate.toLocaleString(locale, {month: 'short'});
    let theDate = [tempDate.getFullYear(), month, tempDate.getDate()];
    footerSection.appendChild(new RenderFootItem(model, theDate));
  }));
}
