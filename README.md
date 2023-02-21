<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://media.giphy.com/media/3oriO1xZwWiTUcyv4s/giphy.gif" alt="Project logo"></a>
</p>

<h3 align="center">Soul Journal</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/erratinsilentio/Orders/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a name = "about"></a>

This project is still a work in progress. It is a journaling and habit tracking schema I came up with some time ago for personal development. The whole idea is that you have to fill out every field with at least minimal information. This makes you more conscious about your habits or stoic principles of life, even if you missed a day of training, you have to reflect on the fact that you missed it. You can also add and edit goals with a certain deadline, which are sorted by week, month and year.

<img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjk2MzZmNjY1NTVlZWNjZGZmZjFjY2E0OTM3ZGM3ZmE4YTZhYzliZiZjdD1n/hBLjzDjRdDTL28ljEq/giphy.gif" alt="Project logo">

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for a ready-to-use site, with which you can play.

### Installing

1. Clone the repository:

```
git clone git@github.com:erratinsilentio/Soul-Journal.git
```

2. Move to project directory:

```
cd /Soul-Journal/Client
```

3. Install dependencies:

```
npm install
```

4. Run application on your local machine:

```
npm run dev
```

Feel free to play with this code by yourself!

## 🎈 Usage <a name="usage"></a>

1. Log in using one-time magic link OR google authorization
2. Add and edit your daily note
3. Add, edit and delete your goals
4. Goals are automaticaly sorted for this week / month / year
5. Check your old notes and completed goals in /archive
6. Go to settings to log out

## 🚀 Deployment <a name = "deployment"></a>

Visit https://soul-journal.vercel.app/ for live deployment.

## ⛏️ Technologies <a name = "built_using"></a>

- [Next.js](https://nextjs.org)
- [Typescript](https://www.typescriptlang.org)
- [Redux Toolkit](https://redux-toolkit.js.org)
- [Supabase](https://supabase.com)
- [Tanstack Query](https://tanstack.com/query/latest)
- [Custom hooks](https://reactjs.org/docs/hooks-custom.html)
- [Daisy UI](https://daisyui.com)
- [Tailwind CSS](https://tailwindcss.com)
- [Formik](https://formik.org)
- [Yup](https://github.com/jquense/yup)
- [Framer Motion](https://www.framer.com/motion/)

#### Why?

- I chose to go with Next.js version 13 to get myself familiar with it. Choosing it for a more static website would for sure show me it's true potential - Server Components are very small part of this application. I also very much felt that this is still a beta version. Nonetheless it was a great experience, I enjoyed the new app directory and solely for it's intuitive routing system Next.js was a good choice.

- Redux - some might say it's an overkill, but I prefer Redux Toolkit to sharing data through Context. Having one big central store for main data was a good decision, and I will for sure go with Redux in my next projects.

- Tailwind CSS - this was my first time with Tailwind. I tried a few times in the past, but this is the first time it really clicked. One can argue about Tailwind classes making a project less readable and bloated with code. But on the other hand this side effect made me think more about what I put in my CSS. I focused on writing only the code I need to keep things as clean as possible, and in the process I really enjoyed the speed and simplicity of Tailwind. Also, I did not have to think much about exact values and different class names, which also sped up my process.

- Tanstack Query - very simple but very powerful, + great documentation. Makes caching very easy, it was an obvious choice for this project.

<img src="https://res.cloudinary.com/dlj4gyfwy/image/upload/v1676638203/souljournal/Zrzut_ekranu_2023-02-17_o_13.49.10_cknpwi.png">
<img src="https://res.cloudinary.com/dlj4gyfwy/image/upload/v1676638203/souljournal/Zrzut_ekranu_2023-02-17_o_13.49.28_is8i60.png">
