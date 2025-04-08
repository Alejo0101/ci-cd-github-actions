# ci-cd-github-actions
This project demonstrates a basic implementation of **CI/CD using GitHub Actions** in a Node.js application built with Express and tested using Jest.

---

## 📁 Project Structure
ci_cd/ │ ├── src/ │ └── app.js # Main source code │ ├── tests/ │ └── app.test.js # Jest tests │ ├── .github/ │ └── workflows/ │ └── ci.yml # GitHub Actions workflow configuration │ ├── package.json └── README.md


---

## 🚀 How to Run the Project Locally

1. Install Node.js from: https://nodejs.org  
2. Clone this repository:

```bash
git clone https://github.com/Alejo0101/ci-cd-github-actions.git
cd ci-cd-github-actions

Install dependencies:
npm install

Run the tests:
npm test

⚙️ What Does ci.yml Do?
The ci.yml workflow automates these tasks every time you push changes to the repository:

Sets up the environment with Node.js

Installs dependencies

Runs tests automatically

If everything is OK, you’ll see a ✅ in the Actions tab. If something fails, it will show a ❌ with details.

🧰 Technologies Used
Node.js

Express

Jest

Supertest

GitHub Actions

👨‍💻 Author
Alejandro Suarez Zuñiga
Software Development Student

