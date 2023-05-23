import React from 'react'
import './styles.css'
import ChartComponent from './pieChart'

let languages = {
    JavaScript: 85455,
    HTML: 4426,
    CSS: 6846,
    'C++': 108076,
    Batchfile: 1080,
    Python: 86071,
    Shell: 944,
    'Vim Script': 97,
    C: 701960,
    Rust: 9098,
}

/*
        __________________________on demand fetching of data from api 

const accessToken = "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";
const baseUrl = "https://api.github.com";
let reposEndpnt = "/users/surbhitt/repos";

let repos = [];

function fetchData () {
	fetch(baseUrl + reposEndpnt, {
  headers: {
	  Authorization: `Bearer ${accessToken}`,
	},
})
.then((response) => response.json())
.then((data) => {
    for (let repo of data) repos.push(repo["name"]);
    for (let repo of repos) {
		fetch(baseUrl + "/repos/surbhitt/" + repo + "/languages", {
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		})
        .then((response) => response.json())
        .then((data) => {
			for (let lang in data) {
				if (lang in languages) languages[lang] += data[lang];
				else languages[lang] = data[lang];
			}
		});
    }
  })
  .catch((error) => {
	  console.error(error);
	});
}

fetchData();
console.log("Lines of code for corresponding languages");	
console.log(languages);
*/

const gridItems = []
function populateGrid() {
    for (let lang in languages) {
        const existingItem = gridItems.find((item) => item.title === lang)
        if (!existingItem || languages[lang] !== existingItem.loc) {
            gridItems.push({
                title: lang,
                loc: languages[lang],
                id: languages[lang],
            })
        }
    }
}

const TechStack = () => {
    populateGrid()

    return (
        <div className="techst-section relative flex items-center justify-evenly xs:flex-col lg:flex-row">
            <div className="grid-container xs:h-1/5 md:h-3/5 md:w-5/6 lg:w-1/2">
                {gridItems.map((item) => (
                    <div
                        className="grid-item flex flex-col justify-center xs:text-xs md:text-base xs:h-14 xs:w-28 md:h-20 lg:h-32 md:w-52 text-white"
                        key={item.id}
                    >
                        <h3 className="font-extrabold ml-5">{item.title}</h3>
                        <div className="ml-3">LOC: {item.loc}</div>
                    </div>
                ))}
            </div>
            <ChartComponent gridItems={gridItems} />
        </div>
    )
}

export default TechStack
