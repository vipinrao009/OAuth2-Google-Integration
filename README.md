# OAuth2-Google-Integration

This project demonstrates how to integrate Google OAuth2.0 authentication into your application. It enables secure login functionality using Google accounts, providing a seamless user experience while adhering to industry standards for authentication.

---

## Features
- **Google OAuth2.0 Authentication**: Allow users to log in with their Google accounts.
- **Secure Token Handling**: Manage access tokens safely and securely.
- **Session Management**: Maintain user sessions with efficient session management.
- **Customizable**: Easily extend or integrate with your existing application.

---

## Tech Stack
- **Frontend**: React.js,Tailwind CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Authentication Library**: Google OAuth2.0 API, Passport.js
- **Environment Configuration**: dotenv
- **Database**: MongoDB

---

## Prerequisites

1. **Google Developer Console**: Create a project and obtain the following credentials:
   - Client ID
   - Client Secret

2. **Node.js**: Ensure you have Node.js installed (version 14+ recommended).

3. **Database** (Optional): Set up a database if you wish to persist user data.

---

## Installation

### 1. Clone the Repository
```bash
$ git clone https://github.com/vipinrao009/OAuth2-Google-Integration.git
$ cd OAuth2-Google-Integration
```

### 2. Install Dependencies
```bash
$ npm install
```

### 3. Set Up Environment Variables
Create a `.env` file in the root directory and add the following variables:
```env
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
CALLBACK_URL=http://localhost:5000/auth/google/callback
SESSION_SECRET=your-session-secret
JWT_SECRET=your-jwt-secret
JWT_EXPIRES_IN=7d
```

### 4. Run the Application
```bash
$ npm start
```
The application will be available at [http://localhost:5000](http://localhost:5000).

---

## Implementation Steps

### Step 1: Frontend - Login Button and Response Handling
#### `Login.js`
```javascript
const googleResponse = async (authResult) => {
  try {
    if (authResult['code']) {
      const result = await googleAuth(authResult['code']);
      const { name, email, image } = result.data.user;
      const token = result.data.token;
      const obj = { name, email, image, token };
      localStorage.setItem('user', JSON.stringify(obj));
      navigate('/dashboard');
    }
  } catch (error) {
    console.error('Error while requesting google code:', error);
  }
};

const googleLogin = useGoogleLogin({
  onSuccess: googleResponse,
  onError: googleResponse,
  flow: 'auth-code',
});

return (
  <div className="text-center mt-6">
    <p className="text-sm text-gray-500">Or Sign up Using</p>
    <div className="flex justify-center space-x-4 mt-4">
      <button
        onClick={googleLogin}
        className="p-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
      >
        <FaGoogle />
      </button>
    </div>
  </div>
);
```

### Step 2: Frontend - Wrapping the App with GoogleOAuthProvider
#### `App.js`
```javascript
const GoogleAuthWrapper = () => {
  return (
    <GoogleOAuthProvider clientId='your-google-client-id'>
      <Login />
    </GoogleOAuthProvider>
  );
};
```

### Step 3: Backend - Handling Login Requests
#### `authController.js`
```javascript
const login = async (req, res) => {
  try {
    const { code } = req.query;
    const googleRes = await oAuth2Client.getToken(code);
    oAuth2Client.setCredentials(googleRes.tokens);

    const userInfo = await axios.get(
      `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${googleRes.tokens.access_token}`
    );
    const { email, name, picture } = userInfo.data;

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({ name, email, image: picture });
    }

    const { _id } = user;
    const token = jwt.sign({ _id, email }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    return res.status(200).json({
      message: 'Login successfully',
      success: true,
      token,
      user,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Failed while login',
      error: error.message,
    });
  }
};
```

### Step 4: Backend - Setting Up OAuth2 Client
#### `googleAuth.js`
```javascript
import { google } from 'googleapis';
import { config } from 'dotenv';
config();

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

const oAuth2Client = new google.auth.OAuth2(
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  'postmessage'
);

export { oAuth2Client };
```

---

## Folder Structure
```
OAuth2-Google-Integration/
├── public/              # Static files
├── src/                 # Source code
│   ├── routes/          # Express routes
│   ├── controllers/     # Backend controllers
│   ├── views/           # Frontend views
│   ├── utils/           # Helper functions
├── .env                 # Environment variables
├── package.json         # Dependencies and scripts
└── README.md            # Documentation
```

---

## Troubleshooting

- **Invalid Credentials Error**: Verify `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` in `.env` file.
- **Callback URL Mismatch**: Ensure the callback URL matches the one configured in the Google Developer Console.
- **Session Issues**: Double-check `SESSION_SECRET` for consistency.

---

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contributing
Contributions are welcome! Feel free to fork the repository and submit a pull request.

---

## Acknowledgments
- [Google OAuth Documentation](https://developers.google.com/identity/protocols/oauth2)
- [Passport.js](http://www.passportjs.org/)

---

## Author
Developed by [Vipin Kumar](https://github.com/vipinrao009).
