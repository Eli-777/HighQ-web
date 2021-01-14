function handleImgError(e) {
  if (!e.target.onerror) {
    e.target.src="https://upload.wikimedia.org/wikipedia/commons/0/0a/No-image-available.png"
  }
}

export default handleImgError