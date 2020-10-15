// function to generate markdown for README
function generateMarkdown(data) {
  let tocLic = "",
    secLic = "",
    linkLic = "",
    link = "";
  if (data.needLicense === "Yes") {
    tocLic = "3. [License](#lic)";
    linkLic = '<a id="lic"></a>';
    secLic = "## 3. License";
  }
  if (data.needLink === "Yes") {
    link = data.link;
  }
  return `# ${data.title}
${link}
## Description 
${data.description}

1. [Installation](#inst)
2. [Usage](#use)
${tocLic}
4. [Contributing](#cont)
5. [Tests](#tes)
6. [Questions](#ques)

<a id="inst"></a>
## Installation
${data.installation}
<a id="use"></a>
## 1. Usage
${data.usage}
${linkLic}
${secLic}
${data.license}
<a id="cont"></a>
## 2. Contributing
${data.contributing}
<a id="tes"></a>
## 4. Tests
${data.tests}
<a id="ques"></a>
## 5. Questions
If you have any questions you can reach me on [GitHub](https://github.com/${data.github}) or via [email](mailto:${data.email}).
`;
}

module.exports = generateMarkdown;
