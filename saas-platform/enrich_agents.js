const fs = require('fs');

const rawData = fs.readFileSync('src/data/agents.json', 'utf8');
const domains = JSON.parse(rawData);

const statuses = ['Active', 'Draft', 'Archived'];
const roles = ['Assistant', 'Analyst', 'Executive', 'Automator'];

let globalId = 1;

const enrichedDomains = domains.map(domain => {
  return {
    ...domain,
    agents: domain.agents.map((agentName, index) => {
      const status = statuses[Math.floor(Math.random() * statuses.length)];
      const role = roles[Math.floor(Math.random() * roles.length)];

      return {
        id: `AG-${globalId++}`,
        name: typeof agentName === 'string' ? agentName : agentName.name,
        description: `O ${agentName} atua na linha de frente do domínio de ${domain.name.split(',')[0]}. Capaz de operar como um ${role} especializado, oferecendo análises preditivas, relatórios dinâmicos e automação orientada a dados com complexidade base de nível ${domain.complexity}.`,
        status: status,
        role: role,
        metrics: {
          usage: Math.floor(Math.random() * 10000),
          successRate: (Math.random() * 20 + 80).toFixed(1) + '%',
          latency: Math.floor(Math.random() * 150 + 50) + 'ms'
        },
        tags: [domain.name.split(',')[0], 'AI', role]
      };
    })
  };
});

fs.writeFileSync('src/data/agents.json', JSON.stringify(enrichedDomains, null, 2));
console.log("Enriched " + globalId + " agents.");
