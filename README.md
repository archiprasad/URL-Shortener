# URL Shortener

This project is a **simple and privacy-focused URL shortener** designed to provide a seamless and secure way to shorten long URLs. Unlike many other services, this URL shortener prioritizes user privacy, ensuring no tracking or data collection. Built using modern web technologies, this project is efficient, fast, and easy to use.

---

## Features

- **URL Shortening**: Input a long URL, and the service generates a shorter, more manageable link.
- **Privacy-Focused**: No user tracking, no data collection, and no login required.
- **Customizable URLs**: Ability to set custom aliases for shortened links.
- **Minimalistic Design**: Clean, simple, and user-friendly interface.
- **Fast and Reliable**: Powered by a robust backend for quick responses.

---

## Technologies Used

- **Frontend**: 
  - **Next.js**: Framework for server-rendered React applications with fast performance and built-in routing.
  - **CSS**: Used for styling the UI for a clean, responsive design.
  
- **Backend**: 
  - **Node.js**: Server-side runtime for handling API requests.
  - **MongoDB**: A NoSQL database used for storing original URLs, shortened links, and custom aliases.

- **Other Tools**:
  - **Vercel**: Deployed using Vercel for fast and scalable hosting.
  - **GitHub**: Version control and collaboration.

---

## Setup and Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/archiprasad/url-shortener.git
   cd url-shortener
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Configure MongoDB**:
   - Set up a MongoDB database.
   - Add the database connection string to your environment variables (`.env` file).

4. **Run the Development Server**:
   ```bash
   npm run dev
   ```

5. **Visit the App**:
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## How It Works

1. **Enter a URL**: Users provide a long URL they want to shorten.
2. **Generate a Shortened Link**: The app processes the URL and stores the mapping in the database.
3. **Access the Shortened URL**: Users can use the shortened link to redirect to the original URL.

---

## Project Highlights

- **Custom Alias Support**: Users can choose custom aliases instead of random ones.
- **Error Handling**: Proper validation and error messages for invalid URLs.
- **Scalability**: Designed to handle a large number of requests efficiently.
- **Frontend Components**: Includes a responsive navbar and minimalistic forms.

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m "Add feature"`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---
