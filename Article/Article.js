// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;

    // create a reference to the ".expandButton" class.
    this.expandButton = domElement.querySelector(".expandButton");

    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.innerHTML = "Expand";

    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener("click", this.expandArticle.bind(this));
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle("article-open");
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the constructor.

*/

let articles = document.querySelectorAll(".article");
articles.forEach(article => (article = new Article(article)));

// Add new Article to List
function createArticle(title, content) {
  let new_article = document.createElement("div");
  new_article.setAttribute("class", "article");

  let article_title = document.createElement("h2");
  article_title.textContent = title;

  let article_date = document.createElement("p");
  article_date.setAttribute("class", "date");
  let mmddyy = { month: "short", year: "numeric", day: "numeric" };
  article_date.textContent = new Date().toLocaleDateString("en-US", mmddyy);

  let article_content = document.createElement("p");
  article_content.textContent = content;

  let btn = document.createElement("span");
  btn.setAttribute("class", "expandButton");

  new_article.appendChild(article_title);
  new_article.appendChild(article_date);
  new_article.appendChild(article_content);
  new_article.appendChild(btn);

  return new_article;
}

function addArticle(article) {
  let parent_articles = document.querySelector(".articles");
  parent_articles.prepend(article);
}

let submit_btn = document.getElementById("submit");

submit_btn.addEventListener("click", e => {
  e.preventDefault();

  let title = document.getElementById("title").value;
  let msg = document.getElementById("msg").value;

  let n_art = createArticle(title, msg);
  addArticle(n_art);
  n_art = new Article(n_art);

  document.getElementById("title").value = "";
  document.getElementById("msg").value = "";
});
