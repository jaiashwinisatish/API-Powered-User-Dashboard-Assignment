# User Dashboard

A modern, responsive user dashboard application built with React, TypeScript, Vite, and Tailwind CSS. This application fetches user data from the JSONPlaceholder API and displays it in an elegant, interactive interface.

## Features

- **Responsive Design** - Optimized for mobile, tablet, and desktop devices
- **User Cards** - Clean card layout displaying user information (Name, Email, Company, City)
- **Detailed View** - Click any user card to open a modal with complete user information including phone, website, and full address
- **Search Functionality** - Real-time search to filter users by name
- **Sorting Options** - Sort users by name or company
- **Dark/Light Mode** - Toggle between dark and light themes with persistent preference
- **Loading States** - Smooth loading spinner during data fetch
- **Error Handling** - Graceful error messages with retry functionality
- **Smooth Animations** - Polished transitions and hover effects
- **Modern UI** - Clean, professional design with attention to detail

## Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe code
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful, consistent icons

## Project Structure

```
src/
├── components/
│   ├── ErrorMessage.tsx      # Error display with retry button
│   ├── LoadingSpinner.tsx    # Loading state indicator
│   ├── SearchBar.tsx          # Search input component
│   ├── SortControls.tsx       # Sort dropdown component
│   ├── ThemeToggle.tsx        # Dark/light mode toggle
│   ├── UserCard.tsx           # User card display
│   └── UserModal.tsx          # Detailed user information modal
├── types/
│   └── user.ts                # TypeScript interfaces for User data
├── App.tsx                    # Main application component
├── main.tsx                   # Application entry point
└── index.css                  # Global styles and animations
```

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd user-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Usage

1. **Browse Users** - Scroll through the user cards to see basic information
2. **Search** - Type in the search bar to filter users by name
3. **Sort** - Use the dropdown to sort users by name or company
4. **View Details** - Click any user card to see detailed information in a modal
5. **Toggle Theme** - Click the sun/moon icon to switch between light and dark modes

## API

This application uses the [JSONPlaceholder](https://jsonplaceholder.typicode.com/) API to fetch user data:

- Endpoint: `https://jsonplaceholder.typicode.com/users`
- Returns 10 sample users with complete information

## Features in Detail

### Responsive Layout
- Mobile: Single column card layout
- Tablet: Two column grid
- Desktop: Three column grid

### Search & Sort
- Real-time search filtering
- Case-insensitive search
- Sort by name (alphabetical)
- Sort by company name (alphabetical)

### Theme Support
- Automatic dark mode detection based on system preferences
- Manual toggle with persistent storage
- Smooth theme transitions

### Error Handling
- Network error detection
- User-friendly error messages
- Retry functionality

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT

## Author

Built with React, TypeScript, and Tailwind CSS
