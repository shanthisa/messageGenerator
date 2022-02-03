//Mixed messages - message generator
console.log('Generate inspirational quote randomly:');

let quotesList = ['Birds of same feather flock together', 
'One meets the destiny in the very path one tries to avoid it', 
'Being nice does not mean being naive',
'Trying to be special is a disease that arises when you do not recognize the value and uniqueness of every being.',
'IF you are too serious about everything, you will only know thoughts and emotions. You will not know life.',
'When there is no envy, jealousy, comparison, and competition within you, you can focus your full capabilities on doing what is needed.'];

let lyricsList = ['Peanut butter in a cup',
'Marugelara o Raghava', 
'You are the only mirror that shows me what I am not',
'Oru naalum unai maravaatha inidhaana varam vendum',
'Oorvasi, oorvasi, take it easy Oorvasi',
'Enna dhavam seitheno',
'Theeradha vilayaatu pillai'];

let ragasList = ['Mayamalava gowla', 'Dheera Shankarabharanam', 'Mesha Kalyani', 'Bilahari',
'Mohanam', 'Abhogi', 'Sahana', 'Thodi', 'Kambhoji']
let messages = {quotes: quotesList, lyrics: lyricsList, ragas: ragasList}

for (item in messages) {
    let messageType = messages[item];
    let len = messageType.length;
    let i = Math.floor(Math.random()*len);
    console.log(messageType[i]);
}
