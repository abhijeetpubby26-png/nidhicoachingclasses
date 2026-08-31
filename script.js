// EDIT YOUR NOTES HERE (FREE NO-DATABASE SYSTEM)
const notesData = [
  {
    id: 1,
    title: "Class 12 Chemistry: Solid State & Solutions",
    class: "12th",
    subject: "Chemistry",
    chapter: "Chapters 1 & 2",
    description: "Complete handwritten theory notes with solved numerical problems and previous year JEE questions.",
    price: "?49",
    fileLink: "YOUR_GOOGLE_DRIVE_OR_PDF_LINK_HERE"
  },
  {
    id: 2,
    title: "Class 12 Mathematics: Calculus Quick Revision",
    class: "12th",
    subject: "Mathematics",
    chapter: "Calculus",
    description: "Formula sheets, shortcut techniques, and step-by-step problem derivations.",
    price: "?59",
    fileLink: "YOUR_GOOGLE_DRIVE_OR_PDF_LINK_HERE"
  },
  {
    id: 3,
    title: "Class 10 Science: Board Exam Formulas & Reactions",
    class: "10th",
    subject: "Science",
    chapter: "Complete Syllabus",
    description: "Important reactions, diagrams, and key definitions for board preparation.",
    price: "?29",
    fileLink: "YOUR_GOOGLE_DRIVE_OR_PDF_LINK_HERE"
  }
];

// Function to load notes on page
function loadNotes() {
  const container = document.getElementById("notes-grid");
  container.innerHTML = "";

  notesData.forEach((note) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${note.title}</h3>
      <p><strong>Class:</strong> ${note.class} | <strong>Subject:</strong> ${note.subject}</p>
      <p><strong>Topic:</strong> ${note.chapter}</p>
      <p style="margin: 8px 0; font-size: 0.9rem;">${note.description}</p>
      <p style="font-size: 1.1rem; color: #28a745; font-weight: bold;">Price: ${note.price}</p>
      <button class="btn btn-buy" onclick="selectNote('${note.title}', '${note.price}')">Buy Now</button>
    `;
    container.appendChild(card);
  });
}

function selectNote(title, price) {
  document.getElementById("selected-note-title").innerText = title;
  document.getElementById("selected-note-price").innerText = price;
  
  const paymentBox = document.getElementById("payment-box");
  paymentBox.classList.remove("hidden");
  paymentBox.scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener("DOMContentLoaded", loadNotes);