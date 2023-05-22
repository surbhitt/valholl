import React from "react";
import "./styles.css"; 

let languages = {"JavaScript":85455,"HTML":4426,"CSS":6846,"C++":108076,"Batchfile":1080,"Python":86071,"Shell":944,"Vim Script":97,"C":701960,"Rust":9098};

/*
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

const gridItems = [];
function populateGrid () {
	for (let lang in languages) {
		if (!(lang in gridItems) || (languages[lang] != gridItems[lang])) {
			gridItems.push({
				'title' : lang,
				'loc' : languages[lang],
			});
		}
	}
};

console.log(gridItems);
const TechStack = () => {
	populateGrid();
  
	return (
	<div className="techst-section relative">
	  	<img src="/signsbkgrem.png" className="nordic-signs h-4/5" />
		<div className="grid-container border-solid border-2 border-white">
    	  {gridItems.map((item) => (
    	    <div className="grid-item w-56" key={item.id}>
    	      <h3>{item.title}</h3>
			  <div>Lines of Code: {item.loc}</div>
			</div>
    	  ))}
    	</div>
	</div>
  );
};

export default TechStack;
