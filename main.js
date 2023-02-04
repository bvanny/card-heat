let linksSocialMedia = {
  github: "tofuzinha",
  youtube: "rocketseat",
  facebook: "rocketseat",
  instagram: "rocketseat",
  twitter: "rocketseat"
}

function changeSocialMediaLinks() {

  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://www.${social}.com/${linksSocialMedia[social]}`
  }

}

changeSocialMediaLinks()


function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`;

  fetch(url)
  .then(response => response.json())
  .then(data => {
    userName.textContent = data.name
    userBio.textContent = data.bio
    userLink.href = data.html_url
    userImage.src = data.avatar_url
    userLogin.textContent = data.login
  })
}

const btnTry = document.querySelector("#btnTry")

btnTry.addEventListener('click', handleTryInfoUser)

document.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    btnTry.click()
  }
})

function handleTryInfoUser(event) {
  event.preventDefault()
  linksSocialMedia.github = userInfo.value
  getGitHubProfileInfos()
}


