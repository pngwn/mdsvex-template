<script>
	// get an array of all routes
	const routes = import.meta.globEager("./blog/*.svx");

	// make them more usable by grabbing the title from frontmatter and the href
	const links = Object.entries(routes).map(([name, { metadata }]) => ({
		href: name.replace(".svx", ""),
		title: metadata.title,
	}));

	console.log(links);
</script>

<h1>Welcome to SvelteKit</h1>
<p>
	Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

<h2>Blog</h2>

<ul>
	{#each links as { href, title }}
		<li><a {href}>{title}</a></li>
	{/each}
</ul>
