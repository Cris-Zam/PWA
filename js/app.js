if ('serviceWorker' in navigator) {
	window.addEventListener('load', () => {
		navigator.serviceWorker.register('../SW.js').then(() => {
			console.log('Soy el Service Worker registrado y funcionando.')
		})
	})
}
