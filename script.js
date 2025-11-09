const quotes = {
  statham: [
  "Многие считают, что лучшая пара,это когда парень выше девушки, но лучшая пара та-которую отменили.",
  "Если жизнь - это вызов, то я перезвоню.",
  "Я так много читал о вреде алкоголя, что решил бросить читать."
  ],
  jobs: [
    "Stay hungry, stay foolish.",
    "Innovation distinguishes between a leader and a follower.",
    "Your time is limited, don’t waste it living someone else’s life."
  ],
  twain: [
    "The secret of getting ahead is getting started.",
    "Kindness is the language which the deaf can hear and the blind can see.",
    "Courage is resistance to fear, mastery of fear – not absence of fear."
  ]
};

const backgrounds = {
  statham: "url('images/statham.jpg')",
  jobs: "url('images/jobs.jpg')",
  twain: "url('images/twain.jpg')"
};

let currentAuthor = null;

const menuBtn = document.getElementById("menuBtn");
const menuList = document.getElementById("menuList");
const quoteText = document.getElementById("quoteText");

menuBtn.addEventListener("click", () => {
  menuList.style.display = menuList.style.display === "flex" ? "none" : "flex";
});

function selectAuthor(author) {
  currentAuthor = author;
  document.body.style.backgroundImage = backgrounds[author];
  nextQuote();
  menuList.style.display = "none";
}

function nextQuote() {
  if (!currentAuthor) {
    quoteText.textContent = "Сначала выберите автора 🙂";
    return;
  }
  const authorQuotes = quotes[currentAuthor];
  const randomIndex = Math.floor(Math.random() * authorQuotes.length);
  quoteText.textContent = authorQuotes[randomIndex];
}
