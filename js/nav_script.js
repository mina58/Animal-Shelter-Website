nav_bar_heart = document.getElementsByClassName("drop-down-heart")[0];
nav_bar_drop_down = document.getElementsByClassName("nav-bar-drop-down")[0];

if (nav_bar_heart) {
	nav_bar_heart.addEventListener("mouseover", () => {
		nav_bar_drop_down.classList.remove("hidden");
	});

	nav_bar_heart.addEventListener("mouseout", () => {
		nav_bar_drop_down.classList.add("hidden");
	});
}
