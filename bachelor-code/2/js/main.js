const andi = document.querySelector('#andi')
const claire = document.querySelector('#claire')
const sharleen = document.querySelector('#sharleen')

document.querySelector('#andiNext').addEventListener('click', andiNext)
document.querySelector('#claireNext').addEventListener('click', claireNext)
document.querySelector('#sharleenNext').addEventListener('click', sharleenNext)

function andiNext(){
	claire.classList.add('hidden')
	sharleen.classList.add('hiddin')
	andi.classList.toggle('hiddin')
}

function claireNext(){
	andi.classList.add('hidden')
	claire.classList.add('hidden')
	nikki.classList.toggle('hidden')
}

function sharleenNext(){
	sharleen.classList.add('hidden')
	andi.classList.add('hidden')
	claire.classList.toggle('hidden')
}
