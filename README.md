# 📈 IPO_Website – Frontend

This repository contains the **frontend** implementation of the **IPO Web Application** developed for **Bluestock Fintech**. The goal is to provide a user-friendly web interface to display comprehensive IPO-related data to users and enable seamless management via an admin dashboard.

---

## 🔗 Live Figma Designs

- **UI/UX Design**: [Figma Design Link](https://www.figma.com/design/aNuWMnlnjXdsVgCP350ftH/IPO-Web-App---M2-J1?node-id=0-1)
- **System Design**: [Figma System Board](https://www.figma.com/board/g9bjreevYNJkfMuwRacyaP/System-Design)

---

## 🧩 Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript (ES6)** – *No frameworks like React or Angular used*
- **Bootstrap 5** – *Integrated via CDN*

> This project does not use any JavaScript frameworks or NodeJS. Only plain HTML/CSS/JS and Bootstrap are used for layout and responsiveness.

## 🖥️ Frontend Pages Overview

### 🏠 1. Home Page
- Displays a list of IPOs categorized as:
  - **Upcoming**
  - **Ongoing**
  - **Listed**
- Each IPO card shows:
  - Company logo
  - Company name
  - Status badge
  - Opening/closing dates
  - Listing gain (if applicable)
- Users can:
  - Search by IPO/company name
  - Filter by IPO status

### 📄 2. IPO Detail Page
- Contains full information for a selected IPO:
  - Company details
  - Price band
  - Issue size & type
  - IPO & listing price
  - Current market price (CMP)
  - Listing gain & current return
  - Listing date
- **Download buttons** for RHP & DRHP PDF files

### 🔐 3. Admin Dashboard
- **Login-protected interface**
- Features:
  - Create, update, delete IPO entries
  - Upload company logos
  - Upload PDF files for RHP & DRHP
  - Full control over all IPO data fields
- Admin forms include date pickers, file upload controls, and validation
