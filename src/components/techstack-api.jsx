import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function TechStack() {
  // github stuff gotta keep this SECRET
  // revoked 
    const accessToken = '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'
  const baseUrl = 'https://api.github.com'
  const reposEndpnt = '/users/surbhitt/repos'

  const [repos, setRepos] = useState([])
  const [langs, setLangs] = useState({})
  const [langCards, setLangCards] = useState([])

  let icons = {
    C: '/c.svg',
    Python: '/python.svg',
    JavaScript: '/javascript.svg',
    'C++': '/c++.svg',
    'Vim Script': '/vimscript.svg',
    Shell: '/shell.svg',
    CSS: '/css.svg',
    HTML: '/html.svg',
    BacthFile: '/batchfile.svg',
    filler: '/filler.svg',
  }
  async function fetchRepo() {
    const response = await axios({
      method: 'get',
      url: baseUrl + reposEndpnt,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }) /*
      .then(function (response) {
        let tmp_repos = []
        for (let repo of response.data) {
          tmp_repos.push(repo.full_name)
        }
        console.log('repos fetched successfully')
        console.log(tmp_repos)
        setRepos(tmp_repos)
      })
      .catch((error) => {
        console.error('error while fetching repo')
        console.log(error)
      })*/
    let tmp_repos = []
    for (let repo of response.data) {
      tmp_repos.push(repo.full_name)
    }
    setRepos(tmp_repos)
  }
  async function fetchLangs() {
    let tmpLangs = {}
    for (let repo of repos) {
      let langsEndPoint = `${baseUrl}/repos/${repo}/languages`
      const response = await axios({
        method: 'get',
        url: langsEndPoint,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }) /*
        .then(function (response) {
          for (let lang in response.data) {
            // console.log('---------------------------')
            langs.add(lang)
            // console.log(lang)
            // console.log('==================')
            console.log(langs)
          }
        })
        .catch((error) => {
          console.error('error while fetching langs')
          console.log(error)
        })*/

      for (let lang in response.data) {
        // console.log('---------------------------')
        if (lang in tmpLangs) tmpLangs[lang] += response.data[lang]
        else tmpLangs[lang] = response.data[lang]
        // console.log('==================')
      }
    }
    setLangs(tmpLangs)
  }

  function populateGrid() {
    let tmpObj = []
    for (let lang in langs) {
      let langObj = {}
      langObj['name'] = lang
      langObj['loc'] = langs[lang]
      for (let icon in icons) {
        if (icon === lang) {
          langObj['icon'] = icons[icon]
        } // else langObj['icon'] = icons['']
      }
      tmpObj.push(langObj)
    }
    setLangCards(tmpObj)
  }

  useEffect(() => {
    fetchRepo()
    fetchLangs()
    populateGrid()
  }, [])

  return (
    <div className="techst-section relative flex items-center justify-evenly xs:flex-col lg:flex-row">
      <div className="xs:h-1/5 md:h-3/5 md:w-5/6 lg:w-1/2">
        {langCards.map((item, i) => (
          <div
            className="flex items-center h-14 w-96 my-4 bg-red-900 bg-opacity-10"
            key={i}
          >
            <img src={item.icon} className="h-10 w-10" />
            <p className="text-white ml-8 text-2xl">
              {item.name} ({item.loc})
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
