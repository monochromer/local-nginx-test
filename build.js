const path = require('path');
const fs = require('fs');
const nunjucks = require('nunjucks');

const workDir = path.join(process.cwd());
const nginxConfigTemplate = path.join(workDir, 'nginx.tmpl.conf');
const nginxConfigFile = path.join(workDir, 'nginx.conf');

const fileContent = nunjucks.render(nginxConfigTemplate, {
  workDir
});

fs.writeFileSync(nginxConfigFile, fileContent, 'utf-8');