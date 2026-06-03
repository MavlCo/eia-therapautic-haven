# EIA Therapeutic Haven — Master Design Brief for Stitch AI

**Project:** Premium 2D animated marketing website
**Client:** EIA Therapeutic Haven (legal: EIA Therapeutic Haven Wellness and Natural Products Ltd)
**Designer role:** Senior UI/UX Designer
**Deliverable:** Fully responsive, advanced-animated, multi-page website
**Tagline:** *Nourishing you. Naturally.*

---

## 0. How to Read This Brief

You are designing a calm, premium, faith-aware **mental wellness and emotional clarity practice** that serves the Nigerian diaspora (UK, USA, Canada) and local clients online. Every screen must feel like exhaling — spacious, soft, trustworthy, and quietly confident. This is NOT a clinical hospital site and NOT a loud coaching funnel. It sits between a high-end therapy practice and a serene wellness retreat.

**The single most important emotional outcome:** a stressed, overwhelmed visitor should feel *"I am safe here, and these people understand me"* within 3 seconds of landing.

Read every section before designing. Sections 1–6 are global rules; Sections 7+ are page-by-page.

---

## 1. Brand DNA & Design Principles

### Brand personality
Calm · Premium · Compassionate · Structured · Faith-aware · Trustworthy.

### Five design principles (apply to every decision)
1. **Breathing room over density.** Generous whitespace is the primary luxury signal. When in doubt, add space, not elements.
2. **Soft, never sterile.** Rounded geometry, organic blob shapes, hand-drawn botanical line accents — warmth over corporate sharpness.
3. **Motion as reassurance.** Animation must feel like a slow inhale/exhale — never bouncy, jarring, or attention-grabbing. Everything eases gently.
4. **Structured clarity.** Despite the softness, information is impeccably organized. The brand sells *structure* for chaotic minds — the layout must visibly demonstrate it.
5. **Inclusive faith.** Christian undertones appear as optional warmth (a verse, a gentle line), never as pressure. Faith elements are quiet, opt-in, and never the first thing a non-religious visitor sees.

### Unique layout mandate (must avoid generic templates)
Do **NOT** use the standard "centered hero + 3 feature cards + testimonial slider + footer" SaaS template. Instead build the site around a signature device described below.

**Signature layout device — "The Breathing Canvas":**
A soft, off-center asymmetric grid where content sits on an invisible 12-column field but deliberately breaks alignment — text columns shift left, imagery floats right into the margin, and large organic "blob" shapes drift slowly behind content. A thin vertical "breath line" (1px sage hairline) runs down the left third of most sections as a continuity spine, occasionally branching into hand-drawn botanical sprigs. Section transitions use soft horizontal waves rather than hard edges. This asymmetry + spine + organic-blob system is the unique visual fingerprint that must repeat across all pages.

---

## 2. Color System

| Token | Hex | Usage |
|---|---|---|
| `--sage-deep` | `#5A6B57` | Primary brand green, headings, logo, primary buttons |
| `--sage` | `#7C8B74` | Secondary green, icons, accents, hairlines |
| `--sage-mist` | `#AEB9A4` | Muted green, borders, disabled states |
| `--cream` | `#F6F3EC` | Primary background |
| `--cream-warm` | `#EFE9DD` | Alternate section background |
| `--ivory` | `#FCFAF5` | Card surfaces, elevated panels |
| `--clay` | `#C8B6A0` | Warm neutral accent, dividers, subtle CTAs |
| `--terracotta-soft` | `#D8A98E` | Single warm highlight for key CTAs / hover glow only |
| `--ink` | `#33342E` | Body text (never pure black) |
| `--ink-soft` | `#5C5E54` | Secondary text, captions |
| `--gold-whisper` | `#C9A86A` | Tiny premium accents — heart motif, verse marks (use sparingly) |

**Rules:**
- Background is always cream/ivory family; never white (`#FFFFFF`) and never pure black.
- Gradients allowed only as ultra-soft mesh/blob gradients (sage→cream, clay→cream) at low opacity behind content. No hard, saturated, or diagonal "tech" gradients.
- Terracotta and gold are *whispers* — used on under 5% of any screen.
- Maintain WCAG AA contrast: body text `--ink` on `--cream` only.

---

## 3. Typography

Use a **three-typeface system**. Specify these exact fonts.

1. **Display / Headlines — "Fraunces"** (variable serif, Google Fonts).
   - Soft, optical, slightly literary serif with warmth. Use the "Soft" optical axis where available.
   - Weights: 300 (large hero), 400, 500. Italic for emotional/empathetic phrases.
   - Tight tracking on large sizes (-1% to -2%).

2. **Body / UI — "Hanken Grotesk"** (humanist sans, Google Fonts).
   - Clean, friendly, highly legible. Carries all paragraph text, labels, form fields, nav.
   - Weights: 400 body, 500 emphasis, 600 buttons/labels.
   - Generous line-height (1.6–1.75 for body).

3. **Accent / Script — "Mr Dafoe"** OR **"Caveat"** (handwritten script, Google Fonts).
   - For the tagline, the heart-line phrases ("You are not alone"), and single emotional words handwritten into headlines (echoing the flyer's hand-lettered style).
   - Use *very* sparingly — one script moment per section maximum.

**Type scale (desktop, rem):**
| Element | Font | Size | Weight | Line-height |
|---|---|---|---|---|
| Hero H1 | Fraunces | 4.5–5.5 | 300 | 1.05 |
| H2 section | Fraunces | 2.75 | 400 | 1.15 |
| H3 | Fraunces | 1.75 | 500 | 1.25 |
| Lead paragraph | Hanken Grotesk | 1.25 | 400 | 1.7 |
| Body | Hanken Grotesk | 1.0625 | 400 | 1.7 |
| Caption / label | Hanken Grotesk | 0.8125 | 600 | 1.4, uppercase, +8% tracking |
| Script accent | Caveat / Mr Dafoe | 1.75–3 | 400 | 1.1 |

Fluid-scale all sizes with `clamp()` for responsive behavior.

---

## 4. Spacing, Grid & Shape

- **Grid:** 12-column, 1200px max content width, 120px+ side gutters on desktop. Deliberately leave columns 11–12 empty in many sections to let imagery/blobs breathe into the margin (the asymmetry mandate).
- **Vertical rhythm:** Section padding 120–160px desktop, 72–88px mobile. Sections must feel airy.
- **Spacing scale (8px base):** 8 / 16 / 24 / 40 / 64 / 96 / 128 / 160.
- **Corner radius:** Cards 24px; buttons 999px (full pill); images 20px with one corner optionally 80px (organic asymmetric radius as a signature touch); input fields 16px.
- **Elevation:** No harsh shadows. Use soft, large, low-opacity sage-tinted shadows (`0 24px 60px rgba(90,107,87,0.10)`). Cards lift gently on hover.
- **Organic blobs:** SVG blob shapes in sage-mist/clay at 8–15% opacity, slowly drifting behind hero, CTA, and section dividers.

---

## 5. Global Animation & Motion System ("Breath Motion")

All motion follows a calm, organic "breathing" character. **Default easing:** `cubic-bezier(0.22, 1, 0.36, 1)` (gentle ease-out). **Default duration:** 600–900ms for entrances, 300–400ms for hovers.

| Interaction | Behavior |
|---|---|
| **Page load** | Background blobs fade + drift in (1.2s). Hero text reveals line-by-line with a soft upward 24px fade-rise, staggered 120ms. Script word draws on via SVG stroke animation (1s). |
| **Scroll reveals** | Elements rise 32px + fade in as they enter viewport (IntersectionObserver, trigger at 15% visible). Stagger grouped items 80–120ms. |
| **Ambient motion** | Background blobs drift continuously on a slow 20–30s loop (translate + subtle scale). A faint particle/dust-mote layer floats upward very slowly in hero (optional, low opacity). |
| **Hairline spine** | The left "breath line" draws downward as the user scrolls (scroll-linked SVG path). Botanical sprigs along it bloom (scale + fade) when reached. |
| **Buttons** | On hover: soft terracotta glow expands from center, pill widens 4px, label nudges 2px. On click: gentle 0.97 scale press. |
| **Cards** | On hover: lift 8px, shadow softens larger, image inside scales 1.04 with slow 600ms ease. |
| **Section transitions** | Soft SVG wave/curve divider between background-color changes; wave gently animates amplitude on scroll. |
| **Numbers/stats** | Count-up animation on reveal (e.g., distress scale, client outcomes). |
| **Cursor (desktop)** | Optional custom soft circular cursor with a faint sage trailing aura. Keep subtle. |
| **Breathing CTA** | The primary "Begin" CTA gently pulses scale 1.0↔1.03 on a 4s loop, mimicking a calm breath. |

**Accessibility:** Respect `prefers-reduced-motion` — disable drift, parallax, count-ups, and breathing pulse; keep only instant fades. All animation must be performant (transform/opacity only).

---

## 6. Global Components

### Navigation bar
- Transparent over hero, transitioning to frosted cream (`backdrop-blur`, 90% `--cream`) on scroll.
- Left: "EIA" serif wordmark with small gold heart motif. Center/right: nav links (Hanken Grotesk 600, uppercase small). Far right: pill CTA **"Begin Your Session"** (sage-deep fill).
- Links underline with a left-to-right sage hairline draw on hover.
- Mobile: hamburger opens a full-screen cream overlay; links fade-rise in stagger; a soft botanical sprig animates in the corner.

### Footer
- Deep sage (`--sage-deep`) background, cream text. Asymmetric: large script tagline "Nourishing you. Naturally." top-left; columns for nav, contact, social, hours bottom.
- Reassurance strip above footer: the four lines (*You are seen · You are loved · You are enough · You are not alone*) as a slow auto-fading rotator or static gentle row.
- Micro-row: "Registered as EIA Therapeutic Haven Wellness and Natural Products Ltd" in `--ink-soft` small caps.
- Hashtag row: #EmotionalWellness #MindfulLiving #SelfCompassion #StressRelief #HopeAndHealing.

### Buttons
- **Primary:** sage-deep pill, ivory label, terracotta hover glow, breathing pulse on hero only.
- **Secondary:** outlined sage pill, transparent fill, fills sage-mist on hover.
- **Text link:** sage-deep with animated hairline underline.

### WhatsApp floating button
- Persistent bottom-right soft circular button, sage with WhatsApp glyph; gentle breathing pulse; tooltip "Message HELP to begin." Opens WhatsApp deep link.

### Verse / reassurance block (reusable)
- Soft ivory card with a thin gold left rule, a small open-book or heart icon, the verse/line in Fraunces italic, attribution in caption caps. Used on Home, About, and Faith section.

### Section divider (reusable)
- Animated SVG wave in the next section's background color, optionally with a single drifting botanical sprig.

---

## 7. SITEMAP

1. **Home**
2. **About / Our Approach**
3. **Services**
4. **How It Works** (client journey)
5. **For the Diaspora** (dedicated audience page)
6. **Begin / Booking & Intake**
7. **Resources / Journal** (blog — optional but recommended)
8. **Contact / FAQ**
9. *(System pages: 404, Thank-You / Confirmation, Privacy & Confidentiality)*

Global nav shows: About · Services · How It Works · For the Diaspora · Resources · Begin Your Session (CTA).

---

## 8. PAGE — HOME

The home page is a vertical narrative that mirrors the client's emotional journey: *overwhelm → reassurance → understanding → structure → hope → action.*

### 8.1 Hero — "The Exhale"
- **Layout:** Asymmetric. Left 55%: headline + sub + CTAs. Right 45%: a soft-masked organic-radius image of a serene person (looking up/outward, calm, like the flyer) bleeding into the margin, framed by a drifting sage blob and a faint botanical sprig.
- **Headline (Fraunces 300, line-reveal):** "Even when your mind feels *overwhelmed,*" — with *overwhelmed* in Caveat script, drawn-on. Second line: "find your way back to *clarity.*"
- **Sub (Hanken lead):** "Structured emotional wellness and clarity support for individuals navigating stress, overwhelm, and life transitions — wherever you are in the world."
- **CTAs:** Primary "Begin Your Session" (breathing pulse) + secondary "How It Works."
- **Trust micro-row:** "Confidential · Online · Compassionate" with tiny sage icons.
- **Motion:** Blobs drift in, text line-reveals stagger, script word draws, image soft-zooms 1.05→1.0 over 1.2s, faint dust motes rise.

### 8.2 Empathy band — "We understand what you're carrying"
- Full-width `--cream-warm`. Centered short Fraunces line + a horizontal soft row of the nine emotional states from the intake (Stress, Anxiety, Emotional overwhelm, Sadness, Confusion, Anger, Sleep difficulties, Relationship struggles, Life uncertainty) rendered as gentle pill-tags that subtly float/breathe at different phases.
- Closing line in script: "You are not alone."

### 8.3 The Approach — three domains
- Asymmetric three-block stagger (NOT equal cards in a row). Each domain alternates left/right with its own organic-radius icon-illustration:
  1. **Mental Health Support** — process what you're experiencing safely.
  2. **Wellness Guidance** — restore balance, focus, and calm.
  3. **Emotional Clarity & Life Structure** — find direction when you feel stuck.
- Each block: hand-drawn line icon, H3, short paragraph, text-link "Explore." Breath-line spine threads between them with blooming sprigs.

### 8.4 Positioning statement — full-bleed quote
- Deep sage background, large Fraunces italic centered: *"A structured mental wellness and emotional clarity practice supporting individuals through stress, overwhelm, and life transitions — using guided therapeutic care."* Cream text, gold heart accent, slow fade-up reveal.

### 8.5 How it works — condensed 4-step
- Horizontal connected timeline (vertical on mobile) with a drawn connecting path that animates on scroll: **Reach out → Talk it through → Book your session → Begin your clarity journey.** Each node is a soft circle with a line icon that draws on.

### 8.6 Reassurance / faith block (opt-in tone)
- Reusable verse block: Hebrews 12:2 styling — *"Looking unto Jesus, the author and finisher of our faith."* Framed gently, with a line beneath: "Faith-based guidance is available — only if you want it." Keep soft and inclusive.

### 8.7 For the diaspora teaser
- Split section: warm imagery + copy "Living abroad and carrying it all silently? We support Nigerians in the UK, USA & Canada — and beyond." Flag motifs subtle. CTA "Support for the Diaspora →".

### 8.8 Care-for-your-mind strip
- Five soft icon tiles in a gentle row: Breathe deeply · Write it out · Pray · Rest well · Grow daily. Icons draw on, tiles breathe softly.

### 8.9 Final CTA — "Your mental health matters too"
- Large Fraunces line, breathing primary CTA, WhatsApp prompt "Send HELP on WhatsApp to begin." Big organic blob backdrop, calm and spacious.

---

## 9. PAGE — ABOUT / OUR APPROACH

- **Hero:** Asymmetric, softer than home. Headline "A haven, by design." Sub introduces the structured-yet-compassionate philosophy.
- **Story block:** Two-column asymmetric prose on the brand's purpose — that no one should navigate emotional difficulty alone, and that structure brings calm to chaos. Pull-quote in Fraunces italic.
- **The three pillars expanded:** Mental health support / wellness guidance / emotional clarity — each with deeper copy and a drawn illustration.
- **Care-for-your-mind philosophy:** the five pillars with short explanations.
- **Faith dimension (inclusive):** A respectful section explaining optional faith integration; verse block; clear "always your choice" messaging.
- **Promise band:** the four reassurance lines as a quiet animated rotator.
- **CTA:** "Begin Your Session."

---

## 10. PAGE — SERVICES

- **Hero:** "Structured support, tailored to where you are." Sub names the three core needs.
- **Three service deep-dives** (alternating asymmetric layout, each its own visual identity within the palette):
  1. **Emotional Support / Counseling** — "Process what you're experiencing in a safe, structured way." What it helps with, what a session feels like.
  2. **Stress & Anxiety Management** — "Release pressure that's been building silently." 
  3. **Life Clarity & Direction** — "Find your footing when the path feels unclear."
- Each includes: outcome bullets ("What you'll gain"), a "Who this is for" note, and a soft CTA.
- **What every client receives** block: Confidential support · Emotional clarity sessions · Structured guidance process · Global online access — as four soft tiles.
- **Scope honesty band:** A calm, trust-building note: "EIA Therapeutic Haven offers structured emotional wellness support. This is not emergency psychiatric care — in urgent situations we'll guide you to appropriate help." (Styled gently, not as a scary disclaimer.)
- **Future line teaser (subtle):** A quiet "Coming soon — natural wellness products (skincare · herbal wellness · supplements)" card, visually separated so it never muddies the counseling message.
- **CTA:** Booking.

---

## 11. PAGE — HOW IT WORKS (Client Journey)

This page must *visually demonstrate the structure* the brand sells.

- **Hero:** "A clear path, from first message to lasting clarity."
- **The 8-step journey** as a vertical scroll-linked illustrated path (the breath-line spine becomes the journey path, sprigs bloom at each node):
  1. Reach out — message "HELP" on WhatsApp.
  2. Tell us what you need — emotional support, stress/anxiety, or clarity.
  3. A tailored response — we listen and understand.
  4. Qualification — we recommend a structured starting point.
  5. Book your slot — Monday, Wednesday, or Friday.
  6. Secure your session — payment confirms your booking.
  7. Complete your intake form — so your practitioner prepares for you.
  8. Begin — your structured session, fully prepared.
- Each node: number in a soft circle, drawn icon, short copy, micro-illustration. Path draws as you scroll; active node scales gently.
- **Booking slots component:** soft availability chips (Mon / Wed / Fri).
- **Reassurance:** post-booking message styled as a soft chat bubble preview.
- **CTA:** Begin.

---

## 12. PAGE — FOR THE DIASPORA

- **Hero:** Warm, belonging-focused. "Carrying home with you, wherever you are." Subtle UK/USA/Canada flag motifs woven softly (not loud).
- **Empathy copy:** Speaks to silent struggle abroad — stress, pressure, life transitions, cultural isolation — and the comfort of structured support that *understands the context.*
- **Why EIA:** Confidential · online · globally accessible · culturally attuned.
- **What they get:** four-tile block (mirrors ad funnel: confidential support, emotional clarity sessions, structured guidance, global online access).
- **Soft testimonial placeholders** (anonymized, e.g., "A client in London"): styled as gentle quote cards (leave structure ready for real testimonials).
- **CTA:** "Send HELP on WhatsApp."

---

## 13. PAGE — BEGIN / BOOKING & INTAKE

The conversion hub. Calm, never pushy.

- **Hero:** "Let's begin, gently." Reassuring sub.
- **Two clear paths, side by side (asymmetric):**
  - **Path A — WhatsApp:** Big friendly card: "Message us 'HELP' to start a conversation." WhatsApp CTA.
  - **Path B — Intake Form:** "Prefer to share first? Complete your confidential intake form."
- **Multi-step intake form** (this is a core component — design all 9 sections + final as a guided, progress-tracked flow, NOT one long page):
  - **Stepper UI:** Soft segmented progress bar with sage fill; each step labeled; gentle slide-fade transitions between steps; one section per screen.
  - **Step 1 — Personal Information:** name, age, gender (optional), location (city & country), phone/WhatsApp, email, occupation.
  - **Step 2 — Reason for Seeking Support:** open text + "when did this begin" + ongoing/recent toggle.
  - **Step 3 — Emotional Experience:** the nine tick-all-that-apply states as soft selectable chips; a 1–10 distress slider with a calming gradient track and gentle haptic-style feedback.
  - **Step 4 — Impact on Daily Life:** work/relationships/sleep/motivation/decision-making checkboxes + "most affected" field.
  - **Step 5 — Previous Support:** counselor/therapist/pastor yes-no + experience; medication yes-no + specify.
  - **Step 6 — Coping & Support System:** coping methods text; support strength selector (Strong/Moderate/Weak/None).
  - **Step 7 — Goals for Counseling:** multi-select outcome chips (emotional stability, clarity, stress reduction, better decisions, improved relationships, other) + "what would feeling better look like."
  - **Step 8 — Optional Faith Integration:** Yes / No / Maybe selector, framed warmly as optional.
  - **Step 9 — Confidentiality & Consent:** the three commitments shown clearly; agreement toggle.
  - **Final — How did you hear about us:** Social media / Referral / WhatsApp / Google / Other + additional notes.
- **Form design rules:** large tap targets, 16px+ radius fields, sage focus glow, inline gentle validation (no harsh red — use soft clay tones for errors), autosave between steps, reassuring micro-copy under sensitive fields ("This is confidential and only seen by your practitioner").
- **Submission → Thank-You page:** the standard reassurance message: *"Thank you for completing your intake form. Your information has been received and will be reviewed before your session. We will proceed with scheduling shortly."* With a calm animated confirmation (a soft blooming sprig / gentle checkmark draw).

---

## 14. PAGE — RESOURCES / JOURNAL (recommended)

- **Hero:** "Gentle words for heavy days." 
- **Article grid:** asymmetric masonry of soft cards (organic-radius cover, category tag, title in Fraunces, reading time). Topics: stress, mindful living, self-compassion, hope & healing (mirrors hashtags).
- **Article template:** generous reading column, Fraunces headline, Hanken body, pull-quotes in italic, inline verse blocks optional, "share" + related-articles footer, persistent soft CTA to begin a session.
- **Newsletter capture:** gentle inline sign-up ("Receive calm in your inbox").

---

## 15. PAGE — CONTACT / FAQ

- **Hero:** "We're here when you're ready."
- **Contact methods:** WhatsApp (primary), email, hours/availability. Soft cards.
- **FAQ accordion:** smooth height-eased expand, sage hairline dividers. Seed questions: Is this confidential? Is this therapy or coaching? Do you offer faith-based sessions? How are sessions delivered? What are the available days? Is this emergency care? How do I pay?
- **Closing reassurance band + CTA.**

---

## 16. SYSTEM PAGES

- **404:** Calm, on-brand — "This path led somewhere quiet." Soft blob, botanical sprig, gentle "Return home" CTA. No jarring error styling.
- **Thank-You / Confirmation:** as in §13.
- **Privacy & Confidentiality:** clean legible legal-but-warm page restating the confidentiality, scope, and referral commitments.

---

## 17. RESPONSIVE & ACCESSIBILITY REQUIREMENTS

- **Breakpoints:** mobile ≤640, tablet 641–1024, desktop 1025–1440, wide >1440.
- **Mobile-first:** asymmetric desktop layouts gracefully stack; the left breath-line moves to a subtle full-width top accent; blobs reduce in number for performance.
- **Touch:** all targets ≥44px; the multi-step form is thumb-friendly with sticky next/back.
- **Performance:** lazy-load imagery, SVG-based blobs/illustrations, transform/opacity-only animation, prefers-reduced-motion fully honored.
- **A11y:** AA contrast throughout, focus-visible sage rings, semantic headings, alt text, keyboard-navigable form and accordion, ARIA on the stepper.
- **SEO/meta:** calm OG imagery, descriptive titles per page.

---

## 18. DELIVERABLES CHECKLIST FOR STITCH

- [ ] Full design system (color tokens, type scale, spacing, radius, shadows, motion specs)
- [ ] Reusable components (nav, footer, buttons, verse block, wave divider, WhatsApp float, form fields, stepper, cards)
- [ ] All 9 primary pages + 3 system pages, desktop + mobile
- [ ] The "Breathing Canvas" asymmetric grid + breath-line spine applied consistently
- [ ] The multi-step intake form flow (10 screens) fully designed with states (default/focus/error/success)
- [ ] Animation spec sheet ("Breath Motion") with durations/easings per interaction
- [ ] Hand-drawn botanical + organic-blob asset set
- [ ] Fraunces + Hanken Grotesk + Caveat/Mr Dafoe loaded and applied per scale

---

## 19. TONE & COPY GUARDRAILS (for any placeholder copy Stitch generates)

- Speak *to* the overwhelmed person, warmly and in second person.
- Never clinical jargon; never hype; never urgency manipulation.
- Faith references are always optional and gentle.
- Never imply emergency/psychiatric treatment — always position as structured emotional wellness with referral for urgent needs.
- Keep "natural products" visually and verbally separate from counseling.
- Brand name client-facing is always **EIA Therapeutic Haven** (full legal name only in footer/legal).

---

*End of brief. Design every screen so a stressed visitor exhales the moment it loads.*
