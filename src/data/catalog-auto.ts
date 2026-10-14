// Compact specs for Automotive tracks. Expanded by catalog-compact.ts.
import type { CompactTrack } from './catalog-compact'

export const AUTO_COMPACT: CompactTrack[] = [
  {
    id: 'track_autosvc',
    name: 'Automotive Service Fundamentals',
    shortName: 'Auto Service',
    category: 'automotive',
    weeks: 14,
    description:
      'The foundation every entry-level technician needs: shop safety, tools, engine and chassis systems, preventive maintenance, and service documentation.',
    credentialFocus: 'Mapped to entry-level automotive service competency domains',
    schoolOverview:
      'A complete shop-readiness pathway: safety, hand and power tools, engine fundamentals, electrical basics, brakes, steering and suspension, maintenance schedules, and service documentation — with readiness evidence per domain.',
    studentOverview:
      'Learn how real shops work: stay safe, use the right tool the right way, understand every major vehicle system, and document work like a professional technician.',
    prerequisites: 'None.',
    alignmentNotes:
      'Mapped to entry-level automotive service competency domains: shop safety, tools and equipment, engine fundamentals, electrical basics, brakes, steering and suspension, preventive maintenance, and service information.',
    domains: [
      'Shop Safety', 'Tools and Equipment', 'Engine Fundamentals', 'Electrical Basics',
      'Brakes Fundamentals', 'Steering and Suspension', 'Preventive Maintenance',
      'Service Information', 'Customer Service and Documentation',
    ],
    modules: [
      {
        title: 'Shop Safety', description: 'Personal protection, lifts, and hazard awareness in the shop.',
        lessons: [
          { title: 'Personal Protective Equipment and Safe Habits', points: ['Safety glasses are mandatory anytime work is happening', 'Gloves protect from chemicals; remove them around rotating equipment', 'Steel-toe boots protect against dropped parts', 'Long hair and loose clothing are entanglement hazards near rotating parts', 'Hearing protection matters around impact tools and grinders', 'Know where the eyewash station and fire extinguisher are before you need them'] },
          { title: 'Lifts, Jacks, and Vehicle Support', points: ['Never work under a vehicle supported only by a jack — use rated stands', 'Lift arms must contact the manufacturer-specified lift points', 'Verify the lift locks are engaged before going under', 'Chock wheels when lifting only one end', 'Inspect lift pads and arms before every use', 'Lower the lift slowly and clear tools and people first'] },
        ],
      },
      {
        title: 'Tools and Equipment', description: 'Hand tools, power tools, and measuring instruments.',
        lessons: [
          { title: 'Hand Tools Done Right', points: ['Pull wrenches toward you; never push with full body weight', 'Use the correct size — a sloppy wrench rounds fasteners', 'Six-point sockets grip better than twelve-point on stuck fasteners', 'Ratchet care: keep the mechanism clean and lightly lubricated', 'Screwdrivers are not pry bars or chisels', 'Organize your cart — lost time searching is lost billable hours'] },
          { title: 'Measuring and Precision Tools', points: ['Torque wrenches measure applied force, not tightness by feel', 'Click-type torque wrenches must be stored at their lowest setting', 'Micrometers measure to a thousandth of an inch — learn the scale', 'Feeler gauges check clearances like valve lash and plug gaps', 'Dial indicators measure runout on rotors and shafts', 'Always zero or verify a measuring tool before trusting it'] },
        ],
      },
      {
        title: 'Engine Fundamentals', description: 'How a four-stroke engine works and what its parts do.',
        lessons: [
          { title: 'The Four-Stroke Cycle', points: ['Intake draws the air-fuel charge in as the piston falls', 'Compression squeezes the charge as both valves close', 'Power: spark ignites the charge and drives the piston down', 'Exhaust pushes spent gases out as the piston rises', 'Valve timing coordinates opening and closing with piston position', 'One power stroke occurs for every two crankshaft revolutions'] },
          { title: 'Major Engine Components', points: ['The block houses cylinders, pistons, and the crankshaft', 'The cylinder head carries valves, springs, and often the camshaft', 'The crankshaft converts piston motion into rotation', 'The timing belt or chain synchronizes crank and cam', 'The oiling system lubricates, cools, and cleans internal parts', 'Gaskets and seals keep oil, coolant, and compression where they belong'] },
        ],
      },
      {
        title: 'Electrical Basics', description: 'Voltage, current, resistance, and reading simple circuits.',
        lessons: [
          { title: 'Voltage, Current, and Resistance', points: ['Voltage is electrical pressure measured in volts', 'Current is flow measured in amperes', 'Resistance opposes flow and is measured in ohms', 'Ohm’s law links the three: V = I x R', 'A series circuit has one path; a parallel circuit has branches', 'Voltage drop testing finds resistance where it should not be'] },
          { title: 'Batteries and Basic Testing', points: ['A fully charged 12V battery reads about 12.6 volts at rest', 'Load testing reveals capacity a voltmeter alone cannot', 'Corroded terminals add resistance and cause slow cranking', 'Always disconnect negative first, reconnect it last', 'Parasitic draw testing finds circuits draining the battery overnight', 'Wear eye protection — batteries can vent hydrogen gas'] },
        ],
      },
      {
        title: 'Brakes Fundamentals', description: 'Hydraulics, friction components, and safe inspection.',
        lessons: [
          { title: 'Hydraulic Brake Systems', points: ['Brake fluid transmits pedal force to the wheels hydraulically', 'The master cylinder converts pedal force into fluid pressure', 'Brake fluid absorbs moisture — boiling point drops over time', 'Air in the lines makes a spongy pedal and requires bleeding', 'ABS modulates pressure to prevent wheel lockup', 'Brake fluid damages paint — handle and wipe carefully'] },
          { title: 'Pads, Rotors, and Inspection', points: ['Pad thickness below specification means replacement', 'Rotors have a minimum thickness stamped or in the manual', 'Scoring, heat spots, and runout cause pulsation', 'Measure rotor thickness and runout with a micrometer and dial indicator', 'Uneven pad wear points to sticking caliper slides', 'Never let a vehicle leave with a soft pedal after brake service'] },
        ],
      },
      {
        title: 'Steering and Suspension', description: 'Ride, handling, and the parts that control them.',
        lessons: [
          { title: 'Suspension Components', points: ['Springs carry the vehicle’s weight and absorb bumps', 'Shocks and struts dampen spring oscillation', 'Control arms and bushings locate the wheel assembly', 'Ball joints allow the wheel to pivot for steering', 'Worn shocks cause bouncing and longer stopping distances', 'Listen for clunks over bumps — looseness is wear talking'] },
          { title: 'Steering and Alignment Basics', points: ['Toe is the inward or outward angle of the wheels viewed from above', 'Camber is the tilt of the wheel viewed from the front', 'Caster affects steering return and stability', 'Misalignment shows up as uneven tire wear', 'A steering wheel off-center after service needs an alignment check', 'Loose steering components are a safety-critical inspection item'] },
        ],
      },
      {
        title: 'Preventive Maintenance', description: 'Fluids, filters, belts, and service schedules.',
        lessons: [
          { title: 'Oil and Fluid Service', points: ['Oil changes follow the manufacturer’s interval and specification', 'Use the specified viscosity and rating — not just what is on the shelf', 'Check coolant, brake, transmission, and washer fluid at every service', 'Fluid color and smell reveal problems — burnt transmission fluid smells acrid', 'Dispose of used oil and coolant per environmental regulations', 'Torque drain plugs to spec; overtightening strips pans'] },
          { title: 'Filters, Belts, and Hoses', points: ['Engine air filters protect against abrasive dust', 'A clogged cabin filter reduces HVAC airflow', 'Serpentine belts drive multiple accessories — check for cracks and glazing', 'Belt tension that is too loose slips; too tight kills bearings', 'Hoses fail from the inside out — squeeze for softness and look for bulges', 'Document every maintenance item for the vehicle history'] },
        ],
      },
      {
        title: 'Service Information', description: 'Finding and following the manufacturer’s data.',
        lessons: [
          { title: 'Using Service Manuals and Databases', points: ['Manufacturer procedures always override habit and hearsay', 'Torque specifications come from service information, not memory', 'Wiring diagrams trace circuits by color code and connector pin', 'Technical service bulletins describe known problems and fixes', 'Labor guides estimate job times for estimates', 'Learning to find information is worth more than memorizing it'] },
          { title: 'Specifications and Tolerances', points: ['Every measurement compares against a published specification', 'Wear limits tell you when a part must be replaced, not adjusted', 'Units matter — confusing inch-pounds and foot-pounds breaks parts', 'Calibration dates matter for measuring tools', 'Record actual measurements, not just pass or fail', 'When specs conflict, the vehicle manufacturer wins'] },
        ],
      },
      {
        title: 'Customer Service and Documentation', description: 'Communication, estimates, and repair orders.',
        lessons: [
          { title: 'Talking With Customers', points: ['Listen fully before diagnosing — customers describe symptoms, not parts', 'Translate technical findings into plain language', 'Never promise a fix before verifying the cause', 'Explain estimates line by line when asked', 'Under-promise and over-deliver builds trust', 'Document customer concerns in their own words on the repair order'] },
          { title: 'Repair Orders and Records', points: ['The repair order is a legal record — write it like one', 'Record concern, cause, and correction for every job', 'Note measurements and part numbers used', 'Time records protect both the shop and the technician', 'Comebacks start with missing documentation', 'Clean handwriting or typed entries prevent expensive misunderstandings'] },
        ],
      },
      {
        title: 'Final Readiness Review', description: 'Full-credential review, practice assessment, and readiness check.',
        lessons: [
          { title: 'Full-Credential Practice Run', points: ['Simulate exam timing to build pacing discipline', 'Review your weakest domains first — they hold the most points', 'Read each question for what is actually being asked', 'Eliminate clearly wrong choices before guessing', 'Flag and return to hard questions rather than stalling', 'Review every miss afterward — the rationale is the lesson'] },
          { title: 'Readiness Checklist and Next Steps', points: ['Verify you can explain each domain in your own words', 'Confirm hands-on tasks are practiced, not just read about', 'Know the credential’s format, timing, and passing score', 'Gather required documentation and scheduling details early', 'Sleep and nutrition in the final week beat cramming', 'Plan what credential or course comes next'] },
        ],
      },
    ],
    questions: [
      { domain: 'Shop Safety', difficulty: 'easy', q: 'Before working under a vehicle raised by a jack, you must:', choices: ['Work quickly', 'Support it with rated jack stands at the proper points', 'Pump the jack twice', 'Open the hood'], answer: 1, why: 'Jacks lift; stands support. Hydraulic jacks can settle or fail without warning.' },
      { domain: 'Shop Safety', difficulty: 'medium', type: 'scenario', q: 'A coworker starts grinding nearby without eye protection. You should:', choices: ['Mind your own work', 'Speak up and stop the work until eye protection is on', 'Hand them a rag', 'Move your car instead'], answer: 1, why: 'Eye injuries are instant and permanent; shops depend on peer safety enforcement.' },
      { domain: 'Tools and Equipment', difficulty: 'easy', q: 'A click-type torque wrench should be stored:', choices: ['At its highest setting', 'At its lowest setting to preserve spring calibration', 'Disassembled', 'In the freezer'], answer: 1, why: 'Storing under tension fatigues the internal spring and drifts calibration.' },
      { domain: 'Tools and Equipment', difficulty: 'medium', q: 'A dial indicator on a brake rotor measures:', choices: ['Thickness', 'Lateral runout — side-to-side wobble', 'Hardness', 'Temperature'], answer: 1, why: 'Runout beyond specification causes pedal pulsation and uneven pad wear.' },
      { domain: 'Engine Fundamentals', difficulty: 'easy', q: 'During which stroke are both valves closed and the air-fuel mixture ignited?', choices: ['Intake', 'Power', 'Compression only with valves open', 'Exhaust'], answer: 1, why: 'Spark fires at the end of compression; the power stroke converts it to work.' },
      { domain: 'Engine Fundamentals', difficulty: 'medium', q: 'A broken timing belt on an interference engine usually results in:', choices: ['No damage', 'Valves contacting pistons — severe internal damage', 'Better fuel economy', 'A squeaky belt only'], answer: 1, why: 'In interference designs, pistons and open valves share space; timing loss means collision.' },
      { domain: 'Electrical Basics', difficulty: 'easy', q: 'Using Ohm’s law, a circuit with 12 volts and 4 ohms of resistance draws:', choices: ['3 amps', '48 amps', '0.33 amps', '16 amps'], answer: 0, why: 'I = V / R = 12 / 4 = 3 amps.' },
      { domain: 'Electrical Basics', difficulty: 'medium', q: 'A resting battery reading 11.9 volts is:', choices: ['Fully charged', 'Significantly discharged — charge and test it', 'Overcharged', 'Normal'], answer: 1, why: 'Full charge is about 12.6V; 11.9V indicates a deeply discharged battery.' },
      { domain: 'Brakes Fundamentals', difficulty: 'easy', q: 'A spongy brake pedal after a caliper replacement most likely means:', choices: ['The pads are too thick', 'Air in the hydraulic lines — bleed the system', 'New rotors are too smooth', 'Normal break-in'], answer: 1, why: 'Air compresses where fluid does not; bleeding restores a firm pedal.' },
      { domain: 'Brakes Fundamentals', difficulty: 'medium', q: 'Brake fluid should be replaced periodically because it:', choices: ['Evaporates', 'Absorbs moisture, lowering its boiling point and corroding components', 'Turns to varnish', 'Gets sweeter'], answer: 1, why: 'Hygroscopic fluid with absorbed water boils early, causing fade, and corrodes internals.' },
      { domain: 'Steering and Suspension', difficulty: 'easy', q: 'Cupped or scalloped tire wear typically points to:', choices: ['Perfect alignment', 'Worn shocks or struts letting the tire bounce', 'Too much air only', 'Balanced wheels'], answer: 1, why: 'Bouncing tires wear in scallops; the damper is the usual cause.' },
      { domain: 'Steering and Suspension', difficulty: 'medium', q: 'Excessive inner-edge tire wear on both front tires suggests incorrect:', choices: ['Caster', 'Toe or camber settings', 'Tire brand', 'Fuel type'], answer: 1, why: 'Edge wear patterns map to toe and camber errors; alignment corrects it.' },
      { domain: 'Preventive Maintenance', difficulty: 'easy', q: 'Glazing and cracking on a serpentine belt call for:', choices: ['Belt dressing spray only', 'Replacement, and a check of pulley alignment and tension', 'Tighter tension only', 'Ignore until it snaps'], answer: 1, why: 'A failed belt strands the vehicle; glazing signals heat and slip.' },
      { domain: 'Preventive Maintenance', difficulty: 'medium', q: 'Used engine oil must be:', choices: ['Poured into the storm drain', 'Collected and recycled per environmental regulations', 'Burned in the parking lot', 'Mixed with coolant'], answer: 1, why: 'Used oil is regulated waste; one gallon can contaminate a million gallons of water.' },
      { domain: 'Service Information', difficulty: 'easy', q: 'When a memory and the service manual disagree on a torque spec, use:', choices: ['Memory', 'The service manual specification', 'The tighter of the two', 'A guess'], answer: 1, why: 'Published specifications are the authority; memory drifts and models differ.' },
      { domain: 'Service Information', difficulty: 'medium', q: 'A technical service bulletin (TSB) is:', choices: ['A recall', 'A manufacturer notice describing a known issue and its repair procedure', 'A sales flyer', 'A warranty denial letter'], answer: 1, why: 'TSBs save diagnostic time by documenting known patterns and fixes.' },
      { domain: 'Customer Service and Documentation', difficulty: 'easy', q: 'The customer’s concern should be recorded:', choices: ['In your own technical shorthand', 'In the customer’s own words on the repair order', 'Only if serious', 'Verbally with no record'], answer: 1, why: 'The customer’s words guide diagnosis and protect against disputes.' },
      { domain: 'Customer Service and Documentation', difficulty: 'medium', type: 'scenario', q: 'A customer asks for an exact diagnosis over the phone before any inspection. You should:', choices: ['Guess a part to sound confident', 'Explain that an accurate estimate requires inspection and offer to diagnose first', 'Quote the most expensive repair', 'Refuse to talk'], answer: 1, why: 'Phone guesses create comebacks and distrust; diagnosis precedes estimates.' },
    ],
  },
  {
    id: 'track_autoelec',
    name: 'Automotive Electrical and Diagnostics Basics',
    shortName: 'Auto Electrical',
    category: 'automotive',
    weeks: 12,
    description:
      'Electrical theory applied to the vehicle: batteries, starting and charging systems, wiring and meters, sensors, scan tools, and a repeatable diagnostic strategy.',
    credentialFocus: 'Mapped to entry-level automotive electrical and diagnostics competency domains',
    schoolOverview:
      'A focused electrical pathway: theory, starting and charging, wiring repair, meter skills, sensor operation, scan-tool workflow, and diagnostic strategy — with readiness evidence per domain.',
    studentOverview:
      'Electrical problems scare most new technicians — after this track they will not scare you. Learn the theory, master the meter, and follow a diagnostic process that finds the fault every time.',
    prerequisites: 'Automotive Service Fundamentals recommended.',
    alignmentNotes:
      'Mapped to entry-level automotive electrical and diagnostics competency domains: electrical theory, batteries and starting, charging systems, wiring and circuits, meters and testing, sensors and actuators, scan tools and DTCs, diagnostics strategy, and lighting and accessories.',
    domains: [
      'Electrical Theory', 'Batteries and Starting', 'Charging Systems', 'Wiring and Circuits',
      'Meters and Testing', 'Sensors and Actuators', 'Scan Tools and DTCs', 'Diagnostics Strategy',
      'Lighting and Accessories',
    ],
    modules: [
      {
        title: 'Electrical Theory', description: 'Ohm’s law, circuit types, and voltage drop thinking.',
        lessons: [
          { title: 'Ohm’s Law in the Real World', points: ['Voltage pushes, current flows, resistance opposes', 'V = I x R rearranges to solve any one value from the other two', 'Higher resistance at the same voltage means less current', 'Wattage (power) = volts x amps — why big loads need thick wire', 'Shorts bypass resistance and draw dangerous current', 'Opens stop current entirely — the most common fault'] },
          { title: 'Series, Parallel, and Voltage Drop', points: ['Series circuits divide voltage across each load', 'Parallel branches each see full source voltage', 'Voltage drop testing measures resistance under load with the circuit on', 'More than about 0.5V dropped across a cable or connection means trouble', 'Corrosion is resistance you cannot see until you measure it', 'Ground-side drops are as common as power-side drops'] },
        ],
      },
      {
        title: 'Batteries and Starting', description: 'Battery service and cranking-system diagnosis.',
        lessons: [
          { title: 'Battery Service and Testing', points: ['Resting voltage tells state of charge: 12.6V full, 12.0V half', 'Load or conductance testing measures real capacity', 'Slow cranking with good voltage points to cable and connection resistance', 'Clean terminals with a brush and protect with dielectric grease', 'Battery age matters — most fail between three and five years', 'Record test results on the repair order'] },
          { title: 'The Starting System', points: ['The starter circuit has a control side and a high-current side', 'A single click with no crank suggests a poor high-current connection or bad starter', 'Voltage drop test the cables while cranking', 'Neutral safety switches prevent starting in gear', 'Solenoids switch the heavy current to the starter motor', 'Verify the battery before condemning the starter'] },
        ],
      },
      {
        title: 'Charging Systems', description: 'Alternators, regulation, and charging tests.',
        lessons: [
          { title: 'How the Alternator Charges', points: ['The alternator converts mechanical rotation into electrical power', 'A voltage regulator targets roughly 13.5–14.5 volts while running', 'Diodes convert AC to DC; failed diodes cause ripple and dim lights', 'The drive belt must be in good condition and correctly tensioned', 'The warning lamp circuit often excites the alternator field', 'Overcharging is as damaging as undercharging'] },
          { title: 'Charging System Tests', points: ['Charging voltage is measured at the battery with the engine running', 'Below about 13.5V running suggests undercharging', 'AC ripple above specification indicates diode failure', 'Voltage drop test the charging cable under load', 'Check belt condition and tension before replacing parts', 'Confirm parasitic draw separately from charging faults'] },
        ],
      },
      {
        title: 'Wiring and Circuits', description: 'Wire repair, connectors, and reading diagrams.',
        lessons: [
          { title: 'Reading Wiring Diagrams', points: ['Diagrams show power source, load, switch, and ground for each circuit', 'Wire colors and connector numbers are the map legend', 'Trace the circuit from power to ground before testing anything', 'Splice and connector locations are labeled — find them on the vehicle', 'High-current circuits use heavier gauge wire', 'A diagram plus a meter beats guessing every time'] },
          { title: 'Wire and Connector Repair', points: ['Crimp-and-seal connectors with heat shrink make durable repairs', 'Solder joints need mechanical support — never solder alone on flex points', 'Match wire gauge to the original circuit', 'Dielectric grease protects exposed connectors from corrosion', 'Route repairs away from heat and moving parts', 'Test the circuit after repair, not just the splice'] },
        ],
      },
      {
        title: 'Meters and Testing', description: 'Multimeter skills every diagnosis depends on.',
        lessons: [
          { title: 'Multimeter Fundamentals', points: ['Voltage is measured in parallel across the circuit', 'Current is measured in series — the meter becomes part of the circuit', 'Resistance is measured with the circuit powered off and isolated', 'Use the correct jacks and range before connecting', 'CAT ratings matter for the meter’s own safety', 'A good ground reference is half of every measurement'] },
          { title: 'Applying the Meter to Faults', points: ['Voltage drop finds hidden resistance under load', 'Continuity checks confirm opens with power off', 'Parasitic draw testing uses an ammeter in series at the battery', 'Compare readings to specification — a number alone means nothing', 'Wiggle testing catches intermittent connection faults', 'Document readings so the next test builds on the last'] },
        ],
      },
      {
        title: 'Sensors and Actuators', description: 'How the vehicle sees and how the computer responds.',
        lessons: [
          { title: 'Common Sensor Types', points: ['Thermistors change resistance with temperature — coolant and air temp sensors', 'Hall-effect sensors read position and speed with a magnetic field', 'Oxygen sensors report exhaust mixture content', 'Pressure sensors output a voltage proportional to pressure', 'A 5-volt reference feeds many sensors — losing it kills them all at once', 'Test the sensor and its circuit before replacing the sensor'] },
          { title: 'Actuators and Outputs', points: ['Relays let small control currents switch large load currents', 'Solenoids convert electricity into linear motion', 'Fuel injectors are precision solenoid valves', 'Ignition coils transform low voltage into spark voltage', 'Motors drive windows, pumps, and fans', 'Verify power, ground, and control signal before condemning an actuator'] },
        ],
      },
      {
        title: 'Scan Tools and DTCs', description: 'Reading codes, data, and freeze frames.',
        lessons: [
          { title: 'Diagnostic Trouble Codes', points: ['A DTC names the circuit or system — not necessarily the failed part', 'Codes starting P0 are generic; P1 and beyond are often manufacturer-specific', 'Pending codes have failed once; confirmed codes failed on repeated tests', 'Freeze frame data records conditions when the code set', 'Clearing codes without repair erases evidence and resets readiness monitors', 'Write down all codes before clearing anything'] },
          { title: 'Live Data and Scan Workflow', points: ['Live data shows what the computer sees right now', 'Compare sensor values to expected ranges at key-on and running', 'Mode $06 data can show marginally failing monitors', 'Readiness monitors must complete before emissions testing', 'Bi-directional controls let you command actuators for testing', 'Scan data guides the pinpoint test — it is not the repair itself'] },
        ],
      },
      {
        title: 'Diagnostics Strategy', description: 'A repeatable process that finds faults efficiently.',
        lessons: [
          { title: 'The Diagnostic Process', points: ['Verify the concern — reproduce it or gather exact conditions', 'Research TSBs and known patterns before testing', 'Build a test plan from the easiest, most likely cause', 'Test, do not guess — each test eliminates a branch', 'Fix the root cause, then verify the entire system works', 'Document the diagnostic path for the customer and the next technician'] },
          { title: 'Intermittent and Multiple-Fault Cases', points: ['Intermittents fail only under specific conditions — find the pattern', 'Wiggle, heat, and load testing provoke intermittent faults', 'One fault can set many codes — chase the common cause first', 'Ground and power distribution faults cascade through systems', 'Fix the lowest-level fault before the consequences', 'A test drive under the failing conditions confirms the repair'] },
        ],
      },
      {
        title: 'Lighting and Accessories', description: 'Exterior lighting, wipers, and accessory circuits.',
        lessons: [
          { title: 'Lighting Circuits', points: ['A bulb that repeatedly burns out suggests overvoltage or vibration', 'Dim lights on one side point to a poor ground on that side', 'LED retrofits may draw less current and trigger bulb-out warnings', 'Fuses protect wire, not bulbs — a blown fuse means something drew too much', 'Check the simple things first: bulb, fuse, then wiring', 'Headlight aim matters for safety and inspection compliance'] },
          { title: 'Wipers, Windows, and Accessories', points: ['Wiper motors park via an internal switch circuit', 'Slow wipers can indicate binding linkage or voltage drop', 'Power windows share a master switch and individual motors', 'A dead accessory with a good fuse needs circuit tracing', 'Accessory circuits often run through relays and body modules', 'Aftermarket accessories cause many mystery draws and faults'] },
        ],
      },
      {
        title: 'Final Readiness Review', description: 'Full-credential review, practice assessment, and readiness check.',
        lessons: [
          { title: 'Full-Credential Practice Run', points: ['Simulate exam timing to build pacing discipline', 'Electrical questions reward process — show the diagnostic logic', 'Review meter-use and voltage-drop questions carefully', 'Eliminate clearly wrong choices before guessing', 'Flag and return to hard questions rather than stalling', 'Review every miss afterward — the rationale is the lesson'] },
          { title: 'Readiness Checklist and Next Steps', points: ['Verify you can explain each domain in your own words', 'Confirm meter skills are practiced on real circuits', 'Know the credential’s format, timing, and passing score', 'Gather required documentation and scheduling details early', 'Sleep and nutrition in the final week beat cramming', 'Plan the next credential — engine performance or brakes'] },
        ],
      },
    ],
    questions: [
      { domain: 'Electrical Theory', difficulty: 'easy', q: 'A circuit drawing 10 amps from a 12-volt source has a total resistance of:', choices: ['120 ohms', '1.2 ohms', '0.83 ohms', '22 ohms'], answer: 1, why: 'R = V / I = 12 / 10 = 1.2 ohms.' },
      { domain: 'Electrical Theory', difficulty: 'medium', q: 'A 0.9V drop measured across a headlight ground wire while the light is on indicates:', choices: ['Perfect grounding', 'Excessive resistance in the ground path', 'A bad bulb', 'Overcharging'], answer: 1, why: 'Healthy grounds drop near zero volts under load; 0.9V means corroded or loose connections.' },
      { domain: 'Batteries and Starting', difficulty: 'easy', q: 'Slow cranking with a fully charged battery most likely points to:', choices: ['A bad alternator belt', 'High resistance in cables or connections, or a failing starter', 'Low coolant', 'A clogged air filter'], answer: 1, why: 'Charge confirms the battery; voltage-drop tests then isolate the cable or starter fault.' },
      { domain: 'Batteries and Starting', difficulty: 'medium', q: 'The neutral safety switch prevents:', choices: ['Overcharging', 'Starting while the transmission is in gear', 'Battery drain', 'Overheating'], answer: 1, why: 'It interrupts the starter control circuit unless in park or neutral.' },
      { domain: 'Charging Systems', difficulty: 'easy', q: 'A healthy charging system at the battery with the engine running reads approximately:', choices: ['11.0V', '13.5–14.5V', '16–18V', '12.0V'], answer: 1, why: 'Regulated charging output sits around 13.5–14.5 volts.' },
      { domain: 'Charging Systems', difficulty: 'medium', q: 'Excessive AC ripple in the charging output indicates:', choices: ['A healthy alternator', 'Failed diodes inside the alternator', 'A weak battery', 'A slipping belt only'], answer: 1, why: 'Diodes rectify AC to DC; failed diodes leak AC ripple into the system.' },
      { domain: 'Wiring and Circuits', difficulty: 'easy', q: 'On a wiring diagram, every circuit traces from:', choices: ['Ground to power', 'Power source through load and control to ground', 'Fuse to fuse', 'Battery to battery'], answer: 1, why: 'Following power → load → switch → ground structures any diagnosis.' },
      { domain: 'Wiring and Circuits', difficulty: 'medium', q: 'The best durable repair for a damaged wire in a flexing harness area is:', choices: ['Electrical tape alone', 'A crimp-and-seal connector or soldered splice with mechanical support and heat shrink', 'Twisting the ends together', 'A wire nut'], answer: 1, why: 'Sealed, mechanically supported splices resist vibration and moisture.' },
      { domain: 'Meters and Testing', difficulty: 'medium', q: 'To measure current draw, the meter must be connected:', choices: ['In parallel across the battery', 'In series so the circuit current flows through the meter', 'Across the fuse only', 'With the engine running only'], answer: 1, why: 'Ammeters measure flow through themselves — series connection is mandatory.' },
      { domain: 'Meters and Testing', difficulty: 'hard', type: 'scenario', q: 'A battery dies every three days. With everything off, your series ammeter reads 350 mA. The correct next step is:', choices: ['Replace the battery', 'Pull fuses one at a time to isolate the circuit causing the excessive draw', 'Replace the alternator', 'Drive it more'], answer: 1, why: 'Parasitic draw above ~50 mA drains batteries; fuse isolation finds the guilty circuit.' },
      { domain: 'Sensors and Actuators', difficulty: 'medium', q: 'If many sensors suddenly read implausibly at once, first check:', choices: ['Each sensor one by one', 'The shared 5-volt reference and sensor ground circuits', 'The tires', 'The radio fuse'], answer: 1, why: 'Shared reference or ground faults take down every sensor on that circuit together.' },
      { domain: 'Sensors and Actuators', difficulty: 'easy', q: 'A coolant temperature sensor is typically a:', choices: ['Hall-effect device', 'Thermistor whose resistance changes with temperature', 'Photocell', 'Microphone'], answer: 1, why: 'NTC thermistors drop resistance as temperature rises.' },
      { domain: 'Scan Tools and DTCs', difficulty: 'easy', q: 'A stored DTC tells you:', choices: ['Exactly which part to replace', 'Which circuit or system failed a test — the starting point for diagnosis', 'The repair cost', 'The warranty status'], answer: 1, why: 'Codes point at circuits, not parts; pinpoint testing finds the actual failure.' },
      { domain: 'Scan Tools and DTCs', difficulty: 'medium', q: 'Freeze frame data records:', choices: ['Photos of the engine', 'Operating conditions at the moment the fault code set', 'Tire pressures', 'Radio presets'], answer: 1, why: 'Freeze frames capture RPM, load, temperature, and more — gold for intermittent faults.' },
      { domain: 'Diagnostics Strategy', difficulty: 'easy', q: 'The first step of any diagnosis is to:', choices: ['Replace the most expensive part', 'Verify and reproduce the customer’s concern', 'Clear all codes', 'Order parts'], answer: 1, why: 'You cannot fix what you cannot reproduce or clearly define.' },
      { domain: 'Diagnostics Strategy', difficulty: 'hard', type: 'scenario', q: 'A vehicle sets four codes across two systems. The most efficient approach is to:', choices: ['Fix four separate faults', 'Look for a shared power, ground, or communication fault affecting both systems', 'Clear codes and hope', 'Replace the computer first'], answer: 1, why: 'Multiple simultaneous faults usually share a root cause in power, ground, or network wiring.' },
      { domain: 'Lighting and Accessories', difficulty: 'easy', q: 'Both headlights dim on one side while the other side is bright. First suspect:', choices: ['The battery', 'A poor ground on the dim side', 'The alternator', 'The fuse box lid'], answer: 1, why: 'Side-specific dimming is a classic ground-side voltage drop.' },
      { domain: 'Lighting and Accessories', difficulty: 'medium', q: 'A fuse that blows repeatedly means:', choices: ['Use a bigger fuse', 'A fault is drawing excess current — find it before replacing the fuse again', 'The fuse box is old', 'Normal wear'], answer: 1, why: 'Upsizing fuses lets wires burn; fuses blow because something downstream is wrong.' },
    ],
  },
]
