import {
    Body,
    Button,
    Container,
    Head,
    Hr,
    Html,
    Img,
    Preview,
    Section,
    Text,
  } from "@react-email/components";
  import * as React from "react";
  
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";
  
  export const EmailTemplate = ({ userFirstname = "Hanan Khalid"} ) => (
    <Html>
      <Head />
      <Preview>
        Where healthcare meets convenience, making appointments hassle-free.
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src= "/logo.svg"
            width="170"
            height="50"
            alt="Koala"
            style={logo}
          />
          <Text style={paragraph}>Hi {userFirstname},</Text>
          <Text style={paragraph} className="text-2xl">
            Your booking with Dr. has been confirmed. We're excited to assist you with your healthcare needs.
          </Text>
          <Section>
            <Text>
              You can view your appointment details by logging into your DocFinderPro account.
            </Text>
          </Section>
          <Text style={paragraph}>
            Best,
            <br />
            The DocFinderPro team
          </Text>
          <Hr style={hr} />
          <Text style={footer}>
            Post Office 3800 Faisalabad, Pakistan
          </Text>
        </Container>
      </Body>
    </Html>
  );
  
  export default EmailTemplate;
  
  const main = {
    backgroundColor: "#ffffff",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };
  
  const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
  };
  
  const logo = {
    margin: "0 auto",
  };
  
  const paragraph = {
    fontSize: "16px",
    lineHeight: "26px",
  };
  
  const btnContainer = {
    textAlign: "center" as const,
  };
  
  const button = {
    backgroundColor: "#5F51E8",
    borderRadius: "3px",
    color: "#fff",
    fontSize: "16px",
    textDecoration: "none",
    textAlign: "center" as const,
    display: "block",
    padding: "12px",
  };
  
  const hr = {
    borderColor: "#cccccc",
    margin: "20px 0",
  };
  
  const footer = {
    color: "#8898aa",
    fontSize: "12px",
  };
  