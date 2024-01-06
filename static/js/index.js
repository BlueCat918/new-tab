document.title = chrome.i18n.getMessage('tabTitle');

(async function () {
  const hitokoto = document.querySelector('.hitokoto')
  const author = document.querySelector('.author')
  try {
    const result = await fetch('https://v1.hitokoto.cn/')
    const data = await result.json()
    const { from_who, from } = data
    hitokoto.innerText = data.hitokoto
    author.innerText = from_who === from
      ? `— ${from_who || '佚名'}`
      : `— ${from_who || '佚名'} 「${from || '无题'}」`
  } catch (err) {
    hitokoto.innerText = ''
    author.innerText = ''
  }
})();