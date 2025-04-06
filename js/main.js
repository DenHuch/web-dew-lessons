document.addEventListener('DOMContentLoaded', function () {
	const mixerContainer = document.querySelector('.projects__list')
	const menuBurger = document.querySelector('.menu__burger')
	const menulist = document.querySelector('.menu__list')
	const menu = document.querySelector('.menu')
	const body = document.querySelector('body')

	const mixer = mixitup(mixerContainer)

	menuBurger.addEventListener('click', function () {
		menuBurger.classList.toggle('show')
		menulist.classList.toggle('active')
		body.classList.toggle('lock')
	})

	menulist.querySelectorAll('.menu__link').forEach(link => {
		link.addEventListener('click', () => {
			menuBurger.classList.remove('show')
			menulist.classList.remove('active')
			body.classList.remove('lock')
		})
	})

	const anchors = document.querySelectorAll('a[href^="#"]')

	anchors.forEach(anchor => {
		anchor.addEventListener('click', event => {
			event.preventDefault()

			const blockID = anchor.getAttribute('href').substring(1)
			const element = document.getElementById(blockID)

			if (element) {
				const isMobile = window.innerWidth <= 768

				let offset = blockID === 'projects' ? 100 : isMobile ? 40 : 0

				const elementPosition =
					element.getBoundingClientRect().top + window.scrollY
				const offsetPosition = elementPosition - offset

				window.scrollTo({
					top: offsetPosition,
					behavior: 'smooth',
				})
			}
		})
	})

	window.addEventListener('scroll', function () {
		if (window.scrollY > 0) {
			menu.classList.add('fixed')
		} else {
			menu.classList.remove('fixed')
		}
	})

	Fancybox.bind('[data-fancybox="gallery"]', {})
	Fancybox.bind('[data-fancybox="video-gallery"]', {})
})
