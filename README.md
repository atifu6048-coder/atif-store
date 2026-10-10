# ATIF STORE | Atelier & Co.
### The Autumn Neutrality Capsule — Luxury Editorial Sartorial E-Commerce

A luxury, high-editorial sartorial e-commerce website built with pure HTML5, modern vanilla JavaScript, custom Tailwind tokens, and responsive CSS.

---

## ✨ Features & Architecture

1. **Editorial Luxury Aesthetic**
   - Exact warm mocha, espresso, camel, roasted chicory, wild oats, and unrefined raw umber color palette.
   - Elegant typography pairing: **EB Garamond** (display/editorial headlines) and **Manrope** (body/labels).
   - Google **Material Symbols Outlined** iconography.

2. **Full Dynamic Shopping Bag & Cart Drawer**
   - Slide-over drawer with smooth animations.
   - Interactive quantity stepper (`+` / `-`) and item removal.
   - Live shipping progress meter tracking the **$150 threshold** for complimentary worldwide shipping.
   - Promotional code engine: enter code **`ATELIER`** for an instant **15% discount**.
   - Subtotal, discount, estimated shipping, and grand total calculations.

3. **Step-by-Step Checkout Flow**
   - Step 1: Shipping Address & Contact details.
   - Step 2: Payment verification (Apple Pay, Amex, Visa, Mastercard simulation).
   - Step 3: Order confirmation with order reference generator (`#ATF-XXXXXX`).

4. **Private Wishlist Drawer**
   - Save any garment with the heart icon.
   - Instant count badge on header.
   - "Move to Bag" action directly from wishlist.

5. **Interactive Product Quick View & Quick Add**
   - Detailed modal with high-resolution photography, fiber composition, and tailoring origin.
   - Interactive color swatches with active ring feedback.
   - Interactive silhouette size picker.

6. **Filter & Sort Engine**
   - Dynamic department filter buttons: *All Capsule (12)*, *Women*, *Men*, *Kids & Baby*, *Loungewear*.
   - Sorting options: *Featured*, *Price: Low to High*, *Price: High to Low*, *Patron Rating*.

7. **Live Command Palette & Search (⌘K / Ctrl+K)**
   - Press **⌘K** or click the search box to trigger the live search modal.
   - Instant query matching across fiber names, tones, departments, and titles.

8. **Multi-Currency Converter**
   - Real-time conversion across **USD ($)**, **EUR (€)**, and **GBP (£)** across all cards, drawers, and totals.

9. **Bespoke Salon & Stylist Booking Modal**
   - Book appointments for Madison Ave (NY), Rue Saint-Honoré (Paris), Mayfair (London), or Virtual.

10. **The Transparency Manifesto & Archival Lookbook Modals**
    - Editorial storytelling modal and archival photo gallery.

11. **Live Email & Form Integrations (Web3Forms)**
    - Configured with Access Key `0dfcd20f-eedd-4366-ba87-f833e751a935`.
    - **Salon & Stylist Reservations**: Patron consultation appointments delivered directly to your inbox with name, contact, flagship location, date, and custom tailoring notes.
    - **Newsletter Subscriptions**: Instant subscriber notifications delivered to your inbox.
    - **Order Confirmations**: Real-time notifications of orders placed through checkout including customer info, shipping address, and order totals.

---

## 🚀 Running the Storefront

The local server is already configured and running on `http://localhost:3000`.

To run or restart the server manually:

```bash
# Option 1: Using Node directly (zero dependencies)
node server.js

# Option 2: Using npm
npm start
```

Open your browser and navigate to:
**`http://localhost:3000`** (or open `index.html` directly in any web browser).
