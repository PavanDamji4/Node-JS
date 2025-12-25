const express = require('express')
const path = require('path')
const bodyparser = require('body-parser')

const app = express();

app.use(bodyparser.urlencoded({ extended: false }))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))



app.get('/', (req, res, next) => {
  res.render('login.ejs')
})

// Mock Data for Homes
const homes = [
  {
    id: 1,
    title: "Cozy Mountain Cabin",
    price: 150,
    location: "Aspen, USA",
    description: "Experience the tranquility of nature in this beautiful mountain cabin. Perfect for a weekend getaway with spectacular views and hiking trails nearby.",
    imageUrl: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 2,
    title: "Modern City Apartment",
    price: 200,
    location: "New York, USA",
    description: "Stay in the heart of the city in this luxurious modern apartment. Walking distance to all major attractions, restaurants, and nightlife.",
    imageUrl: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 3,
    title: "Beachfront Villa",
    price: 350,
    location: "Malibu, USA",
    description: "Wake up to the sound of waves in this stunning beachfront villa. Private access to the beach, infinity pool, and breathtaking sunset views.",
    imageUrl: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
  }
];

// Store banned users
const bannedUsers = [];
const info = []
app.post('/home', (req, res, next) => {
  const username = req.body.username;

  // Check if user is banned
  if (bannedUsers.includes(username)) {
    return res.send(`
        <div style="font-family: sans-serif; text-align: center; margin-top: 50px;">
            <h1 style="color: red;">Access Denied</h1>
            <p>You have been banned from this platform.</p>
            <a href="/">Go Back to Login</a>
        </div>
      `);
  }

  const userinfo = {
    'username': req.body.username,
    'email': req.body.email,
    'password': req.body.password
  }
  // Avoid duplicates in info array for cleaner admin view (optional but good)
  if (!info.some(u => u.username === username)) {
    info.push(userinfo);
  }

  // Redirect with query param to persist username
  res.redirect('/home?username=' + encodeURIComponent(req.body.username));
})

app.get('/home', (req, res, next) => {
  const username = req.query.username || 'Guest';
  res.render('home', { username: username, homes: homes })
})

app.get('/homelist', (req, res, next) => {
  const username = req.query.username || 'Guest'
  res.render('homelist', { username: username, homes: homes })
})

app.get('/homedetails/:homeId', (req, res, next) => {
  const homeId = parseInt(req.params.homeId);
  const home = homes.find(h => h.id === homeId);
  const username = req.query.username || 'Guest';

  if (home) {
    res.render('homedetails', { username: username, home: home });
  } else {
    res.status(404).send('Home not found');
  }
})

app.get('/favourite', (req, res, next) => {
  const username = req.query.username || 'Guest'
  res.render('favourite', { username: username })
})

// --- Admin Section ---

app.get('/admin', (req, res) => {
  // In a real app, we would check for admin session/auth here
  res.render('admin', {
    users: info,
    homes: homes,
    bannedUsers: bannedUsers
  });
});

app.post('/admin/add-home', (req, res) => {
  const newHome = {
    id: homes.length > 0 ? Math.max(...homes.map(h => h.id)) + 1 : 1,
    title: req.body.title,
    price: parseFloat(req.body.price),
    location: req.body.location,
    description: req.body.description,
    imageUrl: req.body.imageUrl
  };
  homes.push(newHome);
  res.redirect('/admin');
});

app.post('/admin/delete-home', (req, res) => {
  const homeId = parseInt(req.body.homeId);
  const index = homes.findIndex(h => h.id === homeId);
  if (index !== -1) {
    homes.splice(index, 1);
  }
  res.redirect('/admin');
});

app.post('/admin/ban-user', (req, res) => {
  const username = req.body.username;
  if (username && !bannedUsers.includes(username)) {
    bannedUsers.push(username);
  }
  res.redirect('/admin');
});

app.post('/admin/unban-user', (req, res) => {
  const username = req.body.username;
  const index = bannedUsers.indexOf(username);
  if (index !== -1) {
    bannedUsers.splice(index, 1);
  }
  res.redirect('/admin');
});

app.use((req, res) => {
  res.status(404).send('Page not found')
})

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000")
})