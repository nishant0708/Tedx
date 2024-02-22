const express = require("express");
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT ;

app.use(bodyParser.json());
app.use(cors());

// Get the absolute path to the emails.json file
const emailsFilePath = path.join(__dirname, 'emails.json');

app.post('/store-email', (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  let existingEmails = [];
  try {
    existingEmails = JSON.parse(fs.readFileSync(emailsFilePath, 'utf8'));
  } catch (error) {
    // If the file does not exist or is invalid JSON, ignore and create an empty array
  }

  // Add the new email to the existing ones
  existingEmails.push(email);

  // Write the updated emails back to the file
  fs.writeFileSync(emailsFilePath, JSON.stringify(existingEmails, null, 2), 'utf8');

  res.json({ success: true });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});