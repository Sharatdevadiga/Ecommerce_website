# E-Commerce Website

An e-commerce web application built with modern technologies to offer a seamless shopping experience. Inspired by Myntra, this project is built using Vite, React, TypeScript, Tailwind CSS, and Redux for state management. Asynchronous fetching is managed by RTK Query, and Firebase is used for secure email-password authentication. React Hook Form is implemented for efficient form handling and validation.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Details](#project-details)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Demo

Check out a live demo of the app [here](https://ecommerce-website-two-gray.vercel.app/).

## Features

- **Visually appealing, responsive UI** inspired by Myntra's design.
- **Secure User Authentication** using Firebase, with email/password login.
- **Cart Management**: Add items to cart, view cart details, and checkout.
- **Browse Products without Authentication** to explore the catalog.
- **Product Search** for easy product discovery.
- **Authentication Redirects**: Redirect users to login/signup when adding items to the cart or during checkout if not logged in.
- **Redux Toolkit** for robust state management.
- **Form Handling and Validation** using React Hook Form.

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Sharatdevadiga/Ecommerce_website.git
   cd Ecommerce_website

   ```

2. **Install dependencies:**:

   ```bash
   npm install
   ```

3. **Set up Firebase**

   - Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.
   - Set up **Firebase Authentication** with Email/Password.
   - Copy your Firebase configuration details and add them to your environment file.

4. **Configure environment variables**

   - Create a `.env` file in the project root and add your Firebase configuration:
     ```env
     VITE_FIREBASE_API_KEY=your_api_key
     VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
     VITE_FIREBASE_PROJECT_ID=your_project_id
     VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
     VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
     VITE_FIREBASE_APP_ID=your_app_id
     ```

5. **Run the development server**

   ```bash
   npm run dev
   ```

## Technologies Used

- **Frontend**: Vite, React, TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit with RTK Query
- **Authentication**: Firebase (email/password)
- **Form Handling**: React Hook Form

## Usage

1. Visit the homepage to browse available products.
2. Use the search bar to find specific products.
3. Add items to your cart (you'll be prompted to log in if not authenticated).
4. Sign up and log in with Firebase email/password authentication.
5. Proceed to checkout through the cart.

## Project Details

This project follows these instructions to ensure feature-rich functionality and a user-friendly experience:

- **Frontend Interface Development**: Designed an appealing and modern interface inspired by Myntra.
- **User Authentication & Cart Management**: Integrated login, signup, and cart features based on API documentation.
- **Browse Products without Login**: Users can explore products without logging in for easy access.
- **Data Management**: Managed state using Redux Toolkit, ensuring efficient data flow across the application.
- **Authentication Redirect**: Non-logged-in users are redirected to log in before accessing cart and checkout.
- **Flexible Authentication Methods**: Used Firebase for email/password authentication.
- **UI/UX Design**: Styled the interface using Tailwind CSS for a clean and responsive look.
- **Search Functionality**: Implemented search for convenient product navigation.
- **Thorough Testing**: Extensively tested all functionalities to deliver a smooth user experience.

## Testing

Thorough manual testing was conducted to ensure:

- User flows, like authentication, cart management, and product search, work as expected.
- Error handling and validation for forms are correctly implemented.
- Responsive design works well across different screen sizes.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request.
