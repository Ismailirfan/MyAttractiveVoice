// Sample YouTube video data
const videos = [
	{ id: "VIDEO_ID_1", title: "VIDEO_TITLE_1", description: "VIDEO_DESCRIPTION_1" },
	{ id: "VIDEO_ID_2", title: "VIDEO_TITLE_2", description: "VIDEO_DESCRIPTION_2" },
	{ id: "VIDEO_ID_3", title: "VIDEO_TITLE_3", description: "VIDEO_DESCRIPTION_3" },
	// Add more videos here
];

// Function to generate small video cards
function generateSmallCards() {
	const smallCardsContainer = document.querySelector(".small-cards-container");
	videos.forEach((video) => {
		const smallCard = document.createElement("div");
		smallCard.className = "small-card";
		smallCard.innerHTML = `
			<iframe src="(link unavailable)" frameborder="0" allowfullscreen></iframe>
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
document.querySelector(".prev-btn").addEventListener("click", () => {
	// Implement previous video logic
});

document.querySelector(".next-btn").addEventListener("click", () => {
	// Implement next video logic
});

// Initialize
generateSmallCards();
updateMainVideo(videos[0].id);
