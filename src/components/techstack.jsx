import React from "react";
import "./styles.css"; 
import axios from "axios";

let repos = [];
let languages = {}
const baseUrl = 'https://api.github.com';
// languagesEndpnt = '/repos/{owner}/{repo}/languages';
let reposEndpnt = '/users/surbhitt/repos';
async function fetchdata () {
	try {
		const response = await axios.get(baseUrl+reposEndpnt);
		console.log(response['data']);
	}
	catch (error) {
		console.error(error);
	}
	for (let repo of response['data']){
		repos.push(repo['name']);
	}
	console.log(repos);
}

async function retrieveLanguages () {
	for (let repo of repos) {
		try {
			const response = await axios.get(baseUrl+'/repos/surbhitt/'+repo+'/languages');
		} catch (error) {
			console.error(error);
		}
		if (response && !('message' in response)) {
			for (let key in response){
				if (response[key] in languages) languages[key] += response[key]; 
				else languages[key] = response[key];
			}
		} 
	} 
}

function populateGrid (grid) {

	fetchdata();
	retrieveLanguages();

}

const TechStack = () => {
  const gridItems = [];
  
  populateGrid(gridItems);
  for (let lang of languages) {
	gridItems.push({
		'title' : lang,
		'loc' : languages[lang],
	});
  }

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
