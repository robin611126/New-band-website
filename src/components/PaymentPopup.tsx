"use client";

import { useEffect, useState } from "react";

export function PaymentPopup() {
  const [mounted, setMounted] = useState(false);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    setMounted(true);

    const interval = setInterval(() => {
      setPulse(true);
      setTimeout(() => setPulse(false), 800);
    }, 3500);

    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      e.preventDefault();
      e.stopPropagation();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  if (!mounted) return null;

  return (
    <>
      <style>{`
        @keyframes popupFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes popupSlideUp {
          from { opacity: 0; transform: translateY(40px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes floatOrb1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -20px) scale(1.1); }
          66% { transform: translate(-20px, 15px) scale(0.9); }
        }
        @keyframes floatOrb2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-25px, 25px) scale(1.15); }
          66% { transform: translate(15px, -30px) scale(0.85); }
        }
        @keyframes borderGlow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.7; }
        }
        @keyframes iconBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
      `}</style>

      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 999999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(ellipse at 30% 20%, rgba(198, 167, 94, 0.08) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(92, 10, 24, 0.10) 0%, transparent 50%), rgba(5, 5, 5, 0.94)",
          backdropFilter: "blur(20px) saturate(1.2)",
          WebkitBackdropFilter: "blur(20px) saturate(1.2)",
          pointerEvents: "all",
          animation: "popupFadeIn 0.6s ease-out",
        }}
        onContextMenu={(e) => e.preventDefault()}
      >
        {/* Floating orbs — gold & maroon */}
        <div
          style={{
            position: "absolute",
            top: "15%",
            left: "20%",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(198, 167, 94, 0.07) 0%, transparent 70%)",
            animation: "floatOrb1 8s ease-in-out infinite",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            right: "15%",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(92, 10, 24, 0.06) 0%, transparent 70%)",
            animation: "floatOrb2 10s ease-in-out infinite",
            pointerEvents: "none",
          }}
        />

        {/* Glass Card */}
        <div
          style={{
            position: "relative",
            background:
              "linear-gradient(135deg, rgba(245, 240, 230, 0.06) 0%, rgba(198, 167, 94, 0.03) 50%, rgba(245, 240, 230, 0.05) 100%)",
            backdropFilter: "blur(40px) saturate(1.5)",
            WebkitBackdropFilter: "blur(40px) saturate(1.5)",
            borderRadius: "24px",
            padding: "52px 44px 44px",
            maxWidth: "540px",
            width: "90%",
            textAlign: "center",
            border: "1px solid rgba(198, 167, 94, 0.18)",
            boxShadow: pulse
              ? "0 0 80px rgba(198, 167, 94, 0.20), 0 0 160px rgba(92, 10, 24, 0.10), inset 0 1px 0 rgba(245, 240, 230, 0.08)"
              : "0 8px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(198, 167, 94, 0.06), inset 0 1px 0 rgba(245, 240, 230, 0.08)",
            transition: "box-shadow 0.5s ease",
            animation: "popupSlideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
            userSelect: "none",
            overflow: "hidden",
          }}
        >
          {/* Top highlight line — gold */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: "10%",
              right: "10%",
              height: "1px",
              background:
                "linear-gradient(90deg, transparent, rgba(198, 167, 94, 0.4), transparent)",
              animation: "borderGlow 3s ease-in-out infinite",
            }}
          />

          {/* Inner glass glow */}
          <div
            style={{
              position: "absolute",
              top: "-50%",
              left: "-20%",
              width: "140%",
              height: "100%",
              background:
                "radial-gradient(ellipse, rgba(198, 167, 94, 0.04) 0%, transparent 60%)",
              pointerEvents: "none",
            }}
          />

          {/* Lock Icon */}
          <div
            style={{
              width: "72px",
              height: "72px",
              margin: "0 auto 24px",
              borderRadius: "20px",
              background:
                "linear-gradient(135deg, rgba(198, 167, 94, 0.18) 0%, rgba(92, 10, 24, 0.14) 100%)",
              border: "1px solid rgba(198, 167, 94, 0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "32px",
              animation: "iconBounce 2.5s ease-in-out infinite",
              backdropFilter: "blur(10px)",
            }}
          >
            🔒
          </div>

          {/* Title — Playfair Display */}
          <h2
            style={{
              fontSize: "28px",
              fontWeight: 700,
              margin: "0 0 8px 0",
              letterSpacing: "0.5px",
              fontFamily: "var(--font-serif)",
              background:
                "linear-gradient(135deg, #F5F0E6 0%, rgba(245, 240, 230, 0.7) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Website Paused
          </h2>

          {/* Subtitle — gold */}
          <p
            style={{
              color: "#C6A75E",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "2.5px",
              textTransform: "uppercase",
              margin: "0 0 28px 0",
              fontFamily: "var(--font-sans)",
            }}
          >
            Payment Required
          </p>

          {/* Message — ivory */}
          <p
            style={{
              color: "rgba(245, 240, 230, 0.7)",
              fontSize: "16px",
              lineHeight: 1.8,
              margin: "0 0 32px 0",
              fontWeight: 400,
              fontFamily: "var(--font-sans)",
            }}
          >
            This website has been temporarily suspended due to an{" "}
            <span
              style={{
                color: "#F5F0E6",
                fontWeight: 600,
                background:
                  "linear-gradient(135deg, rgba(198, 167, 94, 0.25), rgba(92, 10, 24, 0.2))",
                padding: "2px 8px",
                borderRadius: "4px",
              }}
            >
              outstanding balance
            </span>
            . Please clear the pending payment to restore full access.
          </p>

          {/* Divider — gold gradient */}
          <div
            style={{
              width: "80px",
              height: "2px",
              background:
                "linear-gradient(90deg, #BF953F, #FCF6BA, #B38728)",
              margin: "0 auto 28px auto",
              borderRadius: "2px",
            }}
          />

          {/* Agency Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background:
                "linear-gradient(135deg, rgba(245, 240, 230, 0.05) 0%, rgba(198, 167, 94, 0.03) 100%)",
              border: "1px solid rgba(198, 167, 94, 0.12)",
              borderRadius: "100px",
              padding: "10px 24px",
              backdropFilter: "blur(10px)",
            }}
          >
            {/* Lightning bolt icon */}
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "28px",
                height: "28px",
                borderRadius: "8px",
                background:
                  "linear-gradient(135deg, rgba(198, 167, 94, 0.35), rgba(92, 10, 24, 0.3))",
                fontSize: "14px",
              }}
            >
              ⚡
            </span>
            <span
              style={{
                fontSize: "14px",
                fontWeight: 600,
                background:
                  "linear-gradient(90deg, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "shimmer 3s linear infinite",
                letterSpacing: "0.5px",
                fontFamily: "var(--font-sans)",
              }}
            >
              Get Web Fast
            </span>
          </div>

          {/* Contact line */}
          <p
            style={{
              color: "rgba(245, 240, 230, 0.30)",
              fontSize: "12px",
              margin: "20px 0 0 0",
              letterSpacing: "0.3px",
              fontFamily: "var(--font-sans)",
            }}
          >
            Please contact the developer to resolve this matter.
          </p>
        </div>
      </div>
    </>
  );
}
