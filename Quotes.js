const Quote=document.getElementById('Qoute_Message');
const Message=['Impossible is just an opinion. —Paulo Coelho',
               'It’s hard to beat a person who never gives up. —Babe Ruth',
               'Whatever you are, be a good one. ―Abraham Lincoln',
               'One day or day one. You decide. —Unknown',
               'I’m alive, motivated and ready to slay the day #MONSLAY. —Unknown',
               'Hustlers don’t sleep, they nap. ―Unknown',
               'Do It Especially When You Dont Want To Do It',
               'Work hard in silence, let your success be the noise. ―Frank Ocean',
               'Hard work beats talent when talent doesn’t work hard. ―Tim Notke',
               'Nothing will work unless you do. ―Maya Angelou',
               'Dreams don’t work unless you do. ―John C. Maxwell',
               'Make each day your masterpiece. ―John Wooden',
               'If you obey all the rules, you miss all the fun. ―Katharine Hepburn',
               'Never regret anything that made you smile. ―Mark Twain',
               'Today is your opportunity to build the tomorrow you want. ―Ken Poirot',
               'Focus on being productive instead of busy. ―Tim Ferriss',
               'Be happy with what you have while working for what you want. ―Helen Keller'
]
const Random_Qoute=Math.floor(Math.random()*16)
Quote.innerText=`${Message[Random_Qoute]}`
Quote.innerText=`${Message[15]}`
const ans=12;
// module.exports={Message}