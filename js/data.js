// data.js – saare bed sheet products yahan hain.
// Naya product add karna ho to kisi ek { ... } ko copy karke naya bana lein.
// Images "images" folder mein hoti hain. Apni photo dalni ho to usi naam se replace kar dein.
const SIZES = "Single (e.g. 60x90 in) / Double / Custom sizes on request";

const BED_SHEETS = [
  {
    id: "poly-cotton-70-30",
    name: "Poly Cotton 70/30",
    blend: "70% Cotton + 30% Polyester",
    tc: "130-180 TC", weight: "~120 GSM", weave: "Plain weave",
    feel: "Soft & strong", use: "Hospital wards, clinics",
    desc: "Our most popular hospital quality. Cotton keeps it soft and breathable, polyester adds strength, so the sheet survives repeated hot washes and dries fast.",
    features: ["Soft cotton feel with extra durability", "Handles repeated industrial washing", "Quick drying, lower laundry cost", "Holds shape, resists shrinking and wrinkles"],
    images: ["images/poly-cotton-70-30-1.jpg", "images/poly-cotton-70-30-2.jpg", "images/poly-cotton-70-30-3.jpg"]
  },
  {
    id: "poly-cotton-50-50",
    name: "Poly Cotton 50/50",
    blend: "50% Cotton + 50% Polyester",
    tc: "130-200 TC", weight: "~110-130 GSM", weave: "Plain / Percale",
    feel: "Crisp & very durable", use: "High-volume wards, hostels",
    desc: "An economy-friendly institutional blend made for heavy daily use. Very long life, wrinkle resistant and easy to maintain in commercial laundries.",
    features: ["Highest wear resistance in blends", "Stays neat with minimal ironing", "Budget friendly for bulk supply", "Ideal for hospital laundry cycles"],
    images: ["images/poly-cotton-50-50-1.jpg", "images/poly-cotton-50-50-2.jpg", "images/poly-cotton-50-50-3.jpg"]
  },
  {
    id: "cotton-100",
    name: "100% Cotton",
    blend: "100% Cotton",
    tc: "180-250 TC", weight: "~120-140 GSM", weave: "Plain weave",
    feel: "Soft & breathable", use: "Private rooms, VIP wards",
    desc: "Pure cotton sheeting that is gentle on skin and highly breathable. A comfortable choice for private rooms and patients with sensitive skin.",
    features: ["Natural, skin-friendly fibre", "Excellent breathability", "Soft hand feel that improves with washing", "Premium option for private wards"],
    images: ["images/cotton-100-1.jpg", "images/cotton-100-2.jpg", "images/cotton-100-3.jpg"]
  },
  {
    id: "percale-cotton",
    name: "Percale Cotton",
    blend: "Cotton / Cotton-Poly percale",
    tc: "180-250 TC", weight: "~130 GSM", weave: "Percale (1 over, 1 under)",
    feel: "Crisp, cool, hotel-like", use: "Private rooms, hotel-style wards",
    desc: "Percale uses a tight one-over-one-under weave that gives a crisp, cool, matte finish like a quality hotel bed, with good airflow for comfortable sleep.",
    features: ["Crisp, cool, smooth finish", "Tight weave, long lasting", "Matte look, premium appearance", "Great for a comfortable patient stay"],
    images: ["images/percale-cotton-1.jpg", "images/percale-cotton-2.jpg", "images/percale-cotton-3.jpg"]
  },
  {
    id: "fitted-sheet",
    name: "Fitted Sheet",
    blend: "Poly Cotton / Cotton",
    tc: "130-200 TC", weight: "~120 GSM", weave: "Plain / Percale",
    feel: "Snug & smooth", use: "Hospital mattresses",
    desc: "Elastic fitted sheet that grips the mattress so it does not bunch up under the patient, reducing discomfort and chafing.",
    features: ["Elastic edge stays in place", "No loose folds under patient", "Saves nursing time on bed changes", "Available in hospital mattress sizes"],
    images: ["images/fitted-sheet-1.jpg", "images/fitted-sheet-2.jpg", "images/fitted-sheet-3.jpg"]
  },
  {
    id: "draw-sheet",
    name: "Draw Sheet",
    blend: "Cotton / Poly Cotton",
    tc: "Light weight", weight: "~90 GSM", weave: "Plain weave",
    feel: "Light & absorbent", use: "Mid-bed protection, OT & ICU",
    desc: "A smaller sheet placed across the middle of the bed to protect the main sheet and make patient turning and changing easier.",
    features: ["Protects main sheet, saves washing", "Easy and fast to replace", "Light, absorbent fabric", "Perfect for ICU, OT and ward use"],
    images: ["images/draw-sheet-1.jpg", "images/draw-sheet-2.jpg", "images/draw-sheet-3.jpg"]
  }
];
