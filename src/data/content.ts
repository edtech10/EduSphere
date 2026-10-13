// EduSphere USA — seed content for credential readiness tracks.
// All content is original, generic, and nationally neutral. It is
// credential-aligned for certification readiness and claims no
// endorsement by any certification provider.

import type { CredentialTrack, Module, Lesson, Question, Assessment } from '@/lib/types'

export const TRACKS: CredentialTrack[] = [
  {
    id: 'track_ma',
    name: 'Medical Assistant Readiness',
    shortName: 'Medical Assistant',
    description:
      'A credential-aligned program that builds the clinical, administrative, and professional competencies students need for medical assisting certification readiness.',
    credentialFocus: 'Credential-aligned medical assisting competencies',
    estimatedWeeks: 12,
    color: '#0e7490',
    category: 'healthcare',
  },
  {
    id: 'track_phleb',
    name: 'Phlebotomy Technician Readiness',
    shortName: 'Phlebotomy Technician',
    description:
      'A credential-aligned program covering safe blood collection, specimen handling, and quality practices for phlebotomy technician certification readiness.',
    credentialFocus: 'Credential-aligned phlebotomy competencies',
    estimatedWeeks: 8,
    color: '#7c3aed',
    category: 'healthcare',
  },
  {
    id: 'track_cla',
    name: 'Clinical Laboratory Assisting Readiness',
    shortName: 'Clinical Lab Assisting',
    description:
      'A credential-aligned program that develops laboratory safety, specimen processing, and quality control skills for clinical laboratory assisting certification readiness.',
    credentialFocus: 'Credential-aligned clinical laboratory assisting competencies',
    estimatedWeeks: 10,
    color: '#b45309',
    category: 'healthcare',
  },
  {
    id: 'track_bundle',
    name: 'Multi-track Healthcare Bundle',
    shortName: 'Healthcare Bundle',
    description:
      'A combined program that includes the Medical Assistant, Phlebotomy Technician, and Clinical Laboratory Assisting readiness tracks in one coordinated pathway.',
    credentialFocus: 'Credential-aligned competencies across medical assisting, phlebotomy, and clinical laboratory assisting',
    estimatedWeeks: 24,
    color: '#1d4ed8',
    category: 'healthcare',
    isBundle: true,
    includedTrackIds: ['track_ma', 'track_phleb', 'track_cla'],
  },
]

export const MODULES: Module[] = [
  // ---- Medical Assistant ----
  {
    id: 'mod_ma_01',
    trackId: 'track_ma',
    title: 'Patient Care Fundamentals',
    order: 1,
    description:
      'Introduces the principles of patient-centered care, including comfort, privacy, dignity, and therapeutic communication in the ambulatory care setting.',
  },
  {
    id: 'mod_ma_02',
    trackId: 'track_ma',
    title: 'Clinical Workflow',
    order: 2,
    description:
      'Covers the flow of a patient visit from arrival to checkout, with an emphasis on rooming patients and keeping the clinical schedule running smoothly.',
  },
  {
    id: 'mod_ma_03',
    trackId: 'track_ma',
    title: 'Vital Signs',
    order: 3,
    description:
      'Develops accurate measurement and documentation of temperature, pulse, respiration, blood pressure, and oxygen saturation.',
  },
  {
    id: 'mod_ma_04',
    trackId: 'track_ma',
    title: 'Infection Control',
    order: 4,
    description:
      'Explains standard precautions, hand hygiene, medical asepsis, and the safe handling and processing of instruments.',
  },
  {
    id: 'mod_ma_05',
    trackId: 'track_ma',
    title: 'Pharmacology Basics',
    order: 5,
    description:
      'Introduces medication terminology, the rights of medication administration, common dosage forms and routes, and documentation practices.',
  },
  {
    id: 'mod_ma_06',
    trackId: 'track_ma',
    title: 'Medical Terminology',
    order: 6,
    description:
      'Builds a working vocabulary using prefixes, root words, suffixes, and common abbreviations organized by body system.',
  },
  {
    id: 'mod_ma_07',
    trackId: 'track_ma',
    title: 'EKG Basics',
    order: 7,
    description:
      'Covers cardiac electrical conduction, 12-lead EKG electrode placement, and recognition of common tracing artifacts.',
  },
  {
    id: 'mod_ma_08',
    trackId: 'track_ma',
    title: 'Administrative Procedures',
    order: 8,
    description:
      'Develops front-office skills including scheduling, telephone communication, health records, and basic billing and insurance concepts.',
  },
  {
    id: 'mod_ma_09',
    trackId: 'track_ma',
    title: 'Legal and Ethical Responsibilities',
    order: 9,
    description:
      'Explains patient privacy, confidentiality, informed consent, scope of practice, and accurate documentation as legal safeguards.',
  },
  {
    id: 'mod_ma_10',
    trackId: 'track_ma',
    title: 'Final Readiness Review',
    order: 10,
    description:
      'Consolidates the full track with a structured readiness checklist and practical exam-day strategies.',
  },
  // ---- Phlebotomy Technician ----
  {
    id: 'mod_phleb_01',
    trackId: 'track_phleb',
    title: 'Safety and Infection Control',
    order: 1,
    description:
      'Establishes the safety foundation for blood collection, including standard precautions, personal protective equipment, and sharps handling.',
  },
  {
    id: 'mod_phleb_02',
    trackId: 'track_phleb',
    title: 'Anatomy and Physiology Basics',
    order: 2,
    description:
      'Reviews the circulatory system, commonly used veins for venipuncture, blood composition, and the basics of hemostasis.',
  },
  {
    id: 'mod_phleb_03',
    trackId: 'track_phleb',
    title: 'Venipuncture Equipment',
    order: 3,
    description:
      'Introduces needles, evacuated tubes, winged infusion sets, tourniquets, and site preparation supplies used in blood collection.',
  },
  {
    id: 'mod_phleb_04',
    trackId: 'track_phleb',
    title: 'Order of Draw',
    order: 4,
    description:
      'Explains the recommended order of draw for evacuated tubes and why following it prevents additive carryover and inaccurate results.',
  },
  {
    id: 'mod_phleb_05',
    trackId: 'track_phleb',
    title: 'Specimen Handling',
    order: 5,
    description:
      'Covers labeling, additive inversion, transport, storage, and processing steps that preserve specimen integrity after collection.',
  },
  {
    id: 'mod_phleb_06',
    trackId: 'track_phleb',
    title: 'Patient Identification',
    order: 6,
    description:
      'Details positive patient identification practices and communication strategies for special patient populations.',
  },
  {
    id: 'mod_phleb_07',
    trackId: 'track_phleb',
    title: 'Complications and Corrective Action',
    order: 7,
    description:
      'Prepares students to recognize and respond to common venipuncture complications and to decide when a recollection is required.',
  },
  {
    id: 'mod_phleb_08',
    trackId: 'track_phleb',
    title: 'Quality Assurance',
    order: 8,
    description:
      'Focuses on preanalytical quality, hemolysis prevention, documentation, and incident reporting as part of a quality culture.',
  },
  {
    id: 'mod_phleb_09',
    trackId: 'track_phleb',
    title: 'Professional Standards',
    order: 9,
    description:
      'Addresses ethics, confidentiality, professional conduct, and teamwork within the laboratory and patient care departments.',
  },
  {
    id: 'mod_phleb_10',
    trackId: 'track_phleb',
    title: 'Final Readiness Review',
    order: 10,
    description:
      'Consolidates the full track with a structured readiness checklist and practical exam-day strategies.',
  },
  // ---- Clinical Laboratory Assisting ----
  {
    id: 'mod_cla_01',
    trackId: 'track_cla',
    title: 'Laboratory Safety',
    order: 1,
    description:
      'Introduces laboratory hazard classes, safety rules, personal protective equipment, spill response, and regulated waste disposal.',
  },
  {
    id: 'mod_cla_02',
    trackId: 'track_cla',
    title: 'Specimen Collection',
    order: 2,
    description:
      'Covers collection fundamentals and professional patient interaction for blood, urine, and other common specimen types.',
  },
  {
    id: 'mod_cla_03',
    trackId: 'track_cla',
    title: 'Specimen Processing',
    order: 3,
    description:
      'Explains receiving, accessioning, centrifugation, aliquoting, storage, and the criteria for rejecting unsuitable specimens.',
  },
  {
    id: 'mod_cla_04',
    trackId: 'track_cla',
    title: 'Basic Lab Equipment',
    order: 4,
    description:
      'Familiarizes students with microscopes, centrifuges, analyzers, pipettes, and other routine measurement tools in the laboratory.',
  },
  {
    id: 'mod_cla_05',
    trackId: 'track_cla',
    title: 'Quality Control',
    order: 5,
    description:
      'Introduces quality control principles, calibration, control materials, and basic troubleshooting when results fall outside limits.',
  },
  {
    id: 'mod_cla_06',
    trackId: 'track_cla',
    title: 'Medical Terminology',
    order: 6,
    description:
      'Builds laboratory vocabulary using word parts, common test names, and abbreviations encountered on orders and reports.',
  },
  {
    id: 'mod_cla_07',
    trackId: 'track_cla',
    title: 'Laboratory Workflow',
    order: 7,
    description:
      'Traces the testing cycle from order to reported result, including priorities, stat handling, and turnaround time expectations.',
  },
  {
    id: 'mod_cla_08',
    trackId: 'track_cla',
    title: 'Communication and Professionalism',
    order: 8,
    description:
      'Develops professional communication, teamwork, and customer service skills for interactions with patients and care teams.',
  },
  {
    id: 'mod_cla_09',
    trackId: 'track_cla',
    title: 'Documentation',
    order: 9,
    description:
      'Covers accurate recordkeeping, data entry, confidentiality requirements, and basic regulatory awareness for laboratory assistants.',
  },
  {
    id: 'mod_cla_10',
    trackId: 'track_cla',
    title: 'Final Readiness Review',
    order: 10,
    description:
      'Consolidates the full track with a structured readiness checklist and practical exam-day strategies.',
  },
]

export const LESSONS: Lesson[] = [
  // ================= Medical Assistant =================
  {
    id: 'les_ma_01_1',
    moduleId: 'mod_ma_01',
    title: 'Foundations of Patient-Centered Care',
    order: 1,
    durationMin: 20,
    media: [
      {
        src: 'lessons/ma-patient-care.png',
        alt: 'Medical assistant speaking at eye level with an elderly patient',
        caption: 'Therapeutic communication: sit at eye level and listen actively',
      },
    ],
    content: [
      'Patient-centered care means treating every patient as a whole person rather than a set of symptoms. Medical assistants are often the first clinical team member a patient meets, so the tone they set during greeting, rooming, and intake shapes the entire visit. Listening actively, using the patient’s preferred name, and explaining each step before performing it builds trust and improves the quality of information the patient shares.',
      'Therapeutic communication is a deliberate skill. Open-ended questions invite patients to describe concerns in their own words, while closed questions confirm specific facts. Nonverbal behavior matters just as much: sitting at eye level, facing the patient, and avoiding rushed body language signals respect. When a patient seems anxious or confused, pausing to acknowledge the feeling before continuing is more effective than pushing through a checklist.',
      'Cultural awareness is part of patient-centered care. Patients differ in language, health beliefs, family roles, and comfort with touch or eye contact. The medical assistant does not need to memorize every tradition, but must ask respectful questions, avoid assumptions, and arrange qualified interpretation when language barriers exist rather than relying on family members to translate medical details.',
    ],
    sections: [
      {
        heading: 'Core Communication Techniques',
        bullets: [
          'Open-ended questions such as “What concerns brought you in today?” invite full answers',
          'Active listening: let the patient finish, then restate what you heard to confirm',
          'Empathy statements name the feeling without judging it: “That sounds frustrating”',
          'Plain language: replace jargon with everyday words and check understanding',
          'Teach-back: ask the patient to explain the instructions in their own words',
        ],
      },
      {
        heading: 'Adapting to Individual Patients',
        paragraphs: [
          'Health literacy varies widely, and many patients who nod along do not actually understand medical instructions. Using plain words, short sentences, and teach-back closes that gap far more reliably than asking “Do you understand?”',
          'Language access is a quality and safety issue, not a courtesy. Qualified medical interpreters should be used for clinical conversations; family members, especially children, can omit, soften, or misunderstand critical details.',
        ],
      },
      {
        heading: 'Common Communication Pitfalls',
        bullets: [
          'Interrupting patients within their first few sentences',
          'Stacking multiple questions into one breath',
          'False reassurance such as “Everything will be fine”',
          'Using jargon like “hypertension” or “NPO” without explanation',
          'Multitasking while the patient is speaking',
        ],
      },
    ],
    callouts: [
      {
        variant: 'tip',
        title: 'Clinical pearl',
        text: 'Teach-back is the fastest way to find misunderstandings: “So I know I explained it well, can you tell me how you will take this medication?”',
      },
      {
        variant: 'exam',
        title: 'Readiness focus',
        text: 'Be ready to distinguish open-ended from closed questions and to identify which response in a scenario demonstrates therapeutic communication.',
      },
    ],
    keyPoints: [
      'Patient-centered care treats the whole person, not just the presenting complaint',
      'Open-ended questions gather richer information than closed questions',
      'Nonverbal communication strongly influences patient trust',
      'Teach-back verifies understanding better than asking if the patient understands',
      'Use qualified interpreters instead of family members for language barriers',
    ],
  },
  {
    id: 'les_ma_01_2',
    moduleId: 'mod_ma_01',
    title: 'Patient Comfort, Privacy, and Dignity',
    order: 2,
    durationMin: 18,
    content: [
      'Comfort begins with the physical environment. Examination rooms should be clean, at a comfortable temperature, and stocked so the patient is never left exposed while staff search for supplies. Before any examination or procedure, the medical assistant explains what will happen, offers a gown or drape sized appropriately, and gives the patient privacy to change with clear instructions about what to remove and how to wear the gown.',
      'Privacy also applies to conversations. Discussing symptoms, test results, or billing within earshot of other patients violates confidentiality expectations even when no harm is intended. Doors should be closed for sensitive discussions, computer screens positioned away from public view, and charts or printouts never left unattended on counters.',
      'Dignity is preserved through small, consistent actions: knocking before entering, keeping the patient covered except for the area being examined, and speaking to the patient rather than about the patient when others are in the room. For patients who are elderly, disabled, or anxious, allowing extra time and offering assistance without insisting on it shows respect for independence.',
    ],
    sections: [
      {
        heading: 'Creating a Private Environment',
        bullets: [
          'Knock and announce yourself before entering any occupied room',
          'Close the door fully before discussing or exposing anything sensitive',
          'Provide a gown and drape sized to the patient, with clear changing instructions',
          'Position computer screens away from doorways and public view',
          'Offer a chaperone for sensitive examinations per office policy',
        ],
      },
      {
        heading: 'Draping Basics by Examination Type',
        table: {
          caption: 'General draping guidance for common examinations',
          headers: ['Examination type', 'Draping guidance'],
          rows: [
            ['General physical', 'Gown open to the back; drape across the lap and legs'],
            ['Abdominal examination', 'Gown raised or opened in front; drape covers chest and legs, exposing only the abdomen'],
            ['Upper extremity', 'Sleeve removed or gown adjusted; rest of the body stays covered'],
            ['Lower extremity', 'Drape folded back over one leg at a time; gown remains in place'],
          ],
        },
      },
      {
        heading: 'Protecting Information Privacy',
        paragraphs: [
          'Privacy rules apply to spoken, written, and electronic information equally. A conversation overheard in a hallway can cause the same harm as a misdirected fax, so the standard is the same everywhere: share only with those who need the information for care, in spaces where others cannot overhear.',
        ],
      },
    ],
    callouts: [
      {
        variant: 'warning',
        title: 'Common error',
        text: 'Hallway, elevator, and break room conversations about patients are among the most frequent real-world privacy violations, even when no names are used.',
      },
    ],
    keyPoints: [
      'Prepare the room before the patient arrives to avoid unnecessary exposure',
      'Close doors and shield screens to protect spoken and visual privacy',
      'Knock, drape appropriately, and speak to the patient directly',
      'Expose only the body area being examined, one area at a time',
      'Offer assistance while respecting patient independence',
    ],
  },
  {
    id: 'les_ma_02_1',
    moduleId: 'mod_ma_02',
    title: 'The Patient Visit Flow',
    order: 1,
    durationMin: 18,
    content: [
      'A typical ambulatory visit moves through predictable stages: check-in, rooming, provider examination, any ordered procedures, and checkout. Understanding this flow lets the medical assistant anticipate needs instead of reacting to delays. Reviewing the schedule at the start of the day, confirming that records and lab results are available, and flagging patients who may need extra time all prevent bottlenecks before they form.',
      'During check-in, staff verify demographic and insurance information and collect any required forms. Rooming then transitions the patient from the waiting area to the examination room. After the provider visit, the medical assistant may perform ordered procedures such as an EKG or injections per scope of practice and provider orders, then guide the patient to checkout for scheduling follow-ups and receiving visit summaries.',
      'Smooth workflow depends on communication between the front and back office. If a provider is running behind, notifying waiting patients promptly and offering options respects their time. A brief team huddle at the start of each session to review complex visits, supply issues, and room assignments keeps the whole team aligned.',
    ],
    sections: [
      {
        heading: 'Stages of a Typical Ambulatory Visit',
        steps: [
          'Check-in: verify demographics and insurance, collect forms and copayments',
          'Rooming: verify identity, measure vital signs, review medications, record the chief complaint',
          'Provider examination: provider evaluates the patient and determines orders',
          'Ordered procedures: perform EKGs, injections, or specimen collection per provider orders',
          'Checkout: schedule follow-ups, provide visit summaries and patient instructions',
        ],
      },
      {
        heading: 'Scheduling Methods Compared',
        table: {
          caption: 'Common outpatient scheduling methods',
          headers: ['Method', 'How it works', 'Best suited for'],
          rows: [
            ['Time-specified', 'Each patient receives a specific appointment time', 'Practices with predictable visit lengths'],
            ['Wave', 'Several patients are scheduled at the top of the hour and seen in arrival order', 'Practices with variable visit lengths or frequent no-shows'],
            ['Modified wave', 'Patients are grouped at set points in the hour with gaps for catch-up', 'Balancing steady flow with flexibility'],
            ['Double booking', 'Two patients share one slot when one visit is expected to be brief', 'Short visits such as blood-pressure checks, used sparingly'],
          ],
        },
      },
      {
        heading: 'Keeping the Day on Track',
        bullets: [
          'Hold a brief team huddle before each session to review complex visits and room assignments',
          'Confirm records, referrals, and lab results are available before the patient arrives',
          'Stock and prepare rooms for the procedures on the schedule',
          'Tell waiting patients promptly about delays and offer options',
        ],
      },
    ],
    callouts: [
      {
        variant: 'tip',
        title: 'Clinical pearl',
        text: 'A two-minute morning huddle prevents most afternoon bottlenecks: you learn about the complex visit, the missing referral, and the broken equipment before patients are in the building.',
      },
    ],
    keyPoints: [
      'Visits follow a predictable sequence from check-in through checkout',
      'Reviewing the schedule in advance prevents avoidable delays',
      'Wave and modified wave scheduling absorb variable visit lengths',
      'Front-office and back-office communication keeps flow moving',
      'Inform waiting patients promptly when the schedule slips',
    ],
  },
  {
    id: 'les_ma_02_2',
    moduleId: 'mod_ma_02',
    title: 'Rooming and Preparing Patients',
    order: 2,
    durationMin: 18,
    content: [
      'Rooming is the structured intake process that prepares both the patient and the provider. Core steps include greeting the patient by name, verifying identity, escorting the patient to the examination room, measuring vital signs, recording weight and height as indicated, reviewing medications and allergies, and documenting the chief complaint in the patient’s own words. Completing these steps consistently means the provider enters the room with accurate, current information.',
      'Medication reconciliation is a safety-critical part of rooming. The medical assistant asks the patient to describe every medication actually being taken, including over-the-counter products and supplements, and compares that list against the record. Discrepancies are documented and brought to the provider’s attention rather than silently corrected.',
      'Preparation also means readying the room for the planned visit type. For a procedure, instruments and supplies are arranged using aseptic technique before the patient is brought in. For a screening visit, required forms and equipment are staged. Ending the rooming process with a brief orientation, such as letting the patient know the provider will be in shortly, reduces anxiety and repeated calls for staff.',
    ],
    sections: [
      {
        heading: 'The Rooming Sequence',
        steps: [
          'Greet the patient by name and verify identity with two identifiers',
          'Escort the patient to the examination room and offer assistance as needed',
          'Measure and record vital signs, weight, and height as indicated',
          'Review and update the medication list, including over-the-counter products',
          'Verify and document allergies and any previous reactions',
          'Record the chief complaint in the patient’s own words',
          'Orient the patient: what happens next and approximately when',
        ],
      },
      {
        heading: 'Medication Reconciliation Essentials',
        bullets: [
          'Ask what the patient actually takes, not what the chart says they should take',
          'Include over-the-counter medicines, vitamins, and herbal supplements',
          'Note dose, frequency, and the last time each medication was taken',
          'Document discrepancies and alert the provider; never silently fix the list',
        ],
      },
      {
        heading: 'Documenting the Chief Complaint',
        paragraphs: [
          'The chief complaint is the reason for the visit stated concisely in the patient’s own words, ideally quoted. “My right knee has been swollen for three days” is far more useful to the provider than a paraphrase like “joint pain,” because it preserves the patient’s own framing, location, and timeline.',
        ],
      },
    ],
    callouts: [
      {
        variant: 'safety',
        title: 'Safety check',
        text: 'Verify allergies at every visit, before any medication or procedure. A documented allergy from a past visit may be incomplete; ask about new reactions each time.',
      },
    ],
    keyPoints: [
      'Rooming includes identity verification, vitals, medication review, and chief complaint',
      'Document the chief complaint in the patient’s own words',
      'Medication reconciliation compares what the patient actually takes with the record',
      'Verify allergies at every visit, every time',
      'Stage supplies and equipment before the patient enters the room',
    ],
  },
  {
    id: 'les_ma_03_1',
    moduleId: 'mod_ma_03',
    title: 'Measuring Temperature, Pulse, and Respiration',
    order: 1,
    durationMin: 22,
    content: [
      'Temperature, pulse, and respiration are usually measured together at the start of an encounter. Temperature can be taken by oral, tympanic, temporal, axillary, or rectal routes, and the route must be documented because normal ranges differ slightly by site. Oral measurement should wait at least 15 minutes after the patient has had hot or cold drinks. Tympanic readings are fast but require proper positioning of the probe in the ear canal for accuracy.',
      'Pulse is most often measured at the radial artery on the thumb side of the wrist, using the pads of the index and middle fingers rather than the thumb, which has its own pulse. Count for 30 seconds and multiply by two when the rhythm is regular; count for a full minute when it is irregular, very fast, or very slow. Record the rate, rhythm, and strength, and note normal adult resting rates of roughly 60 to 100 beats per minute.',
      'Respirations should be counted without telling the patient, because awareness of breathing changes it. A common technique is to keep the fingers on the wrist as if still taking the pulse while watching the chest rise and fall. Count for 30 seconds and double for regular breathing, or a full minute for irregular patterns. Normal adult resting respiration is about 12 to 20 breaths per minute, and any labored, shallow, or noisy breathing should be documented and reported.',
    ],
    media: [
      {
        src: 'lessons/ma-vital-signs.png',
        alt: "Medical assistant measuring a patient's blood pressure with thermometer and pulse oximeter on a tray",
        caption: 'Vital signs equipment: sphygmomanometer, thermometer, and pulse oximeter',
      },
    ],
    sections: [
      {
        heading: 'Normal Adult Vital Sign Ranges',
        table: {
          caption: 'Reference ranges for a resting adult',
          headers: ['Measurement', 'Normal adult range', 'Notes'],
          rows: [
            ['Temperature (oral)', '97.8–99.1 °F (36.5–37.3 °C)', 'Route must be documented; ranges vary slightly by site'],
            ['Pulse', '60–100 beats per minute', 'Count a full minute if the rhythm is irregular'],
            ['Respiration', '12–20 breaths per minute', 'Count discreetly; note effort and sounds'],
            ['Blood pressure', 'Less than 120/80 mmHg', 'Seated, arm supported at heart level'],
            ['Oxygen saturation (SpO2)', '95% or higher', 'At sea level; follow provider guidance for patients with lung disease'],
          ],
        },
      },
      {
        heading: 'Measuring Pulse and Respiration',
        steps: [
          'Position the patient seated or lying comfortably with the arm supported',
          'Place the pads of your index and middle fingers over the radial artery',
          'Count beats for 30 seconds and multiply by 2 if regular; count a full minute if irregular',
          'Note the rate, rhythm (regular or irregular), and strength',
          'Keep your fingers in place and watch the chest rise and fall without announcing it',
          'Count respirations for 30 seconds and multiply by 2, or a full minute if irregular',
          'Record both values immediately with the patient’s position',
        ],
      },
      {
        heading: 'Temperature Routes at a Glance',
        table: {
          headers: ['Route', 'Typical use', 'Key considerations'],
          rows: [
            ['Oral', 'Most cooperative adults and older children', 'Wait 15 minutes after hot or cold drinks, smoking, or gum'],
            ['Tympanic (ear)', 'Fast screening for children and adults', 'Position the probe to seal the ear canal; earwax and angle affect accuracy'],
            ['Temporal artery (forehead)', 'Quick, noninvasive screening', 'Swipe per device instructions; sweat can affect readings'],
            ['Axillary (armpit)', 'When other routes are not possible', 'Least accurate; keep the arm tight against the body'],
            ['Rectal', 'Most accurate core reading when indicated', 'Invasive; use lubricant, privacy, and a dedicated probe'],
          ],
        },
      },
    ],
    callouts: [
      {
        variant: 'warning',
        title: 'Common error',
        text: 'An oral temperature taken right after coffee or ice water can be off by a full degree. Check when the patient last ate or drank before choosing the route.',
      },
      {
        variant: 'tip',
        title: 'Clinical pearl',
        text: 'Count respirations while your fingers are still on the wrist as if taking the pulse. Announcing “I am going to count your breathing” changes the very thing you are measuring.',
      },
    ],
    keyPoints: [
      'Always document the route used for temperature',
      'Use fingertips, not the thumb, to palpate the radial pulse',
      'Count irregular pulses and respirations for a full 60 seconds',
      'Count respirations discreetly so the patient does not alter breathing',
      'Normal adult resting values: pulse 60–100, respirations 12–20, SpO2 at least 95%',
    ],
  },
  {
    id: 'les_ma_03_2',
    moduleId: 'mod_ma_03',
    title: 'Blood Pressure and Oxygen Saturation',
    order: 2,
    durationMin: 22,
    content: [
      'Accurate blood pressure measurement depends on preparation and technique. The patient should be seated with the back supported, feet flat on the floor, and the arm supported at heart level, resting quietly for several minutes first. Cuff size matters: a cuff that is too small gives a falsely high reading, and a cuff that is too large gives a falsely low one. The bladder of the cuff should wrap about 80 percent of the arm circumference.',
      'With the stethoscope placed over the brachial artery, inflate the cuff about 20 to 30 mmHg above the point where the pulse disappears, then deflate slowly at about 2 to 3 mmHg per second. The first clear tapping sound is the systolic pressure, and the point where sound disappears is the diastolic pressure. Record both numbers, the arm used, and the patient position. Never take blood pressure in an arm with an IV line, dialysis access, or recent surgery when an alternative exists.',
      'Oxygen saturation is measured with a pulse oximeter clipped to a fingertip. Remove nail polish or use an alternate site, warm cold fingers, and wait for a steady waveform before recording. A reading between about 95 and 100 percent is typical for a healthy person at sea level. Values below the range expected for the patient, or any reading paired with shortness of breath or discoloration, should be reported to the provider immediately.',
    ],
    sections: [
      {
        heading: 'Manual Blood Pressure Procedure',
        steps: [
          'Seat the patient with back supported, feet flat, and legs uncrossed; allow several minutes of rest',
          'Select the correct cuff size; the bladder should wrap about 80 percent of the arm',
          'Support the bare arm at heart level and locate the brachial pulse',
          'Place the stethoscope over the brachial artery without touching the cuff',
          'Inflate 20–30 mmHg above the point where the pulse disappears',
          'Deflate slowly at 2–3 mmHg per second while listening',
          'Record the first clear tapping sound as systolic and the disappearance of sound as diastolic',
          'Record the reading, the arm used, and the patient’s position',
        ],
      },
      {
        heading: 'Blood Pressure Categories for Adults',
        table: {
          caption: 'General adult categories used in patient education',
          headers: ['Category', 'Systolic (mmHg)', 'Diastolic (mmHg)'],
          rows: [
            ['Normal', 'Less than 120', 'Less than 80'],
            ['Elevated', '120–129', 'Less than 80'],
            ['High blood pressure, stage 1', '130–139', '80–89'],
            ['High blood pressure, stage 2', '140 or higher', '90 or higher'],
          ],
        },
      },
      {
        heading: 'Pulse Oximetry Technique',
        bullets: [
          'Use a warm fingertip; cold fingers and poor circulation lower readings',
          'Remove nail polish or choose an alternate site such as a toe or earlobe',
          'Wait for a steady pulse waveform before recording the value',
          'Keep the hand still and below heart level during measurement',
          'Report low values with symptoms such as shortness of breath immediately',
        ],
      },
    ],
    callouts: [
      {
        variant: 'warning',
        title: 'Common error',
        text: 'The wrong cuff size is the most frequent avoidable BP error: too small reads falsely high, too large reads falsely low. When in doubt, measure the arm and size the cuff.',
      },
      {
        variant: 'tip',
        title: 'Clinical pearl',
        text: 'Ask about IV lines, dialysis fistulas, and breast surgery before wrapping the cuff. The other arm, or a provider-approved alternative, protects the patient from harm.',
      },
    ],
    keyPoints: [
      'Seat the patient with back supported and arm at heart level',
      'Wrong cuff size is a common cause of inaccurate readings',
      'First Korotkoff sound is systolic; disappearance of sound is diastolic',
      'Avoid arms with IV lines, fistulas, or recent surgery',
      'Typical SpO2 is 95–100 percent; report low values with symptoms promptly',
    ],
  },
  {
    id: 'les_ma_04_1',
    moduleId: 'mod_ma_04',
    title: 'Standard Precautions and Hand Hygiene',
    order: 1,
    durationMin: 20,
    media: [
      {
        src: 'lessons/ma-infection-control.png',
        alt: 'Hand hygiene at a clinical sink with soap and running water',
        caption: 'Hand hygiene is the single most effective infection-control practice',
      },
    ],
    content: [
      'Standard precautions mean treating blood and all body fluids, except sweat, as potentially infectious for every patient, regardless of diagnosis. This single assumption removes the guesswork from infection control. Personal protective equipment is selected based on the task: gloves for contact with blood or body fluids, and gowns, masks, and eye protection whenever splashes or sprays are possible. Gloves are changed between patients and never substitute for hand hygiene.',
      'Hand hygiene is the single most effective practice for preventing the spread of infection. Wash with soap and water when hands are visibly soiled and after caring for patients with suspected spore-forming infections; alcohol-based hand rub is appropriate for most other routine moments. Key moments include before and after every patient contact, before a clean or aseptic task, after contact with body fluids, and after touching the patient’s surroundings.',
      'Respiratory hygiene, safe injection practices, and proper handling of sharps complete the standard precautions picture. Needles are never recapped by hand and are discarded immediately into a puncture-resistant sharps container at the point of use. Contaminated surfaces are disinfected with an appropriate product following the label contact time, not simply wiped dry.',
    ],
    sections: [
      {
        heading: 'Hand Hygiene with Soap and Water',
        steps: [
          'Wet hands with water and apply enough soap to cover all surfaces',
          'Rub palms together, then between fingers and the backs of hands',
          'Scrub thumbs, fingertips, and under nails',
          'Continue rubbing for at least 20 seconds',
          'Rinse thoroughly under running water',
          'Dry completely with a single-use towel and use the towel to turn off the faucet',
        ],
      },
      {
        heading: 'Selecting PPE by Task',
        table: {
          caption: 'Match protection to the exposure risk of the task',
          headers: ['Task', 'Recommended PPE'],
          rows: [
            ['Routine vital signs on intact skin', 'None routinely required; hand hygiene before and after'],
            ['Venipuncture or blood contact', 'Gloves; add face protection if splashing is possible'],
            ['Cleaning blood or body fluid spills', 'Gloves plus gown and eye protection as needed'],
            ['Assisting with splash-prone procedures', 'Gloves, gown, mask, and eye protection'],
          ],
        },
      },
      {
        heading: 'Key Moments for Hand Hygiene',
        bullets: [
          'Before and after every patient contact',
          'Before a clean or aseptic task, such as preparing an injection',
          'After contact with blood, body fluids, or contaminated items',
          'After touching the patient’s surroundings, such as bed rails and tables',
          'Immediately after removing gloves',
        ],
      },
    ],
    callouts: [
      {
        variant: 'safety',
        title: 'Safety-critical',
        text: 'Gloves are single-use per patient and never replace hand hygiene. Contamination during glove removal is common, so clean hands immediately after gloves come off.',
      },
    ],
    keyPoints: [
      'Treat all blood and body fluids as potentially infectious, for every patient',
      'Hand hygiene is the most effective single infection-control practice',
      'Soap and water are required for visible soil and spore-forming organisms',
      'Alcohol-based rub is appropriate when hands are not visibly soiled',
      'Never recap needles; discard sharps immediately at the point of use',
    ],
  },
  {
    id: 'les_ma_04_2',
    moduleId: 'mod_ma_04',
    title: 'Medical Asepsis and Instrument Processing',
    order: 2,
    durationMin: 20,
    content: [
      'Medical asepsis, often called clean technique, reduces the number and spread of microorganisms in the care environment. Daily practices include disinfecting examination tables and high-touch surfaces between patients, handling linens without shaking them, and separating clean and dirty utility areas. Surgical asepsis, or sterile technique, goes further by eliminating all microorganisms and is required for procedures such as suturing or urinary catheter insertion.',
      'Reusable instruments follow a defined processing pathway. First, contaminated instruments are cleaned to remove visible debris, because organic material shields microbes from disinfectants and sterilant chemicals. Cleaning is followed by disinfection or sterilization matched to the instrument’s intended use. Items that contact sterile tissue or the bloodstream must be sterilized, commonly with pressurized steam in an autoclave.',
      'Sterilization quality is verified with three types of indicators. Chemical indicators on packaging show that a package has been exposed to a process, internal chemical indicators confirm conditions inside the pack, and biological indicators containing resistant spores prove the sterilizer actually kills microorganisms on a scheduled basis. Packages are checked for dryness and intact wrapping before storage, and any compromised pack is reprocessed.',
    ],
    sections: [
      {
        heading: 'Levels of Decontamination',
        table: {
          caption: 'Matching the process to the instrument’s intended use',
          headers: ['Level', 'What it does', 'Examples'],
          rows: [
            ['Cleaning', 'Removes visible debris and most microbes', 'Washing instruments with detergent before further processing'],
            ['Disinfection', 'Kills most pathogens on surfaces and noncritical items', 'Disinfecting exam tables, blood pressure cuffs, stethoscopes'],
            ['Sterilization', 'Destroys all microorganisms including spores', 'Autoclaving surgical instruments that contact sterile tissue'],
          ],
        },
      },
      {
        heading: 'Instrument Processing Workflow',
        steps: [
          'Transport contaminated instruments to the dirty utility area without splashing',
          'Clean instruments thoroughly with detergent and water or an ultrasonic cleaner',
          'Rinse, dry, and inspect each instrument for remaining debris and damage',
          'Package instruments with internal and external chemical indicators',
          'Sterilize, commonly with pressurized steam in an autoclave',
          'Verify indicators, then store packages in a clean, dry area',
        ],
      },
      {
        heading: 'Sterilization Monitoring Tools',
        bullets: [
          'External chemical indicators show a package went through a process',
          'Internal chemical indicators confirm conditions inside the pack were met',
          'Biological indicators with resistant spores prove the sterilizer kills microbes, run on a schedule',
          'Failed loads are quarantined and reprocessed, never released on assumption',
        ],
      },
    ],
    callouts: [
      {
        variant: 'warning',
        title: 'Common error',
        text: 'Skipping cleaning and going straight to disinfectant or the autoclave is a classic failure: organic debris shields microorganisms from the very process meant to kill them.',
      },
    ],
    keyPoints: [
      'Medical asepsis reduces microbes; surgical asepsis eliminates them',
      'Cleaning must always precede disinfection or sterilization',
      'Steam autoclaving is the most common sterilization method for instruments',
      'Chemical indicators verify exposure; biological indicators verify killing power',
      'Check packages for dryness and intact wrapping before storage',
    ],
  },
  {
    id: 'les_ma_05_1',
    moduleId: 'mod_ma_05',
    title: 'Medication Fundamentals and the Rights of Administration',
    order: 1,
    durationMin: 20,
    media: [
      {
        src: 'lessons/ma-pharmacology.png',
        alt: 'Medication label checked against a patient chart with common dosage forms',
        caption: 'Verify the medication label against the order before administration',
      },
    ],
    content: [
      'Medications have several names: the chemical name describing the molecular structure, the generic name that is the official nonproprietary name, and one or more brand or trade names. Medical assistants should recognize generic and common brand names because orders, labels, and patient statements may use either. Medications are also grouped by the body system or condition they treat, which helps predict purpose and common side effects.',
      'Safe administration is organized around the rights of medication administration, commonly taught as the right patient, right drug, right dose, right route, right time, right documentation, right reason, and right to refuse. Every right is verified every time, using at least two patient identifiers and a three-way comparison among the provider order, the medication label, and the prepared dose. Medications are prepared for one patient at a time and never left unattended.',
      'Medical assistants administer medications only within their scope of practice and under provider orders and supervision as defined by state rules and employer policy. Any uncertainty about an order, an allergy flag, an unexpected appearance of a medication, or a patient question is a reason to stop and verify with the provider before proceeding, never a reason to guess.',
    ],
    sections: [
      {
        heading: 'The Rights of Medication Administration',
        bullets: [
          'Right patient: verify with two identifiers, such as name and date of birth',
          'Right drug: compare the label against the order',
          'Right dose: confirm the amount and any calculations',
          'Right route: oral, injectable, topical, or other as ordered',
          'Right time: scheduled administration windows matter',
          'Right documentation: record immediately after giving, never before',
          'Right reason: the medication should match the patient’s condition',
          'Right to refuse: patients may decline; respect, document, and report it',
        ],
      },
      {
        heading: 'The Three-Way Label Check',
        steps: [
          'First check: compare the medication label to the order when taking it from storage',
          'Second check: compare again before preparing or drawing up the dose',
          'Third check: compare the label, order, and prepared dose before administration',
        ],
      },
      {
        heading: 'Drug Names and Classes',
        paragraphs: [
          'Every medication has a generic name and may have one or more brand names; for example, a single pain reliever may be ordered generically but described by the patient under a brand name. Drug classes group medications by their action, such as antibiotics, analgesics, or antihypertensives, and knowing the class helps anticipate the purpose and the common precautions.',
        ],
      },
    ],
    callouts: [
      {
        variant: 'safety',
        title: 'Safety-critical',
        text: 'If anything looks wrong — an unfamiliar dose, an allergy flag, a tablet that looks different than usual — stop and verify with the provider before administering. Checking is always free; an error is not.',
      },
      {
        variant: 'exam',
        title: 'Readiness focus',
        text: 'Expect questions asking you to list or apply the rights of administration and to identify the correct action when an order seems unclear.',
      },
    ],
    keyPoints: [
      'Know the difference between generic and brand names',
      'Verify every right of administration for every dose',
      'Use two patient identifiers and compare order, label, and dose',
      'Prepare medications for one patient at a time and never leave them unattended',
      'Stop and clarify with the provider whenever anything is unclear',
    ],
  },
  {
    id: 'les_ma_05_2',
    moduleId: 'mod_ma_05',
    title: 'Dosage Forms, Routes, and Documentation',
    order: 2,
    durationMin: 20,
    content: [
      'Dosage forms include solids such as tablets and capsules, liquids such as solutions and suspensions, semisolids such as creams and ointments, and inhaled, injectable, and transdermal forms. The form affects how quickly the medication acts and how it must be handled. Enteric-coated and extended-release tablets, for example, must not be crushed, because crushing destroys the design that controls where and how fast the drug is released.',
      'Routes of administration include oral, sublingual, topical, transdermal, inhalation, rectal, and parenteral routes such as intradermal, subcutaneous, and intramuscular injection. Each route has characteristic absorption speed and injection technique: intradermal injections use a shallow angle just under the skin, subcutaneous injections enter the fatty layer, and intramuscular injections reach deep muscle with a longer needle and a 90-degree angle.',
      'Documentation completes administration. Record the medication name, dose, route, site, time, and any patient response or refusal, immediately after giving the medication rather than in advance. Errors or near misses are reported honestly through the facility’s incident process; prompt reporting protects the patient and helps the team fix system weaknesses. Controlled substances additionally require accurate counts and secure storage.',
    ],
    sections: [
      {
        heading: 'Injection Routes at a Glance',
        table: {
          caption: 'General technique reference for parenteral routes',
          headers: ['Route', 'Insertion angle', 'Tissue target', 'Typical uses'],
          rows: [
            ['Intradermal', '10–15 degrees', 'Just under the skin surface', 'Skin testing such as tuberculin screening'],
            ['Subcutaneous', '45–90 degrees', 'Fatty layer beneath the skin', 'Insulin and certain anticoagulants'],
            ['Intramuscular', '90 degrees', 'Deep muscle tissue', 'Many vaccines and depot medications'],
          ],
        },
      },
      {
        heading: 'Common Dosage Forms and Handling Rules',
        bullets: [
          'Enteric-coated and extended-release tablets: never crush, split, or chew',
          'Suspensions: shake well so the dose is evenly distributed',
          'Sublingual tablets: place under the tongue; do not swallow or give with water',
          'Transdermal patches: apply to clean, dry, intact skin; remove the old patch first',
          'Inhalers: shake, coordinate actuation with a slow deep breath',
        ],
      },
      {
        heading: 'What to Document After Administration',
        bullets: [
          'Medication name, dose, route, and injection site',
          'Date and time of administration',
          'Patient response, including any adverse reaction',
          'Refusals, with the reason if given, reported to the provider',
          'Your name or initials per office policy',
        ],
      },
    ],
    callouts: [
      {
        variant: 'warning',
        title: 'Common error',
        text: 'Crushing an extended-release tablet can deliver a full day’s dose at once. If a patient cannot swallow a tablet, contact the provider for an alternative form instead.',
      },
    ],
    keyPoints: [
      'Do not crush enteric-coated or extended-release tablets',
      'Match needle length and angle to the injection route',
      'Shake suspensions and remove old transdermal patches',
      'Document immediately after administration, never before',
      'Report errors and near misses through the incident process',
    ],
  },
  {
    id: 'les_ma_06_1',
    moduleId: 'mod_ma_06',
    title: 'Word Parts: Prefixes, Roots, and Suffixes',
    order: 1,
    durationMin: 18,
    content: [
      'Most medical terms are built from three parts. The root carries the core meaning, often naming an organ or structure, such as cardi for heart or gastr for stomach. The prefix comes first and modifies the meaning with information about number, position, or status, such as tachy for fast or hypo for below normal. The suffix comes last and usually indicates a condition, procedure, or specialty, such as itis for inflammation or ectomy for surgical removal.',
      'A combining vowel, usually the letter o, links a root to a suffix or another root to make the term pronounceable. Cardi plus the combining vowel o plus the suffix logy produces cardiology, the study of the heart. When a suffix begins with a vowel, the combining vowel is usually dropped, as in gastritis rather than gastroitis.',
      'Learning word parts pays off far beyond memorizing lists. Faced with an unfamiliar term, a student can break it apart and reason out the meaning: bradycardia splits into brady, meaning slow, cardi, meaning heart, and ia, meaning condition, giving a slow heart condition. This analytical skill transfers directly to reading orders, chart entries, and patient instructions.',
    ],
    sections: [
      {
        heading: 'High-Frequency Word Parts',
        table: {
          caption: 'A starter reference for decoding medical terms',
          headers: ['Word part', 'Type', 'Meaning', 'Example term'],
          rows: [
            ['cardi/o', 'Root', 'Heart', 'Cardiology'],
            ['gastr/o', 'Root', 'Stomach', 'Gastritis'],
            ['hepat/o', 'Root', 'Liver', 'Hepatomegaly'],
            ['tachy-', 'Prefix', 'Fast', 'Tachycardia'],
            ['brady-', 'Prefix', 'Slow', 'Bradycardia'],
            ['hyper-', 'Prefix', 'Above normal', 'Hypertension'],
            ['hypo-', 'Prefix', 'Below normal', 'Hypoglycemia'],
            ['-itis', 'Suffix', 'Inflammation', 'Appendicitis'],
            ['-ectomy', 'Suffix', 'Surgical removal', 'Appendectomy'],
            ['-algia', 'Suffix', 'Pain', 'Arthralgia'],
          ],
        },
      },
      {
        heading: 'How the Combining Vowel Works',
        paragraphs: [
          'The combining vowel, usually o, joins a root to another word part to make the term pronounceable. It is kept before suffixes that start with a consonant (cardi/o + -logy = cardiology) and usually dropped before suffixes that start with a vowel (gastr/o + -itis = gastritis, not gastroitis).',
        ],
      },
      {
        heading: 'Decoding Unfamiliar Terms',
        bullets: [
          'Read the suffix first: it usually tells you what kind of thing the term describes',
          'Then the root: it names the structure or substance involved',
          'Then the prefix: it modifies quantity, speed, position, or status',
          'Example: hepatomegaly = hepat/o (liver) + -megaly (enlargement) = enlarged liver',
        ],
      },
    ],
    callouts: [
      {
        variant: 'tip',
        title: 'Study strategy',
        text: 'Learn word parts in families. If you know cardi, you can decode cardiology, bradycardia, tachycardia, and cardiomegaly in one step.',
      },
    ],
    keyPoints: [
      'Root words carry the core meaning of a term',
      'Prefixes modify meaning; suffixes indicate condition, procedure, or specialty',
      'The combining vowel o links word parts and is dropped before vowel-initial suffixes',
      'Decode suffix first, then root, then prefix',
      'Breaking unfamiliar terms into parts reveals their meaning',
    ],
  },
  {
    id: 'les_ma_06_2',
    moduleId: 'mod_ma_06',
    title: 'Body Systems Terminology and Abbreviations',
    order: 2,
    durationMin: 18,
    content: [
      'Terminology is easier to retain when organized by body system. The cardiovascular system gives terms like hypertension and angiogram; the respiratory system gives dyspnea, meaning difficult breathing, and pneumonectomy, removal of a lung. Digestive system terms include gastroscopy and hepatomegaly, enlargement of the liver, while musculoskeletal terms include arthralgia, meaning joint pain, and osteopenia, meaning reduced bone mass.',
      'Abbreviations speed up charting but create risk when they are ambiguous. Common safe examples include BP for blood pressure, BMI for body mass index, and c/o for complains of. Certain abbreviations are widely flagged as dangerous because they are easily misread, such as writing U for units or using trailing zeros in decimal doses. Facilities maintain lists of abbreviations to avoid, and medical assistants should write out full words whenever meaning could be misinterpreted.',
      'Accurate spelling matters clinically. Ileum, a section of the small intestine, and ilium, a pelvic bone, differ by one letter but refer to entirely different anatomy. When documenting or transcribing, verify spellings against trusted references and read back verbal orders when policy requires. Precision in language is part of patient safety, not just professional polish.',
    ],
    sections: [
      {
        heading: 'High-Yield Terms by Body System',
        table: {
          headers: ['Body system', 'Term', 'Meaning'],
          rows: [
            ['Cardiovascular', 'Hypertension', 'Persistently high blood pressure'],
            ['Respiratory', 'Dyspnea', 'Difficult or labored breathing'],
            ['Digestive', 'Hepatomegaly', 'Enlargement of the liver'],
            ['Musculoskeletal', 'Arthralgia', 'Joint pain'],
            ['Urinary', 'Hematuria', 'Blood in the urine'],
          ],
        },
      },
      {
        heading: 'Abbreviations: Use with Care',
        bullets: [
          'Commonly accepted: BP (blood pressure), BMI (body mass index), c/o (complains of)',
          'Error-prone and widely prohibited: U for units, trailing zeros such as 5.0 mg',
          'Write out full words whenever misreading is possible',
          'Follow your facility’s approved abbreviation list and do-not-use list',
        ],
      },
      {
        heading: 'Look-Alike and Sound-Alike Terms',
        bullets: [
          'Ileum (small intestine) vs ilium (pelvic bone)',
          'Abduction (movement away) vs adduction (movement toward)',
          'Dysphagia (difficulty swallowing) vs dysphasia (difficulty speaking)',
        ],
      },
    ],
    callouts: [
      {
        variant: 'warning',
        title: 'Common error',
        text: 'A trailing zero can turn 5 mg into a misread 50 mg. Never write 5.0 mg; write 5 mg. The reverse rule applies too: always write 0.5 mg, never .5 mg.',
      },
    ],
    keyPoints: [
      'Organize vocabulary study by body system for retention',
      'Know common abbreviations and the ones flagged as dangerous',
      'Avoid error-prone notations such as U for units or trailing zeros',
      'One-letter spelling differences can change anatomical meaning entirely',
      'Verify spellings against trusted references when documenting',
    ],
  },
  {
    id: 'les_ma_07_1',
    moduleId: 'mod_ma_07',
    title: 'Cardiac Electrical Conduction and Lead Placement',
    order: 1,
    durationMin: 24,
    content: [
      'The heart’s electrical impulse normally begins at the sinoatrial node in the right atrium, travels across the atria, pauses briefly at the atrioventricular node, then moves rapidly through the bundle of His and Purkinje fibers to trigger ventricular contraction. An electrocardiogram records this electrical activity from the skin surface, producing the familiar waves: the P wave for atrial depolarization, the QRS complex for ventricular depolarization, and the T wave for ventricular repolarization.',
      'A standard 12-lead EKG uses ten electrodes: four on the limbs and six across the chest. Limb electrodes go on the arms and legs, or on the shoulders and lower torso when movement must be minimized. Chest electrodes are placed at precise anatomical landmarks, with V1 at the fourth intercostal space at the right sternal border, V2 at the fourth intercostal space at the left sternal border, and V3 through V6 following defined positions toward the midaxillary line. Small placement errors can mimic disease on the tracing.',
      'Skin preparation improves signal quality. The sites should be clean and dry, and excess hair is clipped rather than shaved when it interferes with electrode contact. The patient lies still and relaxed, breathing normally, and is asked not to talk during the tracing. Confirming patient identity and documenting the time, symptoms, and any relevant medications on the tracing support correct interpretation.',
    ],
    media: [
      {
        src: 'lessons/ma-ekg-placement.png',
        alt: 'Diagram of 12-lead EKG electrode placement showing limb electrodes and chest electrodes V1 through V6',
        caption: 'Standard 12-lead EKG electrode placement on the chest and limbs',
      },
    ],
    sections: [
      {
        heading: 'The Conduction Pathway in Order',
        steps: [
          'Sinoatrial (SA) node fires, starting the heartbeat in the right atrium',
          'The impulse spreads across both atria, producing atrial contraction',
          'Atrioventricular (AV) node delays the impulse briefly',
          'The impulse travels down the bundle of His into the bundle branches',
          'Purkinje fibers distribute the impulse through the ventricles, producing ventricular contraction',
        ],
      },
      {
        heading: 'Chest Electrode Placement (V1–V6)',
        table: {
          caption: 'Precordial electrode landmarks',
          headers: ['Electrode', 'Placement'],
          rows: [
            ['V1', 'Fourth intercostal space, right sternal border'],
            ['V2', 'Fourth intercostal space, left sternal border'],
            ['V3', 'Midway between V2 and V4'],
            ['V4', 'Fifth intercostal space, midclavicular line'],
            ['V5', 'Anterior axillary line, level with V4'],
            ['V6', 'Midaxillary line, level with V4 and V5'],
          ],
        },
      },
      {
        heading: 'The EKG Waves and Standard Paper Timing',
        table: {
          headers: ['Feature', 'What it represents or equals'],
          rows: [
            ['P wave', 'Atrial depolarization'],
            ['QRS complex', 'Ventricular depolarization'],
            ['T wave', 'Ventricular repolarization'],
            ['One small box (1 mm)', '0.04 seconds at the standard 25 mm/s paper speed'],
            ['One large box (5 mm)', '0.20 seconds'],
            ['Five large boxes', '1 second'],
          ],
        },
      },
    ],
    callouts: [
      {
        variant: 'tip',
        title: 'Clinical pearl',
        text: 'Find the fourth intercostal space by locating the sternal angle, the ridge where the collarbone line meets the breastbone. Anchoring V1 and V2 correctly makes V3 through V6 fall into place.',
      },
      {
        variant: 'exam',
        title: 'Readiness focus',
        text: 'Know which wave matches which electrical event, the standard paper speed of 25 mm/s, and the landmarks for V1 through V6.',
      },
    ],
    keyPoints: [
      'The SA node is the heart’s natural pacemaker',
      'P wave, QRS complex, and T wave represent the cardiac cycle’s electrical events',
      'A 12-lead EKG uses 10 electrodes at defined anatomical landmarks',
      'Standard paper speed is 25 mm/s; one large box equals 0.20 seconds',
      'Precise chest electrode placement prevents misleading tracings',
    ],
  },
  {
    id: 'les_ma_07_2',
    moduleId: 'mod_ma_07',
    title: 'Performing a 12-Lead EKG and Recognizing Artifacts',
    order: 2,
    durationMin: 20,
    content: [
      'A quality tracing starts before the machine is switched on. Explain the procedure, ensure privacy, position the patient supine and comfortable, prepare the skin, and apply electrodes with firm, even contact. Check that lead wires are connected to the correct electrodes and are not crossed or strained. Enter the required patient data, then run the tracing and review it for quality before disconnecting the patient.',
      'Artifacts are distortions that are not cardiac in origin, and recognizing them is a core skill. A wandering baseline usually comes from poor electrode contact or patient breathing; muscle tremor, including shivering or the tension of a nervous patient, produces jagged irregular interference; and 60-cycle interference from nearby electrical equipment creates a fine, uniform fuzz on the tracing. Each artifact has a specific fix: reapply electrodes and prep the skin, help the patient relax and stay warm, or move away from or unplug nearby electrical devices.',
      'The medical assistant’s role is to produce a clean, accurate tracing and to recognize urgency, not to diagnose. If the patient reports chest pain, severe shortness of breath, or dizziness during the procedure, or if the tracing shows an obviously alarming pattern such as a run of very rapid wide beats, the provider is notified immediately. Completed tracings are labeled and filed or transmitted according to office policy, with patient identifiers on every page.',
    ],
    sections: [
      {
        heading: 'Performing the 12-Lead EKG',
        steps: [
          'Verify the patient with two identifiers and explain the procedure',
          'Provide privacy and position the patient supine with the chest exposed only as needed',
          'Prepare electrode sites: clean, dry skin; clip excess hair if needed',
          'Apply limb and chest electrodes at the correct landmarks with firm contact',
          'Connect lead wires without crossing or stretching them',
          'Enter patient data and run the tracing while the patient rests quietly',
          'Review the tracing for artifacts before removing electrodes',
          'Label the tracing and deliver or transmit it per office policy',
        ],
      },
      {
        heading: 'Common Artifacts and Their Fixes',
        table: {
          caption: 'Recognize the pattern, find the cause, apply the fix',
          headers: ['Artifact', 'Appearance', 'Usual cause', 'Correction'],
          rows: [
            ['Wandering baseline', 'Tracing drifts up and down', 'Poor electrode contact or deep breathing', 'Re-prep skin and reapply electrodes; coach calm breathing'],
            ['Muscle tremor', 'Jagged, irregular spikes', 'Tension, shivering, or movement', 'Warm and relax the patient; support the limbs'],
            ['60-cycle interference', 'Fine, uniform fuzz', 'Nearby electrical equipment', 'Unplug or move away from electrical devices'],
          ],
        },
      },
      {
        heading: 'When to Escalate Immediately',
        bullets: [
          'Chest pain, pressure, or pain radiating to the arm or jaw',
          'Severe shortness of breath or new confusion',
          'Fainting, near-fainting, or sudden dizziness',
          'A run of very fast, wide beats visible on the tracing',
        ],
      },
    ],
    callouts: [
      {
        variant: 'safety',
        title: 'Safety-critical',
        text: 'The medical assistant does not interpret the EKG, but must recognize urgency. Chest pain during a tracing means stop and notify the provider immediately — never finish the printout first.',
      },
    ],
    keyPoints: [
      'Review tracing quality before removing electrodes',
      'Wandering baseline usually means poor electrode contact or movement',
      'Muscle tremor and 60-cycle interference have distinct, recognizable patterns',
      'Each artifact has a specific mechanical fix',
      'Report urgent symptoms or alarming rhythms to the provider immediately',
    ],
  },
  {
    id: 'les_ma_08_1',
    moduleId: 'mod_ma_08',
    title: 'Scheduling, Records, and Telephone Skills',
    order: 1,
    durationMin: 18,
    media: [
      {
        src: 'lessons/ma-administrative.png',
        alt: 'Medical front office with scheduling calendar, phone, and patient files',
        caption: 'Front-office workflow: scheduling, communication, and records',
      },
    ],
    content: [
      'Appointment scheduling balances provider availability, visit type length, and patient needs. Different scheduling methods suit different practices: time-specified scheduling assigns each patient a set slot, wave scheduling books several patients at the top of the hour to absorb variability, and modified wave scheduling blends the two. Accurate scheduling requires knowing how long each visit type takes and building in buffer time for urgent add-on patients.',
      'Health records are legal documents as well as clinical tools. Entries are dated, timed, signed, and made in the approved format; corrections in paper records use a single line through the error with initials and date, never erasure or white-out. Electronic systems apply the same principle with audit trails. Records are released only with proper authorization, and every release is documented.',
      'Telephone communication follows a consistent structure: identify the office and yourself, verify the caller’s identity before discussing any patient information, listen without interrupting, and document the message with the date, time, caller, and content. Urgent symptoms described by phone, such as chest pain or trouble breathing, are escalated immediately according to office triage policy rather than scheduled as a routine visit.',
    ],
    sections: [
      {
        heading: 'Choosing a Scheduling Approach',
        bullets: [
          'Time-specified: one patient, one slot; best for predictable visit lengths',
          'Wave: several patients at the top of the hour, seen in arrival order',
          'Modified wave: grouped arrivals with built-in catch-up gaps',
          'Match slot length to visit type: new patient visits run longer than rechecks',
          'Reserve buffer slots for urgent same-day patients',
        ],
      },
      {
        heading: 'Answering a Clinical Telephone Call',
        steps: [
          'Identify the office and yourself by name and role',
          'Verify the caller’s identity before discussing any patient information',
          'Listen without interrupting and take notes as the caller speaks',
          'Screen for urgent symptoms such as chest pain or trouble breathing',
          'Escalate urgent calls immediately per the triage policy',
          'Document the date, time, caller, message content, and action taken',
        ],
      },
      {
        heading: 'Health Record Integrity Rules',
        bullets: [
          'Every entry is dated, timed, and attributable to the person who made it',
          'Correct paper errors with a single line, initials, and date; never erase or obscure',
          'Electronic corrections use the system’s audit trail, not deletion',
          'Release records only with proper authorization, and document every release',
        ],
      },
    ],
    callouts: [
      {
        variant: 'warning',
        title: 'Common error',
        text: 'Scheduling a caller with chest pain as a routine appointment is a serious failure. Urgent symptoms reported by phone are escalated immediately, every time.',
      },
    ],
    keyPoints: [
      'Match scheduling method and slot length to the visit type',
      'Correct paper records with a single line, initials, and date; never erase',
      'Verify caller identity before discussing patient information',
      'Escalate urgent phone symptoms immediately per triage policy',
      'Document every call and every record release',
    ],
  },
  {
    id: 'les_ma_08_2',
    moduleId: 'mod_ma_08',
    title: 'Billing, Coding, and Insurance Basics',
    order: 2,
    durationMin: 18,
    content: [
      'Medical billing translates services into claims. Diagnosis codes from the ICD system describe why the patient was seen, while procedure codes from the CPT system describe what was done. The medical assistant does not need to be a certified coder, but must capture complete encounter information, because coding can only be as accurate as the documentation behind it.',
      'Insurance basics include the key terms patients ask about most: the premium is the cost of the coverage itself, the deductible is what the patient pays before the plan begins to share costs, a copayment is a fixed amount due at the visit, and coinsurance is a percentage share of allowed charges. Verifying eligibility and benefits before the visit, and collecting copayments at check-in, prevents surprises for both the patient and the practice.',
      'Clean claims are submitted accurately the first time. Common rejection causes include wrong subscriber information, missing referral or prior authorization numbers, and mismatched diagnosis and procedure codes. Denials are worked promptly: read the explanation of benefits, correct the issue, and resubmit within the payer’s filing deadline. Professional, neutral communication with payers and patients about money is part of the role.',
    ],
    sections: [
      {
        heading: 'Key Insurance Terms Patients Ask About',
        table: {
          headers: ['Term', 'What it means'],
          rows: [
            ['Premium', 'The cost of the insurance coverage itself, usually paid monthly'],
            ['Deductible', 'What the patient pays each year before the plan shares costs'],
            ['Copayment', 'A fixed dollar amount due at the time of the visit'],
            ['Coinsurance', 'A percentage of the allowed charge the patient pays'],
          ],
        },
      },
      {
        heading: 'The Claim Lifecycle',
        steps: [
          'Verify eligibility and benefits before the visit',
          'Collect the copayment and any required forms at check-in',
          'Document the encounter completely and accurately',
          'Assign diagnosis and procedure codes from the documentation',
          'Submit the claim to the payer within the filing deadline',
          'Review the explanation of benefits and post payments',
          'Work denials: correct the issue and resubmit promptly',
        ],
      },
      {
        heading: 'Common Claim Rejection Reasons',
        bullets: [
          'Subscriber name or ID number does not match the payer’s records',
          'Missing referral or prior authorization number',
          'Diagnosis and procedure codes that do not support each other',
          'Filing after the payer’s deadline',
        ],
      },
    ],
    callouts: [
      {
        variant: 'tip',
        title: 'Front-desk pearl',
        text: 'Verifying eligibility one to two days before the visit is the single most effective way to prevent claim rejections and awkward check-in surprises.',
      },
    ],
    keyPoints: [
      'ICD codes describe diagnoses; CPT codes describe procedures',
      'Know the difference between premium, deductible, copayment, and coinsurance',
      'Verify insurance eligibility before the visit',
      'Coding can only be as accurate as the documentation behind it',
      'Work claim denials promptly within filing deadlines',
    ],
  },
  {
    id: 'les_ma_09_1',
    moduleId: 'mod_ma_09',
    title: 'Patient Privacy and Confidentiality',
    order: 1,
    durationMin: 18,
    content: [
      'Patient health information is protected by federal privacy law and by professional ethics. The core rule is minimum necessary: access, use, and share only the information needed to do your job. A medical assistant may review a chart to room a patient, but not to satisfy curiosity about a neighbor or a celebrity. Accessing records without a work-related need is a serious violation even when nothing is shared.',
      'Sharing information requires care in both directions. Test results, appointment details, and billing information are disclosed to others only with the patient’s authorization, subject to defined exceptions such as certain public health reporting. Within the office, conversations about patients stay in private areas. Outside the office, discussing cases on social media is prohibited even when names are removed, because details can identify a patient.',
      'Practical safeguards include locking computer screens when stepping away, positioning monitors away from public view, verifying fax numbers before sending, and shredding paper containing patient information. Suspected breaches are reported to the designated privacy officer promptly. Protecting privacy is not only a legal duty; it is the foundation of the trust that makes patients willing to share the information their care depends on.',
    ],
    sections: [
      {
        heading: 'The Minimum Necessary Rule in Practice',
        paragraphs: [
          'Ask one question before any access or disclosure: do I need this information to do this task? Rooming a patient justifies reviewing the chart; curiosity about a coworker’s visit does not. The rule applies to viewing as well as sharing — looking without a need is a violation even if you tell no one.',
        ],
      },
      {
        heading: 'Everyday Privacy Safeguards',
        bullets: [
          'Lock your screen every time you step away from the workstation',
          'Position monitors away from waiting areas and hallways',
          'Verify fax numbers and recipient details before sending',
          'Shred paper containing patient information; never use open trash bins',
          'Take sensitive phone conversations to a private area',
        ],
      },
      {
        heading: 'Responding to a Suspected Breach',
        steps: [
          'Stop the disclosure if it is still possible, such as recalling a misdirected fax',
          'Report the incident promptly to the designated privacy officer',
          'Document what happened, what information was involved, and when',
          'Cooperate with the review; never attempt to hide the incident',
        ],
      },
    ],
    callouts: [
      {
        variant: 'warning',
        title: 'Common error',
        text: 'Posting about a patient on social media is a violation even without a name. “You will never believe the injury I saw today” can identify someone in a small community.',
      },
      {
        variant: 'exam',
        title: 'Readiness focus',
        text: 'Expect scenario questions testing the minimum necessary rule, permitted disclosures, and the correct response to a suspected breach.',
      },
    ],
    keyPoints: [
      'Apply the minimum necessary rule to every access and disclosure',
      'Never access a record without a work-related need',
      'No patient discussion on social media, even without names',
      'Lock screens, shield monitors, verify fax numbers, and shred paper',
      'Report suspected privacy breaches promptly to the privacy officer',
    ],
  },
  {
    id: 'les_ma_09_2',
    moduleId: 'mod_ma_09',
    title: 'Scope of Practice, Consent, and Documentation',
    order: 2,
    durationMin: 18,
    content: [
      'Scope of practice defines what a medical assistant may legally and safely do. It is shaped by state rules, the delegating provider’s orders and supervision, training, and employer policy. Tasks such as administering certain injections may be permitted under provider delegation, while diagnosing, prescribing, or giving medical advice are never within the role. When asked to do something outside scope, the professional response is to decline respectfully and refer the request to the provider.',
      'Consent is a process, not a signature. Informed consent means the patient understands the nature of a procedure, its risks, benefits, and alternatives before agreeing. The provider is responsible for this explanation; the medical assistant may witness the signature and confirm the patient feels informed, but any unanswered questions go back to the provider before the procedure begins. Implied consent covers routine, low-risk actions such as taking vital signs when a patient voluntarily cooperates.',
      'Documentation protects everyone. Accurate, timely, objective entries create a record of what was done and why, and the legal maxim that work not documented was not done reflects how records are used in disputes. Entries stick to observable facts rather than opinions, avoid abbreviations that could be misread, and are never altered after the fact. Late entries are labeled as such and added per policy rather than backdated.',
    ],
    sections: [
      {
        heading: 'Within or Outside the Medical Assistant Role',
        table: {
          caption: 'General guide; always follow state rules and employer policy',
          headers: ['Activity', 'Within the MA role?'],
          rows: [
            ['Measuring vital signs and rooming patients', 'Yes, core duty'],
            ['Administering injections ordered by the provider', 'Yes, where delegation and training permit'],
            ['Witnessing an informed consent signature', 'Yes'],
            ['Explaining procedure risks and alternatives', 'No; that is the provider’s responsibility'],
            ['Diagnosing, prescribing, or giving medical advice', 'Never'],
          ],
        },
      },
      {
        heading: 'Elements of Informed Consent',
        bullets: [
          'The nature and purpose of the procedure',
          'Material risks and expected benefits',
          'Reasonable alternatives, including doing nothing',
          'The patient’s questions answered before signing',
          'Voluntary agreement without pressure',
        ],
      },
      {
      heading: 'Documentation Standards',
        bullets: [
          'Record observable facts, not opinions or judgments',
          'Chart promptly after the task, never in advance',
          'Correct errors transparently; never backdate or alter entries',
          'Label late entries as late entries per policy',
        ],
      },
    ],
    callouts: [
      {
        variant: 'exam',
        title: 'Readiness focus',
        text: 'Two phrases anchor this module on exams: the provider obtains informed consent, and work that was not documented was not done.',
      },
    ],
    keyPoints: [
      'Know and stay within your scope of practice',
      'The provider explains risks and alternatives; assistants may witness consent',
      'Implied consent covers routine cooperation such as holding out an arm for vitals',
      'Document objective facts promptly; if it was not documented, it was not done',
      'Never backdate or alter entries; label late entries per policy',
    ],
  },
  {
    id: 'les_ma_10_1',
    moduleId: 'mod_ma_10',
    title: 'Readiness Checklist',
    order: 1,
    durationMin: 16,
    content: [
      'The readiness checklist is a structured self-assessment across every content area of this track: patient care fundamentals, clinical workflow, vital signs, infection control, pharmacology basics, medical terminology, EKG basics, administrative procedures, and legal and ethical responsibilities. For each area, rate your confidence honestly and note the specific skills you can perform without hesitation, such as measuring blood pressure with correct cuff sizing or explaining the rights of medication administration.',
      'Use your practice data to direct final study time. Review missed practice questions by topic and reread the matching lessons, then redo the related knowledge checks. High-yield review points include normal vital sign ranges, standard precautions and hand hygiene moments, the sequence of a 12-lead EKG, minimum necessary privacy rules, and the difference between scope-of-practice tasks and provider-only responsibilities.',
      'Confirm the logistics early. Know your exam format, the number of questions, the time allowed, what identification and materials are required, and the rules about breaks and calculators. Complete the timed final practice test in this platform under realistic conditions, in one sitting, with no notes, at least a few days before your target date so there is time to close any remaining gaps.',
    ],
    sections: [
      {
        heading: 'Domain-by-Domain Self-Check',
        bullets: [
          'Patient care: communication techniques, privacy, and draping',
          'Workflow: visit stages, rooming sequence, scheduling methods',
          'Vital signs: normal ranges and correct technique for all five measurements',
          'Infection control: hand hygiene moments, PPE selection, instrument processing',
          'Pharmacology: the rights of administration and route technique',
          'Terminology, EKG, administration, and legal-ethical rules',
        ],
      },
      {
        heading: 'High-Yield Review Targets',
        bullets: [
          'Normal adult vital sign ranges and cuff-size errors',
          'The rights of medication administration and the three-way check',
          'EKG waves, paper timing, and artifact recognition',
          'Minimum necessary rule and correction of record errors',
          'Scope of practice boundaries',
        ],
      },
      {
        heading: 'Logistics to Confirm Early',
        bullets: [
          'Exam format, question count, and time limit',
          'Required identification and permitted materials',
          'Rules about breaks, calculators, and scratch paper',
          'Your plan for the timed final practice test in one sitting',
        ],
      },
    ],
    callouts: [
      {
        variant: 'exam',
        title: 'Readiness focus',
        text: 'Take the timed final practice test in one uninterrupted sitting with no notes, several days before your target date, so the results can still guide your last review.',
      },
    ],
    keyPoints: [
      'Self-assess every module and flag weak areas honestly',
      'Restudy topics behind missed practice questions',
      'Know your exam format, timing, and required identification',
      'Focus final review on high-yield targets rather than rereading everything',
      'Take the timed final practice test in one realistic sitting',
    ],
  },
  {
    id: 'les_ma_10_2',
    moduleId: 'mod_ma_10',
    title: 'Exam-Day Strategies',
    order: 2,
    durationMin: 16,
    content: [
      'Start the day with the basics done well: a full night of sleep, a normal meal, and arrival early enough to avoid rushing. Bring exactly the identification and materials the exam rules require and nothing prohibited. A calm, unhurried start does more for performance than any last-minute cramming, which tends to raise anxiety without adding usable knowledge.',
      'During the exam, manage the clock rather than letting it manage you. Divide the total time by the number of questions to get a rough pace, and check in periodically. Read each stem completely before looking at the choices, watch for absolute words like always and never, and eliminate clearly wrong options first. For scenario questions, identify what the question is really asking, often the safest or first action, before answering.',
      'Flag and move on when stuck instead of burning minutes on one item, and return with fresh eyes. Answer every question unless there is a penalty for guessing. When reviewing, change an answer only when you have a concrete reason, such as misreading the stem, not a vague feeling. End the exam the way you prepared for it: steadily, systematically, and trusting the work you have already done.',
    ],
    sections: [
      {
        heading: 'A Simple Pacing Plan',
        steps: [
          'Divide total minutes by question count to get seconds per question',
          'Note the clock checkpoints: quarter, half, and three-quarter marks',
          'Read the full stem before reading any answer choice',
          'Eliminate clearly wrong choices first, then compare the survivors',
          'Flag hard items and move on; return after the first pass',
          'Answer every question before time expires',
        ],
      },
      {
        heading: 'Question-Analysis Habits',
        bullets: [
          'Watch for absolute words like always and never; they often mark wrong choices',
          'Priority words like first, best, and most important signal that several options may be partially right',
          'In scenarios, ask what action is safest or comes first before choosing',
          'Treat each question independently; never assume a pattern in the answer key',
        ],
      },
      {
        heading: 'Changing Answers Wisely',
        paragraphs: [
          'Research and experience agree on one rule: change an answer only for a concrete reason, such as realizing you misread the stem or recalling a specific fact. Vague second-guessing more often moves a right answer to a wrong one than the reverse.',
        ],
      },
    ],
    callouts: [
      {
        variant: 'tip',
        title: 'Clinical pearl',
        text: 'Your first instinct on recall questions is usually right; your careful re-read on misread stems is always right. Learn to tell the difference before exam day.',
      },
      {
        variant: 'exam',
        title: 'Readiness focus',
        text: 'Unless the exam penalizes guessing, a blank answer is a guaranteed zero. Eliminate, choose the best remaining option, flag, and move.',
      },
    ],
    keyPoints: [
      'Prioritize sleep, nutrition, and early arrival over last-minute cramming',
      'Set a pace and check the clock periodically',
      'Eliminate wrong choices and identify what scenario questions really ask',
      'Flag and move on rather than stalling on one item',
      'Change answers only for a concrete reason, and answer every question',
    ],
  },
  // ================= Phlebotomy Technician =================
  {
    id: 'les_phleb_01_1',
    moduleId: 'mod_phleb_01',
    title: 'Standard Precautions and Personal Protective Equipment',
    order: 1,
    durationMin: 20,
    media: [
      {
        src: 'lessons/videos/phleb-intro.mp4',
        type: 'video',
        alt: 'Safe sharps disposal during a blood draw',
        caption: 'Video walkthrough: safety-engineered devices and sharps disposal',
      },
      {
        src: 'lessons/phleb-safety.png',
        alt: 'Disposing of a used needle into a red sharps container',
        caption: 'Activate the safety device and dispose of sharps immediately',
      },
    ],
    content: [
      'Phlebotomy carries a real risk of exposure to bloodborne pathogens such as hepatitis B, hepatitis C, and HIV. Standard precautions address that risk by treating all blood and specified body fluids as infectious for every patient, every time. This approach does not depend on knowing a patient’s diagnosis, which protects staff even when an infection has not been identified.',
      'Personal protective equipment is chosen by task. Gloves are worn for every blood collection and changed between patients, with hand hygiene before gloving and immediately after removal. Gowns, masks, and eye protection are added whenever splashing is possible, such as during certain processing steps. PPE is removed in a sequence that keeps contaminated surfaces away from skin and clothing, and it is discarded in the correct waste stream.',
      'Hand hygiene anchors the whole system. Alcohol-based rub is acceptable for routine decontamination when hands are not visibly soiled; soap and water are required for visible soil. Clean gloves are never a substitute for clean hands, and wearing the same gloves between patients is one of the most serious breaches of phlebotomy practice.',
    ],
    sections: [
      {
        heading: 'Bloodborne Pathogens to Know',
        bullets: [
          'Hepatitis B: vaccine-preventable; vaccination is strongly recommended for collectors',
          'Hepatitis C: the most common chronic bloodborne infection; no vaccine exists',
          'HIV: attacks the immune system; exposure requires prompt medical evaluation',
          'All three can be transmitted by needlesticks and splashes to broken skin or mucous membranes',
        ],
      },
      {
        heading: 'PPE Selection by Collection Task',
        table: {
          caption: 'Match PPE to the exposure risk',
          headers: ['Task', 'Recommended PPE'],
          rows: [
            ['Routine venipuncture', 'Gloves'],
            ['Capillary (fingerstick) collection', 'Gloves'],
            ['Opening or pouring specimens', 'Gloves plus eye protection; gown if splashing is likely'],
            ['Cleaning a blood spill', 'Gloves, gown, and eye protection'],
          ],
        },
      },
      {
        heading: 'Hand Hygiene Rules for Collectors',
        bullets: [
          'Perform hand hygiene before gloving and immediately after glove removal',
          'Use alcohol-based rub when hands are not visibly soiled',
          'Use soap and water for visible soil',
          'Change gloves between every patient, no exceptions',
        ],
      },
    ],
    callouts: [
      {
        variant: 'safety',
        title: 'Safety-critical',
        text: 'The same pair of gloves on two patients transmits whatever the first patient’s blood carried. Gloves are single-use, per patient, every time — no exceptions for “quick draws.”',
      },
    ],
    keyPoints: [
      'Treat all blood as potentially infectious for every patient',
      'Know the big three bloodborne pathogens: hepatitis B, hepatitis C, HIV',
      'Gloves for every collection; change between patients',
      'Hand hygiene before gloving and after glove removal',
      'Gloves never replace hand hygiene',
    ],
  },
  {
    id: 'les_phleb_01_2',
    moduleId: 'mod_phleb_01',
    title: 'Sharps Safety and Exposure Response',
    order: 2,
    durationMin: 18,
    content: [
      'Needlestick injuries are the most common source of occupational exposure to bloodborne pathogens for phlebotomists. Prevention is straightforward but nonnegotiable: activate the safety mechanism on the device immediately after withdrawal, never recap a used needle by hand, never bend or break needles, and drop the entire device directly into a puncture-resistant sharps container at arm’s reach. Sharps containers are replaced when they reach the fill line, never emptied or pressed down by hand.',
      'If an exposure does occur, speed matters. Needlesticks and cuts are washed immediately with soap and water; splashes to eyes or mucous membranes are flushed with water. The incident is reported at once to the supervisor so that evaluation, testing, and any recommended post-exposure treatment can begin promptly. Every exposure is documented according to facility policy, both for the worker’s protection and to identify preventable patterns.',
      'Safety-engineered devices, needle-free transfer systems, and calm, unhurried technique reduce risk further. Distraction is a major contributor to injuries, so the moment of needle withdrawal and disposal gets full attention, with conversation paused until the sharp is safely contained.',
    ],
    sections: [
      {
        heading: 'Safe Sharps Handling Sequence',
        steps: [
          'Position a sharps container within arm’s reach before starting the draw',
          'Withdraw the needle smoothly while applying gauze over the site',
          'Activate the device’s safety mechanism immediately with one hand',
          'Drop the entire device into the sharps container without detaching the needle',
          'Confirm the container is below the fill line; replace it if not',
        ],
      },
      {
        heading: 'Exposure Response Steps',
        steps: [
          'Wash needlesticks and cuts immediately with soap and water; flush eyes or mucous membranes with water',
          'Report the exposure to your supervisor at once, before finishing other tasks',
          'Complete the exposure incident documentation per facility policy',
          'Follow through on the medical evaluation and any recommended testing or treatment',
        ],
      },
      {
        heading: 'Injury Prevention Habits',
        bullets: [
          'Never recap, bend, break, or remove a used needle by hand',
          'Pause conversation and distractions during withdrawal and disposal',
          'Use safety-engineered devices for every collection',
          'Replace sharps containers at the fill line; never press contents down',
        ],
      },
    ],
    callouts: [
      {
        variant: 'safety',
        title: 'Safety-critical',
        text: 'Recapping is the classic needlestick scenario. The safety mechanism and the sharps container exist so the needle goes from vein to container in one motion, untouched.',
      },
      {
        variant: 'warning',
        title: 'Common error',
        text: 'Waiting until the end of a shift to report an exposure can delay time-sensitive post-exposure treatment. Report immediately, then document.',
      },
    ],
    keyPoints: [
      'Activate safety mechanisms immediately after needle withdrawal',
      'Never recap, bend, or break used needles',
      'Wash exposures immediately and report at once',
      'Every exposure is documented and medically evaluated',
      'Replace sharps containers at the fill line',
    ],
  },
  {
    id: 'les_phleb_02_1',
    moduleId: 'mod_phleb_02',
    title: 'The Circulatory System and Common Veins',
    order: 1,
    durationMin: 20,
    content: [
      'Blood moves through a closed loop: arteries carry blood away from the heart, veins return blood toward the heart, and capillaries connect the two and allow exchange of oxygen, nutrients, and waste. Veins are preferred for blood collection because they are accessible, have thinner walls, and are under lower pressure than arteries. Arterial puncture requires special training and is not part of routine phlebotomy.',
      'The antecubital fossa, the inside of the elbow, holds the veins used most often. The median cubital vein is the first choice for most patients because it is large, well anchored, and close to the skin. The cephalic vein on the thumb side and the basilic vein on the pinky side are alternatives; the basilic vein lies close to the brachial artery and a major nerve, so it is used with extra care. Hand veins are reserved for situations where antecubital sites are unavailable, with smaller devices.',
      'Vein selection is guided by palpation, not just appearance. A suitable vein feels bouncy and resilient under the fingertips, while tendons feel like cords and arteries pulsate. Assessing both arms, asking the patient about prior successful draws, and avoiding sites with scarring, hematoma, edema, dialysis access, or a mastectomy on that side all protect the patient and improve first-attempt success.',
    ],
    sections: [
      {
        heading: 'Veins of the Antecubital Fossa',
        table: {
          caption: 'Primary and alternate venipuncture sites',
          headers: ['Vein', 'Location', 'Selection notes'],
          rows: [
            ['Median cubital', 'Center of the antecubital fossa', 'First choice: large, well anchored, least painful'],
            ['Cephalic', 'Thumb side of the arm', 'Good second choice; may roll in some patients'],
            ['Basilic', 'Pinky side of the arm', 'Use with caution: near the brachial artery and a major nerve'],
            ['Dorsal hand veins', 'Back of the hand', 'Last resort; use a smaller device such as a butterfly'],
          ],
        },
      },
      {
        heading: 'Palpation Technique',
        steps: [
          'Apply the tourniquet and ask the patient to make a gentle fist',
          'Palpate with the pads of one or two fingers, not the thumb',
          'Press down, release, and feel for a bouncy vein that refills',
          'Distinguish veins from tendons (hard cords) and arteries (pulsating)',
          'Release the tourniquet while you gather supplies and reapply before the stick',
        ],
      },
      {
        heading: 'Sites to Avoid',
        bullets: [
          'An arm with a dialysis fistula or graft',
          'The side of a prior mastectomy, where lymph node removal affects circulation',
          'Areas with hematoma, scarring, burns, or edema',
          'An arm with a running IV line, when the other arm is available',
        ],
      },
    ],
    callouts: [
      {
        variant: 'warning',
        title: 'Common error',
        text: 'The basilic vein tempts many collectors because it can look large. Its proximity to the brachial artery and median nerve means a slightly deep or angled stick can cause serious injury.',
      },
    ],
    keyPoints: [
      'Veins are used for routine collection; arteries require special training',
      'Median cubital vein is the preferred site in most patients',
      'Palpate for a bouncy, resilient vein; avoid cords and pulsation',
      'Hand veins are a last resort and call for smaller devices',
      'Avoid arms with fistulas, edema, or prior mastectomy on that side',
    ],
  },
  {
    id: 'les_phleb_02_2',
    moduleId: 'mod_phleb_02',
    title: 'Blood Composition and Hemostasis',
    order: 2,
    durationMin: 18,
    content: [
      'Blood is roughly half plasma and half formed elements. Plasma is the liquid portion, mostly water, carrying proteins, nutrients, hormones, and clotting factors. The formed elements are red blood cells that carry oxygen, white blood cells that defend against infection, and platelets that drive clotting. Serum is plasma without clotting factors, collected in tubes that allow the blood to clot; plasma is collected in tubes with anticoagulant so clotting is prevented.',
      'Hemostasis is the body’s process for stopping bleeding. When a vessel is injured, the vessel wall constricts, platelets adhere and form a plug, and clotting factors build a fibrin mesh that stabilizes the clot. This is why firm, direct pressure after needle withdrawal matters: it supports all three stages until the vessel seals. Patients on anticoagulant medications may clot more slowly and need pressure held longer.',
      'Understanding composition explains everyday tube choices. A chemistry test that needs serum goes in a clot tube, while a blood count that needs whole, unclotted blood goes in a tube with EDTA anticoagulant. Collecting the wrong tube type can make a specimen unusable no matter how perfect the stick was.',
    ],
    sections: [
      {
        heading: 'Serum Versus Plasma',
        table: {
          caption: 'Two related specimens from different tube types',
          headers: ['Feature', 'Serum', 'Plasma'],
          rows: [
            ['How obtained', 'Blood clots in the tube, then is centrifuged', 'Blood collected with anticoagulant, then centrifuged'],
            ['Clotting factors', 'Consumed by clotting; absent', 'Present, suspended in the liquid'],
            ['Typical tubes', 'Red or gold top', 'Green or lavender top'],
            ['Common uses', 'Many chemistry tests', 'Coagulation and certain chemistry tests'],
          ],
        },
      },
      {
        heading: 'The Three Stages of Hemostasis',
        steps: [
          'Vascular spasm: the injured vessel constricts to slow blood flow',
          'Platelet plug: platelets stick to the site and to each other',
          'Coagulation: clotting factors build a fibrin mesh that stabilizes the plug',
        ],
      },
      {
        heading: 'The Formed Elements',
        bullets: [
          'Red blood cells (erythrocytes): carry oxygen to tissues',
          'White blood cells (leukocytes): defend against infection',
          'Platelets (thrombocytes): drive clot formation',
        ],
      },
    ],
    callouts: [
      {
        variant: 'tip',
        title: 'Clinical pearl',
        text: 'Ask about blood thinners before the draw, not after the bleeding will not stop. Patients on anticoagulants need firm pressure held noticeably longer.',
      },
    ],
    keyPoints: [
      'Plasma is the liquid portion; formed elements are red cells, white cells, and platelets',
      'Serum is plasma without clotting factors',
      'Hemostasis combines vessel constriction, platelet plug, and fibrin clot',
      'Tube choice follows from the specimen type the test requires',
      'Apply firm pressure after every draw, longer for anticoagulated patients',
    ],
  },
  {
    id: 'les_phleb_03_1',
    moduleId: 'mod_phleb_03',
    title: 'Needles, Tubes, and Collection Systems',
    order: 1,
    durationMin: 22,
    content: [
      'The two main venipuncture systems are the evacuated tube system and the winged infusion set, often called a butterfly. The evacuated system uses a double-ended needle in a holder: one end enters the vein, the other pierces the tube stopper, and vacuum draws the blood. The butterfly uses a small needle with flexible tubing and is preferred for small or fragile veins, hand veins, and patients who are difficult to draw, paired with a syringe or an evacuated adapter.',
      'Needle gauge works in reverse: the higher the gauge number, the smaller the needle diameter. Routine adult venipuncture typically uses a 21 or 22 gauge needle, while 23 gauge is common with butterfly sets. Needles that are too large for the vein cause pain and hematoma; needles that are too small for a large-volume draw can damage red cells and cause hemolysis.',
      'Evacuated tubes are color-coded by additive, and the cap color is the fastest way to confirm the right tube for the test ordered. Every tube is checked for expiration date and intact vacuum before use. Tubes are filled until the vacuum is exhausted so the blood-to-additive ratio stays correct; underfilled anticoagulant tubes can distort test results.',
    ],
    media: [
      {
        src: 'lessons/phleb-venipuncture-equipment.png',
        alt: 'Venipuncture supplies including evacuated tubes, needles, a holder, a butterfly set, tourniquet, and alcohol pads',
        caption: 'Venipuncture equipment: evacuated tubes, needle and holder, winged infusion set, tourniquet, and site prep supplies',
      },
    ],
    sections: [
      {
        heading: 'Needle Gauge Reference',
        table: {
          caption: 'Remember: higher gauge number means smaller needle',
          headers: ['Gauge', 'Relative size', 'Typical use'],
          rows: [
            ['21', 'Standard', 'Routine adult venipuncture with evacuated tubes'],
            ['22', 'Slightly smaller', 'Routine draws, smaller or more fragile veins'],
            ['23', 'Small', 'Butterfly sets, hand veins, pediatric or fragile veins'],
          ],
        },
      },
      {
        heading: 'Choosing Between Systems',
        bullets: [
          'Evacuated tube system: fastest and cleanest for routine multi-tube draws',
          'Butterfly with adapter: best for small, fragile, rolling, or hand veins',
          'Butterfly with syringe: gentle manual control for the most fragile veins',
          'Syringe blood is transferred with a safety transfer device, never a bare needle',
        ],
      },
      {
        heading: 'Pre-Draw Equipment Checks',
        bullets: [
          'Check every tube’s expiration date; expired tubes may lose vacuum',
          'Confirm caps are intact and additive color matches the ordered tests',
          'Inspect needles and packaging for damage before opening',
          'Stage labels, gauze, bandage, and sharps container within reach',
        ],
      },
    ],
    callouts: [
      {
        variant: 'tip',
        title: 'Clinical pearl',
        text: 'Gauge runs backwards: 23 is smaller than 21. When a vein looks fragile, step up the gauge number, not down.',
      },
      {
        variant: 'warning',
        title: 'Common error',
        text: 'Underfilled citrate coagulation tubes distort the blood-to-anticoagulant ratio and can invalidate results. Let the vacuum fill the tube completely.',
      },
    ],
    keyPoints: [
      'Evacuated tube system for routine draws; butterfly for small or fragile veins',
      'Higher gauge number means a smaller needle',
      'Cap color identifies the tube additive',
      'Check expiration dates and intact vacuum before every draw',
      'Fill tubes completely to preserve the blood-to-additive ratio',
    ],
  },
  {
    id: 'les_phleb_03_2',
    moduleId: 'mod_phleb_03',
    title: 'Tourniquets, Site Prep, and Supplies',
    order: 2,
    durationMin: 18,
    content: [
      'The tourniquet makes veins easier to see and feel by temporarily slowing venous return. It is applied about 3 to 4 inches above the intended site, tight enough to distend the vein but never painful, and left on no longer than one minute. Prolonged application concentrates blood components locally, a change called hemoconcentration that can falsely elevate some results. The tourniquet is released as soon as blood flow is established.',
      'Site preparation prevents contamination of both the patient and the specimen. The skin is cleansed with 70 percent isopropyl alcohol using friction in concentric circles from the center outward, then allowed to air dry completely. Drawing through wet alcohol can cause stinging, hemolysis, and contamination of blood alcohol or blood culture specimens. Once prepped, the site is not touched again; if repalpation is unavoidable, the site is cleansed again.',
      'A well-organized tray or workstation supports a smooth draw: gloves, tourniquet, alcohol pads, needles and holders, the correct tubes, gauze, bandages, and a sharps container within reach, plus labels ready before the stick. Preparing everything in advance means the phlebotomist never leaves a patient with a needle in place to fetch supplies.',
    ],
    sections: [
      {
        heading: 'Tourniquet Application and Release',
        steps: [
          'Apply the tourniquet 3–4 inches above the intended puncture site',
          'Tighten enough to distend the vein without causing pain',
          'Palpate and select the vein; release the tourniquet if setup takes time',
          'Reapply just before the stick and begin the draw',
          'Release the tourniquet as soon as blood flows into the first tube',
          'Never leave a tourniquet on longer than one minute',
        ],
      },
      {
        heading: 'Site Cleansing Technique',
        steps: [
          'Cleanse with 70 percent isopropyl alcohol using friction',
          'Work in concentric circles from the center of the site outward',
          'Allow the site to air dry completely; do not blow on it or fan it',
          'Do not touch the site after cleansing; if repalpation is necessary, cleanse again',
        ],
      },
      {
        heading: 'Why the One-Minute Rule Exists',
        paragraphs: [
          'A tourniquet left on too long causes hemoconcentration: water leaves the blood locally while cells and large molecules stay behind, falsely elevating results such as protein and cell counts. Releasing the tourniquet once flow is established protects both the patient and the specimen.',
        ],
      },
    ],
    callouts: [
      {
        variant: 'warning',
        title: 'Common error',
        text: 'Drawing through wet alcohol stings the patient, can hemolyze the specimen, and can contaminate blood alcohol and blood culture results. Let it dry — it only takes seconds.',
      },
      {
        variant: 'exam',
        title: 'Readiness focus',
        text: 'One minute maximum tourniquet time and 70 percent isopropyl alcohol with full air drying are classic exam facts.',
      },
    ],
    keyPoints: [
      'Apply the tourniquet 3–4 inches above the site for no longer than one minute',
      'Release the tourniquet once blood flow is established',
      'Cleanse with 70 percent isopropyl alcohol and let it air dry fully',
      'Never touch the site after cleansing without cleansing again',
      'Prepare all supplies and labels before the stick',
    ],
  },
  {
    id: 'les_phleb_04_1',
    moduleId: 'mod_phleb_04',
    title: 'Why the Order of Draw Matters',
    order: 1,
    durationMin: 22,
    content: [
      'The order of draw is the standardized sequence in which evacuated tubes are filled during a single venipuncture. It exists because additives can carry over from one tube into the next as blood flows back through the needle. Even micrograms of the wrong additive can change results: EDTA carryover can falsely lower calcium and raise potassium, and clot activator carryover can shorten coagulation test times.',
      'The widely recommended sequence is: blood culture or sterile tubes first, then light blue coagulation tubes with citrate, then serum tubes with or without clot activator or gel, then green heparin tubes, then lavender or purple EDTA tubes, and finally gray tubes with fluoride and oxalate. Coagulation tubes come early because they are the most sensitive to contamination and tissue fluid, and blood cultures come first to protect sterility.',
      'When drawing with a butterfly directly into a light blue coagulation tube, a discard tube is drawn first to clear the air in the tubing so the coagulation tube fills to the correct volume. Institutions may publish their own validated sequence, and the local procedure manual always takes precedence, but the logic of protecting additive-sensitive tubes stays the same everywhere.',
    ],
    media: [
      {
        src: 'lessons/phleb-order-of-draw.png',
        alt: 'Color-coded blood collection tubes lined up in the recommended order of draw from blood culture to gray top',
        caption: 'Color-coded collection tubes arranged in the recommended order of draw',
      },
    ],
    sections: [
      {
        heading: 'Recommended Order of Draw',
        table: {
          caption: 'Widely recommended sequence for evacuated tubes',
          headers: ['Order', 'Cap color', 'Additive', 'Common tests', 'Inversions'],
          rows: [
            ['1', 'Yellow (sterile)', 'Culture broth or none', 'Blood cultures', '8–10 if broth present'],
            ['2', 'Light blue', 'Sodium citrate', 'Coagulation tests (PT, aPTT)', '3–4'],
            ['3', 'Red or gold', 'None or clot activator with gel', 'Chemistry panels, serology', '0 for plain red; 5 for gel'],
            ['4', 'Green', 'Heparin', 'Certain chemistry tests', '8–10'],
            ['5', 'Lavender or purple', 'EDTA', 'Complete blood count', '8–10'],
            ['6', 'Gray', 'Fluoride and oxalate', 'Glucose', '8–10'],
          ],
        },
      },
      {
        heading: 'Why Carryover Is Dangerous',
        bullets: [
          'EDTA carried into a chemistry tube falsely lowers calcium and raises potassium',
          'Clot activator carried into a citrate tube falsely shortens coagulation times',
          'Tissue fluid from the puncture can start clotting, so coagulation tubes go early',
          'Non-sterile draws before blood cultures risk contaminating the culture',
        ],
      },
      {
        heading: 'The Butterfly and the Discard Tube',
        paragraphs: [
          'Butterfly tubing contains air. If a light blue coagulation tube is attached first, that air displaces blood and underfills the tube, ruining the citrate ratio. Drawing a small discard tube first fills the tubing with blood so the coagulation tube fills correctly.',
        ],
      },
    ],
    callouts: [
      {
        variant: 'exam',
        title: 'Readiness focus',
        text: 'Memorize the sequence cold — cultures, light blue, serum, green, lavender, gray — and know that EDTA-to-chemistry carryover falsely raises potassium.',
      },
      {
        variant: 'warning',
        title: 'Common error',
        text: 'Attaching a light blue tube first on a butterfly without a discard tube underfills it and invalidates the coagulation ratio.',
      },
    ],
    keyPoints: [
      'The order of draw prevents additive carryover between tubes',
      'Sequence: blood cultures, citrate, serum, heparin, EDTA, fluoride',
      'Coagulation tubes are the most sensitive to contamination',
      'Use a discard tube when a butterfly draws a coagulation tube first',
      'Institutional procedure manuals take precedence when they differ',
    ],
  },
  {
    id: 'les_phleb_04_2',
    moduleId: 'mod_phleb_04',
    title: 'Applying the Order of Draw in Practice',
    order: 2,
    durationMin: 18,
    content: [
      'In practice, the order of draw starts before the needle enters the skin. The phlebotomist reviews the requisition, lays out the tubes in fill order, and confirms each tube’s additive against the tests requested. Multitest requisitions may require several tubes of the same type; all tubes of one additive are filled before moving to the next color.',
      'During the draw, tubes are exchanged gently without moving the needle, letting the vacuum fill each tube completely. Each anticoagulant tube is inverted the recommended number of times, typically 8 to 10 for EDTA and 3 to 4 for citrate, immediately after filling. Vigorous shaking damages red cells and is never a substitute for gentle inversion.',
      'Troubleshooting is part of the skill. If a tube loses vacuum or the vein collapses, the phlebotomist switches to a fresh tube or a smaller device rather than forcing the draw. Any deviation from standard order or fill, such as a short-draw citrate tube, is handled per policy, because coagulation results depend on a precise blood-to-anticoagulant ratio.',
    ],
    sections: [
      {
        heading: 'Multi-Tube Draw Sequence',
        steps: [
          'Review the requisition and lay out tubes in the correct fill order',
          'Identify the patient, apply the tourniquet, and cleanse the site',
          'Perform the venipuncture and seat the first tube in the holder',
          'Release the tourniquet once blood flow is established',
          'Let each tube fill until the vacuum is exhausted, then remove it',
          'Invert each anticoagulant tube gently the recommended number of times',
          'Insert the next tube without moving the needle, repeating in order',
          'Remove the last tube, withdraw the needle, and apply pressure',
        ],
      },
      {
        heading: 'Mixing Requirements by Tube',
        bullets: [
          'Citrate (light blue): 3–4 gentle inversions',
          'Serum gel (gold): 5 gentle inversions; plain red: no inversion',
          'Heparin (green): 8–10 gentle inversions',
          'EDTA (lavender): 8–10 gentle inversions',
          'Fluoride (gray): 8–10 gentle inversions',
        ],
      },
      {
        heading: 'Handling Fill Problems',
        bullets: [
          'A tube with no flow may have lost vacuum: replace it with a fresh tube',
          'A collapsing vein responds to a smaller device, not more pressure',
          'Short-filled citrate tubes follow policy; they cannot be topped off',
          'Never force blood from a syringe into a tube; use a transfer device',
        ],
      },
    ],
    callouts: [
      {
        variant: 'tip',
        title: 'Clinical pearl',
        text: 'Lay out your tubes in draw order before the stick. Mid-draw decisions with a needle in the arm are where order-of-draw errors happen.',
      },
    ],
    keyPoints: [
      'Arrange tubes in fill order before the stick',
      'Invert anticoagulant tubes gently the recommended number of times',
      'Never shake tubes; inversion mixes without hemolysis',
      'Citrate tubes must fill completely for accurate coagulation ratios',
      'Handle vacuum loss and vein collapse with fresh equipment, not force',
    ],
  },
  {
    id: 'les_phleb_05_1',
    moduleId: 'mod_phleb_05',
    title: 'Labeling, Transport, and Storage',
    order: 1,
    durationMin: 18,
    media: [
      {
        src: 'lessons/phleb-specimen-handling.png',
        alt: 'Labeled blood tubes in a biohazard transport bag with a cooler',
        caption: 'Label, bag, and transport specimens under required conditions',
      },
    ],
    content: [
      'Labeling is a patient safety step, not paperwork. Tubes are labeled immediately after collection, at the patient’s side, before leaving the room, never in advance and never later at a workstation. Labels include at least two patient identifiers, the date and time of collection, and the collector’s initials. The patient, when able, confirms the spelling of the information on the label.',
      'Transport conditions preserve what the specimen was at the moment of collection. Some tests require the tube to be kept cold on ice, others must stay at body temperature or be protected from light, and many must reach the laboratory within a defined time. Delivering specimens promptly and under the required conditions is part of collection quality, because a perfectly drawn specimen that sits too long can produce a wrong result.',
      'Storage before testing follows the test requirements: refrigerated, frozen, or room temperature, with serum or plasma separated from cells within the recommended window when required. Every handoff, from collector to courier to receiving, is documented so the specimen can be traced end to end.',
    ],
    sections: [
      {
        heading: 'Bedside Labeling Procedure',
        steps: [
          'Complete the draw and apply pressure for the patient',
          'Label each tube at the patient’s side, immediately after collection',
          'Include two patient identifiers, date, time, and collector initials',
          'Ask the patient, when able, to confirm the spelling on the label',
          'Compare labeled tubes against the requisition before leaving the room',
        ],
      },
      {
        heading: 'Special Transport Conditions',
        bullets: [
          'On ice: certain chemistry and blood gas specimens that degrade at room temperature',
          'Kept warm near body temperature: a few antibody-related specimens per procedure',
          'Protected from light: light-sensitive analytes such as bilirubin',
          'Strict time limits: many tests must reach the laboratory within a defined window',
        ],
      },
      {
        heading: 'Traceability from Vein to Result',
        paragraphs: [
          'Every specimen handoff — collector to courier, courier to receiving — is documented with times and identities. Traceability is what lets the laboratory answer the two questions that matter most when a result looks wrong: where has this specimen been, and under what conditions.',
        ],
      },
    ],
    callouts: [
      {
        variant: 'safety',
        title: 'Safety-critical',
        text: 'Pre-labeling tubes before the draw is a leading cause of wrong-patient errors. Labels are filled in at the bedside, after collection, while the patient is still in front of you.',
      },
    ],
    keyPoints: [
      'Label at the bedside immediately after collection, never beforehand',
      'Use two patient identifiers plus date, time, and initials',
      'Respect temperature, light, and time limits during transport',
      'Separate serum or plasma from cells within the recommended window',
      'Document every specimen handoff for traceability',
    ],
  },
  {
    id: 'les_phleb_05_2',
    moduleId: 'mod_phleb_05',
    title: 'Additives, Inversion, and Processing Basics',
    order: 2,
    durationMin: 18,
    content: [
      'Tube additives determine what the laboratory can measure. Anticoagulants such as EDTA, heparin, and citrate keep blood from clotting for whole-blood and plasma tests. Clot activators and serum separator gels produce serum for chemistry testing. Glycolytic inhibitors such as fluoride preserve glucose by stopping cells from metabolizing it after collection.',
      'Mixing is immediate and gentle. Each anticoagulant tube is inverted the manufacturer’s recommended number of times right after filling so the additive contacts all the blood; delayed or incomplete mixing allows microclots that ruin coagulation and cell-count results. Serum tubes, by contrast, stand upright and undisturbed while the clot forms, typically for about 30 minutes, before centrifugation.',
      'Basic processing knowledge helps collectors protect their work. Tubes are centrifuged balanced and capped, at the speed and time the tube manufacturer specifies. Gel barrier tubes form a layer between cells and serum or plasma during spinning. Recognizing hemolysis, lipemia, and icterus as visible quality flags helps the collector report potential problems rather than pass them along silently.',
    ],
    sections: [
      {
        heading: 'What Each Additive Does',
        table: {
          headers: ['Additive', 'Action', 'Typical purpose'],
          rows: [
            ['EDTA', 'Binds calcium to prevent clotting', 'Whole blood for complete blood counts'],
            ['Heparin', 'Blocks thrombin to prevent clotting', 'Certain chemistry tests needing plasma'],
            ['Sodium citrate', 'Binds calcium reversibly', 'Coagulation testing'],
            ['Clot activator and gel', 'Speeds clotting; gel separates serum', 'Routine chemistry panels'],
            ['Fluoride and oxalate', 'Stops glucose metabolism by cells', 'Glucose testing'],
          ],
        },
      },
      {
        heading: 'Mixing and Clotting Rules',
        bullets: [
          'Invert anticoagulant tubes gently, immediately after filling',
          'Follow the manufacturer’s inversion count for each tube type',
          'Let serum tubes clot upright and undisturbed for about 30 minutes',
          'Never shake tubes; shaking ruptures red cells',
        ],
      },
      {
        heading: 'Visible Specimen Quality Flags',
        bullets: [
          'Hemolysis: pink to red serum or plasma from ruptured red cells',
          'Lipemia: milky, cloudy serum from high fat content',
          'Icterus: dark yellow serum from elevated bilirubin',
          'Clots in an anticoagulant tube: mixing failed or was delayed',
        ],
      },
    ],
    callouts: [
      {
        variant: 'warning',
        title: 'Common error',
        text: 'Shaking a tube mixes faster but hemolyzes the specimen. Gentle inversion is slower by seconds and correct by design.',
      },
    ],
    keyPoints: [
      'Match the additive to the test: anticoagulant, clot activator, or preservative',
      'Invert anticoagulant tubes immediately after filling',
      'Let serum tubes clot fully before centrifugation',
      'Gel barriers separate cells from serum or plasma during spinning',
      'Recognize hemolysis, lipemia, and icterus as specimen quality flags',
    ],
  },
  {
    id: 'les_phleb_06_1',
    moduleId: 'mod_phleb_06',
    title: 'Positive Patient Identification',
    order: 1,
    durationMin: 18,
    media: [
      {
        src: 'lessons/phleb-patient-id.png',
        alt: 'Phlebotomist checking a patient wristband before a blood draw',
        caption: 'Two identifiers, verified aloud, before every collection',
      },
    ],
    content: [
      'Correct patient identification is the single most important step in phlebotomy, because a specimen drawn from or labeled for the wrong patient can lead directly to harmful treatment decisions. Identification uses at least two independent identifiers, such as full name and date of birth, compared against the requisition and, for inpatients, the wristband. Room numbers and bed labels are never acceptable identifiers.',
      'The process is active, not passive. The phlebotomist asks the patient to state and spell their name and give their date of birth rather than asking are you Jane Smith, because anxious or confused patients may agree to any name. Any mismatch among the patient’s statement, the wristband, and the requisition stops the procedure until it is resolved with nursing or registration staff.',
      'Special situations follow defined pathways. Unidentified emergency patients receive temporary identifiers from the facility’s system, and every specimen carries that temporary identity consistently. Sleeping patients are awakened for identification, and language barriers are bridged with qualified interpreters, never with guessing.',
    ],
    sections: [
      {
        heading: 'The Identification Procedure',
        steps: [
          'Knock, enter, and introduce yourself by name and role',
          'Ask the patient to state and spell their full name',
          'Ask the patient to state their date of birth',
          'Compare both identifiers against the requisition',
          'For inpatients, compare the identifiers against the wristband as well',
          'Resolve any mismatch before touching a single piece of equipment',
        ],
      },
      {
        heading: 'Identifiers That Never Count',
        bullets: [
          'Room number or bed label, which describe a location, not a person',
          'A name announced by the collector that the patient simply agrees to',
          'Labels on equipment, charts, or IV bags at the bedside',
          'A coworker’s assurance that they know who the patient is',
        ],
      },
      {
        heading: 'Special Identification Situations',
        bullets: [
          'Unconscious or unidentified emergency patients: use the facility’s temporary ID system consistently on every tube',
          'Sleeping patients: wake them; identification requires the patient’s participation',
          'Language barriers: use a qualified interpreter rather than gestures or guesses',
          'Patients who cannot speak: verify with the wristband and nursing staff per policy',
        ],
      },
    ],
    callouts: [
      {
        variant: 'safety',
        title: 'Safety-critical',
        text: 'A wrong-patient specimen can trigger a transfusion or medication given to someone who never needed it. Identification is the step that protects everything downstream.',
      },
      {
        variant: 'exam',
        title: 'Readiness focus',
        text: 'Expect questions on two independent identifiers, active patient participation, and why room numbers never qualify.',
      },
    ],
    keyPoints: [
      'Use two independent identifiers for every patient, every draw',
      'Ask the patient to state and spell their name; do not ask leading questions',
      'Any mismatch stops the procedure until resolved',
      'Wristbands are checked for inpatients; room numbers never identify patients',
      'Temporary ID systems keep unidentified emergency patients traceable',
    ],
  },
  {
    id: 'les_phleb_06_2',
    moduleId: 'mod_phleb_06',
    title: 'Special Populations and Communication',
    order: 2,
    durationMin: 18,
    content: [
      'Children, older adults, and anxious patients each benefit from adjusted technique. With children, honesty about the brief pinch, age-appropriate language, parental involvement when welcome, and distraction work better than restraint or surprise. Older adults may have fragile veins and skin, hearing or vision changes, and slower clotting; smaller devices, gentle handling, and patience protect them. Needle-phobic patients do best seated or lying down with calm explanation, and any history of fainting is a reason to have the patient recline before starting.',
      'Communication shapes the whole experience. Introduce yourself by name and role, explain each step in plain language, and ask permission before beginning. Patients have the right to refuse, and refusal is respected and reported to the care team rather than argued with. Pain, dizziness, or unusual sensations reported during the draw are taken seriously at once.',
      'Cultural and personal dignity considerations include privacy during the draw, sensitivity about exposing the arm, and awareness of religious or personal practices that may affect scheduling or consent. Professional warmth combined with unhurried technique turns a stressful procedure into a safe, respectful one.',
    ],
    sections: [
      {
        heading: 'Adapting by Population',
        table: {
          headers: ['Population', 'Common challenges', 'Helpful adjustments'],
          rows: [
            ['Children', 'Fear, movement, small veins', 'Honest simple language, distraction, parent involvement, butterfly sets'],
            ['Older adults', 'Fragile skin and veins, slower clotting, hearing changes', 'Smaller needles, gentle handling, longer pressure, face the patient when speaking'],
            ['Needle-phobic patients', 'Anxiety, fainting risk', 'Recline before starting, calm pacing, no rushing'],
            ['Patients with limited English', 'Consent and identification risk', 'Qualified interpreters, written translated instructions'],
          ],
        },
      },
      {
        heading: 'Communication Essentials',
        bullets: [
          'Introduce yourself by name and role before touching the patient',
          'Explain each step in plain language and ask permission to begin',
          'Take reports of pain, dizziness, or tingling seriously at once',
          'Respect refusal: stop, document, and notify the care team',
        ],
      },
      {
        heading: 'The Refusal Pathway',
        steps: [
          'Stop the procedure calmly and respectfully',
          'Ask whether the patient has concerns you can address within your role',
          'Do not pressure, argue, or restrain',
          'Document the refusal and notify the nurse or provider',
        ],
      },
    ],
    callouts: [
      {
        variant: 'tip',
        title: 'Clinical pearl',
        text: 'Ask every patient, “Have you ever felt faint during a blood draw?” A yes moves the draw to a reclined position before anything happens, not after the patient slides out of the chair.',
      },
    ],
    keyPoints: [
      'Adjust technique and communication for children, older adults, and anxious patients',
      'Patients with a history of fainting should be drawn lying down',
      'Patients may refuse; respect the refusal and notify the care team',
      'Explain each step and ask permission before starting',
      'Use qualified interpreters for language barriers',
    ],
  },
  {
    id: 'les_phleb_07_1',
    moduleId: 'mod_phleb_07',
    title: 'Common Complications and Responses',
    order: 1,
    durationMin: 22,
    media: [
      {
        src: 'lessons/phleb-complications.png',
        alt: 'Applying firm pressure with gauze to a patient’s arm after a draw',
        caption: 'Apply firm pressure and follow the complication response sequence',
      },
    ],
    content: [
      'The most frequent complication is a hematoma, a collection of blood under the skin that forms a raised bruise when blood leaks from the vessel. It is prevented with full needle insertion, steady technique, and firm pressure afterward. If a hematoma begins forming during the draw, the tourniquet is released, the needle removed, and pressure applied immediately. Other common issues include fainting, nausea, and petechiae, the small red dots caused by capillary bleeding, sometimes from a tight or prolonged tourniquet.',
      'Fainting, or syncope, is the complication that most threatens patient safety. Warning signs include pallor, sweating, dizziness, and slowing responses. At the first sign, the draw stops: the needle is removed, pressure applied, and the patient supported to prevent falling, with the head lowered or the patient reclined. Recovery is monitored before the patient stands, and the episode is documented and reported per policy.',
      'Less common but serious events include nerve irritation, signaled by sharp electric pain, numbness, or tingling radiating down the arm, which requires immediate needle removal, and arterial puncture, signaled by bright red, pulsing blood, which requires removal and firm, prolonged pressure. Seizures or chest pain during a draw are emergencies; the draw stops and help is called immediately.',
    ],
    sections: [
      {
        heading: 'Complication Recognition and Response',
        table: {
          caption: 'Know the sign, know the first move',
          headers: ['Complication', 'What you see or hear', 'Immediate response'],
          rows: [
            ['Hematoma', 'Raised bump forming at the site', 'Release tourniquet, remove needle, apply firm pressure'],
            ['Syncope (fainting)', 'Pallor, sweating, dizziness, slowing responses', 'Stop the draw, remove needle, protect from falls, recline'],
            ['Nerve contact', 'Sharp electric pain, numbness, or tingling down the arm', 'Remove the needle immediately; do not redirect'],
            ['Arterial puncture', 'Bright red blood pulsing into the tube', 'Remove the needle and apply firm prolonged pressure'],
            ['Petechiae', 'Tiny red dots on the skin', 'Often from a tight tourniquet; document and report'],
          ],
        },
      },
      {
        heading: 'Responding to Syncope',
        steps: [
          'Stop the draw at the first warning sign',
          'Release the tourniquet and remove the needle, applying pressure',
          'Lower the patient’s head or recline them; protect against falls',
          'Stay with the patient and monitor recovery',
          'Document the episode and report per policy before the patient leaves',
        ],
      },
      {
        heading: 'Prevention Habits',
        bullets: [
          'Insert the needle fully in one smooth motion; partial insertion causes hematomas',
          'Anchor the vein so it does not roll',
          'Ask about fainting history and recline those patients',
          'Apply firm pressure after every draw, longer for anticoagulated patients',
        ],
      },
    ],
    callouts: [
      {
        variant: 'safety',
        title: 'Safety-critical',
        text: 'Sharp, electric, radiating pain means possible nerve contact: remove the needle immediately and do not probe or redirect. Nerve injuries outlast any specimen.',
      },
      {
        variant: 'warning',
        title: 'Common error',
        text: 'Trying to finish the tube while a patient turns pale is how fainting patients end up on the floor with a needle still in the arm. The draw stops first, always.',
      },
    ],
    keyPoints: [
      'Hematoma: release tourniquet, remove needle, apply pressure',
      'Stop the draw at the first sign of fainting and protect the patient from falls',
      'Sharp radiating pain means possible nerve contact; remove the needle at once',
      'Bright red pulsing blood suggests arterial puncture; apply prolonged pressure',
      'Seizures or chest pain during a draw are emergencies; call for help',
    ],
  },
  {
    id: 'les_phleb_07_2',
    moduleId: 'mod_phleb_07',
    title: 'Difficult Draws and Recollection Decisions',
    order: 2,
    durationMin: 18,
    content: [
      'Difficult veins call for strategy, not repeated blind attempts. Proven techniques include warming the site to encourage vasodilation, lowering the arm, having the patient hydrate when appropriate, using a butterfly with a smaller needle, and choosing an alternate site. Blind probing to hunt for a vein is never acceptable; if the vein is missed, the needle is withdrawn and a fresh stick is planned with a new site and new equipment.',
      'Professional limits protect patients. Most policies limit any one phlebotomist to two attempts, after which a more experienced colleague is asked or the provider is consulted. Knowing when to stop is a mark of competence, not failure. Each attempt is documented, and the patient is kept informed and comfortable throughout.',
      'Some specimens must be recollected through no fault of technique: hemolyzed, clotted, short-filled, or mislabeled specimens cannot yield valid results. When recollection is needed, the phlebotomist explains the reason honestly to the patient, apologizes for the inconvenience, and follows the correct procedure the second time, since repeating the same conditions often repeats the same problem.',
    ],
    sections: [
      {
        heading: 'Proven Techniques for Difficult Veins',
        bullets: [
          'Warm the site with a warm pack for several minutes to dilate veins',
          'Lower the arm below heart level so gravity fills the veins',
          'Encourage hydration when the patient’s condition permits',
          'Switch to a butterfly with a smaller needle',
          'Check the other arm and ask the patient where draws usually succeed',
        ],
      },
      {
        heading: 'When an Attempt Fails',
        steps: [
          'Withdraw the needle completely; never probe or redirect blindly',
          'Apply pressure and assess the site',
          'Replan: new site, new equipment, possibly a smaller device',
          'After two attempts, stop and ask a more experienced colleague',
          'Document each attempt and keep the patient informed',
        ],
      },
      {
        heading: 'When Recollection Is Required',
        bullets: [
          'Hemolyzed specimen that invalidates chemistry results',
          'Clotted specimen in an anticoagulant tube',
          'Short-filled citrate tube with an unusable ratio',
          'Mislabeled, unlabeled, or mismatched specimens',
          'Specimens that missed a required fasting or timed window',
        ],
      },
    ],
    callouts: [
      {
        variant: 'tip',
        title: 'Clinical pearl',
        text: 'Two attempts is not a challenge to your pride; it is the boundary of the role. The third attempt belongs to someone with more experience, and patients respect the collector who knows that.',
      },
    ],
    keyPoints: [
      'Use warming, gravity, hydration, and smaller devices for difficult veins',
      'Never probe blindly for a missed vein',
      'Respect the two-attempt limit and escalate to a senior colleague',
      'Recollect hemolyzed, clotted, or mislabeled specimens with a corrected process',
      'Explain recollection honestly and apologize for the inconvenience',
    ],
  },
  {
    id: 'les_phleb_08_1',
    moduleId: 'mod_phleb_08',
    title: 'Preanalytical Quality and Hemolysis Prevention',
    order: 1,
    durationMin: 20,
    content: [
      'Most laboratory errors occur in the preanalytical phase, before testing ever begins: wrong patient, wrong tube, wrong timing, poor mixing, or damaged cells. Because the phlebotomist controls this phase, collection technique is laboratory quality. Patient preparation matters too; fasting and timed tests fail if the patient ate or the draw time was missed, so confirming preparation before the stick protects the result.',
      'Hemolysis, the rupture of red blood cells, is the most common specimen quality problem and falsely changes many chemistry results, including potassium. Preventable causes include drawing through a needle that is too small for the volume, forcing blood into tubes with a syringe, shaking instead of inverting, drawing through wet alcohol, leaving the tourniquet on too long, and drawing from a hematoma.',
      'Quality practice is a checklist habit: right patient, right preparation, right tubes in the right order, full fill, gentle inversion, prompt labeling, and correct transport. When a specimen arrives hemolyzed or compromised, the laboratory may reject it, and the collector treats rejection data as feedback to improve technique rather than as criticism.',
    ],
    sections: [
      {
        heading: 'Common Preanalytical Errors',
        bullets: [
          'Wrong patient or wrong label on the tube',
          'Wrong tube type or wrong order of draw',
          'Missed fasting or timed-collection windows',
          'Underfilled tubes and incorrect additive ratios',
          'Hemolysis from rough technique',
          'Delayed or improperly conditioned transport',
        ],
      },
      {
        heading: 'Preventable Causes of Hemolysis',
        bullets: [
          'Forcing syringe blood through a small needle into a tube',
          'Shaking tubes instead of gently inverting them',
          'Drawing through alcohol that has not dried',
          'Leaving the tourniquet on beyond one minute',
          'Drawing from an existing hematoma',
          'Using too small a needle for a large-volume draw',
        ],
      },
      {
        heading: 'The Collector’s Quality Checklist',
        steps: [
          'Confirm the right patient and the right preparation',
          'Select the right tubes and arrange them in draw order',
          'Fill every tube completely',
          'Mix gently and immediately per tube type',
          'Label at the bedside and transport under the right conditions',
        ],
      },
    ],
    callouts: [
      {
        variant: 'warning',
        title: 'Common error',
        text: 'Hemolysis falsely elevates potassium, sometimes into a range that looks dangerous. A treatment decision made on a hemolyzed potassium is a treatment decision made on a fiction.',
      },
      {
        variant: 'exam',
        title: 'Readiness focus',
        text: 'Memorize the classic hemolysis causes; exam questions love syringe forcing, shaking, wet alcohol, and prolonged tourniquet time.',
      },
    ],
    keyPoints: [
      'Most lab errors are preanalytical and within the collector’s control',
      'Verify fasting and timed-test preparation before drawing',
      'Hemolysis falsely elevates potassium and alters chemistry results',
      'Never force blood into a tube with a syringe or shake tubes',
      'Treat specimen rejections as technique feedback, not criticism',
    ],
  },
  {
    id: 'les_phleb_08_2',
    moduleId: 'mod_phleb_08',
    title: 'Documentation and Incident Reporting',
    order: 2,
    durationMin: 16,
    content: [
      'Documentation turns good technique into verifiable quality. Collection records include the patient identity, date and time, collector identity, site and any deviations such as multiple attempts, patient reactions, and specimen condition. Timed draws record the actual collection time precisely, since drug levels and glucose tolerance results are interpreted against the clock.',
      'Incident reporting covers any unexpected event: patient injury or fainting, needlestick exposure, mislabeling discovered after the fact, or a specimen drawn on the wrong patient. Reports are factual, prompt, and blame-free; their purpose is patient safety and system improvement, not punishment. Near misses are reported too, because they reveal weaknesses before someone is harmed.',
      'Quality indicators such as recollection rates, hemolysis rates, and identification errors are tracked by laboratories and shared with collection staff. Reviewing these metrics, attending competency assessments, and keeping certification requirements current are all part of a phlebotomist’s ongoing quality responsibilities.',
    ],
    sections: [
      {
        heading: 'What a Collection Record Includes',
        bullets: [
          'Patient identity and the identifiers verified',
          'Date and exact time of collection',
          'Collector identity, site used, and device type',
          'Number of attempts and any deviations from standard procedure',
          'Patient reactions during or after the draw',
          'Specimen condition and any transport requirements',
        ],
      },
      {
      heading: 'Writing a Good Incident Report',
        bullets: [
          'Report promptly, while details are fresh',
          'State facts: what happened, when, where, and who was involved',
          'Describe the response taken and the patient’s condition',
          'Avoid speculation, blame, and opinions',
          'Include near misses, not only events that caused harm',
        ],
      },
      {
        heading: 'Quality Metrics That Track Your Work',
        bullets: [
          'Recollection rate by cause',
          'Hemolysis rate on collected specimens',
          'Patient identification errors',
          'Timed-collection compliance',
        ],
      },
    ],
    callouts: [
      {
        variant: 'tip',
        title: 'Clinical pearl',
        text: 'A near-miss report costs five minutes and can prevent the next collector’s real error. Blame-free reporting only works if people actually use it.',
      },
    ],
    keyPoints: [
      'Record actual collection times precisely for timed tests',
      'Document deviations, attempts, and patient reactions',
      'Report incidents and near misses promptly and factually',
      'Incident reports improve systems; they are not punishment',
      'Use quality metrics as feedback for improving technique',
    ],
  },
  {
    id: 'les_phleb_09_1',
    moduleId: 'mod_phleb_09',
    title: 'Ethics, Confidentiality, and Professional Conduct',
    order: 1,
    durationMin: 16,
    content: [
      'Phlebotomists handle sensitive information at every draw: diagnoses hinted by test orders, results discussed at the bedside, and personal details on labels. Confidentiality means this information is used only for care, never discussed in public areas, with friends or family, or on social media. Patient records are accessed only when the job requires it.',
      'Ethical practice includes honesty about errors. A mislabeled tube, a dropped specimen, or a missed fasting check is reported immediately so the result is never based on compromised information. Covering up an error can lead to treatment decisions made on wrong data, which is the worst outcome in laboratory medicine.',
      'Professional conduct shows in reliability, appearance, and respect: arriving prepared, following dress and identification badge policies, treating every patient with the same courtesy regardless of background, and keeping promises to return for timed draws. Professionalism is what patients experience as trustworthiness.',
    ],
    sections: [
      {
        heading: 'Confidentiality Rules That Apply Everywhere',
        bullets: [
          'Access patient information only when the task requires it',
          'Discuss patient information only in private work areas',
          'Never discuss cases with friends, family, or on social media',
          'Shield labels and requisitions from other patients and visitors',
          'Dispose of papers with patient information in secure shredding',
        ],
      },
      {
        heading: 'Honesty About Errors',
        paragraphs: [
          'Every collector eventually drops a tube or discovers a labeling mistake. The ethical response is immediate disclosure so a correct specimen replaces the compromised one. The unethical response — quiet disposal, hopeful silence — risks a provider acting on results that never described the patient at all.',
        ],
      },
      {
        heading: 'The Visible Markers of Professionalism',
        bullets: [
          'On-time arrival, prepared for the shift',
          'Clean uniform and visible identification badge',
          'Equal courtesy to every patient regardless of background',
          'Promises kept, especially returning for timed draws',
        ],
      },
    ],
    callouts: [
      {
        variant: 'exam',
        title: 'Readiness focus',
        text: 'Scenario questions in this area almost always hinge on two ideas: access only what the job requires, and report errors immediately and honestly.',
      },
    ],
    keyPoints: [
      'Use patient information only for care, never for curiosity or conversation',
      'Report errors honestly and immediately',
      'Reliability and respect are the visible face of professionalism',
      'Access records only when the job requires it',
      'Keep promises about timed draws and follow-ups',
    ],
  },
  {
    id: 'les_phleb_09_2',
    moduleId: 'mod_phleb_09',
    title: 'Teamwork and Department Workflow',
    order: 2,
    durationMin: 16,
    content: [
      'Phlebotomy sits at the junction of nursing, providers, and the laboratory. Clear communication across that junction prevents errors: clarifying unclear orders before drawing, coordinating with nursing around medication times and IV lines, and alerting the laboratory about stat or unusual specimens. An IV line on one arm, for example, means the draw should generally be performed from the other arm.',
      'Workflow management keeps turnaround promises. Collectors organize their rounds by priority, with stat and timed draws sequenced first, and communicate delays proactively rather than letting the laboratory discover a late specimen. Batch lists, handheld devices, and shared status boards are tools that keep the team synchronized.',
      'Constructive teamwork also means covering for colleagues during peaks, sharing knowledge about difficult patients with their consent in the record, and raising workflow problems through proper channels. A phlebotomist who communicates early and reliably multiplies the effectiveness of the entire laboratory.',
    ],
    sections: [
      {
        heading: 'Prioritizing a Draw List',
        steps: [
          'Identify stat draws and collect them first',
          'Sequence timed draws against the clock, planning travel time',
          'Fit routine draws around the priority work',
          'Communicate any expected delay to the laboratory immediately',
          'Confirm completion and hand off specimens promptly',
        ],
      },
      {
        heading: 'Working Around IV Lines',
        bullets: [
          'Draw from the opposite arm whenever one is available',
          'If both arms have lines, coordinate with nursing per facility policy',
          'Never disconnect or draw from an IV line without authorization and training',
          'Document which arm was used when an IV was present',
        ],
      },
      {
        heading: 'Communication That Prevents Errors',
        bullets: [
          'Clarify unclear or contradictory orders before the draw, not after',
          'Coordinate draws around medication administration times',
          'Alert the laboratory about stat, timed, or unusual specimens',
          'Raise recurring workflow problems through proper channels',
        ],
      },
    ],
    callouts: [
      {
        variant: 'tip',
        title: 'Clinical pearl',
        text: 'The fastest fix for a confusing requisition is a two-minute clarification call before the draw. After the draw, the only fix is recollection.',
      },
    ],
    keyPoints: [
      'Clarify unclear orders before drawing, never after',
      'Avoid drawing from an arm with a running IV line',
      'Sequence stat and timed draws first and communicate delays early',
      'Cover for colleagues during peaks and share difficult-patient knowledge in the record',
      'Raise workflow problems through proper channels',
    ],
  },
  {
    id: 'les_phleb_10_1',
    moduleId: 'mod_phleb_10',
    title: 'Readiness Checklist',
    order: 1,
    durationMin: 16,
    content: [
      'Work through a structured self-assessment of every module: safety and infection control, anatomy and vein selection, equipment, order of draw, specimen handling, patient identification, complications, quality assurance, and professional standards. For each area, confirm you can both explain the rule and describe the correct action, such as the full order of draw sequence or the response to a patient who feels faint.',
      'Use your practice data to focus final study. Restudy the lessons behind every missed question, then repeat the related knowledge checks. High-yield points include the order of draw and the reasons behind it, two-identifier patient identification, tourniquet time limits, tube inversion counts, hemolysis causes, and the steps of exposure response.',
      'Lock down logistics early: exam format, number of questions, time allowed, required identification, and permitted materials. Take the timed final practice test in this platform in one uninterrupted sitting with no notes, several days before your target date, leaving time to close any gaps it reveals.',
    ],
    sections: [
      {
        heading: 'Domain-by-Domain Self-Check',
        bullets: [
          'Safety: standard precautions, PPE, sharps handling, exposure response',
          'Anatomy: veins of the antecubital fossa and sites to avoid',
          'Equipment: systems, gauges, tube additives, and inversion counts',
          'Order of draw: full sequence plus the butterfly discard rule',
          'Identification, complications, quality, and professional standards',
        ],
      },
      {
        heading: 'High-Yield Review Targets',
        bullets: [
          'Order of draw with additives and common tests',
          'Two independent identifiers and active patient participation',
          'One-minute tourniquet limit and alcohol air-drying',
          'Hemolysis causes and their effect on potassium',
          'Two-attempt limit and escalation',
        ],
      },
      {
        heading: 'Logistics to Confirm Early',
        bullets: [
          'Exam format, question count, and time limit',
          'Required identification and permitted materials',
          'Scheduled slot for the timed final practice test in one sitting',
        ],
      },
    ],
    callouts: [
      {
        variant: 'exam',
        title: 'Readiness focus',
        text: 'The order of draw appears on nearly every phlebotomy readiness exam in one form or another. If you memorize only one table, make it that one — with the reasons behind it.',
      },
    ],
    keyPoints: [
      'Self-assess every module and confirm both rules and actions',
      'Restudy lessons behind missed questions',
      'Memorize the order of draw with its rationale',
      'Focus final review on high-yield targets',
      'Take the timed final practice test under realistic conditions',
    ],
  },
  {
    id: 'les_phleb_10_2',
    moduleId: 'mod_phleb_10',
    title: 'Exam-Day Strategies',
    order: 2,
    durationMin: 16,
    content: [
      'Prepare the day before: gather required identification, confirm the testing location or system requirements, and stop studying early enough to sleep a full night. On the day, eat normally and arrive or log in early. Anxiety reduces working memory, and routine is the antidote.',
      'Work the exam systematically. Set a pace from the question count and time limit, read each stem fully before the choices, and watch for priority words like first, best, and most important, which signal that several options may be partially right but one is safest. For scenario items, ask what protects the patient or the specimen before picking an answer.',
      'Flag hard questions and move on; a later question often jogs the memory. Answer every item unless guessing is penalized, and change answers only for a specific reason such as a misread stem. Finish by reviewing flagged items, then submit with the confidence of someone who prepared methodically.',
    ],
    sections: [
      {
        heading: 'Your First-Pass Routine',
        steps: [
          'Read the stem completely before looking at choices',
          'Identify what the question is really asking: safest, first, best',
          'Eliminate clearly wrong choices',
          'Compare the remaining options against the governing rule',
          'Answer, flag if unsure, and move on without stalling',
        ],
      },
      {
        heading: 'Scenario-Question Strategy',
        bullets: [
          'Ask which answer best protects the patient or the specimen',
          'Safety actions outrank speed, convenience, and completion',
          '“First” questions usually want assessment or verification before action',
          'Respect role limits: escalating is often the correct answer',
        ],
      },
      {
        heading: 'Managing the Clock and Nerves',
        bullets: [
          'Set checkpoints at the quarter, half, and three-quarter marks',
          'Take three slow breaths if you feel panic rising',
          'Return to flagged items after the first pass',
          'Answer every question; blanks are guaranteed zeros',
        ],
      },
    ],
    callouts: [
      {
        variant: 'tip',
        title: 'Clinical pearl',
        text: 'When two options both look right, find the priority word in the stem. “First” and “best” rarely have the same answer.',
      },
      {
        variant: 'exam',
        title: 'Readiness focus',
        text: 'Change answers only for a specific, articulable reason. A vague feeling is not a reason; a misread stem is.',
      },
    ],
    keyPoints: [
      'Prepare logistics the day before and prioritize sleep',
      'Read stems fully and note priority words like first and best',
      'Choose the answer that best protects the patient or specimen',
      'Flag, move on, and answer every question',
      'Change answers only for a specific, identified reason',
    ],
  },
  // ================= Clinical Laboratory Assisting =================
  {
    id: 'les_cla_01_1',
    moduleId: 'mod_cla_01',
    title: 'Laboratory Hazards and Safety Rules',
    order: 1,
    durationMin: 20,
    content: [
      'Clinical laboratories contain several classes of hazards. Biological hazards include blood, body fluids, and cultures that can carry infectious organisms. Chemical hazards range from corrosive acids to flammable solvents, each described in a safety data sheet that explains handling, storage, and first aid. Physical hazards include sharps, broken glass, centrifuges in motion, electrical equipment, and hot surfaces. Recognizing which class a task involves tells you which protections apply.',
      'Core safety rules apply everywhere in the laboratory: no eating, drinking, chewing gum, or applying cosmetics; no mouth pipetting under any circumstances; closed-toe shoes and tied-back hair; and hand washing before leaving the laboratory, even when gloves were worn. Work surfaces are disinfected on schedule and after any spill, and personal items stay outside the work area.',
      'Knowing emergency equipment before you need it is part of readiness. Locate the eyewash station, safety shower, fire extinguisher, spill kits, and first aid supplies on your first day in any laboratory. Emergency exits and evacuation routes are posted, and drills are taken seriously because real events leave no time to read signs.',
    ],
    media: [
      {
        src: 'lessons/cla-lab-safety.png',
        alt: 'Laboratory safety equipment including gloves, lab coat, goggles, eyewash station, and biohazard signage',
        caption: 'Personal protective equipment and emergency safety equipment in the clinical laboratory',
      },
    ],
    sections: [
      {
        heading: 'The Three Hazard Classes',
        table: {
          caption: 'Recognize the class to choose the right protection',
          headers: ['Hazard class', 'Examples', 'Key protections'],
          rows: [
            ['Biological', 'Blood, body fluids, cultures', 'Standard precautions, gloves, lab coat, no open containers of food'],
            ['Chemical', 'Acids, solvents, stains, reagents', 'Safety data sheets, labeled containers, ventilation, eye protection'],
            ['Physical', 'Sharps, broken glass, moving centrifuges, hot surfaces', 'Sharps containers, mechanical cleanup, equipment guards'],
          ],
        },
      },
      {
        heading: 'Universal Laboratory Rules',
        bullets: [
          'No eating, drinking, chewing gum, or applying cosmetics in the laboratory',
          'Never pipette by mouth; use mechanical devices for every transfer',
          'Wear closed-toe shoes and tie back long hair',
          'Wash hands before leaving the laboratory, even when gloves were worn',
          'Disinfect work surfaces on schedule and after every spill',
        ],
      },
      {
        heading: 'Emergency Equipment to Locate on Day One',
        bullets: [
          'Eyewash station and safety shower',
          'Fire extinguisher and fire blanket',
          'Biological and chemical spill kits',
          'First aid supplies and posted evacuation routes',
        ],
      },
    ],
    callouts: [
      {
        variant: 'safety',
        title: 'Safety-critical',
        text: 'Mouth pipetting has caused laboratory infections for over a century, which is exactly why it is banned everywhere. There is no exception, no “just this once,” and no safe technique.',
      },
    ],
    keyPoints: [
      'Know the three hazard classes: biological, chemical, and physical',
      'No eating, drinking, or mouth pipetting in the laboratory',
      'Safety data sheets describe every chemical’s risks and first aid',
      'Disinfect surfaces on schedule and after every spill',
      'Locate eyewash, shower, spill kits, and exits on day one',
    ],
  },
  {
    id: 'les_cla_01_2',
    moduleId: 'mod_cla_01',
    title: 'PPE, Spill Response, and Waste Disposal',
    order: 2,
    durationMin: 18,
    content: [
      'Personal protective equipment in the laboratory includes a buttoned lab coat or gown, gloves matched to the task, and eye protection or face shields when splashes are possible, such as when opening tubes or pouring specimens. PPE stays in the laboratory and is never worn into break rooms, restrooms, or offices. Gloves are changed when torn or contaminated and between distinct tasks, with hand hygiene at every change.',
      'Spill response follows a consistent logic. Small biological spills are covered with absorbent material, flooded with an appropriate disinfectant such as fresh bleach solution, given the required contact time, and cleaned up wearing gloves, with broken glass collected mechanically rather than by hand. Large spills, chemical spills, or exposures beyond your training are escalated immediately to the safety officer; protecting people always comes before protecting samples.',
      'Waste streams are separated at the point of disposal. Sharps go into puncture-resistant containers, regulated biological waste into biohazard bags, chemical waste into labeled containers per the safety data sheet, and ordinary trash into regular bins only when truly uncontaminated. Mixing streams creates danger for custodial staff and regulatory violations for the laboratory.',
    ],
    sections: [
      {
        heading: 'Biological Spill Response',
        steps: [
          'Alert nearby staff and keep others away from the area',
          'Put on gloves and additional PPE matched to the spill',
          'Cover the spill with absorbent material',
          'Apply an appropriate disinfectant, such as fresh bleach solution, working from the edges inward',
          'Allow the full disinfectant contact time listed on the label',
          'Collect debris, using tongs or a dustpan for any glass',
          'Dispose of all cleanup materials as regulated waste and perform hand hygiene',
        ],
      },
      {
        heading: 'Laboratory Waste Streams',
        table: {
          caption: 'Separate waste at the point of disposal',
          headers: ['Stream', 'Container', 'Examples'],
          rows: [
            ['Sharps', 'Puncture-resistant sharps container', 'Needles, lancets, broken contaminated glass'],
            ['Regulated biological', 'Biohazard bag or labeled bin', 'Blood-soaked gauze, used specimen containers'],
            ['Chemical', 'Labeled chemical waste container', 'Spent reagents and solvents per the safety data sheet'],
            ['Regular trash', 'Standard bin', 'Genuinely uncontaminated packaging only'],
          ],
        },
      },
      {
        heading: 'PPE Discipline',
        bullets: [
          'PPE stays inside the laboratory; never wear it to break rooms or restrooms',
          'Change gloves when torn, contaminated, or between distinct tasks',
          'Remove PPE in a sequence that keeps contaminated surfaces off skin and clothing',
          'Perform hand hygiene after every glove removal',
        ],
      },
    ],
    callouts: [
      {
        variant: 'safety',
        title: 'Safety-critical',
        text: 'Broken glass is never picked up by hand, gloved or not. Tongs, forceps, or a brush and dustpan keep a cleanup from becoming an exposure.',
      },
    ],
    keyPoints: [
      'PPE stays inside the laboratory and is changed between tasks',
      'Disinfect spills with the correct agent and full contact time',
      'Work from the spill edges inward to avoid spreading contamination',
      'Never pick up broken glass by hand',
      'Separate sharps, biohazard, chemical, and regular waste at the source',
    ],
  },
  {
    id: 'les_cla_02_1',
    moduleId: 'mod_cla_02',
    title: 'Collection Basics and Patient Interaction',
    order: 1,
    durationMin: 18,
    media: [
      {
        src: 'lessons/cla-specimen-collection.png',
        alt: 'Urine cup, blood tubes, and swab kit on a lab bench',
        caption: 'Each specimen type has its own container and handling rules',
      },
    ],
    content: [
      'Every specimen begins with the order. Before collecting anything, the laboratory assistant verifies the patient with two identifiers, confirms the tests requested, checks preparation requirements such as fasting, and selects the correct containers. Asking the patient to state their own name and date of birth, rather than confirming a name aloud, is the standard safeguard against identification errors.',
      'Patient interaction during collection balances efficiency with dignity. Introduce yourself, explain what will happen and how long it takes, provide privacy, and answer questions within your role. Patients who are anxious, nauseated, or fearful may need extra time, and a calm, unhurried manner measurably improves cooperation and specimen quality.',
      'After collection, containers are labeled at the patient’s side with identifiers, date, time, and collector initials, then sealed and prepared for transport. The patient is given clear aftercare instructions, such as holding pressure on a venipuncture site or how to complete a timed urine collection, before leaving.',
    ],
    sections: [
      {
        heading: 'Pre-Collection Verification',
        steps: [
          'Review the order and confirm the tests requested',
          'Verify the patient with two identifiers stated by the patient',
          'Confirm preparation requirements such as fasting or timing were met',
          'Select the correct containers and supplies for the ordered tests',
          'Explain the procedure and answer questions within your role',
        ],
      },
      {
        heading: 'Patient Interaction Basics',
        bullets: [
          'Introduce yourself by name and role',
          'Provide privacy for every collection',
          'Use plain language and confirm the patient understands the instructions',
          'Allow extra time for anxious or uncomfortable patients',
          'Stay within your role: collection and instructions, not result interpretation',
        ],
      },
      {
        heading: 'After Collection',
        bullets: [
          'Label containers at the patient’s side with identifiers, date, time, and initials',
          'Seal containers and prepare them for the required transport conditions',
          'Give clear aftercare instructions before the patient leaves',
          'Document the collection per policy',
        ],
      },
    ],
    callouts: [
      {
        variant: 'safety',
        title: 'Safety-critical',
        text: 'Ask the patient to state their name; never ask “Are you Maria Lopez?” Anxious patients agree with almost anything, and identification by agreement is how wrong-patient specimens happen.',
      },
    ],
    keyPoints: [
      'Verify two identifiers and preparation requirements before collecting',
      'Ask patients to state their name; do not ask them to confirm one',
      'Explain procedures in plain language and provide privacy',
      'Label containers at the patient’s side immediately after collection',
      'Give clear aftercare instructions before the patient leaves',
    ],
  },
  {
    id: 'les_cla_02_2',
    moduleId: 'mod_cla_02',
    title: 'Special Collection Types',
    order: 2,
    durationMin: 18,
    content: [
      'Urine collection has several distinct types with different rules. A random specimen suits routine screening; a clean-catch midstream specimen reduces contamination for culture; and a 24-hour collection measures total excretion, requiring the patient to discard the first morning void, collect every void for exactly 24 hours including the final one, and keep the container refrigerated or with preservative as directed. Missed voids invalidate a timed collection.',
      'Other specimen types include throat, wound, and nasal swabs, which must contact the correct site and use the correct transport medium; stool specimens, which may require avoiding certain foods or medications beforehand; and sputum, which must come from a deep cough rather than saliva to be acceptable. Each type has defined rejection criteria, and patient instructions are what make the difference between a diagnostic specimen and a wasted one.',
      'Timed and fasting collections depend on the clock. Fasting generally means nothing to eat or drink except water for the specified period, commonly 8 to 12 hours, and the collection time is recorded precisely for timed tests. When a patient has not followed preparation instructions, the collection is paused and the ordering provider or laboratory is consulted rather than proceeding on a compromised specimen.',
    ],
    sections: [
      {
        heading: 'Urine Collection Types',
        table: {
          caption: 'Match the collection type to the test purpose',
          headers: ['Type', 'Purpose', 'Key instruction'],
          rows: [
            ['Random', 'Routine screening', 'Any void, collected in a clean container'],
            ['Clean-catch midstream', 'Culture with reduced contamination', 'Cleanse first, start voiding, then collect midstream'],
            ['24-hour', 'Total excretion over a day', 'Discard the first morning void, then collect every void for exactly 24 hours'],
            ['First morning', 'Concentrated screening', 'Collect the first void of the day'],
          ],
        },
      },
      {
        heading: 'Notes on Other Specimen Types',
        bullets: [
          'Sputum: must come from a deep cough; saliva is not sputum and will be rejected',
          'Swabs: contact the correct site and use the specified transport medium',
          'Stool: may require avoiding certain foods or medications beforehand',
          'Blood cultures: collected with strict antiseptic technique, often in sets',
        ],
      },
      {
      heading: 'When Preparation Was Not Followed',
        steps: [
          'Pause the collection; do not proceed on a compromised specimen',
          'Notify the ordering provider or laboratory per policy',
          'Document what happened and the instructions given',
          'Reschedule or recollect under the correct conditions',
        ],
      },
    ],
    callouts: [
      {
        variant: 'warning',
        title: 'Common error',
        text: 'Including the first morning void in a 24-hour collection doubles the starting volume and invalidates the result. Discard it, note the time, and start the clock from an empty bladder.',
      },
    ],
    keyPoints: [
      'Clean-catch midstream technique reduces urine culture contamination',
      'A 24-hour urine starts after discarding the first morning void',
      'Missed voids invalidate a timed collection',
      'Sputum must come from a deep cough, not saliva',
      'Record exact times for fasting and timed collections',
    ],
  },
  {
    id: 'les_cla_03_1',
    moduleId: 'mod_cla_03',
    title: 'Receiving, Accessioning, and Centrifugation',
    order: 1,
    durationMin: 22,
    content: [
      'Specimen receiving is the laboratory’s front door. Each delivery is checked for correct labeling, adequate volume, intact containers, appropriate temperature, and acceptable transport time. Specimens and requisitions must match; discrepancies are resolved before acceptance or documented and rejected per policy. Receipt times are logged because many stability clocks start at collection.',
      'Accessioning gives each accepted specimen a unique identifier, often a barcode, that follows it through testing and reporting. This number is the anchor of traceability, so it is applied carefully and immediately. Mislabeled or unlabeled specimens are never guessed at or relabeled from memory; they are handled through the rejection or recollection process.',
      'Centrifugation separates serum or plasma from cells. Tubes are spun balanced, with matching weight opposite each tube, and always capped to prevent aerosols. Speed and time follow the tube and test requirements, serum tubes clot fully before spinning, and the centrifuge lid is never opened while the rotor is moving. After spinning, gel barrier tubes show a clean layer separating cells from serum or plasma.',
    ],
    media: [
      {
        src: 'lessons/cla-specimen-processing.png',
        alt: 'A laboratory centrifuge beside a specimen workstation with labeled tubes in a rack',
        caption: 'Specimen processing workstation with a centrifuge and labeled collection tubes',
      },
    ],
    sections: [
      {
        heading: 'Receiving Checklist',
        bullets: [
          'Label present and matching the requisition',
          'Adequate volume for the ordered tests',
          'Container intact, sealed, and of the correct type',
          'Correct temperature and acceptable transport time',
          'Receipt time logged against collection time',
        ],
      },
      {
        heading: 'Centrifugation Procedure',
        steps: [
          'Confirm serum tubes have clotted fully before spinning',
          'Keep tubes capped to contain aerosols',
          'Load tubes in balanced pairs of equal weight opposite each other',
          'Close the lid and set the speed and time per the tube requirements',
          'Wait for the rotor to stop completely before opening the lid',
          'Inspect gel barrier tubes for a clean separation layer',
        ],
      },
      {
        heading: 'Accessioning and Traceability',
        paragraphs: [
          'The accession number is the specimen’s identity inside the laboratory, linking every aliquot, test, and report back to one collection event. Applied carefully and immediately, it makes a specimen traceable; applied carelessly, it is the most dangerous label in the building because it looks authoritative.',
        ],
      },
    ],
    callouts: [
      {
        variant: 'safety',
        title: 'Safety-critical',
        text: 'Never open a centrifuge while the rotor is moving. A spinning rotor can shatter tubes and spray aerosols; wait for a complete stop, every time.',
      },
      {
        variant: 'warning',
        title: 'Common error',
        text: 'Relabeling an unlabeled specimen “because the courier was sure” creates a confident-looking result for the wrong patient. Unlabeled specimens follow the rejection and recollection pathway, no exceptions.',
      },
    ],
    keyPoints: [
      'Check labeling, volume, container integrity, temperature, and time on receipt',
      'Never relabel or guess at an unlabeled specimen',
      'Accession numbers anchor specimen traceability',
      'Balance and cap all tubes; never open a moving centrifuge',
      'Let serum tubes clot fully before spinning',
    ],
  },
  {
    id: 'les_cla_03_2',
    moduleId: 'mod_cla_03',
    title: 'Aliquoting, Storage, and Rejection Criteria',
    order: 2,
    durationMin: 18,
    content: [
      'Aliquoting divides a specimen into smaller portions so multiple departments or reference laboratories can test it. Each aliquot container is labeled before filling with the accession number and required identifiers, and transfers are made carefully with pipettes to avoid splashing or aerosols. Cross-contamination between aliquots invalidates results, so tips are changed between specimens.',
      'Storage preserves analytes until testing. Requirements vary: some specimens are refrigerated, some frozen, some kept at room temperature, and some protected from light. Storage conditions and stability limits come from the test procedure, and specimens stored beyond their stability window produce unreliable results and may require recollection.',
      'Rejection criteria protect patients from results based on bad specimens. Common reasons for rejection include unlabeled or mislabeled containers, hemolyzed or clotted specimens when those states invalidate the test, insufficient volume, leaking containers, wrong temperature, and expired transport time. Rejections are documented and communicated to the collecting location promptly so a new specimen can be obtained while it is still clinically useful.',
    ],
    sections: [
      {
        heading: 'Aliquoting Technique',
        steps: [
          'Label every aliquot container before filling it',
          'Match the aliquot label to the primary specimen’s accession number',
          'Transfer with a pipette, slowly, to avoid splashing and aerosols',
          'Use a fresh tip for each specimen to prevent cross-contamination',
          'Cap tightly and verify volumes against the test requirements',
        ],
      },
      {
        heading: 'Common Rejection Criteria',
        table: {
          headers: ['Criterion', 'Why it matters'],
          rows: [
            ['Unlabeled or mislabeled container', 'Patient identity cannot be proven'],
            ['Hemolysis or clots', 'Invalidates many chemistry and hematology results'],
            ['Insufficient volume', 'Test cannot be performed or ratios are wrong'],
            ['Leaking container', 'Contamination and exposure risk'],
            ['Wrong temperature or expired transport time', 'Analytes have degraded beyond reliable measurement'],
          ],
        },
      },
      {
        heading: 'Storage Condition Basics',
        bullets: [
          'Refrigerated: many specimens held before testing',
          'Frozen: analytes that degrade even at refrigerator temperatures',
          'Room temperature: specimens harmed by chilling',
          'Light-protected: light-sensitive analytes such as bilirubin',
        ],
      },
    ],
    callouts: [
      {
        variant: 'tip',
        title: 'Clinical pearl',
        text: 'Label the empty aliquot tube first. A filled tube waiting for a label is an identification error looking for a moment of distraction.',
      },
    ],
    keyPoints: [
      'Label aliquot containers before filling them',
      'Change pipette tips between specimens to prevent cross-contamination',
      'Follow test-specific storage temperature and light requirements',
      'Know the common rejection criteria and apply them consistently',
      'Communicate rejections promptly so recollection stays clinically useful',
    ],
  },
  {
    id: 'les_cla_04_1',
    moduleId: 'mod_cla_04',
    title: 'Microscopes, Centrifuges, and Analyzers',
    order: 1,
    durationMin: 20,
    media: [
      {
        src: 'lessons/cla-lab-equipment.png',
        alt: 'Microscope, centrifuge, incubator, and pipettes on a lab bench',
        caption: 'Know each instrument’s purpose before operating it',
      },
    ],
    content: [
      'The compound light microscope is the laboratory’s classic tool. Its parts include the eyepiece, objective lenses of increasing magnification, the stage, the light source, and the coarse and fine focus knobs. Good practice starts on the lowest power objective, centers the specimen, and increases magnification stepwise, using only the fine focus with high-power objectives. Oil immersion objectives require a drop of immersion oil and careful cleanup afterward.',
      'Centrifuges spin specimens to separate components by density. Safe operation means loading tubes in balanced pairs, closing the lid before starting, never opening a moving rotor, and letting the rotor stop completely before unloading. Unusual vibration or noise means stopping the run; an unbalanced centrifuge can destroy both the specimen and the machine.',
      'Automated analyzers perform chemistry, hematology, and other testing at high volume. Laboratory assistants support them by loading samples correctly, monitoring reagent levels, performing daily startup and maintenance checks, and recognizing error flags for review by testing personnel. Assistants work within their role: operating and maintaining equipment per procedure, while interpretation of results belongs to qualified testing staff.',
    ],
    sections: [
      {
        heading: 'Microscope Parts and Their Jobs',
        bullets: [
          'Eyepiece (ocular): the lens you look through, usually 10x',
          'Objective lenses: increasing magnification, rotated into place',
          'Stage and clips: hold and position the slide',
          'Light source and condenser: illuminate the specimen',
          'Coarse focus: large movements, low power only; fine focus: small adjustments at any power',
        ],
      },
      {
        heading: 'Focusing a Slide Safely',
        steps: [
          'Start with the lowest power objective and the slide clipped flat',
          'Raise the stage while watching from the side to avoid striking the slide',
          'Center the specimen and focus with the coarse knob',
          'Rotate to higher power and use only the fine focus',
          'For oil immersion, add one drop of immersion oil before the highest objective',
          'Clean oil lenses with proper lens paper after use',
        ],
      },
      {
        heading: 'Analyzer Support Within the Assistant Role',
        bullets: [
          'Load samples in the correct positions with correct identification',
          'Monitor reagent and waste levels during operation',
          'Perform daily startup, shutdown, and maintenance checks per procedure',
          'Recognize and route error flags to testing personnel',
          'Interpretation of patient results stays with qualified testing staff',
        ],
      },
    ],
    callouts: [
      {
        variant: 'tip',
        title: 'Clinical pearl',
        text: 'Every microscope problem is easier at low power: bigger field, bigger depth of focus, and no risk of driving an expensive objective through a slide.',
      },
    ],
    keyPoints: [
      'Always begin microscope work on the lowest power objective',
      'Use only fine focus at high magnification',
      'Balance centrifuge loads and never open a moving rotor',
      'Stop a vibrating or noisy centrifuge and check the load',
      'Assistants load and maintain analyzers; interpretation belongs to testing staff',
    ],
  },
  {
    id: 'les_cla_04_2',
    moduleId: 'mod_cla_04',
    title: 'Pipettes and Measurement Tools',
    order: 2,
    durationMin: 18,
    content: [
      'Accurate measurement underpins every laboratory result. Pipettes come in several designs: graduated pipettes deliver variable volumes, volumetric pipettes deliver one precise volume, and micropipettes measure microliter amounts with disposable tips. Technique matters: hold the pipette vertical, read the meniscus at eye level, and use the correct tip seated firmly to avoid leaks and inaccurate volumes.',
      'Balances, thermometers, and timers are equally fundamental. Balances are leveled and zeroed before use; refrigerator and freezer temperatures are checked and logged on schedule because specimen and reagent integrity depends on them; and timers are used for any step where reaction time affects results. Reading and recording these values honestly, including when they are out of range, is a quality behavior.',
      'Routine care keeps tools trustworthy. Pipettes are calibrated on schedule, balances are cleaned and checked with reference weights, and any instrument that fails a check is removed from service and labeled until repaired. Using a questionable instrument and hoping for the best is never acceptable in a quality laboratory.',
    ],
    sections: [
      {
        heading: 'Pipetting Technique',
        steps: [
          'Select the pipette size that brackets the target volume',
          'Seat the correct tip firmly',
          'Hold the pipette vertical and immerse the tip just below the surface',
          'Draw smoothly and check for air bubbles',
          'Read the meniscus at eye level on graduated pipettes',
          'Dispense against the receiving vessel wall and change tips between specimens',
        ],
      },
      {
        heading: 'Choosing the Right Pipette',
        table: {
          headers: ['Type', 'Delivers', 'Best for'],
          rows: [
            ['Graduated', 'Variable volumes along its scale', 'General transfers of milliliter volumes'],
            ['Volumetric', 'One exact fixed volume', 'The most precise milliliter measurements'],
            ['Micropipette', 'Microliter volumes via disposable tips', 'Small-volume specimen and reagent work'],
          ],
        },
      },
      {
        heading: 'Routine Equipment Checks',
        bullets: [
          'Log refrigerator and freezer temperatures on schedule',
          'Verify balances with reference weights per policy',
          'Confirm pipette calibration is current before critical work',
          'Remove failed instruments from service and label them clearly',
        ],
      },
    ],
    callouts: [
      {
        variant: 'warning',
        title: 'Common error',
        text: 'Logging a refrigerator temperature you did not actually read defeats the entire purpose of the log. Out-of-range readings logged honestly protect specimens; invented readings destroy them quietly.',
      },
    ],
    keyPoints: [
      'Read the pipette meniscus at eye level with the pipette vertical',
      'Use a fresh tip for every specimen',
      'Check and log refrigerator and freezer temperatures on schedule',
      'Calibrate pipettes and verify balances routinely',
      'Remove failed instruments from service and label them clearly',
    ],
  },
  {
    id: 'les_cla_05_1',
    moduleId: 'mod_cla_05',
    title: 'Principles of Quality Control',
    order: 1,
    durationMin: 20,
    media: [
      {
        src: 'lessons/cla-quality-control.png',
        alt: 'Quality control chart with control limits and plotted values',
        caption: 'QC results are plotted against control limits before patient runs',
      },
    ],
    content: [
      'Quality control, or QC, uses materials with known values, called controls, to verify that a test system is working correctly before patient specimens are trusted. Controls are run on a defined schedule, such as each shift or each day of testing, and whenever conditions change, such as after maintenance or a new reagent lot. Patient results are not reported when QC fails.',
      'Control results are plotted on charts that show each value against the expected range, often displayed as lines for the mean and for one, two, and three standard deviations. Random error shows as a single scattered outlier, while systematic error shows as a trend or shift, a series of results drifting or jumping in one direction. Trends matter even before limits are crossed, because they warn of a developing problem.',
      'Accuracy means closeness to the true value, while precision means closeness of repeated measurements to each other. A test can be precise but inaccurate, producing tightly grouped but wrong results, which is why controls with known values are essential. Understanding this distinction helps assistants grasp why both calibration and control runs are required.',
    ],
    sections: [
      {
        heading: 'Key QC Vocabulary',
        table: {
          caption: 'Terms that appear on charts, procedures, and exams',
          headers: ['Term', 'Meaning'],
          rows: [
            ['Control', 'Material with a known value used to verify the test system'],
            ['Accuracy', 'Closeness of a result to the true value'],
            ['Precision', 'Closeness of repeated results to each other'],
            ['Shift', 'A sudden jump in control values to a new level'],
            ['Trend', 'A gradual drift of control values in one direction'],
            ['Calibration', 'Setting instrument response against known references'],
          ],
        },
      },
      {
        heading: 'Reading a QC Chart',
        paragraphs: [
          'A control chart plots each control result over time against the expected mean and standard deviation limits. A single scattered outlier suggests random error, such as a handling slip. Several values stepping or drifting together suggest systematic error, such as an aging reagent or a calibration problem, and deserve attention even before a limit is crossed.',
        ],
      },
      {
        heading: 'When Controls Are Run',
        bullets: [
          'On the defined schedule, such as each day or shift of testing',
          'After any maintenance or repair',
          'When a new reagent lot is put into service',
          'After any event that could disturb the system',
        ],
      },
    ],
    callouts: [
      {
        variant: 'exam',
        title: 'Readiness focus',
        text: 'Two rules are exam favorites: patient results are not reported when QC fails, and a precise result can still be inaccurate.',
      },
    ],
    keyPoints: [
      'Controls are materials with known values that verify the test system',
      'Do not report patient results when QC fails',
      'Shifts and trends on QC charts signal systematic error',
      'Accuracy is closeness to truth; precision is repeatability',
      'Run controls on schedule and after every system change',
    ],
  },
  {
    id: 'les_cla_05_2',
    moduleId: 'mod_cla_05',
    title: 'Calibration and Troubleshooting',
    order: 2,
    durationMin: 18,
    content: [
      'Calibration sets an instrument’s response against reference materials of known concentration so that measurements map correctly to true values. Calibration is performed on a defined schedule and after events such as reagent lot changes, major maintenance, or failed QC. Calibration records are kept because they demonstrate that results were produced on a verified system.',
      'When QC is out of range, a logical troubleshooting sequence applies: repeat the control to rule out a simple handling error, check for expired or improperly stored reagents and controls, review recent maintenance and calibration, and escalate to testing personnel or the supervisor when the cause is not immediately resolved. Everything done, including repeats and corrective actions, is documented.',
      'Laboratory assistants contribute to quality by performing assigned QC and maintenance tasks exactly on schedule, recording results honestly, and speaking up early when something looks wrong. A culture where raising concerns is welcomed catches small problems before they reach patient reports.',
    ],
    sections: [
      {
        heading: 'QC Failure Troubleshooting Sequence',
        steps: [
          'Stop reporting patient results from the affected system',
          'Repeat the control with fresh material to rule out handling error',
          'Check reagent and control expiration dates and storage conditions',
          'Review recent maintenance, calibration, and reagent lot changes',
          'Escalate to testing personnel or the supervisor if unresolved',
          'Document every step taken and the final resolution',
        ],
      },
      {
        heading: 'When Calibration Is Required',
        bullets: [
          'On the manufacturer’s or procedure’s defined schedule',
          'After a reagent lot change when the procedure requires it',
          'After major maintenance or component replacement',
          'After QC failure that troubleshooting traces to the instrument',
        ],
      },
      {
        heading: 'The Assistant’s Quality Responsibilities',
        bullets: [
          'Perform assigned QC and maintenance tasks exactly on schedule',
          'Record results honestly, including failures',
          'Speak up early when readings or equipment behavior look wrong',
          'Keep documentation complete so the next person can trust it',
        ],
      },
    ],
    callouts: [
      {
        variant: 'tip',
        title: 'Clinical pearl',
        text: 'Most QC failures are found in the first two checks: a mishandled control or an expired reagent. Repeat and check dates before assuming the instrument is broken.',
      },
    ],
    keyPoints: [
      'Calibration maps instrument response to known reference values',
      'Recalibrate after reagent changes, maintenance, or failed QC',
      'Stop reporting patient results while QC is out of range',
      'Troubleshoot systematically: repeat, check materials, review, escalate',
      'Document every corrective action honestly',
    ],
  },
  {
    id: 'les_cla_06_1',
    moduleId: 'mod_cla_06',
    title: 'Laboratory Word Parts and Vocabulary',
    order: 1,
    durationMin: 18,
    content: [
      'Laboratory terminology follows the same word-part system as the rest of medicine. Roots name the subject, such as hemat for blood, urin for urine, and cyt for cell. Prefixes modify, such as hyper for above normal and hypo for below normal. Suffixes complete the meaning, such as emia for a blood condition and uria for a urine condition. Hyperglycemia therefore reads directly as an above-normal blood glucose condition.',
      'Common laboratory vocabulary describes specimen states and findings. Hemolysis is the rupture of red blood cells, lipemia is excess fat making serum milky, and icterus is a yellow tint from bilirubin. Anuria is absence of urine output, hematuria is blood in the urine, and leukocytosis is an elevated white blood cell count. These terms appear on requisitions, specimen comments, and reports.',
      'Reading terms analytically beats memorizing lists. Splitting thrombocytopenia into thrombo for clot, cyto for cell, and penia for deficiency gives a deficiency of clotting cells, meaning low platelets. Practicing this decomposition builds speed and accuracy when encountering unfamiliar terms on orders.',
    ],
    sections: [
      {
        heading: 'Word Parts Seen on Laboratory Orders',
        table: {
          caption: 'Laboratory-focused word part reference',
          headers: ['Word part', 'Type', 'Meaning', 'Example'],
          rows: [
            ['hemat/o', 'Root', 'Blood', 'Hematology'],
            ['urin/o', 'Root', 'Urine', 'Urinalysis'],
            ['cyt/o', 'Root', 'Cell', 'Leukocytosis'],
            ['glyc/o', 'Root', 'Glucose', 'Hypoglycemia'],
            ['-emia', 'Suffix', 'Blood condition', 'Hyperglycemia'],
            ['-uria', 'Suffix', 'Urine condition', 'Hematuria'],
            ['-lysis', 'Suffix', 'Breaking down', 'Hemolysis'],
            ['-penia', 'Suffix', 'Deficiency', 'Thrombocytopenia'],
          ],
        },
      },
      {
        heading: 'Specimen State Terms',
        bullets: [
          'Hemolysis: ruptured red cells tinting serum pink to red',
          'Lipemia: milky serum from excess fat',
          'Icterus: dark yellow serum from elevated bilirubin',
          'Anuria: absence of urine output',
          'Leukocytosis: elevated white blood cell count',
        ],
      },
      {
        heading: 'Decoding Practice',
        bullets: [
          'Hypoglycemia = hypo (below) + glyc (glucose) + emia (blood condition)',
          'Thrombocytopenia = thrombo (clot) + cyto (cell) + penia (deficiency) = low platelets',
          'Hematuria = hemat (blood) + uria (urine condition) = blood in the urine',
        ],
      },
    ],
    callouts: [
      {
        variant: 'tip',
        title: 'Study strategy',
        text: 'Decode from the back: the suffix tells you what kind of condition, the root tells you where, and the prefix tells you how much or which direction.',
      },
    ],
    keyPoints: [
      'Hemat, urin, and cyt are roots for blood, urine, and cell',
      'Hyper and hypo mean above and below normal',
      'Hemolysis, lipemia, and icterus describe common specimen states',
      'Emia and uria are suffixes for blood and urine conditions',
      'Decompose unfamiliar terms into word parts to find meaning',
    ],
  },
  {
    id: 'les_cla_06_2',
    moduleId: 'mod_cla_06',
    title: 'Common Test Names and Abbreviations',
    order: 2,
    durationMin: 18,
    content: [
      'Laboratory requisitions use standardized abbreviations. Common examples include CBC for complete blood count, BMP and CMP for basic and comprehensive metabolic panels, UA for urinalysis, PT and aPTT for coagulation tests, Hgb for hemoglobin, and glucose tests described as fasting or random. Learning the abbreviations with the specimen type each test requires connects vocabulary directly to collection practice.',
      'Test panels group related measurements, and knowing their composition prevents undercollection. A metabolic panel includes electrolytes, kidney markers, and glucose; a lipid panel includes cholesterol and triglycerides and often requires fasting. Each test maps to a tube type and handling condition, so reading the requisition carefully is part of vocabulary in action.',
      'Caution applies to ambiguous abbreviations and look-alike names. Writing out terms when there is any doubt, clarifying unclear orders before collecting, and using the laboratory’s standard test directory rather than memory alone are habits that prevent ordering and collection errors.',
    ],
    sections: [
      {
        heading: 'Core Abbreviations and Their Specimens',
        table: {
          caption: 'Abbreviations with the specimen each requires',
          headers: ['Abbreviation', 'Full name', 'Typical specimen'],
          rows: [
            ['CBC', 'Complete blood count', 'Whole blood in EDTA'],
            ['BMP', 'Basic metabolic panel', 'Serum'],
            ['CMP', 'Comprehensive metabolic panel', 'Serum'],
            ['UA', 'Urinalysis', 'Random urine'],
            ['PT', 'Prothrombin time', 'Citrated plasma'],
            ['aPTT', 'Activated partial thromboplastin time', 'Citrated plasma'],
            ['Hgb', 'Hemoglobin', 'Whole blood'],
          ],
        },
      },
      {
        heading: 'Panels and Preparation Requirements',
        bullets: [
          'Metabolic panels: electrolytes, kidney markers, and glucose',
          'Lipid panel: cholesterol and triglycerides; fasting commonly required',
          'Coagulation tests: citrate tubes, filled completely',
          'Glucose tests: labeled fasting or random, and timed matters',
        ],
      },
      {
        heading: 'Avoiding Abbreviation Errors',
        bullets: [
          'Use the laboratory’s standard test directory, not memory',
          'Write out full names whenever there is any doubt',
          'Clarify ambiguous or contradictory orders before collecting',
          'Match every ordered test to its required tube and handling',
        ],
      },
    ],
    callouts: [
      {
        variant: 'warning',
        title: 'Common error',
        text: 'Collecting a coagulation test into an EDTA tube because both are “blood tests” makes the specimen unusable. Abbreviations map to tubes; learn them as pairs.',
      },
    ],
    keyPoints: [
      'CBC, BMP, CMP, UA, PT, and aPTT are core abbreviations to know',
      'Know which specimen type and handling each common test requires',
      'Lipid panels commonly require fasting',
      'Clarify ambiguous orders instead of guessing',
      'Use the standard test directory rather than memory alone',
    ],
  },
  {
    id: 'les_cla_07_1',
    moduleId: 'mod_cla_07',
    title: 'From Order to Result: The Testing Cycle',
    order: 1,
    durationMin: 20,
    content: [
      'The testing cycle has three phases. The preanalytical phase covers everything before analysis: ordering, patient preparation, collection, transport, receiving, and processing. The analytical phase is the testing itself, governed by calibration, controls, and procedure. The postanalytical phase covers review, reporting, and communication of results. Laboratory assistants work mainly in the preanalytical and postanalytical phases, where most errors actually occur.',
      'Each phase has characteristic risks. Preanalytical risks include wrong patient, wrong tube, and delayed transport; analytical risks include instrument malfunction and reagent problems; postanalytical risks include transcription errors and delayed reporting. Understanding the full cycle helps assistants see how their accuracy at the bench edge protects every downstream step.',
      'Results flow through review before release. Automated analyzers flag abnormal or implausible values, qualified staff verify results, and reports are delivered to the ordering provider through the laboratory information system. Critical values, results that may represent immediate danger, are communicated urgently with read-back confirmation and documentation of who was notified and when.',
    ],
    sections: [
      {
        heading: 'The Three Phases of Testing',
        table: {
          caption: 'Where errors cluster and who controls each phase',
          headers: ['Phase', 'What happens', 'Characteristic risks'],
          rows: [
            ['Preanalytical', 'Ordering, preparation, collection, transport, receiving, processing', 'Wrong patient, wrong tube, delays, hemolysis'],
            ['Analytical', 'The testing itself', 'Instrument malfunction, reagent problems, calibration drift'],
            ['Postanalytical', 'Review, verification, reporting, communication', 'Transcription errors, delayed or missed critical notifications'],
          ],
        },
      },
      {
        heading: 'Communicating a Critical Value',
        steps: [
          'Confirm the result meets the laboratory’s critical value criteria',
          'Notify the responsible caregiver urgently, by phone or in person',
          'Use read-back: the receiver repeats the result back to confirm accuracy',
          'Document who was notified, the time, and the result communicated',
        ],
      },
      {
        heading: 'Why the Preanalytical Phase Dominates Errors',
        paragraphs: [
          'Studies of laboratory error consistently place most mistakes outside the analyzer: identification, collection, handling, and transport. This is encouraging news for assistants, because it means the steps they control every day are exactly the steps where quality is won or lost.',
        ],
      },
    ],
    callouts: [
      {
        variant: 'safety',
        title: 'Safety-critical',
        text: 'Critical values are never sent by routine report or left in a queue. Urgent verbal notification with read-back, plus documentation of who and when, is the standard.',
      },
    ],
    keyPoints: [
      'Know the three phases: preanalytical, analytical, postanalytical',
      'Most laboratory errors occur outside the analytical phase',
      'Critical values are communicated urgently with read-back',
      'Automated flags and staff review precede result release',
      'Every phase depends on accurate work in the phases before it',
    ],
  },
  {
    id: 'les_cla_07_2',
    moduleId: 'mod_cla_07',
    title: 'Priorities, Stats, and Turnaround Time',
    order: 2,
    durationMin: 18,
    content: [
      'Laboratories triage work by priority. Stat requests are urgent and move to the front of every queue, from collection to analysis to reporting. Timed requests, such as drug levels, are tied to specific clock times and scheduled accordingly. Routine work fills the remaining capacity. Handling a stat as routine, or a routine as stat, both distort the system, so priority categories are respected exactly as ordered.',
      'Turnaround time, the interval from order or collection to reported result, is a core laboratory metric. It depends on transport time, processing steps like clotting and centrifugation, analyzer schedules, and verification. Assistants protect turnaround time by delivering specimens promptly, processing them in the correct sequence, and flagging anything that will cause delay.',
      'Backlogs and instrument downtime happen; what defines quality is the response. Communicating delays to affected departments, triaging the most urgent specimens first during recovery, and documenting downtime and corrective actions keep patient care moving even when the laboratory is under stress.',
    ],
    sections: [
      {
        heading: 'Priority Categories',
        table: {
          headers: ['Priority', 'Meaning', 'Handling'],
          rows: [
            ['Stat', 'Urgent; results needed immediately', 'Front of every queue at every step'],
            ['Timed', 'Tied to an exact clock time', 'Scheduled against the clock; record actual times'],
            ['Routine', 'Standard urgency', 'Processed in normal workflow order'],
          ],
        },
      },
      {
        heading: 'Protecting Turnaround Time',
        bullets: [
          'Deliver specimens to the laboratory promptly after collection',
          'Process in the correct sequence: stats first, then timed, then routine',
          'Start clotting and centrifugation timers without delay',
          'Flag anything that will cause a delay before the deadline passes',
        ],
      },
      {
        heading: 'Responding to Downtime',
        bullets: [
          'Communicate the outage and expected delay to affected departments',
          'Triage the most urgent specimens first during recovery',
          'Follow the documented downtime procedure for orders and results',
          'Document the downtime period and corrective actions',
        ],
      },
    ],
    callouts: [
      {
        variant: 'tip',
        title: 'Clinical pearl',
        text: 'A delay communicated early is a scheduling problem; a delay discovered late is a patient care problem. Pick up the phone before the deadline, not after.',
      },
    ],
    keyPoints: [
      'Stat means urgent: front of every queue, at every step',
      'Timed tests must match the clock exactly',
      'Turnaround time is protected by prompt transport and processing',
      'Respect priority categories exactly as ordered',
      'Communicate delays proactively during backlogs or downtime',
    ],
  },
  {
    id: 'les_cla_08_1',
    moduleId: 'mod_cla_08',
    title: 'Professional Communication in the Laboratory',
    order: 1,
    durationMin: 16,
    content: [
      'Laboratory communication serves patient safety. When reporting information verbally, use structured techniques: state your name and role, give the patient identifiers, deliver the information, and use read-back for critical values, repeating the result back to confirm accuracy. Written and electronic communication follows the same discipline of clarity, accuracy, and timeliness.',
      'Communication with patients has boundaries. Assistants may explain collection procedures and preparation instructions, but results are interpreted and communicated to patients by providers, not by laboratory staff. When a patient asks what a result means, the professional answer is warm but firm: the ordering provider will discuss it, and the question is passed along so that happens promptly.',
      'Receiving criticism and clarification requests gracefully is part of the role. If a nurse reports a hemolyzed specimen or a provider questions a delay, the response is factual and solution-focused rather than defensive. Every such conversation is a chance to strengthen the system that patients depend on.',
    ],
    sections: [
      {
        heading: 'Structured Verbal Communication',
        steps: [
          'State your name, role, and department',
          'Give the patient’s two identifiers',
          'Deliver the information clearly and completely',
          'For critical values, ask the receiver to read the result back',
          'Document who received the information and when',
        ],
      },
      {
        heading: 'Role Boundaries with Patients',
        bullets: [
          'You may explain collection procedures and preparation instructions',
          'You may not interpret results or say what a result means',
          'Warm deflection: “Your provider will go over the results with you”',
          'Pass the patient’s question to the provider so it is actually answered',
        ],
      },
      {
        heading: 'Handling Complaints and Clarifications',
        bullets: [
          'Listen fully before responding',
          'Answer factually: what happened, what happens next',
          'Focus on the solution, such as scheduling a recollection',
          'Thank the reporter; complaints are quality data',
        ],
      },
    ],
    callouts: [
      {
        variant: 'exam',
        title: 'Readiness focus',
        text: 'Read-back for critical values and the boundary against interpreting results for patients are both classic scenario questions.',
      },
    ],
    keyPoints: [
      'Use read-back to confirm critical values communicated verbally',
      'Laboratory staff do not interpret results for patients',
      'Answer concerns factually and focus on solutions',
      'Structured communication prevents misunderstandings',
      'Document who received information and when',
    ],
  },
  {
    id: 'les_cla_08_2',
    moduleId: 'mod_cla_08',
    title: 'Teamwork and Customer Service',
    order: 2,
    durationMin: 16,
    content: [
      'The laboratory is a relay team: phlebotomists, assistants, testing personnel, pathologists, couriers, and clerical staff each hold the baton briefly, and the result only arrives if every handoff succeeds. Reliability means doing your segment completely and on time, and communicating clearly when you cannot. Covering gaps for colleagues and asking for help early are signs of a strong team, not weakness.',
      'Internal customers include nurses, providers, and other departments who depend on laboratory information to make decisions. Serving them well means answering inquiries promptly, knowing where to find specimen status, and following up when you promise to. External service extends to patients and families encountered in collection areas, where courtesy and clear directions shape their impression of the whole institution.',
      'Professional growth is a shared responsibility. Participating in training, competency checks, and team meetings keeps skills current, and mentoring newer staff spreads good practice. A laboratory assistant who invests in the team raises the quality of every result the laboratory reports.',
    ],
    sections: [
      {
        heading: 'What Reliable Teamwork Looks Like',
        bullets: [
          'Complete your segment of the work fully and on time',
          'Communicate early when you cannot meet a commitment',
          'Cover for colleagues during peaks without being asked twice',
          'Ask for help before a problem becomes a backlog',
          'Hand off work with enough information for the next person to succeed',
        ],
      },
      {
        heading: 'Serving Internal Customers',
        bullets: [
          'Answer specimen-status inquiries promptly and accurately',
          'Know how to look up where a specimen is in the process',
          'Follow up when you promise to, even if the answer is “still pending”',
          'Escalate recurring friction points through proper channels',
        ],
      },
      {
        heading: 'Investing in the Team',
        bullets: [
          'Attend training and competency checks as scheduled',
          'Mentor newer staff in technique and workflow',
          'Share lessons from errors and near misses constructively',
        ],
      },
    ],
    callouts: [
      {
        variant: 'tip',
        title: 'Clinical pearl',
        text: 'The best time to ask for help is when the queue first starts growing, not when it has already doubled. Early requests feel like teamwork; late ones feel like emergencies.',
      },
    ],
    keyPoints: [
      'Laboratory work is a relay: every handoff must succeed',
      'Ask for help early rather than letting problems grow',
      'Serve internal customers with prompt, accurate follow-through',
      'Courtesy to patients in collection areas reflects on the whole institution',
      'Training and competency checks keep the whole team sharp',
    ],
  },
  {
    id: 'les_cla_09_1',
    moduleId: 'mod_cla_09',
    title: 'Accurate Records and Data Entry',
    order: 1,
    durationMin: 18,
    media: [
      {
        src: 'lessons/cla-documentation.png',
        alt: 'Laboratory documentation with requisition form, labels, and logbook',
        caption: 'If it was not documented, it was not done',
      },
    ],
    content: [
      'Laboratory records are legal and clinical documents. Accession logs, temperature logs, maintenance records, QC records, and specimen tracking entries must be complete, legible, timely, and attributable to the person who made them. Entries are made when the work is done, not reconstructed at the end of the shift from memory.',
      'Data entry into the laboratory information system demands verification habits. Patient identifiers are checked character by character against the requisition, test orders are matched to specimens, and any mismatch stops the process until resolved. Transcription errors at this stage propagate silently into patient records, so slow-and-certain beats fast-and-wrong every time.',
      'Corrections follow policy. Paper corrections use a single line through the error with initials and date, preserving the original entry; electronic corrections use the system’s audit trail rather than deletion. A record that hides its own history cannot be trusted, and auditors and accreditors look specifically for transparent correction practices.',
    ],
    sections: [
      {
        heading: 'Standards for Every Record Entry',
        bullets: [
          'Complete: no blank fields that policy requires',
          'Legible and clear to any reader',
          'Timely: recorded when the work is done',
          'Attributable: signed or logged to the person who did the work',
          'Accurate: transcribed character by character from the source',
        ],
      },
      {
        heading: 'Data Entry Verification Routine',
        steps: [
          'Match the specimen label to the requisition before typing anything',
          'Enter identifiers character by character, then read them back against the source',
          'Match each ordered test to the specimen in front of you',
          'Stop and resolve any mismatch before proceeding',
          'Save or submit only after a final review',
        ],
      },
      {
        heading: 'Correcting Records Transparently',
        bullets: [
          'Paper: single line through the error, correction, initials, and date',
          'Electronic: use the system’s correction and audit-trail functions',
          'Never erase, overwrite, delete, or backdate',
          'Label late entries as late entries',
        ],
      },
    ],
    callouts: [
      {
        variant: 'warning',
        title: 'Common error',
        text: 'Reconstructing a temperature log at the end of the shift from memory is falsification, not catch-up. Record at the time of the task, every time.',
      },
    ],
    keyPoints: [
      'Record work when it is done, not reconstructed later',
      'Verify identifiers character by character during data entry',
      'Never delete errors; correct them transparently per policy',
      'Mismatches between orders and specimens stop the process',
      'Late entries are labeled as such, never backdated',
    ],
  },
  {
    id: 'les_cla_09_2',
    moduleId: 'mod_cla_09',
    title: 'Confidentiality and Regulatory Basics',
    order: 2,
    durationMin: 18,
    content: [
      'Patient information in the laboratory is protected by federal privacy law and professional ethics. Results, orders, and even the fact that a patient had testing are confidential. Access is limited to what the job requires, discussions happen in private, and printed material is secured or shredded. Sharing login credentials is prohibited because every access must be traceable to an individual.',
      'Laboratories operate under a framework of regulation and accreditation. Federal rules govern laboratory testing quality, workplace safety agencies set exposure and hazard standards, and accrediting organizations inspect laboratories against detailed checklists. Assistants support compliance by following procedures exactly as written, keeping records current, and participating honestly in inspections.',
      'Compliance is daily behavior, not an annual event. Wearing PPE, logging temperatures, documenting corrective actions, and completing required training are the substance of regulatory readiness. When the written procedure and daily habit match, inspections become confirmations rather than surprises.',
    ],
    sections: [
      {
        heading: 'Confidentiality Rules for Laboratory Staff',
        bullets: [
          'Results, orders, and even the fact of testing are all confidential',
          'Access only the information your task requires',
          'Discuss patient information only in private work areas',
          'Never share login credentials; every access must trace to an individual',
          'Secure or shred all printed material with patient information',
        ],
      },
      {
        heading: 'The Regulatory Landscape in Brief',
        bullets: [
          'Federal laboratory rules govern testing quality and personnel standards',
          'Workplace safety regulations set exposure and hazard standards',
          'Accrediting organizations inspect against detailed checklists',
          'Written procedures define compliance; deviations define risk',
        ],
      },
      {
        heading: 'Daily Compliance Habits',
        bullets: [
          'Wear PPE and follow safety rules even when no one is watching',
          'Complete logs and records at the time of the task',
          'Document corrective actions fully',
          'Complete required training before deadlines',
        ],
      },
    ],
    callouts: [
      {
        variant: 'safety',
        title: 'Safety-critical',
        text: 'Sharing your login makes you accountable for everything done under it and destroys the traceability that investigations depend on. Credentials are personal, like a signature.',
      },
    ],
    keyPoints: [
      'Even the fact that testing occurred is confidential information',
      'Never share login credentials; access must be individually traceable',
      'Follow written procedures exactly; they define compliance',
      'Regulation and accreditation rest on daily habits, not annual preparation',
      'Daily documentation habits are what inspections verify',
    ],
  },
  {
    id: 'les_cla_10_1',
    moduleId: 'mod_cla_10',
    title: 'Readiness Checklist',
    order: 1,
    durationMin: 16,
    content: [
      'Complete a structured self-assessment across every module: laboratory safety, specimen collection, specimen processing, basic equipment, quality control, medical terminology, laboratory workflow, communication, and documentation. For each area, confirm that you can state the rule and describe the correct action, such as spill response steps, centrifuge balancing, or what to do when QC fails.',
      'Direct final study with your practice data. Restudy the lessons behind missed questions and repeat the related knowledge checks. High-yield review points include hazard classes and PPE, specimen rejection criteria, the phases of the testing cycle, the difference between accuracy and precision, critical value communication with read-back, and transparent correction of records.',
      'Confirm logistics early: exam format, question count, time limit, required identification, and permitted materials. Take the timed final practice test in this platform in one uninterrupted sitting without notes, several days before your target date, so any gaps it reveals can still be closed.',
    ],
    sections: [
      {
        heading: 'Domain-by-Domain Self-Check',
        bullets: [
          'Safety: hazard classes, PPE, spill response, waste streams',
          'Collection: identification, preparation, urine collection types',
          'Processing: receiving checklist, accessioning, centrifugation, aliquoting',
          'Equipment and QC: microscope, centrifuge, controls, calibration',
          'Terminology, workflow, communication, and documentation',
        ],
      },
      {
        heading: 'High-Yield Review Targets',
        bullets: [
          'The three hazard classes and their protections',
          'Common specimen rejection criteria',
          'Accuracy versus precision and QC failure response',
          'Critical value notification with read-back',
          'Transparent correction of records',
        ],
      },
      {
        heading: 'Logistics to Confirm Early',
        bullets: [
          'Exam format, question count, and time limit',
          'Required identification and permitted materials',
          'Scheduled slot for the timed final practice test in one sitting',
        ],
      },
    ],
    callouts: [
      {
        variant: 'exam',
        title: 'Readiness focus',
        text: 'If QC fails, patient results stop: that single rule resolves a whole family of scenario questions. Know it and the troubleshooting sequence that follows it.',
      },
    ],
    keyPoints: [
      'Self-assess every module with both rules and actions',
      'Restudy lessons behind missed practice questions',
      'Know the testing cycle phases and QC principles cold',
      'Focus final review on high-yield targets',
      'Simulate exam conditions for the timed final practice test',
    ],
  },
  {
    id: 'les_cla_10_2',
    moduleId: 'mod_cla_10',
    title: 'Exam-Day Strategies',
    order: 2,
    durationMin: 16,
    content: [
      'Set up the day for success: confirm identification and materials the night before, sleep fully, eat normally, and arrive or log in early. A predictable routine lowers anxiety, and anxiety is a bigger performance risk than any single content gap at this stage of preparation.',
      'During the exam, set a pace from the question count and time limit and check it periodically. Read each stem completely before the choices, noting priority words like first, best, and most appropriate. For scenario questions, identify the underlying principle, usually safety, specimen integrity, or patient identification, and let that principle choose the answer.',
      'Flag uncertain questions and move on rather than stalling, then return with fresh perspective. Answer every question unless guessing is penalized, and change answers only when you find a specific error in your first reasoning. Submit with confidence in the systematic preparation you have completed.',
    ],
    sections: [
      {
        heading: 'Your First-Pass Routine',
        steps: [
          'Read the stem fully before reading any choice',
          'Name the underlying principle: safety, integrity, or identification',
          'Eliminate choices that violate that principle',
          'Select the best remaining option and flag if unsure',
          'Move on without stalling; return on the second pass',
        ],
      },
      {
        heading: 'The Three Governing Principles',
        bullets: [
          'Safety: protect the patient and the worker first',
          'Specimen integrity: a compromised specimen cannot produce a trustworthy result',
          'Identification: right patient, right specimen, right record, every time',
        ],
      },
      {
        heading: 'Second-Pass Discipline',
        bullets: [
          'Review flagged items with fresh eyes',
          'Change answers only for a specific identified error',
          'Confirm every question has an answer before submitting',
        ],
      },
    ],
    callouts: [
      {
        variant: 'tip',
        title: 'Clinical pearl',
        text: 'Laboratory scenario questions almost always resolve to one of three principles: safety, specimen integrity, or identification. Name the principle first, and the answer usually names itself.',
      },
      {
        variant: 'exam',
        title: 'Readiness focus',
        text: 'A blank answer is a guaranteed zero. Unless guessing is penalized, answer every question before time runs out.',
      },
    ],
    keyPoints: [
      'Prepare logistics the night before and protect your sleep',
      'Let the underlying principle answer scenario questions',
      'Safety, integrity, and identification resolve most scenarios',
      'Flag and revisit; answer every question',
      'Change answers only for a specific, identified reason',
    ],
  },
]

export const QUESTIONS: Question[] = [
  // ================= Medical Assistant =================
  {
    id: 'q_ma_01',
    trackId: 'track_ma',
    moduleId: 'mod_ma_01',
    topic: 'Patient Care Fundamentals',
    type: 'multiple_choice',
    difficulty: 'easy',
    text: 'Which action best protects a patient’s privacy during a visit?',
    choices: [
      'Discussing the visit at the front desk so family members can hear',
      'Closing the examination room door before discussing sensitive information',
      'Leaving the open chart on the counter for quick access',
      'Asking about symptoms in the waiting room to save time',
    ],
    correctIndex: 1,
    explanation:
      'Closing the door keeps sensitive conversations private. Discussing care in public areas or leaving records exposed violates confidentiality expectations.',
    estimatedTimeSec: 30,
    tags: ['privacy', 'patient care', 'confidentiality'],
  },
  {
    id: 'q_ma_02',
    trackId: 'track_ma',
    moduleId: 'mod_ma_01',
    topic: 'Patient Care Fundamentals',
    type: 'multiple_choice',
    difficulty: 'medium',
    text: 'Which question is the best example of an open-ended question during patient intake?',
    choices: [
      'Does your chest hurt when you climb stairs?',
      'Is your pain a seven out of ten?',
      'What concerns brought you in today?',
      'Did you take your medication this morning?',
    ],
    correctIndex: 2,
    explanation:
      'Open-ended questions invite the patient to describe concerns in their own words, which reveals information that yes-or-no questions can miss.',
    estimatedTimeSec: 35,
    tags: ['communication', 'intake'],
  },
  {
    id: 'q_ma_03',
    trackId: 'track_ma',
    moduleId: 'mod_ma_02',
    topic: 'Clinical Workflow',
    type: 'multiple_choice',
    difficulty: 'medium',
    text: 'What is the correct first step when rooming a patient?',
    choices: [
      'Measure blood pressure immediately to save time',
      'Greet the patient and verify identity using two identifiers',
      'Ask the patient to undress before confirming the visit type',
      'Update the insurance information at the examination room computer',
    ],
    correctIndex: 1,
    explanation:
      'Rooming begins with a greeting and identity verification using two identifiers. All intake steps that follow depend on having the right patient.',
    estimatedTimeSec: 40,
    tags: ['rooming', 'identification', 'workflow'],
  },
  {
    id: 'q_ma_04',
    trackId: 'track_ma',
    moduleId: 'mod_ma_02',
    topic: 'Clinical Workflow',
    type: 'scenario',
    difficulty: 'medium',
    text: 'A provider is running about 40 minutes behind and several patients in the waiting area are becoming restless. What is the best action for the medical assistant?',
    choices: [
      'Say nothing so patients do not become more upset',
      'Tell patients the delay is caused by another patient’s complicated case',
      'Promptly inform waiting patients of the delay and offer options such as rescheduling',
      'Move patients into exam rooms so they believe the visit is starting',
    ],
    correctIndex: 2,
    explanation:
      'Honest, prompt communication respects patients’ time and lets them make informed choices. Sharing another patient’s details breaches confidentiality, and pretending the visit is starting is deceptive.',
    estimatedTimeSec: 60,
    tags: ['workflow', 'communication', 'service recovery'],
  },
  {
    id: 'q_ma_05',
    trackId: 'track_ma',
    moduleId: 'mod_ma_03',
    topic: 'Vital Signs',
    type: 'true_false',
    difficulty: 'easy',
    text: 'Respirations should be counted without telling the patient, because awareness of breathing can change the breathing pattern.',
    choices: ['True', 'False'],
    correctIndex: 0,
    explanation:
      'Patients who know their breathing is being observed often alter it unconsciously. Keeping fingers on the wrist as if still counting the pulse is a standard discreet technique.',
    estimatedTimeSec: 30,
    tags: ['vital signs', 'respiration', 'technique'],
  },
  {
    id: 'q_ma_06',
    trackId: 'track_ma',
    moduleId: 'mod_ma_03',
    topic: 'Vital Signs',
    type: 'multiple_choice',
    difficulty: 'hard',
    text: 'A medical assistant uses a blood pressure cuff that is too small for the patient’s arm. What is the expected effect on the reading?',
    choices: [
      'A falsely low reading',
      'A falsely high reading',
      'No effect, because cuff size only affects comfort',
      'An inability to hear any Korotkoff sounds',
    ],
    correctIndex: 1,
    explanation:
      'A cuff that is too small requires more pressure to compress the artery, producing a falsely high reading. A cuff that is too large produces a falsely low reading.',
    estimatedTimeSec: 60,
    tags: ['blood pressure', 'equipment', 'accuracy'],
  },
  {
    id: 'q_ma_07',
    trackId: 'track_ma',
    moduleId: 'mod_ma_04',
    topic: 'Infection Control',
    type: 'scenario',
    difficulty: 'hard',
    text: 'After removing gloves following specimen handling, a medical assistant notices visible soil on both hands. Alcohol-based hand rub is mounted right beside the sink. What should the medical assistant do?',
    choices: [
      'Use the alcohol-based rub because it is faster',
      'Put on new gloves over the soiled hands and wash later',
      'Wash with soap and water for the recommended duration',
      'Wipe hands on a paper towel and continue working',
    ],
    correctIndex: 2,
    explanation:
      'When hands are visibly soiled, soap and water are required; alcohol-based rubs are not effective on visible soil. Gloves never substitute for hand hygiene.',
    estimatedTimeSec: 60,
    tags: ['hand hygiene', 'standard precautions'],
  },
  {
    id: 'q_ma_08',
    trackId: 'track_ma',
    moduleId: 'mod_ma_05',
    topic: 'Pharmacology Basics',
    type: 'multiple_choice',
    difficulty: 'medium',
    text: 'Before administering a medication, the medical assistant performs a three-way comparison among which three items?',
    choices: [
      'The provider order, the medication label, and the prepared dose',
      'The appointment schedule, the billing code, and the medication label',
      'Two different patient charts and the pharmacy receipt',
      'The drug reference book, the internet, and a colleague’s memory',
    ],
    correctIndex: 0,
    explanation:
      'The three-way check compares the provider order, the medication label, and the prepared dose every time a medication is prepared and administered.',
    estimatedTimeSec: 45,
    tags: ['medication safety', 'rights of administration'],
  },
  {
    id: 'q_ma_09',
    trackId: 'track_ma',
    moduleId: 'mod_ma_06',
    topic: 'Medical Terminology',
    type: 'true_false',
    difficulty: 'easy',
    text: 'The term bradycardia refers to an abnormally fast heart rate.',
    choices: ['True', 'False'],
    correctIndex: 1,
    explanation:
      'Brady means slow, so bradycardia is an abnormally slow heart rate. Tachycardia, from tachy meaning fast, is the term for a fast heart rate.',
    estimatedTimeSec: 30,
    tags: ['terminology', 'word parts', 'cardiovascular'],
  },
  {
    id: 'q_ma_10',
    trackId: 'track_ma',
    moduleId: 'mod_ma_07',
    topic: 'EKG Basics',
    type: 'scenario',
    difficulty: 'medium',
    text: 'During a 12-lead EKG, the tracing shows a fine, uniform fuzzy line across all leads. The examination table sits next to several plugged-in electrical devices. What is the most likely cause and the best correction?',
    choices: [
      'Muscle tremor; ask the patient to hold completely still',
      '60-cycle interference; move the patient away from or unplug nearby electrical equipment',
      'Wandering baseline; reapply the electrodes',
      'A cardiac arrhythmia; call emergency services',
    ],
    correctIndex: 1,
    explanation:
      'A fine, uniform interference pattern is characteristic of 60-cycle electrical interference from nearby equipment. Removing the electrical source resolves it; the other artifacts have different appearances and fixes.',
    estimatedTimeSec: 75,
    tags: ['EKG', 'artifacts', 'troubleshooting'],
  },
  {
    id: 'q_ma_11',
    trackId: 'track_ma',
    moduleId: 'mod_ma_08',
    topic: 'Administrative Procedures',
    type: 'multiple_choice',
    difficulty: 'hard',
    text: 'A medical assistant enters the wrong weight in a paper chart entry that has already been signed. What is the correct way to fix it?',
    choices: [
      'Erase the entry carefully and write the correct weight',
      'Cover the error with correction fluid and write over it',
      'Draw a single line through the error, write the correction, and add initials and date',
      'Discard the page and recreate it with the correct information',
    ],
    correctIndex: 2,
    explanation:
      'Paper record corrections use a single line so the original entry remains legible, with initials and date. Erasing, obscuring, or replacing pages destroys the record’s legal integrity.',
    estimatedTimeSec: 55,
    tags: ['documentation', 'health records', 'corrections'],
  },
  {
    id: 'q_ma_12',
    trackId: 'track_ma',
    moduleId: 'mod_ma_09',
    topic: 'Legal and Ethical Responsibilities',
    type: 'multiple_choice',
    difficulty: 'easy',
    text: 'A patient asks the medical assistant whether a lab result means they have cancer. What is the appropriate response?',
    choices: [
      'Give a reassuring personal opinion so the patient stops worrying',
      'Explain the most likely interpretation based on similar past cases',
      'Politely explain that the provider will discuss the result and make sure the provider is informed of the question',
      'Suggest the patient search the internet for the test name',
    ],
    correctIndex: 2,
    explanation:
      'Interpreting diagnostic results is outside the medical assistant’s scope of practice. The correct action is to acknowledge the concern respectfully and ensure the provider addresses it.',
    estimatedTimeSec: 40,
    tags: ['scope of practice', 'ethics', 'communication'],
  },
  // ================= Phlebotomy Technician =================
  {
    id: 'q_phleb_01',
    trackId: 'track_phleb',
    moduleId: 'mod_phleb_01',
    topic: 'Safety and Infection Control',
    type: 'multiple_choice',
    difficulty: 'easy',
    text: 'What is the first action to take after an accidental needlestick injury?',
    choices: [
      'Finish the current draw, then report at the end of the shift',
      'Wash the site immediately with soap and water, then report the exposure',
      'Apply a bandage and continue working',
      'Squeeze the site to remove blood and apply alcohol',
    ],
    correctIndex: 1,
    explanation:
      'Exposures are washed immediately with soap and water and reported at once so evaluation and any post-exposure treatment can begin promptly.',
    estimatedTimeSec: 35,
    tags: ['needlestick', 'exposure', 'safety'],
  },
  {
    id: 'q_phleb_02',
    trackId: 'track_phleb',
    moduleId: 'mod_phleb_01',
    topic: 'Safety and Infection Control',
    type: 'multiple_choice',
    difficulty: 'medium',
    text: 'Which statement about gloves and hand hygiene in phlebotomy is correct?',
    choices: [
      'Wearing gloves makes hand hygiene unnecessary',
      'The same pair of gloves may be used for consecutive patients if they look clean',
      'Hand hygiene is performed before gloving and immediately after glove removal',
      'Gloves should be washed with alcohol rub and reused',
    ],
    correctIndex: 2,
    explanation:
      'Hand hygiene is required before gloving and after removal because gloves can have microscopic defects and hands become contaminated during removal. Gloves are single-use per patient.',
    estimatedTimeSec: 40,
    tags: ['hand hygiene', 'PPE', 'gloves'],
  },
  {
    id: 'q_phleb_03',
    trackId: 'track_phleb',
    moduleId: 'mod_phleb_02',
    topic: 'Anatomy and Physiology Basics',
    type: 'multiple_choice',
    difficulty: 'medium',
    text: 'For most adult patients, which vein is the preferred first choice for routine venipuncture?',
    choices: [
      'Basilic vein',
      'Median cubital vein',
      'Cephalic vein',
      'Dorsal hand vein',
    ],
    correctIndex: 1,
    explanation:
      'The median cubital vein is large, well anchored, and close to the skin, making it the preferred site. The basilic vein lies near the brachial artery and a major nerve, so it is used with extra caution.',
    estimatedTimeSec: 35,
    tags: ['anatomy', 'vein selection'],
  },
  {
    id: 'q_phleb_04',
    trackId: 'track_phleb',
    moduleId: 'mod_phleb_02',
    topic: 'Anatomy and Physiology Basics',
    type: 'scenario',
    difficulty: 'medium',
    text: 'While palpating an antecubital site, the phlebotomist feels a structure that is hard, cord-like, and does not bounce or refill when pressed. What should the phlebotomist conclude and do?',
    choices: [
      'It is a suitable vein; proceed with the draw',
      'It is most likely a tendon; select a different site',
      'It is an artery; proceed because arteries have good blood flow',
      'It is a collapsed vein; apply the tourniquet tighter and proceed',
    ],
    correctIndex: 1,
    explanation:
      'A suitable vein feels bouncy and resilient. A hard, cord-like, non-elastic structure is likely a tendon, and attempting to draw from it would be painful and unsuccessful.',
    estimatedTimeSec: 60,
    tags: ['palpation', 'vein selection', 'anatomy'],
  },
  {
    id: 'q_phleb_05',
    trackId: 'track_phleb',
    moduleId: 'mod_phleb_03',
    topic: 'Venipuncture Equipment',
    type: 'true_false',
    difficulty: 'easy',
    text: 'In needle sizing, a higher gauge number indicates a smaller needle diameter.',
    choices: ['True', 'False'],
    correctIndex: 0,
    explanation:
      'Gauge works in reverse: a 23-gauge needle is thinner than a 21-gauge needle. Larger needles are chosen for volume and flow, smaller ones for fragile veins.',
    estimatedTimeSec: 30,
    tags: ['equipment', 'needles', 'gauge'],
  },
  {
    id: 'q_phleb_06',
    trackId: 'track_phleb',
    moduleId: 'mod_phleb_03',
    topic: 'Venipuncture Equipment',
    type: 'multiple_choice',
    difficulty: 'hard',
    text: 'A light blue citrate coagulation tube is filled only halfway. Why is this a problem?',
    choices: [
      'The vacuum left in the tube will damage the red blood cells',
      'The excess anticoagulant relative to blood distorts the ratio and can invalidate coagulation results',
      'Half-filled tubes cannot be centrifuged',
      'The specimen will clot because there is too little blood',
    ],
    correctIndex: 1,
    explanation:
      'Citrate tubes depend on a precise blood-to-anticoagulant ratio. Underfilling leaves excess citrate, which binds calcium and can falsely prolong coagulation test times.',
    estimatedTimeSec: 65,
    tags: ['coagulation', 'tube fill', 'additives'],
  },
  {
    id: 'q_phleb_07',
    trackId: 'track_phleb',
    moduleId: 'mod_phleb_04',
    topic: 'Order of Draw',
    type: 'scenario',
    difficulty: 'hard',
    text: 'A single venipuncture is ordered for a coagulation panel (light blue tube), a chemistry panel (serum tube), and a complete blood count (lavender EDTA tube). In what order should the tubes be filled?',
    choices: [
      'Lavender, serum, light blue',
      'Serum, lavender, light blue',
      'Light blue, serum, lavender',
      'Serum, light blue, lavender',
    ],
    correctIndex: 2,
    explanation:
      'The recommended order places citrate coagulation tubes before serum tubes, and EDTA tubes after both. This prevents additive carryover that would distort the sensitive coagulation and chemistry results.',
    estimatedTimeSec: 70,
    tags: ['order of draw', 'additives', 'carryover'],
  },
  {
    id: 'q_phleb_08',
    trackId: 'track_phleb',
    moduleId: 'mod_phleb_05',
    topic: 'Specimen Handling',
    type: 'multiple_choice',
    difficulty: 'medium',
    text: 'When should blood collection tubes be labeled?',
    choices: [
      'Before entering the patient’s room, to save time',
      'At the patient’s side, immediately after collection, before leaving',
      'Back at the workstation, once the round is complete',
      'By laboratory staff when the specimens arrive',
    ],
    correctIndex: 1,
    explanation:
      'Tubes are labeled immediately after collection at the patient’s side with two identifiers, date, time, and collector initials. Labeling in advance or later away from the patient invites misidentification.',
    estimatedTimeSec: 40,
    tags: ['labeling', 'identification', 'specimen integrity'],
  },
  {
    id: 'q_phleb_09',
    trackId: 'track_phleb',
    moduleId: 'mod_phleb_06',
    topic: 'Patient Identification',
    type: 'true_false',
    difficulty: 'easy',
    text: 'A patient’s room number is an acceptable identifier for verifying identity before a blood draw.',
    choices: ['True', 'False'],
    correctIndex: 1,
    explanation:
      'Room numbers change and are not unique to a person. Identification requires at least two independent identifiers such as full name and date of birth, verified against the requisition and wristband.',
    estimatedTimeSec: 30,
    tags: ['identification', 'patient safety'],
  },
  {
    id: 'q_phleb_10',
    trackId: 'track_phleb',
    moduleId: 'mod_phleb_07',
    topic: 'Complications and Corrective Action',
    type: 'scenario',
    difficulty: 'medium',
    text: 'Mid-draw, a patient becomes pale, sweaty, and reports feeling dizzy. What should the phlebotomist do first?',
    choices: [
      'Draw faster so the procedure ends sooner',
      'Release the tourniquet, remove the needle, apply pressure, and support the patient to prevent a fall',
      'Ask the patient to take deep breaths and continue',
      'Leave to get smelling salts while the needle is in place',
    ],
    correctIndex: 1,
    explanation:
      'At the first sign of syncope the draw stops: tourniquet released, needle removed, pressure applied, and the patient protected from falling. Continuing risks injury, and a patient is never left alone with a needle in place.',
    estimatedTimeSec: 60,
    tags: ['syncope', 'complications', 'patient safety'],
  },
  {
    id: 'q_phleb_11',
    trackId: 'track_phleb',
    moduleId: 'mod_phleb_08',
    topic: 'Quality Assurance',
    type: 'multiple_choice',
    difficulty: 'hard',
    text: 'Which practice is most likely to cause hemolysis of a blood specimen?',
    choices: [
      'Gently inverting an EDTA tube eight to ten times',
      'Releasing the tourniquet once blood flow is established',
      'Forcing blood from a syringe through a small needle into a tube',
      'Allowing the alcohol to dry fully before the stick',
    ],
    correctIndex: 2,
    explanation:
      'Forcing blood through a small needle under pressure ruptures red cells. The other options are correct techniques that protect specimen quality.',
    estimatedTimeSec: 55,
    tags: ['hemolysis', 'quality', 'preanalytical'],
  },
  {
    id: 'q_phleb_12',
    trackId: 'track_phleb',
    moduleId: 'mod_phleb_09',
    topic: 'Professional Standards',
    type: 'multiple_choice',
    difficulty: 'easy',
    text: 'A coworker who is not involved in a patient’s care asks the phlebotomist what tests that patient had today. What is the correct response?',
    choices: [
      'Share the information because coworkers are part of the same facility',
      'Politely decline, because patient information is shared only for a work-related need',
      'Share the test names but not the results',
      'Tell the coworker to look it up in the computer',
    ],
    correctIndex: 1,
    explanation:
      'Confidentiality limits access to those with a work-related need, regardless of employment at the same facility. Curiosity is never a valid reason to disclose.',
    estimatedTimeSec: 35,
    tags: ['confidentiality', 'ethics', 'professionalism'],
  },
  // ================= Clinical Laboratory Assisting =================
  {
    id: 'q_cla_01',
    trackId: 'track_cla',
    moduleId: 'mod_cla_01',
    topic: 'Laboratory Safety',
    type: 'multiple_choice',
    difficulty: 'easy',
    text: 'Which practice is never acceptable in a clinical laboratory?',
    choices: [
      'Wearing a buttoned lab coat while processing specimens',
      'Using a mechanical pipette device to transfer serum',
      'Mouth pipetting a small volume of reagent',
      'Disinfecting the work surface at the end of a shift',
    ],
    correctIndex: 2,
    explanation:
      'Mouth pipetting is prohibited under all circumstances because it risks ingesting infectious or toxic material. Mechanical pipetting devices are always used instead.',
    estimatedTimeSec: 30,
    tags: ['safety', 'pipetting', 'rules'],
  },
  {
    id: 'q_cla_02',
    trackId: 'track_cla',
    moduleId: 'mod_cla_01',
    topic: 'Laboratory Safety',
    type: 'multiple_choice',
    difficulty: 'medium',
    text: 'A tube breaks during a spill cleanup, leaving shards of contaminated glass. How should the glass be collected?',
    choices: [
      'By hand while wearing thick utility gloves',
      'With tongs, forceps, or a brush and dustpan, never by hand',
      'By wrapping the shards in a paper towel and picking them up',
      'By rinsing them down the sink with plenty of water',
    ],
    correctIndex: 1,
    explanation:
      'Contaminated broken glass is always collected mechanically with tools such as tongs or a brush and dustpan, then placed in a sharps container. Even gloved hands are at risk of puncture.',
    estimatedTimeSec: 40,
    tags: ['sharps', 'spill response', 'safety'],
  },
  {
    id: 'q_cla_03',
    trackId: 'track_cla',
    moduleId: 'mod_cla_02',
    topic: 'Specimen Collection',
    type: 'multiple_choice',
    difficulty: 'medium',
    text: 'Which instruction correctly describes how to begin a 24-hour urine collection?',
    choices: [
      'Collect the first morning void and all urine for the next 24 hours',
      'Discard the first morning void, note the time, then collect every void for the next 24 hours including the final one',
      'Collect urine only during daytime hours for two consecutive days',
      'Collect one void at noon each day for two days',
    ],
    correctIndex: 1,
    explanation:
      'A 24-hour collection starts with an empty bladder: the first morning void is discarded and the clock starts. Every subsequent void is collected, ending with a final void exactly 24 hours later.',
    estimatedTimeSec: 50,
    tags: ['urine collection', 'timed specimen'],
  },
  {
    id: 'q_cla_04',
    trackId: 'track_cla',
    moduleId: 'mod_cla_02',
    topic: 'Specimen Collection',
    type: 'scenario',
    difficulty: 'medium',
    text: 'A patient arrives for a fasting glucose test and mentions eating breakfast two hours ago. What should the laboratory assistant do?',
    choices: [
      'Collect the specimen anyway and label it fasting',
      'Collect the specimen and discard it if the result looks abnormal',
      'Pause the collection and follow policy to notify the provider or laboratory, documenting the situation',
      'Tell the patient to return the next day without informing anyone',
    ],
    correctIndex: 2,
    explanation:
      'A non-fasting specimen labeled as fasting would produce a misleading result. The correct action is to pause, notify the appropriate provider or laboratory per policy, document, and arrange recollection.',
    estimatedTimeSec: 60,
    tags: ['fasting', 'patient preparation', 'documentation'],
  },
  {
    id: 'q_cla_05',
    trackId: 'track_cla',
    moduleId: 'mod_cla_03',
    topic: 'Specimen Processing',
    type: 'true_false',
    difficulty: 'easy',
    text: 'It is acceptable to open the centrifuge lid briefly while the rotor is still moving, as long as it is almost stopped.',
    choices: ['True', 'False'],
    correctIndex: 1,
    explanation:
      'The lid is never opened while the rotor is moving. Opening a spinning centrifuge risks injury and releases aerosols; the rotor must come to a complete stop first.',
    estimatedTimeSec: 30,
    tags: ['centrifuge', 'safety', 'processing'],
  },
  {
    id: 'q_cla_06',
    trackId: 'track_cla',
    moduleId: 'mod_cla_03',
    topic: 'Specimen Processing',
    type: 'multiple_choice',
    difficulty: 'hard',
    text: 'The laboratory receives a blood specimen with no label, delivered with a requisition. The courier says they are sure it came from Room 12. What should happen to the specimen?',
    choices: [
      'Label it using the requisition information since the courier is confident',
      'Process it but flag the result as uncertain',
      'Reject it per policy and arrange recollection, because unlabeled specimens are never relabeled from memory',
      'Hold it until the patient calls to confirm their identity',
    ],
    correctIndex: 2,
    explanation:
      'Unlabeled specimens cannot be identified with certainty and are rejected under the laboratory’s policy, with prompt recollection. Guessing an identity risks reporting results for the wrong patient.',
    estimatedTimeSec: 60,
    tags: ['rejection criteria', 'labeling', 'patient safety'],
  },
  {
    id: 'q_cla_07',
    trackId: 'track_cla',
    moduleId: 'mod_cla_04',
    topic: 'Basic Lab Equipment',
    type: 'scenario',
    difficulty: 'hard',
    text: 'Midway through a spin, the centrifuge begins vibrating loudly. What is the correct response?',
    choices: [
      'Open the lid immediately to redistribute the tubes',
      'Stop the run, let the rotor come to a complete stop, then check that the load is balanced',
      'Increase the speed so the run finishes faster',
      'Ignore it, since centrifuges normally make noise',
    ],
    correctIndex: 1,
    explanation:
      'Vibration indicates an unbalanced load or a mechanical problem. The run is stopped, the rotor allowed to stop fully, and the load checked. Opening a moving centrifuge is dangerous.',
    estimatedTimeSec: 60,
    tags: ['centrifuge', 'troubleshooting', 'equipment'],
  },
  {
    id: 'q_cla_08',
    trackId: 'track_cla',
    moduleId: 'mod_cla_05',
    topic: 'Quality Control',
    type: 'multiple_choice',
    difficulty: 'medium',
    text: 'A morning quality control result falls outside the acceptable range. What is the correct response?',
    choices: [
      'Report patient results anyway because the controls may be faulty',
      'Do not report patient results; repeat the control and follow the troubleshooting procedure',
      'Erase the out-of-range result and rerun it later in the day',
      'Recalibrate the analyzer without documenting anything',
    ],
    correctIndex: 1,
    explanation:
      'Failed QC means the system is unverified, so patient results are withheld while the control is repeated and systematic troubleshooting is performed and documented. Hiding failures defeats the purpose of QC.',
    estimatedTimeSec: 50,
    tags: ['quality control', 'troubleshooting'],
  },
  {
    id: 'q_cla_09',
    trackId: 'track_cla',
    moduleId: 'mod_cla_06',
    topic: 'Medical Terminology',
    type: 'true_false',
    difficulty: 'easy',
    text: 'Hypoglycemia means a below-normal level of glucose in the blood.',
    choices: ['True', 'False'],
    correctIndex: 0,
    explanation:
      'Hypo means below normal, glyc refers to glucose, and emia means a blood condition, so hypoglycemia is a below-normal blood glucose level.',
    estimatedTimeSec: 30,
    tags: ['terminology', 'word parts'],
  },
  {
    id: 'q_cla_10',
    trackId: 'track_cla',
    moduleId: 'mod_cla_07',
    topic: 'Laboratory Workflow',
    type: 'scenario',
    difficulty: 'medium',
    text: 'Testing personnel identify a critical value that may represent immediate danger to a patient. How is the result communicated?',
    choices: [
      'By routine report with the rest of the day’s results',
      'By urgent notification to the responsible caregiver with read-back confirmation and documentation of who was notified and when',
      'By telling the patient directly at the collection window',
      'By email marked high priority, with no follow-up needed',
    ],
    correctIndex: 1,
    explanation:
      'Critical values require urgent verbal notification with read-back to confirm accuracy, plus documentation of who was notified and when. Routine or unconfirmed channels are not sufficient for dangerous results.',
    estimatedTimeSec: 55,
    tags: ['critical values', 'workflow', 'communication'],
  },
  {
    id: 'q_cla_11',
    trackId: 'track_cla',
    moduleId: 'mod_cla_08',
    topic: 'Communication and Professionalism',
    type: 'multiple_choice',
    difficulty: 'hard',
    text: 'While dropping off a specimen, a patient asks the laboratory assistant what their test result means. What is the most professional response?',
    choices: [
      'Interpret the result in simple terms to be helpful',
      'Refuse to speak with the patient because laboratory staff only handle specimens',
      'Explain kindly that the ordering provider will discuss the result, and pass the patient’s question along so it is addressed promptly',
      'Print the report and hand it to the patient without comment',
    ],
    correctIndex: 2,
    explanation:
      'Interpreting results is outside the laboratory assistant’s role, but dismissing the patient is poor service. The professional response acknowledges the concern and routes it to the provider who owns the interpretation.',
    estimatedTimeSec: 50,
    tags: ['scope', 'communication', 'professionalism'],
  },
  {
    id: 'q_cla_12',
    trackId: 'track_cla',
    moduleId: 'mod_cla_09',
    topic: 'Documentation',
    type: 'multiple_choice',
    difficulty: 'easy',
    text: 'How is an error corrected in a paper laboratory record?',
    choices: [
      'Erase the mistake and write the correction in the space',
      'Cover it with correction fluid and rewrite the entry',
      'Draw a single line through the error so it stays legible, then add the correction with initials and date',
      'Tear out the page and rewrite the whole record',
    ],
    correctIndex: 2,
    explanation:
      'Transparent corrections preserve the original entry with a single line, initials, and date. Erasing, obscuring, or replacing pages destroys the record’s integrity and is prohibited.',
    estimatedTimeSec: 35,
    tags: ['documentation', 'corrections', 'records'],
  },
]

export const ASSESSMENTS: Assessment[] = [
  // ================= Medical Assistant =================
  {
    id: 'asm_ma_diag',
    trackId: 'track_ma',
    moduleId: null,
    kind: 'diagnostic',
    title: 'Medical Assistant Baseline Diagnostic',
    questionIds: ['q_ma_01', 'q_ma_02', 'q_ma_03', 'q_ma_04', 'q_ma_05', 'q_ma_06', 'q_ma_07', 'q_ma_08'],
    timeLimitMin: 25,
  },
  {
    id: 'asm_ma_final',
    trackId: 'track_ma',
    moduleId: null,
    kind: 'timed_final',
    title: 'Medical Assistant Timed Final Practice Test',
    questionIds: ['q_ma_05', 'q_ma_06', 'q_ma_07', 'q_ma_08', 'q_ma_09', 'q_ma_10', 'q_ma_11', 'q_ma_12'],
    timeLimitMin: 30,
  },
  {
    id: 'asm_ma_kc_01',
    trackId: 'track_ma',
    moduleId: 'mod_ma_01',
    kind: 'knowledge_check',
    title: 'Patient Care Fundamentals Knowledge Check',
    questionIds: ['q_ma_01', 'q_ma_02'],
    timeLimitMin: null,
  },
  {
    id: 'asm_ma_kc_02',
    trackId: 'track_ma',
    moduleId: 'mod_ma_02',
    kind: 'knowledge_check',
    title: 'Clinical Workflow Knowledge Check',
    questionIds: ['q_ma_03', 'q_ma_04'],
    timeLimitMin: null,
  },
  {
    id: 'asm_ma_kc_03',
    trackId: 'track_ma',
    moduleId: 'mod_ma_03',
    kind: 'knowledge_check',
    title: 'Vital Signs Knowledge Check',
    questionIds: ['q_ma_05', 'q_ma_06'],
    timeLimitMin: null,
  },
  {
    id: 'asm_ma_kc_04',
    trackId: 'track_ma',
    moduleId: 'mod_ma_04',
    kind: 'knowledge_check',
    title: 'Infection Control Knowledge Check',
    questionIds: ['q_ma_07'],
    timeLimitMin: null,
  },
  {
    id: 'asm_ma_kc_05',
    trackId: 'track_ma',
    moduleId: 'mod_ma_05',
    kind: 'knowledge_check',
    title: 'Pharmacology Basics Knowledge Check',
    questionIds: ['q_ma_08'],
    timeLimitMin: null,
  },
  {
    id: 'asm_ma_kc_06',
    trackId: 'track_ma',
    moduleId: 'mod_ma_06',
    kind: 'knowledge_check',
    title: 'Medical Terminology Knowledge Check',
    questionIds: ['q_ma_09'],
    timeLimitMin: null,
  },
  {
    id: 'asm_ma_kc_07',
    trackId: 'track_ma',
    moduleId: 'mod_ma_07',
    kind: 'knowledge_check',
    title: 'EKG Basics Knowledge Check',
    questionIds: ['q_ma_10'],
    timeLimitMin: null,
  },
  {
    id: 'asm_ma_kc_08',
    trackId: 'track_ma',
    moduleId: 'mod_ma_08',
    kind: 'knowledge_check',
    title: 'Administrative Procedures Knowledge Check',
    questionIds: ['q_ma_11'],
    timeLimitMin: null,
  },
  {
    id: 'asm_ma_kc_09',
    trackId: 'track_ma',
    moduleId: 'mod_ma_09',
    kind: 'knowledge_check',
    title: 'Legal and Ethical Responsibilities Knowledge Check',
    questionIds: ['q_ma_12'],
    timeLimitMin: null,
  },
  // ================= Phlebotomy Technician =================
  {
    id: 'asm_phleb_diag',
    trackId: 'track_phleb',
    moduleId: null,
    kind: 'diagnostic',
    title: 'Phlebotomy Technician Baseline Diagnostic',
    questionIds: ['q_phleb_01', 'q_phleb_02', 'q_phleb_03', 'q_phleb_04', 'q_phleb_05', 'q_phleb_06', 'q_phleb_07', 'q_phleb_08'],
    timeLimitMin: 25,
  },
  {
    id: 'asm_phleb_final',
    trackId: 'track_phleb',
    moduleId: null,
    kind: 'timed_final',
    title: 'Phlebotomy Technician Timed Final Practice Test',
    questionIds: ['q_phleb_05', 'q_phleb_06', 'q_phleb_07', 'q_phleb_08', 'q_phleb_09', 'q_phleb_10', 'q_phleb_11', 'q_phleb_12'],
    timeLimitMin: 30,
  },
  {
    id: 'asm_phleb_kc_01',
    trackId: 'track_phleb',
    moduleId: 'mod_phleb_01',
    kind: 'knowledge_check',
    title: 'Safety and Infection Control Knowledge Check',
    questionIds: ['q_phleb_01', 'q_phleb_02'],
    timeLimitMin: null,
  },
  {
    id: 'asm_phleb_kc_02',
    trackId: 'track_phleb',
    moduleId: 'mod_phleb_02',
    kind: 'knowledge_check',
    title: 'Anatomy and Physiology Basics Knowledge Check',
    questionIds: ['q_phleb_03', 'q_phleb_04'],
    timeLimitMin: null,
  },
  {
    id: 'asm_phleb_kc_03',
    trackId: 'track_phleb',
    moduleId: 'mod_phleb_03',
    kind: 'knowledge_check',
    title: 'Venipuncture Equipment Knowledge Check',
    questionIds: ['q_phleb_05', 'q_phleb_06'],
    timeLimitMin: null,
  },
  {
    id: 'asm_phleb_kc_04',
    trackId: 'track_phleb',
    moduleId: 'mod_phleb_04',
    kind: 'knowledge_check',
    title: 'Order of Draw Knowledge Check',
    questionIds: ['q_phleb_07'],
    timeLimitMin: null,
  },
  {
    id: 'asm_phleb_kc_05',
    trackId: 'track_phleb',
    moduleId: 'mod_phleb_05',
    kind: 'knowledge_check',
    title: 'Specimen Handling Knowledge Check',
    questionIds: ['q_phleb_08'],
    timeLimitMin: null,
  },
  {
    id: 'asm_phleb_kc_06',
    trackId: 'track_phleb',
    moduleId: 'mod_phleb_06',
    kind: 'knowledge_check',
    title: 'Patient Identification Knowledge Check',
    questionIds: ['q_phleb_09'],
    timeLimitMin: null,
  },
  {
    id: 'asm_phleb_kc_07',
    trackId: 'track_phleb',
    moduleId: 'mod_phleb_07',
    kind: 'knowledge_check',
    title: 'Complications and Corrective Action Knowledge Check',
    questionIds: ['q_phleb_10'],
    timeLimitMin: null,
  },
  {
    id: 'asm_phleb_kc_08',
    trackId: 'track_phleb',
    moduleId: 'mod_phleb_08',
    kind: 'knowledge_check',
    title: 'Quality Assurance Knowledge Check',
    questionIds: ['q_phleb_11'],
    timeLimitMin: null,
  },
  {
    id: 'asm_phleb_kc_09',
    trackId: 'track_phleb',
    moduleId: 'mod_phleb_09',
    kind: 'knowledge_check',
    title: 'Professional Standards Knowledge Check',
    questionIds: ['q_phleb_12'],
    timeLimitMin: null,
  },
  // ================= Clinical Laboratory Assisting =================
  {
    id: 'asm_cla_diag',
    trackId: 'track_cla',
    moduleId: null,
    kind: 'diagnostic',
    title: 'Clinical Laboratory Assisting Baseline Diagnostic',
    questionIds: ['q_cla_01', 'q_cla_02', 'q_cla_03', 'q_cla_04', 'q_cla_05', 'q_cla_06', 'q_cla_07', 'q_cla_08'],
    timeLimitMin: 25,
  },
  {
    id: 'asm_cla_final',
    trackId: 'track_cla',
    moduleId: null,
    kind: 'timed_final',
    title: 'Clinical Laboratory Assisting Timed Final Practice Test',
    questionIds: ['q_cla_05', 'q_cla_06', 'q_cla_07', 'q_cla_08', 'q_cla_09', 'q_cla_10', 'q_cla_11', 'q_cla_12'],
    timeLimitMin: 30,
  },
  {
    id: 'asm_cla_kc_01',
    trackId: 'track_cla',
    moduleId: 'mod_cla_01',
    kind: 'knowledge_check',
    title: 'Laboratory Safety Knowledge Check',
    questionIds: ['q_cla_01', 'q_cla_02'],
    timeLimitMin: null,
  },
  {
    id: 'asm_cla_kc_02',
    trackId: 'track_cla',
    moduleId: 'mod_cla_02',
    kind: 'knowledge_check',
    title: 'Specimen Collection Knowledge Check',
    questionIds: ['q_cla_03', 'q_cla_04'],
    timeLimitMin: null,
  },
  {
    id: 'asm_cla_kc_03',
    trackId: 'track_cla',
    moduleId: 'mod_cla_03',
    kind: 'knowledge_check',
    title: 'Specimen Processing Knowledge Check',
    questionIds: ['q_cla_05', 'q_cla_06'],
    timeLimitMin: null,
  },
  {
    id: 'asm_cla_kc_04',
    trackId: 'track_cla',
    moduleId: 'mod_cla_04',
    kind: 'knowledge_check',
    title: 'Basic Lab Equipment Knowledge Check',
    questionIds: ['q_cla_07'],
    timeLimitMin: null,
  },
  {
    id: 'asm_cla_kc_05',
    trackId: 'track_cla',
    moduleId: 'mod_cla_05',
    kind: 'knowledge_check',
    title: 'Quality Control Knowledge Check',
    questionIds: ['q_cla_08'],
    timeLimitMin: null,
  },
  {
    id: 'asm_cla_kc_06',
    trackId: 'track_cla',
    moduleId: 'mod_cla_06',
    kind: 'knowledge_check',
    title: 'Medical Terminology Knowledge Check',
    questionIds: ['q_cla_09'],
    timeLimitMin: null,
  },
  {
    id: 'asm_cla_kc_07',
    trackId: 'track_cla',
    moduleId: 'mod_cla_07',
    kind: 'knowledge_check',
    title: 'Laboratory Workflow Knowledge Check',
    questionIds: ['q_cla_10'],
    timeLimitMin: null,
  },
  {
    id: 'asm_cla_kc_08',
    trackId: 'track_cla',
    moduleId: 'mod_cla_08',
    kind: 'knowledge_check',
    title: 'Communication and Professionalism Knowledge Check',
    questionIds: ['q_cla_11'],
    timeLimitMin: null,
  },
  {
    id: 'asm_cla_kc_09',
    trackId: 'track_cla',
    moduleId: 'mod_cla_09',
    kind: 'knowledge_check',
    title: 'Documentation Knowledge Check',
    questionIds: ['q_cla_12'],
    timeLimitMin: null,
  },
]

// ---- Aviation Maintenance Technician track (kept in a separate module for size) ----
import { AMT_TRACK, AMT_MODULES, AMT_LESSONS, AMT_QUESTIONS, AMT_ASSESSMENTS } from './content-amt'
TRACKS.push(AMT_TRACK)
MODULES.push(...AMT_MODULES)
LESSONS.push(...AMT_LESSONS)
QUESTIONS.push(...AMT_QUESTIONS)
ASSESSMENTS.push(...AMT_ASSESSMENTS)
