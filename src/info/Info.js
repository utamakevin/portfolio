import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

export let colors = ["rgb(216, 148, 255)", "rgb(0, 136, 255)"];

export const info = {
    firstName: "Kevin",
    lastName: "Utama",
    initials: "ku",
    position: "a Software Engineer",
    selfPortrait: self,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],
    miniBio: [ 
        
        {
            emoji: '🚃',
            text: 'based in Melbourne'
        },
        {
            emoji: "💼",
            text: "career changer"
        },
        {
            emoji: '📱',
            text: 'sends unsolicited curated memes'
        },
        {
            emoji: "📧",
            text: "utama.kevin@yahoo.com"
        }
    ],
    socials: [
        {
            link: "https://github.com/utamakevin",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/kevinutama/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },

    ],
    bio: "Hello! I'm Kevin. After years working as a teacher, I am ready to break into a career in tech. I recently completed a 500+ hours Software Engineering bootcamp with General Assembly. As a teacher, I believe that education can be sourced from anywhere but should not be left to chance. You should hire me!",
    skills:
        {
            proficientWith: ['javascript', 'react', 'html5', 'css3', 'express', 'nodejs', 'git', 'github',   'figma'],
            exposedTo: ['bootstrap', 'firebase', 'mongodb']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'gaming',
            emoji: '🎮'
        },
        {
            label: 'badminton-ing(?)',
            emoji: '🏸'
        },
        {
            label: 'cycling',
            emoji: '🚴'
        }

    ],
    portfolio: [
        {
            title: "Tic Tac Toe",
            live: "https://pages.git.generalassemb.ly/utamakevin/tic_tac_toe/",
            source: "https://github.com/utamakevin/tic_tac_toe",
            image: mock1
        },        
        {
            title: "Count Me In",
            live: "https://countmein.onrender.com/",
            source: "https://github.com/utamakevin/count_me_in",            
            image: mock2
        },
        {
            title: "Money App",
            live: "https://money-app-g7tp.onrender.com/",
            source: "https://github.com/utamakevin/money_app",
            image: mock3
        },
        {
            title: "PokeQuiz",
            live: "https://fancy-mooncake-9337fd.netlify.app/",
            source: "https://github.com/utamakevin/pokequiz",
            image: mock4
        },
        {
            title: "Petrol Map",
            live: "https://github.com/utamakevin/Project3",
            source: "https://github.com/utamakevin/Project3",
            image: mock5
        }
    ]
}