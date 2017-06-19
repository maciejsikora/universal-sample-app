// API SERVER
import { Server } from 'http';
import Express from 'express';

const app = new Express();
const server = new Server(app);

// Add headers
app.use((req, res, next) => {
    // Allow to connect from browser
    res.setHeader('Access-Control-Allow-Origin', '*');
    console.log('--- API SERVER IS PROVIDING THE DATA - ' + req.url + ' ---');
    next();
});

// routing declaration
app.get('/matrix', (req, res) => {
  res.send({
    title: 'The Matrix',
    year: '1999',
    type: 'action, sci-fiction',
    description: `Thomas A. Anderson is a man living two lives. By day he is an average computer programmer and by night a hacker known as Neo. Neo has always questioned his reality, but the truth is far beyond his imagination. Neo finds himself targeted by the police when he is contacted by Morpheus, a legendary computer hacker branded a terrorist by the government. Morpheus awakens Neo to the real world, a ravaged wasteland where most of humanity have been captured by a race of machines that live off of the humans' body heat and electrochemical energy and who imprison their minds within an artificial reality known as the Matrix. As a rebel against the machines, Neo must return to the Matrix and confront the agents: super-powerful computer programs devoted to snuffing out Neo and the entire human rebellion.`
  });
});

app.get('/madmax', (req, res) => {
  res.send({
    title: 'Mad Max',
    year: '1979',
    type: 'action, sci-fiction',
    description: 'Taking place in a dystopian Australia in the near future, Mad Max tells the story of a highway patrolman cruising the squalid back roads that have become the breeding ground of criminals foraging for gasoline and scraps. When his wife and child meet a grisly end at the hands of a motorcycle gang, Max sets out across the barren wastelands in search of revenge. '
  });
});

app.get('/blade-runner', (req, res) => {
  res.send({
    title: 'Blade Runner',
    year: '1982',
    type: 'thriller, sci-fiction',
    description: `In the futuristic year of 2019, Los Angeles has become a dark and depressing metropolis, filled with urban decay. Rick Deckard, an ex-cop, is a "Blade Runner". Blade runners are people assigned to assassinate "replicants". The replicants are androids that look like real human beings. When four replicants commit a bloody mutiny on the Off World colony, Deckard is called out of retirement to track down the androids. As he tracks the replicants, eliminating them one by one, he soon comes across another replicant, Rachel, who evokes human emotion, despite the fact that she's a replicant herself. As Deckard closes in on the leader of the replicant group, his true hatred toward artificial intelligence makes him question his own identity in this future world, including what's human and what's not human.`
  });
});

// start the server
const port = 3100;
server.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.info(`API Server running on http://localhost:${port}`);
});
