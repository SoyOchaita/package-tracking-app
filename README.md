# 📦 Package Tracking App

This project is a **responsive Angular web application** that simulates a basic package tracking system.
It allows users to create delivery orders, update their delivery status, and track shipments following a strict process flow.

---

## 🚀 Features

* Create new orders with validation (sender name, address, email, description).
* Generate a unique tracking code (12 random letters, no numbers).
* Update package status according to the defined workflow:

  * **Creado → En preparación → En tránsito → Entregado / No entregado**
* Track package history with full update records.
* Responsive dark theme interface using **Bootstrap 5**.
* Two layouts: desktop and mobile.

---

## 🧹 Technologies Used

| Tool                | Purpose                              |
| ------------------- | ------------------------------------ |
| **Angular 17+**     | Main front-end framework             |
| **TypeScript**      | Strongly-typed scripting language    |
| **Bootstrap 5.3**   | UI design and responsive layout      |
| **HTML5 / CSS3**    | Core web technologies                |
| **Node.js / npm**   | Dependency management                |
| *(Optional)* Docker | Containerized setup (for deployment) |

---

## 🧱 Project Structure

```
package-tracking-app/
│
├── src/
│   ├── app/
│   │   ├── pages/
│   │   │   ├── create-order/
│   │   │   ├── update-order/
│   │   │   └── track-order/
│   │   ├── services/
│   │   │   └── order.ts
│   │   └── app.ts / app.html
│   ├── assets/
│   └── styles.css
│
├── angular.json
├── package.json
├── README.md
└── .gitignore
```

---

## ⚙️ Installation Instructions

### 1️⃣ Clone the repository

```bash
git clone https://github.com/SoyOchaita/package-tracking-app.git
cd package-tracking-app
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run the Angular development server

```bash
ng serve -o
```

> The app will open automatically in your browser at
> **[http://localhost:4200](http://localhost:4200)**

---

## 💻 How to Use

### 🟢 Create Order

* Go to **"Crear Orden"**.
* Enter sender name, full address, valid Gmail or Outlook email, and description.
* Press **Create Order** to register.
* A tracking code will be generated automatically and can be copied to the clipboard.

### 🟡 Update Order

* Go to **"Actualizar Orden"**.
* Enter the tracking code to find the package.
* Change the status following the allowed flow:

  * *Creado → En preparación → En tránsito → Entregado / No entregado*
* Add a short comment and the responsible person's name.

### 🔵 Track Order

* Go to **"Seguimiento de Paquete"**.
* Enter the tracking code to view all updates and the current status.
* The history table will adapt to desktop or mobile view automatically.

---

## 📱 Responsive Design

The website adapts to two main screen sizes:

| Device               | Layout Behavior                                                       |
| -------------------- | --------------------------------------------------------------------- |
| **Desktop (≥992px)** | Navigation bar horizontal, wide cards, tables for updates.            |
| **Mobile (≤768px)**  | Buttons stacked vertically, forms compressed, updates shown as cards. |

---

## 👨‍💻 Author

**Alfonso Enrique Ochaita Moreno**
*Universidad Mesoamericana de Guatemala*
📚 *Course:* Programación Web
🗓️ *Semester:* VI, 2025
📧 Email: [alfonsochaita@gmail.com](mailto:alfonsochaita@gmail.com)
🔗 GitHub: [github.com/SoyOchaita](https://github.com/SoyOchaita)

---

## 📜 License

This project is for educational purposes and university evaluation only.
You are free to fork and use it for non-commercial academic use.

---
