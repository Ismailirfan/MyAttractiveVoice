// Sample YouTube video data
const videos = [
  {
    id: "mDM9eIY6CYg",
    title: "Video 1",
    description: "Description 1"
  },
  {
    id: "O6ELf_htje4",
    title: "Video 2",
    description: "Description 2"
  },
  {
    id: "SQSJAEB6ayk",
    title: "Video 3",
    description: "Description 3"
  }
  // Add more videos here
];

// Function to generate small video cards
function generateSmallCards() {
  const smallCardsContainer = document.querySelector(".small-cards-container");
  videos.forEach((video) => {
    const smallCard = document.createElement("div");
    smallCard.className = "small-card";
    smallCard.innerHTML = `
      <iframe 
        src="(link unavailable)" 
        frameborder="0" 
        allowfullscreen>
      </iframe>
      <div class="video-title">${video.title}</div>
      <div class="video-link">(link unavailable)</div>
    `;
    smallCardsContainer.appendChild(smallCard);
  });
}

// Function to update main video
function updateMainVideo(videoId) {
  const mainVideo = document.getElementById("main-video");
  mainVideo.src = `(link unavailable);
  const videoTitle = document.querySelector(".large-card .video-title");
  videoTitle.textContent = videos.find((video) => (link unavailable) === videoId).title;
  const videoDescription = document.querySelector(".large-card .video-description");
  videoDescription.textContent = videos.find((video) => (link unavailable) === videoId).description;
}

// Event listeners for navigation buttons
let currentIndex = 0;
document.querySelector(".prev-btn").addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) currentIndex = videos.length - 1;
  updateMainVideo(videos[currentIndex].id);
});

document.querySelector(".next-btn").addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= videos.length) currentIndex = 0;
  updateMainVideo(videos[currentIndex].id);
});

// Initialize
generateSmallCards();
updateMainVideo(videos[0].id);
