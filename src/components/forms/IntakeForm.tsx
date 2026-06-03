"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  ArrowLeft,
  Check,
  ChevronDown,
} from "lucide-react";

type FormData = {
  // Step 1 — Personal
  fullName: string;
  age: string;
  gender: string;
  location: string;
  phone: string;
  email: string;
  occupation: string;
  // Step 2 — Reason
  reason: string;
  issueStart: string;
  isOngoing: string;
  // Step 3 — Emotional
  emotionalStates: string[];
  distressLevel: number;
  // Step 4 — Impact
  impactAreas: string[];
  mostAffected: string;
  // Step 5 — Previous Support
  hadCounselor: string;
  counselorExperience: string;
  onMedication: string;
  medicationDetails: string;
  // Step 6 — Coping
  copingMethods: string;
  supportStrength: string;
  // Step 7 — Goals
  goals: string[];
  feelingBetter: string;
  // Step 8 — Faith
  faithIntegration: string;
  // Step 9 — Consent
  consentAgreed: boolean;
  // Final
  hearAboutUs: string;
  additionalNotes: string;
};

const INITIAL_DATA: FormData = {
  fullName: "", age: "", gender: "", location: "", phone: "", email: "", occupation: "",
  reason: "", issueStart: "", isOngoing: "",
  emotionalStates: [], distressLevel: 5,
  impactAreas: [], mostAffected: "",
  hadCounselor: "", counselorExperience: "", onMedication: "", medicationDetails: "",
  copingMethods: "", supportStrength: "",
  goals: [], feelingBetter: "",
  faithIntegration: "",
  consentAgreed: false,
  hearAboutUs: "", additionalNotes: "",
};

const EMOTIONAL_OPTIONS = [
  "Stress", "Anxiety", "Emotional overwhelm", "Sadness / low mood",
  "Confusion / lack of clarity", "Anger / irritability",
  "Sleep difficulties", "Relationship struggles", "Life direction uncertainty",
];

const IMPACT_OPTIONS = ["Work / career", "Relationships", "Sleep", "Motivation", "Decision-making"];
const GOAL_OPTIONS = [
  "Emotional stability", "Clarity and direction", "Stress reduction",
  "Better decision-making", "Improved relationships", "Other",
];
const SUPPORT_OPTIONS = ["Strong", "Moderate", "Weak", "None"];
const FAITH_OPTIONS = ["Yes", "No", "Maybe"];
const HEAR_OPTIONS = ["Social media", "Referral", "WhatsApp", "Google", "Other"];

const STEPS = [
  "Personal Information",
  "Reason for Support",
  "Emotional Experience",
  "Impact on Daily Life",
  "Previous Support",
  "Coping & Support",
  "Goals",
  "Faith (Optional)",
  "Confidentiality",
  "Final Details",
];

function FieldLabel({ children, required }: { children: React.ReactNode; required?: boolean }) {
  return (
    <label className="block text-label text-[#5c5e54] mb-2">
      {children}
      {required && <span className="text-[#d8a98e] ml-0.5">*</span>}
    </label>
  );
}

function TextInput({ label, value, onChange, placeholder, required, type = "text", note }: {
  label: string; value: string; onChange: (v: string) => void;
  placeholder?: string; required?: boolean; type?: string; note?: string;
}) {
  return (
    <div>
      <FieldLabel required={required}>{label}</FieldLabel>
      {note && <p className="text-xs text-[#7c8b74] mb-2 italic">{note}</p>}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="w-full border-b-[1.5px] border-[#aeb9a4] focus:border-[#5a6b57] bg-transparent text-[#33342e] text-base py-3 outline-none transition-colors duration-200 placeholder:text-[#c8b6a0]"
      />
    </div>
  );
}

function TextareaInput({ label, value, onChange, placeholder, note, required }: {
  label: string; value: string; onChange: (v: string) => void;
  placeholder?: string; note?: string; required?: boolean;
}) {
  return (
    <div>
      <FieldLabel required={required}>{label}</FieldLabel>
      {note && <p className="text-xs text-[#7c8b74] mb-2 italic">{note}</p>}
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={4}
        className="w-full border-[1.5px] border-[#aeb9a4] focus:border-[#5a6b57] bg-transparent text-[#33342e] text-base p-3 outline-none transition-colors duration-200 placeholder:text-[#c8b6a0] rounded-xl resize-none"
      />
    </div>
  );
}

function SelectInput({ label, value, onChange, options, required }: {
  label: string; value: string; onChange: (v: string) => void;
  options: string[]; required?: boolean;
}) {
  return (
    <div>
      <FieldLabel required={required}>{label}</FieldLabel>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none border-b-[1.5px] border-[#aeb9a4] focus:border-[#5a6b57] bg-transparent text-[#33342e] text-base py-3 outline-none transition-colors duration-200 pr-8 cursor-pointer"
        >
          <option value="">Select one...</option>
          {options.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
        <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-[#aeb9a4] pointer-events-none" />
      </div>
    </div>
  );
}

function ChipSelect({ label, options, selected, onToggle, note }: {
  label: string; options: string[]; selected: string[];
  onToggle: (v: string) => void; note?: string;
}) {
  return (
    <div>
      <FieldLabel>{label}</FieldLabel>
      {note && <p className="text-xs text-[#7c8b74] mb-3 italic">{note}</p>}
      <div className="flex flex-wrap gap-2">
        {options.map((o) => (
          <button
            key={o}
            type="button"
            onClick={() => onToggle(o)}
            className={[
              "px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200",
              selected.includes(o)
                ? "bg-[#5a6b57] text-[#fcfaf5] border-[#5a6b57]"
                : "bg-transparent text-[#5c5e54] border-[#aeb9a4] hover:border-[#7c8b74]",
            ].join(" ")}
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}

function RadioGroup({ label, options, value, onChange, note }: {
  label: string; options: string[]; value: string;
  onChange: (v: string) => void; note?: string;
}) {
  return (
    <div>
      <FieldLabel>{label}</FieldLabel>
      {note && <p className="text-xs text-[#7c8b74] mb-3 italic">{note}</p>}
      <div className="flex flex-wrap gap-3">
        {options.map((o) => (
          <button
            key={o}
            type="button"
            onClick={() => onChange(o)}
            className={[
              "px-5 py-2.5 rounded-full text-sm font-medium border transition-all duration-200",
              value === o
                ? "bg-[#5a6b57] text-[#fcfaf5] border-[#5a6b57]"
                : "bg-transparent text-[#5c5e54] border-[#aeb9a4] hover:border-[#7c8b74]",
            ].join(" ")}
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}

function DistressSlider({ value, onChange }: { value: number; onChange: (v: number) => void }) {
  const LABELS: Record<number, string> = {
    1: "Very low", 2: "Low", 3: "Mild", 4: "Moderate",
    5: "Noticeable", 6: "Significant", 7: "High", 8: "Very high", 9: "Severe", 10: "Extreme",
  };

  return (
    <div>
      <FieldLabel>Emotional distress level (1–10)</FieldLabel>
      <p className="text-xs text-[#7c8b74] mb-4 italic">1 = barely noticeable · 10 = extreme</p>
      <div className="space-y-3">
        <input
          type="range"
          min={1}
          max={10}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full accent-[#5a6b57] h-1.5 rounded-full cursor-pointer"
          style={{
            background: `linear-gradient(to right, #5a6b57 0%, #5a6b57 ${(value - 1) * 11.11}%, #c8b6a0 ${(value - 1) * 11.11}%, #c8b6a0 100%)`,
          }}
        />
        <div className="flex justify-between items-center">
          <span className="text-sm text-[#5c5e54]">
            <strong className="text-[#5a6b57] text-lg">{value}</strong>/10 — {LABELS[value]}
          </span>
        </div>
      </div>
    </div>
  );
}

export function IntakeForm() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormData>(INITIAL_DATA);
  const router = useRouter();

  const update = (field: keyof FormData, value: FormData[keyof FormData]) =>
    setData((prev) => ({ ...prev, [field]: value }));

  const toggleArray = (field: "emotionalStates" | "impactAreas" | "goals", value: string) => {
    setData((prev) => {
      const arr = prev[field] as string[];
      return {
        ...prev,
        [field]: arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value],
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/thank-you");
  };

  const canProceed = () => {
    if (step === 0) return data.fullName && data.email && data.phone;
    if (step === 1) return !!data.reason;
    if (step === 8) return data.consentAgreed;
    return true;
  };

  const stepContent = [
    // Step 1 — Personal Information
    <div key="s1" className="space-y-6">
      <TextInput label="Full name" value={data.fullName} onChange={(v) => update("fullName", v)} required placeholder="Your full name" />
      <div className="grid sm:grid-cols-2 gap-6">
        <TextInput label="Age" value={data.age} onChange={(v) => update("age", v)} placeholder="e.g. 32" type="number" />
        <SelectInput label="Gender (optional)" value={data.gender} onChange={(v) => update("gender", v)} options={["Male", "Female", "Non-binary", "Prefer not to say"]} />
      </div>
      <TextInput label="City & country" value={data.location} onChange={(v) => update("location", v)} placeholder="e.g. London, UK" />
      <TextInput label="Phone / WhatsApp" value={data.phone} onChange={(v) => update("phone", v)} required placeholder="+44 7700 000000" type="tel" />
      <TextInput label="Email address" value={data.email} onChange={(v) => update("email", v)} required placeholder="you@example.com" type="email" />
      <TextInput label="Occupation" value={data.occupation} onChange={(v) => update("occupation", v)} placeholder="e.g. Teacher, Engineer" />
    </div>,

    // Step 2 — Reason
    <div key="s2" className="space-y-6">
      <TextareaInput
        label="What brings you here?"
        value={data.reason}
        onChange={(v) => update("reason", v)}
        placeholder="Share as much or as little as you&apos;re comfortable with..."
        note="This is confidential and only seen by your practitioner."
        required
      />
      <TextInput label="When did this begin?" value={data.issueStart} onChange={(v) => update("issueStart", v)} placeholder="e.g. 3 months ago, last year..." />
      <RadioGroup
        label="Is this ongoing or recently triggered?"
        options={["Ongoing", "Recently triggered", "Not sure"]}
        value={data.isOngoing}
        onChange={(v) => update("isOngoing", v)}
      />
    </div>,

    // Step 3 — Emotional Experience
    <div key="s3" className="space-y-8">
      <ChipSelect
        label="How are you feeling? (select all that apply)"
        options={EMOTIONAL_OPTIONS}
        selected={data.emotionalStates}
        onToggle={(v) => toggleArray("emotionalStates", v)}
        note="Select everything that resonates — you&apos;re not being judged."
      />
      <DistressSlider value={data.distressLevel} onChange={(v) => update("distressLevel", v)} />
    </div>,

    // Step 4 — Impact
    <div key="s4" className="space-y-6">
      <ChipSelect
        label="How is this affecting your daily life? (select all that apply)"
        options={IMPACT_OPTIONS}
        selected={data.impactAreas}
        onToggle={(v) => toggleArray("impactAreas", v)}
      />
      <TextInput
        label="Which area feels most affected?"
        value={data.mostAffected}
        onChange={(v) => update("mostAffected", v)}
        placeholder="e.g. My ability to focus at work..."
      />
    </div>,

    // Step 5 — Previous Support
    <div key="s5" className="space-y-6">
      <RadioGroup
        label="Have you spoken to a counsellor, therapist, or pastor before?"
        options={["Yes", "No"]}
        value={data.hadCounselor}
        onChange={(v) => update("hadCounselor", v)}
      />
      {data.hadCounselor === "Yes" && (
        <TextareaInput
          label="How was that experience?"
          value={data.counselorExperience}
          onChange={(v) => update("counselorExperience", v)}
          placeholder="Briefly describe what was helpful or not..."
        />
      )}
      <RadioGroup
        label="Are you currently on any mental or emotional health medication?"
        options={["Yes", "No", "Prefer not to say"]}
        value={data.onMedication}
        onChange={(v) => update("onMedication", v)}
      />
      {data.onMedication === "Yes" && (
        <TextInput
          label="Please specify (optional)"
          value={data.medicationDetails}
          onChange={(v) => update("medicationDetails", v)}
          placeholder="e.g. antidepressants..."
          note="This helps your practitioner support you safely."
        />
      )}
    </div>,

    // Step 6 — Coping
    <div key="s6" className="space-y-6">
      <TextareaInput
        label="How do you currently cope with what you&apos;re experiencing?"
        value={data.copingMethods}
        onChange={(v) => update("copingMethods", v)}
        placeholder="e.g. journaling, exercising, talking to a friend, withdrawing..."
      />
      <RadioGroup
        label="How strong is your support system right now?"
        options={SUPPORT_OPTIONS}
        value={data.supportStrength}
        onChange={(v) => update("supportStrength", v)}
      />
    </div>,

    // Step 7 — Goals
    <div key="s7" className="space-y-6">
      <ChipSelect
        label="What would you like to achieve? (select all that apply)"
        options={GOAL_OPTIONS}
        selected={data.goals}
        onToggle={(v) => toggleArray("goals", v)}
      />
      <TextareaInput
        label="What would &ldquo;feeling better&rdquo; look like for you?"
        value={data.feelingBetter}
        onChange={(v) => update("feelingBetter", v)}
        placeholder="Describe how your life would be different if things improved..."
      />
    </div>,

    // Step 8 — Faith
    <div key="s8" className="space-y-6">
      <div className="bg-[#d5e8cf]/30 rounded-2xl p-5 mb-2 border border-[#aeb9a4]/30">
        <p className="text-sm text-[#5c5e54] leading-relaxed">
          Faith-based guidance is completely optional. This section is here for
          those who find comfort in it. There is no right or wrong answer.
        </p>
      </div>
      <RadioGroup
        label="Would you like faith-based guidance included where appropriate?"
        options={FAITH_OPTIONS}
        value={data.faithIntegration}
        onChange={(v) => update("faithIntegration", v)}
        note="Always your choice. This does not affect your level of care."
      />
    </div>,

    // Step 9 — Consent
    <div key="s9" className="space-y-6">
      <div className="space-y-4 text-[#5c5e54] text-sm leading-relaxed">
        {[
          "All information shared is treated with strict confidentiality.",
          "Sessions are structured for emotional support, clarity, and wellness guidance.",
          "This service is not emergency psychiatric care. In urgent situations, appropriate referrals will be made.",
        ].map((commitment, i) => (
          <div key={i} className="flex gap-3 items-start bg-[#fcfaf5]/80 rounded-xl p-4">
            <Check className="w-4 h-4 text-[#5a6b57] mt-0.5 shrink-0" strokeWidth={2.5} aria-hidden="true" />
            <p>{commitment}</p>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={() => update("consentAgreed", !data.consentAgreed)}
        className="flex items-center gap-3 cursor-pointer"
      >
        <div
          className={[
            "w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200",
            data.consentAgreed ? "bg-[#5a6b57] border-[#5a6b57]" : "border-[#aeb9a4]",
          ].join(" ")}
        >
          {data.consentAgreed && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
        </div>
        <span className="text-sm text-[#5c5e54]">I acknowledge and agree to the above commitments</span>
      </button>
    </div>,

    // Final — Referral
    <div key="s10" className="space-y-6">
      <SelectInput
        label="How did you hear about us?"
        value={data.hearAboutUs}
        onChange={(v) => update("hearAboutUs", v)}
        options={HEAR_OPTIONS}
      />
      <TextareaInput
        label="Anything else you&apos;d like your practitioner to know? (optional)"
        value={data.additionalNotes}
        onChange={(v) => update("additionalNotes", v)}
        placeholder="Any context, requests, or concerns you&apos;d like to share..."
        note="This information is seen only by your practitioner."
      />
    </div>,
  ];

  return (
    <div className="bg-[#fcfaf5] rounded-3xl shadow-[0_24px_80px_rgba(90,107,87,0.12)] overflow-hidden">
      {/* Progress header */}
      <div className="bg-[#5a6b57] px-6 md:px-10 py-6">
        <div className="flex items-center justify-between mb-4">
          <p className="text-[#d5e8cf] text-sm font-semibold">
            Step {step + 1} of {STEPS.length}
          </p>
          <p className="text-[#aeb9a4] text-sm">{STEPS[step]}</p>
        </div>
        {/* Progress bar */}
        <div className="w-full h-1 bg-[#4a5e47] rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-[#b9ccb4] rounded-full"
            initial={false}
            animate={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
        {/* Step dots */}
        <div className="flex gap-1.5 mt-3 flex-wrap">
          {STEPS.map((_, i) => (
            <div
              key={i}
              className={[
                "h-1 rounded-full transition-all duration-300",
                i <= step ? "bg-[#b9ccb4]" : "bg-[#4a5e47]",
                i === step ? "flex-[2]" : "flex-1",
              ].join(" ")}
              aria-hidden="true"
            />
          ))}
        </div>
      </div>

      {/* Form body */}
      <form onSubmit={handleSubmit} className="px-6 md:px-10 py-8 md:py-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -32 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3
              className="mb-8 text-[#33342e]"
              style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem", fontWeight: 400 }}
            >
              {STEPS[step]}
            </h3>
            {stepContent[step]}
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-10 pt-6 border-t border-[#e9e8df]">
          <button
            type="button"
            onClick={() => setStep((s) => s - 1)}
            disabled={step === 0}
            className="flex items-center gap-2 text-[#5c5e54] text-sm font-semibold disabled:opacity-30 hover:text-[#33342e] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>

          {step < STEPS.length - 1 ? (
            <button
              type="button"
              onClick={() => setStep((s) => s + 1)}
              disabled={!canProceed()}
              className="flex items-center gap-2.5 bg-[#5a6b57] text-[#fcfaf5] font-semibold px-7 py-3 rounded-full hover:bg-[#4a5e47] disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300"
            >
              Continue
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={!data.consentAgreed}
              className="flex items-center gap-2.5 bg-[#5a6b57] text-[#fcfaf5] font-semibold px-7 py-3 rounded-full hover:bg-[#4a5e47] disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300"
            >
              Submit Form
              <Check className="w-4 h-4" />
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
