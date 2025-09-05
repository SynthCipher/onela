export const CONTACT_THANK_YOU_TEMPLATE = `
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <title>Thank You</title>
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap" rel="stylesheet" type="text/css">
  <style type="text/css">
    body {
      margin: 0;
      padding: 0;
      font-family: 'Open Sans', sans-serif;
      background: #E5E5E5;
    }
    
    table, td {
      border-collapse: collapse;
    }
    
    .container {
      width: 100%;
      max-width: 500px;
      margin: 70px 0px;
      background-color: #ffffff;
    }
    
    .main-content {
      padding: 48px 30px 40px;
      color: #000000;
    }
    
    .button {
      width: 100%;
      background: #22D172;
      text-decoration: none;
      display: inline-block;
      padding: 10px 0;
      color: #fff;
      font-size: 14px;
      text-align: center;
      font-weight: bold;
      border-radius: 7px;
    }
    
    .visit-button {
      display: inline-block;
      background-color: #4C83EE;
      color: #ffffff;
      text-decoration: none;
      font-weight: bold;
      padding: 12px 24px;
      border-radius: 5px;
      margin: 20px 0;
      text-align: center;
    }
    
    .footer {
      font-size: 12px;
      color: #666666;
      text-align: center;
      padding-top: 20px;
      border-top: 1px solid #E5E5E5;
      margin-top: 20px;
    }
    
    @media only screen and (max-width: 480px) {
      .container {
        width: 80% !important;
      }
      
      .button {
        width: 50% !important;
      }
    }
  </style>
</head>

<body>
  <table width="100%" cellspacing="0" cellpadding="0" border="0" align="center" bgcolor="#F6FAFB">
    <tbody>
      <tr>
        <td valign="top" align="center">
          <table class="container" width="600" cellspacing="0" cellpadding="0" border="0">
            <tbody>
              <tr>
                <td class="main-content">
                  <table width="100%" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                      <tr>
                        <td style="padding: 0 0 24px; font-size: 18px; line-height: 150%; font-weight: bold;">
                          Thank you for contacting us!
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 0 0 10px; font-size: 14px; line-height: 150%;">
                          Hello <span style="color: #4C83EE;">{{name}}</span>,
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 0 0 16px; font-size: 14px; line-height: 150%;">
                          We have received your message and appreciate you reaching out to us. A member of our team will get back to you shortly.
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 0 0 24px;">
                          <p style="margin: 0; font-size: 14px; line-height: 150%;">
                            In the meantime, feel free to explore our website to learn more about the Ice Stupa Project and our initiatives.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td align="center">
                          <a href="https://ice-stupa-dashboard.vercel.app/" class="visit-button" target="_blank">
                            Visit Our Website
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 10px 0 0; font-size: 14px; line-height: 150%; font-style: italic;">
                          We'll be in touch soon!
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 10px 0 0; font-size: 14px; line-height: 150%; font-weight: bold;">
                          - The Ice Stupa Project Team
                          <br><br>

                        </td>
                      </tr>
                      <tr>
                        <td class="footer">
                          <p>© 2025 Ice Stupa Project. All rights reserved.</p>
                        </td>
                        
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
</body>
</html>
`;
const CONTACT_OWNER_NOTIFICATION_TEMPLATE = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { width: 100%; max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #333; color: white; padding: 20px; text-align: center; }
    .content { padding: 20px; }
    .message-box { background-color: #f9f9f9; border-left: 4px solid #333; padding: 15px; margin: 15px 0; }
    .details { margin-top: 20px; }
    .detail-row { display: flex; margin-bottom: 10px; }
    .detail-label { font-weight: bold; width: 100px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Contact Form Submission</h1>
    </div>
    <div class="content">
      <p>You have received a new contact form submission from your portfolio website.</p>
      
      <div class="details">
        <div class="detail-row">
          <span class="detail-label">Name:</span>
          <span>{{name}}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Email:</span>
          <span>{{email}}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Phone:</span>
          <span>{{phone}}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Subject:</span>
          <span>{{subject}}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Date:</span>
          <span>{{date}}</span>
        </div>
      </div>
      
      <h3>Message:</h3>
      <div class="message-box">
        {{message}}
      </div>
      
      <p>You can reply directly to this email to respond to {{name}}.</p>
    </div>
  </div>
</body>
</html>
`;