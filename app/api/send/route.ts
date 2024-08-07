import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail= process.env.FROM_EMAIL;

export async function POST(req:Request, res:Response) {

    const {email, subject, message} = await req.json();
    console.log(email,subject,message)

    if (!fromEmail) {
      throw new Error("From email is required");
    }

    const { data, error } = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: [fromEmail],
        subject: subject,
        html:`<p>email: ${email} </p> <p>message: ${message} </p> <p> subject: ${ subject} </p>`
      });
  
      if (error) {
        return Response.json({ error }, { status: 500 });
      }
  
      return Response.json(data);
      
  try {

  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}