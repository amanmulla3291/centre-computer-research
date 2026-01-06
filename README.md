# Centre for Computer Research - Website

Professional academic project consultancy website for MSc, MCA, and B.E./B.Tech students.

## 📦 What's Included

### Frontend (React)
- **Pages**: Home, Projects, Research Projects, About Us, FAQ, Contact
- **Components**: Header, Footer, Shadcn UI components
- **Styling**: Tailwind CSS with custom theme
- **Features**: Interactive tabs, accordions, forms with validation

### Backend (FastAPI)
- Basic API structure with MongoDB integration
- CORS configured for development
- Ready for expansion

## 🚀 Quick Setup

### Prerequisites
- Node.js (v16+)
- Python (v3.8+)
- MongoDB

### Frontend Setup
```bash
cd frontend
npm install
# or
yarn install

# Start development server
npm start
# or
yarn start
```

The app will run on `http://localhost:3000`

### Backend Setup
```bash
cd backend
pip install -r requirements.txt

# Create .env file with:
MONGO_URL=mongodb://localhost:27017
DB_NAME=centre_computer_research
REACT_APP_BACKEND_URL=http://localhost:8001

# Run server
uvicorn server:app --host 0.0.0.0 --port 8001 --reload
```

## 🎨 Color Scheme
- **Primary (Navy Blue)**: #1e3a8a
- **Accent (Teal)**: #0d9488
- **Background**: White / Light Gray

## 📝 Customization

### Update Contact Information
1. **Header.jsx** - Update WhatsApp link
2. **Footer.jsx** - Update email and phone
3. **Contact.jsx** - Update contact details in cards

### Replace Placeholders
- WhatsApp: `+91 XXXXXXXXXX`
- Email: `contact@centrecomputerresearch.in`

### Add Your Logo
Replace text-based header in `Header.jsx` with your logo image.

## 📄 Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── ui/          # Shadcn components
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Projects.jsx
│   │   ├── ResearchProjects.jsx
│   │   ├── About.jsx
│   │   ├── FAQ.jsx
│   │   └── Contact.jsx
│   ├── App.js
│   ├── App.css
│   └── index.css
├── public/
└── package.json

backend/
├── server.py
└── requirements.txt
```

## 🌟 Features

- **18 Ready-to-Sell Projects** across 3 domains
- **8 Research Projects** with IEEE references
- **15 Comprehensive FAQs**
- **Responsive Design** - Mobile, Tablet, Desktop
- **Professional Forms** with validation
- **Interactive UI** - Tabs, Accordions, Modals
- **WhatsApp Integration** for instant contact

## 🔧 Technologies Used

### Frontend
- React 19
- React Router DOM
- Tailwind CSS
- Shadcn UI
- Lucide React (Icons)
- Axios

### Backend
- FastAPI
- Motor (MongoDB async driver)
- Pydantic
- Python-dotenv

## 📞 Support

For any issues or customization needs, refer to the component documentation in the `frontend/src/components/ui/` directory.

## 📄 License

This is a custom-built website. Modify as needed for your use case.

---

**Built with ❤️ for Centre for Computer Research**
