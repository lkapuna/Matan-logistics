const contactEmail = "office@matan-logistics.co.il";

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("leadForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const form = event.currentTarget;
  const data = new FormData(form);
  const subject = "פנייה חדשה מהאתר - מתן לוגיסטיקה";
  const body = [
    "שלום מתן לוגיסטיקה,",
    "",
    "נשלחה פנייה חדשה מהדף:",
    `שם: ${data.get("name") || ""}`,
    `טלפון: ${data.get("phone") || ""}`,
    `עסק: ${data.get("business") || ""}`,
    `שירות מבוקש: ${data.get("service") || ""}`,
    "",
    `פרטים נוספים: ${data.get("message") || ""}`,
  ].join("\n");

  const mailtoUrl = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoUrl;

  document.getElementById("formNote").textContent =
    "פתחנו לכם הודעת מייל עם הפרטים. אם המייל לא נפתח, אפשר להעתיק את הפרטים ולשלוח ידנית.";
});
