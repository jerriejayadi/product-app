# React Product App Project

A modern Product application built with React, TypeScript, and Vite that displays products from DummyJSON API. Features include grid layout, product details, search functionality, wishlist management, and theme switching.

## 🚀 Features

- **Product Grid Layout**
  - Thumbnail image display
  - Product title and category
  - Price with discount
  - Product rating
  - Stock status indicator (Low stock warning when ≤ 5 items)
- **Product Detail Page**

  - Multiple product images
  - Comprehensive product information
    - Title and description
    - Price and discount
    - Category and brand
    - Rating and stock status
    - SKU information

- **User Features**
  - Search and filter functionality
  - Bookmark/Wishlist system with local storage persistence
  - Responsive grid layout
  - Dark/Light mode theme switching

## 🛠️ Tech Stack

- [React](https://reactjs.org/) - UI Library
- [TypeScript](https://www.typescriptlang.org/) - Programming Language
- [Vite](https://vitejs.dev/) - Build Tool
- [Zustand](https://github.com/pmndrs/zustand) - State Management
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [DummyJSON](https://dummyjson.com/) - API

## 🌐 Live Demo

Check out the live demo: [Product App](https://product-app-lilac.vercel.app/)

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/cakradana/product-app.git
cd product-app
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

## 💾 State Management

This project uses Zustand for state management. The store includes:

- Product list management
- Search/filter state
- Wishlist management with local storage persistence
- Theme preference management

## 🎨 Theme System

The application supports dynamic theme switching with the following features:

- Toggle between light and dark modes
- Theme persistence across sessions using local storage
- Automatic styling updates using Tailwind's dark mode utilities
- Smooth theme transitions

## 🔍 API Integration

The application fetches data from DummyJSON's product API:

- Products List: `GET /products`
- Search Products: `GET /products/search?q={query}`

## 🎨 Styling

Tailwind CSS is used for styling with a responsive design approach. Custom utility classes are created for consistent styling across components. The theme system leverages Tailwind's dark mode features for seamless dark/light mode switching.

## 📱 Responsive Design

The application is fully responsive with breakpoints:

- Mobile: 320px - 480px
- Tablet: 481px - 768px
- Desktop: 769px and above

## 🚀 Building for Production

```bash
npm run build
```

This will create a `dist` folder with production-ready assets.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
