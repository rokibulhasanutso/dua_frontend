// convert url trimmed
export const convertUrl = (urldata) => {
	return urldata.replaceAll(' ', '-').toLowerCase()
}