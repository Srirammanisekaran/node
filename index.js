const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();

// Enable CORS
app.use(cors());
const username = 'APIUSER';
const password = 'Essae@54321123452023';
// Define a route for making the API request
app.get('/api/docitem', async (req, res) => {
    try {
    // Make the API request
    const response = await axios.get('https://my403274-api.s4hana.cloud.sap/sap/opu/odata/sap/API_OPLACCTGDOCITEMCUBE_SRV/A_OperationalAcctgDocItemCube?$filter=PostingDate%20ge%20datetime%272023-01-15T00:00:00%27%20and%20PostingDate%20le%20datetime%272023-04-28T00:00:00%27%20and%20AccountingDocumentType%20eq%20%27KZ%27', {
      auth: {
        username,
        password
      }
    });
    // Return the response data
    res.json(response.data);
  } catch (error) {
    // Handle any errors
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Define a route for making the API request
app.get('/api/vendor', async (req, res) => {
    try {
      // Make the API request
      const response = await axios.get('https://my403274-api.s4hana.cloud.sap/sap/opu/odata/sap/API_BUSINESS_PARTNER/A_Supplier', {
        auth: {
          username,
          password
        }
      });
      // Return the response data
      res.json(response.data);
    } catch (error) {
      // Handle any errors
      res.status(500).json({ error: 'An error occurred' });
    }
  });

  app.get('/api/all:parameter', async (req, res) => {
    try {
      // Make the API request
      let parameter = req.params.parameter; 
      var newText = parameter.replaceAll(':', '');
      console.log(newText);
      const url = 'https://my403274-api.s4hana.cloud.sap/sap/opu/odata/sap/API_OPLACCTGDOCITEMCUBE_SRV/A_OperationalAcctgDocItemCube?$filter=ClearingAccountingDocument%20eq%20%27'+ newText +'%27';
      console.log(url);
      const response = await axios.get(url, {
        auth: {
          username,
          password
        }
      });
      // Return the response data
      res.json(response.data);
    } catch (error) {
      // Handle any errors
      res.status(500).json({ error: 'An error occurred' });
    }
  });
// Define a route for making the API request
app.get('/api/vendoraddrs', async (req, res) => {
    try {
      // Make the API request
      const response = await axios.get('https://my403274-api.s4hana.cloud.sap/sap/opu/odata/sap/YY1_APIBUSINESSPARTNERADDR_CDS/YY1_APIBusinessPartnerAddr', {
        auth: {
          username,
          password
        }
      });
      // Return the response data
      res.json(response.data);
    } catch (error) {
      // Handle any errors
      res.status(500).json({ error: 'An error occurred' });
    }
  });
//   app.get('/api/logo', async (req, res) => {
//     res.json('');
//   });

//   request.get('https://www.essaedig.com/images/essae-logo.png', function (error, response, body) {
//     if (!error && response.statusCode == 200) {
//         data = "data:" + response.headers["content-type"] + ";base64," + Buffer.from(body).toString('base64');
//         console.log(data);
//     }
// });
// Start the server
app.listen(3000, async () => {
    let image = await axios.get('https://www.essaedig.com/images/essae-logo.png', {responseType: 'arraybuffer'});
let returnedB64 = Buffer.from(image.data).toString('base64');
console.log('Server is running on port 3000');


});
