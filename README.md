# 🏔️ OxyAltitude: Altitude-Based Oxygen & Health Risk Assessment System

> **Project Title:** Altitude-Based Oxygen & Health Risk Assessment System  
> **Team Name:** Warriors  
> **Team Lead:** Ramjali, Dilip — Student ID: `24151017` — `ramjalidilipramjali@gmail.com`  
> **Team Member:** Mishra, Shriyanshu — Student ID: `24151552` — `shriyanshumishra2@gmail.com`  
> **Team Member:** Akash — Student ID: `24151479` — `Ay376648@gmail.com`  

---

## 🚀 Quick Run Instructions

### 1. Direct Browser Launch (Simplest)
- Double-click [`index.html`](file:///c:/Users/Shriyanshu/Desktop/pbl_5th/index.html) to open the application in Google Chrome or Microsoft Edge.
- Everything runs 100% locally in your browser.

### 2. Local Server Launch
- Double-click [`start_server.bat`](file:///c:/Users/Shriyanshu/Desktop/pbl_5th/start_server.bat) to launch a local server at `http://localhost:3000`.

---

## 🎯 What This System Does

1. **User Health Inputs:**
   - **Current Altitude** (in meters, e.g. 1,000m, 2,500m, 3,500m, 5,000m).
   - **Blood Oxygen (SpO₂ %)** (measured from a pulse oximeter).
   - **Heart Rate / Pulse (bpm)** and **Age**.
   - **Symptoms Checklist:** Simple checkboxes for Headache, Dizziness, Nausea, Fatigue, and Shortness of Breath.

2. **Instant 3-Tier Risk Classification:**
   - 🟢 **Low Risk (Green):** Normal oxygen levels and physiological adaptation for the elevation.
   - 🟡 **Moderate Risk (Yellow):** Early Acute Mountain Sickness (AMS) or oxygen desaturation. Ascent should be halted.
   - 🔴 **High Risk (Red):** Critical hypoxia or severe altitude sickness symptoms. Immediate descent mandated.

3. **Safety Guidance & Acclimatization Tips:**
   - Actionable guidelines adapted from CDC and Wilderness Medical Society recommendations (Hydration, 24–48h rest, descent protocol).

4. **Assessment History & Export:**
   - Saves all assessments in your browser's local memory.
   - View past records in a clean table and export data directly to CSV.

5. **Team Profile Management:**
   - Click the profile button in the top right to switch between **Dilip Ramjali**, **Shriyanshu Mishra**, and **Akash**.

---

## 🎤 Simple 3-Minute Demo Guide for Evaluation

When showing this project to your evaluators, use the **3 Demo Scenarios** buttons:

1. **Click "🟢 Healthy (Low Risk)":**
   - Shows altitude at **3,500m**, SpO₂ at **94%**, and no symptoms.
   - Output: **Low Risk** — explains that 94% is a healthy compensated baseline at 3,500m.

2. **Click "🟡 Moderate AMS":**
   - Shows altitude at **3,500m**, SpO₂ at **88%**, with **Headache** and **Dizziness** checked.
   - Output: **Moderate Risk** — advises staying at current elevation for 24h rest and hydration before continuing.

3. **Click "🔴 Critical High Risk":**
   - Shows altitude at **4,800m**, SpO₂ at **73%**, pulse at **118 bpm**, and **Shortness of breath at rest**.
   - Output: **High Risk Alert** — advises immediate descent of at least 500–1,000 meters and emergency care.

4. **Show the History Tab:**
   - Click the **"📜 History Records"** tab to show saved logs and the **"📥 Export to CSV"** button.

---

## 📁 Project Structure

```text
pbl_5th/
├── index.html                  # Simple, clean Single Page Application
├── start_server.bat            # 1-click Windows local server launcher
├── README.md                   # Project documentation & presentation guide
├── css/
│   └── styles.css              # Clean, modern UI styling
└── js/
    ├── altitude-calculator.js  # Simple 3-tier risk logic engine
    ├── storage.js              # LocalStorage manager and sample history data
    └── app.js                  # User interaction and form event handler
```
