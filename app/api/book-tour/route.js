import nodemailer from 'nodemailer';
const SMTP_SERVER_HOST = process.env.SMTP_SERVER_HOST;
const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME;
const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD;
const SITE_MAIL_RECIEVER = process.env.SITE_MAIL_RECIEVER;



export async function POST(request) {

  try {


    const body = await request.json();

    console.log("body ", body)


    const { email, fullName, phoneNumber, bookingDate } = body;


    const resp = await sendMail({
      text : `
        Full Name : ${fullName},
        Email : ${email},
        Phone Number : ${phoneNumber},
        Booking Date : ${formatDate(bookingDate)}
      `
    })


    if (resp.accepted.length) {
      return Response.json({
        success : true,
        error : false
      })


    } else {
      throw new Error("Could Not Process Request")
    }

  } catch (error) {

    return Response.json({
      success: false,
      error: error.message
    })
  }



}





const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: SMTP_SERVER_HOST,
  port: 587,
  secure: true,
  auth: {
    user: SMTP_SERVER_USERNAME,
    pass: SMTP_SERVER_PASSWORD,
  },
});




async function sendMail({
  text,
  html,
}) {
  try {
    const isVerified = await transporter.verify();
  } catch (error) {
    console.error('Something Went Wrong', SMTP_SERVER_USERNAME, SMTP_SERVER_PASSWORD, error);
    return;
  }
  const info = await transporter.sendMail({
    from: SMTP_SERVER_USERNAME,
    to: SITE_MAIL_RECIEVER,
    subject: "New Tour Booking Request",
    text: text,
    html: html ? html : '',
  });
  console.log('Message Sent', info.messageId);
  console.log('Mail sent to', SITE_MAIL_RECIEVER);
  return info;
}





function formatDate(dateString) {
  const date = new Date(dateString);

  const options = {
    weekday: 'short', // 'Tue'
    year: 'numeric',  // '2024'
    month: 'short',   // 'Nov'
    day: 'numeric',   // '19'
  };

  // Use Intl.DateTimeFormat to format the date as per the options
  const formattedDate = new Intl.DateTimeFormat('en-IN', options).format(date);

  return formattedDate; // Returns a string like "Tue Nov 19 2024"
}

