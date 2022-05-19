const core = require('@actions/core');
const fs = require('fs');

try {
  const secretsJSON = core.getInput('secrets-json');
  const obj = JSON.parse(secretsJSON);

  for (const [key, value] of Object.entries(obj)) {
    fs.appendFileSync(process.env.GITHUB_ENV, `\n${key}=${value}`);
    console.log(`export ${key}=${value}`);
  }
} catch (error) {
  core.setFailed(error.message);
}
