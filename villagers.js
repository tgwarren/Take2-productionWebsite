const card = document.querySelector('#card')
const spinner = document.querySelector(".spinner")


function addVillagerImage(villager) {
  const div = document.createElement('div')
  div.classList.add('villager-image')
  div.innerHTML = `
        <figure>
            <img src='${villager.image_uri}' alt='$villager.name' />
            <figcaption class= "imageName"><a href="villager.html?villager=${villager.name[`name-USen`]}">${villager.name[`name-USen`]}</a></figcaption>
        </figure>      
    `
  card.append(div)
}

const url = 'https://acnhapi.com/v1a/villagers'
fetch(url)
  .then(response => response.json())
  .then(data => 
    data.map(villager => {
      const animal = document.createElement('p')
      animal.innerHTML `
          <img src="villager.image_uri">
          <p>"Villager Name: ${villager.name['name-USen']}"</p>
    `
      card.append(animal)
    })
  )
    
  // spinner.classList.add('hidden')
    
  
  
      /*.catch(error => {
      window.location.href = `404page.html`
    })*/
