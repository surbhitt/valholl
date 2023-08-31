const fetchLang = async () => {
  let base_url = 'https://api.github.com'
  let repo_endpt = '/users/surbhitt/repos'
  let lang_endpt = '/repos/surbhitt/'
  let token = import.meta.env.VITE_GITHUB_TOKEN
  let repos = []
  let proj = {}
  let languages = new Set()
  let ignore = { Makefile: 0, 'Vim Script': 0 }

  await fetch(base_url + repo_endpt, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      repos = data
    })
  for (let repo of repos) {
    let lang_url = base_url + lang_endpt + repo.name + '/languages'
    await fetch(lang_url, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        for (let lang in data) {
          if (lang in ignore) continue
          else languages.add(lang)
          if (lang in proj) {
            proj[lang].push(repo['name'])
          } else {
            proj[lang] = [repo['name']]
          }
        }
      })
  }

  return languages
}

export default fetchLang
