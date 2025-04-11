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




# Technical Specifications – CI/CD with GitHub Actions

## ✅ Project Name

CI/CD Automation with GitHub Actions

---

## 🧠 Objective

The objective of this project is to implement a Continuous Integration (CI) workflow using GitHub Actions to automatically run tests each time changes are pushed to the repository.

---

## ⚙️ Technologies Used

- **Node.js** – Runtime environment
- **Express** – Backend framework
- **Jest** – Testing framework
- **Supertest** – HTTP assertions
- **GitHub Actions** – Automation and CI/CD

---

## 🗂️ Project Structure

ci_cd/ │ ├── src/ # Source code (Express app) │ └── app.js │ ├── tests/ # Unit and integration tests │ └── app.test.js │ ├── .github/ │ └── workflows/ │ └── ci.yml # GitHub Actions workflow │ ├── package.json # Dependencies and scripts └── README.md
## 🔄 GitHub Actions Workflow (ci.yml)

This workflow runs every time there is a push to the `main` branch.

### Steps included:

1. **Checkout Code**
2. **Setup Node.js**
3. **Install Dependencies**
4. **Run Tests using `npm test`**

### Location:---

## 🧪 Testing

### How to run tests locally?:

```bash
npm install
npm test
Important Notes
Make sure all dependencies are listed under devDependencies in package.json.

Your ci.yml file should be properly indented and use correct YAML syntax.

Workflow will show results under the "Actions" tab on GitHub.
