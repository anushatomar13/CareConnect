# 🤖 CareConnect - Healthcare Patient Management App

CareConnect is a modern healthcare patient management application built using Next.js and Appwrite. This app enables patients to register, book, and manage their appointments with doctors. It also provides administrators with tools for scheduling, confirming, and canceling appointments, along with SMS notifications using Twilio.

This is a learning-based project that I made while trying to learn Next.js, Appwrite, and ShadCN.

---

## ⚙️ Tech Stack

- **Next.js** - React framework for production-grade applications
- **Appwrite** - Backend-as-a-service for authentication, databases, and storage
- **TypeScript** - Ensures type safety and scalability
- **TailwindCSS** - Utility-first styling framework for a responsive UI
- **ShadCN** - Beautiful and customizable UI components
- **Twilio** - SMS notifications for appointment confirmation
- **Sentry** - Performance monitoring and error tracking

---

## 🔋 Features

✅ **Patient Registration** - Users can sign up and create a personal profile as a patient.  
✅ **Book Appointments** - Patients can schedule appointments with doctors conveniently.  
✅ **Admin Dashboard** - Manage, confirm, and cancel appointments efficiently.  
✅ **SMS Notifications** - Patients receive SMS confirmations via Twilio.  
✅ **File Upload** - Secure file storage using Appwrite.  
✅ **Mobile-Responsive** - Seamlessly works on all devices and screen sizes.  
✅ **Performance Monitoring** - Tracks errors and performance using Sentry.  
✅ **Role-Based Access** - Admins and patients have different levels of access.  
✅ **Modern UI** - Built with TailwindCSS and ShadCN for a sleek design.  

---

## 🚀 Quick Start

### Prerequisites
Make sure you have the following installed:
- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/)

### Clone the Repository
```bash
git clone https://github.com/adrianhajdin/healthcare.git
cd healthcare
```

### Install Dependencies
```bash
npm install
```

### Set Up Environment Variables
Create a `.env.local` file in the root directory and add the following:
```env
# Appwrite Configuration
NEXT_PUBLIC_ENDPOINT=https://cloud.appwrite.io/v1
PROJECT_ID=
API_KEY=
DATABASE_ID=
PATIENT_COLLECTION_ID=
APPOINTMENT_COLLECTION_ID=
NEXT_PUBLIC_BUCKET_ID=

NEXT_PUBLIC_ADMIN_PASSKEY=111111
```
Replace placeholder values with your actual **Appwrite** credentials.

### Run the Project
```bash
npm run dev
```
Visit **[http://localhost:3000](http://localhost:3000)** to access the application.

