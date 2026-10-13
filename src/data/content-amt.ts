// EduSphere USA — Aviation Maintenance Technician (AMT) readiness track.
// Original content aligned with the General subject areas of aviation
// maintenance technician certification under a Part 147 curriculum framework.
// No FAA endorsement or partnership is claimed. All wording and questions
// are original.

import type { CredentialTrack, Module, Lesson, Question, Assessment } from '@/lib/types'

export const AMT_TRACK: CredentialTrack = {
  id: 'track_amt',
  name: 'Aviation Maintenance Technician Readiness',
  shortName: 'Aviation Maintenance (AMT)',
  description:
    'A credential-aligned program covering the General subject areas of aviation maintenance technician certification — regulations, mathematics, physics, electricity, drawings, weight and balance, materials, ground operations, and human factors — within a Part 147 curriculum framework.',
  credentialFocus: 'Credential-aligned aviation maintenance technician General curriculum (Part 147 framework)',
  estimatedWeeks: 16,
  color: '#4d7c0f',
  category: 'aviation',
}

export const AMT_MODULES: Module[] = [
  { id: 'mod_amt_01', trackId: 'track_amt', title: 'Regulations and Maintenance Publications', order: 1, description: 'Introduces the regulatory framework that governs aviation maintenance, certification requirements for mechanics, and the publications and records used in daily work.' },
  { id: 'mod_amt_02', trackId: 'track_amt', title: 'Mathematics for Aviation', order: 2, description: 'Builds the applied math skills — fractions, decimals, percentages, ratios, algebra, geometry, and trigonometry — used in maintenance calculations.' },
  { id: 'mod_amt_03', trackId: 'track_amt', title: 'Physics Fundamentals', order: 3, description: 'Covers matter, energy, motion, simple machines, fluid dynamics, pressure, and heat as they apply to aircraft systems.' },
  { id: 'mod_amt_04', trackId: 'track_amt', title: 'Basic Electricity', order: 4, description: 'Develops electrical fundamentals: voltage, current, resistance, Ohm’s law, series and parallel circuits, measurement, and batteries.' },
  { id: 'mod_amt_05', trackId: 'track_amt', title: 'Aircraft Drawings and Schematics', order: 5, description: 'Teaches how to read orthographic and pictorial drawings, diagrams, symbols, dimensions, and tolerances used in maintenance documentation.' },
  { id: 'mod_amt_06', trackId: 'track_amt', title: 'Weight and Balance', order: 6, description: 'Explains datum, arm, moment, and center of gravity, and builds skill in computing and documenting aircraft weight and balance.' },
  { id: 'mod_amt_07', trackId: 'track_amt', title: 'Materials and Processes', order: 7, description: 'Covers aircraft metals and composites, standard hardware identification, torque practices, corrosion control, and safety wiring.' },
  { id: 'mod_amt_08', trackId: 'track_amt', title: 'Ground Operations and Servicing', order: 8, description: 'Develops safe practices for towing, taxi support, tiedown, fueling, and servicing aircraft systems on the ground.' },
  { id: 'mod_amt_09', trackId: 'track_amt', title: 'Human Factors in Maintenance', order: 9, description: 'Explores how human performance, fatigue, communication, and workplace conditions affect maintenance safety, and how to manage error.' },
  { id: 'mod_amt_10', trackId: 'track_amt', title: 'Final Readiness Review', order: 10, description: 'Consolidates the full track with a structured readiness checklist and practical exam-day strategies.' },
]

export const AMT_LESSONS: Lesson[] = [
  // ---- Module 1: Regulations and Maintenance Publications ----
  {
    id: 'les_amt_01_1',
    moduleId: 'mod_amt_01',
    title: 'The Regulatory Framework for Aviation Maintenance',
    order: 1,
    durationMin: 22,
    content: [
      'Aviation maintenance in the United States operates under Title 14 of the Code of Federal Regulations (14 CFR). For the aviation maintenance technician, four parts matter every day: Part 43, which sets the rules for maintenance, preventive maintenance, rebuilding, and alteration; Part 65, which governs mechanic certification; Part 91, which assigns owners and operators responsibility for maintaining aircraft in airworthy condition; and Part 147, which defines the curriculum requirements for aviation maintenance technician schools.',
      'The mechanic certificate with airframe and powerplant ratings is issued under Part 65. Applicants must meet experience or graduation requirements, pass written, oral, and practical tests, and demonstrate the ability to read, write, speak, and understand English. The certificate carries privileges — but also strict limitations: a mechanic may not exercise privileges unless they have performed relevant work within the previous 24 months, and they may not supervise or approve work beyond their understanding.',
      'Understanding this framework is not academic trivia. Every task you perform — from a 100-hour inspection to a logbook entry — traces back to a regulation that defines who may do the work, how it must be done, and how it must be documented.',
    ],
    sections: [
      {
        heading: 'Key Regulations at a Glance',
        table: {
          caption: 'Regulations every AMT student should know',
          headers: ['Regulation', 'Subject', 'Why it matters to you'],
          rows: [
            ['14 CFR Part 43', 'Maintenance, preventive maintenance, rebuilding, alteration', 'Defines how maintenance is performed, approved, and recorded'],
            ['14 CFR Part 65', 'Certification of airmen other than flight crew', 'Your mechanic certificate, ratings, privileges, and recency requirements'],
            ['14 CFR Part 91', 'General operating and flight rules', 'Owner/operator responsibility for airworthiness; inspection programs'],
            ['14 CFR Part 147', 'Aviation maintenance technician schools', 'The curriculum framework your training program follows'],
            ['14 CFR Part 39', 'Airworthiness Directives', 'Mandatory corrective actions that must be complied with and recorded'],
          ],
        },
      },
      {
        heading: 'Mechanic Privileges and Limitations',
        bullets: [
          'A certificated mechanic may perform or supervise maintenance and approve work for return to service within the scope of their ratings.',
          'Recency of experience: privileges may be exercised only if the mechanic has performed relevant work for at least 6 of the previous 24 months, or has otherwise demonstrated competency.',
          'A mechanic may not supervise maintenance they do not understand, or approve work performed by others unless they directly observed or verified it.',
          'Inspection authorization (IA) is a separate privilege that allows approval of major repairs and alterations and annual inspections.',
          'Serious violations can lead to certificate suspension or revocation — documentation accuracy is a legal obligation, not paperwork preference.',
        ],
      },
      {
        heading: 'Airworthiness Directives and Service Documents',
        paragraphs: [
          'An Airworthiness Directive (AD) is a legally enforceable rule issued when an unsafe condition is found in a product. Compliance is mandatory, and the method of compliance, the date, and the means of recording are all prescribed. Manufacturers also issue service bulletins and service letters; unless incorporated into an AD, these are advisory rather than mandatory, but they are widely treated as accepted data.',
        ],
      },
    ],
    callouts: [
      { variant: 'exam', title: 'Readiness focus', text: 'Expect questions that ask which regulation governs a specific maintenance activity. Anchor your memory: Part 43 = how to do and record maintenance; Part 65 = mechanic certification; Part 91 = owner/operator airworthiness responsibility.' },
      { variant: 'warning', title: 'Common error', text: 'Confusing an owner-performed preventive maintenance task with maintenance requiring a certificated mechanic. Part 43 Appendix A lists the specific preventive maintenance items a pilot-owner may perform.' },
    ],
    keyPoints: [
      'Part 43 governs how maintenance is performed and recorded; Part 65 governs mechanic certification',
      'Airworthiness Directives are mandatory and enforceable',
      'Mechanic privileges require recency of experience within 24 months',
      'A mechanic cannot approve work they did not perform or directly verify',
      'Part 147 defines the curriculum framework for AMT schools',
    ],
  },
  {
    id: 'les_amt_01_2',
    moduleId: 'mod_amt_01',
    title: 'Maintenance Publications and Record Entries',
    order: 2,
    durationMin: 20,
    content: [
      'Maintenance is performed with data, not memory. Approved data includes the aircraft maintenance manual, illustrated parts catalog, structural repair manual, type certificate data sheet (TCDS), and ADs. Acceptable data includes manufacturers’ service bulletins, advisory circulars such as AC 43.13-1B, and other industry-standard practices. Knowing which data class a task requires is a core competency.',
      'Every maintenance action closes with a record. Under Part 43, maintenance record entries must describe the work performed, the date of completion, and the signature and certificate number of the person approving the work for return to service. Entries must be legible, complete, and made in the correct record: airframe, engine, propeller, or appliance logbook as appropriate.',
    ],
    sections: [
      {
        heading: 'Writing a Proper Maintenance Record Entry',
        steps: [
          'Locate the correct logbook or record for the item worked on (airframe, engine, or propeller).',
          'Describe the work performed clearly enough that another mechanic could understand what was done — reference the manual chapter/section used.',
          'Record the date the work was completed and the aircraft total time or tach/hobbs reading as applicable.',
          'Cite compliance with any applicable ADs, including the AD number and method of compliance.',
          'Sign the entry and include your certificate type and number; your signature constitutes approval for return to service.',
          'Verify the entry is legible and complete before closing the record — never leave blank lines that could be altered later.',
        ],
      },
      {
        heading: 'Publications Used in Daily Maintenance',
        bullets: [
          'Maintenance manual — task procedures, torque values, limits',
          'Illustrated parts catalog (IPC) — part numbers and assembly relationships',
          'Type certificate data sheet (TCDS) — the aircraft’s certified configuration and limits',
          'Airworthiness directives — mandatory inspections and corrective actions',
          'Advisory Circular AC 43.13-1B — acceptable methods, techniques, and practices for non-specific work',
          'Service bulletins and letters — manufacturer guidance, mandatory only when incorporated by an AD',
        ],
      },
      {
        heading: 'Return to Service',
        paragraphs: [
          'Approving an aircraft for return to service is the mechanic’s most consequential signature. The person signing certifies that the work was performed in accordance with regulations, with proper data, and that the item is airworthy with respect to the work performed. A maintenance release or logbook entry is both a technical statement and a legal attestation.',
        ],
      },
    ],
    callouts: [
      { variant: 'safety', title: 'Legal significance', text: 'A logbook signature is a legal certification. Incomplete or inaccurate entries have grounded fleets and ended careers. When in doubt, write more detail, not less.' },
      { variant: 'exam', title: 'Readiness focus', text: 'Know the required elements of a record entry: description of work, completion date, and the approving person’s signature and certificate number. Also know which documents are approved data versus acceptable data.' },
    ],
    keyPoints: [
      'Approved data comes from the regulator; acceptable data includes manuals and AC 43.13-1B',
      'Record entries require description, date, signature, and certificate number',
      'AD compliance must be recorded with method of compliance',
      'A return-to-service signature certifies airworthiness for the work performed',
    ],
  },
  // ---- Module 2: Mathematics ----
  {
    id: 'les_amt_02_1',
    moduleId: 'mod_amt_02',
    title: 'Applied Math: Fractions, Decimals, and Percentages',
    order: 1,
    durationMin: 18,
    content: [
      'Maintenance math is applied math. Clearances, tolerances, torque corrections, fuel loads, and weight-and-balance computations all reduce to careful work with fractions, decimals, and percentages. Errors here do not stay on paper — they become loose fasteners, out-of-limits clearances, or incorrect fuel quantities.',
      'Fractions and decimals must be interchangeable on demand: 1/2 = 0.5, 1/4 = 0.25, 1/8 = 0.125, 1/16 = 0.0625, and 1/32 = 0.03125. Percentages express parts per hundred and appear in duty cycles, mixture strengths, and performance calculations. Ratios compare quantities — a compression ratio of 8.5:1 means the cylinder volume is reduced to one part in 8.5.',
    ],
    sections: [
      {
        heading: 'Conversions You Should Know Cold',
        table: {
          caption: 'Fraction–decimal equivalents used constantly in the shop',
          headers: ['Fraction', 'Decimal', 'Typical use'],
          rows: [
            ['1/4', '0.25', 'Clearances, material thickness'],
            ['1/8', '0.125', 'Drill sizes, sheet stock'],
            ['3/16', '0.1875', 'Fastener diameters'],
            ['1/16', '0.0625', 'Sheet metal gauge'],
            ['1/32', '0.03125', 'Tolerance bands, safety wire diameter'],
            ['5/8', '0.625', 'Bolt sizes, tubing'],
          ],
        },
      },
      {
        heading: 'Working a Tolerance Problem',
        steps: [
          'Identify the nominal dimension from the manual (for example, a shaft diameter of 1.000 inch).',
          'Read the tolerance band (for example, +0.002 / −0.0005 inch).',
          'Compute the maximum limit: nominal plus the upper tolerance (1.002 inch).',
          'Compute the minimum limit: nominal minus the lower tolerance (0.9995 inch).',
          'Measure the part and compare: any reading inside the band is serviceable; outside is reject.',
          'Record the measured value, not just "within limits" — documentation should support the decision.',
        ],
      },
      {
        heading: 'Percentage and Ratio Applications',
        bullets: [
          'Duty cycle: a component rated 40% duty may operate 40% of a given interval and must rest the remainder.',
          'Compression ratio: total cylinder volume divided by clearance volume, expressed as n:1.',
          'Mixture percentages: anti-corrosion treatments and fluids are mixed by percentage of total volume.',
          'Efficiency: output divided by input, times 100, expressed as a percentage.',
        ],
      },
    ],
    callouts: [
      { variant: 'exam', title: 'Readiness focus', text: 'Convert fractions to decimals quickly and without a lookup: eighths and sixteenths appear constantly. Practice percentage problems of the form "what is X% of Y" and "X is what percent of Y.".' },
      { variant: 'tip', title: 'Shop tip', text: 'When adding tolerances, always work in decimals and keep the full precision until the final comparison. Rounding early is the most common tolerance math error.' },
    ],
    keyPoints: [
      'Fractions, decimals, and percentages must be interchangeable on demand',
      'Tolerance = nominal dimension plus/minus a stated band; measure, then compare',
      'Ratios express relative quantities like compression and mixture',
      'Record measured values, not just pass/fail judgments',
    ],
  },
  {
    id: 'les_amt_02_2',
    moduleId: 'mod_amt_02',
    title: 'Algebra, Geometry, and Trigonometry Basics',
    order: 2,
    durationMin: 20,
    content: [
      'Algebra lets you rearrange formulas to solve for the quantity you need: from V = IR you can get I = V/R or R = V/I without memorizing three formulas. Geometry supplies the area and volume relationships behind displacement, tank capacity, and sheet-material layouts. Trigonometry — mainly sine, cosine, and tangent of right triangles — appears in weight-and-balance moments, control surface travel angles, and antenna and rigging geometry.',
    ],
    sections: [
      {
        heading: 'Essential Formulas',
        table: {
          caption: 'Geometry and physics formulas used in maintenance',
          headers: ['Quantity', 'Formula', 'Notes'],
          rows: [
            ['Area of a rectangle', 'A = l × w', 'Sheet material, floor loads'],
            ['Area of a circle', 'A = πr²', 'Piston area, hydraulic force'],
            ['Volume of a cylinder', 'V = πr²h', 'Cylinder displacement, tank capacity'],
            ['Ohm’s law', 'V = I × R', 'Rearrange freely for I or R'],
            ['Power', 'P = V × I', 'Electrical load calculations'],
            ['Moment', 'M = W × arm', 'Weight and balance'],
          ],
        },
      },
      {
        heading: 'Solving by Rearrangement',
        steps: [
          'Write the formula in its standard form.',
          'Isolate the unknown by applying the same operation to both sides.',
          'Substitute the known values with their units.',
          'Compute, then sanity-check the magnitude — a hydraulic force of 3 pounds or 3 million pounds both signal a units error.',
          'State the answer with units; a number without units is incomplete.',
        ],
      },
      {
        heading: 'Right-Triangle Relationships',
        paragraphs: [
          'In a right triangle, sine = opposite/hypotenuse, cosine = adjacent/hypotenuse, and tangent = opposite/adjacent. If a control surface must travel 30° and you know the linkage geometry, trigonometry converts between angular travel and linear displacement. You do not need to derive tables — you need to set up the triangle correctly and use a calculator accurately.',
        ],
      },
    ],
    callouts: [
      { variant: 'exam', title: 'Readiness focus', text: 'You will be asked to compute area, volume, and simple right-triangle sides. Know π ≈ 3.1416, and that horsepower, foot-pounds, and watts are related measures of work and power.' },
    ],
    keyPoints: [
      'Rearrange formulas algebraically instead of memorizing variants',
      'Area of a circle (πr²) drives piston and hydraulic computations',
      'Always carry units through a calculation and sanity-check magnitude',
      'Right-triangle trig converts between angles and linear travel',
    ],
  },
  // ---- Module 3: Physics ----
  {
    id: 'les_amt_03_1',
    moduleId: 'mod_amt_03',
    title: 'Matter, Energy, and Machines',
    order: 1,
    durationMin: 18,
    content: [
      'Aircraft maintenance applies classical physics daily. Matter exists in solid, liquid, and gas states, and changes between them absorb or release energy. Work is force times distance; power is the rate of doing work; energy is the capacity to do work. Simple machines — levers, pulleys, inclined planes, and gears — multiply force or change its direction, and mechanical advantage quantifies how much.',
    ],
    sections: [
      {
        heading: 'Core Quantities',
        table: {
          caption: 'Physics quantities and their units',
          headers: ['Quantity', 'Definition', 'Common unit'],
          rows: [
            ['Force', 'A push or pull on an object', 'Pounds (lb)'],
            ['Work', 'Force × distance moved', 'Foot-pounds (ft·lb)'],
            ['Power', 'Work per unit time', 'Horsepower, watts'],
            ['Energy', 'Capacity to do work', 'ft·lb, joules, BTU'],
            ['Pressure', 'Force per unit area', 'psi'],
            ['Mechanical advantage', 'Output force ÷ input force', 'Ratio (unitless)'],
          ],
        },
      },
      {
        heading: 'Levers and Mechanical Advantage',
        paragraphs: [
          'A lever trades distance for force. With the fulcrum positioned appropriately, a small force applied over a long arm balances a large load on a short arm: F₁ × d₁ = F₂ × d₂. The same principle appears in control systems, torque wrenches, and pry tools. A torque wrench is a lever — the indicated torque equals the applied hand force times the effective length.',
        ],
      },
      {
        heading: 'Newton’s Laws in the Hangar',
        bullets: [
          'Inertia: a heavy component stays in motion — plan lifts and moves before committing.',
          'F = ma: acceleration forces multiply under dynamic loading, which is why hard landings trigger inspections.',
          'Action–reaction: every fastener load has an equal reaction — inspect the structure around the joint, not just the fastener.',
        ],
      },
    ],
    callouts: [
      { variant: 'exam', title: 'Readiness focus', text: 'Know the definitions and units of force, work, power, and pressure, and the lever relationship F₁d₁ = F₂d₂. Mechanical advantage questions are usually simple ratios.' },
    ],
    keyPoints: [
      'Work = force × distance; power = work per unit time',
      'Levers trade distance for force according to F₁d₁ = F₂d₂',
      'Mechanical advantage = output force divided by input force',
      'Pressure is force per unit area and underlies hydraulics and pneumatics',
    ],
  },
  {
    id: 'les_amt_03_2',
    moduleId: 'mod_amt_03',
    title: 'Fluids, Pressure, and Heat',
    order: 2,
    durationMin: 20,
    content: [
      'Hydraulics, pneumatics, fuel systems, and air conditioning all follow the physics of fluids and heat. Pascal’s law states that pressure applied to a confined fluid is transmitted undiminished in all directions — the principle that lets a small piston move a heavy flight control. Bernoulli’s principle relates fluid speed and pressure and explains lift as well as venturi effects in instrumentation. Temperature scales (Fahrenheit and Celsius) convert as °C = (°F − 32) × 5/9, and gas laws relate pressure, volume, and temperature.',
    ],
    sections: [
      {
        heading: 'Pascal’s Law in a Hydraulic System',
        steps: [
          'Recognize that pressure in a confined fluid acts equally in all directions on all surfaces.',
          'Compute system pressure from the input: P = F ÷ A for the input piston.',
          'Apply the same pressure to the output piston: F = P × A.',
          'Compare forces: force multiplies with area ratio, while travel distance divides by the same ratio.',
          'Remember the trade: hydraulics multiply force, never energy — the large piston moves a shorter distance.',
        ],
      },
      {
        heading: 'Temperature and Gas Behavior',
        bullets: [
          'Convert between °F and °C using °C = (°F − 32) × 5/9 and °F = °C × 9/5 + 32.',
          'Absolute zero is −273 °C (0 K, −460 °F); gas law problems use absolute temperature.',
          'At constant volume, gas pressure rises with temperature — never heat a sealed pressure vessel.',
          'Boyle’s law: at constant temperature, pressure × volume is constant.',
        ],
      },
      {
        heading: 'Heat Transfer',
        paragraphs: [
          'Heat moves by conduction (through solids), convection (through fluid motion), and radiation (through electromagnetic waves). Engine cooling, oil coolers, and cabin heat exchangers exploit all three. Thermal expansion matters in maintenance: dissimilar metals expand at different rates, which is why control cable tensions are checked against temperature compensation charts.',
        ],
      },
    ],
    callouts: [
      { variant: 'warning', title: 'Shop hazard', text: 'Hydraulic systems store energy. Depressurize the system and follow the manual before loosening any fitting — a pinhole leak at 3,000 psi can inject fluid through skin.' },
      { variant: 'exam', title: 'Readiness focus', text: 'Be able to compute force from pressure and area (F = P × A), convert °F ↔ °C, and state what Pascal’s and Bernoulli’s principles describe.' },
    ],
    keyPoints: [
      'Pascal’s law: confined-fluid pressure transmits undiminished in all directions',
      'Hydraulic force = pressure × piston area; force multiplies, distance divides',
      'Convert temperatures with °C = (°F − 32) × 5/9',
      'Heat transfers by conduction, convection, and radiation',
    ],
  },
  // ---- Module 4: Basic Electricity ----
  {
    id: 'les_amt_04_1',
    moduleId: 'mod_amt_04',
    title: 'Voltage, Current, and Resistance',
    order: 1,
    durationMin: 18,
    content: [
      'Electricity is the controlled movement of electrons. Voltage (V, measured in volts) is the electrical pressure; current (I, in amperes) is the flow rate; resistance (R, in ohms) opposes that flow. Ohm’s law binds them: V = I × R. Power in a DC circuit is P = V × I. These four relationships solve the majority of electrical questions on the General curriculum.',
    ],
    sections: [
      {
        heading: 'Ohm’s Law and Power — All Forms',
        table: {
          caption: 'Solve for any quantity from any two',
          headers: ['Solve for', 'Using V and I', 'Using V and R', 'Using I and R'],
          rows: [
            ['Voltage (V)', '—', '—', 'V = I × R'],
            ['Current (I)', '—', 'I = V ÷ R', '—'],
            ['Resistance (R)', 'R = V ÷ I', '—', '—'],
            ['Power (P)', 'P = V × I', 'P = V² ÷ R', 'P = I² × R'],
          ],
        },
      },
      {
        heading: 'Series and Parallel Circuits',
        bullets: [
          'Series: one current path; current is the same everywhere; resistances add (Rₜ = R₁ + R₂ + …); voltages divide across components.',
          'Parallel: multiple paths; voltage is the same across each branch; branch currents add; total resistance is less than the smallest branch.',
          'Aircraft systems mix both: lighting buses are parallel so one failed lamp does not darken the rest.',
          'A short circuit is a near-zero-resistance path that draws damaging current — protection devices (fuses, circuit breakers) exist to interrupt it.',
        ],
      },
      {
        heading: 'Conventional Practice',
        paragraphs: [
          'Aircraft electrical systems are predominantly 14- or 28-volt DC, with AC buses for larger transport systems. Conventional current is described as flowing from positive to negative in circuit analysis even though electrons physically move the other way — be consistent and the math works either way.',
        ],
      },
    ],
    callouts: [
      { variant: 'safety', title: 'Electrical safety', text: 'Even 28 VDC systems can deliver hundreds of amps. Remove jewelry, use insulated tools near batteries, and disconnect the battery (negative lead first) before working on wiring.' },
      { variant: 'exam', title: 'Readiness focus', text: 'Memorize the Ohm’s law and power triangles. Typical problems: "12 V across 4 Ω gives 3 A"; power variants like P = I²R for heat in a wire.' },
    ],
    keyPoints: [
      'V = I × R and P = V × I cover most General electricity problems',
      'Series circuits share current; parallel circuits share voltage',
      'Total parallel resistance is always less than the smallest branch',
      'Disconnect batteries negative-first when working on aircraft wiring',
    ],
  },
  {
    id: 'les_amt_04_2',
    moduleId: 'mod_amt_04',
    title: 'Measuring Circuits and Battery Care',
    order: 2,
    durationMin: 18,
    content: [
      'A multimeter is the maintenance technician’s primary electrical instrument. Voltage is measured in parallel across a component; current is measured in series through the circuit; resistance is measured only with the circuit de-energized. Aircraft batteries — lead-acid or nickel-cadmium — require correct charging, capacity checks, electrolyte or cell service, and safe handling.',
    ],
    sections: [
      {
        heading: 'Using a Multimeter Safely',
        steps: [
          'Select the function and range before connecting leads; start at the highest range when unsure.',
          'For voltage, connect the meter in parallel with the circuit energized.',
          'For current, break the circuit and connect the meter in series — never parallel a current meter across a source.',
          'For resistance, remove power and isolate the component; measuring resistance in a live circuit damages the meter and lies to you.',
          'Inspect test leads for damaged insulation before every use.',
          'Return the selector to off or voltage when finished so the next user does not short a circuit.',
        ],
      },
      {
        heading: 'Lead-Acid vs. Nickel-Cadmium Batteries',
        table: {
          caption: 'Comparison of common aircraft battery types',
          headers: ['Characteristic', 'Lead-acid', 'Nickel-cadmium'],
          rows: [
            ['Electrolyte', 'Dilute sulfuric acid', 'Potassium hydroxide (alkaline)'],
            ['Cell voltage (nominal)', '2.0 V per cell', '1.2 V per cell'],
            ['Servicing', 'Check specific gravity; add distilled water', 'Check electrolyte level; deep-cycle capacity checks'],
            ['Failure concern', 'Sulfation when left discharged', 'Thermal runaway if abused in charging'],
            ['Venting', 'Hydrogen gas — explosive', 'Hydrogen and oxygen near end of charge'],
          ],
        },
      },
      {
        heading: 'Battery Hazards',
        paragraphs: [
          'Both battery chemistries vent hydrogen during charging — an explosive gas that collects in battery compartments. Ventilate, eliminate ignition sources, and wear eye protection and gloves when servicing electrolyte. Neutralize lead-acid spills with baking soda solution; neutralize NiCad spills with vinegar or boric acid solution. Never use the same tools or neutralizers on both chemistries.',
        ],
      },
    ],
    callouts: [
      { variant: 'warning', title: 'Chemistry matters', text: 'Acid and alkaline electrolytes must never share tools, jars, or neutralizers — cross-contamination ruins cells and creates hazardous reactions.' },
      { variant: 'exam', title: 'Readiness focus', text: 'Know nominal cell voltages (2.0 V lead-acid, 1.2 V NiCad), that specific gravity indicates lead-acid state of charge, and that NiCad batteries risk thermal runaway.' },
    ],
    keyPoints: [
      'Voltage in parallel, current in series, resistance only when de-energized',
      'Lead-acid: 2.0 V/cell, sulfuric acid electrolyte, specific gravity testing',
      'NiCad: 1.2 V/cell, KOH electrolyte, watch for thermal runaway',
      'Vent charging batteries — hydrogen is explosive',
    ],
  },
  // ---- Module 5: Aircraft Drawings and Schematics ----
  {
    id: 'les_amt_05_1',
    moduleId: 'mod_amt_05',
    title: 'Reading Aircraft Drawings',
    order: 1,
    durationMin: 18,
    content: [
      'Aircraft drawings are the shared language between engineering and maintenance. Orthographic projections show an object in multiple flat views — typically front, top, and right side — each exactly true in two dimensions. Pictorial drawings (isometric, perspective, exploded views) show three dimensions at once and are used for assembly relationships. Detail drawings specify a single part; assembly drawings show how parts fit together; installation drawings show routing and location.',
    ],
    sections: [
      {
        heading: 'Standard Line Types',
        table: {
          caption: 'Lines you must recognize on sight',
          headers: ['Line type', 'Appearance', 'Meaning'],
          rows: [
            ['Object (visible) line', 'Thick solid', 'A visible edge or outline'],
            ['Hidden line', 'Short dashes', 'An edge obscured by the surface'],
            ['Centerline', 'Long-short dashes', 'Axis of symmetry or rotation'],
            ['Dimension line', 'Thin solid with arrowheads', 'Extent of a measured dimension'],
            ['Cutting-plane line', 'Thick with arrows', 'Where a section view is taken'],
            ['Phantom line', 'Long double-short dashes', 'Alternate positions or adjacent parts'],
          ],
        },
      },
      {
        heading: 'Views and Projection',
        bullets: [
          'Orthographic projection aligns views: the top view sits above the front view, the right-side view to its right (third-angle projection, standard in U.S. practice).',
          'Section views reveal interior features by cutting the object along a defined plane.',
          'Detail views magnify small features; auxiliary views show inclined surfaces in true shape.',
          'Exploded views separate parts along assembly axes — invaluable for disassembly sequence.',
        ],
      },
      {
        heading: 'Title Block and Revisions',
        paragraphs: [
          'Every drawing carries a title block: part name and number, material, scale, sheet size, drawing number, and the revision block. Always confirm the revision letter matches the current publication — working from a superseded drawing is a classic and preventable error.',
        ],
      },
    ],
    callouts: [
      { variant: 'exam', title: 'Readiness focus', text: 'Identify line types and view arrangements. A frequent question: hidden lines are dashed and represent edges you cannot see from that view; centerlines are long-short dashes marking axes.' },
    ],
    keyPoints: [
      'Orthographic views are true-shape in two dimensions; pictorial views show three',
      'Six orthographic views are possible; three are standard',
      'Hidden lines = obscured edges; centerlines = axes of symmetry',
      'Always verify the drawing revision before starting work',
    ],
  },
  {
    id: 'les_amt_05_2',
    moduleId: 'mod_amt_05',
    title: 'Schematics, Symbols, and Tolerances',
    order: 2,
    durationMin: 18,
    content: [
      'Schematic diagrams trade physical appearance for function: they show how a system works, not what it looks like. Wiring diagrams identify every wire by number and show connectors, splices, and terminations. Hydraulic and pneumatic schematics use standardized symbols for pumps, valves, actuators, and reservoirs. Dimensions carry tolerances; a dimension written 2.500 ±0.005 must measure between 2.495 and 2.505 inches.',
    ],
    sections: [
      {
        heading: 'Reading a Schematic Systematically',
        steps: [
          'Identify the power or pressure source and the ground or return path.',
          'Trace the main flow path from source to output, component by component.',
          'Note control elements — switches, relays, valves — and what actuates them.',
          'Cross-reference component callouts to the parts list or wiring manual.',
          'Use the schematic for theory, the wiring/installation drawing for physical routing.',
        ],
      },
      {
        heading: 'Dimensions and Tolerances',
        bullets: [
          'Limit dimensions state the maximum and minimum directly (e.g., 2.495/2.505).',
          'Plus-or-minus dimensions state nominal and tolerance (2.500 ±0.005).',
          'Bilateral tolerances allow variation both directions; unilateral tolerances allow it in one.',
          'The number of decimal places itself implies precision: 2.5, 2.50, and 2.500 are different tolerancing statements.',
          'Allowance is the intentional difference between mating parts — the clearance that makes a shaft fit a hole.',
        ],
      },
      {
        heading: 'Charts and Graphs',
        paragraphs: [
          'Performance charts, cable tension graphs, and tire pressure charts all convert one measured quantity into another. Read the axes first — including units and scale breaks — then interpolate between gridlines carefully. When a chart provides a correction (for temperature, for example), apply it in the stated direction.',
        ],
      },
    ],
    callouts: [
      { variant: 'tip', title: 'Shop tip', text: 'Wire numbers on aircraft diagrams encode the circuit, segment, and gauge. Learn your operator’s numbering convention once and troubleshooting gets dramatically faster.' },
      { variant: 'exam', title: 'Readiness focus', text: 'Expect tolerance arithmetic: given 2.500 ±0.005, the limits are 2.495 and 2.505. Know the difference between a schematic (function) and an installation drawing (physical layout).' },
    ],
    keyPoints: [
      'Schematics show function; installation drawings show physical routing',
      'Wiring diagrams identify wires by number and connector by code',
      'Tolerance arithmetic defines the acceptable measurement band',
      'Decimal places imply precision; allowance is designed-in clearance',
    ],
  },
  // ---- Module 6: Weight and Balance ----
  {
    id: 'les_amt_06_1',
    moduleId: 'mod_amt_06',
    title: 'Weight and Balance Principles',
    order: 1,
    durationMin: 18,
    content: [
      'An aircraft must be within weight and balance limits to fly safely. Excess weight reduces performance and can overstress the structure; a center of gravity (CG) outside limits makes the aircraft unstable or uncontrollable. The vocabulary is precise: the datum is an imaginary vertical reference plane established by the manufacturer; the arm is the horizontal distance from the datum to an item; the moment is weight multiplied by arm.',
    ],
    sections: [
      {
        heading: 'Weight and Balance Vocabulary',
        table: {
          caption: 'Terms that appear on every problem',
          headers: ['Term', 'Definition'],
          rows: [
            ['Datum', 'Imaginary vertical reference plane from which arms are measured'],
            ['Arm (station)', 'Horizontal distance from the datum to an item, in inches'],
            ['Moment', 'Weight × arm, in pound-inches'],
            ['Center of gravity (CG)', 'Point where total moment ÷ total weight — the balance point'],
            ['Empty weight', 'Aircraft with fixed equipment, unusable fuel, full operating fluids'],
            ['Useful load', 'Empty weight subtracted from maximum takeoff weight'],
            ['CG range', 'Fore and aft limits within which the CG must fall'],
          ],
        },
      },
      {
        heading: 'Why CG Location Matters',
        bullets: [
          'A forward CG raises stall speed and increases nose-down force the elevator must counter.',
          'An aft CG reduces longitudinal stability — recovery from stalls and spins may become impossible.',
          'Loading shifts the CG: heavy baggage far aft can move the CG out of limits even under max weight.',
          'Fuel burn can shift the CG in flight; some aircraft require computing CG at zero fuel as well.',
        ],
      },
      {
        heading: 'Standard Assumptions',
        paragraphs: [
          'Computations use standard weights unless actual weights are known: avgas at 6 pounds per gallon, jet fuel at 6.7 pounds per gallon (commonly 6.8 in some references — use the value the problem states), oil at 7.5 pounds per gallon, and occupants at their actual or standard weights as directed.',
        ],
      },
    ],
    callouts: [
      { variant: 'exam', title: 'Readiness focus', text: 'Definitions dominate: datum, arm, moment, CG, useful load. Know that moment = weight × arm and CG = total moment ÷ total weight. Fuel at 6 lb/gal is the standard assumption for avgas.' },
    ],
    keyPoints: [
      'Datum is the reference plane; arm is distance from it; moment is weight × arm',
      'CG = total moment ÷ total weight',
      'Out-of-limits CG is a control hazard even at legal gross weight',
      'Avgas weighs 6 lb/gal; oil 7.5 lb/gal in standard computations',
    ],
  },
  {
    id: 'les_amt_06_2',
    moduleId: 'mod_amt_06',
    title: 'Computing Weight and Balance',
    order: 2,
    durationMin: 20,
    content: [
      'A weight-and-balance computation is bookkeeping with physics: list every item, multiply weight by arm to get moment, sum the columns, and divide total moment by total weight to find the CG. Then compare against the published CG range. When equipment changes — an avionics upgrade, a removed seat — the mechanic computes the new empty weight and CG and records the revision in the aircraft records.',
    ],
    sections: [
      {
        heading: 'Worked Example',
        table: {
          caption: 'Sample computation after installing new equipment',
          headers: ['Item', 'Weight (lb)', 'Arm (in)', 'Moment (lb·in)'],
          rows: [
            ['Aircraft empty (old)', '1,500', '39.0', '58,500'],
            ['Removed radio', '−12', '58.0', '−696'],
            ['Installed navigator', '+9', '57.0', '+513'],
            ['New empty weight / CG', '1,497', '—', '58,317'],
          ],
        },
        paragraphs: [
          'Divide the new total moment by the new total weight: 58,317 ÷ 1,497 ≈ 38.96 inches. Compare with the CG range in the aircraft records. Document the new empty weight, new empty-weight CG, and the new useful load; superseded computations are marked and retained as required.',
        ],
      },
      {
        heading: 'The Computation Workflow',
        steps: [
          'Start from the current, dated weight-and-balance record — never from memory.',
          'List removed items as negative weights at their recorded arms; added items as positive.',
          'Compute each moment (weight × arm), keeping signs consistent.',
          'Sum weights and moments; divide for the new CG.',
          'Check the result against the published empty-weight CG limits.',
          'Record the revision: new empty weight, CG, useful load, date, and signature with certificate number.',
        ],
      },
      {
        heading: 'Weighing an Aircraft',
        bullets: [
          'Weigh in a closed hangar, draft-free, with the aircraft level per the manual.',
          'Use calibrated scales; record scale readings with tare (chocks, stands) deducted.',
          'Configuration matters: full or empty fluids exactly as the manual specifies.',
          'Compute CG from the gear weights and their arms, then complete the record entry.',
        ],
      },
    ],
    callouts: [
      { variant: 'warning', title: 'Common error', text: 'Sign errors on removed equipment. A removed item subtracts both its weight and its moment. Double-check by asking whether the CG moved the direction you expected.' },
      { variant: 'exam', title: 'Readiness focus', text: 'Practice moment arithmetic until it is automatic. Expect a table exactly like the worked example: remove and add equipment, then compute the new CG. Watch units and signs.' },
    ],
    keyPoints: [
      'CG = total moment ÷ total weight; verify against published limits',
      'Removed equipment subtracts weight and moment; added equipment adds both',
      'Record revised empty weight, CG, and useful load after any equipment change',
      'Weigh aircraft level, draft-free, on calibrated scales',
    ],
  },
  // ---- Module 7: Materials and Processes ----
  {
    id: 'les_amt_07_1',
    moduleId: 'mod_amt_07',
    title: 'Aircraft Materials and Standard Hardware',
    order: 1,
    durationMin: 20,
    content: [
      'Aircraft structures balance strength against weight. Aluminum alloys dominate sheet structures; steel alloys appear where strength or heat resistance demands it; titanium and magnesium serve specialized roles; composites combine fibers in resin matrices for high strength-to-weight ratios. Hardware is standardized: AN (Army-Navy), MS (Military Standard), and NAS (National Aerospace Standard) designations guarantee dimensions, material, and strength.',
    ],
    sections: [
      {
        heading: 'Decoding Standard Hardware',
        table: {
          caption: 'Common hardware designations',
          headers: ['Code', 'Item', 'Reading it'],
          rows: [
            ['AN4-10', 'Hex-head bolt', 'AN standard, 4/16" (1/4") diameter, 10 = 1" + 0/16" grip... length in eighths'],
            ['AN365-428', 'Self-locking nut', 'Fiber/elastic stop nut, 1/4-28 thread'],
            ['AN960-416', 'Flat washer', 'Flat washer for 1/4" bolt'],
            ['MS20470AD4-5', 'Solid rivet', 'Universal head, AD alloy, 4/32" diameter, 5/16" length'],
            ['NAS1149', 'Washer series', 'National aerospace standard flat washers'],
          ],
        },
      },
      {
        heading: 'Torque Practices',
        bullets: [
          'Torque values in manuals assume clean, dry threads unless stated otherwise.',
          'Torque a nut, not the bolt head, when accessible — bolt shank friction distorts readings.',
          'Apply torque smoothly in one motion; jerking overreads.',
          'If a cotter pin hole does not align, never back the nut off to align — advance to the next slot within the torque range.',
          'Re-torque after the manual’s specified run-in when required.',
        ],
      },
      {
        heading: 'Materials in Brief',
        paragraphs: [
          'Aluminum alloys are identified by four-digit series (2024, 6061, 7075); 2024 and 7075 are high-strength structural alloys and must not be substituted casually. Steel alloys use SAE numbering (4130 chrome-moly is common in tubular structures). Composites require damage assessment per the structural repair manual — tap tests and visual inspection have limits, and repair is resin-and-cloth process work, not metal practice.',
        ],
      },
    ],
    callouts: [
      { variant: 'exam', title: 'Readiness focus', text: 'Hardware decoding is guaranteed: AN bolt grip/diameter conventions, MS20470 rivet fields, and what a dash number changes. Know that 2024 and 7075 are high-strength aluminum alloys.' },
      { variant: 'warning', title: 'Substitution risk', text: 'Never substitute hardware store bolts for aircraft hardware. AN/MS/NAS fasteners are manufactured, tested, and traceable to specification; commercial fasteners are not.' },
    ],
    keyPoints: [
      'AN/MS/NAS hardware is standardized, tested, and traceable',
      'Dash numbers encode size — learn to decode bolts, nuts, washers, rivets',
      'Torque assumes clean dry threads; never back off a nut to align a cotter hole',
      'Aluminum 2024/7075 and 4130 steel are signature structural alloys',
    ],
  },
  {
    id: 'les_amt_07_2',
    moduleId: 'mod_amt_07',
    title: 'Corrosion Control and Safety Wiring',
    order: 2,
    durationMin: 20,
    content: [
      'Corrosion is an electrochemical attack that degrades metal, and it is the most persistent maintenance enemy. Uniform surface corrosion, pitting, galvanic (dissimilar metal) corrosion, intergranular corrosion, exfoliation, stress corrosion, and filiform corrosion each have characteristic appearances and treatments. Prevention beats removal: protective coatings, drainage, ventilation, and inspection intervals exist because corrosion never sleeps.',
    ],
    sections: [
      {
        heading: 'Corrosion Treatment Sequence',
        steps: [
          'Identify the metal and the corrosion type — treatment depends on both.',
          'Assess depth and extent; if it may exceed limits, get the structural repair manual or engineering disposition before touching it.',
          'Clean the area and remove corrosion with the gentlest effective method (abrasive pads, approved chemical removers).',
          'Neutralize and rinse per the process specification; incomplete neutralization restarts corrosion.',
          'Measure remaining material thickness and compare against allowable limits.',
          'Restore protection: chemical conversion coating (e.g., alodine), primer, and topcoat as specified.',
          'Document the location, extent, treatment, and materials used.',
        ],
      },
      {
        heading: 'Galvanic Corrosion Essentials',
        bullets: [
          'Dissimilar metals in contact with an electrolyte (even moisture film) form a galvanic cell.',
          'The more active metal corrodes — aluminum against steel fasteners is the classic case.',
          'Prevent with wet-installed fasteners, sealants, and insulating barriers.',
          'Magnesium is highly active and demands aggressive protection and immediate treatment.',
        ],
      },
      {
        heading: 'Safety Wiring',
        paragraphs: [
          'Safety wire is a positive locking method: the wire is tensioned so that any loosening rotation tightens the wire. Use the specified diameter (0.032 inch is common for general use), six to eight twists per inch, and anchor so the wire pulls in the tightening direction. Cut and bend the pigtail to avoid snags and injuries. Cotter pins serve the same purpose on castellated nuts; never reuse them.',
        ],
      },
    ],
    callouts: [
      { variant: 'safety', title: 'Corrosion and structure', text: 'Corrosion under paint or between faying surfaces can destroy load paths invisibly. Bulging skins ("pillowing") between rivets indicate hidden intergranular/exfoliation attack — treat as a structural finding, not a cosmetic one.' },
      { variant: 'exam', title: 'Readiness focus', text: 'Know corrosion types by description (pitting vs. filiform vs. exfoliation), the dissimilar-metals mechanism, and safety-wire rules: tighten-direction pull, 6–8 twists per inch, no reused cotter pins.' },
    ],
    keyPoints: [
      'Identify the corrosion type before choosing a treatment',
      'Remove, neutralize, measure, re-protect, document',
      'Galvanic corrosion attacks the more active metal in a dissimilar pair',
      'Safety wire must pull in the tightening direction with proper twist',
    ],
  },
  // ---- Module 8: Ground Operations and Servicing ----
  {
    id: 'les_amt_08_1',
    moduleId: 'mod_amt_08',
    title: 'Ground Handling: Towing, Taxi Support, and Tiedown',
    order: 1,
    durationMin: 18,
    content: [
      'Most aircraft damage happens on the ground, not in the air. Towing, marshalling, and tiedown are disciplined team operations with defined roles and standardized signals. The tow team typically includes a lead/driver, a brake operator in the cockpit, and wing walkers — with clear agreement before movement begins.',
    ],
    sections: [
      {
        heading: 'Safe Towing Procedure',
        steps: [
          'Inspect the tow path: clear of obstacles, chocks, equipment, and people; verify door and panel security.',
          'Verify a qualified brake operator is in the cockpit with the brake system functional; never tow with an unqualified person at the brakes.',
          'Attach the correct tow bar for the aircraft; check the nose-gear turn limits and torque links.',
          'Station wing walkers at the tips and agree on signals and a stop authority before moving.',
          'Move slowly and smoothly; never exceed nose-gear turn limits — scribing marks show the limit.',
          'Set brakes and chock at destination before disconnecting the tow bar.',
        ],
      },
      {
        heading: 'Marshalling Signals',
        bullets: [
          'Standard hand/light signals: move ahead (arms up, palms out, sweeping), slow down (arms down, patting), stop (arms crossed overhead), cut engines (hand across throat).',
          'At night or in noise, illuminated wands replace bare hands.',
          'Anyone who loses sight of the marshaller stops the operation until signals are re-established.',
        ],
      },
      {
        heading: 'Tiedown and Mooring',
        paragraphs: [
          'Tie down into wind where possible, with nose gear straight, control locks or gust locks installed, and ropes or straps with slight slack to avoid shock-loading the fittings. In forecast high winds, add chocks, increase tiedown security, and consider hangaring — the cheapest storm protection available.',
        ],
      },
    ],
    callouts: [
      { variant: 'safety', title: 'Propellers kill', text: 'Treat every propeller as if the engine can start: never move a prop by hand toward a running position casually, keep clear of the arc, and call "clear" and confirm before any engine operation.' },
      { variant: 'exam', title: 'Readiness focus', text: 'Know tow team roles (driver, brake operator, wing walkers), nose-gear turn limits, and basic marshalling signals — especially "stop" and "cut engines".' },
    ],
    keyPoints: [
      'Ground damage exceeds in-flight damage — towing is a team procedure',
      'A qualified brake operator is required in the cockpit during towing',
      'Never exceed nose-gear turn limits',
      'Loss of visual contact with the marshaller means stop',
    ],
  },
  {
    id: 'les_amt_08_2',
    moduleId: 'mod_amt_08',
    title: 'Servicing: Fuel, Oil, Oxygen, and Hydraulics',
    order: 2,
    durationMin: 20,
    content: [
      'Servicing looks routine and hides serious hazards. Fueling creates static electricity and fire risk; oxygen servicing turns ordinary grease into a combustion hazard; hydraulic systems store thousands of psi; compressed gas cylinders are pressure vessels. Each fluid has a specification — the wrong fluid, grade, or quantity is an airworthiness issue, not a housekeeping one.',
    ],
    sections: [
      {
        heading: 'Fueling Safety Procedure',
        steps: [
          'Confirm the fuel type and grade against the placard and the order — misfueling a gasoline aircraft with jet fuel can be fatal on takeoff.',
          'Position the aircraft outside the hangar; no fueling indoors.',
          'Ground (bond) the aircraft, the fueling equipment, and the nozzle before opening any cap.',
          'Keep fire extinguishers accessible; eliminate ignition sources and radio transmissions per local procedure.',
          'Fuel at controlled pressure/flow; monitor continuously — never leave a fueling operation unattended.',
          'Replace caps, remove bonding, and clean spills; log the quantity uplifted.',
        ],
      },
      {
        heading: 'Fluid Identification',
        table: {
          caption: 'Common servicing fluids and identifiers',
          headers: ['Fluid', 'Identification', 'Hazard focus'],
          rows: [
            ['100LL avgas', 'Blue dye', 'Fire, static, lead exposure'],
            ['Jet A', 'Colorless/straw', 'Fire, misfueling piston aircraft'],
            ['Piston engine oil', 'Spec and grade per manual', 'Correct grade; contamination'],
            ['Hydraulic fluid (MIL-H-5606)', 'Red dye', 'Injection injury, flammable'],
            ['Skydrol (phosphate ester)', 'Purple', 'Skin/eye irritation, paint damage'],
            ['Aviator’s breathing oxygen', 'Green bottles, O₂ only', 'Fire acceleration — no oil or grease'],
          ],
        },
      },
      {
        heading: 'Oxygen and Hydraulic Servicing Rules',
        bullets: [
          'Oxygen: use only oxygen-clean equipment; no oil, grease, or thread sealants not rated for oxygen; crack valves slowly.',
          'Hydraulics: verify system depressurized before opening; use the specified fluid only — 5606 and Skydrol are not interchangeable.',
          'Tire servicing: approach inflated tires from the side, use a cage or remote inflation for split rims, and never over-inflate to seat a bead without protection.',
        ],
      },
    ],
    callouts: [
      { variant: 'safety', title: 'Oxygen fire triangle', text: 'Oxygen + fuel (grease counts) + ignition = violent combustion. Oxygen systems demand scrupulous cleanliness: dedicated clean tools, no petroleum products, hands free of oil.' },
      { variant: 'exam', title: 'Readiness focus', text: 'Fluid colors are classic test items: 100LL is blue, MIL-H-5606 is red, Skydrol is purple. Bonding/grounding before fueling prevents static ignition.' },
    ],
    keyPoints: [
      'Verify fuel type and grade before every servicing',
      'Bond aircraft and equipment before opening fuel caps',
      'Oxygen and oil/grease are a combustion combination — keep systems oxygen-clean',
      'Depressurize hydraulic systems before opening any fitting',
    ],
  },
  // ---- Module 9: Human Factors ----
  {
    id: 'les_amt_09_1',
    moduleId: 'mod_amt_09',
    title: 'The Human Factors Framework',
    order: 1,
    durationMin: 18,
    content: [
      'The majority of maintenance-related incidents trace back to human performance, not technical failure. Human factors studies how people interact with tasks, tools, procedures, and each other — and how to design work so that the predictable limitations of human beings do not become accidents. The well-known "Dirty Dozen" summarizes twelve common precursors to maintenance error.',
    ],
    sections: [
      {
        heading: 'The Dirty Dozen',
        table: {
          caption: 'Twelve human-factor precursors to maintenance error',
          headers: ['Precursor', 'What it looks like'],
          rows: [
            ['Lack of communication', 'Incomplete shift handovers; assumptions about what was said'],
            ['Complacency', 'Skipping checklist steps on "routine" tasks'],
            ['Lack of knowledge', 'Guessing instead of pulling the manual'],
            ['Distraction', 'Interrupted work resumed at the wrong step'],
            ['Lack of teamwork', 'Working past each other instead of together'],
            ['Fatigue', 'Slower decisions, missed steps near shift end'],
            ['Lack of resources', 'Improvising tools or parts'],
            ['Pressure', 'Schedule pressure bending procedures'],
            ['Lack of assertiveness', 'Not speaking up about a discrepancy'],
            ['Stress', 'Personal or work stress narrowing attention'],
            ['Lack of awareness', 'Losing the big picture of concurrent work'],
            ['Norms', '"That’s how we do it here" overriding the manual'],
          ],
        },
      },
      {
        heading: 'The Error Chain',
        paragraphs: [
          'Incidents are rarely one mistake; they are chains. A distraction during torquing, a missing inspection, and schedule pressure can align into a loose fastener in flight. Breaking any single link — a re-inspection, a pause, a second set of eyes — breaks the chain. This is why reporting systems and "safety nets" such as duplicate inspections of flight-critical work exist.',
        ],
      },
      {
        heading: 'Just Culture',
        bullets: [
          'A just culture distinguishes honest error from recklessness and encourages reporting.',
          'Voluntary reporting programs (such as ASRS) improve safety by surfacing precursors before they align.',
          'The goal is not blame; it is redesigning work so the same error is harder to make twice.',
        ],
      },
    ],
    callouts: [
      { variant: 'exam', title: 'Readiness focus', text: 'Memorize the Dirty Dozen — you will see direct questions. Also know that a "just culture" encourages reporting of honest mistakes while holding willful violations accountable.' },
    ],
    keyPoints: [
      'Most maintenance incidents involve human performance, not technical failure',
      'The Dirty Dozen lists twelve common error precursors',
      'Incidents are chains — break one link and the event does not happen',
      'Just culture encourages reporting to fix systems, not blame people',
    ],
  },
  {
    id: 'les_amt_09_2',
    moduleId: 'mod_amt_09',
    title: 'Managing Human Error in Practice',
    order: 2,
    durationMin: 18,
    content: [
      'Human-factors knowledge matters only when it changes behavior. Practical defenses include disciplined checklist use, structured shift handovers, fatigue management, and the assertiveness to stop work when something is wrong. These are professional skills as real as safety wiring.',
    ],
    sections: [
      {
        heading: 'Shift Turnover Done Right',
        steps: [
          'Brief the incoming technician face-to-face — never rely on notes alone.',
          'State the task status precisely: what is complete, what step is next, what is open.',
          'Identify items awaiting parts, inspections, or verification.',
          'Flag torque-seal removals, disconnected systems, and anything that looks assembled but is not.',
          'Walk the aircraft together when practical; let the incoming technician confirm the state with their own eyes.',
          'Document the turnover in the work order or shift log.',
        ],
      },
      {
        heading: 'Defenses Against Interruption',
        bullets: [
          'When interrupted, restart the step or go back to the last verification point — never resume "about here".',
          'Use the checklist line-by-line with read-and-do discipline, even on familiar tasks.',
          'Mark incomplete work physically: tags, removed fairings, torque-stripe gaps.',
          'Duplicate inspections are required for flight-critical tasks — treat them as a control, not an insult.',
        ],
      },
      {
        heading: 'Fatigue and Fitness for Duty',
        paragraphs: [
          'Fatigue degrades attention, memory, and judgment measurably — performance after long wakefulness can mirror alcohol impairment. Countermeasures are personal (sleep discipline, nutrition, honest self-assessment) and organizational (shift design, workload management). "I’m fine" is not data; use objective self-checks and peer awareness.',
        ],
      },
    ],
    callouts: [
      { variant: 'tip', title: 'Professional habit', text: 'Build a personal interruption ritual: stop point marked, step written down, partial fasteners left obviously incomplete. Your future self at the next shift will thank you.' },
      { variant: 'exam', title: 'Readiness focus', text: 'Expect scenario questions: after an interruption, the correct action is to return to the beginning of the step or the last verification point. Assertiveness — speaking up about safety — is always the correct answer.' },
    ],
    keyPoints: [
      'Structured handovers prevent the most common maintenance errors',
      'After interruption, restart the step or return to the last verification point',
      'Checklists are read-and-do tools, not memory tests',
      'Fatigue management is a shared personal and organizational duty',
    ],
  },
  // ---- Module 10: Final Readiness Review ----
  {
    id: 'les_amt_10_1',
    moduleId: 'mod_amt_10',
    title: 'Readiness Checklist',
    order: 1,
    durationMin: 15,
    content: [
      'You have worked through the nine General subject areas. This review consolidates what you must be able to do — not just recognize — before attempting the final practice assessment. Use this checklist honestly: any unchecked item is a remediation target, not a defeat.',
    ],
    sections: [
      {
        heading: 'Self-Assessment Checklist',
        bullets: [
          'Identify which regulation governs a maintenance activity (Parts 43, 65, 91, 39, 147) and write a compliant record entry',
          'Convert fractions/decimals/percentages and solve tolerance, area, volume, and Ohm’s law problems',
          'Apply Pascal’s law (F = P × A) and convert temperatures between °F and °C',
          'Analyze series and parallel circuits and use a multimeter safely',
          'Read orthographic views, line types, schematics, and tolerance callouts',
          'Compute weight-and-balance changes and a new CG from an equipment change table',
          'Decode AN/MS/NAS hardware and state correct torque and safety-wire practice',
          'Describe corrosion types and the remove–neutralize–measure–protect sequence',
          'State fueling, oxygen, and hydraulic servicing safety rules',
          'Name the Dirty Dozen and describe interruption and handover defenses',
        ],
      },
      {
        heading: 'Weak-Area Remediation Map',
        table: {
          caption: 'If you missed it, review here',
          headers: ['Weak area', 'Go back to'],
          rows: [
            ['Regulations and records', 'Module 1, both lessons; rewrite a sample logbook entry'],
            ['Math conversions and tolerances', 'Module 2; rework the tolerance procedure'],
            ['Electricity calculations', 'Module 4; redo the Ohm’s law table problems'],
            ['Weight and balance computation', 'Module 6, Lesson 2 worked example'],
            ['Hardware and corrosion', 'Module 7; re-read the decoding table and treatment sequence'],
            ['Human factors', 'Module 9; memorize the Dirty Dozen table'],
          ],
        },
      },
    ],
    callouts: [
      { variant: 'exam', title: 'Readiness focus', text: 'A strong readiness score on your practice questions in the 80%+ range across topics is a good indicator before scheduling your final practice test. Focus remediation on your two weakest topics first.' },
    ],
    keyPoints: [
      'Self-assess each General subject area honestly',
      'Remediation means re-doing procedures, not just re-reading',
      'Target your two weakest topics first',
      'Attempt the timed final practice test only after module completion',
    ],
  },
  {
    id: 'les_amt_10_2',
    moduleId: 'mod_amt_10',
    title: 'Exam-Day Strategies',
    order: 2,
    durationMin: 15,
    content: [
      'Knowledge exams reward process as much as knowledge. Most errors on certification-style tests come from misreading questions, sign errors in calculations, and rushing — not from missing knowledge. A disciplined approach to each question protects the work you have already done.',
    ],
    sections: [
      {
        heading: 'Question Discipline',
        steps: [
          'Read the full question stem, then every answer choice, before selecting anything.',
          'Underline (mentally or on scratch paper) the operative words: NOT, EXCEPT, always, minimum.',
          'For calculation problems, write the formula first, then substitute values — never compute in your head.',
          'Estimate the answer’s magnitude before computing; it catches unit and decimal errors.',
          'Flag uncertain questions and move on; return with fresh eyes rather than stalling.',
          'Use all available time to review flagged items and recheck calculations.',
        ],
      },
      {
        heading: 'Common Traps',
        bullets: [
          'Sign errors in weight-and-balance tables (removed equipment is negative)',
          'Unit slips: inches vs. feet, gallons vs. pounds, volts vs. amps',
          'Answers that are correct statements but do not answer the asked question',
          'Overthinking true/false items — judge the statement as written, not as you wish it were',
        ],
      },
      {
        heading: 'Logistics and Mindset',
        paragraphs: [
          'Arrive rested and early with required identification and authorization documents per your school’s guidance. Expect a computer-based format with an on-screen or approved calculator and scratch material. Treat the exam as a demonstration of habits you have already built: read carefully, compute on paper, verify, and document.',
        ],
      },
    ],
    callouts: [
      { variant: 'tip', title: 'Final word', text: 'Your readiness score combines practice accuracy, diagnostic improvement, module completion, and your timed final practice result. Steady, documented preparation — not cramming — is what the model rewards.' },
    ],
    keyPoints: [
      'Read every stem and every choice before answering',
      'Write formulas before substituting numbers',
      'Flag and return; never stall on one question',
      'Watch sign errors and unit conversions — the classic traps',
    ],
  },
]

export const AMT_QUESTIONS: Question[] = [
  {
    id: 'q_amt_01',
    trackId: 'track_amt',
    moduleId: 'mod_amt_01',
    topic: 'Regulations and Maintenance Publications',
    type: 'multiple_choice',
    difficulty: 'easy',
    text: 'Which part of Title 14 CFR sets the rules for performing and recording maintenance, preventive maintenance, rebuilding, and alteration?',
    choices: ['14 CFR Part 43', '14 CFR Part 65', '14 CFR Part 91', '14 CFR Part 147'],
    correctIndex: 0,
    explanation: 'Part 43 governs how maintenance is performed, inspected, and recorded. Part 65 covers mechanic certification, Part 91 covers operating rules and owner airworthiness responsibility, and Part 147 covers AMT school curriculum.',
    estimatedTimeSec: 40,
    tags: ['regulations', 'part-43', 'general'],
  },
  {
    id: 'q_amt_02',
    trackId: 'track_amt',
    moduleId: 'mod_amt_02',
    topic: 'Mathematics for Aviation',
    type: 'multiple_choice',
    difficulty: 'easy',
    text: 'Convert 5/8 inch to a decimal.',
    choices: ['0.580', '0.625', '0.650', '0.685'],
    correctIndex: 1,
    explanation: '5 ÷ 8 = 0.625. Eighths conversions (1/8 = 0.125, so 5/8 = 5 × 0.125) appear constantly in clearances and material thicknesses.',
    estimatedTimeSec: 35,
    tags: ['math', 'fractions', 'conversion'],
  },
  {
    id: 'q_amt_03',
    trackId: 'track_amt',
    moduleId: 'mod_amt_04',
    topic: 'Basic Electricity',
    type: 'multiple_choice',
    difficulty: 'medium',
    text: 'A 12-volt source is connected across a 4-ohm resistor. What current flows?',
    choices: ['0.33 amperes', '3 amperes', '48 amperes', '8 amperes'],
    correctIndex: 1,
    explanation: 'Ohm’s law: I = V ÷ R = 12 ÷ 4 = 3 amperes.',
    estimatedTimeSec: 40,
    tags: ['electricity', 'ohms-law', 'general'],
  },
  {
    id: 'q_amt_04',
    trackId: 'track_amt',
    moduleId: 'mod_amt_06',
    topic: 'Weight and Balance',
    type: 'scenario',
    difficulty: 'medium',
    text: 'A mechanic installs a 10-pound piece of equipment at arm 62 inches. What moment does this item add to the weight-and-balance computation?',
    choices: ['620 pound-inches', '6.2 pound-inches', '72 pound-inches', '160 pound-inches'],
    correctIndex: 0,
    explanation: 'Moment = weight × arm = 10 lb × 62 in = 620 lb·in. Added equipment contributes positive weight and moment.',
    estimatedTimeSec: 50,
    tags: ['weight-and-balance', 'moment', 'calculation'],
  },
  {
    id: 'q_amt_05',
    trackId: 'track_amt',
    moduleId: 'mod_amt_06',
    topic: 'Weight and Balance',
    type: 'true_false',
    difficulty: 'easy',
    text: 'The datum is an imaginary vertical plane, established by the manufacturer, from which all arms are measured.',
    choices: ['True', 'False'],
    correctIndex: 0,
    explanation: 'The datum is the reference plane for all arm (station) measurements. Its location is specified by the manufacturer and can be anywhere — even ahead of the aircraft.',
    estimatedTimeSec: 30,
    tags: ['weight-and-balance', 'definitions'],
  },
  {
    id: 'q_amt_06',
    trackId: 'track_amt',
    moduleId: 'mod_amt_07',
    topic: 'Materials and Processes',
    type: 'multiple_choice',
    difficulty: 'medium',
    text: 'In the bolt designation AN4-10, what does the number 4 indicate?',
    choices: [
      'The bolt is 4 inches long',
      'The bolt diameter is 4/16 (1/4) inch',
      'The bolt has 4 threads per inch',
      'The bolt grip length is 4/16 inch',
    ],
    correctIndex: 1,
    explanation: 'For AN bolts, the number after "AN" gives the shank diameter in sixteenths of an inch: AN4 = 4/16 = 1/4 inch diameter. The dash number encodes length/grip.',
    estimatedTimeSec: 45,
    tags: ['hardware', 'fasteners', 'an-standard'],
  },
  {
    id: 'q_amt_07',
    trackId: 'track_amt',
    moduleId: 'mod_amt_03',
    topic: 'Physics Fundamentals',
    type: 'multiple_choice',
    difficulty: 'medium',
    text: 'A hydraulic system pressurizes fluid to 1,000 psi. The fluid acts on an actuator piston with an area of 2 square inches. What force does the actuator develop?',
    choices: ['500 pounds', '1,002 pounds', '2,000 pounds', '2,002 pounds'],
    correctIndex: 2,
    explanation: 'F = P × A = 1,000 psi × 2 in² = 2,000 lb. This is Pascal’s law in action: pressure in a confined fluid transmits undiminished, and force scales with piston area.',
    estimatedTimeSec: 50,
    tags: ['physics', 'hydraulics', 'pascals-law'],
  },
  {
    id: 'q_amt_08',
    trackId: 'track_amt',
    moduleId: 'mod_amt_07',
    topic: 'Materials and Processes',
    type: 'scenario',
    difficulty: 'hard',
    text: 'During an inspection, a technician finds light corrosion on an aluminum wing skin. After identifying the metal and confirming the corrosion is within repairable limits, which sequence is correct?',
    choices: [
      'Prime immediately, then remove corrosion at the next inspection',
      'Remove corrosion, neutralize and rinse, measure remaining thickness, restore protective coatings, document',
      'Paint over the area and increase the inspection interval',
      'Drill out the affected area and install a patch without further measurement',
    ],
    correctIndex: 1,
    explanation: 'The correct treatment sequence is: remove corrosion with the gentlest effective method, neutralize and rinse, measure remaining material against limits, restore protection (conversion coating, primer, topcoat), and document the work.',
    estimatedTimeSec: 60,
    tags: ['corrosion', 'processes', 'materials'],
  },
  {
    id: 'q_amt_09',
    trackId: 'track_amt',
    moduleId: 'mod_amt_08',
    topic: 'Ground Operations and Servicing',
    type: 'scenario',
    difficulty: 'medium',
    text: 'A crew is preparing to tow an aircraft into a hangar. Which condition is required before movement begins?',
    choices: [
      'The tow vehicle engine is at operating temperature',
      'A qualified brake operator is in the cockpit and signals/roles are agreed upon',
      'The fuel caps are removed for ventilation',
      'The magneto switches are in the BOTH position',
    ],
    correctIndex: 1,
    explanation: 'Safe towing requires a qualified brake operator in the cockpit, functional brakes, agreed signals, and wing walkers as needed. Fuel caps stay closed, and ignition switches must be OFF.',
    estimatedTimeSec: 55,
    tags: ['ground-operations', 'towing', 'safety'],
  },
  {
    id: 'q_amt_10',
    trackId: 'track_amt',
    moduleId: 'mod_amt_09',
    topic: 'Human Factors in Maintenance',
    type: 'true_false',
    difficulty: 'easy',
    text: 'Fatigue is one of the "Dirty Dozen" human-factors precursors to maintenance error.',
    choices: ['True', 'False'],
    correctIndex: 0,
    explanation: 'Fatigue is a core member of the Dirty Dozen, alongside complacency, distraction, pressure, lack of communication, and others. Fatigue measurably degrades attention, memory, and judgment.',
    estimatedTimeSec: 30,
    tags: ['human-factors', 'dirty-dozen'],
  },
  {
    id: 'q_amt_11',
    trackId: 'track_amt',
    moduleId: 'mod_amt_05',
    topic: 'Aircraft Drawings and Schematics',
    type: 'multiple_choice',
    difficulty: 'medium',
    text: 'On an aircraft drawing, a line made of short dashes between visible edges indicates:',
    choices: [
      'A centerline or axis of rotation',
      'A hidden edge obscured by the surface',
      'The cutting plane for a section view',
      'A dimension extension line',
    ],
    correctIndex: 1,
    explanation: 'Hidden lines are dashed and represent edges that exist but cannot be seen from that view. Centerlines use long-short dash patterns; cutting-plane lines are thick with arrows.',
    estimatedTimeSec: 40,
    tags: ['drawings', 'line-types', 'blueprint'],
  },
  {
    id: 'q_amt_12',
    trackId: 'track_amt',
    moduleId: 'mod_amt_01',
    topic: 'Regulations and Maintenance Publications',
    type: 'scenario',
    difficulty: 'hard',
    text: 'A mechanic completes a 100-hour inspection. Which set of elements must the maintenance record entry contain?',
    choices: [
      'Aircraft color, owner’s phone number, and the mechanic’s home address',
      'Description of work performed, date of completion, and the signature and certificate number of the person approving for return to service',
      'Only the total cost of the inspection and the customer’s signature',
      'The weather at the time of inspection and the fuel quantity on board',
    ],
    correctIndex: 1,
    explanation: 'Part 43 requires each maintenance record entry to describe the work, state the completion date, and bear the signature and certificate number of the person approving the work for return to service.',
    estimatedTimeSec: 55,
    tags: ['regulations', 'records', 'logbook'],
  },
]

export const AMT_ASSESSMENTS: Assessment[] = [
  {
    id: 'asm_amt_diag',
    trackId: 'track_amt',
    moduleId: null,
    kind: 'diagnostic',
    title: 'Aviation Maintenance Technician Baseline Diagnostic',
    questionIds: ['q_amt_01', 'q_amt_02', 'q_amt_03', 'q_amt_04', 'q_amt_05', 'q_amt_06', 'q_amt_07', 'q_amt_08'],
    timeLimitMin: 25,
  },
  {
    id: 'asm_amt_final',
    trackId: 'track_amt',
    moduleId: null,
    kind: 'timed_final',
    title: 'Aviation Maintenance Technician Timed Final Practice Test',
    questionIds: ['q_amt_05', 'q_amt_06', 'q_amt_07', 'q_amt_08', 'q_amt_09', 'q_amt_10', 'q_amt_11', 'q_amt_12'],
    timeLimitMin: 30,
  },
  { id: 'asm_amt_kc_01', trackId: 'track_amt', moduleId: 'mod_amt_01', kind: 'knowledge_check', title: 'Regulations and Maintenance Publications Knowledge Check', questionIds: ['q_amt_01', 'q_amt_12'], timeLimitMin: null },
  { id: 'asm_amt_kc_02', trackId: 'track_amt', moduleId: 'mod_amt_02', kind: 'knowledge_check', title: 'Mathematics for Aviation Knowledge Check', questionIds: ['q_amt_02'], timeLimitMin: null },
  { id: 'asm_amt_kc_03', trackId: 'track_amt', moduleId: 'mod_amt_03', kind: 'knowledge_check', title: 'Physics Fundamentals Knowledge Check', questionIds: ['q_amt_07'], timeLimitMin: null },
  { id: 'asm_amt_kc_04', trackId: 'track_amt', moduleId: 'mod_amt_04', kind: 'knowledge_check', title: 'Basic Electricity Knowledge Check', questionIds: ['q_amt_03'], timeLimitMin: null },
  { id: 'asm_amt_kc_05', trackId: 'track_amt', moduleId: 'mod_amt_05', kind: 'knowledge_check', title: 'Aircraft Drawings and Schematics Knowledge Check', questionIds: ['q_amt_11'], timeLimitMin: null },
  { id: 'asm_amt_kc_06', trackId: 'track_amt', moduleId: 'mod_amt_06', kind: 'knowledge_check', title: 'Weight and Balance Knowledge Check', questionIds: ['q_amt_04', 'q_amt_05'], timeLimitMin: null },
  { id: 'asm_amt_kc_07', trackId: 'track_amt', moduleId: 'mod_amt_07', kind: 'knowledge_check', title: 'Materials and Processes Knowledge Check', questionIds: ['q_amt_06', 'q_amt_08'], timeLimitMin: null },
  { id: 'asm_amt_kc_08', trackId: 'track_amt', moduleId: 'mod_amt_08', kind: 'knowledge_check', title: 'Ground Operations and Servicing Knowledge Check', questionIds: ['q_amt_09'], timeLimitMin: null },
  { id: 'asm_amt_kc_09', trackId: 'track_amt', moduleId: 'mod_amt_09', kind: 'knowledge_check', title: 'Human Factors Knowledge Check', questionIds: ['q_amt_10'], timeLimitMin: null },
]
