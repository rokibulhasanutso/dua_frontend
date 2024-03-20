export const smoothJump = (jump_id) => {
	const jumpNode = document.getElementById(jump_id);
	
	if (jumpNode) {
		const scrollToY = jumpNode.getBoundingClientRect().top + window.scrollY;
		window.scrollTo({ top: scrollToY, behavior: 'smooth' });
	}
}