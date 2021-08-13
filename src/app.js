let pronouns = ["the", "our"];
let adjs = ["great", "big", "unique"];
let nouns = ["jogger", "racoon"];
let extensions = [".com", ".net"];

window.onload = function() {
  let ul = document.createElement("ul");
  let domain = [];
  for (let i = 0; i < pronouns.length; i++) {
    let pronoun = pronouns[i];
    for (let j = 0; j < adjs.length; j++) {
      let adj = adjs[j];
      for (let k = 0; k < nouns.length; k++) {
        let noun = nouns[k];
        for (let l = 0; l < extensions.length; l++) {
          let extension = extensions[l];
          domain = "www." + pronoun + adj + noun + extension;
          let li = document.createElement("li");
          li.innerHTML = domain;
          ul.append(li);
        }
      }
    }
  }
  document.body.append(ul);
};
