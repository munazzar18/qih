import React from "react";
import Link from "next/link";
import "../../styles/style.css"; // Custom CSS file for hover effects and animations

const Page = () => {
  const specialties = [
    "Anesthesiology", "Audiology", "Bariatric Surgery", "Cardiac Surgery",
    "Cardiology", "Clinical Hematology and Bone Marrow Transplant", "Dentistry",
    "Dermatology", "Dietetics", "Endocrinology", "E.N.T. / Head & Neck Surgery",
    "Endocrine & Breast Surgery", "Gastroenterology", "General & Laparoscopic Surgery",
    "Geriatrics / Elderly Care", "Gynae / Obstetrics", "Hepatology and Liver Transplantation",
    "Infectious Disease", "Liver Surgery", "Medicine", "Nephrology", "Neurology",
    "Neurosurgery", "Oncology", "Orthopedic Surgery", "Oral & Maxillo-facial Surgery",
    "Ophthalmology", "Paediatrics", "Pathology", "Physiotherapy",
    "Plastic / Reconstructive / Cosmetic Surgery", "Psychiatry", "Pulmonology / Critical Care",
    "Radiology", "Rheumatology", "Speech Therapy", "Urology",
    "Vascular & Endo Vascular Surgery", "Nuclear Medicine", "Paediatrics Surgery",
    "Pain Management",
  ];

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Medical Specialties</h1>
      <div className="row g-3">
        {specialties.map((specialty, index) => (
          <div className="col-6 col-md-4 col-lg-3" key={index}>
            <Link
              href={`/${specialty.replace(/\s+/g, "-").toLowerCase()}`}
              className="text-decoration-none"
            >
              <div className="card specialty-card text-white shadow-sm">
                <div className="card-body text-center">
                  <h6 className="card-title">{specialty}</h6>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
