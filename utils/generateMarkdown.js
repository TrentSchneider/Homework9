// function to generate markdown for README
function generateMarkdown(data) {
  let tocLic = "",
    secLic = "",
    linkLic = "",
    link = "",
    badge = "";
  if (data.needLicense === "Yes") {
    tocLic = "* [License](#lic)";
    linkLic = '<a id="lic"></a>';
    secLic = "## License";
    switch (data.license) {
      case "Apache License 2.0":
        badge =
          "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        break;
      case "GNU General Public License v3.0":
        badge = "";
        break;
      case "MIT License":
        badge =
          "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        break;
      case "BSD 2-Clause 'Simplified' License":
        badge =
          "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
        break;
      case "BSD 3-Clause 'New' or 'Revised' License":
        badge =
          "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
        break;
      case "Boost Software License 1.0":
        badge =
          "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
        break;
      case "Creative Commons Zero v1.0 Universal":
        badge =
          "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)";
        break;
      case "Eclipse Public License 2.0":
        badge =
          "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
        break;
      case "GNU Affero General Public License v3.0":
        badge =
          "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
        break;
      case "GNU General Public License v2.0":
        badge =
          "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
        break;
      case "GNU Lesser General Public License v2.1":
        badge =
          "[![License: LGPL v2.1](https://img.shields.io/badge/License-LGPL%20v2.1-blue.svg)](https://www.gnu.org/licenses/old-licenses/lgpl-2.1.en.html)";
        break;
      case "Mozilla Public License 2.0":
        badge =
          "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
        break;
      case "The Unlicense":
        badge =
          "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
        break;
    }
  }
  if (data.needLink === "Yes") {
    link = data.link;
  }
  return `# ${data.title}
${link}
## Description 
${data.description}

* [Installation](#inst)
* [Usage](#use)
${tocLic}
* [Contributing](#cont)
* [Tests](#tes)
* [Questions](#ques)

<a id="inst"></a>
## Installation
${data.installation}
<a id="use"></a>
## 1. Usage
${data.usage}
${linkLic}
${secLic}
${badge}
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
