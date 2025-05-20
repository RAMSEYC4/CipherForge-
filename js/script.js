//Nav bar toogle function
function toggleHumbuger() {
  let sideNavElement = document.querySelector('.side-nav-container');
  sideNavElement.classList.toggle('active');
}


//reset the side nav bar on small screens 
window.addEventListener('resize', function () {
  if (window.innerWidth >= 769) {
    document.querySelector('.side-nav-container').classList.remove('active');
  }
});


//generate password botton function
function generateBtn() {
  let randomPassword = Math.floor(Math.random() * 10000);
  const alphabets = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g',
    'h', 'i', 'j', 'k', 'l', 'm', 'n',
    'o', 'p', 'q', 'r', 's', 't', 'u',
    'v', 'w', 'x', 'y', 'z'
  ];
  const SpecialCharacters = [
    '!', '@', '#', '$', '%', '&', '*', '-', '_',
    ',', '.', '?'
  ];
  const randomIndex = Math.floor(Math.random() * alphabets.length);
  const randomAlphabets = alphabets[randomIndex]
  const randomIndex2 = Math.floor(Math.random() * SpecialCharacters.length)
  const randomCharacters = SpecialCharacters[randomIndex2]
  let outputElement = document.querySelector('.password-output').innerText
    = `${randomPassword}${randomAlphabets}${randomCharacters}`;
}


