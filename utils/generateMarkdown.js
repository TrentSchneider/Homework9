// function to generate markdown for README
function generateMarkdown(data) {
  const tocLic,
  secLic;
  if (data.needLicense === "Yes") {
    tocLic = "[License](#lic)";
    secLic = `<a id="lic"></a>
    ## License
    `
  }
  return `# ${data.title}
${data.link}
## Description 
${data.description}

[Installation](#inst)
[Usage](#use)
${tocLic}
[Contributing](#cont)
[Tests](#tes)
[Questions](#ques)

<a id="inst"></a>
## Installation
${data.installation}
<a id="use"></a>
## Usage
${data.usage}
${secLic}
${data.license}
<a id="cont"></a>
## Contributing
${data.contributing}
<a id="tes"></a>
## Tests
${data.tests}
<a id="ques"></a>
## Questions
If you have any questions you can reach me on [GitHub](https://github.com/${data.github}) or via [email](mailto:${data.email}).
`;
}

module.exports = generateMarkdown;
