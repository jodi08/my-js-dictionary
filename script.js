let input = document.querySelector('.form-control');
const btn = document.querySelector('.btn')
const getAWord = document.querySelector('.word-container')



btn.addEventListener('click', () => {
  console.log('the click worked')
  getWord()
  return getAWord.innerHTML = input.value
})


async function getWord() {
  let apiKey = config.apiKey
 const headerDetails = {
  "headers": {
      "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
      "x-rapidapi-key": apiKey,
      "accept": "application/json"
    }
 }
  const url =  `https://wordsapiv1.p.rapidapi.com/words/${input.value}`

  let response = await fetch(url, headerDetails)
  let data = await response.json()
  console.log(data)
  input.value = ''
  
}


  

  



