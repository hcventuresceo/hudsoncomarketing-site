# 🚀 Quick Setup Guide - 2 Actions Required

## ⚡ 5-Minute Setup

### 1️⃣ Google Analytics (Required)

**File:** `/index.html` (lines 37 & 42)

```bash
# Find and replace BOTH instances of:
GA_MEASUREMENT_ID

# With your actual ID (format: G-XXXXXXXXXX)
# Get it from: analytics.google.com
```

---

### 2️⃣ Form Webhook (Required)

**File:** `/components/BookingForm.tsx` (line 36)

**Easiest option - Zapier:**
1. Go to zapier.com → Create Zap
2. Trigger: "Webhooks by Zapier" → "Catch Hook"
3. Copy webhook URL
4. Replace in code:

```typescript
// Change this line:
const webhookUrl = 'ZAPIER_WEBHOOK_URL';

// To this (with your actual URL):
const webhookUrl = 'https://hooks.zapier.com/hooks/catch/12345/abcde/';
```

5. Connect Zap to Email/Google Sheets/Slack

---

## ✅ Everything Else is Done

- ✅ SEO meta tags configured
- ✅ Mobile responsive with hamburger menu
- ✅ Analytics event tracking ready
- ✅ Form validation working
- ✅ Favicon created
- ✅ CTA above the fold
- ✅ Professional conversion-focused design

---

## 📝 Optional Updates

After domain connection:
- Update domain URLs in `/index.html` (lines 18-27)
- Create 1200x630 social image as `/public/og-image.jpg`

---

**That's it! Just 2 changes and you're live. 🎉**

Full details: See `/SETUP-INSTRUCTIONS.md`
