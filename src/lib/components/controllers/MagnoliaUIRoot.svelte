<svelte:head>
	<link
		href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
		rel="stylesheet"
	/>
</svelte:head>

<main>
	<slot />
</main>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Heebo:wght@100;200;300;400;500;600;700;800;900&display=swap');

	/* Reset */
	/* Box sizing rules */
	:global(*),
	:global(*::before),
	:global(*::after) {
		box-sizing: border-box;
	}

	/* Remove default margin */
	:global(body),
	:global(h1),
	:global(h2),
	:global(h3),
	:global(h4),
	:global(p),
	:global(figure),
	:global(blockquote),
	:global(dl),
	:global(dd) {
		margin: 0;
	}

	/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
	:global(ul[role='list']),
	:global(ol[role='list']) {
		list-style: none;
	}

	/* Set core root defaults */
	:global(html:focus-within) {
		scroll-behavior: smooth;
	}

	/* Set core body defaults */
	:global(body) {
		min-height: 100vh;
		text-rendering: optimizeSpeed;
		line-height: 1.5;
	}

	/* A elements that don't have a class get default styles */
	:global(a:not([class])) {
		text-decoration-skip-ink: auto;
	}

	/* Make images easier to work with */
	:global(img),
	:global(picture) {
		max-width: 100%;
		display: block;
	}

	/* Inherit fonts for inputs and buttons */
	:global(input),
	:global(button),
	:global(textarea),
	:global(select) {
		font: inherit;
	}

	/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
	@media (prefers-reduced-motion: reduce) {
		:global(html:focus-within) {
			scroll-behavior: auto;
		}

		:global(*),
		:global(*::before),
		:global(*::after) {
			animation-duration: 0.01ms !important;
			animation-iteration-count: 1 !important;
			transition-duration: 0.01ms !important;
			scroll-behavior: auto !important;
		}
	}

	:global(*) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:global(:root),
	:global(.color-scheme-light) {
		--victory-purple: #350868;
		--victory-purple-hover: #5a3b7d;
		--victory-purple-faded: #a59ab0;
		--on-victory-purple-faded: #dbd7df;

		--danger: #9e2c2c;
		--danger-hover: #772727;
		--danger-faded: #9d7979;
		--on-danger-faded: #d8c9c9;

		--light-gray: #dbdbdb;
		--light-gray-hover: #b4b4b4;
		--light-gray-faded: #dddddd;
		--on-light-gray-faded: #909090;

		--secondary-container: #ffffff;

		--background: #f5f5f5;
		--on-background: #000000;

		--body: #454545;

		--placeholder: #828282;
	}

	:global(.color-scheme-dark) {
		--victory-purple: #b59aff;
		--victory-purple-hover: #bbaaf0;
		--victory-purple-faded: #564b75;
		--on-victory-purple-faded: #1f1f1f;

		--danger: #b13b3b;
		--danger-hover: #ab5858;
		--danger-faded: #563333;
		--on-danger-faded: #746767;

		--light-gray: #424242;
		--light-gray-hover: #585858;
		--light-gray-faded: #2d2d2d;
		--on-light-gray-faded: #5f5f5f;

		--secondary-container: #292929;

		--background: #1f1f1f;
		--on-background: #e0e0e0;

		--body: #b8b8b8;

		--placeholder: #626262;
	}

	@media (prefers-color-scheme: dark) {
		:global(:root) {
			--victory-purple: #b59aff;
			--victory-purple-hover: #bbaaf0;
			--victory-purple-faded: #564b75;
			--on-victory-purple-faded: #1f1f1f;

			--danger: #b13b3b;
			--danger-hover: #ab5858;
			--danger-faded: #563333;
			--on-danger-faded: #746767;

			--light-gray: #424242;
			--light-gray-hover: #585858;
			--light-gray-faded: #2d2d2d;
			--on-light-gray-faded: #5f5f5f;

			--secondary-container: #292929;

			--background: #1f1f1f;
			--on-background: #e0e0e0;

			--body: #b8b8b8;

			--placeholder: #626262;
		}
	}

	main {
		min-height: 100vh;
		background-color: var(--background);
	}

	:global(body) {
		background-color: var(--background);
	}

	:global(*) {
		font-family: Heebo, sans-serif;
		color: var(--on-background);
	}
</style>
