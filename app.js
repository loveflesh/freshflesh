const recentData = [
  {
    title: "최근 게시물 제목 (폰트 크게 / 소개보다 크게)",
    desc: "게시글 내용 미리보기 (150자 이상일 경우 잘리게 처리 가능)",
    author: "관리자",
    date: "2026/02/10",
    thumb: null
  },
  {
    title: "두 번째 게시물",
    desc: "여기에 낙서장이나 BBS에서 가져온 내용이 들어감",
    author: "관리자",
    date: "2026/02/08",
    thumb: null
  }
];

const recentList = document.getElementById("recentList");

recentData.forEach(post => {
  const item = document.createElement("div");
  item.className = "recent-item";

  item.innerHTML = `
    <div class="thumb">
      ${post.thumb ? `<img src="${post.thumb}">` : "썸네일"}
    </div>
    <div>
      <div class="post-title">${post.title}</div>
      <div class="post-desc">${post.desc}</div>
      <div class="post-meta">작성: ${post.author} / ${post.date}</div>
    </div>
  `;

  recentList.appendChild(item);
});
