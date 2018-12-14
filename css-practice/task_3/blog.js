/* global fetch, document*/
function renderArticleItem(model) {
  const {previewImg, title, description, watched, comments, published} = model;
  const element = document.createElement('div');
  element.classList.add('event');
  const {month, day} = parseDate(published);

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
             <p class="big-num">${day}</p>
             <p>${month}</p>
         </div>
     `;
  element.innerHTML = blogContent;
  return (element);
}

function filterBlogs(res) {
  const latestBlogs = [];
  const footerBlogs = [];

  res.blogs.forEach((blog) => {
    if (res.latest.includes(blog.id)) {
      latestBlogs.push(blog);
    } else {
      footerBlogs.push(blog);
    }
  });

  return {
    latestBlogs,
    footerBlogs,
  };
}

function renderBlogs(blogs, container, create) {
  blogs.forEach(((model) => {
    container.appendChild(create(model));
  }));
}

function parseDate(published) {
  const date = new Date(published);
  const locale = 'en-us';
  const month = date.toLocaleString(locale, {month: 'short'});
  const year = date.getFullYear();
  const day = date.getDate();

  return {day, month, year};

}

function renderBlogItem(model) {
  const {previewImg, title, published} = model;
  const element = document.createElement('div');
  const {month, day, year} = parseDate(published);
  const date = `${month} ${day}, ${year}`;
  element.classList.add('footer-blog');

  const blog = `
    <div class="footer-blog-image">
      <img src="${previewImg}" alt="">
    </div>
    <div class="footer-blog-text">
      <p>${title}</p>
      <h5 class="footer-blog-date">${date}</h5>
    </div>
  `;

  element.innerHTML = blog;
  return (element);
}

function fetchResponse(res) {
  const {latestBlogs, footerBlogs} = filterBlogs(res);

  const articlesSection = document.querySelector('.events-list');
  const blogsSection = document.querySelector('.footer-blogs');

  renderBlogs(latestBlogs, articlesSection, renderArticleItem);
  renderBlogs(footerBlogs, blogsSection, renderBlogItem);
}

fetch('http://localhost:3000/api/blogs')
    .then((response) => response.json())
    .then(fetchResponse);

