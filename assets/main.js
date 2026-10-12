(function () {
  "use strict";

  var links = window.HANDS_ON_LINKS || [];
  var list = document.getElementById("list");
  var search = document.getElementById("search");
  var count = document.getElementById("count");

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  function linkButton(href, label, className) {
    var a = el("a", className, label);
    a.href = href;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    return a;
  }

  function renderCard(item) {
    var li = el("li", "card");
    li.dataset.search = [item.title, item.summary, (item.tags || []).join(" ")]
      .join(" ")
      .toLowerCase();

    var meta = el("div", "card-meta");
    if (item.status === "preparing") {
      meta.appendChild(el("span", "badge badge-preparing", "準備中"));
    }
    if (item.duration) {
      meta.appendChild(el("span", "duration", "⏱ " + item.duration));
    }
    if (meta.childNodes.length) li.appendChild(meta);

    li.appendChild(el("h2", "card-title", item.title));
    if (item.summary) li.appendChild(el("p", "card-summary", item.summary));

    if (item.tags && item.tags.length) {
      var tags = el("ul", "tags");
      item.tags.forEach(function (t) {
        tags.appendChild(el("li", "tag", t));
      });
      li.appendChild(tags);
    }

    var actions = el("div", "card-actions");
    if (item.docsUrl) {
      actions.appendChild(linkButton(item.docsUrl, "手順書を開く", "btn btn-primary"));
    }
    if (item.repoUrl) {
      actions.appendChild(linkButton(item.repoUrl, "リポジトリ", "btn btn-secondary"));
    }
    li.appendChild(actions);

    return li;
  }

  function applyFilter() {
    var q = search.value.trim().toLowerCase();
    var visible = 0;
    Array.prototype.forEach.call(list.children, function (card) {
      var hit = !q || card.dataset.search.indexOf(q) !== -1;
      card.hidden = !hit;
      if (hit) visible++;
    });
    count.textContent = q
      ? visible + " / " + links.length + " 件"
      : links.length + " 件のハンズオン";
  }

  links.forEach(function (item) {
    list.appendChild(renderCard(item));
  });
  search.addEventListener("input", applyFilter);
  applyFilter();
})();
