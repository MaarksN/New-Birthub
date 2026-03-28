const fs = require('fs');
const html = fs.readFileSync('BirthHub360_Agentes_Parallel_Plan.html', 'utf8');

const domains = [];
const domainRegex = /<div class="domain-head">\s*<h3>(.*?)<\/h3>[\s\S]*?<p class="muted">Complexidade base: <strong>(.*?)<\/strong><\/p>[\s\S]*?<div class="tag-wrap">([\s\S]*?)<\/div>/g;

let match;
while ((match = domainRegex.exec(html)) !== null) {
  const name = match[1];
  const complexity = match[2];
  const tagsHtml = match[3];

  const agents = [];
  const tagRegex = /<span class="tag[^>]*>(.*?)<\/span>/g;
  let tagMatch;
  while ((tagMatch = tagRegex.exec(tagsHtml)) !== null) {
    agents.push(tagMatch[1].trim());
  }

  domains.push({
    name,
    complexity,
    agents
  });
}

fs.writeFileSync('agents_data.json', JSON.stringify(domains, null, 2));
console.log("Extracted " + domains.length + " domains");
