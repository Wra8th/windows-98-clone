const express = require('express');
const app = express();

const employees = [
    {
      "name": "Adeel Solangi",
      "language": "Sindhi",
      "id": "V59OF92YF627HFY0",
      "bio": "Donec lobortis eleifend condimentum. Cras dictum dolor lacinia lectus vehicula rutrum. Maecenas quis nisi nunc. Nam tristique feugiat est vitae mollis. Maecenas quis nisi nunc.",
      "version": 6.1
    },
    {
      "name": "Afzal Ghaffar",
      "language": "Sindhi",
      "id": "ENTOCR13RSCLZ6KU",
      "bio": "Aliquam sollicitudin ante ligula, eget malesuada nibh efficitur et. Pellentesque massa sem, scelerisque sit amet odio id, cursus tempor urna. Etiam congue dignissim volutpat. Vestibulum pharetra libero et velit gravida euismod.",
      "version": 1.88
    },
    {
      "name": "Aamir Solangi",
      "language": "Sindhi",
      "id": "IAKPO3R4761JDRVG",
      "bio": "Vestibulum pharetra libero et velit gravida euismod. Quisque mauris ligula, efficitur porttitor sodales ac, lacinia non ex. Fusce eu ultrices elit, vel posuere neque.",
      "version": 7.27
    },
    {
      "name": "Abla Dilmurat",
      "language": "Uyghur",
      "id": "5ZVOEPMJUI4MB4EN",
      "bio": "Donec lobortis eleifend condimentum. Morbi ac tellus erat.",
      "version": 2.53
    },
    {
      "name": "Adil Eli",
      "language": "Uyghur",
      "id": "6VTI8X6LL0MMPJCC",
      "bio": "Vivamus id faucibus velit, id posuere leo. Morbi vitae nisi lacinia, laoreet lorem nec, egestas orci. Suspendisse potenti.",
      "version": 6.49
    },
    {
      "name": "Adile Qadir",
      "language": "Uyghur",
      "id": "F2KEU5L7EHYSYFTT",
      "bio": "Duis commodo orci ut dolor iaculis facilisis. Morbi ultricies consequat ligula posuere eleifend. Aenean finibus in tortor vel aliquet. Fusce eu ultrices elit, vel posuere neque.",
      "version": 1.9
    }];

app.get('/', (req,res) => {
    res.send("Hello World!");
});

app.get('/employees', (req,res) => {
    res.send(employees);
});

app.get('/employees/:id', (req,res) => {
    const employee = employees.find(c => c.id === parseInt(req.params.id))
    res.send(employee);
})
const port = process.env.PORT || 3000;

app.listen(port,() => console.log(`app running on $port...`))
// app.post();

// app.put();

// app.delete();