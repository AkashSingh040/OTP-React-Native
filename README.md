# 📱 OTP-Based React Native Frontend (Android)

This repository contains a **React Native (Expo) mobile frontend application** that implements an **OTP-based onboarding flow** for a sports-focused app.

The project was built as part of a **technical assignment for an SDE Intern role** and focuses on frontend architecture, API consumption, and user-centric UX refinement.

> **Scope Note:**  
> This is a **frontend client application**. It does **not serve APIs** — it **consumes provided backend APIs**.

---

## 🔐 Authentication Flow

1. User enters mobile number  
2. OTP is sent via backend API  
3. OTP is verified on the client  
4. User proceeds to onboarding flow  

This reflects **real-world mobile authentication patterns** used in modern mobile apps.

---

## 🚀 Features

- 📞 Mobile number login with OTP verification  
- 🧾 Mandatory basic details  
  - Name  
  - Address  
  - Pincode  
- 🏏 Sports preferences  
  - Playing status (single-select dropdown)  
  - Multi-select sports with removable chips  
  - Duplicate selection prevented  
- 💬 Feedback screen  
  - Fixed-size input box  
  - Character counter  
- 📋 Summary screen  
  - Structured preview of entered data  
- 🔙 Back navigation on every screen  
- 🎨 Consistent dark theme UI  
- 📦 Android APK generated using Expo EAS  

---

## 🧠 Design & Implementation Decisions

- APIs are consumed using `fetch` for OTP send and verification.
- Backend persistence and business logic are assumed to exist externally.
- Figma designs were used as a **reference**, with UX refinements applied for:
  - Better spacing and hierarchy  
  - Improved mobile usability  
  - Sports-centric interactions  
- No third-party UI libraries were used to keep the implementation minimal and transparent.

---

## ⚙️ Tech Stack

- React Native  
- Expo  
- Expo Router  
- JavaScript  
- EAS Build (Android APK)  

---

## ▶️ Running Locally

### Prerequisites
- Node.js (v16 or higher)
- Expo CLI

### Steps

```bash
git clone https://github.com/<your-username>/react-native-otp-frontend.git
cd react-native-otp-frontend
npm install
npm start
