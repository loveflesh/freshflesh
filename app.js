const recentData = [
  {
    title: "최근 게시물 제목 (폰트 굵게 / 소개보다 크게)",
    desc: "게시글 내용 미리보기입니다. 150자 이상일 경우 말줄임 처리하거나, 이 정도 길이로 유지하면 디자인이 안정적입니다.",
    board: "일기",
    date: "2026/02/10",
    thumb: null
  },
  {
    title: "두 번째 게시물 제목",
    desc: "리뷰나 감상글이 여기에 들어갑니다.",
    board: "리뷰",
    date: "2026/02/08",
    thumb: null
  },
  {
    title: "낙서장 업로드",
    desc: "낙서장에서 바로 올라온 그림입니다.",
    board: "낙서",
    date: "2026/02/07",
    thumb: null
  },
  {
    title: "네 번째 게시물",
    desc: "최근 게시물은 최대 4개까지만 표시됩니다.",
    board: "공지",
    date: "2026/02/05",
    thumb: null
  }
];

const recentList = document.getElementById("recentList");

recentData.slice(0, 4).forEach(post => {
  const item = document.createElement("div");
  item.className = "recent-item";

  item.innerHTML = `
    <div class="thumb">
      ${post.thumb ? `<img src="${post.thumb}" alt="">` : "썸네일"}
    </div>

    <div class="post-body">
      <div class="post-title">${post.title}</div>
      <div class="post-desc">${post.desc}</div>

      <div class="post-footer">
        <span class="post-board">[${post.board}]</span>
        <span class="post-date">${post.date}</span>
      </div>
    </div>
  `;

  recentList.appendChild(item);
});
