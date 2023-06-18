export interface PostMeta {
	title: string;
	url: string;
}

export function getLatestPosts(): Promise<PostMeta[]> {
	const apiUrl = `https://blog.code520.com.cn/search.xml`;
	return fetch(apiUrl).then(async (res) => {
		const data = await res.text();
		var parser = new DOMParser();
		var xmlDoc = parser.parseFromString(data, 'text/xml');
		var entries = xmlDoc.getElementsByTagName('entry');
		var posts: PostMeta[] = [];
		for (var i = 0; i < entries.length; i++) {
			var title = entries[i].getElementsByTagName('title')[0];
			var url = entries[i].getElementsByTagName('url')[0];
			if (posts.length < 6) {
				posts.push({
					title: title?.textContent ?? '',
					url: url?.textContent ?? '',
				});
			}
		}
		return posts;
	});
}
