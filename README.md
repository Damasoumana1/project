# Health Outcomes Predict AI Dashboard

A modern web dashboard for community health analytics, enabling visualization, forecasting, and analysis of health trends using AI and data visualization.

## Main Features

- **Health Dashboard**: Overview of active cases, recoveries, health facilities, and AI predictions.
- **Interactive Maps**: Geographic visualization of diseases, risks, facilities, and vaccination coverage (Leaflet).
- **Epidemic Forecasts**: Trend and multi-disease forecasting charts (Chart.js).
- **Utilization Clusters**: Advanced user group analysis and personalized recommendations.
- **AI Recommendations**: Action suggestions based on predictive analytics.
- **Report Export**: Generate Excel or PDF reports.
- **Internationalization**: Multilingual interface (English/French).
- **Profile & Settings**: User profile management and customization.
- **Responsive Design**: Modern, elegant UI for all devices (Tailwind CSS, Lucide React).

## Project Structure

```
project/
├── src/
│   ├── components/      # Reusable UI components (Header, Sidebar, Footer, etc.)
│   ├── pages/           # Main pages (Home, Login, Register, Maps, Forecasts, etc.)
│   ├── utils/           # Utility functions (Excel/PDF export, etc.)
│   ├── i18n/            # Internationalization config
│   └── index.css        # Global styles (Tailwind)
├── public/              # Static files (favicon, etc.)
├── index.html           # HTML entry point
├── package.json         # Dependencies and scripts
├── tailwind.config.js   # Tailwind CSS config
├── vite.config.ts       # Vite config
└── ...
```

## Main Dependencies

- **React 18** (TypeScript) – UI framework
- **Vite** – Fast build tool
- **Tailwind CSS** – Utility-first CSS framework
- **Lucide React** – Icon library
- **react-router-dom** – SPA routing
- **react-i18next** – Internationalization
- **react-chartjs-2** & **chart.js** – Charts and graphs
- **react-leaflet** & **leaflet** – Interactive maps
- **xlsx**, **file-saver**, **jspdf**, **html2canvas** – Data export (Excel, PDF)
- **ESLint** – Code quality

## Installation & Usage

1. **Clone the repository**  
   ```sh
   git clone <repo-url>
   cd project
   ```

2. **Install dependencies**  
   ```sh
   npm install
   ```

3. **Start the development server**  
   ```sh
   npm run dev
   ```
   The app will be available at [http://localhost:5173](http://localhost:5173) (or the displayed port).

4. **Build for production**  
   ```sh
   npm run build
   ```

## Useful Scripts

- `npm run dev`: Start development mode
- `npm run build`: Build for production
- `npm run preview`: Preview the production build
- `npm run lint`: Run code quality checks

## Customization

- **Translations**: Edit/add languages in [`src/i18n/index.ts`](src/i18n/index.ts)
- **Add pages**: Create a file in [`src/pages/`](src/pages/)
- **Add components**: Create a file in [`src/components/`](src/components/)

## Contribution

Contributions are welcome!  
Please follow the project structure and code conventions (TypeScript, ESLint, Tailwind).

## License

This project is licensed under the MIT License.

---

**Contact**  
For questions or suggestions, contact the team via the [Contact](src/pages/Contact.tsx) page.
