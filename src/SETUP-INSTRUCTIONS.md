# Hudson & Co Marketing - Pre-Launch Setup Instructions

## ✅ Completed Items

The following has been implemented and is ready to go:

1. **SEO Meta Tags** - Fully configured in `/index.html`
2. **Mobile Responsive Design** - Tested and working with hamburger menu
3. **Clear CTA Above the Fold** - "Book a Call" button prominently displayed
4. **Form Structure** - Complete qualification form ready to capture leads
5. **Favicon** - Simple H logo in brand colors (black + gold)

---

## 🔧 Required Actions Before Going Live

### 1. Google Analytics Setup (5 minutes)

**File to edit:** `/index.html`

1. Sign up for Google Analytics 4 at [analytics.google.com](https://analytics.google.com)
2. Create a new property for Hudson & Co Marketing
3. Copy your Measurement ID (format: `G-XXXXXXXXXX`)
4. In `/index.html`, replace **both instances** of `GA_MEASUREMENT_ID` with your actual ID:
   ```html
   <!-- Line 37 -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   
   <!-- Line 42 -->
   gtag('config', 'G-XXXXXXXXXX');
   ```

---

### 2. Form Data Capture Setup (10 minutes)

**File to edit:** `/components/BookingForm.tsx`

Your booking form currently logs to console but doesn't send data anywhere. You have 3 options:

#### **Option A: Zapier Webhook (Recommended - Easiest)**

1. Create a free Zapier account at [zapier.com](https://zapier.com)
2. Create a new Zap with "Webhooks by Zapier" as the trigger
3. Choose "Catch Hook" and copy the webhook URL
4. In `/components/BookingForm.tsx` (line 36), replace:
   ```typescript
   const webhookUrl = 'ZAPIER_WEBHOOK_URL';
   ```
   with:
   ```typescript
   const webhookUrl = 'https://hooks.zapier.com/hooks/catch/xxxxx/yyyyy/';
   ```
5. Connect the Zap to:
   - Email (send to your inbox)
   - Google Sheets
   - CRM (HubSpot, Salesforce, etc.)
   - Slack notification

#### **Option B: Make.com (Integromat)**

Similar to Zapier but often cheaper for higher volumes.

1. Create account at [make.com](https://make.com)
2. Create webhook scenario
3. Replace webhook URL in BookingForm.tsx

#### **Option C: Direct Email Service**

Use services like:
- Formspree
- Getform
- EmailJS
- SendGrid API

---

### 3. Update Domain URLs in Meta Tags

**File to edit:** `/index.html`

Once you have your custom domain, update these lines (lines 18-27):

```html
<!-- Replace hudsoncomarketing.com with your actual domain -->
<meta property="og:url" content="https://YOURDOMAIN.com/" />
<meta property="twitter:url" content="https://YOURDOMAIN.com/" />
```

---

### 4. Create Open Graph Image (Optional but Recommended)

Create a 1200x630px image for social media sharing:

1. Use the Hudson & Co branding (black background, gold text)
2. Include: Logo + "Growth Execution for Founder-Led Businesses"
3. Save as `/public/og-image.jpg`
4. The meta tags in `/index.html` are already configured to use it

---

## 📊 Analytics Events Configured

The following events will automatically track in Google Analytics:

- **Form Submission** - When someone completes the booking form
  - Event Name: `form_submission`
  - Category: `Lead`
  - Label: `Booking Form Completed`
  - Value: Monthly revenue tier

You can add more events by using:
```typescript
gtag('event', 'event_name', {
  event_category: 'Category',
  event_label: 'Label',
  value: 'value'
});
```

---

## ✅ Pre-Launch Checklist

Before connecting your domain:

- [ ] Replace `GA_MEASUREMENT_ID` with actual Google Analytics ID
- [ ] Replace `ZAPIER_WEBHOOK_URL` with actual webhook URL (or remove if not using)
- [ ] Update domain URLs in meta tags
- [ ] Test form submission on staging
- [ ] Verify Zapier/webhook receives data correctly
- [ ] Check Google Analytics is receiving pageviews
- [ ] Test mobile menu on actual iPhone
- [ ] Create and upload og-image.jpg (optional)
- [ ] Update Calendly URL if different from `https://calendly.com/admin-hudsoncoventures/30min`

---

## 🎯 Conversion Tracking Recommendation

After launch, consider adding:

1. **Facebook Pixel** - For retargeting ads
2. **LinkedIn Insight Tag** - For B2B tracking
3. **Google Tag Manager** - Easier tag management
4. **Hotjar or Microsoft Clarity** - Session recording and heatmaps

---

## 📞 Support

If you need help with any of these setup steps, common issues:

1. **Zapier not receiving data**: Check CORS settings and webhook URL format
2. **Analytics not tracking**: Make sure ad blockers are disabled when testing
3. **Form not submitting**: Check browser console for errors
4. **Mobile menu not working**: Clear cache and hard refresh

---

**Last Updated:** Pre-launch setup
