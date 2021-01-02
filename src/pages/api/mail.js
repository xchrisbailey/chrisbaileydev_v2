const mailgunSdk = require('mailgun-js');
const apiKey = process.env.MAILGUN_API;
const domain = `mail.${process.env.DOMAIN}`;
const mailgun = mailgunSdk({ apiKey, domain });

export default async (req, res) => {
  let response;

  try {
    response = await mailgun.messages().send({
      to: 'chris@ghostly.io',
      from: req.body.from,
      subject: req.body.subject,
      text: req.body.text
    });
  } catch (e) {
    return res.status(e.statusCode || 500).json({ error: e.message });
  }

  return res.status(200).json({ result: response.message });
};
