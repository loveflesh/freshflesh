const posts = [
  {
    title: "최근 게시물 제목",
    summary: "게시글 내용 미리보기입니다. 150자 이상일 경우 말줄임 처리됩니다.",
    board: "일기",
    date: "2026/02/10"
  },
  {
    title: "두 번째 게시물",
    summary: "다비뷰 게시글 예시입니다.",
    board: "리뷰",
    date: "2026/02/08"
  },
  {
    title: "낙서장 업로드",
    summary: "낙서장에 새로 올린 그림입니다.",
    board: "낙서",
    date: "2026/02/07"
  },
  {
    title: "네 번째 게시물",
    summary: "최근 게시물은 최대 4개까지 표시됩니다.",
    board: "공지",
    date: "2026/02/05"
  }
];

const list = document.getElementById("recentList");

posts.slice(0,4).forEach(p => {
  const item = document.createElement("div");
  item.className = "recent-item";
  item.innerHTML = `
    <div class="recent-thumb">썸네일</div>
    <div class="recent-text">
      <div class="recent-title">${p.title}</div>
      <div class="recent-summary">${p.summary}</div>
      <div class="recent-meta">[${p.board}] ${p.date}</div>
    </div>
  `;
  list.appendChild(item);
});
