import { Box, Typography, alpha } from "@mui/material";

const socialLinks = [
  { label: "X", href: "https://twitter.com/CSCegov" },
  { label: "FB", href: "https://facebook.com/CSCeGov" },
  { label: "YT", href: "https://youtube.com/@CSCegov" },
  { label: "IG", href: "https://instagram.com/CSCegov" },
  { label: "LN", href: "https://linkedin.com/company/csc-egov" },
];

interface Props {
  isDark?: boolean;
}

const GOV = {
  navy: "#0c2461",
  white: "#ffffff",
};

export default function DashboardFooter({ isDark }: Props) {
  return (
    <Box
      component="footer"
      sx={{
        flexShrink: 0,
        px: 3,
        py: 1.5,
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 1,
        bgcolor: isDark ? "#0b1f4d" : GOV.navy,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          flexWrap: "wrap",
        }}
      >
        <Typography sx={{ fontSize: "11px", color: alpha(GOV.white, 0.6) }}>
          © 2026 Ministry of Electronics & Information Technology, Government of India
        </Typography>
        <Box component="span" sx={{ color: alpha(GOV.white, 0.25) }}>|</Box>
        <Typography
          sx={{
            fontSize: "11px",
            color: alpha(GOV.white, 0.6),
            fontFamily: "Noto Sans Devanagari, sans-serif",
          }}
        >
          सर्वाधिकार सुरक्षित
        </Typography>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
        {["Terms of Use", "Privacy Policy", "Accessibility"].map((lbl, i, arr) => (
          <Box
            key={lbl}
            sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
          >
            <Typography
              sx={{
                fontSize: "11px",
                color: alpha(GOV.white, 0.6),
                cursor: "pointer",
                "&:hover": { color: GOV.white },
              }}
            >
              {lbl}
            </Typography>
            {i < arr.length - 1 && (
              <Box component="span" sx={{ color: alpha(GOV.white, 0.25) }}>
                |
              </Box>
            )}
          </Box>
        ))}
        <Box component="span" sx={{ color: alpha(GOV.white, 0.25) }}>|</Box>

        {/* Social Media */}
        {socialLinks.map((s, i, arr) => (
          <Box key={s.label} sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <Typography
              component="a"
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                fontSize: "11px",
                color: alpha(GOV.white, 0.6),
                cursor: "pointer",
                textDecoration: "none",
                "&:hover": { color: "#FF9933" },
              }}
            >
              {s.label}
            </Typography>
            {i < arr.length - 1 && (
              <Box component="span" sx={{ color: alpha(GOV.white, 0.25) }}>|</Box>
            )}
          </Box>
        ))}
        <Box component="span" sx={{ color: alpha(GOV.white, 0.25) }}>|</Box>
        <Typography sx={{ fontSize: "11px", color: alpha(GOV.white, 0.8) }}>
          Last Updated: June 2026
        </Typography>
      </Box>
    </Box>
  );
}
