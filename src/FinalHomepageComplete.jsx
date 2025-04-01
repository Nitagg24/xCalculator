import React from "react";
import { Calendar } from "lucide-react";

export default function FinalHomepageComplete() {
  // Color variables
  const colors = {
    navyHeader: "#1a3158",
    tealBanner: "#4a7c82",
    tealBackground: "#4a7c82",
    tealTag: "#5b8c91",
    yellowButton: "#f8b84e",
    subheadingColor: "#ffffff", // White for better contrast
  };

  return (
    <div className="font-sans">
      <div
        style={{ backgroundColor: colors.navyHeader }}
        className="text-white p-4 flex items-center justify-between"
      >
        <div className="flex items-center space-x-4">
          <span>Forest Path Psychiatry Logo</span>
          <h1 className="text-xl font-bold">FOREST PATH PSYCHIATRY</h1>
        </div>
      </div>

      <div
        style={{ backgroundColor: colors.tealBanner }}
        className="text-white p-4 flex items-center justify-center"
      >
        <Calendar className="mr-2" />
        <span className="text-center">
          SAME-WEEK APPOINTMENTS AVAILABLE | ONLINE PSYCHIATRIC CARE THROUGHOUT
          COLORADO
        </span>
      </div>

      <div
        style={{ backgroundColor: colors.tealBackground }}
        className="text-white px-12 py-10"
      >
        <div className="max-w-4xl mx-auto">
          <h1
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: "2.75rem",
              lineHeight: "1.2",
              marginBottom: "1.5rem",
              fontWeight: "700",
              letterSpacing: "-0.5px",
            }}
          >
            Psychiatric Care That Actually Feels Human, One Conversation at a
            Time
          </h1>

          <p
            style={{
              color: colors.subheadingColor,
              fontSize: "1.35rem",
              marginBottom: "2rem",
              fontStyle: "italic",
              lineHeight: "1.4",
            }}
          >
            Psychiatric Nurse Practitioners: 100% focused on your mental health
            care and dedicated to spending more time with you.
          </p>

          <p
            style={{
              fontSize: "1.125rem",
              lineHeight: "1.6",
              marginBottom: "2rem",
            }}
          >
            We believe psychiatric care should be life affirming and welcoming.
            Our team combines evidence-based treatment with genuine warmth while
            creating a safe haven where everyone belongs. Yes, we exist!
          </p>

          <p
            style={{
              fontSize: "1.25rem",
              fontWeight: "500",
              marginBottom: "1rem",
            }}
          >
            We're here for you through:
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {[
              "Depression & Anxiety",
              "Trauma & PTSD",
              "OCD & Anxiety Disorders",
              "ADHD & Focus Challenges",
              "Substance Use",
              "Mood & Bipolar Disorders",
              "Grief & Loss",
              "Life Transformations",
              "Oncology Support",
              "Postpartum Challenges",
              "Medically Complex Conditions",
            ].map((tag) => (
              <span
                key={tag}
                style={{
                  backgroundColor: colors.tealTag,
                  borderRadius: "9999px",
                  padding: "0.5rem 1rem",
                  fontSize: "0.875rem",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <p
            style={{
              fontSize: "1.25rem",
              fontWeight: "500",
              marginTop: "2rem",
              marginBottom: "1rem",
            }}
          >
            Our inclusive practice welcomes everyone, including:
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {[
              "LGBTQ+ Community & All Gender Identities",
              "BIPOC Individuals",
              "Healthcare Professionals",
              "Adolescents & Young Adults",
              "Artists & Creative Thinkers",
              "Those Feeling Overwhelmed by Life's Challenges",
              "Nature Lovers",
            ].map((tag) => (
              <span
                key={tag}
                style={{
                  backgroundColor: colors.tealTag,
                  borderRadius: "9999px",
                  padding: "0.5rem 1rem",
                  fontSize: "0.875rem",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mb-8">
            <button
              style={{
                backgroundColor: colors.yellowButton,
                color: "#000000",
                fontWeight: "bold",
                padding: "0.75rem 2rem",
                borderRadius: "9999px",
                fontSize: "1.125rem",
                border: "none",
                cursor: "pointer",
              }}
            >
              BOOK YOUR INITIAL VISIT
            </button>
          </div>

          <div
            style={{
              backgroundColor: "rgba(73, 124, 130, 0.5)",
              borderRadius: "0.5rem",
              padding: "1.5rem",
              marginBottom: "2rem",
            }}
          >
            <p style={{ marginBottom: "1rem" }}>
              We work with most major insurance providers:
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
              {["Aetna", "BCBS", "Cigna", "Optum", "Oscar", "United"].map(
                (insurance) => (
                  <span
                    key={insurance}
                    style={{
                      backgroundColor: "white",
                      color: "#333",
                      padding: "0.5rem 1rem",
                      borderRadius: "0.5rem",
                      fontWeight: "500",
                    }}
                  >
                    {insurance}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="mb-10">
            <a
              href="#team"
              style={{
                color: "white",
                textDecoration: "none",
                borderBottom: "1px solid white",
                paddingBottom: "0.25rem",
              }}
            >
              Meet our 6 amazing psychiatric nurse practitioners →
            </a>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: "#f0f9fa", padding: "2rem" }}>
        <div style={{ maxWidth: "4xl", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1rem",
            }}
          >
            {[1, 2, 3, 4, 5, 6].map((member) => (
              <div
                key={member}
                style={{
                  backgroundColor: colors.tealBackground,
                  color: "white",
                  padding: "4rem",
                  borderRadius: "0.5rem",
                  border: "2px solid white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Team member {member}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
