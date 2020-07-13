import React from "react";
import "./MultiFactorGuide.css";

export default class MultiFactorGuide extends React.PureComponent {
  render() {
    return (
      <div className="MultiFactorGuide">
        <h1>Multi factor guide</h1>
        <p>
          For multi factor authentication flows, you'll need two separate
          factors, something you have and something you know. For the first
          factor, you'll rely on either or both one time passcode and email
          magic link. If your app skews heavily mobile, we suggest one time
          passcode. If it's heavily web based, we suggest email magic link. For
          the second factor, you'll use a 6+ digit pin.
        </p>
        <div className="MultiFactorGuide-card">
          <h2>Create a user</h2>
          <p>
            The foundation of the Stytch API is the <em>User</em>, so to start,
            you'll want to add users via the create endpoint. Once you've
            created a user, you then use the user_id any time you wish to
            authenticate that user.
          </p>
          <h3>POST /users</h3>
          <pre className="MultiFactorGuide-codeblock">
            <code>{`curl -X POST https://sandbox.stytch.io/users \
-H 'Content-Type: application/json' \
-d '{
  "client_id": string,
  "secret": string,
  "first_name": string,
  "last_name": string,
  "phone": string
}'`}</code>
          </pre>
          <h3>Example payload</h3>
          <pre className="MultiFactorGuide-codeblock">
            <code>{`curl -X POST https://sandbox.stytch.io/users \
-H 'Content-Type: application/json' \
-d '{
  "client_id": "client-d482cc2e-a93b-11ea-bb37-0242ac130002",
  "secret": "123abc456",
  "first_name": "Jane",
  "last_name": "Doe",
  "phone": "1231231234"
}'`}</code>
          </pre>
          <h3>Example response</h3>
          <pre className="MultiFactorGuide-codeblock">
            <code>{`{
  "user_id": "user-sandbox-b8797f2c-a93c-11ea-bb37-0242ac130002",
  "phone_id": "phone-sandbox-c66dca30-a93b-11ea-bb37-0242ac130002"
}`}</code>
          </pre>
        </div>
        <div className="MultiFactorGuide-card">
          <h2>One time passcode</h2>
          <p>
            One time passcodes, either via phone or time based authenticator
            apps such as Google Authenticator or Authy, are a simple way for a
            user to log in.
          </p>
          <h3>POST /otp/send</h3>
          <pre className="MultiFactorGuide-codeblock">
            <code>{`curl -X POST https://sandbox.stytch.io/otp/send \
-H 'Content-Type: application/json' \
-d '{
  "client_id": string,
  "secret": string,
  "phone_id": string
}'`}</code>
          </pre>
          <h3>Example payload</h3>
          <pre className="MultiFactorGuide-codeblock">
            <code>{`curl -X POST https://sandbox.stytch.io/otp/send \
-H 'Content-Type: application/json' \
-d '{
  "client_id": "client-d482cc2e-a93b-11ea-bb37-0242ac130002",
  "secret": "123abc456",
  "phone_id": "phone-sandbox-c66dca30-a93b-11ea-bb37-0242ac130002"
}'`}</code>
          </pre>
          <h3>POST /otp/verify</h3>
          <pre className="MultiFactorGuide-codeblock">
            <code>{`curl -X POST https://sandbox.stytch.io/otp/verify \
-H 'Content-Type: application/json' \
-d '{
  "client_id": string,
  "secret": string,
  "phone_id": string,
  "code": string
}'`}</code>
          </pre>
          <h3>Example payload</h3>
          <pre className="MultiFactorGuide-codeblock">
            <code>{`curl -X POST https://sandbox.stytch.io/otp/verify \
-H 'Content-Type: application/json' \
-d '{
  "client_id": "client-d482cc2e-a93b-11ea-bb37-0242ac130002",
  "secret": "123abc456",
  "phone_id": "phone-sandbox-c66dca30-a93b-11ea-bb37-0242ac130002",
  "code": "123456"
}'`}</code>
          </pre>
        </div>
        <div className="MultiFactorGuide-card">
          <h2>Magic link</h2>
          <p>
            Email magic link works by sending a securely generated url to the
            users email. When the user clicks on the link, they'll be redirected
            to your app. The redirect url you specify indicates where the user
            should land within your app when they click on the link. This acts
            as a <em>something you know</em> factor by requiring that they have
            access to the email on file.
          </p>
          <h3>POST /magiclinks/send</h3>
          <pre className="MultiFactorGuide-codeblock">
            <code>{`curl -X POST https://sandbox.stytch.io/magiclinks/send \
-H 'Content-Type: application/json' \
-d '{
  "client_id": string,
  "secret": string,
  "user_id": string,
  "email_id": string,
  "redirect_url": string
}'`}</code>
          </pre>
          <h3>Example payload</h3>
          <pre className="MultiFactorGuide-codeblock">
            <code>{`curl -X POST https://sandbox.stytch.io/magiclinks/send \
-H 'Content-Type: application/json' \
-d '{
  "client_id": "client-d482cc2e-a93b-11ea-bb37-0242ac130002",
  "secret": "123abc456",
  "user_id": "user-sandbox-b8797f2c-a93c-11ea-bb37-0242ac130002",
  "email_id": "email-sandbox-c1a1d554-a93c-11ea-bb37-0242ac130002",
  "redirect_url": "stytch.io"
}'`}</code>
          </pre>
          <h3>POST /magiclinks/verify</h3>
          <pre className="MultiFactorGuide-codeblock">
            <code>{`curl -X POST https://sandbox.stytch.io/magiclinks/send \
-H 'Content-Type: application/json' \
-d '{
  "client_id": string,
  "secret": string,
  "user_id": string,
  "email_id": string,
  "token": string
}'`}</code>
          </pre>
          <h3>Example payload</h3>
          <pre className="MultiFactorGuide-codeblock">
            <code>{`curl -X POST https://sandbox.stytch.io/magiclinks/send \
-H 'Content-Type: application/json' \
-d '{
  "client_id": "client-d482cc2e-a93b-11ea-bb37-0242ac130002",
  "secret": "123abc456",
  "user_id": "user-sandbox-b8797f2c-a93c-11ea-bb37-0242ac130002",
  "email_id": "email-sandbox-c1a1d554-a93c-11ea-bb37-0242ac130002",
  "token": "M8fyq0VrUmoHb-KkcqbqH-MHhZHIWAyxjlZagG6KD98%3D"
}'`}</code>
          </pre>
        </div>
        <div className="MultiFactorGuide-card">
          <h2>PIN</h2>
          <p>
            PIN is a high recall second factor for when a user must perform a
            sensitive action such as moving money.
          </p>
          <h3>POST /pin</h3>
          <pre className="MultiFactorGuide-codeblock">
            <code>{`curl -X POST https://sandbox.stytch.io/pins \
-H 'Content-Type: application/json' \
-d '{
  "client_id": string,
  "secret": string,
  "user_id": string,
  "pin": string
}'`}</code>
          </pre>
          <h3>Example payload</h3>
          <pre className="MultiFactorGuide-codeblock">
            <code>{`curl -X POST https://sandbox.stytch.io/pins \
-H 'Content-Type: application/json' \
-d '{
  "client_id": "client-d482cc2e-a93b-11ea-bb37-0242ac130002",
  "secret": "123abc456",
  "user_id": "user-sandbox-b8797f2c-a93c-11ea-bb37-0242ac130002",
  "pin": "123456"
}'`}</code>
          </pre>
          <h3>POST /pins/verify</h3>
          <pre className="MultiFactorGuide-codeblock">
            <code>{`curl -X POST https://sandbox.stytch.io/pins/verify \
-H 'Content-Type: application/json' \
-d '{
  "client_id": string,
  "secret": string,
  "user_id": string,
  "pin": string
}'`}</code>
          </pre>
          <h3>Example payload</h3>
          <pre className="MultiFactorGuide-codeblock">
            <code>{`curl -X POST https://sandbox.stytch.io/pins/verify \
-H 'Content-Type: application/json' \
-d '{
  "client_id": "client-d482cc2e-a93b-11ea-bb37-0242ac130002",
  "secret": "123abc456",
  "user_id": "user-sandbox-b8797f2c-a93c-11ea-bb37-0242ac130002",
  "pin": "123456"
}'`}</code>
          </pre>
        </div>
      </div>
    );
  }
}
