const domainRegex = /(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/;

export default function(url) {
  const match = url.match(domainRegex);

	return match && match[0] && match[0].endsWith('timechimp.app');
}
