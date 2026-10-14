// Healthcare + aviation expansion specs (12 tracks).
// All content is original, mapped only to public competency-domain categories;
// no real exam questions and no claim of credential-provider endorsement.
import type { TrackSpec } from './catalog'

export const HEALTH_SPECS: TrackSpec[] = [
  // ======================================================================
  // 1. EKG Technician Readiness
  // ======================================================================
  {
    id: 'track_ekg',
    name: 'EKG Technician Readiness',
    shortName: 'EKG Technician',
    category: 'healthcare',
    weeks: 10,
    description:
      'Learn to set up, run, and read electrocardiograms with confidence — from precise lead placement to rhythm strip interpretation and artifact troubleshooting.',
    credentialFocus: 'Mapped to CET-style competency domains',
    schoolOverview:
      'A complete EKG readiness pathway with rhythm-interpretation practice, lead-placement checklists, and artifact-recognition drills. Cohort dashboards document each student\u2019s progress toward exam sign-off.',
    studentOverview:
      'Master the skills EKG technicians use daily — placing leads correctly, recognizing rhythms, and catching artifacts before they ruin a tracing. Practice strips and scenario checks show you exactly where you stand.',
    prerequisites: 'None. A health-science foundations course is helpful but not required.',
    alignmentNotes:
      'Modules and practice banks are mapped to CET-style competency domains: rhythm interpretation, lead placement, artifact recognition, and patient preparation. Content is original and does not reproduce any credentialing exam.',
    domains: [
      'Cardiac Anatomy and Physiology',
      'EKG Equipment and Lead Placement',
      'Rhythm Interpretation',
      'Waveforms and Measurements',
      'Artifact Recognition',
      'Patient Preparation and Communication',
      'Stress Testing and Holter Monitoring',
      'Safety and Infection Control',
      'Professional and Legal Responsibilities',
    ],
    modules: [
      {
        title: 'The Cardiac System Essentials',
        description: 'Build the anatomy and electrical-conduction foundation every EKG technician needs.',
        lessons: [
          {
            title: 'Cardiac Anatomy for the EKG Technician',
            minutes: 25,
            intro: [
              'The heart is a four-chambered pump whose right side moves blood to the lungs and whose left side pushes blood to the body. The atria receive returning blood while the ventricles generate the pressure that moves it forward. Valves between the chambers keep flow one-directional, and the coronary arteries feed the heart muscle itself.',
              'For the EKG technician, the key idea is that the heart\u2019s mechanical pumping follows its electrical signaling. When heart muscle is deprived of oxygen — for example by a blocked coronary artery — the electrical pattern changes in recognizable ways. Knowing which walls of the heart each lead views helps you understand what a tracing is telling the care team.',
            ],
            sections: [
              {
                heading: 'Structures to Know',
                bullets: [
                  'Right atrium and right ventricle handle oxygen-poor blood returning from the body.',
                  'Left ventricle is the thickest chamber and drives systemic circulation.',
                  'Coronary arteries supply the heart muscle; blockage produces ischemic changes on the EKG.',
                  'The pericardium is the protective sac surrounding the heart.',
                ],
              },
              {
                heading: 'Why Anatomy Matters at the Bedside',
                paragraphs: [
                  'Lead placement decisions, tracing review, and escalation of abnormal findings all depend on knowing which region of the heart is being observed. A technician who understands anatomy can connect an unexpected pattern to a plausible cause and communicate it clearly to the nurse or provider.',
                ],
              },
            ],
            keyPoints: [
              'The heart has four chambers; the left ventricle does the most work.',
              'Mechanical pumping follows electrical signaling.',
              'Coronary artery disease produces recognizable EKG changes.',
              'Anatomy knowledge supports accurate lead placement and reporting.',
            ],
            callout: {
              variant: 'tip',
              title: 'Study habit',
              text: 'Sketch the heart from memory once a day and label the chambers, valves, and conduction pathway — retrieval practice beats rereading.',
            },
          },
          {
            title: 'The Cardiac Conduction System',
            minutes: 25,
            intro: [
              'The heart\u2019s rhythm originates in the sinoatrial (SA) node, the natural pacemaker located in the right atrium. The impulse spreads across the atria, pauses briefly at the atrioventricular (AV) node, then travels rapidly through the bundle of His, bundle branches, and Purkinje fibers. This sequence produces the coordinated contraction seen as a normal tracing.',
              'Each step of the pathway maps to a feature on the EKG: atrial depolarization creates the P wave, ventricular depolarization creates the QRS complex, and ventricular repolarization creates the T wave. When any link in the chain fails, backup pacemaker sites take over at slower intrinsic rates, which changes the tracing in predictable ways.',
            ],
            sections: [
              {
                heading: 'Conduction Pathway in Order',
                steps: [
                  'SA node fires, setting the pace (typically 60–100 beats per minute).',
                  'Impulse spreads through the atria, producing the P wave.',
                  'AV node delays the impulse briefly, allowing ventricular filling.',
                  'Impulse travels through the bundle of His and bundle branches.',
                  'Purkinje fibers distribute the signal, producing the QRS complex and ventricular contraction.',
                ],
              },
              {
                heading: 'Backup Pacemakers',
                bullets: [
                  'AV junction can pace at 40–60 beats per minute if the SA node fails.',
                  'Ventricular tissue can pace at 20–40 beats per minute as a last resort.',
                  'Escape rhythms appear on the tracing as slow, often wide complexes.',
                ],
              },
            ],
            keyPoints: [
              'The SA node is the heart\u2019s primary pacemaker.',
              'The AV node delay protects ventricular filling time.',
              'P wave, QRS complex, and T wave correspond to depolarization and repolarization events.',
              'Lower pacemaker sites fire at slower intrinsic rates.',
            ],
            callout: {
              variant: 'exam',
              title: 'Exam focus',
              text: 'Be able to state intrinsic rates for the SA node, AV junction, and ventricles, and match each waveform to its electrical event.',
            },
          },
        ],
      },
      {
        title: 'EKG Equipment and Lead Placement',
        description: 'Learn the machine, the cables, and the precise electrode positions that produce diagnostic-quality tracings.',
        lessons: [
          {
            title: 'The 12-Lead System and Electrode Placement',
            minutes: 30,
            intro: [
              'A standard 12-lead EKG uses ten electrodes — four on the limbs and six across the chest — to create twelve electrical views of the heart. The limb electrodes go on the arms and legs, while the precordial electrodes (V1 through V6) are placed at exact chest landmarks. Even a small displacement of the chest electrodes can distort the tracing and mimic disease.',
              'Consistent landmarking is a hands-on skill. V1 sits at the fourth intercostal space just right of the sternum, V2 mirrors it on the left, and V4 anchors the midclavicular line at the fifth intercostal space before V3 is placed between V2 and V4. Technicians count rib spaces carefully and re-check placement whenever a tracing looks unexpectedly different from a patient\u2019s prior study.',
            ],
            sections: [
              {
                heading: 'Precordial Placement Sequence',
                steps: [
                  'Locate the sternal angle and count down to the fourth intercostal space for V1 and V2.',
                  'Place V4 at the fifth intercostal space, midclavicular line.',
                  'Place V3 midway between V2 and V4.',
                  'Place V5 at the anterior axillary line and V6 at the midaxillary line, level with V4.',
                  'Confirm all electrodes are flat, secure, and free of tension on the cables.',
                ],
              },
              {
                heading: 'Common Placement Errors',
                bullets: [
                  'Reversed limb electrodes produce an upside-down lead I pattern.',
                  'Chest electrodes placed too high flatten or invert normal progression.',
                  'Loose electrodes create wandering baselines and false alarms.',
                ],
              },
            ],
            keyPoints: [
              'Ten electrodes create twelve standard views of the heart.',
              'V4 anchors chest placement before V3, V5, and V6.',
              'Reversed limb leads are a common and correctable error.',
              'Always compare a surprising tracing against prior studies before escalating.',
            ],
          },
          {
            title: 'Machine Operation and Tracing Quality',
            minutes: 20,
            intro: [
              'Modern EKG machines digitize, filter, and print the tracing within seconds, but the technician controls the quality of what the machine receives. Standard settings run the paper at 25 millimeters per second with a calibration of 10 millimeters per millivolt. Knowing how to adjust gain, speed, and filters — and when not to — separates a diagnostic tracing from a misleading one.',
              'Before every study, confirm patient demographics, check battery and paper supply, and inspect cables for damage. Many machines flag poor electrode contact; treat those alerts as a prompt to re-prep the site rather than override them. A repeatable pre-study routine prevents most quality problems before they happen.',
            ],
            sections: [
              {
                heading: 'Standard Settings',
                bullets: [
                  'Paper speed: 25 mm per second is the default for routine tracings.',
                  'Calibration: 10 mm per millivolt is standard gain.',
                  'Half-gain or double-gain is used only when complexes are unusually large or small, and must be noted.',
                  'Filters reduce noise but excessive filtering can mask true waveform detail.',
                ],
              },
              {
                heading: 'Pre-Study Quality Checklist',
                steps: [
                  'Verify patient identity with two identifiers.',
                  'Inspect cables, electrodes, and machine status.',
                  'Prepare skin sites and place electrodes using landmarks.',
                  'Review the tracing before ending the study; repeat if quality is poor.',
                ],
              },
            ],
            keyPoints: [
              'Default speed and calibration are 25 mm/sec and 10 mm/mV.',
              'Technician technique determines tracing quality.',
              'Machine alerts should trigger re-preparation, not workarounds.',
              'A consistent pre-study routine prevents most errors.',
            ],
          },
        ],
      },
      {
        title: 'The Normal Sinus Rhythm',
        description: 'Define normal so abnormal findings stand out immediately.',
        lessons: [
          {
            title: 'Reading a Strip Systematically',
            minutes: 25,
            intro: [
              'Every rhythm strip is read the same way: rate, rhythm regularity, P waves, PR interval, and QRS duration. A systematic approach prevents the most common beginner error — jumping to a dramatic diagnosis while missing the basics. Normal sinus rhythm has a rate of 60–100 beats per minute, regular intervals, a P wave before every QRS, a normal PR interval, and a narrow QRS complex.',
              'Rate can be estimated quickly by counting large boxes between R waves and dividing into 300, or by counting complexes in a six-second strip and multiplying by ten. Practicing both methods until they are automatic is the foundation of all rhythm interpretation work.',
            ],
            sections: [
              {
                heading: 'The Five-Step Strip Review',
                steps: [
                  'Measure the heart rate.',
                  'Assess rhythm regularity by comparing R-R intervals.',
                  'Look for a P wave before each QRS complex.',
                  'Measure the PR interval (normal: 0.12–0.20 seconds).',
                  'Measure the QRS duration (normal: under 0.12 seconds).',
                ],
              },
              {
                heading: 'Rate Calculation Methods',
                bullets: [
                  'Large-box method: 300 divided by large boxes between R waves.',
                  'Six-second method: count QRS complexes in 6 seconds and multiply by 10.',
                  'Small-box counting gives the most precise measurement when needed.',
                ],
              },
            ],
            keyPoints: [
              'Always interpret strips in the same fixed sequence.',
              'Normal sinus rhythm: rate 60–100, regular, P before every QRS.',
              'PR interval of 0.12–0.20 seconds is normal.',
              'QRS under 0.12 seconds indicates normal ventricular conduction.',
            ],
            callout: {
              variant: 'exam',
              title: 'Exam focus',
              text: 'Memorize the five criteria of normal sinus rhythm — most rhythm questions start from this baseline.',
            },
          },
          {
            title: 'Sinus Variations: Bradycardia and Tachycardia',
            minutes: 20,
            intro: [
              'Sinus rhythms that fall outside the 60–100 range are named sinus bradycardia and sinus tachycardia. Both keep the normal pattern — a P wave before every QRS and normal intervals — but the rate changes the clinical meaning. A resting athlete\u2019s heart rate of 48 may be perfectly healthy, while the same rate in a dizzy patient needs prompt escalation.',
              'Context is everything. Fever, pain, anxiety, exertion, and some medications raise the rate; sleep, athletic conditioning, and other medications lower it. The technician\u2019s role is to produce a clean tracing, measure accurately, and report rate extremes and symptoms to the care team promptly.',
            ],
            sections: [
              {
                heading: 'Comparing the Two',
                bullets: [
                  'Sinus bradycardia: sinus rhythm under 60 beats per minute.',
                  'Sinus tachycardia: sinus rhythm over 100 beats per minute.',
                  'Both show normal P waves, PR intervals, and QRS complexes.',
                  'Symptoms — not the number alone — drive urgency.',
                ],
              },
              {
                heading: 'Scenario: Intake Vitals',
                paragraphs: [
                  'During a routine pre-procedure EKG, your patient mentions feeling lightheaded, and the tracing shows sinus bradycardia at 44 beats per minute. The correct response is to keep the patient safe and reclined, verify the tracing quality, and notify the nurse immediately rather than simply filing the study as complete.',
                ],
              },
            ],
            keyPoints: [
              'Sinus bradycardia is under 60 bpm; sinus tachycardia is over 100 bpm.',
              'Both retain normal waveform relationships.',
              'Patient symptoms determine how urgently a finding is escalated.',
              'Report rate extremes with symptoms to the care team promptly.',
            ],
          },
        ],
      },
      {
        title: 'Measuring Waves and Intervals',
        description: 'Measure PR intervals, QRS complexes, and QT intervals with grid-paper precision.',
        lessons: [
          {
            title: 'Grid Paper and Interval Measurement',
            minutes: 25,
            intro: [
              'EKG paper is a measurement tool: each small box is 0.04 seconds wide, and each large box of five small boxes is 0.20 seconds. Vertically, ten millimeters equal one millivolt at standard calibration. Intervals are measured from the start of one waveform to the start of the next, and accuracy matters because treatment decisions can hinge on a few small boxes.',
              'The PR interval runs from the start of the P wave to the start of the QRS complex, and the QT interval runs from the start of the QRS to the end of the T wave. Because the QT shortens as heart rate rises, it is reported corrected for rate. Technicians should be able to measure both intervals and recognize when they fall outside normal limits.',
            ],
            sections: [
              {
                heading: 'Normal Values at a Glance',
                bullets: [
                  'PR interval: 0.12–0.20 seconds (3–5 small boxes).',
                  'QRS duration: under 0.12 seconds (under 3 small boxes).',
                  'QT interval: varies with rate; corrected QT is generally under 0.44–0.46 seconds.',
                  'Small box: 0.04 seconds; large box: 0.20 seconds.',
                ],
              },
              {
                heading: 'Why Prolonged Intervals Matter',
                paragraphs: [
                  'A PR interval beyond 0.20 seconds indicates delayed conduction through the AV node, and a wide QRS suggests the impulse is not traveling the normal pathway. A prolonged corrected QT is clinically important because it is associated with dangerous ventricular rhythms, so it is always worth flagging to the care team.',
                ],
              },
            ],
            keyPoints: [
              'One small box equals 0.04 seconds.',
              'PR interval over 0.20 seconds signals first-degree delay.',
              'QRS at or above 0.12 seconds signals abnormal ventricular conduction.',
              'QT must be interpreted relative to heart rate.',
            ],
          },
          {
            title: 'ST Segments and Waveform Abnormalities',
            minutes: 25,
            intro: [
              'The ST segment — the flat line between the QRS complex and the T wave — is one of the most clinically sensitive parts of the tracing. Elevation or depression of the ST segment relative to the baseline can indicate heart muscle injury or inadequate blood flow. Technicians do not diagnose, but they must recognize a dramatically abnormal segment and escalate without delay.',
              'T-wave inversion, peaked T waves, and abnormal Q waves are additional features the care team uses to localize problems. Your job is to ensure the tracing is technically perfect when these findings appear, because artifact and poor placement can imitate serious disease and trigger unnecessary alarms.',
            ],
            sections: [
              {
                heading: 'Escalation-Worthy Findings',
                bullets: [
                  'ST elevation or marked depression compared with the baseline.',
                  'New bundle-branch-block–pattern wide QRS complexes.',
                  'Deep, wide Q waves not present on prior tracings.',
                  'Any abnormal tracing paired with chest pain or shortness of breath.',
                ],
              },
              {
                heading: 'Technician Responsibilities',
                bullets: [
                  'Verify electrode placement and repeat the tracing if quality is in doubt.',
                  'Never announce a diagnosis to the patient.',
                  'Bring abnormal tracings to the nurse or provider immediately when symptoms are present.',
                ],
              },
            ],
            keyPoints: [
              'The ST segment is compared against the tracing baseline.',
              'Technicians recognize and escalate; they do not diagnose.',
              'Artifact can mimic ischemic changes — verify technique first.',
              'Symptoms plus an abnormal tracing mean immediate escalation.',
            ],
            callout: {
              variant: 'warning',
              title: 'Safety',
              text: 'A patient reporting chest pain during a study is never left alone; stay with the patient and call for help per facility protocol.',
            },
          },
        ],
      },
      {
        title: 'Recognizing Common Arrhythmias',
        description: 'Identify the atrial and ventricular rhythms technicians encounter most often.',
        lessons: [
          {
            title: 'Atrial Rhythms: Fibrillation, Flutter, and Ectopy',
            minutes: 30,
            intro: [
              'Atrial fibrillation is the most common sustained arrhythmia technicians will see: an irregularly irregular rhythm with no distinct P waves and a wavy baseline. Atrial flutter, by contrast, shows a regular sawtooth pattern of flutter waves, often with a consistent conduction ratio. Premature atrial contractions are early beats with an abnormally shaped P wave followed by a normal QRS.',
              'The clinical stakes differ: atrial fibrillation carries a stroke risk because blood can pool in the quivering atria, so new findings are always reported. When you interpret a strip, say what you see — rate, regularity, P waves — and let the systematic description lead you to the rhythm name.',
            ],
            sections: [
              {
                heading: 'Strip Recognition Drill',
                bullets: [
                  'Irregularly irregular with no P waves: atrial fibrillation.',
                  'Sawtooth baseline, often regular ventricular response: atrial flutter.',
                  'Early beat with odd P wave, then normal QRS: premature atrial contraction.',
                  'Fast but otherwise normal sinus pattern: sinus tachycardia.',
                ],
              },
              {
                heading: 'Scenario: Telemetry Review',
                paragraphs: [
                  'A telemetry patient\u2019s rhythm changes from regular sinus to irregularly irregular with a rate of 130 and no visible P waves. You confirm electrode contact, assess the patient for dizziness or chest discomfort, and notify the nurse immediately with the rate and your observations.',
                ],
              },
            ],
            keyPoints: [
              'Atrial fibrillation: irregularly irregular, no P waves.',
              'Atrial flutter: sawtooth flutter waves.',
              'New atrial fibrillation is always reported promptly.',
              'Describe rate, regularity, and P waves before naming a rhythm.',
            ],
            callout: {
              variant: 'exam',
              title: 'Exam focus',
              text: 'Practice distinguishing fibrillation from flutter on printed strips — the difference is regularity and the shape of the baseline.',
            },
          },
          {
            title: 'Ventricular Rhythms and Heart Blocks',
            minutes: 30,
            intro: [
              'Ventricular rhythms are the most dangerous patterns on the monitor. Ventricular tachycardia is a rapid run of wide, bizarre QRS complexes, and ventricular fibrillation is chaotic electrical activity with no organized complexes at all — a cardiac arrest rhythm requiring immediate emergency response. Premature ventricular contractions are isolated wide, early beats that may be harmless alone but warrant reporting when frequent.',
              'Heart blocks are conduction failures between atria and ventricles. In first-degree block every impulse still arrives but the PR interval is prolonged; in second-degree block some beats are dropped; in third-degree block atria and ventricles beat independently. Recognizing dropped beats and AV dissociation is a core strip-reading skill.',
            ],
            sections: [
              {
                heading: 'Emergency Response Sequence',
                steps: [
                  'Recognize a pulseless-arrest pattern such as ventricular fibrillation.',
                  'Activate the emergency response system immediately per facility protocol.',
                  'Begin or support CPR as trained and directed.',
                  'Bring the emergency cart and defibrillator to the bedside.',
                  'Document times and events as directed by the response team.',
                ],
              },
              {
                heading: 'Block Recognition Clues',
                bullets: [
                  'First-degree: every P conducts, PR over 0.20 seconds.',
                  'Second-degree: occasional P waves not followed by a QRS.',
                  'Third-degree: P waves and QRS complexes march independently.',
                ],
              },
            ],
            keyPoints: [
              'Ventricular fibrillation is an arrest rhythm — activate emergency response.',
              'Wide, fast, regular complexes suggest ventricular tachycardia.',
              'Dropped beats define second-degree heart block.',
              'Independent atrial and ventricular rates define third-degree block.',
            ],
            callout: {
              variant: 'safety',
              title: 'Critical',
              text: 'Always check the patient, not just the monitor — artifact can imitate lethal rhythms, and a real arrest can hide behind a loose electrode excuse.',
            },
          },
        ],
      },
      {
        title: 'Artifact Recognition and Troubleshooting',
        description: 'Separate real cardiac signals from the interference that corrupts them.',
        lessons: [
          {
            title: 'The Four Classic Artifacts',
            minutes: 25,
            intro: [
              'Most tracing problems come from four sources: muscle tremor, patient movement, loose electrodes, and electrical interference. Muscle tremor produces a fuzzy, irregular baseline; wandering baseline comes from respiration or poor electrode contact; 60-cycle interference from nearby electrical equipment creates a fine, uniform fuzz on every lead. Recognizing the pattern tells you the fix.',
              'Troubleshooting is systematic. Re-prep the skin, replace dried electrodes, route cables away from power cords, and ask the patient to relax and breathe normally. A technician who can clean up a noisy tracing saves the provider time and prevents misread studies.',
            ],
            sections: [
              {
                heading: 'Pattern-to-Cause Matching',
                bullets: [
                  'Fine uniform fuzz on all leads: 60-cycle electrical interference.',
                  'Irregular jagged baseline: muscle tremor or patient movement.',
                  'Slow drifting baseline: respiration or loose electrode.',
                  'Sudden spike across all leads: electrode disconnect or cable tug.',
                ],
              },
              {
                heading: 'Fixes That Work',
                steps: [
                  'Check electrode contact and replace any that are dry or peeling.',
                  'Re-prep oily or hairy sites per protocol.',
                  'Reposition cables away from electrical equipment.',
                  'Ask the patient to rest quietly; warm a shivering patient.',
                  'Repeat the tracing and compare quality.',
                ],
              },
            ],
            keyPoints: [
              'Artifact patterns point directly to their causes.',
              '60-cycle interference is fine and uniform; tremor is jagged and irregular.',
              'Re-prep and re-place before repeating any study.',
              'Never submit a poor-quality tracing when a fix is available.',
            ],
          },
          {
            title: 'Artifact Versus Arrhythmia',
            minutes: 20,
            intro: [
              'The highest-stakes troubleshooting decision is telling artifact from a real arrhythmia. Motion artifact can look alarmingly like ventricular tachycardia on a single lead, but the patient is awake, talking, and has a pulse. The rule is simple and absolute: assess the patient first, then the machine.',
              'Cross-checking leads helps. A true ventricular rhythm appears across multiple leads, while movement artifact often shows normal QRS complexes marching through the noise on at least one clean lead. When in doubt, treat the patient as the source of truth and escalate per protocol.',
            ],
            sections: [
              {
                heading: 'Decision Tree: Alarming Strip',
                steps: [
                  'Look at the patient: responsive, breathing, with a pulse?',
                  'If the patient is unresponsive and pulseless, activate emergency response.',
                  'If the patient is stable, inspect electrodes and cables for the artifact source.',
                  'Compare multiple leads for normal complexes inside the noise.',
                  'Re-run the tracing after correcting the cause.',
                ],
              },
              {
                heading: 'Scenario: Shaking Hands',
                paragraphs: [
                  'An elderly patient with a resting tremor produces a strip that resembles chaotic ventricular activity on two chest leads. You note the patient is conversing normally, find clean QRS complexes on the limb leads, support the patient\u2019s arms on pillows, and repeat the tracing with an acceptable result.',
                ],
              },
            ],
            keyPoints: [
              'Assess the patient before trusting an alarming strip.',
              'True arrhythmias appear across multiple leads.',
              'Stable patients with ugly strips usually mean artifact.',
              'Document the correction and repeat the study.',
            ],
          },
        ],
      },
      {
        title: 'Patient Preparation and Communication',
        description: 'Prepare patients physically and emotionally for accurate, comfortable studies.',
        lessons: [
          {
            title: 'Skin Preparation and Patient Positioning',
            minutes: 20,
            intro: [
              'Skin preparation is the single biggest controllable factor in tracing quality. Oils, lotions, sweat, and hair all interfere with electrode contact, so sites are cleaned and dried, and hair is clipped — never shaved with a razor that could nick skin — per facility protocol. Electrodes are applied firmly with full gel contact.',
              'Positioning matters too. The patient rests supine with arms relaxed at the sides, and the chest is exposed only as much as needed, with draping to protect privacy and dignity. Explaining each step before touching the patient reduces anxiety, which in turn reduces muscle-tremor artifact.',
            ],
            sections: [
              {
                heading: 'Preparation Checklist',
                steps: [
                  'Introduce yourself and verify two patient identifiers.',
                  'Explain the procedure and answer questions.',
                  'Clean and dry electrode sites; clip hair if required.',
                  'Apply electrodes using bony landmarks.',
                  'Position the patient supine and comfortable before recording.',
                ],
              },
              {
                heading: 'Dignity and Comfort',
                bullets: [
                  'Drape to expose only necessary areas.',
                  'Warm the room and the patient when possible.',
                  'Ask before touching; narrate each step.',
                ],
              },
            ],
            keyPoints: [
              'Skin prep drives tracing quality more than any machine setting.',
              'Clip rather than shave hair at electrode sites.',
              'Supine, relaxed positioning minimizes artifact.',
              'Clear explanation lowers anxiety and improves results.',
            ],
          },
          {
            title: 'Communicating With Anxious and Special-Needs Patients',
            minutes: 20,
            intro: [
              'Many patients arrive anxious about what the test might reveal. A calm, confident technician who explains that an EKG records the heart\u2019s electrical activity — it does not deliver electricity — defuses the most common fear immediately. Use plain language, check understanding, and never promise results or interpret the tracing for the patient.',
              'Special populations need adapted approaches. Pediatric patients do better with demonstrations on a parent or doll; patients with hearing loss need face-to-face speech and written cues; patients with limited English need qualified interpreters rather than family members for consent-related communication. Document any accommodations you use.',
            ],
            sections: [
              {
                heading: 'Communication Do\u2019s',
                bullets: [
                  'Use plain language: "stickers that listen to your heart."',
                  'Check understanding with teach-back questions.',
                  'Reassure that the test is painless and quick.',
                  'Route result questions to the provider.',
                ],
              },
              {
                heading: 'Adapting the Approach',
                bullets: [
                  'Children: demonstrate first, involve caregivers.',
                  'Hearing loss: face the patient, use written instructions.',
                  'Language barriers: use qualified interpreter services.',
                  'Cognitive impairment: short sentences, one step at a time.',
                ],
              },
            ],
            keyPoints: [
              'Patients often fear the machine "shocks" them — correct this early.',
              'Never interpret results for the patient.',
              'Adapt technique for age, hearing, language, and cognition.',
              'Document accommodations in the study record.',
            ],
          },
        ],
      },
      {
        title: 'Stress Testing and Holter Monitoring',
        description: 'Support exercise testing and ambulatory monitoring with correct setup and observation.',
        lessons: [
          {
            title: 'Exercise Stress Test Support',
            minutes: 25,
            intro: [
              'An exercise stress test records the EKG and blood pressure while the patient walks a treadmill or pedals a bike through staged workloads. The technician prepares a modified lead set on the torso — moving limb electrodes to the trunk to reduce motion artifact — obtains baseline tracings, and monitors continuously during exercise. Preparation quality determines whether the tracing remains readable at peak exertion.',
              'Safety observation is the technician\u2019s other core duty. Chest pain, severe shortness of breath, dizziness, dangerous rhythm changes, or an abnormal blood-pressure response are reasons the supervising provider stops the test. Knowing the stop criteria and speaking up immediately is part of the role.',
            ],
            sections: [
              {
                heading: 'Technician Workflow',
                steps: [
                  'Verify consent and review pre-test instructions with the patient.',
                  'Prepare skin thoroughly and place torso-mounted electrodes.',
                  'Record baseline tracings and resting vital signs.',
                  'Monitor tracing and patient continuously during each stage.',
                  'Assist with recovery monitoring until vitals return near baseline.',
                ],
              },
              {
                heading: 'Stop-Test Warning Signs',
                bullets: [
                  'Chest pain or pressure during exercise.',
                  'Marked drop in blood pressure with rising workload.',
                  'Sustained ventricular rhythms on the monitor.',
                  'Patient request to stop or signs of exhaustion.',
                ],
              },
            ],
            keyPoints: [
              'Limb electrodes move to the torso for exercise testing.',
              'Baseline tracings and vitals precede every test.',
              'Technicians monitor both the tracing and the patient.',
              'Know stop criteria and escalate immediately.',
            ],
            callout: {
              variant: 'safety',
              title: 'Safety',
              text: 'Emergency equipment must be present and checked before any stress test begins — verify it as part of setup, every time.',
            },
          },
          {
            title: 'Holter and Event Monitors',
            minutes: 20,
            intro: [
              'Holter monitors record the EKG continuously for 24 to 48 hours or longer while the patient goes about normal life. The technician\u2019s setup — meticulous skin prep, secure electrodes, strain-relieved cables — determines whether days of data are usable. Patients receive a diary to log symptoms and activities so events can be matched to the recording.',
              'Patient teaching makes or breaks ambulatory monitoring. Patients must keep the electrodes dry, avoid magnets and certain equipment, note every symptom with the time, and return the unit on schedule. Clear written instructions plus a demonstration dramatically improve data quality.',
            ],
            sections: [
              {
                heading: 'Setup Priorities',
                bullets: [
                  'Aggressive skin prep for multi-day electrode adhesion.',
                  'Secure cables to prevent tug artifact during movement.',
                  'Confirm the recorder is running before the patient leaves.',
                ],
              },
              {
                heading: 'Patient Diary Instructions',
                bullets: [
                  'Record every symptom with the exact time.',
                  'Note activities such as stairs, meals, and sleep.',
                  'Keep the unit dry — no showers while wearing it.',
                  'Press the event button when symptoms occur, if equipped.',
                ],
              },
            ],
            keyPoints: [
              'Holter setup quality determines days of data usability.',
              'The symptom diary links events to the recording.',
              'Moisture is the enemy of ambulatory electrodes.',
              'Written and demonstrated instructions improve compliance.',
            ],
          },
        ],
      },
      {
        title: 'Safety, Infection Control, and Emergencies',
        description: 'Apply standard precautions and respond correctly to patient emergencies during testing.',
        lessons: [
          {
            title: 'Infection Control in the EKG Lab',
            minutes: 20,
            intro: [
              'EKG is a noninvasive procedure, but equipment touches every patient, so standard precautions apply to every encounter. Hand hygiene before and after contact, disinfection of cables and machines between patients, and single-use electrodes are the daily routine. Reusable items such as blood-pressure cuffs follow facility disinfection schedules.',
              'Patients in isolation require the same tracing quality with added protection. Follow the posted precaution signage, don the required protective equipment before entering, and bring only necessary supplies into the room. Portable studies in isolation rooms are common — plan your supply kit so nothing needs to leave and re-enter.',
            ],
            sections: [
              {
                heading: 'Daily Infection-Control Routine',
                bullets: [
                  'Hand hygiene before and after every patient contact.',
                  'Disinfect machine surfaces and cables between patients.',
                  'Use single-patient electrodes; discard after use.',
                  'Follow posted isolation precautions exactly.',
                ],
              },
              {
                heading: 'Scenario: Isolation Room Portable Study',
                paragraphs: [
                  'You are called for a portable EKG on a patient under contact precautions. You gather all supplies before entering, gown and glove per signage, complete the tracing, disinfect the machine per protocol before removing it from the room, and discard disposables inside the room.',
                ],
              },
            ],
            keyPoints: [
              'Standard precautions apply to every patient, every time.',
              'Cables and machines are disinfected between patients.',
              'Electrodes are single-use.',
              'Isolation studies require planning and full compliance with signage.',
            ],
          },
          {
            title: 'Responding to Emergencies During Testing',
            minutes: 25,
            intro: [
              'EKG technicians are present at moments when patients are most vulnerable, and emergencies during testing are a recognized reality of the role. The technician\u2019s first responsibilities are to stay with the patient, call for help using the facility\u2019s emergency system, and support the response within their training — including CPR when indicated and certified.',
              'After the event, accurate documentation matters: times, observations, and actions taken. A calm, procedural response protects the patient and creates the record the care team and the facility need. Regular drills keep these steps automatic.',
            ],
            sections: [
              {
                heading: 'Emergency Response Sequence',
                steps: [
                  'Assess responsiveness and breathing; stay with the patient.',
                  'Activate the facility emergency response system.',
                  'Begin CPR if trained, certified, and indicated.',
                  'Retrieve or direct others to emergency equipment.',
                  'Document the event timeline afterward.',
                ],
              },
              {
                heading: 'What to Document',
                bullets: [
                  'Time symptoms began and time help was called.',
                  'Patient condition and vital observations.',
                  'Actions taken and by whom.',
                  'The tracing, saved and labeled per protocol.',
                ],
              },
            ],
            keyPoints: [
              'Stay with the patient; never leave to find help alone.',
              'Activate the emergency system first, then assist within training.',
              'The tracing from an event is preserved as part of the record.',
              'Drills make emergency response automatic.',
            ],
            callout: {
              variant: 'safety',
              title: 'Critical',
              text: 'Know your facility\u2019s emergency number and cart locations on day one of any assignment — before you need them.',
            },
          },
        ],
      },
      {
        title: 'Documentation and Professional Practice',
        description: 'Complete accurate records and work within the legal and ethical boundaries of the role.',
        lessons: [
          {
            title: 'Documentation, Orders, and the Health Record',
            minutes: 20,
            intro: [
              'Every EKG begins with an order and ends with a documented, correctly labeled study in the health record. The technician verifies the order, matches the study to the right patient using two identifiers, attaches any required notes about symptoms or tracing quality, and confirms the study reaches the interpreting provider. A beautiful tracing filed under the wrong patient is a serious error.',
              'Documentation of unusual circumstances — a repeat tracing, a symptomatic episode, equipment problems — protects everyone. Notes are factual, brief, and free of interpretation: record what you observed and did, not what you think it means.',
            ],
            sections: [
              {
                heading: 'Study Completion Checklist',
                steps: [
                  'Verify the order and patient identity with two identifiers.',
                  'Confirm tracing quality before ending the study.',
                  'Attach factual notes about symptoms or technical issues.',
                  'Transmit or file the study per workflow and confirm receipt.',
                ],
              },
              {
                heading: 'Documentation Rules',
                bullets: [
                  'Record facts, not interpretations.',
                  'Use facility-approved abbreviations only.',
                  'Correct errors per policy — never delete or obscure entries.',
                ],
              },
            ],
            keyPoints: [
              'Two identifiers tie every study to the right patient.',
              'Notes are factual and brief.',
              'Escalated findings are documented with times and names.',
              'A misfiled study is a reportable patient-safety event.',
            ],
          },
          {
            title: 'Scope of Practice, Privacy, and Professionalism',
            minutes: 20,
            intro: [
              'EKG technicians work within a defined scope: they acquire and prepare tracings, recognize and escalate abnormal findings, and never diagnose or advise patients about results. Patient questions about what the tracing shows are warmly redirected to the provider. Staying inside scope protects patients and the technician alike.',
              'Health information is confidential under privacy law and professional ethics. Tracings are discussed only with the care team, screens are shielded from public view, and conversations about patients never happen in elevators or cafeterias. Professional reliability — punctuality, clean equipment, honest reporting — is the foundation of the role\u2019s trust.',
            ],
            sections: [
              {
                heading: 'Inside Your Scope',
                bullets: [
                  'Acquire high-quality tracings and ambulatory setups.',
                  'Recognize abnormal patterns and escalate them.',
                  'Explain procedures, not results, to patients.',
                ],
              },
              {
                heading: 'Privacy Essentials',
                bullets: [
                  'Discuss patient information only with the care team.',
                  'Shield screens and printouts from public view.',
                  'Access records only for patients in your assignment.',
                ],
              },
            ],
            keyPoints: [
              'Technicians escalate findings; providers interpret them.',
              'Redirect result questions to the provider graciously.',
              'Confidentiality applies everywhere, not just the lab.',
              'Reliability and honesty define professional reputation.',
            ],
            callout: {
              variant: 'exam',
              title: 'Exam focus',
              text: 'Scope-of-practice questions test the boundary between technician and provider — when in doubt, "notify the provider" is usually the right answer.',
            },
          },
        ],
      },
    ],
    questions: [
      { domain: 'Cardiac Anatomy and Physiology', difficulty: 'easy', q: 'Which chamber of the heart pumps oxygenated blood into the systemic circulation?', choices: ['Right atrium', 'Left ventricle', 'Right ventricle', 'Left atrium'], answer: 1, why: 'The left ventricle has the thickest wall because it generates the pressure needed to move blood through the body.' },
      { domain: 'Cardiac Anatomy and Physiology', difficulty: 'medium', q: 'What is the primary role of the coronary arteries?', choices: ['Carry blood from the heart to the lungs', 'Supply oxygenated blood to the heart muscle itself', 'Return venous blood to the right atrium', 'Regulate the heart\u2019s electrical conduction'], answer: 1, why: 'Coronary arteries perfuse the myocardium; blockage produces ischemic changes visible on the EKG.' },
      { domain: 'EKG Equipment and Lead Placement', difficulty: 'easy', q: 'How many electrodes are used to record a standard 12-lead EKG?', choices: ['12', '6', '10', '4'], answer: 2, why: 'Ten electrodes — four limb and six precordial — combine to produce twelve standard views.' },
      { domain: 'EKG Equipment and Lead Placement', difficulty: 'medium', q: 'Where is the V4 electrode placed?', choices: ['Fourth intercostal space, right sternal border', 'Fifth intercostal space, midclavicular line', 'Anterior axillary line, level with V5', 'Midway between V2 and V4'], answer: 1, why: 'V4 anchors the precordial series at the fifth intercostal space on the midclavicular line.' },
      { domain: 'EKG Equipment and Lead Placement', difficulty: 'medium', type: 'scenario', q: 'A tracing shows an inverted pattern in lead I that was normal on this patient\u2019s prior study. The patient feels fine. What is the most likely cause?', choices: ['A new cardiac injury', 'Reversed arm electrodes', 'A failing machine battery', 'Incorrect paper speed'], answer: 1, why: 'Reversed limb electrodes classically invert lead I; verify placement before assuming a clinical change.' },
      { domain: 'Rhythm Interpretation', difficulty: 'easy', q: 'Which rhythm is described as irregularly irregular with no distinct P waves?', choices: ['Atrial flutter', 'Sinus tachycardia', 'Atrial fibrillation', 'First-degree heart block'], answer: 2, why: 'Atrial fibrillation produces chaotic atrial activity, an undulating baseline, and an irregularly irregular ventricular response.' },
      { domain: 'Rhythm Interpretation', difficulty: 'hard', q: 'A strip shows P waves marching through at their own rate with no fixed relationship to the QRS complexes. Which rhythm does this describe?', choices: ['Second-degree heart block', 'Sinus arrhythmia', 'First-degree heart block', 'Third-degree heart block'], answer: 3, why: 'Complete AV dissociation — independent atrial and ventricular rates — defines third-degree (complete) heart block.' },
      { domain: 'Rhythm Interpretation', difficulty: 'medium', type: 'scenario', q: 'During a routine tracing, your patient reports lightheadedness and the strip shows sinus rhythm at 44 beats per minute. What should you do first?', choices: ['File the study and let the patient leave', 'Keep the patient reclined and notify the nurse', 'Repeat the tracing at double gain', 'Ask the patient to walk to raise the heart rate'], answer: 1, why: 'A symptomatic low rate is escalated immediately while keeping the patient safe and reclined.' },
      { domain: 'Waveforms and Measurements', difficulty: 'easy', q: 'On standard EKG paper, one small box represents how much time?', choices: ['0.20 seconds', '0.04 seconds', '0.12 seconds', '1.0 second'], answer: 1, why: 'Each small box is 0.04 seconds; five small boxes make one large box of 0.20 seconds.' },
      { domain: 'Waveforms and Measurements', difficulty: 'medium', q: 'What is the normal range for the PR interval?', choices: ['0.06–0.10 seconds', '0.20–0.40 seconds', '0.12–0.20 seconds', '0.32–0.44 seconds'], answer: 2, why: 'The PR interval normally runs 0.12–0.20 seconds; prolongation beyond 0.20 indicates first-degree delay.' },
      { domain: 'Artifact Recognition', difficulty: 'easy', q: 'A fine, uniform fuzz appearing equally on all leads most likely indicates what?', choices: ['Muscle tremor', 'Wandering baseline from respiration', '60-cycle electrical interference', 'A loose chest electrode'], answer: 2, why: 'Electrical interference from nearby equipment produces a characteristic fine, even fuzz across all leads.' },
      { domain: 'Artifact Recognition', difficulty: 'medium', type: 'scenario', q: 'A monitor suddenly shows chaotic wide complexes, but the patient is awake and asking for water. What is the best first action?', choices: ['Activate the emergency response system', 'Begin chest compressions', 'Assess the patient and check electrode contact', 'Increase the monitor gain'], answer: 2, why: 'Assess the patient first — a stable, responsive patient with an alarming strip usually means artifact, often from a loose electrode.' },
      { domain: 'Patient Preparation and Communication', difficulty: 'easy', q: 'Why is hair clipped rather than shaved at electrode sites?', choices: ['Clipping is faster', 'Shaving with a razor can nick the skin and create infection risk', 'Clipped hair conducts electricity better', 'Shaving voids the equipment warranty'], answer: 1, why: 'Razor nicks break the skin barrier; clipping preserves skin integrity while allowing electrode contact.' },
      { domain: 'Patient Preparation and Communication', difficulty: 'medium', q: 'A patient asks you, "Does this test mean something is wrong with my heart?" What is the best response?', choices: ['Share what the tracing appears to show', 'Explain the procedure and note that the provider will discuss results', 'Tell the patient not to worry', 'Suggest the patient look up results online'], answer: 1, why: 'Technicians explain procedures and redirect result interpretation to the provider, staying within scope.' },
      { domain: 'Stress Testing and Holter Monitoring', difficulty: 'medium', q: 'Why are limb electrodes moved to the torso for an exercise stress test?', choices: ['It is more comfortable for the patient', 'It reduces motion artifact during exercise', 'It improves calibration accuracy', 'It is required by the treadmill manufacturer'], answer: 1, why: 'Torso-mounted electrodes keep cables away from moving limbs, preserving a readable tracing at exertion.' },
      { domain: 'Stress Testing and Holter Monitoring', difficulty: 'medium', q: 'Which instruction is essential for a patient wearing a Holter monitor?', choices: ['Shower as usual each morning', 'Record symptoms and activities with times in the diary', 'Remove electrodes each night', 'Avoid all physical activity'], answer: 1, why: 'The symptom-and-activity diary lets analysts match events to the recorded tracing.' },
      { domain: 'Safety and Infection Control', difficulty: 'easy', q: 'Which items are single-use in the EKG lab?', choices: ['Lead cables', 'Electrodes', 'The machine cart', 'Blood-pressure cuffs'], answer: 1, why: 'Electrodes are single-patient items; cables and machines are disinfected between patients.' },
      { domain: 'Safety and Infection Control', difficulty: 'medium', q: 'A patient becomes unresponsive and pulseless mid-tracing. What is the correct sequence?', choices: ['Document first, then call for help', 'Finish the tracing, then assess', 'Call the provider\u2019s office', 'Activate emergency response, then support CPR as trained'], answer: 3, why: 'Activating the emergency system immediately, then assisting within training, is the standard response.' },
      { domain: 'Professional and Legal Responsibilities', difficulty: 'easy', q: 'Which of the following is within an EKG technician\u2019s scope of practice?', choices: ['Diagnosing arrhythmias for the patient', 'Adjusting cardiac medications', 'Acquiring tracings and escalating abnormal findings', 'Interpreting stress test results'], answer: 2, why: 'Technicians acquire quality tracings, recognize abnormalities, and escalate — interpretation belongs to the provider.' },
      { domain: 'Professional and Legal Responsibilities', difficulty: 'medium', q: 'How should a technician verify a study is matched to the correct patient?', choices: ['Ask the patient their first name only', 'Use two patient identifiers', 'Check the room number', 'Rely on the order printout alone'], answer: 1, why: 'Two identifiers (such as name and date of birth) are the standard safeguard against misfiled studies.' },
    ],
  },
  // ======================================================================
  // 2. Patient Care Technician Readiness
  // ======================================================================
  {
    id: 'track_pct',
    name: 'Patient Care Technician Readiness',
    shortName: 'Patient Care Tech',
    category: 'healthcare',
    weeks: 12,
    description:
      'Build the bedside skills hospitals hire for — vital signs, patient mobility, hygiene care, specimen support, and EKG and phlebotomy fundamentals in one readiness pathway.',
    credentialFocus: 'Mapped to CPCT/A-style competency domains',
    schoolOverview:
      'A broad bedside-readiness pathway combining clinical skills, safety, and professional practice with documented competency evidence per student. Cohort reports support clinical-placement sign-off and program review.',
    studentOverview:
      'Learn the hands-on skills patient care technicians use every shift — taking vitals, helping patients move safely, supporting daily care, and assisting with specimens and EKGs. Scenario practice shows you what the job really feels like.',
    prerequisites: 'None. A health-science foundations course is helpful but not required.',
    alignmentNotes:
      'Modules and practice banks are mapped to CPCT/A-style competency domains across patient care, safety, phlebotomy and EKG support, and professional responsibilities. All content is original.',
    domains: [
      'Vital Signs and Monitoring',
      'Patient Mobility and Positioning',
      'Activities of Daily Living',
      'Infection Control',
      'Specimen Collection Support',
      'EKG and Equipment Support',
      'Nutrition and Intake-Output',
      'Safety and Emergency Response',
      'Communication and Professionalism',
      'Legal and Ethical Responsibilities',
    ],
    modules: [
      {
        title: 'Foundations of Patient Care',
        description: 'Understand the care team, the technician role, and the patient-centered mindset.',
        lessons: [
          {
            title: 'The Role of the Patient Care Technician',
            minutes: 20,
            intro: [
              'Patient care technicians provide the hands-on daily care that keeps patients safe, comfortable, and dignified — bathing, feeding, repositioning, measuring vitals, and reporting changes. They work under the direction of licensed nurses and are often the team members who spend the most time with each patient. That proximity makes them the unit\u2019s early-warning system.',
              'Understanding scope is foundational. Technicians perform delegated tasks within their training, never make nursing judgments, and report observations rather than interpret them. A clear grasp of "observe, perform, report" keeps patients safe and technicians within professional boundaries.',
            ],
            sections: [
              {
                heading: 'Daily Responsibilities',
                bullets: [
                  'Measure and record vital signs and intake-output.',
                  'Assist with bathing, grooming, toileting, and mobility.',
                  'Support specimen collection, EKGs, and blood glucose checks as trained.',
                  'Report changes in patient condition promptly.',
                ],
              },
              {
                heading: 'Working Within the Team',
                paragraphs: [
                  'The nurse delegates tasks and remains responsible for the nursing plan of care; the technician completes assigned tasks accurately, asks when unsure, and communicates observations clearly. Reliable follow-through and honest reporting build the trust that good units run on.',
                ],
              },
            ],
            keyPoints: [
              'Technicians provide direct daily care under nursing direction.',
              'Proximity to patients makes technicians key observers.',
              'Observe, perform, report — never interpret or diagnose.',
              'Ask when unsure; guessing is never acceptable.',
            ],
          },
          {
            title: 'Patient-Centered Care and Dignity',
            minutes: 20,
            intro: [
              'Patient-centered care treats each person as a partner, not a task list. Simple practices — knocking before entering, introducing yourself, explaining what you are about to do, and honoring preferences about care — measurably improve comfort and cooperation. Dignity is preserved through privacy, modesty draping, and respectful language at all times.',
              'Cultural and personal differences shape how patients experience care. Dietary practices, touch preferences, family involvement, and communication styles vary, and the technician\u2019s job is to accommodate them within policy, not to judge them. When unsure, ask the patient or the nurse.',
            ],
            sections: [
              {
                heading: 'Dignity-Preserving Habits',
                bullets: [
                  'Knock, introduce yourself, and verify identity every time.',
                  'Explain each task before beginning.',
                  'Drape to expose only what the task requires.',
                  'Honor preferences whenever policy allows.',
                ],
              },
              {
                heading: 'Respecting Differences',
                bullets: [
                  'Ask about cultural or religious care preferences.',
                  'Use qualified interpreters for language needs.',
                  'Never judge a patient\u2019s choices or lifestyle.',
                ],
              },
            ],
            keyPoints: [
              'Dignity practices are clinical skills, not extras.',
              'Explain before you touch — every time.',
              'Accommodate cultural preferences within policy.',
              'Ask rather than assume.',
            ],
          },
        ],
      },
      {
        title: 'Vital Signs Mastery',
        description: 'Measure temperature, pulse, respiration, blood pressure, and oxygen saturation accurately.',
        lessons: [
          {
            title: 'Measuring Temperature, Pulse, and Respiration',
            minutes: 25,
            intro: [
              'Temperature, pulse, and respiration are measured with attention to route, rhythm, and context. Oral temperatures are delayed after hot or cold intake; pulse is counted for rate and assessed for rhythm and strength; respirations are counted without announcing it, because patients alter their breathing when they know they are being watched. Normal adult ranges — roughly 60–100 for pulse and 12–20 for respirations — anchor your sense of what needs reporting.',
              'Technique consistency makes trend data meaningful. Measure at the same site, document the route, and note anything that affects the reading, such as recent activity or oxygen therapy. A single abnormal value is a report; a pattern of values tells the story.',
            ],
            sections: [
              {
                heading: 'Normal Adult Reference Ranges',
                bullets: [
                  'Temperature: about 36.1–37.2°C (97–99°F) depending on route.',
                  'Pulse: 60–100 beats per minute.',
                  'Respirations: 12–20 breaths per minute.',
                  'Report values outside facility-defined parameters promptly.',
                ],
              },
              {
                heading: 'Technique Reminders',
                bullets: [
                  'Wait 15–30 minutes after eating or drinking for oral temperatures.',
                  'Count respirations discreetly, ideally right after the pulse.',
                  'Document the route and any influencing factors.',
                ],
              },
            ],
            keyPoints: [
              'Count respirations without telling the patient.',
              'Normal adult pulse is 60–100; respirations 12–20.',
              'Document route and context for every measurement.',
              'Trends matter more than isolated readings.',
            ],
            callout: {
              variant: 'exam',
              title: 'Exam focus',
              text: 'Know normal adult ranges for every vital sign — range questions appear in nearly every assessment.',
            },
          },
          {
            title: 'Blood Pressure and Oxygen Saturation',
            minutes: 25,
            intro: [
              'Blood pressure measurement depends on correct cuff size and arm position: the cuff bladder should wrap about 80 percent of the arm, placed on a bare arm supported at heart level. Too-small cuffs read falsely high; unsupported arms and talking during the reading distort results. Systolic and diastolic values are recorded with the arm and position used.',
              'Pulse oximetry estimates oxygen saturation using a finger or earlobe sensor, with normal readings generally 95 percent or higher. Cold fingers, nail polish, poor circulation, and motion all degrade the signal, so a questionable number calls for warming the hand, changing sites, and reassessing the patient — not just accepting the display.',
            ],
            sections: [
              {
                heading: 'Accurate Blood Pressure Steps',
                steps: [
                  'Seat the patient quietly with the arm supported at heart level.',
                  'Select a cuff sized to the arm.',
                  'Place the cuff on bare skin above the elbow.',
                  'Keep the patient still and silent during the reading.',
                  'Record both values with arm and position.',
                ],
              },
              {
                heading: 'Oximetry Pitfalls',
                bullets: [
                  'Nail polish and artificial nails can falsely lower readings.',
                  'Cold or poorly perfused fingers weaken the signal.',
                  'Motion artifact mimics low saturation.',
                  'Always look at the patient, not just the number.',
                ],
              },
            ],
            keyPoints: [
              'Cuff size and arm position determine accuracy.',
              'A too-small cuff reads falsely high.',
              'Normal oxygen saturation is generally 95% or above.',
              'Treat the patient, not the display — verify questionable readings.',
            ],
          },
        ],
      },
      {
        title: 'Mobility, Transfers, and Positioning',
        description: 'Move and position patients safely using body mechanics and assist devices.',
        lessons: [
          {
            title: 'Body Mechanics and Safe Transfers',
            minutes: 25,
            intro: [
              'Safe patient handling protects two people at once: the patient and the technician. Core body mechanics — wide base of support, bent knees, straight back, load close to the body — apply to every lift and transfer. When a transfer exceeds what one person can do safely, the correct move is to get help or use a mechanical lift, never to muscle through.',
              'Gait belts give the technician a secure grip during assisted standing and walking without grabbing the patient\u2019s arms, which can injure fragile skin and joints. Before any transfer, assess the patient\u2019s weight-bearing status, review the care plan, clear the path, and lock bed and wheelchair brakes.',
            ],
            sections: [
              {
                heading: 'Transfer Safety Checklist',
                steps: [
                  'Review the care plan for weight-bearing status and assist level.',
                  'Clear the path and position equipment.',
                  'Lock bed and wheelchair brakes.',
                  'Apply a gait belt for assisted standing or ambulation.',
                  'Get help or a lift device for anything beyond safe limits.',
                ],
              },
              {
                heading: 'Body Mechanics Basics',
                bullets: [
                  'Feet shoulder-width apart for a stable base.',
                  'Bend the knees, not the back.',
                  'Hold the load close to your body.',
                  'Pivot with your feet — never twist while lifting.',
                ],
              },
            ],
            keyPoints: [
              'Good body mechanics protect patient and technician alike.',
              'Gait belts replace grabbing arms during transfers.',
              'Locked brakes are non-negotiable.',
              'Ask for help or use a lift — never lift beyond your limit.',
            ],
            callout: {
              variant: 'safety',
              title: 'Safety',
              text: 'If a patient begins to fall, ease them to the floor while protecting the head — do not try to catch their full weight.',
            },
          },
          {
            title: 'Positioning and Pressure Injury Prevention',
            minutes: 25,
            intro: [
              'Immobility is dangerous: sustained pressure over bony prominences cuts off blood flow and begins tissue damage within hours. Repositioning on the schedule set in the care plan — commonly every two hours for at-risk patients — is one of the highest-value tasks a technician performs. Pillows and wedges keep heels floated and hips aligned.',
              'Common positions serve different needs: supine for rest, Fowler\u2019s for breathing and eating, lateral for pressure relief, and prone in specific clinical situations. Every repositioning includes a skin check over the sacrum, heels, hips, and elbows, with redness that does not fade reported to the nurse promptly.',
            ],
            sections: [
              {
                heading: 'Positions and Their Uses',
                bullets: [
                  'Supine: flat on the back for rest and exams.',
                  'Fowler\u2019s: head of bed elevated 45–60 degrees for meals and breathing.',
                  'Lateral: side-lying with support pillows for pressure relief.',
                  'Sims\u2019: semi-prone position used for certain care tasks.',
                ],
              },
              {
                heading: 'Skin Check Priorities',
                bullets: [
                  'Sacrum, heels, hips, elbows, and the back of the head.',
                  'Non-blanching redness is reported immediately.',
                  'Keep skin clean and dry; moisture accelerates breakdown.',
                  'Document position changes and skin findings.',
                ],
              },
            ],
            keyPoints: [
              'Reposition at-risk patients about every two hours per care plan.',
              'Float heels and pad bony prominences.',
              'Check skin at every position change.',
              'Non-blanching redness is an early pressure injury — report it.',
            ],
          },
        ],
      },
      {
        title: 'Activities of Daily Living',
        description: 'Support bathing, grooming, toileting, and dressing with skill and dignity.',
        lessons: [
          {
            title: 'Bathing and Personal Hygiene',
            minutes: 20,
            intro: [
              'Hygiene care is health care: bathing maintains skin integrity, prevents infection, and gives the technician a structured opportunity to assess the whole patient. Whether a bed bath or assisted shower, the routine follows clean-to-dirty order, keeps the patient warm and covered, and never leaves a dependent patient unattended on a shower chair.',
              'Oral care, hair care, nail care, and perineal care each have their own precautions. Unconscious patients receive oral care with the head turned to prevent aspiration; diabetic patients\u2019 feet are inspected and never soaked without an order; perineal care proceeds front to back. These details are the substance of competent daily care.',
            ],
            sections: [
              {
                heading: 'Bed Bath Priorities',
                bullets: [
                  'Work from clean areas to less clean areas.',
                  'Keep the patient covered; expose one area at a time.',
                  'Change water when cool or soiled.',
                  'Inspect skin throughout and report concerns.',
                ],
              },
              {
                heading: 'Special Precautions',
                bullets: [
                  'Turn the head for oral care in unconscious patients.',
                  'Inspect diabetic feet daily; report redness or sores.',
                  'Perineal care proceeds front to back.',
                  'Never leave a dependent patient alone in the shower.',
                ],
              },
            ],
            keyPoints: [
              'Bathing is both hygiene and assessment time.',
              'Clean-to-dirty order prevents cross-contamination.',
              'Aspiration precautions apply to oral care.',
              'Skin findings are documented and reported.',
            ],
          },
          {
            title: 'Toileting, Elimination, and Dressing',
            minutes: 20,
            intro: [
              'Helping patients toilet promptly and safely preserves dignity and prevents falls — many hospital falls happen when patients try to reach the bathroom alone. Answer call lights quickly, offer scheduled toileting, and stay within reach for patients with balance problems. Bedpans and urinals are offered with privacy and positioned to protect skin.',
              'Dressing techniques adapt to weakness: dress the weak side first, undress the strong side first. Intake and output measurement, including urine and emesis, is part of elimination care and must be recorded accurately because providers use those totals for treatment decisions.',
            ],
            sections: [
              {
                heading: 'Fall-Prevention Toileting Habits',
                bullets: [
                  'Answer call lights immediately.',
                  'Offer scheduled toileting rounds.',
                  'Stay within reach of unsteady patients.',
                  'Keep the path to the bathroom clear and lit.',
                ],
              },
              {
                heading: 'Dressing Rule of Thumb',
                paragraphs: [
                  'For a patient with one-sided weakness, dress the affected side first and undress it last — this uses the strong side\u2019s mobility and protects the weak limb from strain.',
                ],
              },
            ],
            keyPoints: [
              'Unassisted bathroom trips are a major fall risk.',
              'Scheduled toileting prevents accidents and falls.',
              'Dress the weak side first; undress it last.',
              'Record all measured output accurately.',
            ],
          },
        ],
      },
      {
        title: 'Infection Control in Daily Care',
        description: 'Apply hand hygiene, protective equipment, and isolation precautions in every task.',
        lessons: [
          {
            title: 'Hand Hygiene and Standard Precautions',
            minutes: 20,
            intro: [
              'Hand hygiene is the single most effective infection-control practice in healthcare. Wash or sanitize before and after every patient contact, after glove removal, and after touching the patient\u2019s environment. Gloves supplement — never replace — hand hygiene, because contamination happens during removal as easily as during wear.',
              'Standard precautions treat all blood and body fluids as potentially infectious, for every patient, every time. That means gloves for fluid contact, masks and eye protection for splash risk, and immediate, honest reporting of any exposure such as a needlestick or splash to mucous membranes.',
            ],
            sections: [
              {
                heading: 'Hand Hygiene Moments',
                bullets: [
                  'Before and after every patient contact.',
                  'After removing gloves.',
                  'After touching the patient\u2019s surroundings.',
                  'Before clean tasks such as feeding.',
                ],
              },
              {
                heading: 'Protective Equipment Choices',
                bullets: [
                  'Gloves for any body-fluid contact.',
                  'Mask and eye protection for splash risk.',
                  'Gown when clothing contamination is likely.',
                  'Report exposures immediately — every time.',
                ],
              },
            ],
            keyPoints: [
              'Hand hygiene is the top infection-control practice.',
              'Gloves never replace hand hygiene.',
              'Standard precautions apply to every patient.',
              'Report exposures immediately and honestly.',
            ],
            callout: {
              variant: 'safety',
              title: 'Safety',
              text: 'A needlestick or fluid splash to the eyes is an occupational exposure — wash the site and report it at once, per facility protocol.',
            },
          },
          {
            title: 'Isolation Precautions and Clean Technique',
            minutes: 25,
            intro: [
              'Isolation precautions add organism-specific rules on top of standard precautions. Contact precautions call for gown and gloves on entry; droplet precautions add a mask; airborne precautions require a respirator and a special ventilation room. The signage on the door is the instruction sheet — read it before every entry, not just the first.',
              'Donning and doffing order matters because most contamination happens during removal. A common sequence is gown, mask, eye protection, gloves on the way in, and gloves, eye protection, gown, mask on the way out — with hand hygiene at each transition. Practice the sequence until it is automatic.',
            ],
            sections: [
              {
                heading: 'Precaution Types at a Glance',
                bullets: [
                  'Contact: gown and gloves on entry.',
                  'Droplet: surgical mask on entry.',
                  'Airborne: fit-tested respirator and airborne infection isolation room.',
                  'Always follow the posted signage and facility policy.',
                ],
              },
              {
                heading: 'Decision Tree: Entering an Isolation Room',
                steps: [
                  'Read the precaution signage at the door.',
                  'Gather everything needed before entering.',
                  'Perform hand hygiene and don required equipment.',
                  'Complete care; minimize what enters and leaves.',
                  'Doff in the correct order and perform hand hygiene.',
                ],
              },
            ],
            keyPoints: [
              'Isolation signage is the entry instruction sheet.',
              'Contact, droplet, and airborne precautions differ.',
              'Most contamination happens during removal of protective equipment.',
              'Practice donning and doffing until automatic.',
            ],
          },
        ],
      },
      {
        title: 'Specimen Collection Support',
        description: 'Collect and handle urine, stool, and sputum specimens, and support blood collection.',
        lessons: [
          {
            title: 'Non-Blood Specimens: Urine, Stool, and Sputum',
            minutes: 25,
            intro: [
              'Specimens only help diagnosis when they are collected correctly, labeled at the bedside, and delivered promptly. A clean-catch urine specimen requires cleaning before collection and catching the midstream portion; a 24-hour urine collection starts with an empty bladder and ends exactly 24 hours later. Every specimen container is labeled with two identifiers at the bedside, never later and never away from the patient.',
              'Stool and sputum specimens have their own rules. Stool samples avoid contamination with urine or toilet water; sputum must come from a deep cough, not saliva, ideally first thing in the morning. When collection conditions are wrong, the honest move is to re-collect rather than submit a compromised sample.',
            ],
            sections: [
              {
                heading: 'Collection Essentials',
                bullets: [
                  'Label every container at the bedside with two identifiers.',
                  'Clean-catch urine: clean first, collect midstream.',
                  'Sputum means deep-cough secretions, not spit.',
                  'Deliver specimens promptly per policy.',
                ],
              },
              {
                heading: 'Scenario: The Mislabeled Cup',
                paragraphs: [
                  'You realize a urine specimen was labeled in the hallway from memory. The correct action is to discard it, explain briefly to the patient, and re-collect with bedside labeling — an unlabeled or mislabeled specimen can never be trusted.',
                ],
              },
            ],
            keyPoints: [
              'Bedside labeling with two identifiers is mandatory.',
              'Midstream technique defines a clean-catch urine.',
              'Sputum is coughed from deep in the lungs.',
              'When in doubt, re-collect rather than guess.',
            ],
            callout: {
              variant: 'exam',
              title: 'Exam focus',
              text: 'Bedside labeling and the clean-catch sequence are classic test items — know the order cold.',
            },
          },
          {
            title: 'Supporting Blood Collection',
            minutes: 25,
            intro: [
              'Patient care technicians often perform or assist with venipuncture depending on training and facility policy. Correct order of draw protects specimen integrity because tube additives can carry over between tubes: blood cultures first, then coagulation tubes, serum tubes, and additive tubes such as EDTA last. Tubes are filled to their stated volume and inverted gently — never shaken.',
              'Patient identification is the safety-critical step: two identifiers, matched to the requisition, before the needle ever comes out. After collection, pressure is applied to the site, the patient is checked for bleeding or dizziness, and specimens are labeled at the bedside and transported per policy.',
            ],
            sections: [
              {
                heading: 'Order-of-Draw Drill',
                steps: [
                  'Blood culture tubes or bottles first.',
                  'Coagulation tubes (light blue top).',
                  'Serum tubes with or without clot activator.',
                  'Heparin tubes (green top).',
                  'EDTA tubes (lavender top) near the end.',
                ],
              },
              {
                heading: 'Safety Checks',
                bullets: [
                  'Two identifiers matched to the requisition.',
                  'Gentle inversion, never shaking.',
                  'Pressure on the site until bleeding stops.',
                  'Bedside labeling before leaving the patient.',
                ],
              },
            ],
            keyPoints: [
              'Order of draw prevents additive carryover.',
              'Identification happens before the needle, not after.',
              'Shaking tubes damages blood cells.',
              'Check the patient before leaving the bedside.',
            ],
          },
        ],
      },
      {
        title: 'EKG and Equipment Support',
        description: 'Acquire basic EKGs and manage bedside equipment safely.',
        lessons: [
          {
            title: 'Basic EKG Acquisition for Technicians',
            minutes: 25,
            intro: [
              'Many patient care technician roles include acquiring 12-lead EKGs, and the fundamentals mirror the dedicated EKG workflow: identify the patient, prepare the skin, place electrodes by landmark, and review tracing quality before ending the study. Good preparation eliminates most artifacts before they start.',
              'The technician recognizes emergency patterns and symptomatic patients, not diagnoses. Chest pain during a tracing, a dramatically abnormal rhythm, or a sudden change in the patient\u2019s condition means staying with the patient and calling for help per facility protocol.',
            ],
            sections: [
              {
                heading: 'Acquisition Checklist',
                steps: [
                  'Verify identity with two identifiers.',
                  'Explain the procedure and position the patient supine.',
                  'Prepare skin and place electrodes by landmark.',
                  'Review the tracing; repeat if quality is poor.',
                  'Report symptoms or alarming patterns immediately.',
                ],
              },
              {
                heading: 'Red Flags During a Tracing',
                bullets: [
                  'New chest pain or shortness of breath.',
                  'Sudden dizziness or loss of consciousness.',
                  'Chaotic or very rapid wide-complex patterns on the monitor.',
                ],
              },
            ],
            keyPoints: [
              'Technician technique determines tracing quality.',
              'Landmark placement beats estimation every time.',
              'Symptoms during a study mean stay and call for help.',
              'Technicians escalate; they do not interpret.',
            ],
          },
          {
            title: 'Bedside Equipment and Oxygen Safety',
            minutes: 20,
            intro: [
              'Patient rooms hold equipment the technician uses constantly: beds, call lights, oxygen delivery devices, suction, and mobility aids. Competence means knowing normal operation, checking function before use, and reporting malfunctions by removing the device from service and tagging it — never improvising repairs.',
              'Oxygen is a medication with a prescribed flow rate, and it supports combustion. Technicians confirm the ordered delivery device and rate, keep flames and sparking equipment away, and never adjust flow rates on their own. Alarms on pumps and monitors are investigated, not silenced.',
            ],
            sections: [
              {
                heading: 'Equipment Rules That Protect Patients',
                bullets: [
                  'Check function before use, every time.',
                  'Tag and remove malfunctioning equipment from service.',
                  'Never silence an alarm without investigating the cause.',
                  'Keep call lights within patient reach.',
                ],
              },
              {
                heading: 'Oxygen Safety',
                bullets: [
                  'Oxygen flow rates are prescribed — never adjust independently.',
                  'Keep open flames and sparks away from oxygen.',
                  'Confirm device and rate against the order.',
                ],
              },
            ],
            keyPoints: [
              'Inspect equipment before every use.',
              'Tag broken equipment out of service.',
              'Oxygen is a medication — rates are prescribed.',
              'Alarms are answered, not silenced.',
            ],
            callout: {
              variant: 'safety',
              title: 'Safety',
              text: 'A silenced alarm has delayed real emergencies — find the cause first, then address it.',
            },
          },
        ],
      },
      {
        title: 'Nutrition, Feeding, and Intake-Output',
        description: 'Support nutrition safely and record intake and output accurately.',
        lessons: [
          {
            title: 'Meal Assistance and Diet Orders',
            minutes: 20,
            intro: [
              'Diet orders are prescriptions, and matching the tray to the order is a safety step: a patient on a cardiac diet who receives a regular tray, or a diabetic patient served a dessert tray, faces real harm. Technicians check the diet order before serving, note what percentage of the meal was eaten, and report poor intake.',
              'Feeding assistance requires positioning the patient upright — head of bed elevated at least 45 to 90 degrees — offering small bites, allowing time to swallow, and staying attentive throughout. Patients with swallowing precautions have specific orders about liquid consistency and technique that are followed exactly.',
            ],
            sections: [
              {
                heading: 'Tray-to-Order Safety',
                bullets: [
                  'Check the diet order before serving every tray.',
                  'Report wrong trays before the patient eats.',
                  'Record percentage eaten honestly.',
                  'Report poor intake across meals.',
                ],
              },
              {
                heading: 'Safe Feeding Practice',
                steps: [
                  'Elevate the head of the bed at least 45 degrees.',
                  'Offer small bites at the patient\u2019s pace.',
                  'Watch for coughing or pocketing of food.',
                  'Keep the patient upright 30–60 minutes after the meal if at aspiration risk.',
                ],
              },
            ],
            keyPoints: [
              'Diet orders are prescriptions — check before serving.',
              'Upright positioning prevents aspiration.',
              'Small bites and patience protect swallowing.',
              'Document intake accurately.',
            ],
            callout: {
              variant: 'warning',
              title: 'Watch for',
              text: 'Coughing during meals, a wet-sounding voice, or food pocketed in the cheek can signal swallowing difficulty — stop feeding and notify the nurse.',
            },
          },
          {
            title: 'Measuring and Recording Intake and Output',
            minutes: 20,
            intro: [
              'Intake and output totals guide fluid-balance decisions, so accuracy is clinical, not clerical. Intake includes everything the patient drinks plus tube feedings and intravenous fluids as directed by policy; output includes urine, emesis, and drainage. Amounts are measured in milliliters using graduated containers, never estimated by eye.',
              'Household conversions help at the bedside: an ounce is about 30 milliliters, a standard cup about 240. Running totals are recorded per shift, and significant imbalances — far more out than in, or the reverse — are reported to the nurse.',
            ],
            sections: [
              {
                heading: 'What Counts',
                bullets: [
                  'Intake: oral fluids, ice chips (half volume), tube feedings, IV fluids per policy.',
                  'Output: urine, emesis, liquid stool, wound drainage.',
                  'Measure with graduated containers in milliliters.',
                ],
              },
              {
                heading: 'Quick Conversions',
                bullets: [
                  '1 ounce ≈ 30 mL.',
                  '1 cup ≈ 240 mL.',
                  'Ice chips count at about half their volume.',
                ],
              },
            ],
            keyPoints: [
              'Intake-output records drive treatment decisions.',
              'Measure in milliliters; never estimate.',
              'One ounce equals about 30 milliliters.',
              'Report significant imbalances promptly.',
            ],
          },
        ],
      },
      {
        title: 'Safety and Emergency Response',
        description: 'Prevent falls, respond to emergencies, and keep the care environment safe.',
        lessons: [
          {
            title: 'Fall Prevention and Environment Safety',
            minutes: 25,
            intro: [
              'Falls are the most common inpatient safety event, and most are preventable. The core bundle is unglamorous and effective: bed low and locked, call light in reach, nonslip footwear, clear pathways, scheduled toileting, and supervision for high-risk patients. Fall-risk status is communicated at handoff and posted per policy.',
              'After any fall, the priorities are assessment and reporting, not blame. Do not move the patient until the nurse assesses them, call for help, note exactly what you observed, and complete the required event documentation honestly. Facilities improve safety by analyzing honest reports.',
            ],
            sections: [
              {
                heading: 'The Fall-Prevention Bundle',
                bullets: [
                  'Bed in lowest position, brakes locked.',
                  'Call light and personal items within reach.',
                  'Nonslip footwear for every ambulation.',
                  'Scheduled toileting rounds.',
                  'Clear, dry, well-lit pathways.',
                ],
              },
              {
                heading: 'After a Fall',
                steps: [
                  'Stay with the patient; do not move them.',
                  'Call the nurse immediately.',
                  'Note time, position, and what the patient reports.',
                  'Complete event documentation honestly.',
                ],
              },
            ],
            keyPoints: [
              'Most falls are preventable with basic measures.',
              'Toileting needs drive many falls — round proactively.',
              'Never move a fallen patient before assessment.',
              'Honest event reports make units safer.',
            ],
          },
          {
            title: 'Emergency Response Basics',
            minutes: 25,
            intro: [
              'When a patient is found unresponsive, the technician\u2019s role follows a clear sequence: check responsiveness and breathing, activate the emergency response system, and begin CPR within your training and certification while directing others to bring equipment. Speed matters — brain injury begins within minutes without circulation.',
              'Other emergencies follow the same pattern of recognize, call, and support: choking is managed with abdominal thrusts for a conscious adult who cannot speak or cough; severe bleeding is controlled with direct pressure; a seizure is managed by protecting the patient from injury, timing the event, and never restraining limbs or placing anything in the mouth.',
            ],
            sections: [
              {
                heading: 'Found-Unresponsive Sequence',
                steps: [
                  'Check responsiveness and breathing.',
                  'Activate the emergency response system.',
                  'Begin CPR as trained and certified.',
                  'Direct others to bring the emergency cart.',
                  'Note times for the record.',
                ],
              },
              {
                heading: 'Other Emergencies',
                bullets: [
                  'Choking: abdominal thrusts for a conscious obstructed adult.',
                  'Severe bleeding: firm direct pressure.',
                  'Seizure: protect from injury, time it, nothing in the mouth.',
                ],
              },
            ],
            keyPoints: [
              'Recognize, activate, support — in that order.',
              'CPR begins within minutes of arrest for best outcomes.',
              'Never restrain a seizing patient or force anything into the mouth.',
              'Documentation of times matters after every event.',
            ],
            callout: {
              variant: 'safety',
              title: 'Critical',
              text: 'Know your unit\u2019s emergency number and cart location before your first shift — orientation is the time to find them.',
            },
          },
        ],
      },
      {
        title: 'Communication and Professional Practice',
        description: 'Communicate within the care team and uphold legal and ethical standards.',
        lessons: [
          {
            title: 'Reporting and Handoff Communication',
            minutes: 20,
            intro: [
              'The technician\u2019s observations only protect patients when they reach the nurse clearly and quickly. Structured reporting — situation, background, assessment observations, and what you need — turns "something seems off" into actionable information. Reporting objective findings ("BP 88/50, patient pale and sweaty") beats conclusions ("looks bad") every time.',
              'Handoffs between shifts transfer responsibility, and sloppy handoffs lose patients\u2019 needs in the cracks. Listen actively, write down assignments and changes, ask clarifying questions, and repeat back critical items. What is not communicated is, practically, not done.',
            ],
            sections: [
              {
                heading: 'Reporting Objectively',
                bullets: [
                  'Report what you saw, heard, and measured.',
                  'Include vital signs and exact times.',
                  'State what you need: assessment, orders, help.',
                  'Avoid interpretations and labels.',
                ],
              },
              {
                heading: 'Handoff Habits',
                bullets: [
                  'Write down assignments and changes.',
                  'Ask until you understand your tasks.',
                  'Repeat back critical information.',
                ],
              },
            ],
            keyPoints: [
              'Objective observations beat vague impressions.',
              'Structured reporting gets faster action.',
              'Handoffs transfer responsibility — treat them seriously.',
              'Uncommunicated needs are unmet needs.',
            ],
          },
          {
            title: 'Legal and Ethical Boundaries',
            minutes: 20,
            intro: [
              'Technicians work inside a web of legal and ethical duties: patient privacy under federal law, consent before care, accurate documentation, and mandatory reporting of suspected abuse. Confidentiality means patient information is shared only with the care team — not family callers, not curious coworkers, not social media, ever.',
              'Patients have the right to refuse care, and the technician\u2019s job is to respect the refusal, inform the nurse, and never coerce. Documentation must be factual and timely — charting a task not done is falsification, and it endangers patients who rely on an accurate record.',
            ],
            sections: [
              {
                heading: 'Non-Negotiables',
                bullets: [
                  'Share patient information only with the care team.',
                  'Respect refusals of care; inform the nurse.',
                  'Document only tasks actually performed.',
                  'Report suspected abuse per mandatory-reporting policy.',
                ],
              },
              {
                heading: 'Scenario: The Family Caller',
                paragraphs: [
                  'A caller claims to be a patient\u2019s daughter and asks for an update. The correct response is to explain that you cannot share information and route the call to the nurse, who follows the facility\u2019s verification process — privacy rules apply even to genuine family.',
                ],
              },
            ],
            keyPoints: [
              'Privacy applies to family, friends, and social media alike.',
              'Patients may refuse care; report refusals to the nurse.',
              'Chart only what you actually did.',
              'Abuse reporting is a legal duty.',
            ],
            callout: {
              variant: 'exam',
              title: 'Exam focus',
              text: 'Ethics questions usually hinge on confidentiality, consent, and scope — choose the option that protects the patient and informs the nurse.',
            },
          },
        ],
      },
    ],
    questions: [
      { domain: 'Vital Signs and Monitoring', difficulty: 'easy', q: 'What is the normal adult resting pulse range?', choices: ['40–60 beats per minute', '60–100 beats per minute', '100–120 beats per minute', '120–140 beats per minute'], answer: 1, why: 'The normal adult resting pulse is 60–100 beats per minute.' },
      { domain: 'Vital Signs and Monitoring', difficulty: 'medium', q: 'Why should respirations be counted without telling the patient?', choices: ['It saves time', 'Patients unconsciously alter their breathing when aware', 'It is required by law', 'Talking raises the pulse rate'], answer: 1, why: 'Awareness changes breathing patterns, so counting discreetly preserves accuracy.' },
      { domain: 'Vital Signs and Monitoring', difficulty: 'medium', q: 'A blood pressure cuff that is too small for the patient\u2019s arm will produce a reading that is:', choices: ['Falsely low', 'Unchanged', 'Falsely high', 'Impossible to obtain'], answer: 2, why: 'An undersized cuff requires more pressure to occlude the artery, producing a falsely high reading.' },
      { domain: 'Patient Mobility and Positioning', difficulty: 'easy', q: 'Which device gives the technician a secure grip when helping a patient stand or walk?', choices: ['A draw sheet', 'A gait belt', 'A bed rail', 'A wrist restraint'], answer: 1, why: 'A gait belt provides a safe handhold and prevents grabbing the patient\u2019s arms.' },
      { domain: 'Patient Mobility and Positioning', difficulty: 'medium', type: 'scenario', q: 'During a transfer, a patient\u2019s knees buckle and they begin to slide toward the floor. What should you do?', choices: ['Try to lift them back to standing', 'Ease them to the floor, protecting the head, and call for help', 'Let go and call the nurse', 'Pull them up by the arms'], answer: 1, why: 'Guiding a falling patient to the floor while protecting the head prevents injury to both of you; never attempt to hold full body weight.' },
      { domain: 'Activities of Daily Living', difficulty: 'easy', q: 'When dressing a patient with right-sided weakness, which side is dressed first?', choices: ['The left side', 'Whichever side the patient prefers', 'The right (weak) side', 'It makes no difference'], answer: 2, why: 'Dress the weak side first and undress it last to protect the affected limb.' },
      { domain: 'Activities of Daily Living', difficulty: 'medium', q: 'When providing oral care to an unconscious patient, the head should be:', choices: ['Flat with a pillow', 'Turned to the side to prevent aspiration', 'Elevated fully upright', 'Hyperextended backward'], answer: 1, why: 'Side-turning lets fluids drain out of the mouth rather than into the airway.' },
      { domain: 'Infection Control', difficulty: 'easy', q: 'What is the single most effective practice for preventing the spread of infection?', choices: ['Wearing gloves', 'Hand hygiene', 'Wearing a mask', 'Disinfecting equipment weekly'], answer: 1, why: 'Hand hygiene before and after patient contact prevents more transmission than any other single practice.' },
      { domain: 'Infection Control', difficulty: 'medium', q: 'A patient\u2019s door shows airborne precaution signage. What must the technician wear?', choices: ['Gloves only', 'A surgical mask', 'A fit-tested respirator', 'A gown only'], answer: 2, why: 'Airborne precautions require a fit-tested respirator and an appropriate isolation room.' },
      { domain: 'Specimen Collection Support', difficulty: 'easy', q: 'Where and when should a specimen container be labeled?', choices: ['At the nurses\u2019 station after collection', 'At the bedside at the time of collection', 'In the laboratory', 'At the end of the shift'], answer: 1, why: 'Bedside labeling with two identifiers prevents misidentification errors.' },
      { domain: 'Specimen Collection Support', difficulty: 'hard', q: 'In the standard order of draw, which tube is collected first?', choices: ['EDTA (lavender top)', 'Blood culture', 'Serum separator', 'Heparin (green top)'], answer: 1, why: 'Blood cultures come first to protect sterility; additive tubes follow in a defined sequence to prevent carryover.' },
      { domain: 'EKG and Equipment Support', difficulty: 'medium', q: 'What should a technician do with a malfunctioning infusion pump?', choices: ['Reset it and keep using it', 'Silence the alarm', 'Remove it from service and tag it', 'Note it for the next shift'], answer: 2, why: 'Faulty equipment is removed from service and tagged so no one uses it before repair.' },
      { domain: 'EKG and Equipment Support', difficulty: 'medium', type: 'scenario', q: 'While you acquire an EKG, the patient reports new chest pressure. What is the correct response?', choices: ['Finish the tracing quickly and file it', 'Stop, stay with the patient, and call for help per protocol', 'Offer the patient water', 'Adjust the electrodes'], answer: 1, why: 'New chest pain during a study is an escalation event — stay with the patient and activate the response system.' },
      { domain: 'Nutrition and Intake-Output', difficulty: 'easy', q: 'One ounce of fluid equals approximately how many milliliters?', choices: ['10 mL', '15 mL', '30 mL', '60 mL'], answer: 2, why: 'The standard conversion is about 30 milliliters per ounce.' },
      { domain: 'Nutrition and Intake-Output', difficulty: 'medium', q: 'Before serving a meal tray, the technician should first:', choices: ['Open all containers for the patient', 'Verify the tray matches the diet order', 'Season the food', 'Lower the head of the bed'], answer: 1, why: 'Diet orders are prescriptions; a mismatched tray can cause real harm.' },
      { domain: 'Safety and Emergency Response', difficulty: 'easy', q: 'Which of the following is part of the basic fall-prevention bundle?', choices: ['Bed in the highest position', 'Bed low and locked with the call light in reach', 'Socks without grips', 'Dimming all lights at night'], answer: 1, why: 'A low, locked bed with the call light within reach is a core fall-prevention measure.' },
      { domain: 'Safety and Emergency Response', difficulty: 'medium', q: 'During a seizure, the technician should:', choices: ['Place a padded object in the patient\u2019s mouth', 'Restrain the limbs', 'Protect the patient from injury and time the event', 'Pour water on the patient\u2019s face'], answer: 2, why: 'Seizure care means protecting from injury and timing the event — never restrain or place anything in the mouth.' },
      { domain: 'Communication and Professionalism', difficulty: 'medium', q: 'Which report to the nurse is the most useful?', choices: ['"Room 12 looks bad."', '"Room 12\u2019s blood pressure is 88/50, and he is pale and sweaty."', '"Room 12 is probably dehydrated."', '"Room 12 needs something."'], answer: 1, why: 'Objective findings — measurements and observations — enable fast, appropriate action.' },
      { domain: 'Communication and Professionalism', difficulty: 'easy', q: 'A caller claiming to be family asks for a patient update. The technician should:', choices: ['Share basic information', 'Refuse and route the call to the nurse', 'Ask the caller to verify the patient\u2019s birthday', 'Take a message'], answer: 1, why: 'Privacy rules prohibit sharing patient information with callers; the nurse follows the facility verification process.' },
      { domain: 'Legal and Ethical Responsibilities', difficulty: 'easy', q: 'A competent patient refuses a bath. The technician should:', choices: ['Insist for infection-control reasons', 'Respect the refusal and inform the nurse', 'Chart the bath as completed', 'Ask the family to convince the patient'], answer: 1, why: 'Patients have the right to refuse care; the refusal is respected and reported.' },
      { domain: 'Legal and Ethical Responsibilities', difficulty: 'medium', q: 'Charting a task that was not actually performed is:', choices: ['Acceptable if done later', 'A minor documentation error', 'Falsification of the record', 'Standard practice on busy shifts'], answer: 2, why: 'Recording care not given is falsification — a serious legal and ethical violation that endangers patients.' },
    ],
  },
  // ======================================================================
  // 3. Pharmacy Technician Readiness
  // ======================================================================
  {
    id: 'track_pharm',
    name: 'Pharmacy Technician Readiness',
    shortName: 'Pharmacy Tech',
    category: 'healthcare',
    weeks: 14,
    description:
      'Prepare for the pharmacy counter and the cleanroom alike — medication safety, calculations, law, inventory, and sterile and nonsterile compounding fundamentals.',
    credentialFocus: 'Mapped to CPhT/ExCPT-style competency domains',
    schoolOverview:
      'A rigorous pharmacy technician pathway with calculations mastery, medication-safety drills, and law-and-ethics coverage aligned to national competency domains. Performance reports document readiness for externship and exam authorization.',
    studentOverview:
      'Learn to process prescriptions accurately, master pharmacy math, handle controlled substances correctly, and compound safely. Practice scenarios mirror the real workflow of community and hospital pharmacies.',
    prerequisites: 'None. Comfort with basic arithmetic is strongly recommended before the calculations module.',
    alignmentNotes:
      'Modules and practice banks are mapped to CPhT/ExCPT-style competency domains: medications, federal requirements, patient safety, and order processing. Content is original and does not reproduce any credentialing exam.',
    domains: [
      'Pharmacology and Medication Classifications',
      'Pharmacy Calculations',
      'Prescription Processing',
      'Medication Safety',
      'Pharmacy Law and Ethics',
      'Controlled Substances',
      'Sterile Compounding',
      'Nonsterile Compounding',
      'Inventory Management',
      'Billing and Reimbursement',
    ],
    modules: [
      {
        title: 'Foundations of Pharmacy Practice',
        description: 'Understand the pharmacy team, practice settings, and the technician\u2019s scope.',
        lessons: [
          {
            title: 'The Pharmacy Team and Practice Settings',
            minutes: 20,
            intro: [
              'Pharmacy technicians work under the supervision of a licensed pharmacist in community, hospital, long-term-care, and specialty settings. Their core work — receiving prescriptions, entering data, counting and labeling medications, managing inventory, and supporting compounding — frees the pharmacist for clinical review and patient counseling. The pharmacist\u2019s final verification is the legal and safety backbone of every dispensed product.',
              'Scope boundaries are explicit. Technicians may not counsel patients, make clinical judgments, or perform the final check on a prescription. When a patient asks a clinical question — about side effects, interactions, or how to take a medication — the technician routes it to the pharmacist promptly and graciously.',
            ],
            sections: [
              {
                heading: 'What Technicians Do',
                bullets: [
                  'Receive and enter prescription orders accurately.',
                  'Count, pour, label, and package medications.',
                  'Manage inventory and refrigeration logs.',
                  'Support sterile and nonsterile compounding.',
                ],
              },
              {
                heading: 'What Technicians Never Do',
                bullets: [
                  'Counsel patients about medications.',
                  'Make clinical or therapeutic decisions.',
                  'Perform the final verification of a prescription.',
                ],
              },
            ],
            keyPoints: [
              'Technicians work under pharmacist supervision.',
              'The pharmacist\u2019s final check protects every prescription.',
              'Clinical questions always go to the pharmacist.',
              'Accuracy in routine tasks is the technician\u2019s safety contribution.',
            ],
          },
          {
            title: 'Routes, Dosage Forms, and Abbreviations',
            minutes: 25,
            intro: [
              'Medications reach the body by many routes — oral, topical, inhaled, injectable, and more — and each route has dosage forms designed for it, from tablets and capsules to patches, suppositories, and inhalers. The route changes onset and handling: sublingual tablets dissolve under the tongue for rapid effect, while extended-release tablets must never be crushed.',
              'Pharmacy abbreviations compress instructions but carry error risk. Error-prone abbreviations — such as "U" for units or trailing zeros like 5.0 mg — have caused serious harm, so many organizations restrict or ban them, and technicians write out full terms whenever clarity demands it.',
            ],
            sections: [
              {
                heading: 'Common Dosage Forms',
                bullets: [
                  'Tablets and capsules for oral use; extended-release forms are never crushed.',
                  'Topical creams, ointments, and patches.',
                  'Inhalers and nebulizer solutions for the lungs.',
                  'Injectable vials, ampules, and prefilled syringes.',
                ],
              },
              {
                heading: 'Safety-Critical Abbreviation Rules',
                bullets: [
                  'Write "units" — never the abbreviation "U."',
                  'Use leading zeros (0.5 mg), never trailing zeros (5.0 mg).',
                  'When an order is unclear, clarify before filling.',
                ],
              },
            ],
            keyPoints: [
              'Route determines dosage form and onset.',
              'Extended-release products are never crushed.',
              'Certain abbreviations are restricted because they cause errors.',
              'Unclear orders are clarified, never guessed.',
            ],
            callout: {
              variant: 'exam',
              title: 'Exam focus',
              text: 'Memorize the classic error-prone abbreviation rules — leading zeros yes, trailing zeros no — they appear constantly.',
            },
          },
        ],
      },
      {
        title: 'Pharmacology Essentials',
        description: 'Learn major drug classes, common medications, and how drugs act in the body.',
        lessons: [
          {
            title: 'Major Drug Classes and Their Uses',
            minutes: 25,
            intro: [
              'Technicians who recognize drug classes work faster and catch more errors. Antibiotics fight bacterial infections; antihypertensives lower blood pressure; statins reduce cholesterol; anticoagulants slow clotting; analgesics relieve pain. Class names often share suffix patterns — many beta-blockers end in "-olol," many statins in "-statin" — which speeds recognition at the shelf.',
              'Knowing a drug\u2019s class also flags its handling rules. Anticoagulants demand careful inventory control because errors are dangerous; refrigerated biologics break the cold chain if left out; hazardous drugs require special containment. Class recognition is the practical pharmacology a technician uses every hour.',
            ],
            sections: [
              {
                heading: 'Classes to Recognize on Sight',
                bullets: [
                  'Antibiotics: treat bacterial infections.',
                  'Antihypertensives: lower blood pressure.',
                  'Statins: lower cholesterol.',
                  'Anticoagulants: reduce clotting risk.',
                  'Analgesics: relieve pain, from acetaminophen to opioids.',
                ],
              },
              {
                heading: 'Suffix Shortcuts',
                bullets: [
                  '"-olol" often signals a beta-blocker.',
                  '"-statin" signals a cholesterol-lowering agent.',
                  '"-prazole" signals a proton pump inhibitor.',
                  '"-pril" signals an ACE inhibitor.',
                ],
              },
            ],
            keyPoints: [
              'Class recognition speeds work and catches errors.',
              'Suffix patterns identify many classes at a glance.',
              'Class knowledge drives handling and storage rules.',
              'High-alert classes deserve extra verification care.',
            ],
          },
          {
            title: 'How Drugs Act: Basics of Pharmacokinetics',
            minutes: 20,
            intro: [
              'Pharmacokinetics describes what the body does to a drug: absorption into the bloodstream, distribution to tissues, metabolism — largely in the liver — and excretion, largely through the kidneys. These four processes explain why doses differ by route and why organ impairment changes drug handling.',
              'Interactions matter at the technician level too. Some drugs boost or block the enzymes that metabolize others, changing blood levels; food can alter absorption. Technicians do not evaluate interactions clinically, but they ensure the pharmacist sees a complete medication profile by entering every product accurately.',
            ],
            sections: [
              {
                heading: 'The Four Processes',
                bullets: [
                  'Absorption: how the drug enters the bloodstream.',
                  'Distribution: where it travels in the body.',
                  'Metabolism: how the body breaks it down, mainly in the liver.',
                  'Excretion: how it leaves, mainly through the kidneys.',
                ],
              },
              {
                heading: 'Technician Takeaways',
                bullets: [
                  'Route affects absorption speed and completeness.',
                  'Accurate profile entry enables pharmacist interaction checks.',
                  'Report duplicate-therapy flags to the pharmacist rather than bypassing them.',
                ],
              },
            ],
            keyPoints: [
              'Absorption, distribution, metabolism, excretion — the four core processes.',
              'Liver and kidneys dominate metabolism and excretion.',
              'Complete data entry powers the pharmacist\u2019s safety checks.',
              'Alerts are escalated, never overridden silently.',
            ],
          },
        ],
      },
      {
        title: 'Pharmacy Calculations I',
        description: 'Master ratios, proportions, conversions, and dose calculations.',
        lessons: [
          {
            title: 'Conversions and the Metric System',
            minutes: 25,
            intro: [
              'Pharmacy math runs on the metric system: grams, milligrams, micrograms, liters, and milliliters, related by factors of one thousand. Converting confidently — 0.5 grams to 500 milligrams, 250 milliliters to 0.25 liters — is the entry ticket to every dose calculation. Household measures still appear on liquid labels: one teaspoon equals 5 milliliters, one tablespoon 15.',
              'Temperature conversion between Fahrenheit and Celsius appears in storage rules, and the 24-hour clock appears in hospital orders. Practicing conversions until they are automatic eliminates the most common source of calculation error: a misplaced decimal.',
            ],
            sections: [
              {
                heading: 'Core Conversions to Memorize',
                bullets: [
                  '1 gram = 1,000 milligrams; 1 milligram = 1,000 micrograms.',
                  '1 liter = 1,000 milliliters.',
                  '1 teaspoon = 5 mL; 1 tablespoon = 15 mL.',
                  '1 kilogram = 2.2 pounds.',
                ],
              },
              {
                heading: 'Decimal Discipline',
                bullets: [
                  'Always use a leading zero: 0.5 mg, never .5 mg.',
                  'Never use a trailing zero: 5 mg, never 5.0 mg.',
                  'Estimate the answer first to catch decimal errors.',
                ],
              },
            ],
            keyPoints: [
              'Metric units relate by factors of 1,000.',
              'A teaspoon is 5 mL; a tablespoon is 15 mL.',
              'One kilogram is 2.2 pounds.',
              'Leading zeros prevent tenfold errors.',
            ],
            callout: {
              variant: 'exam',
              title: 'Exam focus',
              text: 'Nearly every calculations question embeds a conversion — convert first, then solve.',
            },
          },
          {
            title: 'Ratio, Proportion, and Dose Calculations',
            minutes: 30,
            intro: [
              'Most dose calculations reduce to a proportion: if a vial contains 250 milligrams in 5 milliliters, then 100 milligrams lives in 2 milliliters — because 100 is to 250 as x is to 5. Setting up the proportion with matching units, cross-multiplying, and checking that the answer makes sense is the universal method.',
              'Day-supply and quantity calculations run the other direction: a prescription for one tablet twice daily for 30 days needs 60 tablets. Insulin, pediatric doses by weight, and dilution problems extend the same proportion logic. Every calculation ends with a reasonableness check against the original order.',
            ],
            sections: [
              {
                heading: 'The Universal Proportion Method',
                steps: [
                  'Write what you have (strength on hand) as a ratio.',
                  'Write what you need as the matching ratio with x.',
                  'Cross-multiply and solve for x.',
                  'Check units match on both sides.',
                  'Ask whether the answer is reasonable.',
                ],
              },
              {
                heading: 'Practice Pattern',
                bullets: [
                  'Strength: 250 mg per 5 mL; order: 100 mg.',
                  '100/250 = x/5, so x = 2 mL.',
                  'Day supply: 1 tablet twice daily × 30 days = 60 tablets.',
                ],
              },
            ],
            keyPoints: [
              'Ratio and proportion solve most dose problems.',
              'Units must match on both sides of the equation.',
              'Day-supply math counts doses times days.',
              'Every answer gets a reasonableness check.',
            ],
          },
        ],
      },
      {
        title: 'Pharmacy Calculations II',
        description: 'Handle concentrations, dilutions, alligation, and intravenous flow rates.',
        lessons: [
          {
            title: 'Concentrations, Percent Strength, and Dilutions',
            minutes: 25,
            intro: [
              'Percent strength expresses concentration: a 5 percent dextrose solution contains 5 grams per 100 milliliters. Weight-in-volume percentages describe most liquids; weight-in-weight describes ointments; volume-in-volume describes liquids mixed in liquids. Reading "1:1000" as 1 gram in 1,000 milliliters converts ratio strengths into the same language.',
              'Dilution calculations ask how much of a concentrated stock makes a weaker product. The relationship C1 × V1 = C2 × V2 — concentration times volume before equals after — solves most of them cleanly. As always, estimate first: a diluted product must contain less drug than the stock volume you started with.',
            ],
            sections: [
              {
                heading: 'Strength Notations',
                bullets: [
                  '5% w/v means 5 g per 100 mL.',
                  'Ratio 1:1000 means 1 g per 1,000 mL.',
                  'w/w applies to semisolids like ointments.',
                ],
              },
              {
                heading: 'Dilution Framework',
                paragraphs: [
                  'Use C1 × V1 = C2 × V2. To make 500 mL of a 2% solution from a 10% stock: 10% × V1 = 2% × 500 mL, so V1 = 100 mL of stock, brought to final volume with diluent. The sanity check — 100 mL of stock carries exactly the drug in the final 500 mL — confirms the setup.',
                ],
              },
            ],
            keyPoints: [
              'Percent w/v is grams per 100 milliliters.',
              'Ratio strength converts to grams per total milliliters.',
              'C1 × V1 = C2 × V2 solves dilutions.',
              'Sanity-check every dilution answer.',
            ],
          },
          {
            title: 'IV Flow Rates and Compounding Quantities',
            minutes: 25,
            intro: [
              'Intravenous flow-rate math converts a volume and a time into a rate. Milliliters per hour is volume divided by hours; drops per minute adds the tubing\u2019s drop factor: total volume times drop factor, divided by total minutes. A liter over 8 hours runs at 125 milliliters per hour — a calculation hospital technicians see daily.',
              'Alligation handles mixing two strengths to get a third, laying out parts in a tic-tac-toe grid. It appears less often than proportions but rewards a practiced setup. Across all advanced math, the discipline is identical: define units, set up once, solve, and verify reasonableness.',
            ],
            sections: [
              {
                heading: 'Flow-Rate Formulas',
                bullets: [
                  'mL per hour = total volume ÷ total hours.',
                  'Drops per minute = (volume × drop factor) ÷ minutes.',
                  'Example: 1,000 mL over 8 hours = 125 mL/hr.',
                ],
              },
              {
                heading: 'Alligation Setup',
                steps: [
                  'Write the higher strength top-left, lower bottom-left.',
                  'Place the desired strength in the center.',
                  'Subtract diagonally to find parts of each.',
                  'Convert parts into the volumes needed.',
                ],
              },
            ],
            keyPoints: [
              'mL/hr is volume divided by time.',
              'Drops per minute uses the tubing drop factor.',
              'Alligation finds parts of two strengths to mix.',
              'Units and reasonableness checks close every problem.',
            ],
          },
        ],
      },
      {
        title: 'Prescription Processing Workflow',
        description: 'Receive, enter, fill, and verify prescriptions accurately end to end.',
        lessons: [
          {
            title: 'Intake, Data Entry, and Insurance Basics',
            minutes: 25,
            intro: [
              'Processing begins at intake: confirm the patient, collect complete information, and check the prescription for legibility and required elements — patient name, drug, strength, directions, quantity, prescriber, and date. Missing or unclear elements are clarified with the prescriber through the pharmacist, never assumed.',
              'Data entry converts the paper or electronic order into the pharmacy system exactly as written. The days-supply field drives insurance billing, and common rejections — refill too soon, prior authorization, coverage terminated — have standard responses the technician learns to execute before routing stubborn cases to the pharmacist.',
            ],
            sections: [
              {
                heading: 'Required Prescription Elements',
                bullets: [
                  'Patient name and date of birth.',
                  'Drug name, strength, and dosage form.',
                  'Directions and quantity.',
                  'Prescriber information and signature.',
                  'Date written.',
                ],
              },
              {
                heading: 'Common Insurance Rejections',
                bullets: [
                  'Refill too soon: check the last fill date.',
                  'Prior authorization: notify the pharmacist and prescriber workflow.',
                  'Coverage terminated: verify the insurance card.',
                  'NDC not covered: route to the pharmacist for alternatives.',
                ],
              },
            ],
            keyPoints: [
              'Complete intake prevents downstream errors.',
              'Unclear orders are clarified, never guessed.',
              'Days supply drives billing and refill timing.',
              'Standard rejections have standard first responses.',
            ],
          },
          {
            title: 'Filling, Labeling, and Final Check',
            minutes: 25,
            intro: [
              'Filling follows a disciplined sequence: select the product by exact name and strength, verify the National Drug Code against the order, count or measure accurately, and label with the patient name, drug, directions, quantity, prescriber, and expiration. Look-alike products sit near each other on shelves, so reading the label three times — at selection, at counting, at labeling — is a real safety practice, not a slogan.',
              'The pharmacist\u2019s final verification completes the process and is never bypassed, even under time pressure. Technicians support the check by keeping the stock bottle with the finished product for comparison. Counseling offers at pickup are documented per policy, and clinical questions route to the pharmacist.',
            ],
            sections: [
              {
                heading: 'The Three-Read Habit',
                steps: [
                  'Read the label when pulling the product.',
                  'Read it again while counting or pouring.',
                  'Read it a third time when labeling the finished prescription.',
                ],
              },
              {
                heading: 'Final Check Support',
                bullets: [
                  'Keep the stock bottle with the filled product.',
                  'Confirm NDC, strength, quantity, and label match.',
                  'Never dispense before pharmacist verification.',
                  'Document counseling offers per policy.',
                ],
              },
            ],
            keyPoints: [
              'Three label reads guard against look-alike errors.',
              'NDC matching ties product to order.',
              'Pharmacist verification is mandatory before dispensing.',
              'Counseling questions route to the pharmacist.',
            ],
            callout: {
              variant: 'safety',
              title: 'Safety',
              text: 'Never let workload pressure you into skipping the three-read habit — look-alike, sound-alike errors happen fastest when rushed.',
            },
          },
        ],
      },
      {
        title: 'Medication Safety Systems',
        description: 'Prevent, detect, and report medication errors across the workflow.',
        lessons: [
          {
            title: 'Look-Alike Sound-Alike Drugs and High-Alert Medications',
            minutes: 25,
            intro: [
              'Look-alike, sound-alike (LASA) drug pairs — similar names or packaging with very different effects — are a leading error source. Tall man lettering distinguishes them on labels, such as predniSONE versus prednisoLONE, and physical separation on shelves adds a second barrier. When two similar products live side by side, the shelf itself becomes the hazard.',
              'High-alert medications — insulin, anticoagulants, concentrated electrolytes, opioids, chemotherapy — cause devastating harm when errors occur. Facilities layer protections around them: independent double checks, standardized concentrations, and limited storage locations. Technicians treat every high-alert task with deliberate slowness and zero multitasking.',
            ],
            sections: [
              {
                heading: 'LASA Defenses',
                bullets: [
                  'Tall man lettering highlights name differences.',
                  'Separate storage for confusable pairs.',
                  'Read labels by generic and brand name together.',
                  'Report confusing packaging to the pharmacist.',
                ],
              },
              {
                heading: 'High-Alert Examples',
                bullets: [
                  'Insulin products.',
                  'Anticoagulants.',
                  'Concentrated potassium and other electrolytes.',
                  'Opioids and chemotherapy agents.',
                ],
              },
            ],
            keyPoints: [
              'LASA pairs are a top error source.',
              'Tall man lettering and separation are engineered defenses.',
              'High-alert drugs get double checks and standardization.',
              'Slow down deliberately on high-alert tasks.',
            ],
          },
          {
            title: 'Error Reporting and Continuous Improvement',
            minutes: 20,
            intro: [
              'Medication errors and near misses are reported through non-punitive systems because hiding mistakes guarantees repetition. A wrong drug caught at final check is a near miss worth reporting — the system learns how it almost reached a patient. Honest reporting is a professional duty, not an admission of failure.',
              'Root-cause thinking looks past the individual to the process: similar packaging, interruptions, poor lighting, ambiguous labels. Technicians contribute by reporting conditions that invite error and participating in fixes, such as relocating confusable products or improving shelf labels.',
            ],
            sections: [
              {
                heading: 'Report These Every Time',
                bullets: [
                  'Errors that reach or nearly reach a patient.',
                  'Wrong drug, strength, quantity, or patient — caught at any stage.',
                  'Confusing labels, packaging, or storage conditions.',
                  'Workflow interruptions that contributed.',
                ],
              },
              {
                heading: 'Systems Thinking',
                paragraphs: [
                  'Asking "what about our process let this happen?" produces durable fixes — better shelf placement, clearer labels, interruption-free filling zones — while blaming individuals changes nothing.',
                ],
              },
            ],
            keyPoints: [
              'Near misses are as reportable as reached errors.',
              'Reporting systems are non-punitive by design.',
              'Root-cause analysis fixes processes, not people.',
              'Technicians see system flaws first — speak up.',
            ],
            callout: {
              variant: 'tip',
              title: 'Professional habit',
              text: 'When you catch an error — yours or anyone\u2019s — report it the same day. Documentation protects patients and the improvement process.',
            },
          },
        ],
      },
      {
        title: 'Pharmacy Law and Ethics',
        description: 'Apply the federal and state framework that governs pharmacy practice.',
        lessons: [
          {
            title: 'The Legal Framework of Pharmacy',
            minutes: 25,
            intro: [
              'Pharmacy practice is shaped by landmark federal law. The Pure Food and Drug Act of 1906 began federal oversight; the 1938 Act required safety demonstration after a poisoning tragedy; the Durham-Humphrey Amendment created the prescription-versus-over-the-counter distinction; the Kefauver-Harris Amendment added efficacy requirements. The Controlled Substances Act of 1970 built the schedule system, and HIPAA added privacy duties.',
              'State boards of pharmacy license technicians and define their duties, and state law can be stricter than federal law — the stricter rule governs. Technicians must know their state\u2019s registration requirements, supervision ratios, and scope boundaries as conditions of practice.',
            ],
            sections: [
              {
                heading: 'Landmark Federal Laws',
                bullets: [
                  '1938: safety demonstrated before marketing.',
                  'Durham-Humphrey: prescription vs. OTC categories.',
                  'Kefauver-Harris: efficacy evidence required.',
                  'Controlled Substances Act: schedule system and DEA oversight.',
                  'HIPAA: patient privacy protections.',
                ],
              },
              {
                heading: 'Federal vs. State',
                paragraphs: [
                  'When federal and state rules differ, the stricter standard applies. Your state board defines technician registration, duties, and supervision requirements — know them as part of professional competence.',
                ],
              },
            ],
            keyPoints: [
              'Federal law created safety, efficacy, and category frameworks.',
              'The Controlled Substances Act governs scheduled drugs.',
              'State boards license and define technician scope.',
              'The stricter rule governs when laws differ.',
            ],
            callout: {
              variant: 'exam',
              title: 'Exam focus',
              text: 'Match each landmark law to its purpose — prescription/OTC separation, efficacy, safety — a frequent test pattern.',
            },
          },
          {
            title: 'Privacy, Ethics, and Professional Conduct',
            minutes: 20,
            intro: [
              'HIPAA protects patient health information in every form — spoken, printed, and electronic. Technicians verify identity before discussing prescriptions, shield screens, dispose of labels in secure shredding, and never discuss patients outside work. Breaches are reported per policy immediately.',
              'Ethical conduct extends beyond law: honesty in documentation, refusal to divert medications, respect for every patient regardless of circumstances, and maintaining professional boundaries. Diversion — diverting medications for personal use or distribution — is a crime that ends careers and harms patients; it is prevented by controls and reported without hesitation when suspected.',
            ],
            sections: [
              {
                heading: 'HIPAA in Daily Practice',
                bullets: [
                  'Verify identity before discussing any prescription.',
                  'Shield screens and printed information.',
                  'Shred labels and patient paperwork securely.',
                  'Report suspected breaches immediately.',
                ],
              },
              {
                heading: 'Ethical Non-Negotiables',
                bullets: [
                  'Accurate, honest records always.',
                  'No diversion, no exceptions.',
                  'Equal respect for every patient.',
                  'Report suspected diversion per policy.',
                ],
              },
            ],
            keyPoints: [
              'HIPAA covers spoken, printed, and electronic information.',
              'Identity verification precedes any discussion.',
              'Diversion is a crime and a patient-safety threat.',
              'Ethics duties continue outside the building.',
            ],
          },
        ],
      },
      {
        title: 'Controlled Substances',
        description: 'Handle scheduled medications under strict legal and procedural controls.',
        lessons: [
          {
            title: 'Schedules and Prescription Requirements',
            minutes: 25,
            intro: [
              'The Controlled Substances Act places drugs into five schedules by abuse potential and accepted medical use. Schedule I substances have no accepted medical use; Schedule II drugs have high abuse potential and no refills allowed — a new prescription is required each time; Schedules III through V allow limited refills, commonly up to five refills in six months for III and IV.',
              'Prescriptions for controlled substances carry extra required elements, including the prescriber\u2019s DEA number, and Schedule II orders generally cannot be phoned in except in defined emergencies. Verifying DEA number format — two letters followed by seven digits with a checksum — is a standard technician screening skill.',
            ],
            sections: [
              {
                heading: 'Schedule Quick Reference',
                bullets: [
                  'Schedule I: no accepted medical use.',
                  'Schedule II: high abuse potential; no refills.',
                  'Schedules III–IV: up to 5 refills in 6 months.',
                  'Schedule V: lowest abuse potential; some products OTC in some states.',
                ],
              },
              {
                heading: 'DEA Number Check',
                steps: [
                  'Confirm two letters followed by seven digits.',
                  'Add digits 1, 3, and 5.',
                  'Add digits 2, 4, and 6, and multiply by 2.',
                  'Sum the results; the last digit must match digit 7.',
                ],
              },
            ],
            keyPoints: [
              'Schedules rank abuse potential from I (highest) to V (lowest).',
              'Schedule II prescriptions allow no refills.',
              'Schedules III–IV allow up to 5 refills in 6 months.',
              'DEA numbers follow a verifiable checksum format.',
            ],
            callout: {
              variant: 'exam',
              title: 'Exam focus',
              text: 'Schedule rules — especially the no-refill rule for Schedule II — are among the most tested facts in pharmacy law.',
            },
          },
          {
            title: 'Security, Records, and Theft Prevention',
            minutes: 20,
            intro: [
              'Controlled substances demand layered security: locked storage, restricted access, perpetual or carefully reconciled inventory, and exact recordkeeping of receipts and dispensings. Discrepancies are investigated immediately, and significant losses must be reported to the DEA within required timeframes.',
              'Technicians protect the system by following count-back procedures for Schedule II fills, refusing to share access credentials, and treating every discrepancy — even one tablet — as reportable. Forgery red flags at intake, such as altered quantities or unfamiliar out-of-area prescribers, go straight to the pharmacist.',
            ],
            sections: [
              {
                heading: 'Security Practices',
                bullets: [
                  'Locked storage and restricted access.',
                  'Count-back verification for Schedule II fills.',
                  'Immediate investigation of discrepancies.',
                  'Required DEA reporting of significant loss.',
                ],
              },
              {
                heading: 'Forgery Red Flags',
                bullets: [
                  'Altered quantities or directions.',
                  'Unfamiliar or distant prescribers with unusual orders.',
                  'Patients demanding early fills with inconsistent stories.',
                  'Route all concerns to the pharmacist.',
                ],
              },
            ],
            keyPoints: [
              'Controlled substances require locked, access-controlled storage.',
              'Every discrepancy is investigated.',
              'Significant losses have DEA reporting requirements.',
              'Forgery suspicions always escalate to the pharmacist.',
            ],
          },
        ],
      },
      {
        title: 'Sterile Compounding',
        description: 'Apply cleanroom technique and garbing to prepare sterile products safely.',
        lessons: [
          {
            title: 'Cleanroom Environment and Garbing',
            minutes: 25,
            intro: [
              'Sterile compounding protects patients from contamination that could cause bloodstream infection, so it happens in controlled environments with classified air quality. The cleanroom suite includes buffer areas with defined particle-count classifications, and work happens inside primary engineering controls — laminar airflow workbenches or compounding isolators — that bathe the work zone in filtered, unidirectional air.',
              'Garbing is the human contamination barrier and follows a strict order: remove jewelry and cosmetics, then don in sequence from dirtiest to cleanest areas — shoe covers, hair and beard covers, mask, then perform hand hygiene, don a sterile gown, and finish with sterile gloves after entering the buffer area. Every skipped step defeats the whole system.',
            ],
            sections: [
              {
                heading: 'Garbing Sequence',
                steps: [
                  'Remove jewelry, watches, and cosmetics.',
                  'Don shoe covers and hair/beard covers.',
                  'Don a mask.',
                  'Perform hand hygiene per protocol.',
                  'Don a gown, then sterile gloves in the buffer area.',
                ],
              },
              {
                heading: 'Cleanroom Zones',
                bullets: [
                  'Anteroom: garbing and preparation.',
                  'Buffer room: where compounding occurs.',
                  'Primary engineering control: the hood or isolator work zone.',
                  'First air must never be blocked by hands or supplies.',
                ],
              },
            ],
            keyPoints: [
              'Sterile compounding prevents bloodstream contamination.',
              'Garbing order is fixed and never abbreviated.',
              'Primary engineering controls provide unidirectional filtered air.',
              'Never block first air to critical sites.',
            ],
            callout: {
              variant: 'safety',
              title: 'Safety',
              text: 'Touch contamination of gloves requires immediate re-gloving with fresh sterile gloves — there is no acceptable shortcut.',
            },
          },
          {
            title: 'Aseptic Technique and Beyond-Use Dating',
            minutes: 25,
            intro: [
              'Aseptic technique is a choreography: disinfect vial tops and ampule necks with sterile alcohol, work within the hood\u2019s clean zone without blocking airflow, and never touch critical sites — needle hubs, vial septa, syringe tips. Movements are slow and deliberate because rushing creates turbulence that pulls contamination into the work zone.',
              'Beyond-use dating defines how long a compounded preparation remains safe, based on sterility risk level and storage conditions — far shorter than manufacturer expiration dates. Labeling every preparation with contents, concentrations, and beyond-use date is a patient-safety requirement, and expired preparations are discarded, never used.',
            ],
            sections: [
              {
                heading: 'Aseptic Non-Negotiables',
                bullets: [
                  'Disinfect all entry points with sterile alcohol.',
                  'Work in the clean zone; never block first air.',
                  'Never touch critical sites.',
                  'Move slowly and deliberately.',
                ],
              },
              {
                heading: 'Labeling and Dating',
                bullets: [
                  'Every preparation labeled with contents and concentrations.',
                  'Beyond-use date assigned by risk level and storage.',
                  'Expired preparations are discarded.',
                  'Documentation completes every batch.',
                ],
              },
            ],
            keyPoints: [
              'Disinfect entry points before every puncture.',
              'Critical sites are never touched.',
              'Beyond-use dating is shorter than expiration dating.',
              'Unlabeled preparations are never dispensed.',
            ],
          },
        ],
      },
      {
        title: 'Nonsterile Compounding and Inventory',
        description: 'Prepare nonsterile compounds accurately and manage pharmacy inventory.',
        lessons: [
          {
            title: 'Nonsterile Compounding Basics',
            minutes: 20,
            intro: [
              'Nonsterile compounding produces customized creams, ointments, suspensions, and capsules when commercial products do not fit the patient. Accuracy depends on calibrated balances, correct measuring devices, and documented formulas followed exactly — every ingredient weighed, every step recorded on the compounding record.',
              'Technique determines quality: geometric dilution blends a small amount of potent drug into a large base by mixing equal portions stepwise; levigating agents smooth gritty powders into creams. Cleaning equipment between products prevents cross-contamination, and each preparation carries a beyond-use date from established guidelines.',
            ],
            sections: [
              {
                heading: 'Core Techniques',
                bullets: [
                  'Geometric dilution for uniform mixing of small quantities.',
                  'Levigation to smooth powders into bases.',
                  'Calibrated equipment, verified before use.',
                  'Complete compounding records for every batch.',
                ],
              },
              {
                heading: 'Quality Controls',
                bullets: [
                  'Follow the master formula exactly.',
                  'Clean equipment between products.',
                  'Assign beyond-use dates per guidelines.',
                  'Label with contents, strength, and date.',
                ],
              },
            ],
            keyPoints: [
              'Formulas are followed exactly and documented fully.',
              'Geometric dilution ensures uniform potency.',
              'Calibrated equipment is verified before use.',
              'Cross-contamination is prevented by cleaning discipline.',
            ],
          },
          {
            title: 'Inventory, Storage, and Recalls',
            minutes: 25,
            intro: [
              'Inventory management balances availability against waste: par levels trigger ordering, rotation moves shortest-dated stock forward, and expired products are removed and processed for return or destruction per policy. Refrigerated medications live within monitored temperature ranges with daily logs — a failed refrigerator full of vaccines is an emergency, not an inconvenience.',
              'Recall handling is a defined drill: identify affected lots from the notice, pull them from shelves and will-call, quarantine, and document. Hazardous drugs and controlled substances carry extra storage and disposal rules. Good inventory practice is invisible when done well — the right product is simply always there, in date.',
            ],
            sections: [
              {
                heading: 'Daily Inventory Disciplines',
                bullets: [
                  'Rotate stock so earliest expiration is used first.',
                  'Check refrigerator temperatures and log daily.',
                  'Remove expired products immediately.',
                  'Order against par levels to prevent stockouts.',
                ],
              },
              {
                heading: 'Recall Response',
                steps: [
                  'Read the recall notice for affected lots.',
                  'Search shelves, refrigerator, and will-call.',
                  'Quarantine affected products.',
                  'Document quantities and disposition.',
                ],
              },
            ],
            keyPoints: [
              'First-expired, first-out rotation prevents waste.',
              'Temperature logs are a daily legal record.',
              'Recalls are executed as a documented drill.',
              'Expired stock never remains on active shelves.',
            ],
          },
        ],
      },
    ],
    questions: [
      { domain: 'Pharmacology and Medication Classifications', difficulty: 'easy', q: 'A drug whose generic name ends in "-statin" most likely belongs to which class?', choices: ['Antibiotics', 'Cholesterol-lowering agents', 'Beta-blockers', 'Proton pump inhibitors'], answer: 1, why: 'The "-statin" suffix identifies cholesterol-lowering drugs such as simvastatin.' },
      { domain: 'Pharmacology and Medication Classifications', difficulty: 'medium', q: 'Which organ is primarily responsible for drug metabolism?', choices: ['Kidney', 'Lung', 'Liver', 'Heart'], answer: 2, why: 'The liver performs most drug metabolism; the kidneys dominate excretion.' },
      { domain: 'Pharmacy Calculations', difficulty: 'easy', q: 'How many milliliters are in one tablespoon?', choices: ['5 mL', '10 mL', '15 mL', '30 mL'], answer: 2, why: 'One tablespoon equals 15 milliliters; one teaspoon equals 5.' },
      { domain: 'Pharmacy Calculations', difficulty: 'medium', q: 'An order calls for 100 mg of a drug available as 250 mg per 5 mL. How many milliliters are needed?', choices: ['1 mL', '2 mL', '2.5 mL', '4 mL'], answer: 1, why: '100/250 = x/5, so x = 2 mL.' },
      { domain: 'Pharmacy Calculations', difficulty: 'hard', q: 'How many grams of dextrose are in 500 mL of a 5% dextrose solution?', choices: ['5 g', '25 g', '50 g', '10 g'], answer: 1, why: '5% means 5 g per 100 mL; 500 mL therefore contains 25 g.' },
      { domain: 'Prescription Processing', difficulty: 'easy', q: 'Which element is required on every prescription?', choices: ['Patient\u2019s insurance number', 'Prescriber\u2019s name and signature', 'Pharmacist\u2019s initials', 'Patient\u2019s phone number'], answer: 1, why: 'Prescriber identity and signature are required elements; insurance details are not part of the prescription itself.' },
      { domain: 'Prescription Processing', difficulty: 'medium', q: 'What is the purpose of reading the product label three times during filling?', choices: ['To satisfy auditors', 'To guard against look-alike product selection errors', 'To memorize inventory', 'To verify the count twice'], answer: 1, why: 'Reading at selection, counting, and labeling catches confusable products before they reach the patient.' },
      { domain: 'Medication Safety', difficulty: 'easy', q: 'What does tall man lettering accomplish?', choices: ['Improves label aesthetics', 'Highlights differences between look-alike drug names', 'Indicates high prices', 'Marks refrigerated products'], answer: 1, why: 'Capitalizing the differing parts of confusable names (predniSONE vs. prednisoLONE) reduces selection errors.' },
      { domain: 'Medication Safety', difficulty: 'medium', q: 'Which is an example of a high-alert medication?', choices: ['Insulin', 'Multivitamins', 'Antacids', 'Artificial tears'], answer: 0, why: 'Insulin errors can cause devastating harm, placing it among high-alert medications requiring layered safeguards.' },
      { domain: 'Medication Safety', difficulty: 'medium', type: 'scenario', q: 'At final check, the pharmacist catches that you filled a prescription with the wrong strength, and the error never reached the patient. What should happen?', choices: ['Nothing — no patient was harmed', 'Report the near miss through the error-reporting system', 'Fix the label quietly', 'Wait to see if it happens again'], answer: 1, why: 'Near misses are reported so the system can fix the process that allowed the error to travel that far.' },
      { domain: 'Pharmacy Law and Ethics', difficulty: 'medium', q: 'Which amendment created the distinction between prescription and over-the-counter drugs?', choices: ['Kefauver-Harris', 'Durham-Humphrey', 'The Pure Food and Drug Act', 'HIPAA'], answer: 1, why: 'The Durham-Humphrey Amendment established the prescription-versus-OTC categories.' },
      { domain: 'Pharmacy Law and Ethics', difficulty: 'medium', q: 'Under HIPAA, how should used prescription labels be discarded?', choices: ['In the regular trash', 'In secure shredding', 'Recycled with paper', 'Taken home for records'], answer: 1, why: 'Labels contain protected health information and require secure destruction.' },
      { domain: 'Controlled Substances', difficulty: 'easy', q: 'How many refills are allowed on a Schedule II prescription?', choices: ['One', 'Five in six months', 'None', 'Unlimited for one year'], answer: 2, why: 'Schedule II prescriptions cannot be refilled; each fill requires a new prescription.' },
      { domain: 'Controlled Substances', difficulty: 'medium', q: 'Schedules III and IV prescriptions may generally be refilled:', choices: ['Never', 'Up to 5 times in 6 months', 'Up to 12 times in a year', 'Without limit'], answer: 1, why: 'Federal law permits up to five refills within six months for Schedule III and IV substances.' },
      { domain: 'Controlled Substances', difficulty: 'hard', type: 'scenario', q: 'During a Schedule II inventory reconciliation you find a shortage of ten tablets. What is the correct action?', choices: ['Adjust the record to match the shelf', 'Report the discrepancy immediately per policy', 'Wait until the next audit', 'Replace the tablets from another bottle'], answer: 1, why: 'Every controlled-substance discrepancy is investigated immediately; significant losses carry DEA reporting duties.' },
      { domain: 'Sterile Compounding', difficulty: 'easy', q: 'What is the last item donned in the garbing sequence before compounding?', choices: ['Shoe covers', 'Mask', 'Hair cover', 'Sterile gloves'], answer: 3, why: 'Sterile gloves are donned last, after the gown, in the buffer area.' },
      { domain: 'Sterile Compounding', difficulty: 'medium', q: 'Why must hands never block airflow over critical sites in the hood?', choices: ['It slows the work', 'Blocking first air allows contamination onto sterile surfaces', 'It voids the hood warranty', 'It fogs the vial labels'], answer: 1, why: 'Unidirectional first air keeps critical sites sterile; interrupting it introduces contamination risk.' },
      { domain: 'Nonsterile Compounding', difficulty: 'medium', q: 'Geometric dilution is used to:', choices: ['Increase tablet hardness', 'Uniformly blend a small amount of drug into a large base', 'Measure liquid volumes', 'Sterilize equipment'], answer: 1, why: 'Mixing equal portions stepwise distributes a small quantity of drug evenly through a large base.' },
      { domain: 'Nonsterile Compounding', difficulty: 'easy', q: 'What document records every ingredient and step of a compounded preparation?', choices: ['The insurance claim', 'The compounding record', 'The DEA form', 'The refrigerator log'], answer: 1, why: 'The compounding record documents the formula, ingredients, quantities, and steps for every batch.' },
      { domain: 'Inventory Management', difficulty: 'easy', q: 'Stock rotation follows which principle?', choices: ['Newest stock in front', 'First-expired, first-out', 'Alphabetical by manufacturer', 'Heaviest items first'], answer: 1, why: 'First-expired, first-out rotation ensures the shortest-dated product is used before it expires.' },
      { domain: 'Inventory Management', difficulty: 'medium', q: 'A recall notice arrives for a specific lot of medication. What is the first step?', choices: ['Discard all lots of that drug', 'Identify and quarantine the affected lots', 'Call the manufacturer for a refund', 'Notify all patients immediately'], answer: 1, why: 'Recall response begins by locating and quarantining exactly the affected lots, then documenting disposition.' },
      { domain: 'Billing and Reimbursement', difficulty: 'easy', q: 'A "refill too soon" rejection is best resolved first by:', choices: ['Overriding the claim', 'Checking the patient\u2019s last fill date', 'Calling the DEA', 'Charging cash'], answer: 1, why: 'Verifying the fill history determines when the plan will pay for the next refill.' },
      { domain: 'Billing and Reimbursement', difficulty: 'medium', q: 'Which field most directly determines whether an insurance claim calculates correctly?', choices: ['Days supply', 'Pharmacy phone number', 'Prescriber\u2019s fax number', 'Patient\u2019s email'], answer: 0, why: 'Days supply drives quantity limits, refill timing, and copay calculations in adjudication.' },
    ],
  },

  // ======================================================================
  // 4. Billing and Coding Specialist Readiness
  // ======================================================================
  {
    id: 'track_billing',
    name: 'Billing and Coding Specialist Readiness',
    shortName: 'Billing & Coding',
    category: 'healthcare',
    weeks: 12,
    description:
      'Turn clinical documentation into accurate claims — master ICD-10-CM, CPT, and HCPCS coding, claim workflows, denial management, and compliance.',
    credentialFocus: 'Mapped to CBCS-style competency domains',
    schoolOverview:
      'A complete revenue-cycle readiness pathway covering coding systems, claim submission, and denial workflows, with per-student accuracy tracking. Program reports provide documentation for advisory boards and program review.',
    studentOverview:
      'Learn to read provider documentation, assign diagnosis and procedure codes, build clean claims, and work denials to resolution. Realistic coding scenarios build the accuracy employers test for.',
    prerequisites: 'None. A medical terminology course is strongly recommended.',
    alignmentNotes:
      'Modules and practice banks are mapped to CBCS-style competency domains: coding accuracy, claim processing, reimbursement, and compliance. All scenarios are original and fictional.',
    domains: [
      'Medical Terminology and Anatomy',
      'ICD-10-CM Diagnosis Coding',
      'CPT Procedure Coding',
      'HCPCS and Modifiers',
      'Insurance Plans and Payers',
      'Claim Submission and the Revenue Cycle',
      'Denials and Appeals',
      'Compliance and Fraud Prevention',
      'Patient Billing and Collections',
    ],
    modules: [
      {
        title: 'The Revenue Cycle and the Specialist\u2019s Role',
        description: 'See how documentation becomes revenue, and where the billing and coding specialist fits.',
        lessons: [
          {
            title: 'From Encounter to Payment',
            minutes: 20,
            intro: [
              'The revenue cycle begins when a patient schedules and ends when the balance reaches zero. Registration captures demographics and insurance; the encounter generates clinical documentation; coding translates that documentation into standardized codes; the claim carries those codes to the payer; payment posting, denials, and patient billing close the loop. Every step depends on the one before it.',
              'Billing and coding specialists sit at the cycle\u2019s center. Accurate coding and clean claims determine whether the practice is paid promptly, correctly, or at all — and sloppy work creates denials, compliance risk, and patient frustration. Understanding the whole cycle makes your piece of it better.',
            ],
            sections: [
              {
                heading: 'Revenue Cycle Stages',
                steps: [
                  'Schedule and register the patient.',
                  'Verify insurance eligibility and benefits.',
                  'Deliver and document care.',
                  'Assign codes and build the claim.',
                  'Submit, post payment, and work denials.',
                  'Bill the patient for remaining responsibility.',
                ],
              },
              {
                heading: 'Why Accuracy Compounds',
                paragraphs: [
                  'A registration error becomes a claim rejection; a coding error becomes a denial or an audit finding; a posting error becomes a wrong patient bill. Upstream precision is the cheapest revenue-cycle strategy there is.',
                ],
              },
            ],
            keyPoints: [
              'The revenue cycle runs from scheduling to zero balance.',
              'Coding translates documentation into standardized codes.',
              'Errors compound downstream from their origin.',
              'Clean claims are the specialist\u2019s core product.',
            ],
          },
          {
            title: 'Documentation as the Source of Truth',
            minutes: 20,
            intro: [
              'Coding follows documentation, never assumption. If the provider did not document it, it was not done — the foundational rule of compliant coding. Specialists read the encounter note for the diagnoses treated, the procedures performed, and the medical necessity connecting them, then query the provider when documentation is unclear or incomplete.',
              'Provider queries are professional, not adversarial. A good query cites the documentation gap and asks for clarification without suggesting an answer. Learning to spot what is missing — laterality, acuity, causal relationships — is a core coding skill that improves with every chart reviewed.',
            ],
            sections: [
              {
                heading: 'What Coders Extract',
                bullets: [
                  'Diagnoses managed or addressed at the encounter.',
                  'Procedures and services performed.',
                  'Laterality, acuity, and encounter details.',
                  'Medical necessity linking service to diagnosis.',
                ],
              },
              {
                heading: 'Query Essentials',
                bullets: [
                  'Cite the specific documentation gap.',
                  'Ask an open, non-leading question.',
                  'Never code from assumption or habit.',
                ],
              },
            ],
            keyPoints: [
              'Not documented means not coded.',
              'Queries clarify; they never lead the provider.',
              'Laterality and acuity details change code selection.',
              'Medical necessity links the service to the diagnosis.',
            ],
          },
        ],
      },
      {
        title: 'Terminology and Anatomy for Coders',
        description: 'Build the language foundation that accurate coding requires.',
        lessons: [
          {
            title: 'Word Parts and Terminology Decoding',
            minutes: 25,
            intro: [
              'Medical terms decode into prefixes, roots, and suffixes: "cholecystectomy" splits into chole- (bile), cyst- (bladder), and -ectomy (removal) — gallbladder removal. This decoding skill lets coders interpret unfamiliar documentation without memorizing every term, and it prevents code-selection errors caused by misunderstanding what the provider actually did.',
              'High-frequency roots repay memorization: cardio- for heart, hepat- for liver, nephr- for kidney, and the suffixes -itis (inflammation), -ectomy (removal), -scopy (visual examination), and -osis (condition). Flashcard-style daily practice builds the vocabulary faster than any cram session.',
            ],
            sections: [
              {
                heading: 'Flashcard Starter List',
                bullets: [
                  'cardio- : heart',
                  'hepat- : liver',
                  'nephr- : kidney',
                  '-itis : inflammation',
                  '-ectomy : surgical removal',
                  '-scopy : visual examination',
                ],
              },
              {
                heading: 'Decoding Practice',
                paragraphs: [
                  'Take "nephrolithotomy": nephr- (kidney) + lith- (stone) + -otomy (cutting into) — incision into the kidney to remove a stone. Practice this decomposition on every unfamiliar term in your coding exercises.',
                ],
              },
            ],
            keyPoints: [
              'Terms decode into prefix, root, and suffix.',
              'Decoding prevents code-selection errors.',
              'A small set of roots unlocks thousands of terms.',
              'Daily flashcard practice beats cramming.',
            ],
            callout: {
              variant: 'tip',
              title: 'Study habit',
              text: 'Ten flashcards a day for a month builds a 300-term vocabulary — terminology is cumulative, so start early.',
            },
          },
          {
            title: 'Body Systems and Anatomical Direction',
            minutes: 25,
            intro: [
              'Coders need working anatomy: the major body systems, their organs, and the directional language of documentation. Proximal and distal, anterior and posterior, medial and lateral, superior and inferior — these terms pinpoint where procedures happen, and procedure codes frequently depend on exact site.',
              'Laterality is where anatomy meets coding most sharply. Many diagnosis and procedure codes distinguish right, left, or bilateral, and unspecified codes when laterality is documented invite avoidable denials. Reading the note for site precision is a daily coding discipline.',
            ],
            sections: [
              {
                heading: 'Directional Terms',
                bullets: [
                  'Proximal: nearer the trunk; distal: farther from it.',
                  'Anterior: front; posterior: back.',
                  'Medial: toward the midline; lateral: away from it.',
                  'Superior: above; inferior: below.',
                ],
              },
              {
                heading: 'Laterality in Practice',
                bullets: [
                  'Check every applicable code for right/left/bilateral options.',
                  'Never default to unspecified when the note specifies a side.',
                  'Bilateral procedures may need distinct code or modifier handling.',
                ],
              },
            ],
            keyPoints: [
              'Directional terms locate procedures precisely.',
              'Code selection often depends on exact site.',
              'Laterality is a top denial trigger when missed.',
              'Unspecified codes are a last resort, not a habit.',
            ],
          },
        ],
      },
      {
        title: 'ICD-10-CM Diagnosis Coding',
        description: 'Assign diagnosis codes using official guidelines and coding conventions.',
        lessons: [
          {
            title: 'Structure, Conventions, and the Alphabetic Index',
            minutes: 25,
            intro: [
              'ICD-10-CM diagnosis codes are alphanumeric, three to seven characters, with later characters adding specificity about etiology, site, and severity. Correct assignment follows a two-step discipline: locate the condition in the Alphabetic Index, then verify in the Tabular List — never code from the index alone, because the tabular contains instructions that change selection.',
              'Coding conventions carry real weight. Instructional notes such as "code first" and "use additional code" dictate sequencing and combination reporting, and symbols mark codes requiring additional characters. Guidelines define when to code signs and symptoms separately and when they are integral to a confirmed diagnosis.',
            ],
            sections: [
              {
                heading: 'The Two-Step Method',
                steps: [
                  'Look up the main term in the Alphabetic Index.',
                  'Follow subterms to the most specific match.',
                  'Verify the code in the Tabular List.',
                  'Read and apply all instructional notes.',
                ],
              },
              {
                heading: 'Conventions to Respect',
                bullets: [
                  '"Code first" notes order underlying conditions ahead.',
                  '"Use additional code" notes add required detail.',
                  'Laterality and episode characters complete many codes.',
                  'Code to the highest documented specificity.',
                ],
              },
            ],
            keyPoints: [
              'Codes run three to seven characters.',
              'Index first, tabular always — never code from the index alone.',
              'Instructional notes govern sequencing.',
              'Highest documented specificity is the standard.',
            ],
            callout: {
              variant: 'exam',
              title: 'Exam focus',
              text: 'The index-then-tabular rule is a classic exam trap — coding straight from the index is always the wrong answer.',
            },
          },
          {
            title: 'Sequencing, Combination Codes, and Chronic Conditions',
            minutes: 25,
            intro: [
              'When multiple diagnoses apply, sequencing matters: the reason chiefly responsible for the encounter is reported first. Combination codes capture two linked conditions in a single code — for example a type 2 diabetes code that already includes a documented complication — and using them replaces reporting the conditions separately.',
              'Chronic conditions documented as managed during the encounter are reportable even when not the visit\u2019s focus, because they affect care. But coding requires documentation at that encounter; copying forward diagnoses the provider did not address is a compliance problem, not a shortcut.',
            ],
            sections: [
              {
                heading: 'Sequencing Rules of Thumb',
                bullets: [
                  'The primary reason for the encounter comes first.',
                  'Combination codes replace separate codes when they fully capture the link.',
                  'Report coexisting conditions managed at the visit.',
                  'Never report diagnoses not addressed in documentation.',
                ],
              },
              {
                heading: 'Scenario: The Diabetes Follow-Up',
                paragraphs: [
                  'A note documents type 2 diabetes with documented neuropathy, plus a medication review for hypertension. Correct coding uses the diabetes-with-complication code first for the visit focus and reports the hypertension that was actively managed — not a copied list of every problem on the chart.',
                ],
              },
            ],
            keyPoints: [
              'First-listed diagnosis is the encounter\u2019s main reason.',
              'Combination codes condense linked conditions.',
              'Managed chronic conditions are reportable.',
              'Copy-forward coding is a compliance risk.',
            ],
          },
        ],
      },
      {
        title: 'CPT Procedure Coding',
        description: 'Assign procedure codes for evaluation, management, surgery, and diagnostics.',
        lessons: [
          {
            title: 'Evaluation and Management Basics',
            minutes: 25,
            intro: [
              'Evaluation and management (E/M) codes describe office visits, hospital visits, and consultations, selected by encounter type and the level of service. Under current office-visit guidelines, level selection rests on medical decision making or total time, as documented — not on documentation bulk. Medical decision making weighs the problems addressed, data reviewed, and risk of management.',
              'Time-based coding counts the provider\u2019s total time on the encounter date across face-to-face and qualifying non-face-to-face work. The specialist\u2019s skill is matching the documented story to the level: a single stable problem with minimal data is not a high-level visit, and upcoding beyond documentation is fraud, not advocacy.',
            ],
            sections: [
              {
                heading: 'Medical Decision Making Elements',
                bullets: [
                  'Number and complexity of problems addressed.',
                  'Amount and complexity of data reviewed.',
                  'Risk of complications or management decisions.',
                ],
              },
              {
                heading: 'Time-Based Selection',
                bullets: [
                  'Counts total provider time on the encounter date.',
                  'Includes qualifying non-face-to-face work.',
                  'Time must be documented to support selection.',
                ],
              },
            ],
            keyPoints: [
              'E/M levels rest on decision making or documented time.',
              'Documentation volume alone does not set the level.',
              'Three elements define medical decision making.',
              'Coding beyond documentation is upcoding — a fraud risk.',
            ],
          },
          {
            title: 'Surgical and Procedural Coding',
            minutes: 25,
            intro: [
              'Surgical coding starts with the operative note: approach, site, and exactly what was done. The surgical package concept bundles typical pre- and post-operative care into the procedure code, so separately reporting routine follow-up visits within the global period is generally incorrect. Modifiers communicate exceptions, such as an unrelated service during a global period.',
              'Diagnostic services — laboratory, radiology — follow documentation too: the specific test, the view count for imaging, the distinction between professional and technical components. When in doubt about what a code includes, read its full descriptor and any parenthetical notes rather than relying on habit.',
            ],
            sections: [
              {
                heading: 'Operative Note Extraction',
                bullets: [
                  'Identify the definitive procedure performed.',
                  'Note approach, site, and laterality.',
                  'Distinguish planned from completed procedures.',
                  'Apply global-package rules to follow-up care.',
                ],
              },
              {
                heading: 'Modifier Awareness',
                bullets: [
                  'Modifiers add circumstance detail without changing the base code.',
                  'Unrelated services in a global period may need a modifier.',
                  'Modifier use must be supported by documentation.',
                ],
              },
            ],
            keyPoints: [
              'The operative note drives surgical code selection.',
              'Global packages bundle routine related follow-up.',
              'Modifiers explain exceptions — and require documentation.',
              'Read full descriptors, not just shorthand labels.',
            ],
            callout: {
              variant: 'exam',
              title: 'Exam focus',
              text: 'Expect questions on what the surgical package includes — routine post-op care within the global period is not separately billable.',
            },
          },
        ],
      },
      {
        title: 'HCPCS, Modifiers, and Supplies',
        description: 'Code supplies, drugs, and services with HCPCS and apply modifiers correctly.',
        lessons: [
          {
            title: 'HCPCS Level II Fundamentals',
            minutes: 20,
            intro: [
              'HCPCS Level II codes cover what CPT largely does not: durable medical equipment, drugs administered in-office, ambulance services, supplies, and certain procedures. The codes are alphanumeric — a letter followed by four digits — grouped by category, such as J codes for many injectable drugs.',
              'Drug coding requires unit math: the code descriptor defines the dose per unit, and the claim reports units matching what was administered and documented. Reporting wrong units is a common and costly error, so always read the descriptor and multiply carefully.',
            ],
            sections: [
              {
                heading: 'What HCPCS Covers',
                bullets: [
                  'Durable medical equipment and supplies.',
                  'Injectable and administered drugs.',
                  'Transportation services.',
                  'Selected procedures and services.',
                ],
              },
              {
                heading: 'Drug Unit Discipline',
                steps: [
                  'Read the code descriptor for dose per unit.',
                  'Divide the administered dose by the descriptor dose.',
                  'Report whole or allowed partial units per payer rules.',
                  'Match the documented administration record.',
                ],
              },
            ],
            keyPoints: [
              'HCPCS Level II covers supplies, drugs, and equipment.',
              'A letter plus four digits forms the code.',
              'Drug units follow the descriptor, not the vial size.',
              'Unit errors multiply into payment errors.',
            ],
          },
          {
            title: 'Modifier Mastery',
            minutes: 25,
            intro: [
              'Modifiers are two-character suffixes that adjust a code\u2019s meaning without changing the procedure: a distinct service, a bilateral procedure, a service partially reduced, or a repeat procedure. Correct modifier use gets legitimate claims paid; incorrect use creates denials or audit exposure.',
              'The discipline is documentation first: the note must support the modifier\u2019s story. A distinct procedural service modifier requires documentation that the service truly was separate; a bilateral modifier requires bilateral documentation. When payer rules differ on modifier preference, follow the payer\u2019s published policy.',
            ],
            sections: [
              {
                heading: 'Common Modifier Purposes',
                bullets: [
                  'Distinct or separate services.',
                  'Bilateral procedures.',
                  'Reduced or discontinued services.',
                  'Repeat procedures by the same or another provider.',
                ],
              },
              {
                heading: 'Modifier Rules',
                bullets: [
                  'Documentation must support every modifier.',
                  'Payer policies can override default preferences.',
                  'Never add a modifier just to force payment.',
                ],
              },
            ],
            keyPoints: [
              'Modifiers adjust meaning; they never change the base code.',
              'Documentation must tell the modifier\u2019s story.',
              'Payer-specific rules govern conflicts.',
              'Modifiers used to force payment are an audit trigger.',
            ],
          },
        ],
      },
      {
        title: 'Insurance Plans and Payers',
        description: 'Understand plan types, eligibility, authorizations, and payer rules.',
        lessons: [
          {
            title: 'Plan Types and How They Pay',
            minutes: 25,
            intro: [
              'Plan design controls everything about payment. Health maintenance organizations restrict networks and require referrals; preferred provider organizations allow more choice at higher out-of-network cost; high-deductible plans pair lower premiums with large patient responsibility. Government programs — Medicare for seniors and certain disabilities, Medicaid for qualifying low-income patients — follow their own detailed rules.',
              'Cost-sharing vocabulary is working language: premium buys the coverage, deductible is what the patient pays before the plan starts, copay is the fixed per-visit amount, coinsurance the percentage split, and the out-of-pocket maximum caps the patient\u2019s year. Specialists use these terms daily when explaining bills and calculating responsibility.',
            ],
            sections: [
              {
                heading: 'Plan Types at a Glance',
                bullets: [
                  'HMO: network-restricted, referral-driven.',
                  'PPO: broader choice, higher out-of-network cost.',
                  'High-deductible plans: larger patient responsibility.',
                  'Medicare and Medicaid: government programs with distinct rules.',
                ],
              },
              {
                heading: 'Cost-Sharing Terms',
                bullets: [
                  'Premium: the cost of having coverage.',
                  'Deductible: patient pays first, up to a threshold.',
                  'Copay: fixed amount per service.',
                  'Coinsurance: percentage split after deductible.',
                  'Out-of-pocket maximum: the yearly patient cap.',
                ],
              },
            ],
            keyPoints: [
              'Plan type determines network and referral rules.',
              'Medicare and Medicaid follow distinct regulations.',
              'Five cost-sharing terms explain nearly every bill.',
              'Eligibility verification prevents downstream denials.',
            ],
          },
          {
            title: 'Eligibility, Referrals, and Prior Authorization',
            minutes: 20,
            intro: [
              'Verifying eligibility before service confirms the patient is covered, what the plan covers, and what the patient will owe — the cheapest denial-prevention step in the cycle. Verification catches termed coverage, wrong plan details, and coordination-of-benefits questions before they become rejections.',
              'Referrals and prior authorizations are permission structures: HMOs often require a primary-care referral before specialty visits, and many plans require advance authorization for imaging, procedures, and certain drugs. Services delivered without required authorization are frequently non-payable — a preventable write-off.',
            ],
            sections: [
              {
                heading: 'Verification Checklist',
                steps: [
                  'Confirm active coverage and plan details.',
                  'Check deductible status and cost sharing.',
                  'Identify referral or authorization requirements.',
                  'Document the verification in the account.',
                ],
              },
              {
                heading: 'Authorization Discipline',
                bullets: [
                  'Obtain authorization before scheduled services.',
                  'Track authorization numbers on the claim.',
                  'Expired or mismatched authorizations deny.',
                ],
              },
            ],
            keyPoints: [
              'Eligibility verification is the cheapest denial prevention.',
              'Referrals gate specialty care in many HMOs.',
              'Prior authorization is required before many services.',
              'Authorization numbers belong on the claim.',
            ],
            callout: {
              variant: 'tip',
              title: 'Practice habit',
              text: 'Treat every scheduled procedure as authorization-required until verified otherwise — assumptions create write-offs.',
            },
          },
        ],
      },
      {
        title: 'Claim Submission and Adjudication',
        description: 'Build clean claims and track them through payer processing.',
        lessons: [
          {
            title: 'The CMS-1500 and Clean Claims',
            minutes: 25,
            intro: [
              'Professional claims travel on the CMS-1500 format (or its electronic equivalent), carrying patient and insured demographics, diagnosis codes pointing to each service line, procedure codes with modifiers, units, charges, and provider identifiers. Institutional claims use the UB-04 format with its own conventions.',
              'A clean claim is complete, accurate, and payable on first submission. Scrubbing software catches format errors, but the specialist\u2019s review catches what software misses: diagnosis-to-procedure linkage that fails medical necessity, missing authorization numbers, mismatched demographics. First-pass acceptance rate is the metric clean-claim discipline moves.',
            ],
            sections: [
              {
                heading: 'Claim Essentials',
                bullets: [
                  'CMS-1500 for professional services; UB-04 for institutional.',
                  'Diagnosis pointers link each service to its justification.',
                  'Procedure codes carry modifiers, units, and charges.',
                  'Provider identifiers complete the claim.',
                ],
              },
              {
                heading: 'Clean-Claim Habits',
                bullets: [
                  'Verify demographics against the insurance card.',
                  'Confirm medical-necessity linkage on every line.',
                  'Attach authorization numbers where required.',
                  'Track first-pass acceptance as your quality metric.',
                ],
              },
            ],
            keyPoints: [
              'CMS-1500 is the professional claim standard.',
              'Diagnosis pointers connect services to medical necessity.',
              'Clean claims pay on first submission.',
              'First-pass acceptance rate measures claim quality.',
            ],
          },
          {
            title: 'Adjudication, Remittance, and Posting',
            minutes: 25,
            intro: [
              'After submission, the payer adjudicates the claim: accepting, denying, or adjusting each line and returning an explanation of benefits to the patient and a remittance advice to the provider. Contractual adjustments — the difference between charges and the allowed amount — are written off per contract and never billed to the patient.',
              'Payment posting reconciles the remittance to the account line by line: payment applied, adjustment coded correctly, patient responsibility transferred, denial flagged for work. Accurate posting keeps accounts receivable truthful; sloppy posting hides denials and misstates patient balances.',
            ],
            sections: [
              {
                heading: 'Reading the Remittance',
                bullets: [
                  'Allowed amount: the contracted value of the service.',
                  'Contractual adjustment: written off, never patient-billed.',
                  'Patient responsibility: deductible, copay, coinsurance.',
                  'Denial codes: routed to the denial workflow.',
                ],
              },
              {
                heading: 'Posting Discipline',
                bullets: [
                  'Post line by line, not in summary.',
                  'Use correct adjustment reason codes.',
                  'Flag every denial for follow-up the day it posts.',
                ],
              },
            ],
            keyPoints: [
              'Adjudication determines payment, adjustment, or denial.',
              'Contractual adjustments are never billed to patients.',
              'Line-by-line posting keeps AR truthful.',
              'Denials enter the work queue at posting, not weeks later.',
            ],
          },
        ],
      },
      {
        title: 'Denials and Appeals',
        description: 'Diagnose denial reasons and work them to resolution.',
        lessons: [
          {
            title: 'Common Denial Reasons and Prevention',
            minutes: 25,
            intro: [
              'Most denials trace to a short list: eligibility lapsed, authorization missing, coding mismatch, duplicate submission, timely filing missed, or medical necessity not supported. Sorting denials by root cause reveals which upstream process needs fixing — the highest-value analysis a specialist performs.',
              'Prevention beats rework by a wide margin. Eligibility verification kills coverage denials; authorization tracking kills missing-auth denials; claim scrubbing kills format rejections. Working the prevention list is how strong billing operations keep denial rates in low single digits.',
            ],
            sections: [
              {
                heading: 'The Usual Suspects',
                bullets: [
                  'Coverage not active on the service date.',
                  'Missing or invalid prior authorization.',
                  'Coding or linkage errors.',
                  'Duplicate claim submissions.',
                  'Filing past the payer\u2019s deadline.',
                ],
              },
              {
                heading: 'Prevention Mapping',
                bullets: [
                  'Eligibility denials → verify before service.',
                  'Authorization denials → track requirements per payer.',
                  'Coding denials → audit linkage and documentation.',
                  'Timely filing → monitor submission queues weekly.',
                ],
              },
            ],
            keyPoints: [
              'A short list of causes produces most denials.',
              'Root-cause sorting points to process fixes.',
              'Prevention costs far less than rework.',
              'Denial rate is a management metric, not just a workload.',
            ],
          },
          {
            title: 'Writing Effective Appeals',
            minutes: 25,
            intro: [
              'A successful appeal answers the denial\u2019s exact reason with evidence: the medical record supporting necessity, the authorization number the payer missed, the corrected code with an explanation. Appeals follow the payer\u2019s process and deadlines — a late appeal is a dead appeal regardless of merit.',
              'Structure matters: state what was denied and why, present the supporting documentation point by point, cite the relevant policy or guideline where applicable, and request specific action. Tracking appeal outcomes by payer and reason builds institutional knowledge that prevents future denials.',
            ],
            sections: [
              {
                heading: 'Appeal Construction',
                steps: [
                  'Identify the exact denial reason.',
                  'Gather the supporting documentation.',
                  'Address the reason point by point.',
                  'Cite applicable policy or guideline.',
                  'Submit within the payer deadline and track.',
                ],
              },
              {
                heading: 'Scenario: The Medical Necessity Denial',
                paragraphs: [
                  'An imaging claim denies for lack of medical necessity. The specialist pulls the order and clinical note documenting the symptoms and failed conservative treatment, writes an appeal quoting the payer\u2019s own coverage policy, attaches the records, and submits within the appeal window — converting a write-off into payment.',
                ],
              },
            ],
            keyPoints: [
              'Appeals answer the specific denial reason with evidence.',
              'Deadlines are absolute — calendar every appeal.',
              'Point-by-point structure wins.',
              'Outcome tracking prevents repeat denials.',
            ],
            callout: {
              variant: 'tip',
              title: 'Career skill',
              text: 'Specialists who overturn denials reliably are revenue heroes — appeal writing is the highest-leverage skill in the field.',
            },
          },
        ],
      },
      {
        title: 'Compliance and Patient Billing',
        description: 'Bill compliantly, protect patient data, and manage patient balances ethically.',
        lessons: [
          {
            title: 'Fraud, Abuse, and Coding Compliance',
            minutes: 25,
            intro: [
              'Fraud is intentional deception for payment — billing for services never rendered or deliberately upcoding; abuse covers practices inconsistent with sound business or medical practice that generate unnecessary cost. Both carry severe penalties, and "I was told to code it that way" is no defense for the person who submitted the claim.',
              'Compliance programs set the workplace standard: written policies, auditing, training, and a non-retaliatory reporting channel. Specialists protect themselves and their employers by coding only what documentation supports, querying ambiguities, and reporting concerns through proper channels without fear.',
            ],
            sections: [
              {
                heading: 'Know the Difference',
                bullets: [
                  'Fraud: intentional false claims for payment.',
                  'Abuse: practices causing unnecessary cost without intent proof.',
                  'Upcoding and unbundling: classic risk patterns.',
                  'Phantom billing: claims for services never provided.',
                ],
              },
              {
                heading: 'Your Protections',
                bullets: [
                  'Code only documented services.',
                  'Query unclear documentation.',
                  'Use the compliance reporting channel.',
                  'Retaliation for good-faith reporting is prohibited.',
                ],
              },
            ],
            keyPoints: [
              'Fraud is intentional; abuse may be unintentional.',
              'Upcoding and unbundling are classic violations.',
              'Compliance programs protect honest reporters.',
              'Documentation is the coder\u2019s only defense.',
            ],
            callout: {
              variant: 'warning',
              title: 'Compliance alert',
              text: 'A supervisor directing you to bill undocumented services is a compliance emergency — use the reporting channel, not the keyboard.',
            },
          },
          {
            title: 'Patient Statements, Collections, and Compassion',
            minutes: 20,
            intro: [
              'After insurance pays, remaining patient responsibility is billed through clear, accurate statements. Patients deserve explanations in plain language — what insurance paid, what was adjusted, and why a balance remains. Confusing statements generate calls, complaints, and unpaid balances.',
              'Collections practices follow law and ethics: no harassment, honest information, and payment-plan options per policy. Financial hardship conversations handled with respect preserve the patient relationship while keeping the practice whole; the specialist\u2019s tone is part of the care experience.',
            ],
            sections: [
              {
                heading: 'Statement Clarity',
                bullets: [
                  'Show total charges, payer payment, and adjustments.',
                  'Explain the remaining balance in plain language.',
                  'Provide contact information for questions.',
                ],
              },
              {
                heading: 'Ethical Collections',
                bullets: [
                  'Follow all applicable collection laws.',
                  'Offer payment plans per policy.',
                  'Never misrepresent amounts or consequences.',
                  'Document every arrangement.',
                ],
              },
            ],
            keyPoints: [
              'Clear statements prevent disputes and delays.',
              'Explain payer payment and adjustments plainly.',
              'Collections follow law and policy — no harassment.',
              'Respectful financial conversations preserve trust.',
            ],
          },
        ],
      },
      {
        title: 'Revenue Cycle Analytics and Quality Review',
        description: 'Measure billing performance and audit coding quality to protect the practice.',
        lessons: [
          {
            title: 'Accounts Receivable and Denial Metrics',
            minutes: 20,
            intro: [
              'What gets measured gets managed: days in accounts receivable, first-pass acceptance rate, denial rate by reason and payer, and collection percentage are the vital signs of a billing operation. Aging reports sort unpaid claims into buckets — current, 30, 60, 90-plus days — and the oldest buckets get worked first because recoverability decays with time.',
              'Specialists turn metrics into action: a spike in eligibility denials points at registration, a payer-specific rejection pattern points at a contract or system rule, and rising days in AR points at follow-up discipline. Reporting these patterns upward is how a billing specialist becomes a revenue strategist.',
            ],
            sections: [
              {
                heading: 'Core Metrics',
                bullets: [
                  'Days in accounts receivable.',
                  'First-pass claim acceptance rate.',
                  'Denial rate by reason and payer.',
                  'Net collection percentage.',
                ],
              },
              {
                heading: 'Working the Aging Report',
                steps: [
                  'Sort claims by age and value.',
                  'Work the oldest and largest first.',
                  'Document every follow-up action.',
                  'Escalate payer pattern issues.',
                ],
              },
            ],
            keyPoints: [
              'Metrics are the billing operation\u2019s vital signs.',
              'Aging buckets prioritize follow-up work.',
              'Recoverability decays with claim age.',
              'Pattern recognition turns clerks into strategists.',
            ],
          },
          {
            title: 'Internal Coding Quality Audits',
            minutes: 25,
            intro: [
              'Internal audits sample coded encounters against documentation to measure accuracy before an external auditor does it for you. A simple audit pulls a sample per provider, compares assigned codes to the documented story, and scores errors by type — specificity, sequencing, unsupported services. Results feed training, not punishment.',
              'Audit findings that reveal systemic risk — a repeated upcoding pattern, a misunderstanding of a guideline — get documented corrective action: education, process change, and re-audit to confirm the fix. Voluntary self-auditing is the strongest compliance posture a practice can demonstrate.',
            ],
            sections: [
              {
                heading: 'Audit Method',
                steps: [
                  'Pull a random sample per provider.',
                  'Compare codes to documentation line by line.',
                  'Score errors by category.',
                  'Report findings with education, not blame.',
                  'Re-audit after corrective action.',
                ],
              },
              {
                heading: 'Common Audit Findings',
                bullets: [
                  'Insufficient specificity in diagnosis coding.',
                  'E/M levels unsupported by documentation.',
                  'Missing laterality.',
                  'Services documented but never billed — revenue leakage.',
                ],
              },
            ],
            keyPoints: [
              'Self-audits find problems before external auditors do.',
              'Errors are scored by type to target training.',
              'Corrective action is documented and re-audited.',
              'Voluntary auditing is the strongest compliance posture.',
            ],
            callout: {
              variant: 'tip',
              title: 'Career skill',
              text: 'Specialists who can run a clean internal audit are first in line for compliance and management roles.',
            },
          },
        ],
      },
    ],
    questions: [
      { domain: 'Medical Terminology and Anatomy', difficulty: 'easy', q: 'The suffix "-ectomy" means:', choices: ['Inflammation', 'Surgical removal', 'Visual examination', 'Abnormal condition'], answer: 1, why: 'The suffix -ectomy denotes surgical removal, as in appendectomy.' },
      { domain: 'Medical Terminology and Anatomy', difficulty: 'medium', q: 'A procedure described as "distal to the elbow" takes place:', choices: ['Closer to the trunk than the elbow', 'At the elbow', 'Farther from the trunk than the elbow', 'On the opposite arm'], answer: 2, why: 'Distal means farther from the point of attachment to the trunk.' },
      { domain: 'ICD-10-CM Diagnosis Coding', difficulty: 'easy', q: 'What is the correct sequence for assigning a diagnosis code?', choices: ['Code directly from the Alphabetic Index', 'Look up the Alphabetic Index, then verify in the Tabular List', 'Use the Tabular List only', 'Copy the prior encounter\u2019s codes'], answer: 1, why: 'The index locates candidate codes; the Tabular List verification applies instructional notes and is mandatory.' },
      { domain: 'ICD-10-CM Diagnosis Coding', difficulty: 'medium', q: 'When a combination code fully captures two linked documented conditions, the coder should:', choices: ['Report both conditions separately', 'Use the combination code', 'Report only the more severe condition', 'Query the payer'], answer: 1, why: 'A combination code that fully captures the documented relationship replaces separate reporting.' },
      { domain: 'CPT Procedure Coding', difficulty: 'medium', q: 'Under current office-visit guidelines, E/M level selection is based on:', choices: ['Documentation volume', 'Medical decision making or total time', 'Number of body systems examined', 'The provider\u2019s specialty'], answer: 1, why: 'Office-visit levels are selected by medical decision making or documented total time.' },
      { domain: 'CPT Procedure Coding', difficulty: 'hard', q: 'A patient returns for a routine post-operative check within the surgical global period for the same procedure. How is the visit reported?', choices: ['As a new office visit', 'With a modifier to force payment', 'It is bundled in the surgical package and not separately reported', 'As a consultation'], answer: 2, why: 'Routine related follow-up within the global period is included in the surgical package.' },
      { domain: 'HCPCS and Modifiers', difficulty: 'easy', q: 'HCPCS Level II codes primarily cover:', choices: ['Office visit levels', 'Supplies, drugs, and durable medical equipment', 'Hospital room charges', 'Diagnosis categories'], answer: 1, why: 'HCPCS Level II fills the gaps CPT leaves: supplies, administered drugs, equipment, and select services.' },
      { domain: 'HCPCS and Modifiers', difficulty: 'medium', q: 'Before reporting units for an administered drug, the specialist must check:', choices: ['The vial size on hand', 'The code descriptor\u2019s dose per unit', 'The patient\u2019s weight', 'The wholesale price'], answer: 1, why: 'Units follow the descriptor\u2019s defined dose; mismatching units is a common costly error.' },
      { domain: 'Insurance Plans and Payers', difficulty: 'easy', q: 'Which cost-sharing term describes a fixed amount paid per visit?', choices: ['Premium', 'Deductible', 'Copay', 'Coinsurance'], answer: 2, why: 'A copay is the fixed per-service amount; coinsurance is a percentage split.' },
      { domain: 'Insurance Plans and Payers', difficulty: 'medium', q: 'Which plan type typically requires a primary-care referral before a specialist visit?', choices: ['PPO', 'HMO', 'High-deductible plan', 'Indemnity plan'], answer: 1, why: 'HMO designs use primary-care gatekeeping and referrals for specialty services.' },
      { domain: 'Claim Submission and the Revenue Cycle', difficulty: 'easy', q: 'Which claim format is standard for professional (provider office) services?', choices: ['UB-04', 'CMS-1500', 'DEA Form 222', 'W-2'], answer: 1, why: 'The CMS-1500 (or its electronic equivalent) carries professional claims; UB-04 is institutional.' },
      { domain: 'Claim Submission and the Revenue Cycle', difficulty: 'medium', q: 'A contractual adjustment on a remittance should be:', choices: ['Billed to the patient', 'Written off per the payer contract', 'Appealed automatically', 'Ignored'], answer: 1, why: 'The difference between charges and the allowed amount is contractually written off and never billed to the patient.' },
      { domain: 'Claim Submission and the Revenue Cycle', difficulty: 'medium', type: 'scenario', q: 'A claim rejects because the subscriber ID does not match the payer\u2019s file. What is the most likely upstream cause?', choices: ['Wrong procedure code', 'Demographic or insurance information captured incorrectly at registration', 'Missing modifier', 'Timely filing'], answer: 1, why: 'Identity mismatches trace to registration data — the classic example of an upstream error surfacing downstream.' },
      { domain: 'Denials and Appeals', difficulty: 'easy', q: 'What is the single most important rule about appeal deadlines?', choices: ['They are flexible for large claims', 'A late appeal is lost regardless of merit', 'They only apply to Medicare', 'They restart with each phone call'], answer: 1, why: 'Payer appeal windows are absolute; calendar and track every one.' },
      { domain: 'Denials and Appeals', difficulty: 'medium', type: 'scenario', q: 'An imaging claim denies for medical necessity. Which appeal package is strongest?', choices: ['A letter stating the service was necessary', 'The clinical note, the order, and a citation of the payer\u2019s coverage policy', 'A rebill of the same claim', 'A phone call with no documentation'], answer: 1, why: 'Effective appeals answer the denial reason with documentation and policy citation, not assertion.' },
      { domain: 'Compliance and Fraud Prevention', difficulty: 'easy', q: 'Deliberately billing for a higher-level service than documented is called:', choices: ['Unbundling', 'Upcoding', 'Capitation', 'Adjudication'], answer: 1, why: 'Upcoding — reporting a higher service level than documented — is a fraud pattern.' },
      { domain: 'Compliance and Fraud Prevention', difficulty: 'medium', q: 'A supervisor instructs you to bill services you know were not documented. The correct action is to:', choices: ['Comply to keep your job', 'Refuse and report through the compliance channel', 'Bill it but note your objection privately', 'Ask a coworker to submit it'], answer: 1, why: 'Submitting known-false claims is fraud; compliance channels exist precisely for this, with anti-retaliation protections.' },
      { domain: 'Patient Billing and Collections', difficulty: 'easy', q: 'A clear patient statement should show:', choices: ['Only the total due', 'Charges, payer payment, adjustments, and the remaining balance', 'The provider\u2019s costs', 'Other patients\u2019 payment plans'], answer: 1, why: 'Transparency about charges, payments, and adjustments prevents disputes and speeds payment.' },
      { domain: 'Patient Billing and Collections', difficulty: 'medium', q: 'Which collections practice is acceptable?', choices: ['Calling repeatedly through the night', 'Offering a payment plan per policy', 'Threatening arrest', 'Inflating the balance to pressure payment'], answer: 1, why: 'Law and ethics permit structured payment arrangements and prohibit harassment or misrepresentation.' },
    ],
  },
  // ======================================================================
  // 5. Electronic Health Records Specialist Readiness
  // ======================================================================
  {
    id: 'track_ehr',
    name: 'Electronic Health Records Specialist Readiness',
    shortName: 'EHR Specialist',
    category: 'healthcare',
    weeks: 10,
    description:
      'Become fluent in the system that runs modern care — chart navigation, clinical documentation, orders, privacy and security, and health information workflows.',
    credentialFocus: 'Mapped to CEHRS-style competency domains',
    schoolOverview:
      'A structured EHR readiness pathway covering documentation workflows, order management, privacy and security, and release of information. Skill-verification reports document competency for placement coordinators.',
    studentOverview:
      'Learn to navigate electronic health records the way clinics and hospitals actually use them — documenting encounters, managing orders and results, protecting patient data, and keeping information flowing correctly.',
    prerequisites: 'None. Basic computer literacy is expected.',
    alignmentNotes:
      'Modules and practice banks are mapped to CEHRS-style competency domains: EHR navigation, documentation, order entry support, privacy and security, and health information management. All content is original.',
    domains: [
      'EHR Systems and Navigation',
      'Clinical Documentation',
      'Order Entry and Results Management',
      'Patient Scheduling and Registration',
      'Privacy and Security',
      'Release of Information',
      'Health Data and Reporting',
      'Revenue Cycle Interfaces',
      'Interoperability and Health Information Exchange',
    ],
    modules: [
      {
        title: 'EHR Foundations',
        description: 'Understand what EHRs do, who uses them, and how the specialist supports the system.',
        lessons: [
          {
            title: 'What an EHR Is — and Is Not',
            minutes: 20,
            intro: [
              'An electronic health record is the longitudinal digital chart of a patient\u2019s care: demographics, histories, medications, allergies, problems, notes, orders, results, and images, shared across authorized care settings. It differs from a mere digital filing cabinet because it is active — checking interactions, prompting preventive care, and coordinating between providers.',
              'EHR specialists keep this system trustworthy. They support accurate documentation workflows, manage templates and user issues, monitor data quality, and uphold access rules. The specialist\u2019s creed: the record is only as good as the data entered into it, and bad data in an EHR propagates everywhere.',
            ],
            sections: [
              {
                heading: 'Core EHR Components',
                bullets: [
                  'Problem lists, medication lists, and allergy lists.',
                  'Clinical notes and documentation templates.',
                  'Orders and results management.',
                  'Scheduling, registration, and billing interfaces.',
                ],
              },
              {
                heading: 'Why Data Quality Rules',
                paragraphs: [
                  'An outdated allergy list or a duplicated medication record can cause real harm at prescribing time. Specialists audit, correct through proper channels, and train users — because in an EHR, every error is multiplied by every system that reads it.',
                ],
              },
            ],
            keyPoints: [
              'EHRs are active clinical systems, not digital filing cabinets.',
              'Lists and notes must stay current to stay safe.',
              'Specialists safeguard data quality and access.',
              'Errors propagate through every connected system.',
            ],
          },
          {
            title: 'Users, Roles, and Clinical Workflows',
            minutes: 20,
            intro: [
              'Every EHR user works through a role that defines what they can see and do — provider, nurse, front desk, billing, specialist. Role-based access is both a workflow design and a legal requirement: users get the minimum access their job needs. Specialists configure and support these roles without ever exceeding their own.',
              'Understanding clinical workflows — check-in, rooming, the provider encounter, checkout, follow-up — lets the specialist anticipate where documentation breaks down. A workflow map is the specialist\u2019s diagnostic tool: when data is wrong, trace where it entered and why.',
            ],
            sections: [
              {
                heading: 'Role-Based Access Principles',
                bullets: [
                  'Access matches job function — minimum necessary.',
                  'Role changes follow approval processes.',
                  'Specialists never exceed their own access.',
                  'Access audits review who can see what.',
                ],
              },
              {
                heading: 'The Visit Workflow',
                steps: [
                  'Schedule and register.',
                  'Room the patient and update histories.',
                  'Provider encounter and orders.',
                  'Checkout, follow-up, and billing handoff.',
                ],
              },
            ],
            keyPoints: [
              'Roles define access; minimum necessary is the rule.',
              'Workflow knowledge is the specialist\u2019s diagnostic lens.',
              'Data problems are traced to their workflow entry point.',
              'Specialists support users without exceeding their own role.',
            ],
          },
        ],
      },
      {
        title: 'Navigation and Chart Structure',
        description: 'Move through charts efficiently and find information fast.',
        lessons: [
          {
            title: 'Chart Anatomy and Search Skills',
            minutes: 20,
            intro: [
              'EHR charts organize into consistent regions: facesheet demographics, problem and medication lists, encounter notes, results, and documents. Specialists learn each system\u2019s layout until navigation is reflexive, because clinical teams depend on them to locate information in seconds — the last CBC, the current medication list, the cardiology consult.',
              'Search discipline protects accuracy. Similar patient names demand two-identifier verification before opening any chart, and chart search tools locate documents faster than browsing — but the specialist always confirms they are in the right chart before acting.',
            ],
            sections: [
              {
                heading: 'Standard Chart Regions',
                bullets: [
                  'Facesheet: demographics, contacts, coverage.',
                  'Lists: problems, medications, allergies.',
                  'Encounters: notes by visit.',
                  'Results: laboratory, imaging, diagnostics.',
                ],
              },
              {
                heading: 'Right-Chart Discipline',
                bullets: [
                  'Verify two identifiers before opening a chart.',
                  'Watch for same-name and same-birthdate alerts.',
                  'Confirm the chart before entering or releasing anything.',
                ],
              },
            ],
            keyPoints: [
              'Charts share a common regional anatomy.',
              'Speed comes from layout fluency, not shortcuts.',
              'Two identifiers precede every chart opening.',
              'Confirm the chart before acting in it.',
            ],
            callout: {
              variant: 'warning',
              title: 'Watch for',
              text: 'Same-name patients are a top source of wrong-chart errors — slow down at every name-match warning.',
            },
          },
          {
            title: 'Documentation Tools: Templates, Flowsheets, and Smart Tools',
            minutes: 25,
            intro: [
              'Templates structure documentation so visits capture consistent data; flowsheets record repeating measurements like vitals across time; smart tools pull live data — the medication list, recent vitals — into notes automatically. These tools speed documentation and standardize it, which is why organizations invest in building them well.',
              'The risks are equally real: copy-forward propagates outdated information, auto-populated text can describe exams never performed, and checkbox documentation can contradict the narrative. Specialists train users to verify every pulled-forward element, because a templated error looks authoritative and fools the next reader.',
            ],
            sections: [
              {
                heading: 'Tool Purposes',
                bullets: [
                  'Templates: consistent encounter structure.',
                  'Flowsheets: trending repeated measurements.',
                  'Smart tools: live data inserted into notes.',
                  'Order sets: grouped standard orders.',
                ],
              },
              {
                heading: 'Documentation Hazards',
                bullets: [
                  'Copy-forward carries stale findings.',
                  'Auto-text can describe work not performed.',
                  'Contradictions between structured and narrative text.',
                  'Verify every imported element before signing.',
                ],
              },
            ],
            keyPoints: [
              'Templates and flowsheets standardize capture.',
              'Smart tools insert live data — which must be verified.',
              'Copy-forward is a documented patient-safety hazard.',
              'Templated errors look authoritative and spread.',
            ],
          },
        ],
      },
      {
        title: 'Clinical Documentation Workflows',
        description: 'Support accurate, complete documentation across the care team.',
        lessons: [
          {
            title: 'Histories, Vitals, and Medication Reconciliation',
            minutes: 25,
            intro: [
              'Rooming documentation sets up the whole encounter: chief concern, histories, vitals, and the medication list. Medication reconciliation — verifying what the patient actually takes against what the chart says — catches discrepancies that matter: stopped medications still listed, new drugs never added, doses that changed. Patients often use multiple pharmacies and specialists, so the chart list is wrong more often than anyone expects.',
              'Allergy documentation demands equal rigor: the substance and the reaction. "Penicillin" without a reaction tells the prescriber little; "penicillin — hives" does. Intolerance is not allergy, and the distinction changes prescribing options, so the specialist documents what the patient reports accurately and flags inconsistencies.',
            ],
            sections: [
              {
                heading: 'Medication Reconciliation Steps',
                steps: [
                  'Review the chart list with the patient.',
                  'Ask about over-the-counter drugs and supplements.',
                  'Identify stopped, changed, and new medications.',
                  'Update the list and flag discrepancies for the provider.',
                ],
              },
              {
                heading: 'Allergy Documentation',
                bullets: [
                  'Record substance and reaction together.',
                  'Distinguish allergy from intolerance.',
                  'Never leave reaction fields blank.',
                ],
              },
            ],
            keyPoints: [
              'Rooming data shapes the entire encounter.',
              'Medication lists are often wrong — reconcile every visit.',
              'Allergies need reactions, not just drug names.',
              'Discrepancies go to the provider before prescribing.',
            ],
            callout: {
              variant: 'safety',
              title: 'Safety',
              text: 'An unreconciled medication list is a prescribing hazard — reconciliation at every transition of care is a national safety practice.',
            },
          },
          {
            title: 'Problem Lists and Clinical Correspondence',
            minutes: 20,
            intro: [
              'The problem list is the chart\u2019s table of contents: active conditions, resolved conditions, and the dates that define them. A well-kept list makes the chart readable in seconds; a neglected one — everything "active," nothing dated — forces providers to dig through years of notes. Specialists support list hygiene through deduplication and routing updates to the right clinical owner.',
              'Clinical correspondence — referral letters, consult reports, outside records — arrives through multiple channels and must be filed to the right chart with the right document type. Misfiling an outside record means the provider makes decisions without it; filing it to the wrong patient is a privacy breach. Document management is detail work with clinical stakes.',
            ],
            sections: [
              {
                heading: 'Problem List Hygiene',
                bullets: [
                  'Active problems are truly active.',
                  'Resolved problems carry resolution dates.',
                  'Duplicates are merged through proper channels.',
                  'Clinical owners approve clinical changes.',
                ],
              },
              {
                heading: 'Filing Discipline',
                bullets: [
                  'Verify patient identity on every document.',
                  'Use the correct document type and date of service.',
                  'Route documents requiring review to the provider.',
                  'Never leave scanned documents unfiled.',
                ],
              },
            ],
            keyPoints: [
              'The problem list is the chart\u2019s table of contents.',
              'List hygiene is a team discipline.',
              'Misfiling hides information or breaches privacy.',
              'Every document gets the right patient, type, and date.',
            ],
          },
        ],
      },
      {
        title: 'Orders and Results Management',
        description: 'Support order entry workflows and keep results moving to providers.',
        lessons: [
          {
            title: 'Order Entry Support and Order Sets',
            minutes: 25,
            intro: [
              'Computerized order entry lets providers place laboratory, imaging, medication, and referral orders electronically, with decision support checking interactions, duplicates, and dosing in real time. Specialists support the workflow: maintaining order sets, troubleshooting routing, and ensuring orders carry correct diagnosis linkage and performing-location details.',
              'Alert fatigue is the workflow\u2019s known weakness — too many low-value warnings train users to dismiss the important ones. Specialists help by reporting problematic alerts and supporting tuning, but the clinical judgment about any alert always belongs to the licensed provider.',
            ],
            sections: [
              {
                heading: 'Order Entry Workflow',
                steps: [
                  'Provider selects the order and links the diagnosis.',
                  'Decision support screens the order.',
                  'Order routes to the performing department.',
                  'Specimen or service is completed.',
                  'Result returns to the provider\u2019s inbox.',
                ],
              },
              {
                heading: 'Specialist Support Tasks',
                bullets: [
                  'Maintain order sets and favorites.',
                  'Troubleshoot routing failures.',
                  'Report alert-fatigue patterns.',
                  'Never override clinical decision support.',
                ],
              },
            ],
            keyPoints: [
              'Order entry includes real-time safety checking.',
              'Diagnosis linkage travels with every order.',
              'Alert fatigue is a recognized system risk.',
              'Clinical override decisions belong to providers.',
            ],
          },
          {
            title: 'Results Routing and Follow-Up',
            minutes: 20,
            intro: [
              'Results only help patients when they reach someone who acts on them. Inbox workflows route results to the ordering provider, with defined handling for critical values — immediate notification per policy, documented with time and recipient. A critical result sitting unread is a recognized malpractice and safety failure pattern.',
              'Specialists keep the routing machinery honest: verifying that performing departments transmit correctly, monitoring for orphaned results with no responsible recipient, and supporting the documentation of patient notification. Follow-up closure — result reviewed, patient notified, plan documented — is the loop specialists help close.',
            ],
            sections: [
              {
                heading: 'Critical Value Handling',
                steps: [
                  'Result flagged critical by the performing source.',
                  'Immediate notification to the responsible provider.',
                  'Document time, recipient, and read-back.',
                  'Track until acknowledged.',
                ],
              },
              {
                heading: 'Routing Integrity',
                bullets: [
                  'Verify interfaces deliver results to the chart.',
                  'Monitor for orphaned or unrouted results.',
                  'Support documentation of patient notification.',
                ],
              },
            ],
            keyPoints: [
              'Results need a responsible recipient, always.',
              'Critical values require immediate documented notification.',
              'Orphaned results are a specialist watch item.',
              'The loop closes with documented patient follow-up.',
            ],
            callout: {
              variant: 'warning',
              title: 'Watch for',
              text: 'Unread abnormal results are among the most common sources of missed diagnoses — routing integrity is patient safety work.',
            },
          },
        ],
      },
      {
        title: 'Scheduling, Registration, and Front-Office Data',
        description: 'Support the registration data that everything downstream depends on.',
        lessons: [
          {
            title: 'Registration Data Quality',
            minutes: 20,
            intro: [
              'Registration data — identity, contact details, coverage — feeds every downstream system, so errors at the front desk become claim rejections, missed appointment reminders, and wrong-chart risks later. Specialists support registration quality through duplicate-record detection, field standardization, and training on verification scripts.',
              'Duplicate and overlaid records are the most dangerous registration failures. A duplicate fragments one patient\u2019s history across two charts; an overlay merges two patients into one. Both require formal correction procedures — never casual merging — because fixing them wrong compounds the harm.',
            ],
            sections: [
              {
                heading: 'Registration Verification Points',
                bullets: [
                  'Identity verified against a photo ID.',
                  'Coverage verified against the current card.',
                  'Contact information confirmed at each visit.',
                  'Duplicates flagged for the correction process.',
                ],
              },
              {
                heading: 'Duplicate vs. Overlay',
                bullets: [
                  'Duplicate: one patient, two records.',
                  'Overlay: two patients, one record.',
                  'Both require formal correction workflows.',
                  'Never merge records without authorization.',
                ],
              },
            ],
            keyPoints: [
              'Registration errors propagate everywhere downstream.',
              'Duplicates fragment history; overlays mix patients.',
              'Record merges follow formal procedures only.',
              'Verification scripts catch errors at entry.',
            ],
          },
          {
            title: 'Scheduling Systems and Recall Workflows',
            minutes: 20,
            intro: [
              'Scheduling is resource management: provider templates define visit types and lengths, and correct booking protects both access and documentation quality — a complex visit squeezed into a ten-minute slot produces rushed notes. Specialists support template maintenance and scheduling-rule compliance.',
              'Recall and reminder workflows drive preventive care: patients due for screenings, follow-ups, and chronic-care visits are identified from chart data and contacted through approved channels. These lists are only as good as the chart data behind them — another reason data quality is the specialist\u2019s theme.',
            ],
            sections: [
              {
                heading: 'Scheduling Integrity',
                bullets: [
                  'Visit types match template lengths.',
                  'Referral requirements noted at booking.',
                  'Waitlists fill cancellations efficiently.',
                ],
              },
              {
                heading: 'Recall Logic',
                bullets: [
                  'Due lists draw from problem and result data.',
                  'Outreach follows approved communication channels.',
                  'Completed recalls are documented and closed.',
                ],
              },
            ],
            keyPoints: [
              'Templates translate clinical needs into schedule rules.',
              'Wrong slot lengths degrade care and documentation.',
              'Recall lists run on chart data quality.',
              'Outreach channels require privacy-compliant handling.',
            ],
          },
        ],
      },
      {
        title: 'Privacy, Security, and Access Management',
        description: 'Protect health information through access controls and secure practice.',
        lessons: [
          {
            title: 'HIPAA in the EHR Environment',
            minutes: 25,
            intro: [
              'Privacy law gives patients rights over their health information and limits how covered organizations use and disclose it. The minimum-necessary standard governs routine work: access only what your task requires. EHR audit logs record every chart access, and inappropriate viewing — a celebrity patient, a neighbor, a family member — is detectable and terminable.',
              'Patient rights have operational teeth: patients may request access to their records, request amendments, and receive an accounting of certain disclosures. Specialists route these requests through the health information management process with its defined timelines rather than improvising responses.',
            ],
            sections: [
              {
                heading: 'Minimum Necessary in Practice',
                bullets: [
                  'Open only the charts your task requires.',
                  'Never browse records out of curiosity.',
                  'Audit logs make every access visible.',
                  'Report suspected inappropriate access.',
                ],
              },
              {
                heading: 'Patient Rights Requests',
                bullets: [
                  'Record access requests follow defined timelines.',
                  'Amendment requests route to HIM.',
                  'Disclosure accounting is a managed process.',
                  'Never improvise a response to a rights request.',
                ],
              },
            ],
            keyPoints: [
              'Minimum necessary governs routine access.',
              'Audit logs make inappropriate viewing detectable.',
              'Patients hold access, amendment, and accounting rights.',
              'Rights requests follow formal HIM processes.',
            ],
            callout: {
              variant: 'warning',
              title: 'Career alert',
              text: 'Curiosity-viewing of records is among the most common reasons health workers are terminated — audit trails do not forget.',
            },
          },
          {
            title: 'Security Practices: Passwords, Sessions, and Threats',
            minutes: 20,
            intro: [
              'Technical security starts with personal discipline: unique strong credentials never shared, screens locked when stepping away, and sessions logged out on shared workstations. A chart left open under your login is your access in the audit log, regardless of who typed.',
              'Phishing remains the dominant attack on healthcare organizations — emails that steal credentials through fake login pages or deliver malicious attachments. Specialists model the defense: verify unexpected requests through a separate channel, report suspicious messages, and never disable security controls for convenience.',
            ],
            sections: [
              {
                heading: 'Personal Security Habits',
                bullets: [
                  'Never share credentials — with anyone.',
                  'Lock screens on every departure.',
                  'Log out of shared workstations.',
                  'Report lost badges or devices immediately.',
                ],
              },
              {
                heading: 'Phishing Recognition',
                bullets: [
                  'Urgency and threats are classic bait.',
                  'Verify requests via a separate known channel.',
                  'Hover-check links before clicking.',
                  'Report suspicious messages — do not delete silently.',
                ],
              },
            ],
            keyPoints: [
              'Your login is your legal identity in the record.',
              'Screen locking is a habit, not a preference.',
              'Phishing is the dominant healthcare attack.',
              'Reporting suspicious messages protects everyone.',
            ],
          },
        ],
      },
      {
        title: 'Release of Information and Data Use',
        description: 'Handle record requests correctly and support legitimate data reporting.',
        lessons: [
          {
            title: 'Release of Information Workflows',
            minutes: 25,
            intro: [
              'Release of information (ROI) is the controlled process of disclosing records: valid authorization, identity verification, minimum-necessary scope, and documentation of what was sent, to whom, and when. Authorizations must be complete — patient identity, recipient, purpose, date range, signature, and expiry — and certain record types carry extra protections under federal and state rules.',
              'Different request types travel different rails: treatment disclosures between providers generally need no authorization; patient-directed releases need valid signed authorization; legal demands such as subpoenas route through HIM review. The specialist\u2019s default is simple — when unsure, stop and ask HIM before anything leaves.',
            ],
            sections: [
              {
                heading: 'Valid Authorization Elements',
                bullets: [
                  'Patient identity and two identifiers.',
                  'Named recipient and purpose.',
                  'Specific records and date range.',
                  'Signature, date, and expiration.',
                ],
              },
              {
                heading: 'Request Routing',
                bullets: [
                  'Treatment sharing: permitted without authorization.',
                  'Patient-directed release: valid authorization required.',
                  'Legal demands: HIM review before response.',
                  'Unsure? Stop and escalate.',
                ],
              },
            ],
            keyPoints: [
              'ROI is authorization, verification, scope, and documentation.',
              'Incomplete authorizations are invalid.',
              'Sensitive record categories carry extra protections.',
              'Nothing leaves when the request is questionable.',
            ],
          },
          {
            title: 'Registries, Reporting, and Data Quality',
            minutes: 20,
            intro: [
              'Health data serves purposes beyond one patient\u2019s care: immunization registries, reportable-condition notifications, quality-measure reporting, and population health programs. Specialists support these flows by ensuring the underlying documentation is coded and complete — a report is only as accurate as the chart data feeding it.',
              'Data quality dimensions give the work vocabulary: accuracy, completeness, timeliness, and consistency. Audit routines — sampling charts against source documents, checking list currency — measure quality and target training. Specialists who can quantify data quality become indispensable to compliance and quality teams.',
            ],
            sections: [
              {
                heading: 'Data Destinations',
                bullets: [
                  'Immunization and disease registries.',
                  'Reportable-condition notifications.',
                  'Quality-measure and incentive reporting.',
                  'Population health management.',
                ],
              },
              {
                heading: 'Quality Dimensions',
                bullets: [
                  'Accuracy: does it match reality?',
                  'Completeness: is anything missing?',
                  'Timeliness: is it current?',
                  'Consistency: does it agree across the chart?',
                ],
              },
            ],
            keyPoints: [
              'Reports are only as good as chart data.',
              'Four dimensions define data quality.',
              'Audits quantify quality and target fixes.',
              'Specialists connect documentation to downstream reporting.',
            ],
          },
        ],
      },
      {
        title: 'Interfaces, Interoperability, and Professional Practice',
        description: 'Understand how systems connect and how specialists support the whole ecosystem.',
        lessons: [
          {
            title: 'Interfaces and Health Information Exchange',
            minutes: 25,
            intro: [
              'EHRs talk to other systems through interfaces: laboratory and imaging systems send results in, billing systems receive charges out, and health information exchanges let authorized organizations query records across institutional boundaries. Standard formats and vocabularies — such as structured messaging standards and common clinical terminologies — make this machine conversation possible.',
              'When interfaces fail, data fails silently: results that never arrive look identical to results never performed. Specialists monitor interface queues, escalate failures promptly, and understand reconciliation workflows that catch dropped messages. Interface literacy separates competent specialists from mere users.',
            ],
            sections: [
              {
                heading: 'Common Interface Flows',
                bullets: [
                  'Laboratory results into the EHR.',
                  'Charges out to billing systems.',
                  'Documents in from scanning and transcription.',
                  'Queries across health information exchanges.',
                ],
              },
              {
                heading: 'Failure Watch',
                bullets: [
                  'Monitor interface error queues.',
                  'Missing results look like unperformed tests.',
                  'Escalate failures immediately.',
                  'Reconciliation catches dropped messages.',
                ],
              },
            ],
            keyPoints: [
              'Interfaces move data between systems automatically.',
              'Standard formats make cross-system exchange possible.',
              'Interface failures are silent and dangerous.',
              'Queue monitoring is core specialist work.',
            ],
          },
          {
            title: 'The Specialist\u2019s Professional Practice',
            minutes: 20,
            intro: [
              'EHR specialists succeed on a blend of technical fluency and professional trust: they handle the organization\u2019s most sensitive data, support clinicians under time pressure, and train users with patience. Reliability, discretion, and clear communication are the traits that build the reputation.',
              'Continuous learning is structural to the role: systems upgrade constantly, regulations evolve, and each organization configures differently. Specialists who document workflows, maintain tip sheets, and share knowledge multiply their value across the team.',
            ],
            sections: [
              {
                heading: 'Reputation Builders',
                bullets: [
                  'Respond to clinical requests quickly and accurately.',
                  'Protect confidentiality without exception.',
                  'Document solutions so the next person benefits.',
                  'Stay current on system changes.',
                ],
              },
              {
                heading: 'Knowledge Habits',
                bullets: [
                  'Keep personal workflow notes and tip sheets.',
                  'Attend upgrade trainings.',
                  'Share fixes with the team.',
                ],
              },
            ],
            keyPoints: [
              'Trust is the specialist\u2019s core professional asset.',
              'Speed plus accuracy defines support quality.',
              'Documentation of solutions multiplies value.',
              'System fluency requires continuous learning.',
            ],
            callout: {
              variant: 'exam',
              title: 'Exam focus',
              text: 'Scenario questions often test the privacy minimum-necessary rule and correct request routing — when in doubt, escalate to HIM.',
            },
          },
        ],
      },
      {
        title: 'Patient Portal and Engagement Support',
        description: 'Support the patient-facing side of the EHR — portals, messages, and access requests.',
        lessons: [
          {
            title: 'Portal Enrollment and Support',
            minutes: 20,
            intro: [
              'Patient portals give patients access to their records, appointment requests, medication refill requests, and secure messaging — and specialists support the front line of that access. Enrollment workflows verify identity before accounts are activated, because a portal account created for the wrong person is a full-scale privacy breach.',
              'Support work is patient and precise: walking patients through activation codes, resetting access through verified channels, and explaining what the portal shows. Proxy access — parents viewing children\u2019s records, adult children assisting parents — follows defined rules with age-based limits that specialists apply exactly.',
            ],
            sections: [
              {
                heading: 'Enrollment Safeguards',
                bullets: [
                  'Identity verified before account activation.',
                  'Activation codes tied to the verified patient.',
                  'Proxy access follows age and authorization rules.',
                  'Suspicious access requests escalate.',
                ],
              },
              {
                heading: 'Common Support Scenarios',
                bullets: [
                  'Forgotten credentials: verified reset paths only.',
                  'Activation help for less tech-confident patients.',
                  'Explaining result-release timing in the portal.',
                ],
              },
            ],
            keyPoints: [
              'Portals extend the record to the patient.',
              'Identity verification precedes every activation.',
              'Proxy access has defined age-based rules.',
              'Portal support is privacy-sensitive work.',
            ],
          },
          {
            title: 'Managing Patient Messages and Requests',
            minutes: 20,
            intro: [
              'Portal messages flow into triage queues where administrative and clinical staff sort them: refill requests route one way, scheduling requests another, and clinical questions to licensed staff. Response-time standards are tracked because an unanswered symptom message is a clinical risk, not just a service failure.',
              'Specialists keep the queues healthy: routing rules maintained, template responses current, and urgent-indicator messages flagged immediately per protocol. Patients reporting emergencies by portal message trigger the same escalation discipline as a phone call — the channel does not dilute the urgency.',
            ],
            sections: [
              {
                heading: 'Queue Discipline',
                bullets: [
                  'Messages routed by type to the right queue.',
                  'Response times tracked against standards.',
                  'Urgent indicators flagged immediately.',
                  'Nothing clinical sits unanswered.',
                ],
              },
              {
                heading: 'Scenario: The Weekend Symptom Message',
                paragraphs: [
                  'A Monday-morning queue holds a patient message describing chest discomfort sent Saturday night. The protocol answer is immediate escalation to clinical staff and a documented callback — plus a workflow review of whether after-hours auto-replies correctly direct emergencies to emergency services.',
                ],
              },
            ],
            keyPoints: [
              'Message queues are clinical infrastructure.',
              'Routing rules and templates stay current.',
              'Emergency content escalates regardless of channel.',
              'Auto-replies must direct emergencies correctly.',
            ],
            callout: {
              variant: 'safety',
              title: 'Safety',
              text: 'A symptom message sitting in a queue is a patient waiting for help — queue aging is a safety metric, not a convenience metric.',
            },
          },
        ],
      },
      {
        title: 'System Maintenance and Upgrade Support',
        description: 'Support the routine care of the EHR system itself.',
        lessons: [
          {
            title: 'Downtime Procedures and System Events',
            minutes: 20,
            intro: [
              'EHRs go down — for planned maintenance and unplanned failures — and care cannot stop. Downtime procedures switch the clinic to paper workflows: downtime forms, manual medication reconciliation, and read-only access where available. Specialists know where the downtime kits live and how the recovery process back-fills paper documentation into the system.',
              'Back-entry after recovery is quality-critical: scanned downtime documents, reconciled medication lists, and verified orders. A sloppy recovery leaves the chart disagreeing with reality — the exact condition the system exists to prevent.',
            ],
            sections: [
              {
                heading: 'Downtime Essentials',
                bullets: [
                  'Downtime kits and forms are staged and known.',
                  'Read-only reference access where available.',
                  'Care documentation continues on paper.',
                  'Back-fill follows the recovery procedure.',
                ],
              },
              {
                heading: 'Recovery Quality Checks',
                bullets: [
                  'All downtime documents scanned and indexed.',
                  'Medication lists reconciled.',
                  'Orders verified against the paper record.',
                ],
              },
            ],
            keyPoints: [
              'Downtime procedures keep care moving.',
              'Specialists know the kits and the workflows.',
              'Recovery back-fill is quality-critical.',
              'The chart must match reality after recovery.',
            ],
          },
          {
            title: 'Upgrades, Testing, and User Support',
            minutes: 20,
            intro: [
              'EHR vendors release upgrades constantly, and each one changes workflows someone depends on. Specialists support upgrade cycles by reviewing release notes for workflow impact, participating in test scripts that verify critical paths — ordering, prescribing, result routing — and preparing users with tip sheets and training.',
              'User support is the daily face of the role: password resets through verified processes, how-do-I questions answered with patience, and issue tickets documented with steps to reproduce. Good ticket documentation — user, workflow, exact error, screenshots — is what gets problems fixed fast.',
            ],
            sections: [
              {
                heading: 'Upgrade Support Cycle',
                steps: [
                  'Review release notes for workflow impact.',
                  'Run test scripts on critical paths.',
                  'Prepare user communications and training.',
                  'Support go-live and capture issues.',
                ],
              },
              {
                heading: 'Ticket Quality',
                bullets: [
                  'User, workflow, and exact error text.',
                  'Steps to reproduce.',
                  'Screenshots where allowed by policy.',
                  'Impact assessment: one user or the whole clinic.',
                ],
              },
            ],
            keyPoints: [
              'Upgrades are workflow events, not just software events.',
              'Test scripts protect critical clinical paths.',
              'Ticket quality determines fix speed.',
              'Patient, prepared support builds system trust.',
            ],
          },
        ],
      },
    ],
    questions: [
      { domain: 'EHR Systems and Navigation', difficulty: 'easy', q: 'Which chart region lists a patient\u2019s current medications?', choices: ['The facesheet', 'The medication list', 'The encounter notes', 'The billing module'], answer: 1, why: 'The medication list is the maintained, current record of a patient\u2019s medications.' },
      { domain: 'EHR Systems and Navigation', difficulty: 'medium', type: 'scenario', q: 'You search a common patient name and two charts appear with the same birth year. What do you do first?', choices: ['Open the first chart', 'Verify identity using two identifiers before opening any chart', 'Ask the patient which chart is theirs', 'Merge the charts'], answer: 1, why: 'Two-identifier verification before opening a chart prevents wrong-chart documentation and disclosure errors.' },
      { domain: 'Clinical Documentation', difficulty: 'easy', q: 'Allergy documentation should include the substance and:', choices: ['The prescribing provider', 'The reaction', 'The pharmacy', 'The cost'], answer: 1, why: 'The reaction distinguishes true allergy from intolerance and guides prescribing decisions.' },
      { domain: 'Clinical Documentation', difficulty: 'medium', q: 'What is the primary purpose of medication reconciliation?', choices: ['To update the insurance record', 'To verify the chart list against what the patient actually takes', 'To reduce pharmacy costs', 'To schedule refills'], answer: 1, why: 'Reconciliation catches stopped, changed, and unlisted medications before prescribing decisions rely on a wrong list.' },
      { domain: 'Clinical Documentation', difficulty: 'medium', q: 'Why is copy-forward documentation considered hazardous?', choices: ['It slows the system', 'It propagates outdated or unverified information that looks authoritative', 'It violates copyright', 'It uses too much storage'], answer: 1, why: 'Copied-forward content can describe exams never performed and fools subsequent readers.' },
      { domain: 'Order Entry and Results Management', difficulty: 'medium', q: 'A laboratory result flagged as a critical value requires:', choices: ['Filing within 24 hours', 'Immediate notification to the responsible provider, documented with time and recipient', 'An email to the patient', 'No special handling'], answer: 1, why: 'Critical values demand immediate, documented provider notification per policy.' },
      { domain: 'Order Entry and Results Management', difficulty: 'hard', q: 'A provider\u2019s expected lab result never appears in the chart, and the interface queue shows an error. The greatest risk is that:', choices: ['The lab will bill twice', 'A missing result looks like a test never performed, delaying diagnosis', 'The printer is broken', 'The patient will be rescheduled'], answer: 1, why: 'Silent interface failures make performed tests invisible — a recognized missed-diagnosis pattern.' },
      { domain: 'Patient Scheduling and Registration', difficulty: 'easy', q: 'A duplicate record means:', choices: ['Two patients in one chart', 'One patient with two separate charts', 'A chart with two visits', 'A backup copy of the record'], answer: 1, why: 'Duplicates fragment one patient\u2019s history across records; an overlay is the reverse error.' },
      { domain: 'Patient Scheduling and Registration', difficulty: 'medium', q: 'Why do registration errors matter beyond the front desk?', choices: ['They slow down check-in', 'They propagate into claims, reminders, and clinical matching', 'They affect parking validation', 'They only matter for audits'], answer: 1, why: 'Registration data feeds billing, outreach, and record matching throughout the organization.' },
      { domain: 'Privacy and Security', difficulty: 'easy', q: 'The minimum-necessary standard means:', choices: ['Access all records to save time', 'Access only the information your task requires', 'Share freely within the building', 'Print records for convenience'], answer: 1, why: 'Routine access is limited to what the specific task requires — and audit logs verify compliance.' },
      { domain: 'Privacy and Security', difficulty: 'medium', type: 'scenario', q: 'A coworker asks to borrow your login "just to check one thing quickly." The correct response is to:', choices: ['Share it this once', 'Refuse — credentials are never shared', 'Log in for them and watch', 'Ask them to be quick'], answer: 1, why: 'Your credentials are your legal identity in the record; sharing them is a serious violation.' },
      { domain: 'Privacy and Security', difficulty: 'medium', q: 'An unexpected email urges immediate password verification through a link. The best action is to:', choices: ['Click quickly to avoid lockout', 'Verify through a known separate channel and report the message', 'Forward it to coworkers', 'Reply asking for details'], answer: 1, why: 'Urgency is phishing bait; verify independently and report so security can protect others.' },
      { domain: 'Release of Information', difficulty: 'easy', q: 'Which element must a valid authorization for release include?', choices: ['The patient\u2019s signature and the specific records to be released', 'The provider\u2019s tax ID', 'The insurance policy number', 'A witness photograph'], answer: 0, why: 'Complete authorizations identify the patient, recipient, purpose, records, signature, and expiry.' },
      { domain: 'Release of Information', difficulty: 'medium', q: 'A subpoena for records arrives at the front desk. The correct action is to:', choices: ['Copy the chart immediately', 'Route it to health information management for review', 'Ignore it', 'Call the patient first'], answer: 1, why: 'Legal demands go through HIM review — staff never respond to subpoenas directly.' },
      { domain: 'Health Data and Reporting', difficulty: 'medium', q: 'Which is NOT one of the core data-quality dimensions?', choices: ['Accuracy', 'Completeness', 'Profitability', 'Timeliness'], answer: 2, why: 'Data quality is measured by accuracy, completeness, timeliness, and consistency — not revenue.' },
      { domain: 'Health Data and Reporting', difficulty: 'medium', q: 'Quality-measure reports ultimately depend on:', choices: ['The billing system\u2019s speed', 'The accuracy and completeness of chart documentation', 'The number of providers', 'The appointment template'], answer: 1, why: 'Every downstream report inherits the quality of the underlying chart data.' },
      { domain: 'Revenue Cycle Interfaces', difficulty: 'easy', q: 'Which EHR-generated data typically flows to the billing system?', choices: ['Nurse schedules', 'Charges from documented services', 'Cafeteria menus', 'Parking records'], answer: 1, why: 'Charges generated from documented clinical activity cross the interface to billing.' },
      { domain: 'Revenue Cycle Interfaces', difficulty: 'medium', q: 'If charges fail to cross the interface, the visible symptom is:', choices: ['Faster claim payment', 'Services documented but never billed', 'Duplicate patient statements', 'Locked user accounts'], answer: 1, why: 'Interface charge failures create unbilled services — silent revenue loss requiring queue monitoring.' },
      { domain: 'Interoperability and Health Information Exchange', difficulty: 'medium', q: 'A health information exchange allows:', choices: ['Authorized organizations to query records across institutional boundaries', 'Patients to edit their charts', 'Billing companies to sell data', 'Pharmacies to print coupons'], answer: 0, why: 'HIEs permit authorized cross-organization record access to support care continuity.' },
      { domain: 'Interoperability and Health Information Exchange', difficulty: 'hard', type: 'scenario', q: 'An emergency department physician treats your patient out of state and needs the medication list. What mechanism supports this?', choices: ['The patient\u2019s memory only', 'Authorized query through health information exchange, where available', 'Faxing the entire chart without verification', 'Social media messaging'], answer: 1, why: 'HIE query is the designed pathway for authorized cross-institution access in urgent care.' },
    ],
  },

  // ======================================================================
  // 6. Medical Administrative Assistant Readiness
  // ======================================================================
  {
    id: 'track_maa',
    name: 'Medical Administrative Assistant Readiness',
    shortName: 'Medical Admin',
    category: 'healthcare',
    weeks: 10,
    description:
      'Run the front office of a modern practice — scheduling, registration, records, communication, billing support, and compliance in one readiness pathway.',
    credentialFocus: 'Mapped to CMAA-style competency domains',
    schoolOverview:
      'A complete front-office readiness pathway covering patient intake, scheduling, records, and billing support with documented competency evidence. Reports support externship placement and employer conversations.',
    studentOverview:
      'Become the person a medical office cannot run without — managing schedules, greeting and registering patients, handling records and calls, and supporting billing. Practice scenarios mirror real front-desk days.',
    prerequisites: 'None. Basic computer and keyboarding skills are helpful.',
    alignmentNotes:
      'Modules and practice banks are mapped to CMAA-style competency domains: scheduling, intake, records management, communication, and billing support. All content is original.',
    domains: [
      'Scheduling and Appointment Management',
      'Patient Registration and Intake',
      'Health Records Management',
      'Professional Communication',
      'Telephone and Triage Basics',
      'Billing and Insurance Support',
      'Office Operations and Supplies',
      'Privacy and Compliance',
      'Medical Terminology for Administration',
    ],
    modules: [
      {
        title: 'The Front Office and the Patient Experience',
        description: 'Understand the administrative assistant\u2019s role in running a medical office.',
        lessons: [
          {
            title: 'The Administrative Assistant\u2019s Role',
            minutes: 20,
            intro: [
              'The medical administrative assistant is the practice\u2019s first impression and operational hub: greeting and registering patients, managing the schedule, handling calls and records, and supporting billing. Clinical staff depend on accurate front-office work — a missed referral note or a wrong insurance entry becomes a clinical or financial problem downstream.',
              'The role\u2019s defining skill is calm multitasking under interruption. Phones ring while patients check in while providers request records, and the professional prioritizes by clinical urgency and policy, not by who is loudest. Organization systems — checklists, queues, message protocols — make the multitasking reliable.',
            ],
            sections: [
              {
                heading: 'Daily Operational Scope',
                bullets: [
                  'Greet, verify, and register arriving patients.',
                  'Manage the appointment schedule and waitlist.',
                  'Handle calls, messages, and records requests.',
                  'Support billing, collections, and end-of-day balancing.',
                ],
              },
              {
                heading: 'Prioritization Logic',
                bullets: [
                  'Clinical urgency outranks routine tasks.',
                  'In-person patients and ringing phones both need acknowledgment.',
                  'Message protocols keep provider interruptions purposeful.',
                ],
              },
            ],
            keyPoints: [
              'The front office is the practice\u2019s operational hub.',
              'Front-office errors become downstream clinical and billing problems.',
              'Prioritize by urgency and policy, not volume.',
              'Systems and checklists make multitasking reliable.',
            ],
          },
          {
            title: 'Creating a Professional Patient Experience',
            minutes: 20,
            intro: [
              'Patients judge a practice first by its front office. Greeting every arrival promptly, keeping the waiting area orderly, giving honest wait-time updates, and protecting conversation privacy at the desk define the experience. Small courtesies — using names, explaining delays — measurably reduce complaints.',
              'Difficult moments are part of the job: frustrated patients, payment disputes, long waits. De-escalation follows a pattern — listen fully, acknowledge the frustration, state what you can do, and follow through. Knowing when to involve the office manager protects both the patient relationship and yourself.',
            ],
            sections: [
              {
                heading: 'Experience Fundamentals',
                bullets: [
                  'Acknowledge every arrival within moments.',
                  'Give honest, updated wait-time information.',
                  'Shield sensitive conversations from the waiting room.',
                  'Keep the reception area clean and organized.',
                ],
              },
              {
                heading: 'De-escalation Pattern',
                steps: [
                  'Listen without interrupting.',
                  'Acknowledge the frustration sincerely.',
                  'Offer what you can do.',
                  'Follow through or escalate to the manager.',
                ],
              },
            ],
            keyPoints: [
              'The front office defines first impressions.',
              'Honest wait updates prevent most frustration.',
              'Desk conversations require privacy discipline.',
              'De-escalation is a learnable, repeatable pattern.',
            ],
          },
        ],
      },
      {
        title: 'Scheduling and Appointment Management',
        description: 'Run appointment systems that match patient needs to provider capacity.',
        lessons: [
          {
            title: 'Appointment Systems and Visit Types',
            minutes: 25,
            intro: [
              'Scheduling matches patient needs to provider time using defined visit types with set lengths — new patient, follow-up, procedure, urgent same-day. Booking the right type protects the day: a new-patient workup squeezed into a follow-up slot cascades into delays for everyone. Matrix management also blocks provider meetings, procedures, and unavailable hours.',
              'Scheduling methods vary by practice design. Wave scheduling books several patients at the hour top to absorb variability; modified-wave spreads them; stream scheduling assigns individual times; open-hours models accept walk-ins. Understanding your practice\u2019s method — and its failure modes — is core administrative knowledge.',
            ],
            sections: [
              {
                heading: 'Scheduling Methods',
                bullets: [
                  'Wave: multiple patients per hour block.',
                  'Modified wave: staggered within the hour.',
                  'Stream: individual appointment times.',
                  'Open hours: walk-in based.',
                ],
              },
              {
                heading: 'Booking Discipline',
                bullets: [
                  'Match the visit type to the stated need.',
                  'Confirm provider availability and resources.',
                  'Note referral or authorization requirements.',
                  'Record contact numbers for schedule changes.',
                ],
              },
            ],
            keyPoints: [
              'Visit types define slot lengths and protect the day.',
              'Wrong-type bookings cascade into delays.',
              'Know your practice\u2019s scheduling method.',
              'Requirements are captured at booking, not at arrival.',
            ],
          },
          {
            title: 'Cancellations, No-Shows, and Reminders',
            minutes: 20,
            intro: [
              'Appointment reminders — calls, texts, or portal messages per patient preference — cut no-show rates significantly and give practices time to backfill slots. Confirmation of high-demand appointments is standard practice, and reminder content stays minimal to protect privacy: date, time, and office, never diagnoses.',
              'Cancellations and no-shows follow policy: documentation in the record, rescheduling offers, and waitlist activation to fill sudden openings. Chronic no-show patterns are documented because they matter clinically — a patient missing cardiology follow-ups faces real risk, and providers decide on outreach.',
            ],
            sections: [
              {
                heading: 'Reminder Content Rules',
                bullets: [
                  'Date, time, and office information only.',
                  'No diagnoses or clinical detail in messages.',
                  'Use the patient\u2019s approved contact channel.',
                ],
              },
              {
                heading: 'Managing Openings',
                steps: [
                  'Document the cancellation or no-show.',
                  'Offer rescheduling immediately.',
                  'Activate the waitlist to fill the slot.',
                  'Flag chronic no-shows for provider awareness.',
                ],
              },
            ],
            keyPoints: [
              'Reminders measurably reduce no-shows.',
              'Message content stays minimal for privacy.',
              'No-shows are documented — patterns matter clinically.',
              'Waitlists convert cancellations into filled slots.',
            ],
            callout: {
              variant: 'exam',
              title: 'Exam focus',
              text: 'Scheduling-method definitions and reminder privacy rules are frequent exam items — know both cold.',
            },
          },
        ],
      },
      {
        title: 'Registration and Patient Intake',
        description: 'Capture complete, accurate demographic and insurance information.',
        lessons: [
          {
            title: 'Registration Data Capture',
            minutes: 25,
            intro: [
              'Registration builds the administrative record every other process depends on: legal identity, contact information, emergency contacts, coverage details, and consent signatures. Verification against photo ID and the current insurance card prevents identity and eligibility errors that surface weeks later as claim rejections or wrong-patient hazards.',
              'New-patient packets gather history forms, consent to treat, privacy acknowledgments, and financial policy signatures. Reviewing returned forms for completeness before the visit — blank sections, unsigned consents — keeps the encounter on schedule and the record compliant.',
            ],
            sections: [
              {
                heading: 'Intake Checklist',
                steps: [
                  'Verify identity against photo ID.',
                  'Capture or update demographics and contacts.',
                  'Verify insurance against the current card.',
                  'Collect completed forms and consents.',
                  'Collect applicable copays per policy.',
                ],
              },
              {
                heading: 'Common Registration Errors',
                bullets: [
                  'Transposed digits in subscriber IDs.',
                  'Outdated coverage from an old card.',
                  'Unsigned consent forms.',
                  'Missing emergency contact information.',
                ],
              },
            ],
            keyPoints: [
              'Registration data feeds billing, clinical, and communication systems.',
              'Verify against source documents, not memory.',
              'Form completeness is checked before the visit.',
              'Identity errors are patient-safety events, not typos.',
            ],
          },
          {
            title: 'Scenario Lab: The Busy Check-In',
            minutes: 25,
            intro: [
              'Front-desk competence shows under load. Consider the morning rush: three patients arrive together, one is a new patient with incomplete forms, one is upset about a bill, and the phone is ringing. The skilled response acknowledges everyone immediately, triages by clinical urgency — the patient here for a procedure check-in outranks paperwork questions — and uses systems rather than memory.',
              'Patient intake scenarios like this reward a consistent mental checklist: identity verified, coverage current, forms complete, copay handled, clinical team notified. Practicing the checklist until it runs automatically is what turns a hectic desk into a smooth one.',
            ],
            sections: [
              {
                heading: 'Rush-Hour Priorities',
                steps: [
                  'Acknowledge every arrival immediately.',
                  'Triage by clinical urgency and appointment type.',
                  'Use the intake checklist for each patient.',
                  'Route billing disputes to the right resource.',
                  'Notify clinical staff of arrivals.',
                ],
              },
              {
                heading: 'The Intake Checklist, Memorized',
                bullets: [
                  'Identity — verified against ID.',
                  'Coverage — verified against the current card.',
                  'Forms — complete and signed.',
                  'Payment — per policy.',
                  'Handoff — clinical team aware.',
                ],
              },
            ],
            keyPoints: [
              'Acknowledge everyone, then triage by urgency.',
              'Checklists beat memory under pressure.',
              'Clinical needs outrank paperwork questions.',
              'Practice the intake sequence until automatic.',
            ],
          },
        ],
      },
      {
        title: 'Health Records and Document Management',
        description: 'Manage charts, filings, and record requests accurately.',
        lessons: [
          {
            title: 'Filing Systems and Record Organization',
            minutes: 20,
            intro: [
              'Whether electronic or hybrid, record systems live or die on filing discipline: documents filed to the correct patient, under the correct document type, with the correct date of service. Misfiling does not just lose information — it can put one patient\u2019s data in another\u2019s chart, a privacy breach with clinical consequences.',
              'Document handling follows a chain: receive, verify identity elements, index to the correct chart and category, route to the provider when review is needed, and never leave items in limbo. Turnaround standards — same-day or next-day filing — keep the chart trustworthy for the next encounter.',
            ],
            sections: [
              {
                heading: 'Filing Chain',
                steps: [
                  'Verify patient identity on the document.',
                  'Assign the correct document type and date.',
                  'File to the correct chart.',
                  'Route to the provider if review is required.',
                  'Confirm nothing remains unfiled.',
                ],
              },
              {
                heading: 'Misfiling Consequences',
                bullets: [
                  'Information invisible at the next visit.',
                  'Wrong-patient disclosure risk.',
                  'Broken result follow-up chains.',
                ],
              },
            ],
            keyPoints: [
              'Right patient, right type, right date — every document.',
              'Misfiling is both a quality and a privacy failure.',
              'Provider-review items are routed, not just filed.',
              'Filing turnaround keeps charts trustworthy.',
            ],
          },
          {
            title: 'Record Requests and Release Support',
            minutes: 25,
            intro: [
              'Administrative staff handle constant record traffic: patients requesting copies, other offices requesting transfers, and forms requiring completion. Every release follows the practice\u2019s authorization process — valid signed authorization, identity verification, and documented fulfillment through the designated channel.',
              'Staff learn the boundaries that protect patients: treatment-sharing between providers generally proceeds without separate authorization, while releases to employers, attorneys, or family members require explicit valid authorization. Any request that feels unusual stops at the supervisor or health information desk before anything leaves.',
            ],
            sections: [
              {
                heading: 'Release Essentials',
                bullets: [
                  'Valid authorization for non-treatment releases.',
                  'Identity verification of the requester.',
                  'Documented fulfillment: what, to whom, when.',
                  'Unusual requests escalate before release.',
                ],
              },
              {
                heading: 'Scenario: The Employer Call',
                paragraphs: [
                  'An employer calls asking whether an employee attended an appointment. The correct response releases nothing — appointment information is protected — and routes the requester to the formal records process. Courtesy and firmness coexist: "I\u2019m unable to confirm any patient information, but here is how records requests work."',
                ],
              },
            ],
            keyPoints: [
              'Non-treatment releases require valid authorization.',
              'Fulfillment is documented every time.',
              'Appointment information alone is protected.',
              'Unusual requests stop and escalate.',
            ],
            callout: {
              variant: 'warning',
              title: 'Watch for',
              text: 'Requests from employers, family members, and callers claiming urgency are classic privacy tests — the process answers them, not the phone conversation.',
            },
          },
        ],
      },
      {
        title: 'Communication and Telephone Skills',
        description: 'Handle calls, messages, and professional correspondence.',
        lessons: [
          {
            title: 'Telephone Technique and Message Handling',
            minutes: 25,
            intro: [
              'The telephone is the practice\u2019s busiest front door. Professional call handling follows a structure: identify the office and yourself, listen actively, verify the caller\u2019s identity and the patient they reference, document a complete message, and set expectations for response times. Smile before you pick up — callers hear it.',
              'Complete messages are a clinical safety tool: patient identity with two identifiers, callback number, reason in the caller\u2019s words, urgency indicators, and time of call. Symptom descriptions route per the practice\u2019s triage protocol — administrative staff never give medical advice, and urgent symptom lists route immediately to clinical staff.',
            ],
            sections: [
              {
                heading: 'Message Completeness',
                bullets: [
                  'Patient name plus a second identifier.',
                  'Callback number, repeated back.',
                  'Reason in the caller\u2019s own words.',
                  'Time of call and your initials.',
                  'Urgency indicators noted and routed.',
                ],
              },
              {
                heading: 'Never Do on the Phone',
                bullets: [
                  'Give medical advice or interpretations.',
                  'Confirm protected information to unverified callers.',
                  'Leave urgent symptom messages in routine queues.',
                ],
              },
            ],
            keyPoints: [
              'Structured call handling projects professionalism.',
              'Complete messages protect patients clinically.',
              'Administrative staff never give medical advice.',
              'Urgent symptoms route immediately per protocol.',
            ],
            callout: {
              variant: 'safety',
              title: 'Safety',
              text: 'Chest pain, difficulty breathing, and similar emergency symptoms described on the phone trigger the practice\u2019s emergency protocol immediately — know it before your first day.',
            },
          },
          {
            title: 'Written and Electronic Correspondence',
            minutes: 20,
            intro: [
              'Practice correspondence — referral letters, patient reminders, forms, and portal messages — represents the office in writing. Professional formatting, correct spelling of names and terms, and privacy-appropriate channels are the baseline; clinical content comes from providers, with administrative staff handling structure and delivery.',
              'Electronic messaging adds rules: patient portal messages become part of the record and are written accordingly; email to patients uses only approved secure channels; text reminders carry minimal content. Tone survives badly in writing — reread every message as the patient will read it before sending.',
            ],
            sections: [
              {
                heading: 'Correspondence Standards',
                bullets: [
                  'Professional format and proofreading.',
                  'Clinical content authored by clinical staff.',
                  'Correct patient identifiers on every document.',
                  'Approved secure channels for electronic delivery.',
                ],
              },
              {
                heading: 'Channel Rules',
                bullets: [
                  'Portal messages join the medical record.',
                  'No clinical detail in unsecured email or text.',
                  'Minimal content in reminders.',
                ],
              },
            ],
            keyPoints: [
              'Written work represents the practice permanently.',
              'Clinical content comes from clinicians.',
              'Electronic channels have privacy rules.',
              'Reread every message as its recipient.',
            ],
          },
        ],
      },
      {
        title: 'Billing and Insurance Support',
        description: 'Support the billing cycle from copays to claims follow-up.',
        lessons: [
          {
            title: 'Copays, Payments, and Daily Balancing',
            minutes: 25,
            intro: [
              'Front-office financial tasks follow daily discipline: collect copays at check-in per the verified plan, issue receipts, post payments to the correct account, and reconcile the drawer or system totals at day\u2019s end. Discrepancies are investigated the same day — cash-handling problems only grow with time.',
              'Explaining patient responsibility is a communication skill as much as a billing task. Patients respond to clarity: what insurance covers, what their deductible means today, what payment options exist. Scripts and plain language turn tense payment moments into routine ones.',
            ],
            sections: [
              {
                heading: 'Daily Financial Workflow',
                steps: [
                  'Verify the plan and copay at check-in.',
                  'Collect and receipt every payment.',
                  'Post to the correct patient account.',
                  'Balance the day\u2019s collections.',
                  'Investigate discrepancies immediately.',
                ],
              },
              {
                heading: 'Explaining Responsibility',
                bullets: [
                  'Use plain language for deductibles and copays.',
                  'Offer payment options per policy.',
                  'Document arrangements made.',
                ],
              },
            ],
            keyPoints: [
              'Copays are collected at check-in, not chased later.',
              'Every payment is receipted and posted correctly.',
              'Daily balancing catches errors while they are small.',
              'Plain-language financial conversations reduce conflict.',
            ],
          },
          {
            title: 'Insurance Verification and Referral Support',
            minutes: 25,
            intro: [
              'Insurance verification before visits confirms active coverage, correct plan details, copay amounts, and referral or authorization requirements — the front office\u2019s contribution to clean claims. Verification notes document what was confirmed, when, and with whom.',
              'Referral coordination keeps the HMO machinery moving: obtaining referral numbers, sending records to specialists per authorization, scheduling within referral validity windows, and tracking completion. A specialist visit without a valid referral converts to a denial or an unhappy patient — preventable with a checklist.',
            ],
            sections: [
              {
                heading: 'Verification Record',
                bullets: [
                  'Coverage active on the visit date.',
                  'Copay and deductible status.',
                  'Referral or authorization requirements.',
                  'Date, source, and staff initials.',
                ],
              },
              {
                heading: 'Referral Checklist',
                bullets: [
                  'Referral number obtained and recorded.',
                  'Records sent per authorization.',
                  'Appointment within the validity window.',
                  'Completion tracked and reported back.',
                ],
              },
            ],
            keyPoints: [
              'Verification prevents eligibility denials.',
              'Document every verification.',
              'Referral numbers and validity windows are tracked.',
              'Checklists make referral workflows reliable.',
            ],
          },
        ],
      },
      {
        title: 'Office Operations and Terminology',
        description: 'Support daily operations, supplies, and the language of the office.',
        lessons: [
          {
            title: 'Office Operations and Supply Management',
            minutes: 20,
            intro: [
              'Smooth offices run on unglamorous systems: supply par levels with reorder triggers, equipment maintenance logs, and opening and closing checklists that make every day start ready. The administrative assistant often owns these systems, and their reliability is visible everywhere — a printer without toner at check-in time is a front-office failure.',
              'Meeting and provider-calendar support rounds out operations: scheduling rooms, preparing agendas, and managing the flow of pharmaceutical or vendor representatives per policy. Every operational task protects the clinical schedule\u2019s integrity.',
            ],
            sections: [
              {
                heading: 'Systems That Run Offices',
                bullets: [
                  'Par-level supply ordering.',
                  'Equipment maintenance logs.',
                  'Opening and closing checklists.',
                  'Vendor visit policies.',
                ],
              },
              {
                heading: 'Calendar Discipline',
                bullets: [
                  'Block provider unavailability accurately.',
                  'Prepare meeting materials in advance.',
                  'Protect clinical time from vendor drop-ins.',
                ],
              },
            ],
            keyPoints: [
              'Par levels prevent supply emergencies.',
              'Checklists make readiness repeatable.',
              'Calendar accuracy protects clinical time.',
              'Operations work is patient-care work, indirectly.',
            ],
          },
          {
            title: 'Terminology for the Front Office',
            minutes: 25,
            intro: [
              'Administrative staff decode terminology constantly: scheduling a "follow-up for hypertension," routing a "dermatology referral," or documenting a "CBC order." Fluency prevents embarrassing errors and earns clinical colleagues\u2019 trust — the front office that speaks the language integrates with the back office.',
              'Flashcard-style study of high-frequency terms pays off quickly: body-system roots, common test names, specialty names, and the abbreviations the practice uses in scheduling. Building a personal glossary of your own practice\u2019s vocabulary accelerates the learning curve in any new office.',
            ],
            sections: [
              {
                heading: 'Starter Flashcard List',
                bullets: [
                  'hypertension: high blood pressure.',
                  'CBC: complete blood count.',
                  'dermatology: skin specialty.',
                  'cardiology: heart specialty.',
                  'referral: formal specialty consult request.',
                  'stat: immediately.',
                ],
              },
              {
                heading: 'Building Fluency',
                bullets: [
                  'Keep a personal glossary.',
                  'Learn the practice\u2019s common abbreviations.',
                  'Ask clinical staff about unfamiliar terms.',
                ],
              },
            ],
            keyPoints: [
              'Terminology fluency prevents administrative errors.',
              'Flashcard practice builds vocabulary steadily.',
              'Personal glossaries speed onboarding anywhere.',
              'Asking beats guessing on unfamiliar terms.',
            ],
            callout: {
              variant: 'tip',
              title: 'Career tip',
              text: 'The fastest way to earn clinical colleagues\u2019 trust is terminology fluency — study ten terms a day during your first months.',
            },
          },
        ],
      },
      {
        title: 'Privacy and Professional Compliance',
        description: 'Apply privacy rules and professional standards to every administrative task.',
        lessons: [
          {
            title: 'Privacy at the Front Desk',
            minutes: 25,
            intro: [
              'The front desk is privacy\u2019s hardest environment: conversations happen within earshot of waiting rooms, screens face passersby, and sign-in processes can expose patient names. Mitigations are concrete — low voices, privacy screens, sign-in methods that limit visible information, and verification before discussing any account.',
              'Caller identity verification deserves special discipline because the front desk cannot see who is calling. Confirming identity through established processes before discussing appointments or accounts protects patients from snooping family members and worse. "I can\u2019t confirm that information" is a complete, professional sentence.',
            ],
            sections: [
              {
                heading: 'Desk-Level Privacy Practices',
                bullets: [
                  'Low voices for sensitive exchanges.',
                  'Privacy screens on monitors.',
                  'Limited-information sign-in methods.',
                  'Verification before any account discussion.',
                ],
              },
              {
                heading: 'Scenario: The Persistent Caller',
                paragraphs: [
                  'A caller insists they are a patient\u2019s spouse and demands appointment details. The professional response is warm but immovable: verification processes exist precisely for this, and no exception is made for persistence, claimed emergencies, or familiarity.',
                ],
              },
            ],
            keyPoints: [
              'Waiting-room earshot shapes desk behavior.',
              'Screens and sign-in sheets leak unless designed not to.',
              'Callers are verified before any disclosure.',
              'Warm firmness is the professional voice.',
            ],
          },
          {
            title: 'Professional Standards and Career Foundations',
            minutes: 20,
            intro: [
              'Administrative professionalism compounds daily: punctuality, polished communication, confidentiality without exception, and follow-through on every commitment. Practices run on trust, and the front office\u2019s reliability determines how much responsibility it earns.',
              'Career growth follows capability: mastering billing support, records management, and compliance opens paths to billing specialization, office management, and health information roles. Documenting your competencies as you build them — exactly what this readiness program provides — turns experience into evidence.',
            ],
            sections: [
              {
                heading: 'Daily Professional Standards',
                bullets: [
                  'Punctual, prepared, and organized.',
                  'Confidentiality without exceptions.',
                  'Every commitment tracked to completion.',
                  'Professional tone in every channel.',
                ],
              },
              {
                heading: 'Growth Directions',
                bullets: [
                  'Billing and coding specialization.',
                  'Office and practice management.',
                  'Health information management.',
                ],
              },
            ],
            keyPoints: [
              'Reliability earns responsibility.',
              'Confidentiality is absolute, not situational.',
              'Follow-through defines professional reputation.',
              'Documented competencies become career evidence.',
            ],
          },
        ],
      },
      {
        title: 'Health Insurance Fundamentals for the Front Office',
        description: 'Read insurance cards, understand plan types, and explain coverage basics to patients.',
        lessons: [
          {
            title: 'Reading the Insurance Card',
            minutes: 20,
            intro: [
              'The insurance card is a compressed data record: subscriber and member identifiers, group number, plan type, copay amounts by service type, and the claims and verification contacts on the back. Front-office staff learn to extract every field their system needs and to spot mismatches — a dependent name, a termed group — before they become claim rejections.',
              'Subscriber-versus-patient relationships matter for billing: the subscriber holds the policy, and the patient may be a dependent. Recording the relationship correctly, along with coordination of benefits when a patient carries two plans, determines which plan pays first — getting the order wrong generates denials and reprocessing.',
            ],
            sections: [
              {
                heading: 'Card Fields That Matter',
                bullets: [
                  'Member and subscriber identifiers.',
                  'Group number and plan type.',
                  'Copays by service type.',
                  'Verification contacts on the back.',
                ],
              },
              {
                heading: 'Coordination of Benefits',
                bullets: [
                  'Primary plan pays first.',
                  'Dependent relationships recorded accurately.',
                  'Birthday rule often orders parents\u2019 plans for children.',
                  'Wrong order equals denial.',
                ],
              },
            ],
            keyPoints: [
              'The card is a compressed billing record.',
              'Every required field is captured at intake.',
              'Subscriber and patient may differ.',
              'Primary-secondary order drives payment.',
            ],
          },
          {
            title: 'Explaining Coverage to Patients',
            minutes: 20,
            intro: [
              'Patients often understand their coverage poorly, and the front office becomes the translator: what a deductible means for today\u2019s visit, why a preventive visit bills differently than a problem visit, what "out of network" costs. Plain-language explanations at check-in prevent surprise bills and the conflicts that follow them.',
              'Boundaries apply: administrative staff explain what the plan document and verification say, and route disputes about coverage decisions to the payer or the billing specialist. Estimates given to patients are labeled as estimates, documented, and based on verified benefit information — never guessed.',
            ],
            sections: [
              {
                heading: 'Plain-Language Translations',
                bullets: [
                  'Deductible: what you pay before the plan shares.',
                  'Copay: fixed amount due today.',
                  'Coinsurance: your percentage after the deductible.',
                  'Out of network: higher cost, sometimes no coverage.',
                ],
              },
              {
                heading: 'Estimate Discipline',
                bullets: [
                  'Base estimates on verified benefits.',
                  'Label every estimate as an estimate.',
                  'Document what was quoted and when.',
                  'Route coverage disputes correctly.',
                ],
              },
            ],
            keyPoints: [
              'Translation at check-in prevents surprise bills.',
              'Preventive and problem visits bill differently.',
              'Estimates are documented and labeled.',
              'Disputes route to the right resource.',
            ],
            callout: {
              variant: 'tip',
              title: 'Service habit',
              text: 'A two-minute coverage explanation at check-in saves a twenty-minute billing dispute next month.',
            },
          },
        ],
      },
      {
        title: 'End-of-Day and Financial Close Procedures',
        description: 'Reconcile the day\u2019s transactions and close the office accurately.',
        lessons: [
          {
            title: 'Daily Reconciliation and Deposit Preparation',
            minutes: 20,
            intro: [
              'End-of-day close matches money to records: payments collected — cash, checks, cards — reconciled against posted receipts in the system, discrepancies investigated before anyone leaves, and deposits prepared per policy with dual control where required. The daily close is the practice\u2019s fraud firewall; skipped closes are where shortages hide.',
              'Charge entry review completes the day: encounters checked for missing charges, unsigned documentation flagged to providers, and the day\u2019s schedule reconciled against checked-in arrivals. Clean daily closes make month-end painless; sloppy ones compound into audit problems.',
            ],
            sections: [
              {
                heading: 'Close Checklist',
                steps: [
                  'Total payments by type.',
                  'Reconcile against posted receipts.',
                  'Investigate every discrepancy same-day.',
                  'Prepare the deposit per policy.',
                  'Review encounters for missing charges.',
                ],
              },
              {
                heading: 'Why Daily Matters',
                bullets: [
                  'Discrepancies are traceable while memory is fresh.',
                  'Dual control deters mishandling.',
                  'Missing charges are revenue leakage.',
                  'Month-end inherits the daily work.',
                ],
              },
            ],
            keyPoints: [
              'Close matches money to records daily.',
              'Same-day discrepancy investigation is the rule.',
              'Missing charge review stops revenue leakage.',
              'Clean daily closes make clean months.',
            ],
          },
          {
            title: 'Opening and Closing the Office',
            minutes: 15,
            intro: [
              'Opening procedures ready the practice before the first patient: systems up, schedule reviewed, waiting area and check-in station prepared, yesterday\u2019s unresolved items reviewed. A prepared opening sets the day\u2019s tempo — the first patient walking into chaos defines the whole morning.',
              'Closing procedures secure the day\u2019s work and the premises: final reconciliation complete, records and devices secured, messages routed for morning, and the facility locked per checklist. Security at close — screens logged out, paperwork cleared from counters — is privacy practice, not housekeeping.',
            ],
            sections: [
              {
                heading: 'Opening Priorities',
                bullets: [
                  'Systems and phones up and tested.',
                  'Day\u2019s schedule reviewed for requirements.',
                  'Check-in station stocked and ready.',
                  'Unresolved items from yesterday reviewed.',
                ],
              },
              {
                heading: 'Closing Priorities',
                bullets: [
                  'Final reconciliation complete.',
                  'Screens logged out, paperwork secured.',
                  'Messages routed for morning follow-up.',
                  'Facility secured per checklist.',
                ],
              },
            ],
            keyPoints: [
              'Openings set the day\u2019s tempo.',
              'Closings secure money, data, and premises.',
              'Privacy practices continue after the last patient.',
              'Checklists make both repeatable.',
            ],
          },
        ],
      },
    ],
    questions: [
      { domain: 'Scheduling and Appointment Management', difficulty: 'easy', q: 'Which scheduling method assigns each patient an individual appointment time?', choices: ['Wave', 'Stream', 'Open hours', 'Cluster'], answer: 1, why: 'Stream scheduling gives each patient a specific time; wave booking groups several at the top of the hour.' },
      { domain: 'Scheduling and Appointment Management', difficulty: 'medium', q: 'What information belongs in an appointment reminder message?', choices: ['The reason for the visit', 'Date, time, and office information only', 'The provider\u2019s notes', 'Test results'], answer: 1, why: 'Reminder content stays minimal to protect privacy — clinical details never appear in messages.' },
      { domain: 'Patient Registration and Intake', difficulty: 'easy', q: 'Insurance information should be verified against:', choices: ['The patient\u2019s memory', 'The current insurance card', 'Last year\u2019s registration', 'A phone call to a family member'], answer: 1, why: 'The current card is the source document; memory and old records produce eligibility errors.' },
      { domain: 'Patient Registration and Intake', difficulty: 'medium', type: 'scenario', q: 'Three patients arrive simultaneously during a rush: one for a scheduled procedure, one new patient with incomplete forms, and one with a billing question. Who is checked in first under urgency logic?', choices: ['The billing question', 'The new patient', 'The procedure patient', 'Whoever arrived first'], answer: 2, why: 'Clinical urgency outranks administrative tasks; the procedure patient\u2019s check-in protects the clinical schedule.' },
      { domain: 'Health Records Management', difficulty: 'easy', q: 'Misfiling a document into the wrong patient\u2019s chart creates:', choices: ['Only an inconvenience', 'Both a quality failure and a privacy breach', 'A billing delay only', 'No real harm'], answer: 1, why: 'Wrong-chart filing hides needed information and exposes one patient\u2019s data in another\u2019s record.' },
      { domain: 'Health Records Management', difficulty: 'medium', q: 'A document requiring provider review should be:', choices: ['Filed without routing', 'Routed to the provider, then filed', 'Held at the front desk', 'Given to the patient'], answer: 1, why: 'Review-required documents go to the provider first; filing alone can bury clinically important information.' },
      { domain: 'Professional Communication', difficulty: 'medium', q: 'The first step in de-escalating a frustrated patient is to:', choices: ['Explain the policy immediately', 'Listen fully without interrupting', 'Offer a discount', 'Call the manager at once'], answer: 1, why: 'De-escalation begins with listening; solutions offered before the patient feels heard rarely land.' },
      { domain: 'Professional Communication', difficulty: 'easy', q: 'Written correspondence containing clinical content should be authored by:', choices: ['The front desk', 'Clinical staff', 'The billing department', 'The patient'], answer: 1, why: 'Clinical content belongs to licensed clinical staff; administrative staff handle format and delivery.' },
      { domain: 'Telephone and Triage Basics', difficulty: 'easy', q: 'A complete phone message includes the patient\u2019s name and:', choices: ['A diagnosis guess', 'A second identifier, callback number, and reason in the caller\u2019s words', 'The caller\u2019s opinion', 'The provider\u2019s schedule'], answer: 1, why: 'Complete messages carry identifiers, contact details, verbatim reason, time, and urgency indicators.' },
      { domain: 'Telephone and Triage Basics', difficulty: 'medium', type: 'scenario', q: 'A caller describes a patient experiencing chest pain. The administrative assistant should:', choices: ['Take a routine message', 'Follow the practice\u2019s emergency protocol immediately', 'Offer to schedule an appointment', 'Advise rest and fluids'], answer: 1, why: 'Emergency symptom lists trigger immediate protocol action; administrative staff never advise or queue emergencies.' },
      { domain: 'Billing and Insurance Support', difficulty: 'easy', q: 'When should copays ideally be collected?', choices: ['At check-in', 'By mail after the visit', 'Only if the patient asks', 'At year-end'], answer: 0, why: 'Check-in collection is the standard — balances chased later are collected less often and at higher cost.' },
      { domain: 'Billing and Insurance Support', difficulty: 'medium', q: 'A patient\u2019s specialist visit occurred without the required referral. The likely result is:', choices: ['Normal payment', 'A claim denial', 'A higher copay only', 'Automatic appeal'], answer: 1, why: 'HMO referral requirements are payment conditions; missing referrals deny.' },
      { domain: 'Office Operations and Supplies', difficulty: 'easy', q: 'Par levels in supply management refer to:', choices: ['Maximum prices', 'Target stock quantities that trigger reordering', 'Staff ratios', 'Shelf heights'], answer: 1, why: 'Par levels define the stock quantity at which reordering happens, preventing stockouts.' },
      { domain: 'Office Operations and Supplies', difficulty: 'medium', q: 'Vendor representatives visiting the office should be handled:', choices: ['Whenever they arrive', 'According to office policy that protects clinical time', 'By the newest staff member', 'Only at lunch'], answer: 1, why: 'Vendor access follows policy; unscheduled drop-ins disrupt the clinical schedule.' },
      { domain: 'Privacy and Compliance', difficulty: 'easy', q: 'Before discussing an account with a caller, the staff member must:', choices: ['Get the manager', 'Verify the caller\u2019s identity through established processes', 'Ask the patient\u2019s birth year only', 'Check with a coworker'], answer: 1, why: 'Identity verification precedes any disclosure — persistence and familiarity prove nothing.' },
      { domain: 'Privacy and Compliance', difficulty: 'medium', q: 'Which is a proper privacy practice at the front desk?', choices: ['Calling out full names and visit reasons', 'Privacy screens and limited-information sign-in methods', 'Leaving charts open on the counter', 'Discussing accounts in the waiting room'], answer: 1, why: 'Physical and procedural design — screens, sign-in limits, low voices — protects information at the desk.' },
      { domain: 'Medical Terminology for Administration', difficulty: 'easy', q: 'The abbreviation "stat" means:', choices: ['As soon as possible', 'Immediately', 'Twice daily', 'At bedtime'], answer: 1, why: 'Stat demands immediate action — distinct from routine or "as needed" timing.' },
      { domain: 'Medical Terminology for Administration', difficulty: 'easy', q: 'Dermatology is the specialty concerned with:', choices: ['The heart', 'The skin', 'The kidneys', 'The lungs'], answer: 1, why: 'Dermatology covers skin conditions — a high-frequency referral term at the front desk.' },
    ],
  },
  // ======================================================================
  // 7. CPR/First Aid Knowledge Readiness
  // ======================================================================
  {
    id: 'track_cpr',
    name: 'CPR/First Aid Knowledge Readiness',
    shortName: 'CPR & First Aid',
    category: 'healthcare',
    weeks: 8,
    description:
      'Build the emergency-response knowledge every workplace and campus needs — CPR and AED fundamentals, choking response, first aid, and scene safety.',
    credentialFocus: 'Mapped to widely taught CPR/AED/first-aid knowledge categories',
    schoolOverview:
      'A school-wide emergency-readiness pathway covering CPR, AED, choking, bleeding control, and first-aid essentials with knowledge verification per student. Completion reports support campus safety documentation.',
    studentOverview:
      'Learn what to do in the minutes that matter — how to respond to cardiac arrest, choking, bleeding, and common injuries until help arrives. Scenario practice builds the confidence to act.',
    prerequisites: 'None.',
    alignmentNotes:
      'Content is mapped to widely taught CPR/AED/first-aid knowledge categories. This is a knowledge-readiness course; hands-on skills require in-person evaluation through an authorized training provider.',
    domains: [
      'Scene Safety and Assessment',
      'Adult CPR',
      'AED Use',
      'Choking Response',
      'Bleeding and Shock',
      'Burns and Wounds',
      'Medical Emergencies',
      'Injury Emergencies',
      'Environmental Emergencies',
      'Legal and Emotional Considerations',
    ],
    modules: [
      {
        title: 'Preparedness and Scene Safety',
        description: 'Learn to assess emergencies and protect yourself before helping others.',
        lessons: [
          {
            title: 'The Emergency Response Mindset',
            minutes: 20,
            intro: [
              'Emergencies are survivable when bystanders act, and acting is a learnable skill rather than a personality trait. The rescuer\u2019s first responsibility is personal safety: a rescuer who becomes a second victim helps no one. Pausing for a few seconds to scan for traffic, electricity, fire, or violence before approaching is what professionals do.',
              'Activating emergency services early is the single most important action in serious emergencies. Send a specific person — "you in the red jacket, call 911" — because diffused responsibility means nobody calls. Then give care within your training while waiting for help.',
            ],
            sections: [
              {
                heading: 'The First Thirty Seconds',
                steps: [
                  'Scan the scene for hazards.',
                  'Check the person\u2019s responsiveness.',
                  'Point a specific person to call emergency services.',
                  'Send someone for the AED if available.',
                  'Begin care within your training.',
                ],
              },
              {
                heading: 'Why Bystanders Hesitate',
                bullets: [
                  'Fear of doing harm — inaction is worse for arrest victims.',
                  'Assuming someone else will act.',
                  'Uncertainty about the right steps — this course fixes that.',
                ],
              },
            ],
            keyPoints: [
              'Your safety comes first, always.',
              'Scene hazards are scanned before approach.',
              'Assign the emergency call to a specific person.',
              'Early activation of emergency services saves lives.',
            ],
            callout: {
              variant: 'safety',
              title: 'Golden rule',
              text: 'You cannot help anyone if you become a second victim — scene safety always precedes patient contact.',
            },
          },
          {
            title: 'Assessment and Protective Precautions',
            minutes: 20,
            intro: [
              'Assessment follows a simple order: responsiveness first — shout and tap; then breathing — look for normal breathing, not gasps, for no more than ten seconds. Someone unresponsive and not breathing normally needs CPR and an AED immediately; someone breathing normally but unresponsive is placed in the recovery position if no spinal injury is suspected.',
              'Body fluids carry infection risk, so personal protective barriers matter: gloves when available, face shields or pocket masks for rescue breaths, and thorough hand washing afterward. Improvised barriers — a cloth over a wound pressed by the injured person\u2019s own hands — still reduce exposure when supplies are absent.',
            ],
            sections: [
              {
                heading: 'Rapid Assessment',
                steps: [
                  'Shout and tap for responsiveness.',
                  'Look for normal breathing, up to ten seconds.',
                  'Gasping is not normal breathing.',
                  'Unresponsive and not breathing normally: start CPR.',
                  'Breathing but unresponsive: recovery position if safe.',
                ],
              },
              {
                heading: 'Protecting Yourself',
                bullets: [
                  'Gloves for blood or body fluids.',
                  'Barrier devices for rescue breaths.',
                  'Wash hands thoroughly after any care.',
                  'Report exposures to appropriate personnel.',
                ],
              },
            ],
            keyPoints: [
              'Responsiveness, then breathing — in that order.',
              'Gasping counts as not breathing normally.',
              'Barriers protect against infection.',
              'The recovery position protects the airway of a breathing, unresponsive person.',
            ],
          },
        ],
      },
      {
        title: 'Adult CPR Fundamentals',
        description: 'Learn high-quality chest compressions and rescue breathing basics.',
        lessons: [
          {
            title: 'High-Quality Chest Compressions',
            minutes: 25,
            intro: [
              'Cardiac arrest means the heart has stopped pumping effectively, and chest compressions manually circulate blood to the brain and organs until a defibrillator or advanced care can restart the heart. Quality criteria are specific: compress the center of the chest at least 2 inches deep in adults, at a rate of 100 to 120 compressions per minute, with full chest recoil between compressions.',
              'Hand position and body mechanics make sustainable compressions possible: heel of one hand on the center of the chest, second hand on top, shoulders directly over hands, arms straight, pushing from the torso. Interrupting compressions drops blood flow immediately, so pauses are minimized to under ten seconds.',
            ],
            sections: [
              {
                heading: 'Compression Quality Criteria',
                bullets: [
                  'Depth: at least 2 inches in adults.',
                  'Rate: 100–120 per minute.',
                  'Full recoil between compressions.',
                  'Interruptions under ten seconds.',
                ],
              },
              {
                heading: 'Body Mechanics',
                bullets: [
                  'Hands centered on the lower half of the breastbone.',
                  'Shoulders stacked over hands.',
                  'Straight arms; push with body weight.',
                  'Swap compressors about every two minutes to fight fatigue.',
                ],
              },
            ],
            keyPoints: [
              'Compressions circulate blood manually during arrest.',
              'At least 2 inches deep, 100–120 per minute.',
              'Full recoil lets the heart refill.',
              'Minimize every pause.',
            ],
            callout: {
              variant: 'exam',
              title: 'Exam focus',
              text: 'Depth and rate numbers — at least 2 inches, 100–120 per minute — are the most tested facts in CPR knowledge.',
            },
          },
          {
            title: 'Compressions With Rescue Breaths',
            minutes: 20,
            intro: [
              'The standard trained-rescuer cycle is 30 compressions followed by 2 rescue breaths. Breaths use a head-tilt, chin-lift to open the airway, each breath lasting about one second and producing visible chest rise — excessive force or volume pushes air into the stomach instead of the lungs.',
              'For rescuers unwilling or unable to give breaths, hands-only CPR — continuous compressions — is a proven effective alternative for adult sudden collapse and is far better than doing nothing. Barrier devices make breaths safer for those trained to use them.',
            ],
            sections: [
              {
                heading: 'The 30:2 Cycle',
                steps: [
                  'Deliver 30 quality compressions.',
                  'Open the airway with head-tilt, chin-lift.',
                  'Give 2 breaths, one second each.',
                  'Watch for chest rise.',
                  'Resume compressions within ten seconds.',
                ],
              },
              {
                heading: 'Hands-Only CPR',
                bullets: [
                  'Continuous compressions without breaths.',
                  'Appropriate for adult sudden collapse.',
                  'Better than no CPR by far.',
                ],
              },
            ],
            keyPoints: [
              'Thirty compressions to two breaths is the trained cycle.',
              'One-second breaths with visible chest rise.',
              'Hands-only CPR is a valid alternative.',
              'Breath pauses stay under ten seconds.',
            ],
          },
        ],
      },
      {
        title: 'AED Operation',
        description: 'Use an automated external defibrillator safely and confidently.',
        lessons: [
          {
            title: 'How AEDs Work and When to Use Them',
            minutes: 25,
            intro: [
              'An automated external defibrillator analyzes the heart\u2019s rhythm and delivers a shock only when a shockable rhythm is present — the device decides, not the rescuer. Ventricular fibrillation, a chaotic arrest rhythm, is the primary shockable rhythm, and each minute without defibrillation reduces survival substantially. The AED is turned on the moment it arrives, and its voice prompts drive every step.',
              'Pad placement follows the pictures on the pads themselves: one on the upper right chest, one on the left side below the armpit. The chest must be bare and reasonably dry; medication patches are removed and the site wiped before pad placement.',
            ],
            sections: [
              {
                heading: 'AED Facts',
                bullets: [
                  'The device analyzes and decides — not the rescuer.',
                  'Shockable rhythms include ventricular fibrillation.',
                  'Every minute of delay reduces survival.',
                  'Voice prompts guide the whole process.',
                ],
              },
              {
                heading: 'Pad Placement',
                bullets: [
                  'Upper right chest and left side below the armpit.',
                  'Follow the diagrams printed on the pads.',
                  'Bare, dry chest; remove medication patches.',
                ],
              },
            ],
            keyPoints: [
              'AEDs analyze automatically and advise shocks.',
              'Defibrillation delay costs survival with every passing minute.',
              'Turn the AED on immediately upon arrival.',
              'Pads follow their own printed diagrams.',
            ],
          },
          {
            title: 'AED Safety and Special Situations',
            minutes: 20,
            intro: [
              'Shock safety is a loud, deliberate ritual: "Clear!" — visually confirm nobody touches the victim, then press the shock button when advised. Contact during analysis or shock corrupts the reading and endangers rescuers. After any shock — or a no-shock advisory — compressions resume immediately; the AED will reanalyze on its own schedule.',
              'Special situations have simple rules: water is cleared from around the victim and the chest dried; excessive chest hair that prevents adhesion may need quick removal per the kit\u2019s supplies; implanted devices create a small lump under the skin — avoid placing a pad directly over it. Pediatric pads or settings are used for children when available.',
            ],
            sections: [
              {
                heading: 'The Clear Ritual',
                steps: [
                  'Announce "Clear!" loudly.',
                  'Visually verify no contact.',
                  'Press shock only when advised.',
                  'Resume compressions immediately after.',
                ],
              },
              {
                heading: 'Special Situations',
                bullets: [
                  'Move the victim from standing water; dry the chest.',
                  'Remove medication patches and wipe the site.',
                  'Avoid pads directly over implanted devices.',
                  'Use pediatric pads or settings for children when available.',
                ],
              },
            ],
            keyPoints: [
              'Nobody touches the victim during analysis or shock.',
              'Compressions resume immediately after any shock decision.',
              'Water, patches, and implanted devices have simple rules.',
              'Pediatric equipment is used for children when available.',
            ],
            callout: {
              variant: 'safety',
              title: 'Safety',
              text: 'Never delay CPR to hunt for an AED — compressions run until the device arrives and is ready to analyze.',
            },
          },
        ],
      },
      {
        title: 'Choking Response',
        description: 'Clear airway obstructions in conscious and unconscious victims.',
        lessons: [
          {
            title: 'Conscious Choking: Adults and Children',
            minutes: 25,
            intro: [
              'Mild obstruction means the person can cough forcefully or speak — encourage coughing and stay with them; do not intervene physically. Severe obstruction means they cannot speak, breathe, or cough effectively, often clutching the throat in the universal choking sign, and immediate action is required.',
              'The response for a conscious adult or child is alternating sets of 5 back blows and 5 abdominal thrusts per current widely taught protocols. Abdominal thrusts place a fist just above the navel and pull inward and upward; pregnant or very large individuals receive chest thrusts instead. Continue until the object clears or the person becomes unresponsive.',
            ],
            sections: [
              {
                heading: 'Mild vs. Severe',
                bullets: [
                  'Mild: can cough or speak — encourage coughing.',
                  'Severe: cannot speak, breathe, or cough — act now.',
                  'Universal sign: hands clutching the throat.',
                ],
              },
              {
                heading: 'Conscious Response Steps',
                steps: [
                  'Confirm severe obstruction and get consent if possible.',
                  'Position slightly behind and to the side.',
                  'Deliver 5 back blows between the shoulder blades.',
                  'Deliver 5 abdominal thrusts.',
                  'Repeat until clear or unresponsive.',
                ],
              },
            ],
            keyPoints: [
              'Effective cough means encourage, don\u2019t intervene.',
              'Severe obstruction means silent distress — act.',
              'Five back blows alternate with five thrusts.',
              'Pregnancy calls for chest thrusts.',
            ],
          },
          {
            title: 'Unresponsive Choking and Infant Choking',
            minutes: 25,
            intro: [
              'If a choking victim becomes unresponsive, lower them to the ground, activate emergency response, and begin CPR — each time the airway opens for breaths, look for the object and remove it only if visible; blind finger sweeps push objects deeper. Compressions may dislodge the obstruction.',
              'Infant choking uses a different technique: 5 back slaps between the shoulder blades with the infant face-down along the forearm, then 5 chest thrusts with two fingers on the breastbone, face-up. Nothing goes in an infant\u2019s mouth blindly, and abdominal thrusts are never used on infants.',
            ],
            sections: [
              {
                heading: 'Unresponsive Choking Sequence',
                steps: [
                  'Lower to the ground; activate emergency response.',
                  'Begin CPR with compressions.',
                  'Look in the mouth before breaths.',
                  'Remove only visible objects.',
                  'Continue until help arrives or the airway clears.',
                ],
              },
              {
                heading: 'Infant Technique',
                bullets: [
                  '5 back slaps, face-down on the forearm, head supported.',
                  '5 two-finger chest thrusts, face-up.',
                  'Never use abdominal thrusts on infants.',
                  'Never sweep blindly in the mouth.',
                ],
              },
            ],
            keyPoints: [
              'Unresponsive choking becomes CPR with airway checks.',
              'Only visible objects are removed.',
              'Infants get back slaps and chest thrusts.',
              'Blind sweeps are never performed.',
            ],
            callout: {
              variant: 'exam',
              title: 'Exam focus',
              text: 'Know the contrasts: adult thrusts above the navel, infant two-finger chest thrusts, and the blind-sweep prohibition.',
            },
          },
        ],
      },
      {
        title: 'Bleeding, Shock, and Wounds',
        description: 'Control life-threatening bleeding and recognize shock.',
        lessons: [
          {
            title: 'Severe Bleeding Control',
            minutes: 25,
            intro: [
              'Severe bleeding kills in minutes, and direct pressure is the immediate answer: firm, continuous pressure on the wound with a cloth, gauze, or the victim\u2019s own hand while emergency services are called. Pressure is not lifted to check — soaked dressings are reinforced, not removed.',
              'When direct pressure fails for limb bleeding, a tourniquet placed a few inches above the wound — never over a joint — is tightened until bleeding stops, with the application time noted. Wound packing with gauze is the technique for junctional areas where tourniquets cannot go.',
            ],
            sections: [
              {
                heading: 'Bleeding Control Hierarchy',
                steps: [
                  'Apply firm direct pressure immediately.',
                  'Call emergency services.',
                  'Reinforce soaked dressings — never remove them.',
                  'Apply a tourniquet above the wound if pressure fails on a limb.',
                  'Note the tourniquet application time.',
                ],
              },
              {
                heading: 'Tourniquet Rules',
                bullets: [
                  'A few inches above the wound, never over a joint.',
                  'Tighten until bleeding stops.',
                  'Never loosen once applied.',
                  'Record the time.',
                ],
              },
            ],
            keyPoints: [
              'Direct pressure first, immediately, continuously.',
              'Reinforce dressings; do not remove.',
              'Tourniquets go above the wound, tight, with time noted.',
              'Life over limb guides severe bleeding decisions.',
            ],
            callout: {
              variant: 'safety',
              title: 'Critical',
              text: 'Severe bleeding is a minutes-scale emergency — pressure now, deliberation later.',
            },
          },
          {
            title: 'Shock and Minor Wound Care',
            minutes: 20,
            intro: [
              'Shock is the body\u2019s circulatory failure, and it follows significant blood loss, severe allergic reactions, and major trauma. Recognition matters: pale, cool, clammy skin; rapid weak pulse; rapid breathing; confusion or anxiety. First aid is to treat the cause where possible, keep the person lying down and warm, give nothing by mouth, and monitor breathing until help arrives.',
              'Minor wounds are cleaned with running water, covered with clean dressings, and watched for infection — increasing redness, swelling, warmth, pus, or fever. Deep wounds, embedded objects, and wounds from bites need professional care; embedded objects are stabilized, never removed.',
            ],
            sections: [
              {
                heading: 'Shock Recognition',
                bullets: [
                  'Pale, cool, clammy skin.',
                  'Rapid, weak pulse.',
                  'Rapid breathing.',
                  'Confusion, anxiety, or weakness.',
                ],
              },
              {
                heading: 'Wound Care Rules',
                bullets: [
                  'Clean minor wounds with running water.',
                  'Cover with clean dressings.',
                  'Watch for infection signs.',
                  'Stabilize embedded objects — never remove them.',
                ],
              },
            ],
            keyPoints: [
              'Shock follows major blood loss and severe reactions.',
              'Clammy skin plus rapid weak pulse is the classic picture.',
              'Nothing by mouth for shock victims.',
              'Embedded objects are stabilized in place.',
            ],
          },
        ],
      },
      {
        title: 'Burns and Soft-Tissue Injuries',
        description: 'Classify and treat burns and common wounds correctly.',
        lessons: [
          {
            title: 'Burn Classification and First Aid',
            minutes: 25,
            intro: [
              'Burns are classified by depth: superficial burns redden the skin like sunburn; partial-thickness burns blister; full-thickness burns destroy all skin layers and may appear white, brown, or charred with surprisingly little pain because nerves are destroyed. Depth, size, and location determine urgency — burns to the face, hands, feet, joints, or genitals, and any large partial- or full-thickness burn, need emergency care.',
              'First aid for thermal burns is cooling with cool running water — never ice — for at least ten minutes, then covering with a clean, non-stick dressing. Home remedies like butter or ointments trap heat and contaminate wounds; blisters are left intact.',
            ],
            sections: [
              {
                heading: 'Depth Classification',
                bullets: [
                  'Superficial: red, painful, no blisters.',
                  'Partial-thickness: blisters, very painful.',
                  'Full-thickness: white or charred, may be painless.',
                ],
              },
              {
                heading: 'Burn First Aid',
                steps: [
                  'Stop the burning process.',
                  'Cool with running water at least ten minutes.',
                  'Remove jewelry before swelling.',
                  'Cover with a clean non-stick dressing.',
                  'Seek emergency care for serious burns.',
                ],
              },
            ],
            keyPoints: [
              'Depth classification: superficial, partial, full-thickness.',
              'Cool running water, never ice.',
              'No butter, ointments, or home remedies.',
              'Face, hands, feet, and large burns are emergencies.',
            ],
          },
          {
            title: 'Chemical and Electrical Burns',
            minutes: 20,
            intro: [
              'Chemical burns require flushing with large volumes of running water — typically for at least fifteen to twenty minutes — while avoiding contaminating yourself with runoff. Dry chemicals are brushed off before flushing. Safety data references and poison control guidance apply, and all significant chemical burns need medical evaluation.',
              'Electrical injuries are scene-safety emergencies first: never touch a victim still in contact with electricity — shut off the power source first. Electrical burns can hide deep internal damage between entry and exit points, so every electrical shock victim needs medical evaluation even when the skin looks minor.',
            ],
            sections: [
              {
                heading: 'Chemical Burn Response',
                steps: [
                  'Brush off dry chemical first.',
                  'Flush with running water 15–20 minutes.',
                  'Protect yourself from runoff.',
                  'Remove contaminated clothing carefully.',
                  'Seek medical evaluation.',
                ],
              },
              {
                heading: 'Electrical Safety',
                bullets: [
                  'Never touch a victim still connected to power.',
                  'Shut off the source before contact.',
                  'Internal damage can hide behind minor skin marks.',
                  'All electrical shock victims get medical evaluation.',
                ],
              },
            ],
            keyPoints: [
              'Chemical burns flush long — 15 to 20 minutes.',
              'Brush dry chemicals off before flushing.',
              'Power off before touching electrical victims.',
              'Electrical injuries always warrant evaluation.',
            ],
            callout: {
              variant: 'warning',
              title: 'Watch for',
              text: 'A small skin mark from electrical contact can mask serious internal injury — appearance deceives in electrical cases.',
            },
          },
        ],
      },
      {
        title: 'Medical Emergencies',
        description: 'Recognize and respond to heart attack, stroke, seizure, diabetic, and allergic emergencies.',
        lessons: [
          {
            title: 'Heart Attack and Stroke Recognition',
            minutes: 25,
            intro: [
              'Heart attack signs include chest pressure or pain lasting more than a few minutes, pain radiating to the arm, jaw, or back, shortness of breath, sweating, and nausea — presentations vary, and some people, particularly women and diabetics, present atypically. The response is immediate emergency activation, rest, and aspirin if the person can chew it and has no allergy, per protocol.',
              'Stroke recognition uses FAST: Face drooping, Arm weakness, Speech difficulty, Time to call emergency services. Strokes are time-critical — treatment windows are measured in hours from symptom onset, so noting the time symptoms started, or when the person was last known well, is information hospitals need.',
            ],
            sections: [
              {
                heading: 'Heart Attack Response',
                steps: [
                  'Recognize chest pressure, radiation, breathlessness.',
                  'Activate emergency services immediately.',
                  'Keep the person at rest.',
                  'Offer aspirin per protocol if appropriate.',
                  'Be ready to start CPR if arrest occurs.',
                ],
              },
              {
                heading: 'FAST Stroke Check',
                bullets: [
                  'Face: one side droops when smiling.',
                  'Arms: one arm drifts down when raised.',
                  'Speech: slurred or strange.',
                  'Time: call now; note symptom onset time.',
                ],
              },
            ],
            keyPoints: [
              'Heart attack presentations vary — atypical is common.',
              'Immediate activation plus rest is the response.',
              'FAST screens for stroke.',
              'Onset time is critical hospital information.',
            ],
            callout: {
              variant: 'exam',
              title: 'Exam focus',
              text: 'FAST and heart-attack symptom lists are guaranteed exam material — memorize both.',
            },
          },
          {
            title: 'Seizures, Diabetic Emergencies, and Allergic Reactions',
            minutes: 25,
            intro: [
              'Seizure first aid protects rather than restrains: clear the area, cushion the head, time the event, and place the person on their side afterward. Nothing goes in the mouth, and limbs are never held down. Emergency services are called for first seizures, seizures lasting over five minutes, repeated seizures, injury, or pregnancy.',
              'Diabetic emergencies present as low or high blood sugar, with low sugar the acute danger: shakiness, sweating, confusion, irritability. A responsive person who can swallow gets fast sugar — juice or glucose tablets; an unresponsive one gets emergency services, never food or liquid. Severe allergic reaction — trouble breathing, swelling, widespread hives — calls for the person\u2019s epinephrine auto-injector if available and immediate emergency activation.',
            ],
            sections: [
              {
                heading: 'Seizure Do\u2019s and Don\u2019ts',
                bullets: [
                  'Clear hazards; cushion the head; time the seizure.',
                  'Side-lying recovery afterward.',
                  'Never restrain; never put anything in the mouth.',
                  'Call for over five minutes, repeats, injury, or first seizure.',
                ],
              },
              {
                heading: 'Diabetic and Allergic Emergencies',
                bullets: [
                  'Low sugar: fast sugar if responsive and swallowing.',
                  'Unresponsive diabetic: emergency call, nothing by mouth.',
                  'Severe allergy: epinephrine auto-injector plus emergency call.',
                ],
              },
            ],
            keyPoints: [
              'Seizures: protect, time, never restrain.',
              'Over five minutes or repeated seizures mean emergency services.',
              'Low blood sugar in a responsive person gets fast sugar.',
              'Severe allergy: epinephrine first, then the emergency call.',
            ],
          },
        ],
      },
      {
        title: 'Injury and Environmental Emergencies',
        description: 'Handle musculoskeletal injuries and heat and cold emergencies.',
        lessons: [
          {
            title: 'Fractures, Sprains, and Head Injuries',
            minutes: 25,
            intro: [
              'Musculoskeletal injuries follow RICE: Rest, Ice wrapped in cloth, Compression, Elevation. Suspected fractures are immobilized as found — never straightened — and splinted in position if help is delayed. Deformity, inability to bear weight, and numbness beyond the injury all indicate professional care.',
              'Head, neck, and spinal injuries change the rules entirely: after significant mechanism — falls, collisions, diving accidents — the person is kept still, the head and neck manually stabilized in the position found, and movement avoided until professional immobilization. Signs of concussion — confusion, headache, nausea, unequal pupils — after any head impact mean evaluation.',
            ],
            sections: [
              {
                heading: 'RICE Protocol',
                bullets: [
                  'Rest the injured part.',
                  'Ice wrapped in cloth, intervals on and off.',
                  'Compression with elastic bandage, not too tight.',
                  'Elevation above heart level when possible.',
                ],
              },
              {
                heading: 'Spinal Precautions',
                bullets: [
                  'Significant mechanism means keep still.',
                  'Stabilize head and neck as found.',
                  'Never move the person unless the scene is unsafe.',
                  'Concussion signs after head impact mean evaluation.',
                ],
              },
            ],
            keyPoints: [
              'RICE manages sprains and strains.',
              'Fractures are immobilized as found.',
              'Spinal precautions follow significant mechanisms.',
              'Concussion signs always warrant evaluation.',
            ],
          },
          {
            title: 'Heat and Cold Emergencies',
            minutes: 25,
            intro: [
              'Heat illness progresses: cramps, then heat exhaustion — heavy sweating, weakness, nausea, cool clammy skin — then heat stroke, a life-threatening emergency with hot skin, confusion, or collapse. Heat exhaustion responds to shade, cooling, and fluids; heat stroke demands immediate emergency activation and aggressive cooling with cold water or ice packs to the neck, armpits, and groin.',
              'Cold emergencies reverse the logic. Hypothermia — shivering, confusion, slurred speech — needs gentle warming, dry insulation, and no rubbing. Frostbite affects extremities with numb, waxy skin; rewarm gently with body heat or warm water, never rub, and never rewarm if refreezing is possible.',
            ],
            sections: [
              {
                heading: 'Heat Illness Progression',
                bullets: [
                  'Cramps: muscle pain, heavy sweating.',
                  'Exhaustion: weakness, nausea, clammy skin.',
                  'Stroke: hot skin, confusion — emergency.',
                ],
              },
              {
                heading: 'Cold Response Rules',
                bullets: [
                  'Hypothermia: gentle warming, dry insulation, no rubbing.',
                  'Frostbite: gentle rewarming, never rub.',
                  'No rewarming if refreezing is likely.',
                ],
              },
            ],
            keyPoints: [
              'Heat stroke is a minutes-scale emergency — cool aggressively.',
              'Confusion with heat exposure means heat stroke until proven otherwise.',
              'Hypothermia warms gently without rubbing.',
              'Frostbite never gets rubbed or refrozen.',
            ],
            callout: {
              variant: 'safety',
              title: 'Critical',
              text: 'An altered mental state in a hot environment is heat stroke until proven otherwise — call and cool immediately.',
            },
          },
        ],
      },
      {
        title: 'Legal, Emotional, and Practical Readiness',
        description: 'Understand consent, protection laws, and responder wellbeing.',
        lessons: [
          {
            title: 'Consent and Good Samaritan Protections',
            minutes: 20,
            intro: [
              'Consent precedes care for responsive adults: identify yourself, state your training, and ask permission. Implied consent applies to unresponsive adults when a reasonable person would want help, and to minors whose guardians are unavailable in emergencies. A responsive adult with capacity may refuse care, and that refusal is respected while help is still encouraged.',
              'Good Samaritan laws in most jurisdictions protect rescuers who act voluntarily, in good faith, within their training, and without gross negligence. Abandoning care once started, acting far beyond training, or expecting payment can remove protections — the principles are simple: help within your training and stay until relieved.',
            ],
            sections: [
              {
                heading: 'Consent Rules',
                bullets: [
                  'Responsive adults: ask first.',
                  'Unresponsive adults: implied consent.',
                  'Minors without guardians in emergencies: implied consent.',
                  'Competent refusal is respected.',
                ],
              },
              {
                heading: 'Protection Principles',
                bullets: [
                  'Act voluntarily and in good faith.',
                  'Stay within your training.',
                  'Do not abandon care once begun.',
                  'Accept no payment.',
                ],
              },
            ],
            keyPoints: [
              'Ask responsive adults before treating.',
              'Implied consent covers the unresponsive.',
              'Good Samaritan laws protect reasonable rescuers.',
              'Once started, care continues until relieved.',
            ],
          },
          {
            title: 'Responder Wellbeing and Preparedness',
            minutes: 20,
            intro: [
              'Responding to emergencies affects responders — adrenaline, replay of events, and self-doubt are normal after-action experiences, not weakness. Talking through the event, resting, and using employer or school support resources are healthy responses; persistent distress deserves professional support, and seeking it is strength.',
              'Preparedness converts anxiety into capability: knowing AED locations, keeping first-aid kits stocked, refreshing training on schedule, and running mental scenarios. The best responders are not fearless — they are rehearsed.',
            ],
            sections: [
              {
                heading: 'After an Emergency',
                bullets: [
                  'Expect normal stress reactions.',
                  'Debrief with peers or supervisors.',
                  'Use available support resources.',
                  'Seek professional help for persistent distress.',
                ],
              },
              {
                heading: 'Preparedness Habits',
                bullets: [
                  'Learn AED and kit locations everywhere you spend time.',
                  'Refresh training before it lapses.',
                  'Rehearse scenarios mentally.',
                ],
              },
            ],
            keyPoints: [
              'Post-event stress reactions are normal.',
              'Support resources exist — use them.',
              'Preparedness is rehearsal, not fearlessness.',
              'Refresh training on schedule.',
            ],
            callout: {
              variant: 'tip',
              title: 'Remember',
              text: 'This course builds knowledge readiness; hands-on skill sign-off requires in-person evaluation through an authorized training provider.',
            },
          },
        ],
      },
      {
        title: 'Poisoning, Bites, and Special Situations',
        description: 'Respond to poisoning, stings, bites, and population-specific emergencies.',
        lessons: [
          {
            title: 'Poisoning and Allergic Stings',
            minutes: 25,
            intro: [
              'Poisoning response starts with scene safety — fumes and spills endanger rescuers too — followed by identifying the substance and calling poison control or emergency services per severity. Never induce vomiting unless directed by poison control; some substances burn twice on the way back up. Bring the container or label information to the phone.',
              'Stings and bites split by severity: local reactions get cold packs and monitoring, while signs of systemic reaction — facial swelling, hives spreading, breathing difficulty — mean anaphylaxis until proven otherwise, with epinephrine and emergency activation. Tick removal uses fine tweezers close to the skin with steady pull; snakebite care is immobilization and rapid transport, never cutting or suction.',
            ],
            sections: [
              {
                heading: 'Poisoning Response',
                steps: [
                  'Check scene safety first.',
                  'Identify the substance and amount if possible.',
                  'Call poison control or emergency services.',
                  'Never induce vomiting unless directed.',
                  'Save containers and labels.',
                ],
              },
              {
                heading: 'Bite and Sting Rules',
                bullets: [
                  'Local reactions: cold pack and monitor.',
                  'Systemic signs: epinephrine and emergency call.',
                  'Ticks: fine tweezers, steady pull.',
                  'Snakebite: immobilize, transport, no cutting.',
                ],
              },
            ],
            keyPoints: [
              'Scene safety applies to poison scenes too.',
              'Poison control guides poisoning first aid.',
              'Systemic sting reactions are anaphylaxis until proven otherwise.',
              'Traditional snakebite interventions cause harm.',
            ],
            callout: {
              variant: 'safety',
              title: 'Safety',
              text: 'Swelling of the face or tongue, or any breathing difficulty after a sting, is an epinephrine-and-911 event — minutes matter.',
            },
          },
          {
            title: 'Pediatric and Older-Adult Considerations',
            minutes: 20,
            intro: [
              'Children are not small adults: infant CPR uses two fingers or two thumbs with shallower compressions, choking uses back slaps and chest thrusts rather than abdominal thrusts, and febrile seizures — though frightening — are managed with protection, timing, and medical evaluation. Caregiver consent and calm communication with the child shape every intervention.',
              'Older adults present differently: heart attacks may appear as confusion or weakness rather than chest pain, falls carry fracture and head-injury risk especially with blood thinners, and medications complicate every assessment. Asking about medications and baseline function is standard practice in every older-adult emergency.',
            ],
            sections: [
              {
                heading: 'Pediatric Differences',
                bullets: [
                  'Infant compressions: two fingers or two thumbs, shallower depth.',
                  'Infant choking: back slaps and chest thrusts.',
                  'Febrile seizures: protect, time, evaluate.',
                ],
              },
              {
                heading: 'Older-Adult Awareness',
                bullets: [
                  'Atypical heart attack presentations.',
                  'Blood thinners raise bleeding and head-injury stakes.',
                  'Medication lists inform every assessment.',
                ],
              },
            ],
            keyPoints: [
              'Pediatric technique differs by age.',
              'Abdominal thrusts are never used on infants.',
              'Older adults present emergencies atypically.',
              'Medication history matters in every senior emergency.',
            ],
          },
        ],
      },
    ],
    questions: [
      { domain: 'Scene Safety and Assessment', difficulty: 'easy', q: 'What is the rescuer\u2019s first responsibility at any emergency?', choices: ['Starting compressions', 'Personal and scene safety', 'Finding the AED', 'Taking a photo'], answer: 1, why: 'A rescuer who becomes a second victim helps no one; hazards are scanned before approach.' },
      { domain: 'Scene Safety and Assessment', difficulty: 'medium', q: 'Occasional gasping in an unresponsive person is classified as:', choices: ['Normal breathing', 'Not normal breathing — begin CPR', 'A sign of recovery', 'A seizure only'], answer: 1, why: 'Agonal gasps are not effective breathing; unresponsive plus gasping means CPR and an AED.' },
      { domain: 'Adult CPR', difficulty: 'easy', q: 'What are the correct depth and rate for adult chest compressions?', choices: ['1 inch at 60 per minute', 'At least 2 inches at 100–120 per minute', '3 inches at 140 per minute', 'Half an inch at 80 per minute'], answer: 1, why: 'Adult compressions go at least 2 inches deep at 100–120 per minute with full recoil.' },
      { domain: 'Adult CPR', difficulty: 'medium', q: 'The trained-rescuer compression-to-breath cycle for an adult is:', choices: ['15:2', '30:2', '10:1', 'Continuous breaths only'], answer: 1, why: 'Thirty compressions followed by two breaths is the standard trained cycle.' },
      { domain: 'Adult CPR', difficulty: 'medium', q: 'Why should interruptions in compressions be kept under ten seconds?', choices: ['To save rescuer energy', 'Blood flow to the brain drops immediately when compressions stop', 'To keep the AED charged', 'To avoid rib fractures'], answer: 1, why: 'Perfusion collapses with each pause; minimizing interruptions preserves circulation.' },
      { domain: 'AED Use', difficulty: 'easy', q: 'Who decides whether an AED delivers a shock?', choices: ['The rescuer', 'The device, after analyzing the rhythm', 'The dispatcher', 'A bystander vote'], answer: 1, why: 'AEDs analyze automatically and advise a shock only for shockable rhythms.' },
      { domain: 'AED Use', difficulty: 'medium', type: 'scenario', q: 'The AED advises a shock. What is the correct sequence?', choices: ['Shock immediately while holding the victim steady', 'Announce "clear," verify no contact, press shock, resume compressions', 'Wait one minute, then shock', 'Remove the pads first'], answer: 1, why: 'The clear ritual protects rescuers; compressions resume immediately after any shock decision.' },
      { domain: 'Choking Response', difficulty: 'easy', q: 'A choking adult is coughing forcefully. The correct action is to:', choices: ['Start abdominal thrusts', 'Encourage continued coughing and stay with them', 'Give back blows', 'Sweep their mouth'], answer: 1, why: 'An effective cough is mild obstruction — encourage it; intervention is for severe obstruction.' },
      { domain: 'Choking Response', difficulty: 'medium', q: 'For a conscious choking infant, the correct technique is:', choices: ['Abdominal thrusts', 'Blind finger sweeps', '5 back slaps alternating with 5 two-finger chest thrusts', 'Lifting by the ankles'], answer: 2, why: 'Infants receive back slaps and chest thrusts; abdominal thrusts and blind sweeps are never used.' },
      { domain: 'Bleeding and Shock', difficulty: 'easy', q: 'A dressing over a bleeding wound becomes soaked with blood. You should:', choices: ['Remove it and start over', 'Add more dressing on top and maintain pressure', 'Release pressure to check the wound', 'Pour water on it'], answer: 1, why: 'Removing dressings disrupts forming clots; reinforce and keep pressing.' },
      { domain: 'Bleeding and Shock', difficulty: 'medium', q: 'A tourniquet is placed:', choices: ['Directly over the wound', 'Over the nearest joint', 'A few inches above the wound, never over a joint', 'Below the wound'], answer: 2, why: 'Tourniquets go proximal to the wound on a limb, never across a joint, with time recorded.' },
      { domain: 'Bleeding and Shock', difficulty: 'medium', q: 'Which set of signs suggests shock?', choices: ['Warm dry skin, slow pulse', 'Pale clammy skin, rapid weak pulse, confusion', 'Fever and rash', 'Slow breathing and hunger'], answer: 1, why: 'Clammy skin, rapid weak pulse, and altered mentation form the classic shock picture.' },
      { domain: 'Burns and Wounds', difficulty: 'easy', q: 'The correct first-aid cooling method for a thermal burn is:', choices: ['Ice directly on skin', 'Butter or ointment', 'Cool running water for at least ten minutes', 'Rubbing alcohol'], answer: 2, why: 'Running water cools safely; ice damages tissue and home remedies trap heat.' },
      { domain: 'Burns and Wounds', difficulty: 'medium', q: 'An electrical shock victim has only a small skin mark. Appropriate action is:', choices: ['No care needed', 'Medical evaluation regardless of appearance', 'Rub the area', 'Apply butter'], answer: 1, why: 'Electrical current can cause deep internal damage between entry and exit despite minor skin signs.' },
      { domain: 'Medical Emergencies', difficulty: 'easy', q: 'In the FAST stroke check, the "F" stands for:', choices: ['Fever', 'Face drooping', 'Fainting', 'Foot pain'], answer: 1, why: 'FAST: Face drooping, Arm weakness, Speech difficulty, Time to call.' },
      { domain: 'Medical Emergencies', difficulty: 'medium', type: 'scenario', q: 'A coworker with diabetes is shaky, sweaty, and confused but responsive and able to swallow. First aid is to:', choices: ['Give insulin', 'Give fast sugar such as juice or glucose tablets', 'Have them walk it off', 'Wait an hour'], answer: 1, why: 'These are low-blood-sugar signs; a responsive person who can swallow gets fast sugar.' },
      { domain: 'Medical Emergencies', difficulty: 'medium', q: 'During a seizure, you should:', choices: ['Hold the limbs still', 'Place a wallet in the mouth', 'Protect from injury, time the event, and put nothing in the mouth', 'Splash water on the face'], answer: 2, why: 'Seizure care is protection and timing — restraint and oral objects cause harm.' },
      { domain: 'Injury Emergencies', difficulty: 'easy', q: 'RICE stands for:', choices: ['Run, Ice, Call, Elevate', 'Rest, Ice, Compression, Elevation', 'Rub, Ice, Carry, Exercise', 'Rest, Immobilize, Cough, Exit'], answer: 1, why: 'Rest, Ice (wrapped), Compression, and Elevation manage sprains and strains.' },
      { domain: 'Injury Emergencies', difficulty: 'medium', q: 'After a diving accident with neck pain, the person should be:', choices: ['Helped to stand slowly', 'Kept still with head and neck stabilized as found', 'Given water', 'Sat upright'], answer: 1, why: 'Significant mechanism triggers spinal precautions — stabilize in the position found.' },
      { domain: 'Environmental Emergencies', difficulty: 'medium', q: 'Hot skin with confusion in a heat-exposed person indicates:', choices: ['Heat cramps', 'Heat exhaustion', 'Heat stroke — an emergency', 'Dehydration only'], answer: 2, why: 'Altered mental status with heat exposure defines heat stroke: activate emergency response and cool aggressively.' },
      { domain: 'Environmental Emergencies', difficulty: 'easy', q: 'Frostbitten fingers should be treated by:', choices: ['Vigorous rubbing', 'Gentle rewarming without rubbing', 'Snow massage', 'Direct flame'], answer: 1, why: 'Rubbing destroys fragile tissue; gentle rewarming is the rule, and never if refreezing is likely.' },
      { domain: 'Legal and Emotional Considerations', difficulty: 'easy', q: 'Implied consent applies when:', choices: ['The person is responsive and silent', 'An adult is unresponsive and a reasonable person would want help', 'The rescuer is in a hurry', 'Family is nearby'], answer: 1, why: 'Unresponsiveness with a reasonable expectation of help defines implied consent.' },
      { domain: 'Legal and Emotional Considerations', difficulty: 'medium', q: 'Good Samaritan protections generally require that rescuers:', choices: ['Accept payment', 'Act in good faith within their training', 'Hold a medical license', 'Transport the victim themselves'], answer: 1, why: 'Voluntary, good-faith action within training is the protection standard.' },
    ],
  },
  // ======================================================================
  // 8. FAA Part 107 Remote Pilot Readiness
  // ======================================================================
  {
    id: 'track_p107',
    name: 'FAA Part 107 Remote Pilot Readiness',
    shortName: 'Part 107',
    category: 'aviation',
    weeks: 10,
    description:
      'Prepare for commercial small drone operations — regulations, airspace, weather, loading and performance, and safe operational decision-making.',
    credentialFocus: 'Mapped to Part 107 aeronautical knowledge areas',
    schoolOverview:
      'A complete remote-pilot knowledge pathway covering regulations, airspace interpretation, weather, and operational safety, with documented readiness evidence per student. Reports support program review and employer verification.',
    studentOverview:
      'Learn what commercial drone pilots must know — airspace rules, weather reading, flight limitations, and safe decision-making — with scenario practice that mirrors real operations.',
    prerequisites: 'None.',
    alignmentNotes:
      'Modules and practice banks are mapped to Part 107 aeronautical knowledge areas: regulations, airspace, weather, loading and performance, and operations. All content is original and does not reproduce the knowledge test.',
    domains: [
      'Part 107 Regulations',
      'Airspace Classification',
      'Sectional Chart Reading',
      'Weather Theory',
      'Weather Reports and Forecasts',
      'Loading and Performance',
      'Emergency Procedures',
      'Crew Resource Management',
      'Aeronautical Decision-Making',
      'Operations and Limitations',
    ],
    modules: [
      {
        title: 'Part 107 Regulatory Foundations',
        description: 'Master the certification, registration, and operating rules for commercial small UAS.',
        lessons: [
          {
            title: 'Certification and the Remote Pilot in Command',
            minutes: 25,
            intro: [
              'Commercial small-drone operations in the United States require a remote pilot certificate with a small UAS rating, earned through an aeronautical knowledge test and recurrent training to stay current. The certificated remote pilot in command is directly responsible for, and the final authority over, the operation — a legal accountability that shapes every decision.',
              'Responsibility runs both directions: the remote pilot ensures the operation complies with all applicable rules, and anyone manipulating the controls must either hold the certificate or be under the direct supervision of someone who does, with the certificated pilot able to take over immediately. Documentation of currency and identity accompanies the pilot during operations.',
            ],
            sections: [
              {
                heading: 'Certification Essentials',
                bullets: [
                  'Knowledge test earns the certificate.',
                  'Recurrent training maintains currency.',
                  'Certificate and photo ID carried during operations.',
                  'Remote pilot in command holds final authority.',
                ],
              },
              {
                heading: 'Supervision Rules',
                bullets: [
                  'Non-certificated operators fly under direct supervision.',
                  'The certificated pilot must be able to take over immediately.',
                  'Accountability stays with the remote pilot in command.',
                ],
              },
            ],
            keyPoints: [
              'Commercial operation requires certification.',
              'Currency requires recurrent training.',
              'The remote pilot in command is legally accountable.',
              'Supervised operators remain the certificated pilot\u2019s responsibility.',
            ],
            callout: {
              variant: 'exam',
              title: 'Exam focus',
              text: 'Responsibility and supervision questions anchor the regulations section — the remote pilot in command is always the accountable party.',
            },
          },
          {
            title: 'Registration, Waivers, and Accident Reporting',
            minutes: 25,
            intro: [
              'Small unmanned aircraft flown under Part 107 are registered, and registration markings appear on the aircraft. When an operation falls outside the standard rules — for example certain operations over people, at night beyond standard allowances, or beyond visual line of sight — a waiver or specific regulatory authorization must be obtained in advance; the rules define both the boundaries and the door around them.',
              'Accident reporting has defined triggers: operations resulting in serious injury, loss of consciousness, or property damage above a regulatory threshold — excluding the aircraft\u2019s own cost — must be reported to the FAA within a defined short window. Knowing these triggers before flying is part of operational competence.',
            ],
            sections: [
              {
                heading: 'Waiver Basics',
                bullets: [
                  'Standard rules define the operating envelope.',
                  'Operations outside it require advance waivers.',
                  'Waiver applications take time — plan operations accordingly.',
                  'A waiver\u2019s conditions bind the operation.',
                ],
              },
              {
                heading: 'Reportable Events',
                bullets: [
                  'Serious injury or loss of consciousness.',
                  'Property damage above the regulatory threshold.',
                  'Report within the required window.',
                  'Document the facts promptly and accurately.',
                ],
              },
            ],
            keyPoints: [
              'Registered aircraft carry registration markings.',
              'Out-of-envelope operations need advance authorization.',
              'Serious injury and significant damage trigger reporting.',
              'Reporting windows are short — know them now.',
            ],
          },
        ],
      },
      {
        title: 'Airspace Classification and Authorization',
        description: 'Read airspace structure and secure authorization where required.',
        lessons: [
          {
            title: 'The Alphabet of Airspace',
            minutes: 30,
            intro: [
              'National airspace divides into classes with different rules. Class B surrounds the busiest airports with the strictest control; Class C serves mid-size airports with radar service; Class D surrounds smaller towered airports; Class E is controlled airspace without the tower structure; and Class G is uncontrolled airspace where air traffic control does not exercise authority. Each class extends through defined floors and ceilings shown on charts.',
              'For small drones, the headline rule is simple: operations in controlled airspace — Classes B, C, D, and surface-based E — require prior air traffic control authorization, obtained through automated or manual processes. Class G operations below 400 feet need no authorization, which is why chart literacy matters: you must know which airspace you are standing under before you fly.',
            ],
            sections: [
              {
                heading: 'Airspace Classes at a Glance',
                bullets: [
                  'B: busiest airports, strictest rules.',
                  'C: mid-size airports with radar services.',
                  'D: smaller towered airports.',
                  'E: controlled airspace without a tower structure.',
                  'G: uncontrolled; no authorization needed under Part 107 rules.',
                ],
              },
              {
                heading: 'Authorization Logic',
                steps: [
                  'Identify the airspace at your launch point.',
                  'Controlled airspace: obtain authorization before flight.',
                  'Class G under 400 feet: no authorization required.',
                  'Comply with the authorization\u2019s altitude limits.',
                ],
              },
            ],
            keyPoints: [
              'Five airspace classes define the structure.',
              'Controlled airspace requires prior authorization.',
              'Class G under 400 feet is authorization-free.',
              'Chart literacy precedes every flight decision.',
            ],
            callout: {
              variant: 'exam',
              title: 'Exam focus',
              text: 'Airspace authorization questions are the most frequently tested regulatory concept — know which classes require it.',
            },
          },
          {
            title: 'Scenario Lab: Airspace Decision-Making',
            minutes: 25,
            intro: [
              'Real operations test airspace judgment constantly. Consider a roof inspection job two miles from a small towered airport: the chart shows Class D airspace with a floor at the surface extending several miles. The job requires authorization, obtained before the flight date, with the approved altitude ceiling respected throughout — no exceptions because the job is "quick."',
              'Contrast a rural farmland survey twenty miles from the nearest airport: the chart shows Class G from the surface up to 700 or 1,200 feet, depending on the area. Operations below 400 feet proceed without authorization, but the pilot still checks for temporary flight restrictions, stadium rules, and local ordinances. Authorization-free never means rule-free.',
            ],
            sections: [
              {
                heading: 'Pre-Flight Airspace Checklist',
                steps: [
                  'Plot the operation area on the chart or approved app.',
                  'Identify airspace class and floor.',
                  'Check for temporary flight restrictions.',
                  'Obtain authorization if required.',
                  'Brief altitude limits to any crew.',
                ],
              },
              {
                heading: 'Scenario Compare',
                bullets: [
                  'Two miles from a towered airport: Class D — authorize.',
                  'Rural Class G below 400 feet: no authorization.',
                  'Both: check restrictions and local rules.',
                ],
              },
            ],
            keyPoints: [
              'Job pressure never bypasses authorization.',
              'Authorization ceilings are binding limits.',
              'Class G operations still check restrictions.',
              'Pre-flight airspace checks are documented discipline.',
            ],
          },
        ],
      },
      {
        title: 'Sectional Chart Reading',
        description: 'Interpret sectional charts for airspace, airports, and hazards.',
        lessons: [
          {
            title: 'Chart Symbols and Airspace Depiction',
            minutes: 30,
            intro: [
              'Sectional charts are the pilot\u2019s map: airports, airspace boundaries, obstructions, and terrain rendered in a standardized symbol language. Blue and magenta shading and vignettes mark airspace classes — solid blue rings for Class B, solid magenta for Class C, dashed blue for Class D, and faded magenta or blue shading for Class E floors. Numbers like "100/40" inside segments read as ceiling and floor in hundreds of feet.',
              'Airport symbols encode tower status and services: blue airports have control towers, magenta do not. Obstruction symbols show towers and their heights, elevation figures mark terrain, and the chart legend decodes everything else. Remote pilots train on the same charts as crewed pilots because the airspace is shared.',
            ],
            sections: [
              {
                heading: 'Airspace Depiction Keys',
                bullets: [
                  'Solid blue rings: Class B.',
                  'Solid magenta rings: Class C.',
                  'Dashed blue: Class D.',
                  'Shaded magenta/blue vignettes: Class E floors.',
                  'Fractions like 100/40: ceiling over floor, in hundreds of feet.',
                ],
              },
              {
                heading: 'Reading Drill',
                steps: [
                  'Locate the nearest airport symbol — blue or magenta?',
                  'Find surrounding airspace rings and shading.',
                  'Read the floor and ceiling numbers.',
                  'Note obstructions and their heights.',
                  'Confirm your operating altitude against the floor.',
                ],
              },
            ],
            keyPoints: [
              'Charts render airspace in a standardized symbol language.',
              'Blue airport symbols mean towered; magenta means non-towered.',
              'Segment fractions read ceiling over floor in hundreds of feet.',
              'The legend is the decoder — use it freely.',
            ],
          },
          {
            title: 'Latitude, Longitude, and Hazard Awareness',
            minutes: 25,
            intro: [
              'Charts carry a coordinate grid of latitude and longitude that lets pilots locate positions precisely — minutes and seconds subdivide degrees, and reading coordinates is a tested skill. Grid lines also support distance estimation, with one degree of latitude equal to sixty nautical miles.',
              'Hazard symbols demand attention: obstructions over certain heights carry high-intensity lighting symbols, restricted and prohibited areas bound airspace where flight is forbidden or constrained, and military operation areas warn of intensive activity. Stadium and temporary flight restrictions overlay the chart with time-limited rules that pilots must check before every operation.',
            ],
            sections: [
              {
                heading: 'Coordinate Reading',
                bullets: [
                  'Degrees, minutes, seconds subdivide positions.',
                  'One degree of latitude equals sixty nautical miles.',
                  'Coordinates locate points precisely on the grid.',
                ],
              },
              {
                heading: 'Hazards on the Chart',
                bullets: [
                  'Obstruction symbols with heights.',
                  'Prohibited and restricted areas.',
                  'Military operations areas.',
                  'Temporary flight restrictions checked separately.',
                ],
              },
            ],
            keyPoints: [
              'Latitude and longitude subdivide into minutes and seconds.',
              'Sixty nautical miles per degree of latitude.',
              'Special-use airspace restricts or forbids flight.',
              'Temporary restrictions are checked every time.',
            ],
            callout: {
              variant: 'tip',
              title: 'Study habit',
              text: 'Practice on a real or digital sectional chart daily — symbol fluency comes from repetition, not memorization lists.',
            },
          },
        ],
      },
      {
        title: 'Weather Theory for Drone Pilots',
        description: 'Understand the atmosphere\u2019s behavior as it affects small UAS operations.',
        lessons: [
          {
            title: 'Density, Wind, and Stability',
            minutes: 25,
            intro: [
              'Air density drives aircraft performance: hot, humid, high-elevation air is less dense, reducing lift and climb performance — a drone that leaps off the ground on a cold morning labors on a hot afternoon at altitude. Density altitude is the concept that combines these factors, and it deserves respect even for small aircraft.',
              'Wind behavior near the ground differs from aloft: friction slows surface wind and creates gusts and turbulence around buildings and terrain, while wind generally strengthens with altitude. Atmospheric stability controls vertical motion — stable air resists it and traps haze, unstable air promotes it and builds cumulus clouds and turbulence.',
            ],
            sections: [
              {
                heading: 'Density Altitude Factors',
                bullets: [
                  'High temperature reduces density.',
                  'High humidity reduces density.',
                  'High elevation reduces density.',
                  'Low density degrades climb and hover performance.',
                ],
              },
              {
                heading: 'Stability Signals',
                bullets: [
                  'Stable air: smooth, hazy, stratified clouds.',
                  'Unstable air: bumpy, cumulus clouds, good visibility.',
                  'Surface friction creates gusts near obstacles.',
                ],
              },
            ],
            keyPoints: [
              'Hot, humid, high means thin air and weak performance.',
              'Density altitude combines temperature, humidity, elevation.',
              'Surface wind gusts around obstacles.',
              'Stability shapes turbulence and visibility.',
            ],
          },
          {
            title: 'Fog, Icing, and Thunderstorms',
            minutes: 25,
            intro: [
              'Fog forms when temperature and dew point converge, and radiation fog on calm, clear, moist nights can ground a morning operation with no warning in the previous day\u2019s forecast details. Visibility rules under Part 107 make fog an operational stop sign, and the temperature-dew-point spread is the pilot\u2019s early warning gauge.',
              'Icing and thunderstorms are absolute no-go conditions. Visible moisture plus freezing temperatures means ice accretion that small aircraft cannot tolerate; thunderstorms bring violent updrafts, hail, lightning, and gust fronts that extend far from the visible storm. Distance is not safety near thunderstorms — avoidance is.',
            ],
            sections: [
              {
                heading: 'Fog Formation',
                bullets: [
                  'Temperature-dew point convergence forms fog.',
                  'Calm, clear, moist nights breed radiation fog.',
                  'Small spreads signal fog risk.',
                ],
              },
              {
                heading: 'No-Go Conditions',
                bullets: [
                  'Visible moisture near freezing: icing risk.',
                  'Thunderstorms anywhere near the operation.',
                  'Gust fronts outrun the storm itself.',
                ],
              },
            ],
            keyPoints: [
              'Temperature-dew-point spread forecasts fog.',
              'Fog violates visibility minimums — a stop condition.',
              'Icing is absolute no-go for small UAS.',
              'Thunderstorm hazards extend well beyond the visible storm.',
            ],
            callout: {
              variant: 'safety',
              title: 'Safety',
              text: 'If the temperature-dew-point spread is small and shrinking at dusk, plan tomorrow\u2019s flight around probable morning fog.',
            },
          },
        ],
      },
      {
        title: 'Weather Reports and Forecasts',
        description: 'Read METARs, TAFs, and standard briefing products.',
        lessons: [
          {
            title: 'Decoding METAR Reports',
            minutes: 30,
            intro: [
              'METARs are the standard current-weather report, delivered in a coded string that decodes left to right: station identifier, observation time in Zulu, wind direction and speed, visibility in statute miles, weather phenomena, sky condition by altitude, temperature and dew point, and altimeter setting. Fluency turns a cryptic line into a complete operational picture in seconds.',
              'The critical fields for drone pilots are wind (including gusts), visibility against the three-statute-mile minimum, and cloud clearance-relevant sky condition. Remarks sections add detail. Practice decoding real reports daily — the format becomes second nature within a week of repetition.',
            ],
            sections: [
              {
                heading: 'METAR Field Order',
                steps: [
                  'Station identifier.',
                  'Date and time (Zulu).',
                  'Wind direction, speed, gusts.',
                  'Visibility in statute miles.',
                  'Phenomena and sky condition.',
                  'Temperature/dew point and altimeter.',
                ],
              },
              {
                heading: 'Sky Condition Codes',
                bullets: [
                  'FEW/SCT: few or scattered layers.',
                  'BKN/OVC: broken or overcast — a ceiling.',
                  'Heights in hundreds of feet above ground.',
                ],
              },
            ],
            keyPoints: [
              'METARs decode left to right in fixed order.',
              'Zulu time is the universal reference.',
              'Wind, visibility, ceiling drive go/no-go decisions.',
              'Daily decoding practice builds fluency fast.',
            ],
            callout: {
              variant: 'exam',
              title: 'Exam focus',
              text: 'METAR decoding is guaranteed test material — wind, visibility, and ceiling fields are the priority.',
            },
          },
          {
            title: 'TAFs, Briefings, and Weather Sources',
            minutes: 25,
            intro: [
              'Terminal aerodrome forecasts (TAFs) predict conditions at an airport over a validity window, using the same code language as METARs with change indicators showing when conditions are expected to shift. Reading a TAF against your planned flight window answers whether the weather will cooperate — and when it will stop cooperating.',
              'Approved sources matter: official briefing services and aviation weather portals provide the authoritative data, while consumer weather apps lack aviation specifics like ceilings and TAFs. A complete pre-flight weather review covers current reports, forecasts for the window, and any advisories affecting the area.',
            ],
            sections: [
              {
                heading: 'TAF Reading',
                bullets: [
                  'Same code language as METARs.',
                  'Validity window stated at the start.',
                  'Change groups show expected shifts.',
                  'Compare against your planned flight times.',
                ],
              },
              {
                heading: 'Source Discipline',
                bullets: [
                  'Use official aviation weather sources.',
                  'Consumer apps lack ceilings and TAFs.',
                  'Review reports, forecasts, and advisories together.',
                ],
              },
            ],
            keyPoints: [
              'TAFs forecast conditions over a validity window.',
              'Change groups show when weather will shift.',
              'Official sources carry aviation-critical fields.',
              'Pre-flight weather review is a documented habit.',
            ],
          },
        ],
      },
      {
        title: 'Loading, Performance, and Maintenance',
        description: 'Manage weight, balance, and aircraft readiness.',
        lessons: [
          {
            title: 'Weight, Balance, and Performance Effects',
            minutes: 25,
            intro: [
              'Every gram matters on a small aircraft: payloads beyond design limits reduce climb performance, shorten flight time, and can make the aircraft uncontrollable. Manufacturers publish maximum takeoff weights and payload capacities, and operating beyond them is both unsafe and non-compliant.',
              'Balance — center of gravity — shapes stability: a payload slung off-center shifts the balance point and degrades control response. Performance factors compound: high density altitude plus a heavy payload plus a partial battery is a stack of small choices that ends operations badly.',
            ],
            sections: [
              {
                heading: 'Loading Rules',
                bullets: [
                  'Never exceed maximum takeoff weight.',
                  'Secure payloads against shifting.',
                  'Off-center loads degrade control.',
                  'Account for accessories in the total.',
                ],
              },
              {
                heading: 'Performance Stack',
                bullets: [
                  'High density altitude reduces margins.',
                  'Heavy payloads reduce margins.',
                  'Degraded batteries reduce margins.',
                  'Margins stack — manage them together.',
                ],
              },
            ],
            keyPoints: [
              'Published weight limits are hard limits.',
              'Center of gravity drives stability.',
              'Payload security prevents in-flight shifts.',
              'Performance margins stack multiplicatively, not additively.',
            ],
          },
          {
            title: 'Preflight Inspection and Maintenance Readiness',
            minutes: 25,
            intro: [
              'Preflight inspection follows the manufacturer\u2019s checklist every time: airframe integrity, propeller condition and security, battery charge and health, sensor cleanliness, control response, and firmware status. The inspection is documented as part of operational records because it is part of the legal operation.',
              'Maintenance follows manufacturer schedules, and known problems ground the aircraft — a crack in a propeller or a swelling battery is a no-fly condition, not a monitor-it item. Record-keeping of maintenance and inspections demonstrates the airworthiness discipline that distinguishes professional operations.',
            ],
            sections: [
              {
                heading: 'Preflight Checklist Categories',
                steps: [
                  'Airframe and propeller physical inspection.',
                  'Battery charge, health, and seating.',
                  'Sensor and lens cleanliness.',
                  'Control-link and GPS readiness.',
                  'Firmware and geo-awareness status.',
                ],
              },
              {
                heading: 'Grounding Conditions',
                bullets: [
                  'Damaged propellers.',
                  'Swollen or damaged batteries.',
                  'Failed control checks.',
                  'Any unresolved airworthiness doubt.',
                ],
              },
            ],
            keyPoints: [
              'Preflight checklists run every flight.',
              'Damaged props and swollen batteries ground the aircraft.',
              'Inspections are documented.',
              'Maintenance records demonstrate professionalism.',
            ],
            callout: {
              variant: 'safety',
              title: 'Safety',
              text: 'A swollen lithium battery is a fire hazard — remove it from service, store it safely, and never charge it unattended.',
            },
          },
        ],
      },
      {
        title: 'Operating Rules and Limitations',
        description: 'Apply the core operating limitations of Part 107.',
        lessons: [
          {
            title: 'Altitude, Speed, Visibility, and Line of Sight',
            minutes: 30,
            intro: [
              'The core operating envelope is specific: maximum altitude 400 feet above ground level — higher near structures within defined limits — groundspeed no greater than 100 miles per hour, minimum flight visibility of three statute miles, and cloud clearance of 500 feet below and 2,000 feet horizontally. These numbers are tested constantly and obeyed always.',
              'Visual line of sight is the foundational rule: the remote pilot or visual observer must be able to see the aircraft unaided except by corrective lenses, throughout the flight. Operations at night, over people, or beyond line of sight follow their own specific rules and authorizations — the baseline envelope does not quietly stretch to accommodate a job.',
            ],
            sections: [
              {
                heading: 'The Core Envelope',
                bullets: [
                  '400 feet AGL maximum, with defined structure exceptions.',
                  '100 mph groundspeed maximum.',
                  '3 statute miles minimum visibility.',
                  '500 feet below and 2,000 feet horizontal from clouds.',
                ],
              },
              {
                heading: 'Line-of-Sight Rules',
                bullets: [
                  'Unaided vision except corrective lenses.',
                  'Maintained throughout the operation.',
                  'Visual observers extend, not replace, awareness.',
                  'Beyond-line-of-sight requires specific authorization.',
                ],
              },
            ],
            keyPoints: [
              '400 feet, 100 mph, 3 miles — the core numbers.',
              'Cloud clearance: 500 below, 2,000 horizontal.',
              'Line of sight is continuous and unaided.',
              'Special operations follow special rules.',
            ],
            callout: {
              variant: 'exam',
              title: 'Exam focus',
              text: 'The operating-limit numbers — 400 feet, 100 mph, 3 statute miles, 500/2,000 cloud clearance — appear on nearly every knowledge test.',
            },
          },
          {
            title: 'Right-of-Way, Operations Over People, and Careless Operation',
            minutes: 25,
            intro: [
              'Small drones yield to all other aircraft — always, completely, without argument. Crewed aircraft have right of way, and seeing or hearing one means landing or maneuvering away immediately; the drone pilot\u2019s situational awareness duty is continuous precisely because crewed pilots may never see the drone.',
              'Operations over people follow defined categories and restrictions that depend on aircraft characteristics and operational safeguards; open-air assemblies of people carry strict prohibitions. The careless-or-reckless clause is the catch-all: any operation endangering people or property violates the rules regardless of technical compliance elsewhere.',
            ],
            sections: [
              {
                heading: 'Yield Discipline',
                bullets: [
                  'Drones yield to all crewed aircraft.',
                  'Land or maneuver away immediately on any conflict.',
                  'Continuous scanning is a regulatory duty.',
                ],
              },
              {
                heading: 'People and Property',
                bullets: [
                  'Over-people operations follow defined categories.',
                  'Open-air assemblies carry strict prohibitions.',
                  'Careless or reckless operation is prohibited absolutely.',
                ],
              },
            ],
            keyPoints: [
              'Crewed aircraft always have right of way.',
              'Seeing traffic means landing or clearing immediately.',
              'Over-people rules depend on aircraft categories.',
              'Endangerment violates the rules even inside the envelope.',
            ],
          },
        ],
      },
      {
        title: 'Emergencies and Crew Coordination',
        description: 'Handle emergencies and coordinate with crew and air traffic control.',
        lessons: [
          {
            title: 'Lost Link, Flyaways, and Emergency Logic',
            minutes: 25,
            intro: [
              'Lost-link events — the control signal failing — are planned for before takeoff: return-to-home behavior, hover, or landing behaviors are configured deliberately with obstacle clearance in mind. A return-to-home altitude below local obstacle heights converts a nuisance event into a crash.',
              'Flyaways and emergencies have reporting and notification logic: an aircraft departing the planned area toward controlled airspace or airports requires prompt notification to the facility per procedures, and the remote pilot\u2019s duty is to minimize danger to people, property, and other aircraft above all other concerns — including the aircraft itself.',
            ],
            sections: [
              {
                heading: 'Lost-Link Planning',
                bullets: [
                  'Configure lost-link behavior before flight.',
                  'Return-to-home altitude clears local obstacles.',
                  'Home point verified after positioning.',
                ],
              },
              {
                heading: 'Emergency Priorities',
                steps: [
                  'Protect people on the ground first.',
                  'Avoid other aircraft.',
                  'Notify the tower or facility if the aircraft enters their airspace.',
                  'Accept aircraft loss over any human risk.',
                ],
              },
            ],
            keyPoints: [
              'Lost-link behavior is configured deliberately.',
              'Return altitude must clear obstacles.',
              'Flyaway toward controlled airspace means notify.',
              'The aircraft is expendable; people are not.',
            ],
          },
          {
            title: 'Crew Resource Management and Communication',
            minutes: 20,
            intro: [
              'Multi-person operations run on crew resource management: defined roles — remote pilot, visual observer, ground crew — with briefed responsibilities, standardized callouts, and authority gradients flat enough that anyone can call a safety stop. A visual observer who sees a hazard must speak, and the pilot must hear.',
              'Communication discipline extends to air traffic control when operating in controlled airspace: clear, standard phraseology, listening before transmitting, and complying promptly with instructions. Briefings before every flight — roles, hazards, abort criteria — convert a group of individuals into a crew.',
            ],
            sections: [
              {
                heading: 'Crew Roles',
                bullets: [
                  'Remote pilot in command: final authority.',
                  'Visual observer: dedicated scanning and callouts.',
                  'Ground crew: site security and public management.',
                ],
              },
              {
                heading: 'Briefing Essentials',
                bullets: [
                  'Roles and responsibilities.',
                  'Site hazards and traffic expectations.',
                  'Abort criteria and emergency actions.',
                  'Anyone can call a safety stop.',
                ],
              },
            ],
            keyPoints: [
              'Defined roles prevent gaps and overlaps.',
              'Standard callouts carry hazards fast.',
              'Safety-stop authority belongs to everyone.',
              'Briefings happen before every flight.',
            ],
          },
        ],
      },
      {
        title: 'Aeronautical Decision-Making',
        description: 'Apply structured judgment to risk, stress, and operational pressure.',
        lessons: [
          {
            title: 'Risk Management and the IMSAFE Check',
            minutes: 25,
            intro: [
              'Aeronautical decision-making is structured, not intuitive: identify hazards, assess risk, mitigate, and continuously reassess as conditions change. The IMSAFE self-check — Illness, Medication, Stress, Alcohol, Fatigue, Emotion — screens the pilot, because the most dangerous component of any operation is the human running it.',
              'Operational pressure is the classic trap: the client waiting, the light fading, the job almost done. Hazardous attitudes — invulnerability, impulsivity, macho thinking, resignation, anti-authority — each have antidotes in deliberate counter-thoughts. Professional pilots name the pressure and let the checklist outvote it.',
            ],
            sections: [
              {
                heading: 'IMSAFE Self-Check',
                bullets: [
                  'Illness: am I well enough?',
                  'Medication: anything impairing?',
                  'Stress: is my head in this?',
                  'Alcohol: fully clear of effects?',
                  'Fatigue and Emotion: rested and steady?',
                ],
              },
              {
                heading: 'Hazardous Attitudes and Antidotes',
                bullets: [
                  'Invulnerability → "it can happen to me."',
                  'Impulsivity → "not so fast, think first."',
                  'Macho → "taking chances is foolish."',
                  'Resignation → "I am not helpless."',
                  'Anti-authority → "the rules are usually right."',
                ],
              },
            ],
            keyPoints: [
              'Risk management is a continuous loop.',
              'IMSAFE screens the pilot before flight.',
              'Operational pressure is a recognized hazard.',
              'Antidote thoughts counter hazardous attitudes.',
            ],
            callout: {
              variant: 'exam',
              title: 'Exam focus',
              text: 'Know IMSAFE\u2019s six letters and the hazardous-attitude antidotes — classic decision-making test items.',
            },
          },
          {
            title: 'Scenario Lab: The Fading Light Decision',
            minutes: 25,
            intro: [
              'A real-estate shoot runs long; the client wants one more pass as dusk approaches and wind builds. The structured decision: night rules will soon apply, visibility is trending down, gusts exceed your comfort margins, and the battery sits at thirty percent. Each factor alone is marginal; together they are a textbook no-go stack.',
              'The professional answer is a reschedule offer with a reason the client respects: "the light is actually better tomorrow morning, and today\u2019s margins are gone." Clients hire judgment as much as imagery. Documenting the decision-making basis protects you operationally and reputationally.',
            ],
            sections: [
              {
                heading: 'The No-Go Stack',
                bullets: [
                  'Approaching night rules.',
                  'Building gusts.',
                  'Declining battery.',
                  'Schedule pressure — the human factor.',
                ],
              },
              {
                heading: 'Professional Decline Language',
                bullets: [
                  'State the safety basis plainly.',
                  'Offer a concrete alternative.',
                  'Document the decision.',
                ],
              },
            ],
            keyPoints: [
              'Marginal factors stack into no-go decisions.',
              'Schedule pressure is a hazard, not a reason.',
              'Clients hire judgment, not just imagery.',
              'Documented decisions protect the operator.',
            ],
          },
        ],
      },
      {
        title: 'Airport Operations and Traffic Awareness',
        description: 'Understand airport environments, traffic patterns, and NOTAMs.',
        lessons: [
          {
            title: 'Airport Layout, Patterns, and Radio Listening',
            minutes: 25,
            intro: [
              'Airports run on structure: runways numbered by magnetic direction, taxiways connecting them, and traffic patterns — the rectangular circuit aircraft fly around the field, typically left-hand turns at pattern altitude. A drone pilot operating near an airport who understands the pattern knows where to look for traffic: on approach paths aligned with runways and along the pattern legs.',
              'Radio listening builds awareness even when no transmission is required: monitoring the airport\u2019s advisory frequency with a handheld receiver, where permitted, tells you who is arriving and departing. Segmented circles, wind indicators, and lighting systems round out the airport literacy that keeps drone operations predictably clear of crewed traffic.',
            ],
            sections: [
              {
                heading: 'Airport Literacy',
                bullets: [
                  'Runway numbers indicate magnetic direction.',
                  'Standard patterns fly left-hand turns.',
                  'Approach paths align with runway centerlines.',
                  'Pattern altitude concentrates traffic predictably.',
                ],
              },
              {
                heading: 'Traffic Awareness Tools',
                bullets: [
                  'Advisory-frequency monitoring where permitted.',
                  'Visual scanning along approach paths.',
                  'Wind indicators show the active runway direction.',
                ],
              },
            ],
            keyPoints: [
              'Patterns tell you where crewed traffic will be.',
              'Runway numbers encode magnetic heading.',
              'Listening builds awareness without transmitting.',
              'Drone pilots plan to stay predictably clear.',
            ],
          },
          {
            title: 'NOTAMs and Operational Publications',
            minutes: 25,
            intro: [
              'Notices to airmen — NOTAMs — publish time-critical information: runway closures, crane operations, airspace changes, and temporary restrictions. Checking NOTAMs for the operating area is part of every pre-flight review, because a chart printed last month cannot know about the crane that went up yesterday.',
              'Reading NOTAMs is a decoding skill built on standard contractions and formats. The operational discipline is simple: check current NOTAMs and restrictions for the specific area and time window of every operation, document the check, and re-check if the operation slips to another day.',
            ],
            sections: [
              {
                heading: 'NOTAM Content',
                bullets: [
                  'Airport and runway status changes.',
                  'Temporary obstructions like cranes.',
                  'Airspace and procedure changes.',
                  'Temporary flight restrictions.',
                ],
              },
              {
                heading: 'Check Discipline',
                steps: [
                  'Check NOTAMs for the operating area.',
                  'Match against the operation window.',
                  'Document the check in the mission file.',
                  'Re-check if the schedule slips.',
                ],
              },
            ],
            keyPoints: [
              'NOTAMs publish what charts cannot know.',
              'Every operation includes a NOTAM check.',
              'Checks are documented per mission.',
              'Schedule slips mean re-checking.',
            ],
            callout: {
              variant: 'exam',
              title: 'Exam focus',
              text: 'Expect questions on what NOTAMs are for and on traffic-pattern basics — both anchor the operations knowledge area.',
            },
          },
        ],
      },
    ],
    questions: [
      { domain: 'Part 107 Regulations', difficulty: 'easy', q: 'Who is directly responsible for and final authority over a Part 107 operation?', choices: ['The visual observer', 'The remote pilot in command', 'The client', 'The property owner'], answer: 1, why: 'The remote pilot in command holds legal responsibility and final authority for the operation.' },
      { domain: 'Part 107 Regulations', difficulty: 'medium', q: 'A person without a remote pilot certificate may manipulate the controls only:', choices: ['Never', 'Under direct supervision of a certificated remote pilot who can take over immediately', 'If the flight is recreational', 'If under 250 grams'], answer: 1, why: 'Direct supervision with immediate takeover capability is the regulatory structure.' },
      { domain: 'Airspace Classification', difficulty: 'easy', q: 'Operations in Class D airspace under Part 107 require:', choices: ['Nothing extra', 'Prior air traffic control authorization', 'A pilot\u2019s license', 'A transponder'], answer: 1, why: 'Controlled airspace — B, C, D, and surface E — requires prior authorization.' },
      { domain: 'Airspace Classification', difficulty: 'medium', q: 'Which airspace is uncontrolled?', choices: ['Class B', 'Class C', 'Class E', 'Class G'], answer: 3, why: 'Class G is uncontrolled airspace where ATC authorization is not required for compliant Part 107 flight.' },
      { domain: 'Sectional Chart Reading', difficulty: 'medium', q: 'On a sectional chart, a solid magenta ring around an airport indicates:', choices: ['Class B airspace', 'Class C airspace', 'Class D airspace', 'Class G airspace'], answer: 1, why: 'Solid magenta rings depict Class C; solid blue depicts Class B and dashed blue depicts Class D.' },
      { domain: 'Sectional Chart Reading', difficulty: 'hard', q: 'A segmented circle marked "100/40" means the airspace extends:', choices: ['From 4,000 to 10,000 feet', 'From the surface to 100 feet', 'From 100 to 400 feet', 'From 40 to 100 nautical miles'], answer: 0, why: 'Segment numbers read as ceiling over floor in hundreds of feet: 10,000 over 4,000.' },
      { domain: 'Weather Theory', difficulty: 'medium', q: 'High temperature, high humidity, and high elevation combine to:', choices: ['Improve climb performance', 'Reduce air density and degrade performance', 'Increase battery life', 'Stabilize the aircraft'], answer: 1, why: 'Density altitude rises with heat, humidity, and elevation, reducing lift and climb margins.' },
      { domain: 'Weather Theory', difficulty: 'medium', q: 'A shrinking temperature-dew-point spread on a calm, clear evening warns of:', choices: ['Thunderstorms', 'Morning fog', 'High winds', 'Icing at altitude'], answer: 1, why: 'Converging temperature and dew point under calm clear conditions forecast radiation fog.' },
      { domain: 'Weather Reports and Forecasts', difficulty: 'easy', q: 'In a METAR, visibility is reported in:', choices: ['Nautical miles', 'Statute miles', 'Kilometers', 'Feet'], answer: 1, why: 'US METAR visibility is given in statute miles — the same unit as Part 107 minimums.' },
      { domain: 'Weather Reports and Forecasts', difficulty: 'medium', q: 'A TAF primarily provides:', choices: ['Current conditions', 'Forecast conditions at an airport over a validity window', 'Radar imagery', 'Traffic delays'], answer: 1, why: 'Terminal aerodrome forecasts predict conditions across a stated validity period.' },
      { domain: 'Loading and Performance', difficulty: 'easy', q: 'Exceeding the manufacturer\u2019s maximum takeoff weight:', choices: ['Is fine for short flights', 'Reduces performance and is non-compliant', 'Only affects battery life', 'Is allowed with a waiver at any time'], answer: 1, why: 'Weight limits are hard limits affecting control, climb, and compliance.' },
      { domain: 'Loading and Performance', difficulty: 'medium', q: 'An off-center payload primarily affects:', choices: ['Battery voltage', 'Center of gravity and control response', 'Camera resolution', 'GPS accuracy'], answer: 1, why: 'Shifted balance degrades stability and control authority.' },
      { domain: 'Emergency Procedures', difficulty: 'medium', q: 'A return-to-home altitude set below local obstacle heights creates:', choices: ['Faster recovery', 'A crash risk during lost-link events', 'Better GPS lock', 'Lower battery use'], answer: 1, why: 'Lost-link return paths must clear obstacles — misconfigured return altitude converts a nuisance into a crash.' },
      { domain: 'Emergency Procedures', difficulty: 'medium', type: 'scenario', q: 'Your aircraft loses link and drifts toward a nearby towered airport\u2019s airspace. Beyond attempting reacquisition, you should:', choices: ['Wait and see', 'Promptly notify the control facility per procedures', 'Call the client', 'Power off the controller'], answer: 1, why: 'Aircraft entering controlled airspace unexpectedly require prompt facility notification.' },
      { domain: 'Crew Resource Management', difficulty: 'easy', q: 'The primary duty of a visual observer is:', choices: ['Operating the camera', 'Dedicated scanning for hazards and traffic with clear callouts', 'Managing the crowd', 'Holding spare batteries'], answer: 1, why: 'The observer\u2019s defined role is continuous scanning and immediate hazard callouts.' },
      { domain: 'Crew Resource Management', difficulty: 'medium', q: 'An effective crew brief includes roles, hazards, and:', choices: ['Lunch plans', 'Abort criteria and emergency actions', 'Marketing talking points', 'Invoice terms'], answer: 1, why: 'Abort criteria agreed in advance convert hesitation into action when conditions degrade.' },
      { domain: 'Aeronautical Decision-Making', difficulty: 'easy', q: 'The "M" in IMSAFE stands for:', choices: ['Maintenance', 'Medication', 'Money', 'Motivation'], answer: 1, why: 'IMSAFE: Illness, Medication, Stress, Alcohol, Fatigue, Emotion.' },
      { domain: 'Aeronautical Decision-Making', difficulty: 'medium', type: 'scenario', q: 'A client pressures you for one more pass as gusts build and the battery drops. The hazardous attitude most at play is:', choices: ['Resignation', 'Impulsivity combined with external pressure', 'Anti-authority', 'Invulnerability only'], answer: 1, why: 'Acting on pressure without structured assessment is the impulsivity trap; the antidote is "not so fast, think first."' },
      { domain: 'Operations and Limitations', difficulty: 'easy', q: 'The standard maximum altitude for Part 107 operations is:', choices: ['500 feet AGL', '400 feet AGL', '1,200 feet AGL', '200 feet AGL'], answer: 1, why: 'Four hundred feet above ground level is the standard ceiling, with defined structure exceptions.' },
      { domain: 'Operations and Limitations', difficulty: 'medium', q: 'Minimum flight visibility and cloud clearance under Part 107 are:', choices: ['1 mile and clear of clouds', '3 statute miles; 500 feet below and 2,000 feet horizontally from clouds', '5 miles and 1,000 feet from clouds', '10 miles and 2,000 feet below clouds'], answer: 1, why: 'Three statute miles visibility and 500/2,000 cloud clearance define the weather minimums.' },
      { domain: 'Operations and Limitations', difficulty: 'medium', q: 'When a crewed aircraft approaches your operation area, you must:', choices: ['Hold position — drones have right of way', 'Yield immediately by landing or maneuvering away', 'Ascend above it', 'Flash your lights'], answer: 1, why: 'Small drones yield to all other aircraft — immediately and completely.' },
    ],
  },

  // ======================================================================
  // 9. FAA Airframe Knowledge Readiness
  // ======================================================================
  {
    id: 'track_airframe',
    name: 'FAA Airframe Knowledge Readiness',
    shortName: 'AMT Airframe',
    category: 'aviation',
    weeks: 16,
    description:
      'Build airframe mastery — structures, systems, hydraulics, landing gear, environmental systems, and inspection fundamentals for aviation maintenance knowledge.',
    credentialFocus: 'Mapped to airframe subject areas of aviation maintenance technician certification',
    schoolOverview:
      'A comprehensive airframe knowledge pathway within a structured curriculum framework, covering structures and aircraft systems with documented readiness evidence. Reports support program accountability and student certification planning.',
    studentOverview:
      'Learn how aircraft structures and systems actually work — sheet metal and composites, hydraulics, landing gear, fuel, electrical, and environmental systems — with drills and scenarios that build real knowledge-test readiness.',
    prerequisites: 'Completion of aviation maintenance General knowledge coursework is strongly recommended.',
    alignmentNotes:
      'Modules and practice banks are mapped to airframe subject areas of aviation maintenance technician certification within a structured curriculum framework. All content is original.',
    domains: [
      'Airframe Structures',
      'Sheet Metal and Composites',
      'Aircraft Welding and Assembly',
      'Hydraulic and Pneumatic Systems',
      'Landing Gear Systems',
      'Fuel Systems',
      'Electrical Systems',
      'Environmental Systems',
      'Ice and Rain Protection',
      'Fire Protection Systems',
      'Flight Controls and Rigging',
      'Inspection Fundamentals',
    ],
    modules: [
      {
        title: 'Airframe Structures and Materials',
        description: 'Understand airframe construction types and the materials that build them.',
        lessons: [
          {
            title: 'Structural Design and Loads',
            minutes: 25,
            intro: [
              'Airframes carry flight loads through engineered load paths: wings generate lift that the structure transfers to the fuselage, and every component is designed against tension, compression, bending, shear, and torsion. Truss, monocoque, and semimonocoque construction represent the historical progression — modern aircraft are overwhelmingly semimonocoque, where stressed skin shares loads with internal frames and stringers.',
              'Stress analysis concepts matter practically to the mechanic: stress risers concentrate load at sharp corners and holes, which is why cracks start at fastener holes and window corners, and why stop-drilling and careful edge treatment are legitimate repair techniques. Fatigue — cumulative damage from repeated loading cycles — drives inspection intervals.',
            ],
            sections: [
              {
                heading: 'Load Types',
                bullets: [
                  'Tension: pulling apart.',
                  'Compression: squeezing together.',
                  'Bending: combined tension and compression.',
                  'Shear: sliding forces.',
                  'Torsion: twisting.',
                ],
              },
              {
                heading: 'Construction Types',
                bullets: [
                  'Truss: framework carries all loads.',
                  'Monocoque: shell carries all loads.',
                  'Semimonocoque: skin and structure share loads.',
                ],
              },
            ],
            keyPoints: [
              'Semimonocoque dominates modern construction.',
              'Five load types act on every structure.',
              'Cracks originate at stress risers.',
              'Fatigue drives inspection scheduling.',
            ],
          },
          {
            title: 'Aircraft Metals and Material Properties',
            minutes: 25,
            intro: [
              'Aluminum alloys dominate airframes for their strength-to-weight ratio, with alloy designations and heat-treatment tempers defining strength and workability. Steel appears where strength and heat resistance justify weight; titanium serves high-heat and high-stress zones; magnesium offers lightness with corrosion caution. Material identification is a shop skill — using the wrong alloy in a repair compromises the design.',
              'Corrosion is the mechanic\u2019s permanent opponent: dissimilar-metal contact, moisture, and time produce galvanic and surface corrosion that weakens structure silently. Recognition — white powdery deposits on aluminum, rust on steel — plus proper cleaning, treatment, and protective finishing are daily airframe maintenance work.',
            ],
            sections: [
              {
                heading: 'Material Selection Logic',
                bullets: [
                  'Aluminum alloys: the structural default.',
                  'Steel: strength and heat zones.',
                  'Titanium: high stress and heat.',
                  'Magnesium: light, corrosion-vulnerable.',
                ],
              },
              {
                heading: 'Corrosion Recognition',
                bullets: [
                  'White powder on aluminum.',
                  'Red-brown rust on steel.',
                  'Dissimilar-metal joints are prime sites.',
                  'Treat and protect — never just paint over.',
                ],
              },
            ],
            keyPoints: [
              'Alloy and temper define aluminum strength.',
              'Material identification prevents repair errors.',
              'Corrosion weakens structure silently.',
              'Galvanic corrosion attacks dissimilar-metal joints.',
            ],
            callout: {
              variant: 'exam',
              title: 'Exam focus',
              text: 'Load types, construction types, and corrosion recognition are core airframe knowledge-test items.',
            },
          },
        ],
      },
      {
        title: 'Sheet Metal and Composite Structures',
        description: 'Perform layout, fastener, and composite repair fundamentals.',
        lessons: [
          {
            title: 'Sheet Metal Layout, Bend, and Fasteners',
            minutes: 30,
            intro: [
              'Sheet metal work begins with layout math: bend allowance calculations account for material stretching around a bend, using bend radius and thickness to produce flat patterns that come out right. Setback, bend allowance, and the neutral axis are the working vocabulary — a layout error of a few thousandths compounds across a repair.',
              'Fasteners complete the structure: solid rivets set with proper shop heads, blind fasteners for one-sided access, and special fasteners like hi-style pins for high-shear joints. Rivet selection follows material and diameter rules — diameter typically three times the sheet thickness — and inspection rejects smiley-faced, tilted, or cracked shop heads.',
            ],
            sections: [
              {
                heading: 'Layout Vocabulary',
                bullets: [
                  'Neutral axis: the unstressed layer in a bend.',
                  'Bend allowance: material the bend consumes.',
                  'Setback: the flat-pattern offset.',
                  'Grain direction relative to bends matters.',
                ],
              },
              {
                heading: 'Rivet Quality Standards',
                bullets: [
                  'Diameter: roughly three times sheet thickness.',
                  'Shop head properly formed, not tilted.',
                  'No cracks, smiles, or gaps.',
                  'Edge distance rules prevent tear-out.',
                ],
              },
            ],
            keyPoints: [
              'Bend allowance math makes flat patterns accurate.',
              'Rivet diameter follows the three-times rule.',
              'Shop-head inspection rejects malformed rivets.',
              'Edge distances protect against tear-out.',
            ],
          },
          {
            title: 'Composite Construction and Repair',
            minutes: 30,
            intro: [
              'Composite structures — fibers in a resin matrix — deliver strength-to-weight beyond metals, and their damage hides: a composite panel can look sound while delaminated internally. Tap testing with a coin or hammer reveals the difference — a clear ring indicates bonded material, a dull thud indicates delamination — and moisture ingress into honeycomb cores is a chronic inspection target.',
              'Composite repair follows controlled processes: damage assessment and mapping, scarfing damaged plies, laying up replacement plies in correct orientation, and curing under specified temperature and pressure. Resin systems have shelf lives and mixing ratios that are followed exactly, and fiber orientation relative to load direction is engineered, not improvised.',
            ],
            sections: [
              {
                heading: 'Inspection Signs',
                bullets: [
                  'Clear tap tone: bonded material.',
                  'Dull thud: delamination.',
                  'Surface cracks near fittings.',
                  'Moisture in honeycomb cores.',
                ],
              },
              {
                heading: 'Repair Process',
                steps: [
                  'Map the damage extent.',
                  'Remove damaged plies by scarfing.',
                  'Lay replacement plies in engineered orientation.',
                  'Cure per specification.',
                  'Inspect the finished repair.',
                ],
              },
            ],
            keyPoints: [
              'Composite damage hides beneath intact surfaces.',
              'Tap testing distinguishes bonded from delaminated.',
              'Ply orientation is engineered, not improvised.',
              'Resin ratios and cure cycles are followed exactly.',
            ],
            callout: {
              variant: 'safety',
              title: 'Safety',
              text: 'Composite dust and resins are respiratory hazards — sanding and mixing require the specified protection, every time.',
            },
          },
        ],
      },
      {
        title: 'Hydraulic and Pneumatic Systems',
        description: 'Understand the fluid power that moves flight controls and landing gear.',
        lessons: [
          {
            title: 'Hydraulic System Components and Operation',
            minutes: 30,
            intro: [
              'Hydraulics multiply force through incompressible fluid: pumps pressurize the system — commonly to 3,000 psi in transport aircraft — reservoirs store fluid, accumulators absorb surges and store energy, and actuators convert pressure into motion for gear, flaps, brakes, and flight controls. Pascal\u2019s principle — pressure applied to confined fluid transmits equally — is the physics under the whole system.',
              'System integrity is safety-critical: contamination destroys precision valves, so servicing follows strict cleanliness discipline, and fluid types are never mixed — the wrong fluid attacks seals and can disable systems. Leaks are found by inspection of lines, fittings, and actuator seals, with red-tinted mineral fluids and purple-tinted synthetics aiding identification.',
            ],
            sections: [
              {
                heading: 'Major Components',
                bullets: [
                  'Reservoir: fluid storage.',
                  'Pump: pressure source.',
                  'Accumulator: surge absorption and energy storage.',
                  'Actuators: pressure to motion.',
                  'Selector valves: directing flow.',
                ],
              },
              {
                heading: 'Servicing Discipline',
                bullets: [
                  'Cleanliness is absolute — contamination kills valves.',
                  'Never mix fluid types.',
                  'Identify fluid by color and specification.',
                  'Depressurize before opening any line.',
                ],
              },
            ],
            keyPoints: [
              'Pascal\u2019s principle powers hydraulics.',
              '3,000 psi is a common system pressure.',
              'Accumulators store energy and smooth surges.',
              'Fluid compatibility and cleanliness are non-negotiable.',
            ],
            callout: {
              variant: 'safety',
              title: 'Safety',
              text: 'Pressurized hydraulic systems can inject fluid through skin — never trace a leak with a bare hand; use cardboard and relieve pressure first.',
            },
          },
          {
            title: 'Pneumatics and Troubleshooting Logic',
            minutes: 25,
            intro: [
              'Pneumatic systems use compressed air for functions like deice boot inflation, instrument pressure, and some brake and door systems. Sources include engine bleed air and engine-driven pumps, with regulators, filters, and relief valves conditioning the supply. Moisture is pneumatic systems\u2019 enemy — freezing at altitude blocks lines, so dryers and drains are serviced items.',
              'Troubleshooting follows system logic: understand the schematic, isolate the fault between supply, control, and actuation sections, and test systematically rather than swapping parts. A gear that will not extend might be a failed pump, a stuck selector valve, or a mechanical binding — the schematic tells you where to look first.',
            ],
            sections: [
              {
                heading: 'Pneumatic Applications',
                bullets: [
                  'Deice boot inflation.',
                  'Instrument pressure sources.',
                  'Certain brake and door systems.',
                  'Moisture control through dryers and drains.',
                ],
              },
              {
                heading: 'Troubleshooting Sequence',
                steps: [
                  'Study the system schematic.',
                  'Define what works and what does not.',
                  'Isolate supply, control, or actuation.',
                  'Test the suspect section.',
                  'Verify the fix through full operation.',
                ],
              },
            ],
            keyPoints: [
              'Pneumatics power deice boots and instruments.',
              'Moisture control prevents altitude freezing.',
              'Schematics drive troubleshooting.',
              'Systematic isolation beats parts-swapping.',
            ],
          },
        ],
      },
      {
        title: 'Landing Gear Systems',
        description: 'Service gear, brakes, tires, and retraction systems.',
        lessons: [
          {
            title: 'Gear Construction, Shock Absorption, and Retraction',
            minutes: 30,
            intro: [
              'Landing gear absorb arrival energy and support everything on the ground. Oleo-pneumatic struts combine compressed gas and hydraulic fluid — gas absorbs the impact, fluid meters the rebound — and proper servicing of both gas charge and fluid level determines strut performance. Torque links keep the piston aligned, and shrink/strut markings show inflation state at a glance.',
              'Retraction systems sequence hydraulically or electrically with safety interlocks: gear position indicators, warning horns for unsafe configurations, and ground safety locks that prevent retraction on the ground. Swing checks and emergency extension procedures are maintenance competencies — knowing where the manual extension mechanisms are and how they work is expected knowledge.',
            ],
            sections: [
              {
                heading: 'Strut Service Logic',
                bullets: [
                  'Gas charge absorbs impact.',
                  'Fluid level meters rebound.',
                  'Both are serviced to specification.',
                  'Extension markings show service state.',
                ],
              },
              {
                heading: 'Safety Interlocks',
                bullets: [
                  'Ground safety locks prevent ground retraction.',
                  'Position indicators confirm gear state.',
                  'Warning horns signal unsafe configuration.',
                  'Emergency extension paths exist and are practiced.',
                ],
              },
            ],
            keyPoints: [
              'Oleo struts combine gas absorption with fluid metering.',
              'Both gas and fluid are serviced to spec.',
              'Ground locks prevent ground retraction accidents.',
              'Emergency extension knowledge is expected.',
            ],
            callout: {
              variant: 'safety',
              title: 'Safety',
              text: 'Before any gear maintenance, verify ground safety locks are installed — a gear retraction with a person in the wheel well is a fatal accident pattern.',
            },
          },
          {
            title: 'Wheels, Tires, and Brakes',
            minutes: 25,
            intro: [
              'Aircraft tires carry enormous loads at high speeds, and inspection is precise: tread wear to limits, cuts measured against criteria, flat spots from skids, and correct inflation — underinflation is the leading tire killer, causing sidewall flexing and heat. Wheel half mating marks, bearing condition, and tie-bolt torque are assembly details with consequences.',
              'Brake systems convert kinetic energy into heat through disc packs, with wear pins indicating remaining life. Brake servicing — bleeding hydraulic brakes, adjusting, inspecting linings and discs for heat damage — follows manufacturer procedures, and overheated brakes after heavy use are approached with caution because wheel fuse plugs are designed to deflate tires before explosion.',
            ],
            sections: [
              {
                heading: 'Tire Inspection Points',
                bullets: [
                  'Tread depth against limits.',
                  'Cuts and flat spots against criteria.',
                  'Inflation to specification.',
                  'Sidewall condition.',
                ],
              },
              {
                heading: 'Brake Service Knowledge',
                bullets: [
                  'Wear pins indicate lining life.',
                  'Bleeding follows procedure exactly.',
                  'Heat damage inspection after heavy braking.',
                  'Fuse plugs protect against wheel overheat.',
                ],
              },
            ],
            keyPoints: [
              'Underinflation is the top tire killer.',
              'Wear pins show brake life at a glance.',
              'Overheated wheels demand standoff caution.',
              'Assembly details — marks, torque, bearings — carry consequences.',
            ],
          },
        ],
      },
      {
        title: 'Fuel and Electrical Systems',
        description: 'Understand fuel storage, feed, and aircraft electrical generation.',
        lessons: [
          {
            title: 'Fuel Systems: Storage, Feed, and Safety',
            minutes: 30,
            intro: [
              'Fuel systems store, manage, and deliver fuel: bladder and integral wet-wing tanks, boost pumps ensuring feed under all attitudes, selector valves managing tank sequence, and quantity indication. Sump drains allow daily checks for water contamination — the classic first-flight-of-the-day inspection item — and fueling operations follow bonding and grounding discipline to prevent static ignition.',
              'Fuel system maintenance is fire-safety work: tanks are purged and ventilated before entry, vapor-safe equipment is used, and leak classification — seep, stain, running — drives repair urgency. Fuel quantity system calibration and vent system integrity complete the knowledge set.',
            ],
            sections: [
              {
                heading: 'System Elements',
                bullets: [
                  'Bladder and integral tanks.',
                  'Boost pumps for positive feed.',
                  'Selectors manage tank sequence.',
                  'Sumps allow water checks.',
                ],
              },
              {
                heading: 'Safety Practices',
                bullets: [
                  'Bond and ground during fueling.',
                  'Purge and ventilate tanks before entry.',
                  'Use vapor-safe equipment.',
                  'Classify leaks and act accordingly.',
                ],
              },
            ],
            keyPoints: [
              'Boost pumps guarantee feed pressure.',
              'Daily sump checks catch water contamination.',
              'Bonding and grounding prevent static ignition.',
              'Tank entry follows purge and ventilation rules.',
            ],
            callout: {
              variant: 'safety',
              title: 'Safety',
              text: 'Never enter a fuel tank without documented purging, ventilation, and an outside attendant — fuel vapor incapacitates in seconds.',
            },
          },
          {
            title: 'Aircraft Electrical Systems',
            minutes: 30,
            intro: [
              'Aircraft electrical systems generate, distribute, and protect power: engine-driven generators or alternators feed buses that distribute to systems, with batteries providing startup and emergency reserve. DC systems dominate light aircraft; larger aircraft combine AC generation with transformer-rectifier conversion. Circuit breakers and fuses protect wiring from overload.',
              'Wire and connection integrity define system reliability: chafed insulation, corroded terminals, and loose connections cause intermittent faults that defy casual troubleshooting. Wire identification codes, proper crimping, and circuit testing with multimeters — voltage, continuity, resistance — are the mechanic\u2019s electrical fundamentals.',
            ],
            sections: [
              {
                heading: 'Power Architecture',
                bullets: [
                  'Generators or alternators produce power.',
                  'Buses distribute to systems.',
                  'Batteries start and back up.',
                  'Breakers and fuses protect circuits.',
                ],
              },
              {
                heading: 'Maintenance Fundamentals',
                bullets: [
                  'Inspect for chafing and corrosion.',
                  'Crimp connections per standard.',
                  'Read wire identification codes.',
                  'Measure voltage, continuity, resistance correctly.',
                ],
              },
            ],
            keyPoints: [
              'Generation feeds buses; buses feed systems.',
              'Batteries provide start and emergency power.',
              'Protection devices isolate overloads.',
              'Intermittent faults usually mean wiring degradation.',
            ],
          },
        ],
      },
      {
        title: 'Environmental and Protection Systems',
        description: 'Learn cabin environmental, ice protection, and fire protection systems.',
        lessons: [
          {
            title: 'Pressurization and Environmental Control',
            minutes: 25,
            intro: [
              'Pressurization keeps cabin altitude breathable at flight levels: engine bleed air or compressors pump air in, and outflow valves meter it out, holding a cabin altitude schedule while safety and relief valves protect against overpressure. The outflow valve is the system\u2019s throttle — controlling what leaves sets what stays.',
              'Air conditioning packs condition bleed air through heat exchangers and expansion cycles; oxygen systems serve crew and passengers with stored or generated supply. Oxygen system maintenance follows absolute cleanliness — oil and grease ignite violently in oxygen environments — and oxygen fittings and tools are dedicated and marked.',
            ],
            sections: [
              {
                heading: 'Pressurization Logic',
                bullets: [
                  'Bleed air or compressors supply the cabin.',
                  'Outflow valves meter exhaust to hold schedule.',
                  'Safety valves protect against overpressure.',
                  'Cabin altitude, not pressure alone, is the metric.',
                ],
              },
              {
                heading: 'Oxygen System Rules',
                bullets: [
                  'Absolute cleanliness — no oil or grease.',
                  'Dedicated, marked tools and fittings.',
                  'Stored gas or chemical generation.',
                ],
              },
            ],
            keyPoints: [
              'Outflow valves control cabin pressure.',
              'Cabin altitude is the operative measure.',
              'Oxygen plus oil equals ignition — cleanliness is absolute.',
              'Safety valves are the overpressure last line.',
            ],
            callout: {
              variant: 'safety',
              title: 'Safety',
              text: 'Oxygen-system work with contaminated tools or grease-covered hands has caused fatal fires — the cleanliness rules are absolute.',
            },
          },
          {
            title: 'Ice, Rain, and Fire Protection',
            minutes: 25,
            intro: [
              'Ice protection divides into anti-ice — preventing formation with heated surfaces and fluid — and deice — removing accumulation with inflatable boots or weeping-wing fluid. Pitot-static heat protects instrument sources, and propeller and windshield systems complete the envelope. Operation logic matters: boots cycle periodically; heat comes on before encountering visible moisture in icing temperatures.',
              'Fire protection combines detection — continuous-loop or spot detectors sensing heat — with extinguishing: high-rate-discharge bottles flooding engine compartments with agent. Squib-fired bottles are live ordnance handled per procedure, and discharge indicators — the telltale discs — show bottle status on inspection.',
            ],
            sections: [
              {
                heading: 'Ice Protection Methods',
                bullets: [
                  'Anti-ice: heated surfaces and fluid prevent formation.',
                  'Deice: boots or weeping fluid remove buildup.',
                  'Pitot-static heat protects instruments.',
                  'Timing rules govern activation.',
                ],
              },
              {
                heading: 'Fire Protection Elements',
                bullets: [
                  'Detection: continuous-loop or spot sensors.',
                  'Extinguishing: high-rate discharge bottles.',
                  'Squibs are ordnance — handled per procedure.',
                  'Indicator discs show discharge status.',
                ],
              },
            ],
            keyPoints: [
              'Anti-ice prevents; deice removes.',
              'Pitot heat comes on before icing conditions.',
              'Fire bottles discharge at high rate into zones.',
              'Squibs are handled as live ordnance.',
            ],
          },
        ],
      },
      {
        title: 'Flight Controls and Rigging',
        description: 'Understand control surfaces, cables, and rigging checks.',
        lessons: [
          {
            title: 'Primary and Secondary Flight Controls',
            minutes: 25,
            intro: [
              'Primary controls — ailerons, elevator, rudder — command roll, pitch, and yaw; secondary controls — flaps, slats, spoilers, trim — shape lift and balance. Cable-and-pulley systems dominate light aircraft, with pushrods and hydraulics in larger types, and every system has defined travel limits, cable tensions, and free-play tolerances.',
              'Trim systems offload control pressures so the pilot does not fight the aircraft continuously, and trim tabs move opposite the desired surface movement to aerodynamically drive the surface. Flutter — destructive aerodynamic oscillation — is prevented by mass balance and rigging within limits, which is why loose controls and missing balance weights are serious findings.',
            ],
            sections: [
              {
                heading: 'Control Inventory',
                bullets: [
                  'Ailerons: roll.',
                  'Elevator: pitch.',
                  'Rudder: yaw.',
                  'Flaps, slats, spoilers, trim: secondary.',
                ],
              },
              {
                heading: 'Rigging Essentials',
                bullets: [
                  'Travel limits per specification.',
                  'Cable tension within range.',
                  'Free play within tolerance.',
                  'Balance weights secure and correct.',
                ],
              },
            ],
            keyPoints: [
              'Three primary surfaces command three axes.',
              'Trim tabs move opposite the desired surface motion.',
              'Flutter prevention depends on rigging and balance.',
              'Loose controls are serious findings.',
            ],
          },
          {
            title: 'Rigging Inspection and Adjustment',
            minutes: 25,
            intro: [
              'Rigging checks verify the geometry: control surface travel measured with protractors against specified degrees, cable tension measured with tensiometers and corrected for temperature, and neutral alignment of surfaces with controls. Turnbuckles and adjusters bring systems into range, with safety wire or clips securing every adjustment.',
              'After any adjustment, a full-travel functional check confirms correct and free movement — the maintenance rule "controls checked full and free" before flight exists because reversed or blocked controls have caused accidents. Documentation of rigging measurements completes the airworthiness record.',
            ],
            sections: [
              {
                heading: 'Measurement Tools and Checks',
                bullets: [
                  'Protractors measure surface travel.',
                  'Tensiometers measure cable tension.',
                  'Temperature corrections apply to tension.',
                  'Neutral alignment verified.',
                ],
              },
              {
                heading: 'Post-Adjustment Discipline',
                steps: [
                  'Secure every turnbuckle with safety wire.',
                  'Check full and free movement.',
                  'Verify correct surface response direction.',
                  'Document measurements.',
                ],
              },
            ],
            keyPoints: [
              'Travel, tension, and alignment define rigging.',
              'Tension readings are temperature-corrected.',
              'Every adjustment gets safety-wired.',
              'Full-and-free checks follow all control work.',
            ],
            callout: {
              variant: 'exam',
              title: 'Exam focus',
              text: 'Trim tab movement direction and cable tension measurement are classic airframe test items.',
            },
          },
        ],
      },
      {
        title: 'Airframe Inspection Fundamentals',
        description: 'Apply inspection standards, documentation, and airworthiness logic.',
        lessons: [
          {
            title: 'Inspection Types and Techniques',
            minutes: 25,
            intro: [
              'Inspections range from preflight walk-arounds to annual and 100-hour inspections and manufacturer phase programs, each with defined scope. The annual inspection is the comprehensive airworthiness review performed by authorized inspectors, while progressive programs divide the work into scheduled segments for high-utilization aircraft.',
              'Inspection technique is systematic: work from checklists zone by zone, use proper lighting and mirrors, apply nondestructive methods — visual, tap testing, dye penetrant, eddy current, magnetic particle — matched to material and suspected flaw. Findings are documented factually: location, size, and disposition, because the next inspector reads your work.',
            ],
            sections: [
              {
                heading: 'Inspection Hierarchy',
                bullets: [
                  'Preflight: pilot-level daily checks.',
                  '100-hour: for hire operations.',
                  'Annual: comprehensive, authorized inspectors.',
                  'Progressive: segmented programs.',
                ],
              },
              {
                heading: 'NDT Method Matching',
                bullets: [
                  'Visual and borescope: general condition.',
                  'Dye penetrant: surface cracks in nonporous material.',
                  'Eddy current: conductive materials, hidden cracks.',
                  'Magnetic particle: ferromagnetic parts only.',
                ],
              },
            ],
            keyPoints: [
              'Inspection scope matches the inspection type.',
              'Checklist discipline ensures coverage.',
              'NDT methods match material and flaw type.',
              'Findings are documented factually for the next inspector.',
            ],
          },
          {
            title: 'Airworthiness and Documentation',
            minutes: 25,
            intro: [
              'Airworthiness is a documented legal condition: the aircraft conforms to its type design and is in condition for safe operation. Maintenance records — logbook entries describing work performed, approvals for return to service, and major repair and alteration documentation — prove that condition and travel with the aircraft.',
              'Airworthiness directives are mandatory instructions issued when unsafe conditions are found in a type design; compliance is verified, recorded, and tracked for recurring requirements. The mechanic\u2019s signature returns aircraft to service with legal meaning — the signature says the work was done as described, and falsifying it carries severe consequences.',
            ],
            sections: [
              {
                heading: 'Airworthiness Definition',
                bullets: [
                  'Conforms to type design.',
                  'In condition for safe operation.',
                  'Both elements must be true.',
                  'Documentation proves the condition.',
                ],
              },
              {
                heading: 'Record Discipline',
                bullets: [
                  'Log entries describe work accurately.',
                  'AD compliance is verified and recorded.',
                  'Recurring ADs are tracked.',
                  'Signatures carry legal accountability.',
                ],
              },
            ],
            keyPoints: [
              'Airworthiness equals conformance plus safe condition.',
              'Records prove the condition legally.',
              'ADs are mandatory, tracked, and recorded.',
              'A signature is a legal attestation.',
            ],
            callout: {
              variant: 'warning',
              title: 'Integrity',
              text: 'Your signature on a return-to-service is a legal statement — sign only work you verified was performed as described.',
            },
          },
        ],
      },
      {
        title: 'Welding and Structural Fabrication',
        description: 'Understand aircraft welding methods and when each applies.',
        lessons: [
          {
            title: 'Aircraft Welding Methods',
            minutes: 25,
            intro: [
              'Aircraft welding joins steel tubing structures and select aluminum assemblies where the design calls for it. Gas welding served the classic tube-and-fabric era; TIG welding — precise, clean, controllable — dominates modern practice for thin aircraft materials; MIG serves heavier, less precision-critical work. Material dictates method, and the aircraft\u2019s approved data dictates everything.',
              'Weld quality is structural integrity: penetration, bead consistency, and freedom from porosity and cracking determine whether a joint carries its design load. Post-weld heat treatment restores properties in certain alloys, and welds on critical structure require qualified welders and inspection — this is not learn-as-you-go territory.',
            ],
            sections: [
              {
                heading: 'Method Selection',
                bullets: [
                  'TIG: precision work on thin aircraft materials.',
                  'Gas welding: classic tube-and-fabric structures.',
                  'MIG: heavier, less critical work.',
                  'Approved data governs every weld.',
                ],
              },
              {
                heading: 'Quality Indicators',
                bullets: [
                  'Full penetration without burn-through.',
                  'Consistent bead, no porosity.',
                  'No cracks at toe or crater.',
                  'Heat treatment where specified.',
                ],
              },
            ],
            keyPoints: [
              'Method follows material and approved data.',
              'TIG dominates precision aircraft welding.',
              'Weld defects are structural defects.',
              'Critical welds require qualified welders and inspection.',
            ],
            callout: {
              variant: 'safety',
              title: 'Safety',
              text: 'Welding near fuel systems demands purging and isolation per procedure — residual vapor in a "empty" tank has destroyed shops.',
            },
          },
          {
            title: 'Assembly Practices: Riveting, Bolting, and Hardware',
            minutes: 25,
            intro: [
              'Aircraft assembly hardware is engineered, not generic: AN-standard bolts with grip lengths matched to material stack, self-locking nuts used where specified and replaced rather than reused beyond limits, and torque values applied with calibrated wrenches. Cotter pins and safety wire secure critical fasteners — safety wire pulling tight in the direction that resists loosening.',
              'Hardware identification is a core shop skill: head markings identify bolt grade and standard, and substituting hardware-store bolts for aircraft bolts is a fatal-category error. Thread condition, correct grip length — shank in bearing, threads clear of the shear plane — and documented torque complete the assembly standard.',
            ],
            sections: [
              {
                heading: 'Hardware Rules',
                bullets: [
                  'Aircraft-standard bolts only — never hardware-store substitutes.',
                  'Grip length matches the material stack.',
                  'Threads stay clear of shear planes.',
                  'Self-locking hardware replaced per limits.',
                ],
              },
              {
                heading: 'Securing Methods',
                bullets: [
                  'Cotter pins with castellated nuts.',
                  'Safety wire tensioned against loosening.',
                  'Calibrated torque wrenches to specification.',
                ],
              },
            ],
            keyPoints: [
              'Aircraft hardware is specified, not generic.',
              'Grip length and thread position are engineering.',
              'Safety wire pulls against the loosening direction.',
              'Torque values come from data, applied with calibrated tools.',
            ],
          },
        ],
      },
      {
        title: 'Aircraft Covering, Painting, and Finishing',
        description: 'Learn fabric covering, paint systems, and finish inspection.',
        lessons: [
          {
            title: 'Fabric and Covering Systems',
            minutes: 25,
            intro: [
              'Fabric-covered aircraft wrap structure in doped polyester fabric shrunk taut by heat, then sealed with coatings that protect against ultraviolet light and moisture. Covering work follows process discipline: fabric attachment, heat-shrinking in staged temperatures, rib stitching that ties fabric to structure against lifting airflow, and inspection rings and tapes finishing the surface.',
              'Fabric condition is airworthiness: punch tests and fabric testers measure strength against minimums, because sun-degraded fabric that looks sound can fail at flight loads. Repairs follow approved patch methods with correct stitch spacing and finishing tapes, and covering work is documented like any structural repair.',
            ],
            sections: [
              {
                heading: 'Covering Process',
                steps: [
                  'Attach fabric to the structure.',
                  'Heat-shrink in staged temperatures.',
                  'Rib-stitch per spacing schedule.',
                  'Apply finishing tapes and coatings.',
                  'Inspect and document.',
                ],
              },
              {
                heading: 'Condition Assessment',
                bullets: [
                  'Strength testers measure against minimums.',
                  'UV degradation hides behind good looks.',
                  'Approved patch methods for damage.',
                ],
              },
            ],
            keyPoints: [
              'Heat-shrinking tensions the fabric.',
              'Rib stitching resists lifting airflow.',
              'Fabric strength is measured, not eyeballed.',
              'Covering work is documented structural work.',
            ],
          },
          {
            title: 'Paint Systems and Finish Inspection',
            minutes: 20,
            intro: [
              'Aircraft finishes protect structure and carry identification: primer systems bond to prepared metal, topcoats provide the environmental barrier, and the whole system adds weight that figures into weight and balance on full repaints. Surface preparation — cleaning, conversion coating, sanding — determines finish life more than the paint itself.',
              'Finish inspection reads the surface for what lies beneath: paint cracks telegraphing structural cracks, corrosion bubbling under coatings, and erosion on leading edges. Masking discipline protects windows, static ports, and control surfaces — paint on a static port is an instrument failure, and paint imbalance on a control surface is a flutter risk requiring rebalance checks.',
            ],
            sections: [
              {
                heading: 'Finish System Logic',
                bullets: [
                  'Preparation determines longevity.',
                  'Primers bond and protect.',
                  'Repaint weight enters weight and balance.',
                ],
              },
              {
                heading: 'Masking Criticals',
                bullets: [
                  'Static ports and pitot openings.',
                  'Windows and lenses.',
                  'Control surfaces — rebalance after paint.',
                ],
              },
            ],
            keyPoints: [
              'Preparation beats paint for durability.',
              'Full repaints affect weight and balance.',
              'Finish cracks can telegraph structural cracks.',
              'Painted control surfaces require rebalance checks.',
            ],
            callout: {
              variant: 'exam',
              title: 'Exam focus',
              text: 'Control-surface rebalance after painting and fabric-strength testing are classic airframe knowledge items.',
            },
          },
        ],
      },
    ],
    questions: [
      { domain: 'Airframe Structures', difficulty: 'easy', q: 'Which construction type uses stressed skin sharing loads with internal frames and stringers?', choices: ['Truss', 'Monocoque', 'Semimonocoque', 'Geodesic'], answer: 2, why: 'Semimonocoque — skin plus internal structure sharing loads — dominates modern airframes.' },
      { domain: 'Airframe Structures', difficulty: 'medium', q: 'Cracks most commonly originate at:', choices: ['Mid-spar locations', 'Stress risers such as sharp corners and holes', 'Painted surfaces', 'Fiberglass fairings'], answer: 1, why: 'Stress concentrates at geometric discontinuities — holes and corners are the classic crack origins.' },
      { domain: 'Sheet Metal and Composites', difficulty: 'medium', q: 'A common rule of thumb sets rivet diameter at approximately:', choices: ['Equal to the sheet thickness', 'Three times the sheet thickness', 'Ten times the sheet thickness', 'Half the sheet thickness'], answer: 1, why: 'The three-times-thickness rule balances shear strength and sheet bearing.' },
      { domain: 'Sheet Metal and Composites', difficulty: 'medium', q: 'A dull thud during composite tap testing indicates:', choices: ['Bonded material', 'Delamination', 'Proper cure', 'Moisture-free core'], answer: 1, why: 'Delaminated plies deaden the tap tone; bonded material rings clearly.' },
      { domain: 'Aircraft Welding and Assembly', difficulty: 'medium', q: 'Dissimilar-metal contact in the presence of moisture primarily risks:', choices: ['Magnetic interference', 'Galvanic corrosion', 'Paint failure', 'Static discharge'], answer: 1, why: 'Galvanic couples form between dissimilar metals with an electrolyte, driving corrosion.' },
      { domain: 'Aircraft Welding and Assembly', difficulty: 'easy', q: 'White powdery deposits on aluminum structure indicate:', choices: ['Normal oxidation to ignore', 'Corrosion requiring treatment', 'Factory sealant', 'Paint primer'], answer: 1, why: 'White powder is the classic sign of aluminum corrosion — clean, treat, and protect.' },
      { domain: 'Hydraulic and Pneumatic Systems', difficulty: 'easy', q: 'Pascal\u2019s principle states that pressure applied to a confined fluid:', choices: ['Decreases with distance', 'Is transmitted equally in all directions', 'Only moves downward', 'Doubles at each fitting'], answer: 1, why: 'Equal pressure transmission through confined fluid is the foundation of hydraulics.' },
      { domain: 'Hydraulic and Pneumatic Systems', difficulty: 'medium', type: 'scenario', q: 'You must trace a suspected hydraulic leak in a pressurized line. The correct method is:', choices: ['Run a bare hand along the line', 'Use cardboard or paper and relieve pressure before opening anything', 'Tighten fittings while pressurized', 'Add dye and fly'], answer: 1, why: 'Pressurized fluid injection injuries are devastating — never use bare skin, and depressurize before work.' },
      { domain: 'Landing Gear Systems', difficulty: 'medium', q: 'In an oleo-pneumatic strut, the compressed gas and hydraulic fluid respectively:', choices: ['Meter rebound; absorb impact', 'Absorb impact; meter rebound', 'Lubricate; cool', 'Seal; pressurize'], answer: 1, why: 'Gas absorbs the landing impact; metered fluid controls the rebound stroke.' },
      { domain: 'Landing Gear Systems', difficulty: 'medium', q: 'The leading cause of aircraft tire failure is:', choices: ['Overinflation', 'Underinflation', 'Paint markings', 'Cold weather'], answer: 1, why: 'Underinflation causes sidewall flexing, heat buildup, and failure.' },
      { domain: 'Fuel Systems', difficulty: 'easy', q: 'Daily sump drains primarily check for:', choices: ['Fuel color preference', 'Water contamination', 'Fuel brand', 'Pressure'], answer: 1, why: 'Water settles to sump points and its detection before flight prevents engine failure.' },
      { domain: 'Fuel Systems', difficulty: 'medium', q: 'Bonding and grounding during fueling prevents:', choices: ['Fuel theft', 'Static electricity ignition', 'Overfilling', 'Contamination'], answer: 1, why: 'Equalizing electrical potential removes the static spark ignition path.' },
      { domain: 'Electrical Systems', difficulty: 'easy', q: 'Circuit breakers in aircraft systems protect against:', choices: ['Voltage spikes only', 'Overcurrent that could damage wiring', 'Static discharge', 'Battery discharge'], answer: 1, why: 'Protection devices open circuits on overload, preventing wire overheating and fire.' },
      { domain: 'Electrical Systems', difficulty: 'medium', q: 'Intermittent electrical faults most commonly trace to:', choices: ['Software', 'Chafed insulation, corrosion, or loose connections', 'Battery brand', 'Altitude'], answer: 1, why: 'Wiring degradation — chafe, corrosion, looseness — causes the classic intermittent fault pattern.' },
      { domain: 'Environmental Systems', difficulty: 'medium', q: 'Cabin pressure is primarily controlled by:', choices: ['The bleed air shutoff', 'The outflow valve metering air leaving the cabin', 'Window seals', 'The ram air scoop'], answer: 1, why: 'Supply is roughly constant; metering outflow sets cabin altitude.' },
      { domain: 'Environmental Systems', difficulty: 'easy', q: 'Why is oil or grease forbidden on oxygen system fittings?', choices: ['It degrades seals slowly', 'Oil can ignite violently in oxygen-rich environments', 'It freezes at altitude', 'It corrodes aluminum'], answer: 1, why: 'Hydrocarbons plus oxygen create spontaneous, violent ignition — absolute cleanliness rules apply.' },
      { domain: 'Ice and Rain Protection', difficulty: 'easy', q: 'Inflatable deice boots work by:', choices: ['Melting ice with heat', 'Mechanically cracking accumulated ice through inflation cycles', 'Repelling water chemically', 'Heating the wing spar'], answer: 1, why: 'Boot inflation flexes the surface to crack ice, which airflow then removes.' },
      { domain: 'Ice and Rain Protection', difficulty: 'medium', q: 'Pitot heat should be activated:', choices: ['Only after ice is visible', 'Before encountering visible moisture in icing temperatures', 'Only above 18,000 feet', 'During descent only'], answer: 1, why: 'Anti-ice logic prevents formation; waiting for visible ice risks instrument failure.' },
      { domain: 'Fire Protection Systems', difficulty: 'medium', q: 'Squib-fired fire extinguishing bottles must be handled as:', choices: ['Ordinary plumbing', 'Live ordnance per procedure', 'Disposable containers', 'Pressurized tires'], answer: 1, why: 'Squibs are explosive devices; mishandling causes serious injury.' },
      { domain: 'Fire Protection Systems', difficulty: 'easy', q: 'Discharge indicator discs on a fire bottle show:', choices: ['Bottle color', 'Whether the bottle has discharged', 'Cabin temperature', 'Fuel quantity'], answer: 1, why: 'Telltale discs eject or discolor when bottles discharge — a standard inspection item.' },
      { domain: 'Flight Controls and Rigging', difficulty: 'medium', q: 'To move a control surface up aerodynamically, a trim tab moves:', choices: ['Up as well', 'Down — opposite the desired surface movement', 'Sideways', 'Not at all'], answer: 1, why: 'Tabs deflect opposite to generate the hinge moment that drives the surface.' },
      { domain: 'Flight Controls and Rigging', difficulty: 'medium', q: 'Cable tension readings are corrected for:', choices: ['Aircraft weight', 'Temperature', 'Humidity', 'Fuel load'], answer: 1, why: 'Thermal expansion changes cable length and tension, so charts correct readings for temperature.' },
      { domain: 'Inspection Fundamentals', difficulty: 'easy', q: 'An annual inspection must be performed or supervised by:', choices: ['Any pilot', 'An appropriately authorized inspector', 'The aircraft owner alone', 'A student mechanic'], answer: 1, why: 'Annual inspections require specific authorization beyond standard mechanic privileges.' },
      { domain: 'Inspection Fundamentals', difficulty: 'hard', q: 'Airworthiness requires that the aircraft:', choices: ['Is freshly painted', 'Conforms to its type design and is in condition for safe operation', 'Has new tires', 'Is hangared indoors'], answer: 1, why: 'Both elements — conformance to type design and safe condition — define airworthiness.' },
    ],
  },
  // ======================================================================
  // 10. FAA Powerplant Knowledge Readiness
  // ======================================================================
  {
    id: 'track_powerplant',
    name: 'FAA Powerplant Knowledge Readiness',
    shortName: 'AMT Powerplant',
    category: 'aviation',
    weeks: 16,
    description:
      'Master aircraft engines and propellers — reciprocating and turbine theory, fuel and ignition, lubrication, and powerplant inspection and troubleshooting.',
    credentialFocus: 'Mapped to powerplant subject areas of aviation maintenance technician certification',
    schoolOverview:
      'A complete powerplant knowledge pathway covering reciprocating and turbine engines, propellers, and engine systems within a structured curriculum framework. Readiness reports document each student\u2019s exam preparation.',
    studentOverview:
      'Learn how aircraft engines make power and stay reliable — cylinders and combustion, fuel metering, ignition timing, lubrication, propellers, and turbine sections — with drills that build knowledge-test readiness.',
    prerequisites: 'Completion of aviation maintenance General knowledge coursework is strongly recommended.',
    alignmentNotes:
      'Modules and practice banks are mapped to powerplant subject areas of aviation maintenance technician certification within a structured curriculum framework. All content is original.',
    domains: [
      'Reciprocating Engine Theory',
      'Engine Construction and Components',
      'Fuel Metering Systems',
      'Ignition Systems',
      'Lubrication Systems',
      'Cooling Systems',
      'Induction and Exhaust',
      'Propellers',
      'Turbine Engine Theory',
      'Engine Instruments',
      'Engine Inspection and Troubleshooting',
      'Fire Protection and Engine Electrical',
    ],
    modules: [
      {
        title: 'Reciprocating Engine Fundamentals',
        description: 'Understand four-stroke operation and power production.',
        lessons: [
          {
            title: 'The Four-Stroke Cycle',
            minutes: 25,
            intro: [
              'Aircraft reciprocating engines operate on the Otto cycle: intake draws the fuel-air charge in, compression squeezes it, ignition drives the power stroke, and exhaust expels the results — four strokes over two crankshaft revolutions. Valve timing coordinates with piston position, and the power stroke alone drives everything else.',
              'Power output depends on displacement, compression ratio, and RPM, with manifold pressure and mixture defining the charge delivered. Horsepower ratings, brake-specific fuel consumption, and the relationship between manifold pressure and RPM are the operating vocabulary pilots and mechanics share.',
            ],
            sections: [
              {
                heading: 'The Four Strokes',
                steps: [
                  'Intake: charge drawn in.',
                  'Compression: charge squeezed.',
                  'Power: ignition drives the piston.',
                  'Exhaust: gases expelled.',
                ],
              },
              {
                heading: 'Power Vocabulary',
                bullets: [
                  'Manifold pressure indicates charge delivery.',
                  'Compression ratio shapes efficiency.',
                  'Mixture sets fuel-to-air proportion.',
                ],
              },
            ],
            keyPoints: [
              'Four strokes span two crankshaft revolutions.',
              'Only the power stroke produces work.',
              'Manifold pressure gauges charge delivery.',
              'Mixture control manages the fuel-air ratio.',
            ],
          },
          {
            title: 'Horsepower, Efficiency, and Operating Limits',
            minutes: 25,
            intro: [
              'Engine ratings describe different power measures: indicated horsepower is theoretical cylinder power, brake horsepower is usable shaft output after friction, and thrust horsepower counts what actually moves the aircraft. Mechanical and volumetric efficiency describe how well the engine converts and breathes — volumetric efficiency falls as altitude thins the air, which is why normally aspirated engines lose power with altitude.',
              'Operating limits protect engines: cylinder head temperature, oil temperature and pressure, manifold pressure, and RPM red lines. Detonation — uncontrolled explosive combustion — and preignition — ignition before the timed spark — destroy engines quickly and are prevented by correct fuel grade, proper mixture, and temperature management.',
            ],
            sections: [
              {
                heading: 'Power Measures',
                bullets: [
                  'Indicated: theoretical cylinder power.',
                  'Brake: shaft output after friction losses.',
                  'Thrust: propulsive output.',
                  'Volumetric efficiency falls with altitude.',
                ],
              },
              {
                heading: 'Destructive Combustion',
                bullets: [
                  'Detonation: explosive, uncontrolled burn.',
                  'Preignition: ignition before timed spark.',
                  'Prevention: correct fuel, mixture, temperatures.',
                ],
              },
            ],
            keyPoints: [
              'Brake horsepower is the usable shaft output.',
              'Altitude thins air and cuts power.',
              'Detonation and preignition destroy engines.',
              'Operating limits exist to be respected.',
            ],
            callout: {
              variant: 'exam',
              title: 'Exam focus',
              text: 'Detonation versus preignition definitions and causes appear constantly on powerplant knowledge tests.',
            },
          },
        ],
      },
      {
        title: 'Engine Construction and Components',
        description: 'Know the crankcase, cylinders, pistons, and valve train.',
        lessons: [
          {
            title: 'Crankshafts, Crankcases, and Cylinders',
            minutes: 30,
            intro: [
              'The crankcase is the engine\u2019s backbone, housing the crankshaft that converts piston reciprocation into rotation. Horizontally opposed cylinder arrangements dominate light aircraft for smoothness and profile, while radials and inlines serve other designs. Counterweights and dynamic dampers manage vibration, and bearing condition is assessed through oil analysis and inspection.',
              'Cylinders convert combustion pressure into motion: barrels of nitrided steel, heads with fins for cooling, and piston rings sealing compression and controlling oil. Cylinder compression testing — differential pressure testing against an orifice standard — quantifies ring and valve sealing and is a core inspection skill.',
            ],
            sections: [
              {
                heading: 'Arrangement Types',
                bullets: [
                  'Horizontally opposed: light aircraft standard.',
                  'Radial: cylinders around a central crank.',
                  'Inline: cylinders in a row.',
                ],
              },
              {
                heading: 'Cylinder Health Indicators',
                bullets: [
                  'Differential compression results.',
                  'Ring sealing against blow-by.',
                  'Valve seat condition.',
                  'Barrel wear patterns.',
                ],
              },
            ],
            keyPoints: [
              'Opposed arrangements dominate light aircraft.',
              'Rings seal compression and control oil.',
              'Differential testing quantifies cylinder health.',
              'Bearings and dampers manage vibration.',
            ],
          },
          {
            title: 'Valve Train and Timing',
            minutes: 25,
            intro: [
              'The valve train opens and closes intake and exhaust valves against powerful springs: camshaft lobes drive lifters, pushrods, and rocker arms in typical opposed engines, with clearances — valve lash — set to specification. Hydraulic lifters self-adjust within limits; solid lifters require periodic measurement and adjustment.',
              'Valve timing coordinates with ignition timing: valves open and close at defined crankshaft positions, and incorrect timing robs power or damages hardware. Sticking valves — from carbon or guide wear — show as morning roughness and compression loss, and their early detection prevents in-flight failure.',
            ],
            sections: [
              {
                heading: 'Valve Train Path',
                steps: [
                  'Camshaft lobe lifts the lifter.',
                  'Pushrod transfers motion.',
                  'Rocker arm pivots.',
                  'Valve opens against spring pressure.',
                ],
              },
              {
                heading: 'Warning Signs',
                bullets: [
                  'Cold-engine roughness clearing warm.',
                  'Compression loss isolated to a valve.',
                  'Excessive guide wear on inspection.',
                ],
              },
            ],
            keyPoints: [
              'Lobe to lifter to pushrod to rocker to valve.',
              'Valve lash is set to specification.',
              'Timing errors cost power or hardware.',
              'Sticking valves announce themselves early — listen.',
            ],
          },
        ],
      },
      {
        title: 'Fuel Metering Systems',
        description: 'Understand carburetors, fuel injection, and mixture management.',
        lessons: [
          {
            title: 'Carburetion and Carburetor Ice',
            minutes: 30,
            intro: [
              'Float carburetors meter fuel through venturi suction: incoming air accelerates through the venturi, its pressure drops, and fuel flows from the float bowl proportionally. Mixture control adjusts the ratio for altitude, and the float system maintains a constant fuel level supplying the discharge nozzle.',
              'Carburetor ice is the system\u2019s famous hazard: fuel evaporation and air expansion chill the venturi dramatically, and ice can form even in warm ambient conditions when humidity is high — blocking airflow and killing power. Carburetor heat routes warmed air to melt ice, applied at the first power-loss sign and monitored by RPM behavior.',
            ],
            sections: [
              {
                heading: 'Venturi Metering',
                bullets: [
                  'Air acceleration drops venturi pressure.',
                  'Low pressure draws fuel proportionally.',
                  'Float level stabilizes supply.',
                  'Mixture control compensates altitude.',
                ],
              },
              {
                heading: 'Carb Ice Facts',
                bullets: [
                  'Forms even in warm, humid conditions.',
                  'First sign: RPM or manifold pressure drop.',
                  'Carb heat melts ice — expect initial roughness.',
                ],
              },
            ],
            keyPoints: [
              'Venturi pressure drop meters the fuel.',
              'Carb ice forms without cold weather.',
              'Carb heat is the corrective.',
              'Altitude requires mixture leaning.',
            ],
            callout: {
              variant: 'safety',
              title: 'Safety',
              text: 'Carburetor ice can form at mild temperatures with high humidity — waiting for cold weather before suspecting it is the classic mistake.',
            },
          },
          {
            title: 'Fuel Injection and System Components',
            minutes: 25,
            intro: [
              'Fuel injection meters fuel directly to cylinders or intake ports without a venturi\u2019s ice-prone chill, delivering better distribution and economy. Continuous-flow systems tie fuel flow to throttle and mixture position; engine-driven pumps supply pressure with electric boost pumps for backup and priming.',
              'Fuel system maintenance covers screens and filters, pump condition, and leak integrity, plus the discipline of fuel grade verification — the wrong grade invites detonation. Vapor lock in hot conditions and fuel flow verification after maintenance are operational knowledge areas.',
            ],
            sections: [
              {
                heading: 'Injection Advantages',
                bullets: [
                  'No venturi icing vulnerability.',
                  'Better cylinder-to-cylinder distribution.',
                  'Improved fuel economy.',
                  'Continuous flow tied to controls.',
                ],
              },
              {
                heading: 'Maintenance Points',
                bullets: [
                  'Screens and filters serviced on schedule.',
                  'Boost pumps verified.',
                  'Correct fuel grade always confirmed.',
                  'Leak checks after any system work.',
                ],
              },
            ],
            keyPoints: [
              'Injection eliminates venturi ice risk.',
              'Distribution and economy improve.',
              'Fuel grade verification prevents detonation.',
              'Post-maintenance leak checks are mandatory.',
            ],
          },
        ],
      },
      {
        title: 'Ignition Systems',
        description: 'Master magnetos, spark plugs, and ignition timing.',
        lessons: [
          {
            title: 'Magneto Operation and Dual Ignition',
            minutes: 30,
            intro: [
              'Magnetos generate ignition sparks independently of the aircraft electrical system — engine rotation drives the magneto\u2019s magnet past coils, and breaker points or electronic modules time the discharge. This independence is the safety design: total electrical failure leaves the engine running. Dual magnetos and dual plugs per cylinder provide redundancy and better combustion.',
              'The magneto check — running briefly on each magneto alone and noting RPM drop within limits — verifies both systems before flight. P-lead grounding is the critical safety circuit: a broken P-lead means the magneto is live, and a propeller can fire from a touch with the switch off. Treat every propeller as live, always.',
            ],
            sections: [
              {
                heading: 'Why Dual Ignition',
                bullets: [
                  'Redundancy if one system fails.',
                  'Two flame fronts burn the charge faster.',
                  'Electrical independence of ignition.',
                ],
              },
              {
                heading: 'P-Lead Safety',
                bullets: [
                  'Grounding wire disables the magneto.',
                  'Broken P-lead means always live.',
                  'Treat every prop as ready to fire.',
                ],
              },
            ],
            keyPoints: [
              'Magnetos run without aircraft electricity.',
              'Dual systems add redundancy and efficiency.',
              'Mag checks verify both sides.',
              'Every propeller is treated as live.',
            ],
            callout: {
              variant: 'safety',
              title: 'Critical',
              text: 'A broken P-lead makes a magneto live with the switch "off" — hands never enter the propeller arc without verified grounding.',
            },
          },
          {
            title: 'Spark Plugs and Ignition Timing',
            minutes: 25,
            intro: [
              'Spark plugs convert coil voltage into the timed arc that ignites the charge, and their condition reads the engine: carbon fouling suggests rich running or weak spark, oil fouling points to ring or guide wear, and lead fouling comes from fuel additives. Plug rotation between positions, gap setting, and proper torque are scheduled maintenance items.',
              'Ignition timing sets the spark event before top dead center so combustion pressure peaks as the piston begins the power stroke — timing too advanced invites detonation, too late wastes power and overheats. Timing verification against the engine specification is a core powerplant skill performed with timing lights and precise procedure.',
            ],
            sections: [
              {
                heading: 'Plug Condition Reading',
                bullets: [
                  'Carbon: rich mixture or weak spark.',
                  'Oil: ring or guide wear.',
                  'Lead deposits: fuel additive fouling.',
                  'Normal: light tan, even deposits.',
                ],
              },
              {
                heading: 'Timing Effects',
                bullets: [
                  'Too advanced: detonation risk.',
                  'Too late: power loss, overheating.',
                  'Specification: spark before top dead center.',
                ],
              },
            ],
            keyPoints: [
              'Plug condition diagnoses engine health.',
              'Gap and torque follow specification.',
              'Timing peaks pressure at power stroke start.',
              'Advanced timing invites detonation.',
            ],
          },
        ],
      },
      {
        title: 'Lubrication and Cooling',
        description: 'Understand oil systems and engine temperature management.',
        lessons: [
          {
            title: 'Lubrication System Operation',
            minutes: 25,
            intro: [
              'The lubrication system reduces friction, cools internals, cleans, and seals: the pressure pump delivers oil through galleries to bearings and the valve train, and the scavenging system returns it. Dry-sump systems carry oil in a separate tank — standard on many aircraft engines — while wet-sump systems hold it in the crankcase.',
              'Oil pressure and temperature tell the engine\u2019s story: pressure within limits confirms pump and bearing health, and temperature tracks cooling adequacy. Oil analysis programs sample wear metals over time, catching bearing failure trends before symptoms. Oil grade and change intervals follow the manufacturer exactly.',
            ],
            sections: [
              {
                heading: 'System Functions',
                bullets: [
                  'Lubricate bearing surfaces.',
                  'Cool internal components.',
                  'Clean by carrying contaminants.',
                  'Seal ring-to-cylinder interfaces.',
                ],
              },
              {
                heading: 'Health Monitoring',
                bullets: [
                  'Oil pressure within limits.',
                  'Oil temperature trends.',
                  'Spectrometric oil analysis.',
                  'Consumption rates tracked.',
                ],
              },
            ],
            keyPoints: [
              'Oil lubricates, cools, cleans, and seals.',
              'Dry-sump tanks separate oil storage.',
              'Pressure and temperature are primary health gauges.',
              'Oil analysis predicts failures.',
            ],
          },
          {
            title: 'Engine Cooling Systems',
            minutes: 25,
            intro: [
              'Most light aircraft engines cool by air: cylinder fins radiate heat into airflow directed by baffles, and baffle integrity is critical — a missing baffle section creates a hot spot that ruins cylinders. Cowl flaps meter cooling airflow, opened for climb when airspeed is low and heat is high.',
              'Liquid-cooled designs circulate coolant through radiators with thermostatic control. Whatever the medium, the management logic is identical: temperature limits exist because aluminum softens and oil thins when hot, and shock cooling — abrupt throttle chops in descent — stresses cylinders through rapid contraction.',
            ],
            sections: [
              {
                heading: 'Air Cooling Elements',
                bullets: [
                  'Cylinder fins radiate heat.',
                  'Baffles direct airflow — integrity is critical.',
                  'Cowl flaps meter cooling air.',
                  'Climb heat demands open cowl flaps.',
                ],
              },
              {
                heading: 'Temperature Discipline',
                bullets: [
                  'Respect cylinder head temperature limits.',
                  'Avoid shock cooling in descents.',
                  'Track trends, not just limits.',
                ],
              },
            ],
            keyPoints: [
              'Baffles make air cooling work.',
              'Cowl flaps manage airflow by flight phase.',
              'Temperature limits protect metallurgy.',
              'Shock cooling stresses cylinders.',
            ],
            callout: {
              variant: 'exam',
              title: 'Exam focus',
              text: 'Baffle function and cowl flap logic are standard cooling-system test items.',
            },
          },
        ],
      },
      {
        title: 'Induction, Exhaust, and Supercharging',
        description: 'Follow the air path in and the exhaust path out.',
        lessons: [
          {
            title: 'Induction and Exhaust Systems',
            minutes: 25,
            intro: [
              'The induction system delivers filtered air to the cylinders through airboxes, ducts, and alternate air doors that open if the filter ices or blocks. Induction leaks lean the mixture downstream of metering — a roughness source mechanics hunt systematically. Exhaust systems route gases out while muffling noise, and exhaust failures are dangerous: cracks near the cabin risk carbon monoxide intrusion.',
              'Carbon monoxide is odorless, colorless, and disabling — exhaust heat exchangers that warm cabin air are inspected scrupulously because a crack delivers exhaust into the cabin. CO detectors and systematic exhaust inspection are the defense stack.',
            ],
            sections: [
              {
                heading: 'Induction Path',
                bullets: [
                  'Filter cleans incoming air.',
                  'Alternate air covers blockage.',
                  'Leaks lean the mixture.',
                ],
              },
              {
                heading: 'Exhaust Hazards',
                bullets: [
                  'Cracks near cabin heat exchangers.',
                  'Carbon monoxide: odorless and disabling.',
                  'CO detectors as backstop.',
                ],
              },
            ],
            keyPoints: [
              'Alternate air saves a blocked induction.',
              'Induction leaks create roughness.',
              'Exhaust cracks risk cabin carbon monoxide.',
              'Heat exchangers get scrupulous inspection.',
            ],
            callout: {
              variant: 'safety',
              title: 'Critical',
              text: 'Headache or drowsiness in flight with cabin heat on means suspect carbon monoxide — fresh air and immediate action.',
            },
          },
          {
            title: 'Superchargers and Turbochargers',
            minutes: 25,
            intro: [
              'Supercharging compresses induction air to restore sea-level pressure at altitude: gear-driven superchargers take power from the crankshaft, while turbochargers harvest exhaust energy to drive the compressor — free power from waste gas. Turbo-normalizing holds sea-level manifold pressure to a critical altitude, above which power falls naturally.',
              'Turbocharger systems demand respect for heat and limits: wastegates meter exhaust flow to control boost, overboost protection prevents excess manifold pressure, and cooldown procedures protect turbo bearings from oil coking. Controller malfunctions and wastegate behavior are core troubleshooting knowledge.',
            ],
            sections: [
              {
                heading: 'Boost Methods',
                bullets: [
                  'Supercharger: gear-driven compressor.',
                  'Turbocharger: exhaust-driven compressor.',
                  'Turbo-normalizing: sea-level pressure to critical altitude.',
                ],
              },
              {
                heading: 'System Discipline',
                bullets: [
                  'Wastegate controls boost.',
                  'Overboost protection limits manifold pressure.',
                  'Cooldown protects turbo bearings.',
                ],
              },
            ],
            keyPoints: [
              'Turbochargers run on exhaust energy.',
              'Critical altitude ends the normalized range.',
              'Wastegates meter boost.',
              'Cooldown procedures protect bearings.',
            ],
          },
        ],
      },
      {
        title: 'Propellers',
        description: 'Understand propeller theory, governors, and inspection.',
        lessons: [
          {
            title: 'Propeller Theory and Blade Forces',
            minutes: 25,
            intro: [
              'A propeller is a rotating wing: blade sections generate lift called thrust, and blade angle — the pitch — determines how much air each revolution bites. Fixed-pitch props compromise between climb and cruise; constant-speed props vary blade angle to hold selected RPM, delivering efficiency across flight regimes. Forces on blades include centrifugal loads, thrust bending, and aerodynamic twisting.',
              'Propeller condition is flight-critical: nicks concentrate stress and grow cracks, so blades are dressed per limits and inspected closely. Propeller strikes — any sudden stoppage or ground contact — mandate engine teardown inspection because shock loads transmit through the crankshaft.',
            ],
            sections: [
              {
                heading: 'Pitch Logic',
                bullets: [
                  'Fixed pitch: climb/cruise compromise.',
                  'Constant speed: variable angle, steady RPM.',
                  'Low pitch for takeoff; high pitch for cruise.',
                ],
              },
              {
                heading: 'Blade Integrity',
                bullets: [
                  'Nicks are dressed within limits.',
                  'Cracks mean rejection.',
                  'Strikes mandate teardown inspection.',
                ],
              },
            ],
            keyPoints: [
              'Propellers are rotating airfoils making thrust.',
              'Constant-speed systems hold selected RPM.',
              'Blade damage concentrates stress.',
              'Any prop strike means teardown inspection.',
            ],
          },
          {
            title: 'Governors, Feathering, and Ice Protection',
            minutes: 25,
            intro: [
              'Constant-speed governors meter oil pressure to the propeller hub to change blade angle, holding pilot-selected RPM as conditions change — throttle forward and the governor flattens pitch to absorb power without overspeed. Feathering drives blades edge-on to the airflow, minimizing drag from a dead engine on multiengine aircraft.',
              'Propeller ice protection uses electric boots or fluid slingers at the blade roots. Uncommanded RPM change, hunting, or failure to feather are governor and system faults with defined troubleshooting, and governor oil supply integrity — using engine oil — links prop control to lubrication health.',
            ],
            sections: [
              {
                heading: 'Governor Operation',
                bullets: [
                  'Oil pressure drives blade angle change.',
                  'Selected RPM held automatically.',
                  'Underspeed flattens pitch; overspeed coarsens it.',
                ],
              },
              {
                heading: 'Feathering Facts',
                bullets: [
                  'Blades edge-on minimize dead-engine drag.',
                  'Multiengine safety feature.',
                  'Failure to feather is a serious fault.',
                ],
              },
            ],
            keyPoints: [
              'Governors use engine oil pressure for control.',
              'RPM selection is held automatically.',
              'Feathering minimizes dead-engine drag.',
              'RPM anomalies trigger systematic troubleshooting.',
            ],
            callout: {
              variant: 'exam',
              title: 'Exam focus',
              text: 'Governor response to overspeed and underspeed conditions is a classic powerplant test pattern.',
            },
          },
        ],
      },
      {
        title: 'Turbine Engine Fundamentals',
        description: 'Learn compressor, combustor, and turbine sections.',
        lessons: [
          {
            title: 'Turbine Sections and Operation',
            minutes: 30,
            intro: [
              'Turbine engines work in a continuous cycle: the compressor squeezes incoming air, the combustor adds fuel and burns it continuously, and the turbine extracts energy to drive the compressor, with remaining exhaust energy producing thrust or driving a power turbine. Axial and centrifugal compressors serve different design points — axial for efficiency, centrifugal for ruggedness.',
              'Key parameters define operation: turbine inlet temperature limits protect metallurgy, compressor speed (N1, N2) gauges health and thrust, and pressure ratio describes performance. Turbine blades operate in gases beyond the metal\u2019s melting point, surviving through internal cooling airflow — blade cooling integrity is a borescope inspection priority.',
            ],
            sections: [
              {
                heading: 'Core Sections',
                steps: [
                  'Inlet conditions the air.',
                  'Compressor raises pressure.',
                  'Combustor adds continuous combustion.',
                  'Turbine extracts drive energy.',
                  'Exhaust produces thrust or drives power section.',
                ],
              },
              {
                heading: 'Operating Parameters',
                bullets: [
                  'Turbine inlet temperature: the protection limit.',
                  'N1/N2 speeds: health indicators.',
                  'Pressure ratio: performance measure.',
                ],
              },
            ],
            keyPoints: [
              'Continuous cycle: compress, burn, extract, exhaust.',
              'Axial compressors favor efficiency.',
              'Temperature limits protect turbine metallurgy.',
              'Blade cooling enables survival beyond melting points.',
            ],
          },
          {
            title: 'Turbine Fuel, Starting, and Monitoring',
            minutes: 25,
            intro: [
              'Turbine fuel control meters fuel to schedule acceleration without overtemperature or surge, with fuel nozzles atomizing delivery. Starts follow monitored sequences: starter drives the compressor, ignition lights at self-sustaining speed thresholds, and exhaust gas temperature is watched continuously — a hot start, where temperature runs away, demands immediate fuel cutoff.',
              'Compressor stall and surge — airflow breakdown through the compressor — announce with bangs and parameter swings, prevented by bleed valves and variable geometry. Foreign object damage is the turbine\u2019s constant enemy, making inlet inspection and FOD discipline daily concerns.',
            ],
            sections: [
              {
                heading: 'Start Monitoring',
                steps: [
                  'Starter drives compressor to light-off speed.',
                  'Ignition and fuel introduced.',
                  'Watch temperature rise within limits.',
                  'Abort on hot-start indication.',
                  'Confirm stable idle parameters.',
                ],
              },
              {
                heading: 'Threats',
                bullets: [
                  'Hot starts: temperature runaway.',
                  'Compressor stall: airflow breakdown.',
                  'FOD: the constant enemy.',
                ],
              },
            ],
            keyPoints: [
              'Fuel control schedules against overtemperature and surge.',
              'Hot starts demand immediate fuel cutoff.',
              'Stall prevention uses bleed and geometry.',
              'FOD discipline protects everything downstream.',
            ],
            callout: {
              variant: 'safety',
              title: 'Safety',
              text: 'Turbine inlet danger zones extend well in front of the intake at power — respect published hazard areas around running engines.',
            },
          },
        ],
      },
      {
        title: 'Engine Instruments and Inspection',
        description: 'Read engine instruments and apply inspection and troubleshooting method.',
        lessons: [
          {
            title: 'Engine Instrument Systems',
            minutes: 25,
            intro: [
              'Engine instruments translate mechanical and thermal reality into cockpit information: tachometers read RPM, manifold pressure gauges read induction pressure, cylinder head and exhaust gas temperatures track combustion, and oil pressure and temperature complete the picture. Exhaust gas temperature and its lean-of-peak or rich-of-peak relationships define mixture management.',
              'Instrument accuracy matters because limits are absolute: a misreading temperature gauge invites limit violations. Marking conventions — green arcs, red lines — encode operating ranges on gauges, and any indication beyond limits triggers investigation, not hope.',
            ],
            sections: [
              {
                heading: 'Core Instruments',
                bullets: [
                  'Tachometer: RPM.',
                  'Manifold pressure: charge delivery.',
                  'CHT/EGT: combustion health.',
                  'Oil pressure and temperature.',
                ],
              },
              {
                heading: 'Indication Discipline',
                bullets: [
                  'Green arc: normal range.',
                  'Red line: absolute limit.',
                  'Out-of-limit indications get investigated.',
                ],
              },
            ],
            keyPoints: [
              'Each instrument maps to an engine reality.',
              'EGT relationships define mixture technique.',
              'Markings encode operating ranges.',
              'Beyond-limits readings demand investigation.',
            ],
          },
          {
            title: 'Powerplant Inspection and Troubleshooting Method',
            minutes: 30,
            intro: [
              'Engine inspection follows organized coverage: compression testing quantifies cylinder sealing, borescope inspection views valves and barrel walls, oil screens and filters reveal metal, and ignition timing verification confirms the combustion schedule. Run-up checks after maintenance verify magneto function, propeller operation, and parameter normality before return to service.',
              'Troubleshooting is disciplined elimination: define the discrepancy precisely, consult the manual\u2019s logic, and test before replacing. Rough running isolates between ignition, induction, and fuel causes; low power separates compression from metering issues. Documentation of findings and corrective actions closes the airworthiness loop.',
            ],
            sections: [
              {
                heading: 'Inspection Toolkit',
                bullets: [
                  'Differential compression testing.',
                  'Borescope inspection.',
                  'Screen and filter metal checks.',
                  'Timing verification.',
                ],
              },
              {
                heading: 'Troubleshooting Sequence',
                steps: [
                  'Define the discrepancy precisely.',
                  'Study the system logic.',
                  'Isolate by test, not by guess.',
                  'Repair and verify by run-up.',
                  'Document findings and actions.',
                ],
              },
            ],
            keyPoints: [
              'Compression, borescope, and metal checks quantify health.',
              'Post-maintenance run-ups verify before flight.',
              'Test before replacing.',
              'Documentation closes the loop.',
            ],
            callout: {
              variant: 'exam',
              title: 'Exam focus',
              text: 'Know what differential compression testing measures and what oil-screen metal indicates — core inspection items.',
            },
          },
        ],
      },
      {
        title: 'Engine Fire Protection and Starting Systems',
        description: 'Learn engine fire detection, extinguishing, and starting system maintenance.',
        lessons: [
          {
            title: 'Engine Fire Protection Systems',
            minutes: 25,
            intro: [
              'Engine compartments concentrate fuel, oil, and heat, so fire protection is engineered in layers: firewalls isolate the compartment, detection loops or spot sensors signal overheat and flame, and high-rate-discharge extinguishing bottles flood the zone on crew command. Detection systems distinguish fire from overheat conditions through temperature-rate logic.',
              'Maintenance respects the system\u2019s lethality: extinguishing squibs are live ordnance handled per procedure with safety pins installed during ground work, bottle discharge indicators are inspected items, and detection-loop continuity testing follows the manual. A chafed fuel line is not a watch item — it is a fire waiting for a date.',
            ],
            sections: [
              {
                heading: 'Protection Layers',
                bullets: [
                  'Firewalls isolate the compartment.',
                  'Loops or spot sensors detect fire.',
                  'HRD bottles flood the zone.',
                  'Rate logic separates fire from overheat.',
                ],
              },
              {
                heading: 'Maintenance Discipline',
                bullets: [
                  'Squibs treated as live ordnance.',
                  'Safety pins installed for ground work.',
                  'Discharge indicators checked on inspection.',
                  'Fuel and oil line chafing corrected immediately.',
                ],
              },
            ],
            keyPoints: [
              'Fire protection is layered: isolate, detect, extinguish.',
              'Squibs demand ordnance handling.',
              'Detection loops are tested to the manual.',
              'Chafed fuel lines are immediate-action items.',
            ],
            callout: {
              variant: 'safety',
              title: 'Critical',
              text: 'Always verify squib safety pins and follow the manual\u2019s sequence before working in an engine compartment — accidental discharge is a fatal hazard.',
            },
          },
          {
            title: 'Starting Systems and Engine Electrical',
            minutes: 25,
            intro: [
              'Starting systems crank the engine against compression: starters draw enormous current through heavy-gauge cable, contactors switch that load, and starter adapters engage the crankshaft. Slow cranking diagnoses systematically — battery state, cable and connection resistance, contactor condition — before condemning the starter itself.',
              'Engine electrical health shows in the details: corroded grounds cause phantom faults, worn starter brushes show as declining cranking speed, and adherence to duty-cycle limits prevents starter burnout — starters are sprint devices, not marathon runners. Post-start generator or alternator output verification confirms the charging system picked up the load.',
            ],
            sections: [
              {
                heading: 'Slow-Crank Diagnostic Path',
                steps: [
                  'Verify battery charge and condition.',
                  'Check cable and connection resistance.',
                  'Test contactor operation.',
                  'Evaluate the starter and adapter.',
                  'Verify charging after start.',
                ],
              },
              {
                heading: 'Duty Cycle Discipline',
                bullets: [
                  'Starters have strict crank and cooldown limits.',
                  'Exceeding duty cycles burns starters out.',
                  'Grounds and connections cause phantom faults.',
                ],
              },
            ],
            keyPoints: [
              'Starters draw enormous current through heavy cable.',
              'Slow cranking is diagnosed systematically.',
              'Duty-cycle limits prevent starter damage.',
              'Post-start charging verification completes the check.',
            ],
          },
        ],
      },
    ],
    questions: [
      { domain: 'Reciprocating Engine Theory', difficulty: 'easy', q: 'The four strokes of the reciprocating engine cycle are:', choices: ['Intake, ignition, exhaust, compression', 'Intake, compression, power, exhaust', 'Compression, intake, exhaust, power', 'Power, exhaust, intake, compression'], answer: 1, why: 'The Otto cycle runs intake, compression, power, exhaust across two crankshaft revolutions.' },
      { domain: 'Reciprocating Engine Theory', difficulty: 'medium', q: 'Detonation is best described as:', choices: ['Ignition before the timed spark', 'Uncontrolled explosive combustion of the charge', 'A slow burn', 'Normal combustion at high power'], answer: 1, why: 'Detonation is explosive rather than progressive burning; preignition is early ignition — distinct phenomena.' },
      { domain: 'Engine Construction and Components', difficulty: 'medium', q: 'Differential compression testing primarily measures:', choices: ['Oil pressure', 'Cylinder sealing through rings and valves', 'Fuel flow', 'Propeller efficiency'], answer: 1, why: 'Comparing held pressure against the orifice standard quantifies ring and valve sealing.' },
      { domain: 'Engine Construction and Components', difficulty: 'easy', q: 'Which cylinder arrangement dominates light aircraft engines?', choices: ['Radial', 'Horizontally opposed', 'V-12', 'Rotary'], answer: 1, why: 'Horizontally opposed layouts offer smoothness and a slim profile for light aircraft.' },
      { domain: 'Fuel Metering Systems', difficulty: 'medium', q: 'Carburetor ice can form:', choices: ['Only below freezing', 'Even in warm ambient temperatures with high humidity', 'Only at night', 'Only with the mixture rich'], answer: 1, why: 'Fuel evaporation and venturi expansion chill the throat dramatically — warmth is no protection.' },
      { domain: 'Fuel Metering Systems', difficulty: 'easy', q: 'A first indication of carburetor ice is typically:', choices: ['Increased RPM', 'A drop in RPM or manifold pressure', 'Higher oil pressure', 'Faster airspeed'], answer: 1, why: 'Ice restricts airflow, reducing power — the classic first sign.' },
      { domain: 'Ignition Systems', difficulty: 'medium', q: 'Magnetos are valuable because they:', choices: ['Charge the battery', 'Generate ignition sparks independently of the aircraft electrical system', 'Cool the engine', 'Meter fuel'], answer: 1, why: 'Ignition independent of aircraft power keeps the engine running through total electrical failure.' },
      { domain: 'Ignition Systems', difficulty: 'medium', type: 'scenario', q: 'During maintenance, an engine fires when the propeller is moved with the switch off. The most likely cause is:', choices: ['A fouled spark plug', 'A broken P-lead leaving a magneto ungrounded', 'Low oil', 'An open cowl flap'], answer: 1, why: 'The P-lead grounds the magneto; a break leaves it live regardless of switch position.' },
      { domain: 'Lubrication Systems', difficulty: 'easy', q: 'Besides lubrication, engine oil also:', choices: ['Only cools', 'Cools, cleans, and seals', 'Meters fuel', 'Generates spark'], answer: 1, why: 'The oil system lubricates, cools, cleans, and seals — four functions.' },
      { domain: 'Lubrication Systems', difficulty: 'medium', q: 'Spectrometric oil analysis programs detect:', choices: ['Fuel grades', 'Wear metal trends predicting component failure', 'Paint quality', 'Propeller balance'], answer: 1, why: 'Trending wear metals in oil catches bearing and component degradation before symptoms.' },
      { domain: 'Cooling Systems', difficulty: 'medium', q: 'Baffle integrity matters because:', choices: ['Baffles reduce noise', 'Missing baffle sections create hot spots that damage cylinders', 'Baffles add thrust', 'Baffles filter air'], answer: 1, why: 'Directed airflow is what air cooling is; leaks in baffling starve cylinders of cooling.' },
      { domain: 'Cooling Systems', difficulty: 'easy', q: 'Cowl flaps are generally opened during:', choices: ['Cruise', 'Climb, when heat is high and airflow low', 'Descent', 'Parking'], answer: 1, why: 'Climb combines high power with low cooling airflow — open cowl flaps meter more cooling air.' },
      { domain: 'Induction and Exhaust', difficulty: 'medium', q: 'A crack in an exhaust heat exchanger is dangerous because it can:', choices: ['Increase cabin noise', 'Introduce carbon monoxide into cabin heat', 'Reduce oil pressure', 'Ice the wings'], answer: 1, why: 'Cabin heat draws air over the exchanger; cracks deliver odorless, disabling carbon monoxide.' },
      { domain: 'Induction and Exhaust', difficulty: 'easy', q: 'The alternate air door opens when:', choices: ['The engine overheats', 'The primary induction filter or path is blocked', 'The propeller is feathered', 'Cabin pressure drops'], answer: 1, why: 'Alternate air preserves induction flow when the primary path ices or blocks.' },
      { domain: 'Propellers', difficulty: 'medium', q: 'A constant-speed propeller holds selected RPM by:', choices: ['Varying throttle position', 'Varying blade angle through governor-metered oil pressure', 'Changing gear ratios', 'Heating the hub'], answer: 1, why: 'The governor meters oil to change pitch, holding RPM as conditions change.' },
      { domain: 'Propellers', difficulty: 'medium', q: 'Any propeller strike or sudden stoppage requires:', choices: ['Repainting the blades', 'Engine teardown inspection', 'A new governor only', 'Nothing if blades look fine'], answer: 1, why: 'Strike shock loads transmit through the crankshaft — teardown inspection is mandatory.' },
      { domain: 'Turbine Engine Theory', difficulty: 'easy', q: 'The correct order of turbine engine sections is:', choices: ['Combustor, compressor, turbine', 'Compressor, combustor, turbine', 'Turbine, compressor, combustor', 'Exhaust, compressor, inlet'], answer: 1, why: 'Air is compressed, then burned, then expanded through the turbine.' },
      { domain: 'Turbine Engine Theory', difficulty: 'hard', q: 'Turbine blades survive gas temperatures beyond their melting point because of:', choices: ['Thicker metal', 'Internal cooling airflow', 'Lower RPM', 'Ceramic paint alone'], answer: 1, why: 'Film and internal cooling keep blade metal below failure temperature despite hotter gas.' },
      { domain: 'Engine Instruments', difficulty: 'easy', q: 'A red line on an engine gauge marks:', choices: ['The best economy setting', 'An absolute operating limit', 'Normal cruise', 'Idle speed'], answer: 1, why: 'Red lines are absolute limits; green arcs mark normal ranges.' },
      { domain: 'Engine Instruments', difficulty: 'medium', q: 'Exhaust gas temperature relationships primarily inform:', choices: ['Tire pressure', 'Mixture management', 'Cabin altitude', 'Fuel quantity'], answer: 1, why: 'EGT peak and lean/rich-of-peak relationships define mixture technique.' },
      { domain: 'Engine Inspection and Troubleshooting', difficulty: 'medium', q: 'Metal found on an oil screen indicates:', choices: ['Normal operation always', 'Internal wear requiring investigation', 'Bad fuel', 'Filter failure only'], answer: 1, why: 'Screen metal is an internal-wear alarm — identify the source before further operation.' },
      { domain: 'Engine Inspection and Troubleshooting', difficulty: 'medium', q: 'Sound troubleshooting practice begins with:', choices: ['Replacing the most expensive part', 'Defining the discrepancy precisely and following system logic', 'Grounding the aircraft indefinitely', 'Adjusting everything at once'], answer: 1, why: 'Precise definition plus systematic isolation beats parts-swapping every time.' },
      { domain: 'Fire Protection and Engine Electrical', difficulty: 'easy', q: 'Engine fire detection systems commonly use:', choices: ['Smoke detectors in the cabin', 'Continuous-loop or spot heat detectors', 'Fuel flow meters', 'Oil pressure switches'], answer: 1, why: 'Zone-mounted heat sensing loops or spot detectors signal engine compartment fires.' },
      { domain: 'Fire Protection and Engine Electrical', difficulty: 'medium', q: 'Starter and ignition circuits in reciprocating engines are protected primarily by:', choices: ['P-lead grounding discipline and circuit protection devices', 'Paint', 'Propeller position', 'Cowl flaps'], answer: 0, why: 'Circuit breakers protect wiring, and P-lead integrity prevents unintended live magnetos.' },
    ],
  },

  // ======================================================================
  // 11. Aircraft Electronics Technician Readiness
  // ======================================================================
  {
    id: 'track_avionics',
    name: 'Aircraft Electronics Technician Readiness',
    shortName: 'Avionics Tech',
    category: 'aviation',
    weeks: 14,
    description:
      'Enter the avionics shop with confidence — DC/AC circuits, semiconductors, wiring practice, communication and navigation systems, and instrument fundamentals.',
    credentialFocus: 'Mapped to aircraft electronics/avionics fundamentals',
    schoolOverview:
      'An avionics fundamentals pathway spanning circuits, wiring standards, and aircraft radio and instrument systems, with documented competency evidence per student. Reports support placement into avionics programs and shops.',
    studentOverview:
      'Learn the electronics that modern aircraft run on — circuits and components, wiring and connectors, radios and navigation, and instrument systems — with drills that build bench-ready knowledge.',
    prerequisites: 'None. Basic algebra is helpful for circuit calculations.',
    alignmentNotes:
      'Modules and practice banks are mapped to aircraft electronics/avionics fundamentals: circuits, wiring practices, communication and navigation systems, and instruments. All content is original.',
    domains: [
      'DC Circuits',
      'AC Circuits',
      'Semiconductors and Digital Basics',
      'Wiring and Connectors',
      'Test Equipment',
      'Communication Systems',
      'Navigation Systems',
      'Instrument Systems',
      'Autopilot and Flight Management Basics',
      'Antennas and Transmission Lines',
      'Documentation and Regulations',
    ],
    modules: [
      {
        title: 'DC Circuit Fundamentals',
        description: 'Master voltage, current, resistance, and Ohm\u2019s law.',
        lessons: [
          {
            title: 'Voltage, Current, Resistance, and Power',
            minutes: 25,
            intro: [
              'Electrical fundamentals start with three quantities: voltage is electrical pressure, current is flow rate in amperes, and resistance opposes flow in ohms. Ohm\u2019s law binds them — voltage equals current times resistance — and any two values determine the third. Power, the rate of energy use, equals voltage times current.',
              'Sources and loads define circuits: batteries and generators supply; lights, motors, and electronics consume. A complete circuit requires an unbroken path — opens stop current entirely, while shorts create unintended low-resistance paths that draw destructive current. These two fault types dominate electrical troubleshooting.',
            ],
            sections: [
              {
                heading: 'Ohm\u2019s Law in Action',
                bullets: [
                  'V = I × R: voltage equals current times resistance.',
                  'P = V × I: power equals voltage times current.',
                  'Any two known values solve the third.',
                  'Example: 12 V across 4 Ω draws 3 A.',
                ],
              },
              {
                heading: 'The Two Classic Faults',
                bullets: [
                  'Open: broken path, zero current.',
                  'Short: unintended path, excessive current.',
                  'Protection devices guard against shorts.',
                ],
              },
            ],
            keyPoints: [
              'Voltage pushes, current flows, resistance opposes.',
              'Ohm\u2019s law solves any two-of-three problem.',
              'Power equals voltage times current.',
              'Opens and shorts dominate fault finding.',
            ],
            callout: {
              variant: 'exam',
              title: 'Exam focus',
              text: 'Ohm\u2019s law calculations appear in every electronics knowledge assessment — practice until automatic.',
            },
          },
          {
            title: 'Series, Parallel, and Combination Circuits',
            minutes: 30,
            intro: [
              'Series circuits carry one current through every component: resistances add directly, voltage divides across them, and a single open kills the whole string. Parallel circuits share voltage across branches: currents divide, total resistance falls below the smallest branch, and one branch failing leaves others running — which is why aircraft systems wire in parallel.',
              'Combination circuits reduce stepwise: collapse obvious series or parallel groups, solve, and expand back. These patterns underpin real avionics work — voltage dividers set reference levels, and load calculations size circuit protection.',
            ],
            sections: [
              {
                heading: 'Series vs. Parallel',
                bullets: [
                  'Series: same current; resistances add.',
                  'Parallel: same voltage; currents divide.',
                  'Parallel total resistance is less than the smallest branch.',
                  'Aircraft loads wire in parallel for independence.',
                ],
              },
              {
                heading: 'Combination Solving Steps',
                steps: [
                  'Identify pure series or parallel groups.',
                  'Reduce each group to an equivalent.',
                  'Solve the simplified circuit.',
                  'Expand results back to branches.',
                ],
              },
            ],
            keyPoints: [
              'Series adds resistance; parallel adds paths.',
              'One open kills a series string only.',
              'Parallel wiring keeps systems independent.',
              'Reduce, solve, expand — the combination method.',
            ],
          },
        ],
      },
      {
        title: 'AC Circuits and Aircraft Power',
        description: 'Understand alternating current, frequency, and aircraft power systems.',
        lessons: [
          {
            title: 'AC Fundamentals',
            minutes: 25,
            intro: [
              'Alternating current reverses direction cyclically, described by frequency in hertz, and measured by RMS — root mean square — values that equate AC heating effect to DC equivalents. Aircraft AC systems commonly run at 400 hertz, far above household frequency, because higher frequency allows lighter transformers and motors.',
              'Inductors and capacitors react to AC frequency rather than simply resisting: inductive reactance rises with frequency, capacitive reactance falls, and the interplay creates impedance, phase shifts, and resonance. Transformers convert AC voltages through winding ratios — the reason AC dominates power distribution.',
            ],
            sections: [
              {
                heading: 'AC Vocabulary',
                bullets: [
                  'Frequency: cycles per second, in hertz.',
                  'RMS: DC-equivalent effective value.',
                  '400 Hz: common aircraft AC frequency.',
                  'Peak to RMS: multiply by about 0.707.',
                ],
              },
              {
                heading: 'Reactance Rules',
                bullets: [
                  'Inductors: reactance rises with frequency.',
                  'Capacitors: reactance falls with frequency.',
                  'Impedance combines resistance and reactance.',
                ],
              },
            ],
            keyPoints: [
              'RMS equates AC to DC heating effect.',
              'Aircraft AC runs at 400 Hz for weight savings.',
              'Reactance is frequency-dependent opposition.',
              'Transformers need AC — distribution\u2019s foundation.',
            ],
          },
          {
            title: 'Aircraft Power Generation and Distribution',
            minutes: 25,
            intro: [
              'Aircraft electrical power starts at engine-driven generators or alternators feeding buses — distribution hubs that organize power by priority: essential buses shed last in emergencies, and battery systems bridge generation gaps. Light aircraft run 14- or 28-volt DC; transport aircraft generate 115-volt AC with transformer-rectifier units producing DC.',
              'Protection and control complete the picture: circuit breakers guard wiring, current limiters protect feeders, and reverse-current protection keeps batteries from motoring generators. Reading distribution diagrams — which bus feeds which system — is daily avionics literacy.',
            ],
            sections: [
              {
                heading: 'Architecture Basics',
                bullets: [
                  'Generators feed buses; buses feed systems.',
                  'Essential buses shed last.',
                  'Batteries bridge generation loss.',
                  'TRUs convert AC to DC.',
                ],
              },
              {
                heading: 'Protection Devices',
                bullets: [
                  'Circuit breakers: resettable branch protection.',
                  'Current limiters: feeder protection.',
                  'Reverse-current cutouts protect generators.',
                ],
              },
            ],
            keyPoints: [
              'Buses organize distribution by priority.',
              '28 V DC and 115 V AC are the common levels.',
              'Essential buses lose power last.',
              'Diagram literacy is shop literacy.',
            ],
          },
        ],
      },
      {
        title: 'Semiconductors and Digital Fundamentals',
        description: 'Work with diodes, transistors, and basic logic.',
        lessons: [
          {
            title: 'Diodes and Transistors',
            minutes: 25,
            intro: [
              'Semiconductors control current with engineered precision. Diodes pass current one way only — rectification converts AC to DC, and zener diodes regulate voltage by conducting in reverse at a designed threshold. LEDs are diodes that emit light, now standard in aircraft lighting and indicators.',
              'Transistors amplify and switch: a small base or gate signal controls a large current, making them the atom of all modern electronics. Solid-state replacement of relays reduces weight and failure modes, and electrostatic-sensitive devices demand wrist-strap discipline at the bench — a static zap invisible to you kills a chip.',
            ],
            sections: [
              {
                heading: 'Diode Applications',
                bullets: [
                  'Rectification: AC to DC.',
                  'Zener regulation: stable reference voltage.',
                  'LEDs: efficient indication and lighting.',
                ],
              },
              {
                heading: 'Handling Discipline',
                bullets: [
                  'Transistors switch and amplify.',
                  'ESD wrist straps at the bench.',
                  'Static damage is invisible and cumulative.',
                ],
              },
            ],
            keyPoints: [
              'Diodes conduct one way; zeners regulate.',
              'Transistors are the control atom of electronics.',
              'Solid-state switching replaces relays.',
              'ESD discipline is bench law.',
            ],
            callout: {
              variant: 'safety',
              title: 'Practice rule',
              text: 'Always wear the grounded wrist strap when handling circuit cards — ESD damage passes inspection and fails in service.',
            },
          },
          {
            title: 'Digital Logic and Data Buses',
            minutes: 25,
            intro: [
              'Digital electronics reduce signals to two states, and logic gates combine them: AND requires all inputs true, OR any, NOT inverts, and combinations build every computation. Truth tables define gate behavior and are the decoding tool for digital documentation.',
              'Modern avionics communicate over standardized data buses rather than discrete wires: digital data buses let one pair of wires carry thousands of parameters between systems, with defined protocols managing traffic. Understanding bus architecture — one transmitter, multiple receivers, message labels — is the entry ticket to contemporary avionics troubleshooting.',
            ],
            sections: [
              {
                heading: 'Gate Basics',
                bullets: [
                  'AND: all inputs true for output true.',
                  'OR: any input true suffices.',
                  'NOT: inverts.',
                  'Truth tables define every gate.',
                ],
              },
              {
                heading: 'Data Bus Concepts',
                bullets: [
                  'One bus replaces thousands of wires.',
                  'Protocols organize message traffic.',
                  'Labels identify data on the wire.',
                ],
              },
            ],
            keyPoints: [
              'Two states power all digital logic.',
              'Truth tables decode gate behavior.',
              'Data buses replaced discrete wiring.',
              'Bus architecture literacy enables modern troubleshooting.',
            ],
          },
        ],
      },
      {
        title: 'Wiring Practices and Connectors',
        description: 'Apply aircraft wiring standards, stripping, crimping, and connector practice.',
        lessons: [
          {
            title: 'Wire Selection, Routing, and Protection',
            minutes: 30,
            intro: [
              'Aircraft wire is specified by gauge, insulation type, and temperature rating, with wire identification codes printed along its length carrying circuit information. Routing follows strict rules: separation from flight control cables, clamping intervals, drip loops below connectors, and bend radius limits that protect conductors.',
              'Chafing is the chronic failure mode — wire against structure vibrates through insulation over time, so protection through grommets and conduit at penetrations is inspected constantly. Wire bundles are laced or tied to standard, never to control cables, and slack allows connector service without strain.',
            ],
            sections: [
              {
                heading: 'Routing Rules',
                bullets: [
                  'Separation from control cables.',
                  'Clamping at specified intervals.',
                  'Drip loops below connectors.',
                  'Bend radius limits respected.',
                ],
              },
              {
                heading: 'Chafe Protection',
                bullets: [
                  'Grommets at bulkhead penetrations.',
                  'Conduit in high-wear zones.',
                  'Vibration makes protection mandatory.',
                  'Inspection targets bundle contact points.',
                ],
              },
            ],
            keyPoints: [
              'Wire codes carry circuit identity.',
              'Separation from controls is absolute.',
              'Chafing is the chronic killer.',
              'Service loops prevent connector strain.',
            ],
          },
          {
            title: 'Terminations: Stripping, Crimping, and Connectors',
            minutes: 30,
            intro: [
              'Terminations make or break reliability. Stripping removes insulation without nicking the conductor — a nick becomes a fatigue crack — and crimping with the correct calibrated tool forms a gas-tight mechanical and electrical joint superior to solder for aircraft vibration environments. Pull testing verifies crimp quality.',
              'Connector practice includes correct pin insertion and extraction with proper tools, backshell hardware torqued and secured, and cannon-style connectors fully seated and locked. Cannon plug orientation, keying, and environmental sealing are matched to the installation — wrong practices produce the intermittent faults that haunt shops.',
            ],
            sections: [
              {
                heading: 'Crimp Quality Rules',
                bullets: [
                  'No nicked conductors — ever.',
                  'Correct tool and die for the terminal.',
                  'Gas-tight crimps resist vibration.',
                  'Pull testing verifies the joint.',
                ],
              },
              {
                heading: 'Connector Discipline',
                steps: [
                  'Verify pin and socket condition.',
                  'Insert with the proper tool.',
                  'Seat and lock the connector fully.',
                  'Torque and secure backshell hardware.',
                ],
              },
            ],
            keyPoints: [
              'Nicked wire becomes a future break.',
              'Calibrated crimp tools make reliable joints.',
              'Proper tools insert and extract pins.',
              'Intermittent faults usually trace to terminations.',
            ],
            callout: {
              variant: 'exam',
              title: 'Exam focus',
              text: 'Crimp-versus-solder superiority for vibration environments and nick prohibitions are standard test items.',
            },
          },
        ],
      },
      {
        title: 'Test Equipment and Measurement',
        description: 'Use multimeters and measurement technique correctly.',
        lessons: [
          {
            title: 'Multimeter Mastery',
            minutes: 25,
            intro: [
              'The multimeter is the avionics technician\u2019s primary instrument: voltage measured in parallel across a circuit, current in series through it, and resistance only on de-energized circuits. Range selection starts high and works down to protect the meter, and probe discipline — one hand when possible near live circuits — is safety practice.',
              'Continuity testing with the beeper speeds wire tracing, and diode-test functions check semiconductor junctions. Meter limitations matter: a digital meter\u2019s high impedance can read ghost voltages through capacitive coupling, so unexpected readings are verified by method, not accepted at face value.',
            ],
            sections: [
              {
                heading: 'Measurement Methods',
                bullets: [
                  'Voltage: probes in parallel, circuit live.',
                  'Current: meter in series, circuit broken.',
                  'Resistance: circuit de-energized only.',
                  'Start on the highest range.',
                ],
              },
              {
                heading: 'Reality Checks',
                bullets: [
                  'Ghost voltages from capacitive coupling.',
                  'Verify unexpected readings by method change.',
                  'Continuity beepers speed wire tracing.',
                ],
              },
            ],
            keyPoints: [
              'Parallel for volts, series for amps, dead circuit for ohms.',
              'Start high on range selection.',
              'Continuity and diode functions accelerate work.',
              'Unexpected readings get verified, not believed.',
            ],
            callout: {
              variant: 'safety',
              title: 'Safety',
              text: 'Measuring resistance on a live circuit damages meters and misleads — de-energize first, always.',
            },
          },
          {
            title: 'Reading Schematics and Signal Tracing',
            minutes: 25,
            intro: [
              'Schematics are the system\u2019s logic map: standard symbols for components, wire numbers matching the aircraft, and connector callouts locating every junction. Tracing a fault follows the signal path — power in, control, output — testing at accessible points that split the suspect circuit in half each time.',
              'Half-split troubleshooting is the efficient discipline: test at the midpoint, learn which half holds the fault, split again. Random probing wastes hours; schematic-guided halving finds opens, shorts, and failed components methodically. Documentation of test points and readings builds the record.',
            ],
            sections: [
              {
                heading: 'Schematic Literacy',
                bullets: [
                  'Standard component symbols.',
                  'Wire numbers match the aircraft.',
                  'Connector callouts locate junctions.',
                  'Grounds and power rails identified first.',
                ],
              },
              {
                heading: 'Half-Split Method',
                steps: [
                  'Identify the fault symptom precisely.',
                  'Test at the circuit midpoint.',
                  'Discard the good half.',
                  'Split the suspect half again.',
                  'Confirm the fix and record readings.',
                ],
              },
            ],
            keyPoints: [
              'Schematics map logic, not geography.',
              'Wire numbers tie drawing to aircraft.',
              'Half-split halves the search each step.',
              'Test records document the diagnosis.',
            ],
          },
        ],
      },
      {
        title: 'Communication and Navigation Systems',
        description: 'Understand VHF comm, transponders, and navigation receivers.',
        lessons: [
          {
            title: 'VHF Communication and Transponders',
            minutes: 25,
            intro: [
              'VHF communication radios operate in the aviation band with amplitude modulation, line-of-sight range, and defined spacing between channels. Antenna placement and coax integrity dominate real-world radio performance — most "bad radio" complaints trace to antenna and cabling faults rather than the radio itself.',
              'Transponders reply to radar interrogation with coded identification, and altitude-reporting modes add encoded altitude. Emergency and lost-communication codes are operationally significant, and transponder checks follow regulatory intervals. ADS-B out equipment broadcasts position automatically — the modern surveillance baseline.',
            ],
            sections: [
              {
                heading: 'VHF Realities',
                bullets: [
                  'Line-of-sight range limits.',
                  'AM modulation in the aviation band.',
                  'Antenna and coax dominate performance.',
                ],
              },
              {
                heading: 'Transponder Functions',
                bullets: [
                  'Coded identification replies.',
                  'Altitude reporting modes.',
                  'Emergency codes.',
                  'ADS-B broadcasts position automatically.',
                ],
              },
            ],
            keyPoints: [
              'VHF range is line-of-sight.',
              'Antenna systems cause most radio complaints.',
              'Transponders identify and report altitude.',
              'ADS-B out is the surveillance baseline.',
            ],
          },
          {
            title: 'Navigation Systems Overview',
            minutes: 25,
            intro: [
              'Navigation systems answer where the aircraft is and where it is going. VOR receivers measure bearing from ground stations; GPS provides satellite position with precision approaches; ILS localizer and glideslope guide instrument landings; DME measures slant distance. Each system pairs a receiver, an antenna, and cockpit display logic.',
              'Avionics maintenance for nav systems emphasizes installation integrity: antenna condition and placement, coax health, and database currency for GPS units. Accuracy checks and flight inspection requirements define system airworthiness, and obsolete databases are a compliance item, not a nuisance.',
            ],
            sections: [
              {
                heading: 'System Inventory',
                bullets: [
                  'VOR: bearing from ground stations.',
                  'GPS: satellite position and approaches.',
                  'ILS: precision landing guidance.',
                  'DME: slant distance.',
                ],
              },
              {
                heading: 'Maintenance Emphasis',
                bullets: [
                  'Antenna integrity drives accuracy.',
                  'Database currency is a compliance item.',
                  'Accuracy checks follow regulation.',
                ],
              },
            ],
            keyPoints: [
              'Each nav system is receiver, antenna, and display.',
              'ILS provides precision landing guidance.',
              'GPS databases require currency.',
              'Antenna health is navigation health.',
            ],
            callout: {
              variant: 'exam',
              title: 'Exam focus',
              text: 'Matching navigation systems to their function — VOR bearing, ILS precision approach, DME distance — is standard test material.',
            },
          },
        ],
      },
      {
        title: 'Instrument and Autopilot Fundamentals',
        description: 'Learn pitot-static instruments and autopilot architecture.',
        lessons: [
          {
            title: 'Pitot-Static and Gyroscopic Instruments',
            minutes: 25,
            intro: [
              'The pitot-static system powers the core flight instruments: airspeed compares pitot ram pressure to static pressure, altimeter reads static pressure as altitude, and vertical speed senses pressure change rate. Leaks and blockages corrupt all three — a blocked pitot with a clear drain behaves differently than a blocked static port, and the symptom patterns are diagnostic.',
              'Gyroscopic instruments use rigidity in space and precession: attitude indicators hold a horizon reference, heading indicators hold direction with periodic compass alignment. Vacuum or electrical power drives them, and modern solid-state attitude systems replace spinning gyros with sensors that have no moving parts.',
            ],
            sections: [
              {
                heading: 'Pitot-Static Instruments',
                bullets: [
                  'Airspeed: pitot versus static.',
                  'Altimeter: static pressure to altitude.',
                  'VSI: rate of pressure change.',
                  'Blockage symptom patterns are diagnostic.',
                ],
              },
              {
                heading: 'Gyro Principles',
                bullets: [
                  'Rigidity in space holds references.',
                  'Precession converts force to motion.',
                  'Solid-state sensors replace spinning mass.',
                ],
              },
            ],
            keyPoints: [
              'Three instruments share the pitot-static system.',
              'Blockage symptoms identify the blocked port.',
              'Gyro rigidity creates stable references.',
              'Solid-state attitude removes moving parts.',
            ],
          },
          {
            title: 'Autopilot and Flight Management Basics',
            minutes: 25,
            intro: [
              'Autopilots close control loops: sensors measure attitude and path, computers compare against selected targets, and servos move controls to correct. Understanding the loop — sense, compute, actuate — organizes all autopilot troubleshooting, and servo torque limits plus disconnect logic protect against runaway systems.',
              'Flight management systems integrate navigation, performance, and guidance into one architecture, following programmed routes and vertical profiles. Maintenance emphasizes database currency, sensor input integrity, and the ground-test procedures that verify loops before flight.',
            ],
            sections: [
              {
                heading: 'The Control Loop',
                steps: [
                  'Sensors measure the aircraft state.',
                  'Computers compare against targets.',
                  'Servos move the controls.',
                  'Feedback closes the loop.',
                ],
              },
              {
                heading: 'Safety Architecture',
                bullets: [
                  'Servo torque limits prevent overpowering the pilot.',
                  'Disconnects are immediate and tested.',
                  'Ground tests verify loops before flight.',
                ],
              },
            ],
            keyPoints: [
              'Sense, compute, actuate — the autopilot loop.',
              'Torque limits and disconnects are safety-critical.',
              'FMS integrates navigation and guidance.',
              'Ground tests precede flight.',
            ],
          },
        ],
      },
      {
        title: 'Antennas, Transmission Lines, and Documentation',
        description: 'Understand antennas, coax, and the regulatory documentation of avionics work.',
        lessons: [
          {
            title: 'Antennas and Coaxial Cable',
            minutes: 25,
            intro: [
              'Antennas convert electrical energy to radio waves and back, sized to their frequency — which is why an aircraft bristles with different shapes for VHF comm, navigation, transponder, and GPS. Impedance matching keeps energy flowing: the standard 50-ohm system demands coax, connectors, and antennas all at the same impedance, and mismatches reflect power back as standing waves.',
              'Coax health is measured reality: water intrusion into connectors raises loss and corrosion, and cable bends below minimum radius change impedance. Voltage standing wave ratio testing quantifies antenna system health, and a rising VSWR over time points to moisture or damage before total failure.',
            ],
            sections: [
              {
                heading: 'Antenna Fundamentals',
                bullets: [
                  'Size relates to frequency.',
                  'Each system has its own antenna.',
                  'Impedance matching preserves power transfer.',
                  '50 ohms is the aviation standard.',
                ],
              },
              {
                heading: 'Coax Care',
                bullets: [
                  'Water intrusion raises loss.',
                  'Bend radius limits protect impedance.',
                  'VSWR trends predict failures.',
                ],
              },
            ],
            keyPoints: [
              'Antenna geometry follows frequency.',
              'Matching prevents reflected power.',
              'Moisture is coax\u2019s enemy.',
              'VSWR quantifies antenna system health.',
            ],
          },
          {
            title: 'Regulations and Documentation in Avionics Work',
            minutes: 25,
            intro: [
              'Avionics work lives inside regulatory structure: certain systems — transponders and altitude-reporting equipment — require periodic testing and inspection by authorized facilities, and installations follow approved data. The technician\u2019s work is documented with the same legal weight as any aircraft maintenance.',
              'Documentation discipline includes equipment tags tracking bench status, work orders describing findings and actions, and return-to-service entries referencing the data used. Calibration records for test equipment close the loop — a measurement is only as trustworthy as the calibrated tool behind it.',
            ],
            sections: [
              {
                heading: 'Regulatory Anchors',
                bullets: [
                  'Transponder and altitude systems: periodic testing.',
                  'Installations follow approved data.',
                  'Authorized facilities perform specific checks.',
                ],
              },
              {
                heading: 'Shop Documentation',
                bullets: [
                  'Equipment tags track bench status.',
                  'Work orders describe findings and actions.',
                  'Calibration records back every measurement.',
                ],
              },
            ],
            keyPoints: [
              'Certain avionics checks are regulated and periodic.',
              'Approved data governs installations.',
              'Documentation carries legal weight.',
              'Calibrated tools back every measurement.',
            ],
            callout: {
              variant: 'tip',
              title: 'Career habit',
              text: 'Treat every tag and work order as if an accident investigator will read it — someday one might.',
            },
          },
        ],
      },
      {
        title: 'Bench Practices: Soldering and ESD Control',
        description: 'Apply soldering technique and electrostatic discharge controls at the bench.',
        lessons: [
          {
            title: 'Soldering Technique for Electronics',
            minutes: 25,
            intro: [
              'Soldering joins conductors with a molten alloy that wets both surfaces — a metallurgical bond, not glue. Good joints are bright, smooth, and shaped by the underlying connection; dull, grainy, or balled joints are cold joints that fail intermittently. Iron temperature, clean tips, and heat applied to the joint rather than the solder are the technique.',
              'Heat management protects components: semiconductors tolerate seconds of soldering heat, not tens of seconds, and heat sinks clip onto leads during sensitive work. Inspection under magnification catches bridges between pads and insufficient wetting — the faults that pass a casual glance and fail in the field.',
            ],
            sections: [
              {
                heading: 'Good Joint Criteria',
                bullets: [
                  'Bright, smooth, concave fillet.',
                  'Joint shape visible through the solder.',
                  'No bridges to adjacent pads.',
                  'No flux residue left conductive.',
                ],
              },
              {
                heading: 'Technique Rules',
                steps: [
                  'Clean and tin the iron tip.',
                  'Heat the joint, then feed solder.',
                  'Remove solder, then the iron.',
                  'Hold still until solid.',
                  'Inspect under magnification.',
                ],
              },
            ],
            keyPoints: [
              'Soldering is wetting, not gluing.',
              'Cold joints fail intermittently.',
              'Heat the work, feed the solder.',
              'Magnified inspection catches hidden faults.',
            ],
          },
          {
            title: 'Electrostatic Discharge Control',
            minutes: 25,
            intro: [
              'Electrostatic discharge destroys semiconductors at voltages far below what humans feel — a charge you cannot sense can puncture a gate oxide, and latent damage passes testing only to fail months later in service. ESD control is therefore a system: grounded wrist straps, static-dissipative mats, controlled handling of circuit cards by edges, and shielding bags for transport.',
              'Discipline makes the system real: straps tested at shift start, cards never laid on uncontrolled surfaces, and packaging kept until installation. Field failures traced to ESD are preventable failures — the wrist strap is the cheapest insurance in electronics.',
            ],
            sections: [
              {
                heading: 'ESD Control System',
                bullets: [
                  'Grounded wrist strap, tested daily.',
                  'Static-dissipative work surfaces.',
                  'Cards handled by edges only.',
                  'Shielding bags for storage and transport.',
                ],
              },
              {
                heading: 'Why It Matters',
                bullets: [
                  'Damage occurs below sensation threshold.',
                  'Latent damage fails later in service.',
                  'Prevention costs pennies; field failure costs fleets.',
                ],
              },
            ],
            keyPoints: [
              'You cannot feel the voltage that kills a chip.',
              'Latent ESD damage escapes testing.',
              'Straps, mats, and bags form the system.',
              'Daily strap testing is shop discipline.',
            ],
            callout: {
              variant: 'safety',
              title: 'Practice rule',
              text: 'No wrist strap, no card handling — the rule has no busy-day exception.',
            },
          },
        ],
      },
      {
        title: 'Grounding, Shielding, and Bonding',
        description: 'Control interference through proper grounding and shielding practice.',
        lessons: [
          {
            title: 'Grounding and Bonding Principles',
            minutes: 25,
            intro: [
              'Grounding gives circuits a common reference and faults a safe path; bonding electrically joins airframe components so the entire structure behaves as one conductor. Poor bonds create voltage differences between structure points — the source of radio noise, static buildup, and lightning-strike damage paths. Bonding straps bridge hinges and isolated panels deliberately.',
              'Corrosion at bond points defeats the connection silently, so inspection includes bond strap condition and terminal cleanliness, and resistance checks verify the connection electrically rather than visually. A green crusty bonding terminal is an open circuit wearing a disguise.',
            ],
            sections: [
              {
                heading: 'Bonding Purposes',
                bullets: [
                  'Common electrical reference across the airframe.',
                  'Static dissipation paths.',
                  'Lightning current paths.',
                  'Radio noise suppression.',
                ],
              },
              {
                heading: 'Inspection Points',
                bullets: [
                  'Strap condition and security.',
                  'Terminal corrosion.',
                  'Resistance verification, not just looks.',
                  'Hinge and control-surface bonds intact.',
                ],
              },
            ],
            keyPoints: [
              'Bonding unifies the structure electrically.',
              'Poor bonds breed noise and lightning damage.',
              'Corrosion defeats bonds invisibly.',
              'Resistance checks verify what eyes cannot.',
            ],
          },
          {
            title: 'Shielding and Interference Control',
            minutes: 25,
            intro: [
              'Shielding contains electromagnetic interference: braided shields around signal cables block radiated noise, and shield termination practice — grounded at the correct end per design — determines whether the shield works or becomes an antenna itself. Ignition systems, generators, and motors are the classic noise sources shielding protects radios and navigation from.',
              'Interference troubleshooting follows the coupling path: noise appearing with engine RPM points at ignition or charging systems, noise on one receiver points at its antenna path, and new noise after maintenance points at disturbed bonds or shields. Systematic correlation — when does it happen, what else is running — isolates interference faster than any instrument.',
            ],
            sections: [
              {
                heading: 'Shielding Practice',
                bullets: [
                  'Braided shields surround signal runs.',
                  'Termination per design — wrong grounding ruins it.',
                  'Connector backshells continue the shield.',
                ],
              },
              {
                heading: 'Interference Correlation',
                bullets: [
                  'RPM-linked noise: ignition or charging.',
                  'Single-receiver noise: its antenna path.',
                  'Post-maintenance noise: disturbed bonds or shields.',
                ],
              },
            ],
            keyPoints: [
              'Shields block noise only when terminated correctly.',
              'Ignition and charging systems are prime noise sources.',
              'Correlation isolates interference fastest.',
              'Maintenance can create interference — check what changed.',
            ],
            callout: {
              variant: 'tip',
              title: 'Diagnostic habit',
              text: 'When interference appears, ask "what changed or what is running" before reaching for instruments — correlation beats measurement.',
            },
          },
        ],
      },
    ],
    questions: [
      { domain: 'DC Circuits', difficulty: 'easy', q: 'A 12-volt source across a 4-ohm resistance draws what current?', choices: ['0.33 A', '3 A', '48 A', '8 A'], answer: 1, why: 'I = V/R = 12/4 = 3 amperes.' },
      { domain: 'DC Circuits', difficulty: 'medium', q: 'In a series circuit, one open component causes:', choices: ['Higher current elsewhere', 'The entire circuit to stop conducting', 'No change', 'Voltage to double'], answer: 1, why: 'Series paths carry one current; any open interrupts the whole string.' },
      { domain: 'AC Circuits', difficulty: 'medium', q: 'Aircraft AC systems commonly operate at:', choices: ['60 Hz', '400 Hz', '1,000 Hz', '50 Hz'], answer: 1, why: '400 Hz allows lighter transformers and motors — a weight-driven aviation standard.' },
      { domain: 'AC Circuits', difficulty: 'medium', q: 'RMS voltage represents:', choices: ['The peak value', 'The DC-equivalent heating value', 'The average of peaks', 'Battery voltage'], answer: 1, why: 'RMS equates AC\u2019s energy delivery to an equivalent DC value.' },
      { domain: 'Semiconductors and Digital Basics', difficulty: 'easy', q: 'A zener diode is primarily used for:', choices: ['Amplification', 'Voltage regulation', 'Light emission', 'Oscillation'], answer: 1, why: 'Zeners conduct in reverse at a designed threshold, holding a stable reference voltage.' },
      { domain: 'Semiconductors and Digital Basics', difficulty: 'medium', q: 'An AND gate outputs true when:', choices: ['Any input is true', 'All inputs are true', 'No inputs are true', 'Inputs alternate'], answer: 1, why: 'AND logic requires every input true; OR requires any.' },
      { domain: 'Wiring and Connectors', difficulty: 'medium', q: 'Why are crimped terminals preferred over solder in aircraft wiring?', choices: ['They are cheaper', 'Crimps form gas-tight joints that resist vibration fatigue better', 'Solder is conductive', 'Crimps are faster only'], answer: 1, why: 'Solder wicks and creates stiff points that fatigue under vibration; proper crimps flex safely.' },
      { domain: 'Wiring and Connectors', difficulty: 'easy', q: 'Nicking a conductor while stripping insulation is prohibited because:', choices: ['It looks unprofessional', 'The nick becomes a fatigue crack origin', 'It wastes wire', 'It changes color'], answer: 1, why: 'Nicks concentrate stress and grow into breaks under vibration.' },
      { domain: 'Test Equipment', difficulty: 'easy', q: 'Resistance is measured:', choices: ['In parallel on a live circuit', 'In series', 'On a de-energized circuit', 'Through the battery'], answer: 2, why: 'Ohmmeters supply their own power — external voltage damages them and corrupts readings.' },
      { domain: 'Test Equipment', difficulty: 'medium', q: 'The half-split troubleshooting method works by:', choices: ['Replacing half the parts', 'Testing at midpoints to discard good sections quickly', 'Cutting wires in half', 'Running at half power'], answer: 1, why: 'Each midpoint test eliminates half the remaining circuit — logarithmic fault isolation.' },
      { domain: 'Communication Systems', difficulty: 'medium', q: 'Most "bad radio" complaints in aircraft trace to:', choices: ['Faulty microphones', 'Antenna and coax problems', 'Battery brands', 'Frequency congestion'], answer: 1, why: 'The antenna system — connectors, coax, placement — dominates real-world radio performance.' },
      { domain: 'Communication Systems', difficulty: 'easy', q: 'VHF aircraft radio range is limited primarily by:', choices: ['Battery capacity', 'Line of sight', 'Antenna color', 'Cabin noise'], answer: 1, why: 'VHF propagates essentially line-of-sight — altitude extends range, curvature limits it.' },
      { domain: 'Navigation Systems', difficulty: 'easy', q: 'The ILS provides:', choices: ['Weather radar', 'Precision approach guidance via localizer and glideslope', 'Traffic display', 'Engine data'], answer: 1, why: 'Localizer (lateral) and glideslope (vertical) together guide precision landings.' },
      { domain: 'Navigation Systems', difficulty: 'medium', q: 'An expired GPS database is:', choices: ['A cosmetic issue', 'A compliance item affecting operational legality', 'An automatic update', 'Impossible'], answer: 1, why: 'Database currency is a regulatory requirement for IFR GPS operations.' },
      { domain: 'Instrument Systems', difficulty: 'medium', q: 'Which instruments depend on the pitot-static system?', choices: ['Attitude and heading', 'Airspeed, altimeter, and vertical speed', 'Fuel and oil pressure', 'Tachometer and EGT'], answer: 1, why: 'The three classic pitot-static instruments share the pressure plumbing.' },
      { domain: 'Instrument Systems', difficulty: 'medium', type: 'scenario', q: 'The altimeter and VSI freeze while airspeed behaves oddly on climb. This pattern suggests:', choices: ['A failed gyro', 'A static port blockage', 'A dead battery', 'A transponder fault'], answer: 1, why: 'Static blockage freezes the altimeter and VSI and corrupts airspeed as altitude changes.' },
      { domain: 'Autopilot and Flight Management Basics', difficulty: 'medium', q: 'The autopilot control loop order is:', choices: ['Actuate, sense, compute', 'Sense, compute, actuate', 'Compute, actuate, sense', 'Sense, actuate, compute'], answer: 1, why: 'Sensors feed the computer, which commands servos — feedback closes the loop.' },
      { domain: 'Autopilot and Flight Management Basics', difficulty: 'easy', q: 'Servo torque limits exist to:', choices: ['Save electricity', 'Prevent the autopilot from overpowering pilot control', 'Reduce noise', 'Extend servo warranty'], answer: 1, why: 'Limited servo authority keeps a malfunctioning autopilot defeatable by the pilot.' },
      { domain: 'Antennas and Transmission Lines', difficulty: 'medium', q: 'A rising VSWR trend on an antenna system usually indicates:', choices: ['Improving performance', 'Moisture intrusion or developing damage', 'A new radio', 'Lower frequency use'], answer: 1, why: 'Degrading match reflects power back — trending VSWR catches moisture and damage early.' },
      { domain: 'Antennas and Transmission Lines', difficulty: 'easy', q: 'The standard impedance for aircraft RF systems is:', choices: ['75 ohms', '50 ohms', '300 ohms', '8 ohms'], answer: 1, why: 'Fifty-ohm systems are the aviation RF standard for coax, connectors, and antennas.' },
      { domain: 'Documentation and Regulations', difficulty: 'medium', q: 'Transponder and altitude-reporting systems require:', choices: ['No testing', 'Periodic testing by authorized facilities', 'Annual repainting', 'Pilot-only checks'], answer: 1, why: 'These surveillance systems have regulatory periodic test requirements.' },
      { domain: 'Documentation and Regulations', difficulty: 'easy', q: 'A measurement is trustworthy only when:', choices: ['The meter is digital', 'The test equipment is within calibration', 'Two people observe it', 'It is written quickly'], answer: 1, why: 'Calibration records establish that test equipment reads accurately — the measurement\u2019s foundation.' },
    ],
  },
  // ======================================================================
  // 12. Drone Operations and Safety Readiness
  // ======================================================================
  {
    id: 'track_drone',
    name: 'Drone Operations and Safety Readiness',
    shortName: 'Drone Ops & Safety',
    category: 'aviation',
    weeks: 10,
    description:
      'Build professional UAS operational skills — mission planning, site safety, crew coordination, data workflows, and emergency readiness for real-world drone programs.',
    credentialFocus: 'Mapped to UAS operations, safety, and mission planning competencies',
    schoolOverview:
      'A hands-on operational readiness pathway covering mission planning, site safety management, crew coordination, and data handling, with documented competency evidence. Reports support program safety documentation and employer verification.',
    studentOverview:
      'Learn to plan and execute drone missions like a professional operator — site surveys, risk assessment, crew briefings, safe flight execution, and data delivery — with scenario practice drawn from real industry workflows.',
    prerequisites: 'None. Completion of the Part 107 knowledge track is recommended before field operations.',
    alignmentNotes:
      'Modules and practice banks are mapped to UAS operations, safety, and mission planning competencies. All content is original.',
    domains: [
      'Mission Planning',
      'Site Assessment and Survey',
      'Risk Assessment and Mitigation',
      'Preflight Procedures',
      'Flight Execution and Crew Coordination',
      'Emergency and Abnormal Procedures',
      'Data Capture and Management',
      'Battery and Equipment Management',
      'Public Interaction and Privacy',
      'Program Documentation and Compliance',
    ],
    modules: [
      {
        title: 'Mission Planning Fundamentals',
        description: 'Turn a client request into a safe, legal, executable flight plan.',
        lessons: [
          {
            title: 'From Request to Flight Plan',
            minutes: 25,
            intro: [
              'Professional missions start with definition: what data does the client need, at what quality, covering what area? A mapping job translates into overlap percentages, altitude, and ground sample distance; an inspection translates into standoff distances, angles, and shot lists. The mission plan converts requirements into flight lines, altitudes, and timing.',
              'Feasibility screening comes next: airspace at the site, authorization lead times, terrain and obstacles, weather windows, and daylight. The professional habit is planning days ahead — authorization waits and weather windows reward early planning and punish last-minute ones.',
            ],
            sections: [
              {
                heading: 'Requirements to Plan Translation',
                bullets: [
                  'Define deliverable and quality targets.',
                  'Convert to altitude, overlap, and coverage.',
                  'Build flight lines and shot lists.',
                  'Estimate battery count and duration.',
                ],
              },
              {
                heading: 'Feasibility Screen',
                steps: [
                  'Check airspace and authorization needs.',
                  'Survey terrain and obstacles.',
                  'Check weather windows and daylight.',
                  'Confirm crew and equipment availability.',
                ],
              },
            ],
            keyPoints: [
              'Deliverables drive altitude, overlap, and coverage.',
              'Shot lists organize inspection work.',
              'Authorization lead time shapes scheduling.',
              'Plan days ahead, not hours.',
            ],
          },
          {
            title: 'Automated Mission Tools and Failsafe Planning',
            minutes: 25,
            intro: [
              'Mission-planning software automates grid and waypoint flights, but the operator owns every parameter: altitude relative to ground and obstacles, speed versus data quality, overlap settings, and terrain-following behavior where terrain varies. Automated does not mean unattended — the pilot monitors continuously and can take manual control instantly.',
              'Failsafe configuration is mission planning\u2019s safety layer: lost-link behavior, return-to-home altitude clearing the tallest obstacle along the return path, low-battery thresholds with genuine margin, and geofencing where appropriate. A mission plan reviewed on paper catches errors the field makes expensive.',
            ],
            sections: [
              {
                heading: 'Parameters the Operator Owns',
                bullets: [
                  'Altitude against ground and obstacles.',
                  'Speed versus data quality.',
                  'Overlap percentages.',
                  'Terrain-following settings.',
                ],
              },
              {
                heading: 'Failsafe Checklist',
                bullets: [
                  'Lost-link behavior configured.',
                  'Return altitude clears obstacles.',
                  'Battery thresholds carry real margin.',
                  'Geofencing set where appropriate.',
                ],
              },
            ],
            keyPoints: [
              'Automation executes; the operator decides.',
              'Manual takeover must always be instant.',
              'Return altitude is checked against the tallest obstacle.',
              'Paper review beats field repair.',
            ],
            callout: {
              variant: 'exam',
              title: 'Exam focus',
              text: 'Lost-link and return-altitude logic are the most commonly tested failsafe concepts.',
            },
          },
        ],
      },
      {
        title: 'Site Assessment and Survey',
        description: 'Evaluate operating sites for hazards before committing to fly.',
        lessons: [
          {
            title: 'The Physical Site Survey',
            minutes: 25,
            intro: [
              'Site surveys — ideally in person, minimally by map and imagery — catalog what the flight must avoid: power lines nearly invisible against backgrounds, towers, trees, terrain rises, and buildings. Takeoff and landing zones are selected for flatness, clearance, and distance from uninvolved people, with alternate landing sites identified.',
              'Environmental factors complete the survey: wind funnels between buildings, sun angle for imaging quality, bird activity, and dust or moisture sources. The survey is documented — photos, notes, measurements — because it drives the risk assessment and the crew briefing.',
            ],
            sections: [
              {
                heading: 'Hazard Catalog',
                bullets: [
                  'Power lines and guy wires.',
                  'Towers and antennas.',
                  'Trees and terrain rises.',
                  'Buildings and public areas.',
                ],
              },
              {
                heading: 'Zone Selection Criteria',
                bullets: [
                  'Flat, clear, and controllable.',
                  'Separated from uninvolved people.',
                  'Alternate landing site identified.',
                  'Approach and departure paths clear.',
                ],
              },
            ],
            keyPoints: [
              'Wires are the classic invisible hazard.',
              'Primary and alternate landing zones are both chosen.',
              'Environmental factors shape timing and path.',
              'Surveys are documented, not remembered.',
            ],
          },
          {
            title: 'Airspace and Restriction Verification',
            minutes: 25,
            intro: [
              'Every operation verifies the airspace picture on the day of flight: the charted airspace class, any required authorizations already in hand, and current temporary flight restrictions, which can appear with little notice for events, emergencies, and VIP movements. Apps and official sources are checked the morning of operations, not just at planning time.',
              'Local layers add rules: property owner permission, park and land-management restrictions, and local ordinances. The operator\u2019s compliance file — authorization, permissions, restriction checks — is assembled per mission and retained, because legality is demonstrated with documents, not intentions.',
            ],
            sections: [
              {
                heading: 'Day-of Verification',
                steps: [
                  'Confirm airspace class at the site.',
                  'Verify authorization in hand and valid.',
                  'Check temporary flight restrictions.',
                  'Confirm property and local permissions.',
                  'File everything in the mission record.',
                ],
              },
              {
                heading: 'Restriction Sources',
                bullets: [
                  'Stadium and event restrictions.',
                  'Emergency-response restrictions.',
                  'VIP movement restrictions.',
                  'Land-management rules.',
                ],
              },
            ],
            keyPoints: [
              'Restrictions are checked on the day, not just at planning.',
              'Temporary restrictions appear with little notice.',
              'Permissions layer on top of airspace rules.',
              'Compliance is proven with documents.',
            ],
            callout: {
              variant: 'safety',
              title: 'Safety',
              text: 'Flying near an emergency response — a wildfire, a crash scene — can ground lifesaving aircraft and carries severe penalties. Check restrictions, always.',
            },
          },
        ],
      },
      {
        title: 'Risk Assessment and Mitigation',
        description: 'Score operational risk and reduce it before flight.',
        lessons: [
          {
            title: 'Structured Risk Assessment',
            minutes: 25,
            intro: [
              'Professional operators assess risk systematically rather than by feel: identify hazards — people below, obstacles, weather, equipment state, crew experience — then rate each by likelihood and severity. A simple risk matrix converts judgment into a number, and the number drives the decision: mitigate, accept with authorization, or decline.',
              'Mitigations reduce likelihood or severity: moving the launch zone separates the flight from people; rescheduling removes the weather factor; adding a visual observer raises traffic detection; reducing altitude changes the consequence profile. The assessment is documented and briefed — a risk register nobody reads protects nobody.',
            ],
            sections: [
              {
                heading: 'Assessment Structure',
                steps: [
                  'Identify all hazards.',
                  'Rate likelihood and severity.',
                  'Apply mitigations.',
                  'Re-score the residual risk.',
                  'Decide: fly, modify, or decline.',
                ],
              },
              {
                heading: 'Mitigation Examples',
                bullets: [
                  'Relocate launch zone away from people.',
                  'Reschedule around weather.',
                  'Add visual observers.',
                  'Reduce altitude or scope.',
                ],
              },
            ],
            keyPoints: [
              'Likelihood times severity scores risk.',
              'Mitigate before accepting.',
              'Residual risk drives the decision.',
              'Documented assessments get briefed.',
            ],
          },
          {
            title: 'Human Factors in UAS Operations',
            minutes: 20,
            intro: [
              'Most UAS incidents trace to human factors: fatigue, distraction, schedule pressure, and overconfidence in automation. The same IMSAFE self-check used in crewed aviation applies — illness, medication, stress, alcohol, fatigue, emotion — because the pilot remains the system\u2019s most failure-prone component.',
              'Automation complacency is the UAS-specific trap: automated missions fly beautifully until something changes, and the operator who stopped monitoring discovers it late. Deliberate monitoring discipline — eyes on aircraft and telemetry, periodic manual proficiency practice — keeps the human in the loop where they belong.',
            ],
            sections: [
              {
                heading: 'Human Factor Hazards',
                bullets: [
                  'Fatigue and distraction.',
                  'Schedule and client pressure.',
                  'Overconfidence in automation.',
                  'Skill decay without practice.',
                ],
              },
              {
                heading: 'Countermeasures',
                bullets: [
                  'IMSAFE self-check before operations.',
                  'Continuous telemetry and visual monitoring.',
                  'Regular manual-flight proficiency.',
                  'Hard personal minimums.',
                ],
              },
            ],
            keyPoints: [
              'Human factors drive most incidents.',
              'IMSAFE applies to drone pilots too.',
              'Automation complacency is the signature trap.',
              'Manual proficiency is maintained deliberately.',
            ],
            callout: {
              variant: 'tip',
              title: 'Professional habit',
              text: 'Write your personal minimums — wind, visibility, battery floor — before you need them; decide limits at the desk, not at the field edge.',
            },
          },
        ],
      },
      {
        title: 'Preflight Procedures',
        description: 'Execute consistent preflight inspections and crew briefings.',
        lessons: [
          {
            title: 'The Preflight Inspection Sequence',
            minutes: 25,
            intro: [
              'Preflight inspection is a fixed ritual, run the same way every time: airframe inspection for cracks and security, propellers for damage and tight seating, battery charge, health, and seating, gimbal and camera movement, sensors clean, and storage cards present with capacity. The checklist is physical or digital, but it is never memory.',
              'Power-up checks verify the system as configured: firmware and app versions, GPS satellite count and home point, compass and IMU status, control response and direction, and geo-awareness of the planned area. Every item verified is a failure intercepted on the ground, where it is cheap.',
            ],
            sections: [
              {
                heading: 'Physical Inspection',
                steps: [
                  'Airframe: cracks, arms, landing gear.',
                  'Propellers: damage, seating, correct positions.',
                  'Battery: charge, health, locked seating.',
                  'Camera and sensors: clean and free.',
                  'Storage: card present, formatted, capacity.',
                ],
              },
              {
                heading: 'Power-Up Verification',
                bullets: [
                  'Firmware and app versions current.',
                  'GPS lock and home point confirmed.',
                  'Control direction verified.',
                  'Geo-awareness checked for the area.',
                ],
              },
            ],
            keyPoints: [
              'The checklist is always used — never memory.',
              'Propeller seating and condition are flight-critical.',
              'Home point is confirmed, not assumed.',
              'Ground discoveries are cheap; airborne ones are not.',
            ],
          },
          {
            title: 'The Crew Briefing',
            minutes: 20,
            intro: [
              'Multi-person operations begin with a briefing that turns individuals into a crew: the mission profile, each person\u2019s role, hazards from the site survey, communication standards including callouts, abort criteria, and emergency actions. Briefings are short, specific, and two-way — each member confirms understanding.',
              'Abort criteria deserve explicit treatment: the conditions — wind exceeding limits, people entering the area, battery below threshold, lost sight — under which anyone can and must call a stop. Pre-agreed aborts happen fast; improvised ones happen late.',
            ],
            sections: [
              {
                heading: 'Briefing Content',
                bullets: [
                  'Mission profile and objectives.',
                  'Roles: pilot, observer, ground crew.',
                  'Site hazards and public-control plan.',
                  'Callouts and communication standards.',
                  'Abort criteria and emergency actions.',
                ],
              },
              {
                heading: 'Abort Criteria Examples',
                bullets: [
                  'Wind or weather exceeding limits.',
                  'Uninvolved people entering the area.',
                  'Battery at minimum threshold.',
                  'Loss of visual contact.',
                ],
              },
            ],
            keyPoints: [
              'Briefings convert individuals into crews.',
              'Two-way confirmation beats announcements.',
              'Pre-agreed aborts execute fast.',
              'Anyone can call the stop.',
            ],
          },
        ],
      },
      {
        title: 'Flight Execution and Crew Coordination',
        description: 'Run safe, professional flight operations with effective crew communication.',
        lessons: [
          {
            title: 'In-Flight Monitoring and Scan Discipline',
            minutes: 25,
            intro: [
              'During flight, attention divides deliberately between the aircraft in the sky and the telemetry on the screen: battery state against plan, GPS quality, wind behavior at altitude, and mission progress. Fixation on the screen is the classic operator error — the aircraft lives in the air, and visual contact is the primary duty.',
              'Scan discipline covers the sky for traffic and the ground for encroaching people. Visual observers scan dedicated sectors and call hazards with standard phraseology — position, distance, direction — while the pilot acknowledges. A crew that communicates in shorthand under pressure trained that shorthand in briefing.',
            ],
            sections: [
              {
                heading: 'Monitoring Priorities',
                bullets: [
                  'Visual contact with the aircraft, primary.',
                  'Battery against plan.',
                  'Wind and telemetry behavior.',
                  'Mission progress.',
                ],
              },
              {
                heading: 'Standard Callouts',
                bullets: [
                  'Hazard type and position.',
                  'Distance and direction of movement.',
                  'Pilot acknowledgment required.',
                  'Abort calls acted on immediately.',
                ],
              },
            ],
            keyPoints: [
              'Eyes on the aircraft first, screen second.',
              'Telemetry is monitored against plan.',
              'Observers own sectors.',
              'Callouts are acknowledged and acted on.',
            ],
          },
          {
            title: 'Public and Site Management During Operations',
            minutes: 20,
            intro: [
              'Operations attract attention, and crowd management is part of flight safety: ground crew position themselves at approach paths, answer questions without leaving their posts, and redirect curious onlookers before they enter the operating area. The pilot flying never manages the public — attention is a finite resource.',
              'Professional interaction protects the program: a prepared one-line explanation of the operation, visible authorization when operating commercially, and courtesy under challenge. Hostile or persistent interference is handled by pausing operations and involving property or law enforcement contacts per plan — never by argument at the controller.',
            ],
            sections: [
              {
                heading: 'Ground Crew Duties',
                bullets: [
                  'Position at public approach paths.',
                  'Redirect onlookers before entry.',
                  'Answer questions without abandoning posts.',
                ],
              },
              {
                heading: 'Interaction Standards',
                bullets: [
                  'Prepared one-line explanation.',
                  'Authorization accessible.',
                  'Pause rather than argue.',
                  'Escalate per plan.',
                ],
              },
            ],
            keyPoints: [
              'The pilot never manages the public mid-flight.',
              'Ground crew intercepts approach paths.',
              'Courtesy and documentation defuse challenges.',
              'Interference means pause, not argument.',
            ],
            callout: {
              variant: 'safety',
              title: 'Safety',
              text: 'A distracted pilot is a crashed aircraft waiting to happen — the ground crew exists so the pilot never has to look away.',
            },
          },
        ],
      },
      {
        title: 'Emergency and Abnormal Procedures',
        description: 'Respond to flyaways, battery events, and aircraft emergencies.',
        lessons: [
          {
            title: 'Flyaway and Lost-Link Response',
            minutes: 25,
            intro: [
              'Lost link and flyaway events are managed, not panicked through: the configured failsafe executes first — hover, return, or land — while the pilot attempts reacquisition by repositioning, checking the controller, and restoring line of sight. Most events resolve in seconds if the setup was right.',
              'When the aircraft departs control, priorities are absolute: protect people, avoid other aircraft, and notify the relevant facility if the aircraft threatens controlled airspace or airports. Post-event, the incident is documented fully — telemetry, timeline, conditions — both for regulatory reporting where triggered and for prevention analysis.',
            ],
            sections: [
              {
                heading: 'Response Sequence',
                steps: [
                  'Let the configured failsafe execute.',
                  'Attempt reacquisition methodically.',
                  'Protect people and other aircraft.',
                  'Notify facilities if airspace is threatened.',
                  'Document the event completely.',
                ],
              },
              {
                heading: 'Documentation Elements',
                bullets: [
                  'Timeline and telemetry.',
                  'Configuration and failsafe settings.',
                  'Weather and site conditions.',
                  'Outcome and damage assessment.',
                ],
              },
            ],
            keyPoints: [
              'Failsafes are configured before they are needed.',
              'Reacquisition attempts stay methodical.',
              'People and aircraft protection outrank the drone.',
              'Every event is documented.',
            ],
          },
          {
            title: 'Battery Emergencies and Forced Landings',
            minutes: 25,
            intro: [
              'Lithium battery failures in flight show as sudden voltage collapse or cell warnings, and the response is immediate landing at the safest available site — not the nearest site on the original plan, but the safest reachable now. Thermal runaway on the ground is handled by distance, non-water suppression appropriate to lithium fires per guidance, and no handling until fully cooled.',
              'Forced-landing logic generalizes: with power failing, the pilot chooses the landing site while choice remains — away from people first, away from roads second, property last. An aircraft is replaceable; the liability of injuring a person is not.',
            ],
            sections: [
              {
                heading: 'Battery Emergency Rules',
                bullets: [
                  'Voltage collapse: land immediately.',
                  'Thermal runaway: distance and appropriate suppression.',
                  'Never handle a hot battery.',
                  'Damaged batteries leave service permanently.',
                ],
              },
              {
                heading: 'Forced-Landing Priorities',
                bullets: [
                  'Away from people, always first.',
                  'Away from roads and vehicles.',
                  'Property damage acceptable.',
                  'Choose while power remains.',
                ],
              },
            ],
            keyPoints: [
              'Battery anomalies mean land now.',
              'Lithium fires keep their distance rules.',
              'Forced landings prioritize people, then property.',
              'Choose the site while choice remains.',
            ],
            callout: {
              variant: 'safety',
              title: 'Critical',
              text: 'A swollen, hot, or impact-damaged lithium battery is never charged, flown, or shipped — retire it per proper disposal procedures.',
            },
          },
        ],
      },
      {
        title: 'Data Capture and Management',
        description: 'Capture quality data and manage it through delivery.',
        lessons: [
          {
            title: 'Capture Quality: Photography and Mapping',
            minutes: 25,
            intro: [
              'Data quality is set at capture: shutter speed fast enough to freeze motion, overlap sufficient for reconstruction — mapping typically runs high front and side overlap — and consistent altitude holding ground sample distance constant. Lighting matters: harsh midday sun flattens or burns imagery, while lower angles model texture.',
              'Field verification prevents re-flights: reviewing sample frames at full resolution on site confirms focus, exposure, and coverage before packing up. A ten-minute field check beats a return trip, a disappointed client, and a wasted authorization window.',
            ],
            sections: [
              {
                heading: 'Capture Discipline',
                bullets: [
                  'Shutter speed freezes motion.',
                  'Overlap supports reconstruction.',
                  'Altitude consistency holds resolution.',
                  'Lighting chosen for the deliverable.',
                ],
              },
              {
                heading: 'Field Verification',
                steps: [
                  'Review sample frames at full resolution.',
                  'Check focus and exposure.',
                  'Confirm coverage of the target area.',
                  'Re-fly gaps immediately.',
                ],
              },
            ],
            keyPoints: [
              'Quality is fixed at capture, not in processing.',
              'Overlap drives reconstruction success.',
              'Field review catches gaps while the site is live.',
              'A field check beats a re-mobilization.',
            ],
          },
          {
            title: 'Data Handling, Processing, and Delivery',
            minutes: 20,
            intro: [
              'Data management starts at the card: immediate backup to two locations before formatting anything, organized folder structures by mission, and integrity checks on transferred files. Card failure after a successful mission is a self-inflicted disaster that backups prevent entirely.',
              'Processing and delivery follow the client specification: formats, projections, and resolutions as agreed, with metadata and reports documenting capture conditions. Retention policies and client confidentiality govern what is kept and for how long — mission data is client property handled accordingly.',
            ],
            sections: [
              {
                heading: 'Backup Discipline',
                bullets: [
                  'Two copies before formatting cards.',
                  'Mission-organized folder structure.',
                  'Integrity checks after transfer.',
                ],
              },
              {
                heading: 'Delivery Standards',
                bullets: [
                  'Formats per specification.',
                  'Capture metadata documented.',
                  'Confidentiality and retention per policy.',
                ],
              },
            ],
            keyPoints: [
              'Two backups before any card is formatted.',
              'Organization scales with operation size.',
              'Delivery matches the agreed specification.',
              'Client data is client property.',
            ],
          },
        ],
      },
      {
        title: 'Equipment and Program Management',
        description: 'Manage batteries, maintenance, and program documentation professionally.',
        lessons: [
          {
            title: 'Battery Fleet Management',
            minutes: 25,
            intro: [
              'Batteries are the consumable heart of operations and are managed as a fleet: numbered, cycle-tracked, charged and stored per manufacturer guidance, and rotated evenly. Storage charge levels — not full, not empty — preserve longevity, and temperature discipline matters: cold batteries sag in flight, hot batteries degrade fast.',
              'Health monitoring retires batteries before they fail: cycle counts, swelling checks, and flight-time trends flag decline. Transport follows lithium-battery rules — terminals protected, proper containers, and shipping regulations observed — because a battery incident in transit is a fire event.',
            ],
            sections: [
              {
                heading: 'Fleet Practices',
                bullets: [
                  'Number and track every battery.',
                  'Store at storage charge levels.',
                  'Rotate usage evenly.',
                  'Mind temperature in storage and field.',
                ],
              },
              {
                heading: 'Retirement Triggers',
                bullets: [
                  'Any swelling.',
                  'Impact damage.',
                  'Declining flight-time trend.',
                  'Cycle count limits.',
                ],
              },
            ],
            keyPoints: [
              'Batteries are tracked as managed assets.',
              'Storage charge preserves lifespan.',
              'Temperature discipline protects performance.',
              'Retire on evidence, not failure.',
            ],
          },
          {
            title: 'Program Documentation and Continuous Improvement',
            minutes: 20,
            intro: [
              'Professional UAS programs run on documentation: flight logs for every operation, maintenance records, training and currency records, incident reports, and the compliance file per mission. The logbook discipline that aviation built over a century applies to drones identically — records prove professionalism to clients, insurers, and regulators.',
              'Continuous improvement closes the loop: post-mission debriefs capture what worked and what did not, incident reviews find root causes without blame, and procedures evolve in writing. Programs that document their learning get measurably safer; programs that rely on memory repeat their mistakes.',
            ],
            sections: [
              {
                heading: 'Record Set',
                bullets: [
                  'Flight logs for every operation.',
                  'Maintenance and battery records.',
                  'Training and currency documentation.',
                  'Incident reports and mission compliance files.',
                ],
              },
              {
                heading: 'Improvement Cycle',
                steps: [
                  'Debrief every mission.',
                  'Review incidents for root causes.',
                  'Update procedures in writing.',
                  'Track whether changes work.',
                ],
              },
            ],
            keyPoints: [
              'Logs prove professionalism to regulators and insurers.',
              'Debriefs convert experience into procedure.',
              'Blameless review finds real causes.',
              'Written procedures evolve; memories do not.',
            ],
            callout: {
              variant: 'tip',
              title: 'Program habit',
              text: 'Five minutes of debrief notes per mission builds the safety library your future self will thank you for.',
            },
          },
        ],
      },
      {
        title: 'Operations in Challenging Conditions',
        description: 'Plan and execute cold, heat, wind, and low-light operations safely.',
        lessons: [
          {
            title: 'Cold, Heat, and Wind Operations',
            minutes: 25,
            intro: [
              'Temperature extremes attack batteries first: cold reduces effective capacity and voltage under load, so batteries are kept warm until launch, flight times are shortened deliberately, and low-temperature warnings are treated as land-now instructions. Heat degrades batteries and electronics from the other direction — shade, airflow, and shorter duty cycles protect the system.',
              'Wind assessment is three-dimensional: surface wind at launch, wind at altitude checked against forecasts and early telemetry, and gust spread — the difference between sustained and peak — telling you about turbulence. Flying downwind outbound and fighting to return upwind on a shrinking battery is the classic wind trap; outbound legs into the wind keep the easy leg for the return.',
            ],
            sections: [
              {
                heading: 'Temperature Playbook',
                bullets: [
                  'Cold: warm batteries until launch, shorten sorties.',
                  'Cold warnings mean land now.',
                  'Heat: shade, airflow, shorter duty cycles.',
                  'Never charge a hot battery.',
                ],
              },
              {
                heading: 'Wind Discipline',
                bullets: [
                  'Check wind at altitude, not just at the surface.',
                  'Gust spread indicates turbulence.',
                  'Outbound legs into the wind.',
                  'Reserve battery for the upwind return.',
                ],
              },
            ],
            keyPoints: [
              'Batteries are the first casualty of temperature extremes.',
              'Low-temperature warnings are landing instructions.',
              'Wind at altitude differs from the surface.',
              'Fight the wind outbound, ride it home.',
            ],
            callout: {
              variant: 'safety',
              title: 'Safety',
              text: 'The aircraft that drifts downwind easily on the way out must claw back against it on the way home — plan the hard leg first.',
            },
          },
          {
            title: 'Low-Light and Reduced-Visibility Operations',
            minutes: 25,
            intro: [
              'Low-light operations change everything about orientation: depth perception flattens, obstacles disappear against dark backgrounds, and visual line of sight becomes harder to maintain even within legal distances. Regulatory requirements for night operations — including required lighting and training elements — are verified before any twilight work, and site surveys happen in daylight first.',
              'Discipline compensates for darkness: tighter distance limits than daylight, higher reliance on a dedicated visual observer, slower maneuvering near obstacles, and conservative battery reserves because disorientation raises workload. If orientation is ever in doubt, the correct action is to stop, hover, and reacquire — never to keep maneuvering on hope.',
            ],
            sections: [
              {
                heading: 'Night-Operation Requirements',
                bullets: [
                  'Verify regulatory lighting and training requirements.',
                  'Daylight site survey before any night work.',
                  'Anti-collision lighting checked before launch.',
                ],
              },
              {
                heading: 'Darkness Discipline',
                bullets: [
                  'Tighter distance limits than daylight.',
                  'Dedicated visual observer.',
                  'Slower maneuvering near obstacles.',
                  'Hover and reacquire when in doubt.',
                ],
              },
            ],
            keyPoints: [
              'Darkness flattens depth perception.',
              'Night rules and lighting are verified in advance.',
              'Observers matter more after sunset.',
              'Disorientation means hover, not hope.',
            ],
          },
        ],
      },
      {
        title: 'Industry Applications and Client Delivery',
        description: 'Apply UAS skills to inspection, mapping, and media workflows clients actually buy.',
        lessons: [
          {
            title: 'Inspection and Mapping Workflows',
            minutes: 25,
            intro: [
              'Inspection work — roofs, towers, solar arrays, infrastructure — runs on shot discipline: a planned list of angles and details, consistent standoff distances, and systematic coverage so nothing is missed and nothing is shot twice. The deliverable is often annotation-ready imagery organized so the client\u2019s engineer can navigate it without a pilot\u2019s commentary.',
              'Mapping work is geometry in service of data: planned overlap, consistent altitude, ground control where accuracy demands it, and capture timing for good light. Processing settings flow from the client\u2019s use — a rough progress model and a survey-grade surface are different products with different capture rules, agreed before the first flight.',
            ],
            sections: [
              {
                heading: 'Inspection Discipline',
                bullets: [
                  'Shot lists planned from client requirements.',
                  'Consistent standoff and angles.',
                  'Systematic coverage, no gaps.',
                  'Client-navigable file organization.',
                ],
              },
              {
                heading: 'Mapping Requirements',
                bullets: [
                  'Overlap matched to processing needs.',
                  'Constant altitude for uniform resolution.',
                  'Ground control for accuracy-critical work.',
                  'Deliverable specification agreed first.',
                ],
              },
            ],
            keyPoints: [
              'Inspection is systematic, not scenic.',
              'Organization is part of the deliverable.',
              'Mapping geometry serves the data product.',
              'Accuracy requirements are agreed before flight.',
            ],
          },
          {
            title: 'Media Production and Professional Delivery',
            minutes: 20,
            intro: [
              'Media work — real estate, events, marketing — sells smooth, intentional camera movement: slow reveals, consistent speeds, and planned paths rehearsed mentally before launch. Settings serve the edit: frame rates and resolution matched to the client\u2019s delivery format, exposure locked for consistency across takes.',
              'Professional delivery closes the loop: files organized and labeled, selects highlighted, formats per specification, and schedule commitments met. The flight is half the product — clients remember the reliability of the whole engagement, and repeat business follows the operator who makes the entire process easy.',
            ],
            sections: [
              {
                heading: 'Cinematic Discipline',
                bullets: [
                  'Slow, intentional movement beats speed.',
                  'Paths planned and rehearsed mentally.',
                  'Settings matched to the delivery format.',
                  'Exposure locked for consistent takes.',
                ],
              },
              {
                heading: 'Delivery Standards',
                bullets: [
                  'Organized, labeled files.',
                  'Format per specification.',
                  'On-time, every time.',
                ],
              },
            ],
            keyPoints: [
              'Smooth movement is the product.',
              'Settings serve the client\u2019s edit.',
              'Delivery discipline defines professionalism.',
              'Repeat business follows reliability.',
            ],
            callout: {
              variant: 'tip',
              title: 'Business habit',
              text: 'Under-promise the schedule and over-deliver the product — reputation in this industry travels by word of mouth.',
            },
          },
        ],
      },
    ],
    questions: [
      { domain: 'Mission Planning', difficulty: 'easy', q: 'Mission planning begins by defining:', choices: ['The drone color', 'The client deliverable and quality requirements', 'The lunch schedule', 'The crew uniforms'], answer: 1, why: 'Deliverables drive every downstream parameter — altitude, overlap, coverage, and timing.' },
      { domain: 'Mission Planning', difficulty: 'medium', q: 'A return-to-home altitude must be set above:', choices: ['400 feet always', 'The tallest obstacle along the return path', 'The launch point only', 'Cloud base'], answer: 1, why: 'Lost-link returns fly the set altitude — obstacle clearance along the whole path is the planning duty.' },
      { domain: 'Site Assessment and Survey', difficulty: 'medium', q: 'Which hazard is most frequently missed in site surveys?', choices: ['Buildings', 'Power lines and guy wires', 'Trees', 'Parked cars'], answer: 1, why: 'Wires vanish against backgrounds — the classic invisible strike hazard.' },
      { domain: 'Site Assessment and Survey', difficulty: 'medium', q: 'Temporary flight restrictions should be checked:', choices: ['Only during initial planning', 'Again on the day of operations', 'Only for night flights', 'Never for drones'], answer: 1, why: 'TFRs can appear with little notice — day-of verification is the professional standard.' },
      { domain: 'Risk Assessment and Mitigation', difficulty: 'easy', q: 'A risk matrix scores hazards by:', choices: ['Cost and time', 'Likelihood and severity', 'Altitude and speed', 'Crew size'], answer: 1, why: 'Likelihood times severity produces the risk rating that drives mitigation decisions.' },
      { domain: 'Risk Assessment and Mitigation', difficulty: 'medium', type: 'scenario', q: 'Your assessment finds moderate risk from people near the flight area. The best first action is:', choices: ['Accept the risk silently', 'Apply a mitigation such as relocating the launch zone, then re-score', 'Cancel all future operations', 'Fly faster'], answer: 1, why: 'Mitigate first, re-score residual risk, then decide — acceptance is the last resort, not the first.' },
      { domain: 'Preflight Procedures', difficulty: 'easy', q: 'Preflight inspections should be performed:', choices: ['From memory by experienced pilots', 'Using the checklist every time', 'Only for new aircraft', 'Weekly'], answer: 1, why: 'Checklist discipline intercepts failures on the ground regardless of experience level.' },
      { domain: 'Preflight Procedures', difficulty: 'medium', q: 'Before takeoff, the home point should be:', choices: ['Assumed correct', 'Verified against the actual position', 'Set at the client\u2019s office', 'Ignored for short flights'], answer: 1, why: 'A wrong home point turns a lost-link event into a flyaway — verify, never assume.' },
      { domain: 'Flight Execution and Crew Coordination', difficulty: 'easy', q: 'During flight, the pilot\u2019s primary visual duty is:', choices: ['The telemetry screen', 'The aircraft in the air', 'The crowd', 'The camera view'], answer: 1, why: 'Visual contact with the aircraft is the primary duty; screen fixation is the classic error.' },
      { domain: 'Flight Execution and Crew Coordination', difficulty: 'medium', q: 'When a persistent member of the public challenges an operation, the pilot flying should:', choices: ['Argue while flying', 'Let ground crew handle it and pause operations if needed', 'Fly lower to intimidate', 'Ignore all interference always'], answer: 1, why: 'The pilot\u2019s attention stays on the aircraft; ground crew manages interaction, and operations pause rather than proceed distracted.' },
      { domain: 'Emergency and Abnormal Procedures', difficulty: 'medium', q: 'On lost link, the first thing that should happen is:', choices: ['Pilot panic', 'The pre-configured failsafe executes', 'Calling the client', 'Shutting off the controller'], answer: 1, why: 'Configured failsafes act immediately; the pilot then works reacquisition methodically.' },
      { domain: 'Emergency and Abnormal Procedures', difficulty: 'medium', type: 'scenario', q: 'A battery voltage collapse warning appears mid-flight over a mixed area. The correct action is:', choices: ['Finish the shot list', 'Land immediately at the safest reachable site, prioritizing people', 'Return to home regardless of distance', 'Ascend to glide farther'], answer: 1, why: 'Power failure narrows options fast — choose the safest site while choice remains, people first.' },
      { domain: 'Data Capture and Management', difficulty: 'easy', q: 'Memory cards should be formatted only after:', choices: ['The client pays', 'Data is backed up to two locations', 'A week passes', 'The battery recharges'], answer: 1, why: 'Two verified backups precede any format — card failure after a mission is a preventable disaster.' },
      { domain: 'Data Capture and Management', difficulty: 'medium', q: 'Reviewing sample frames at full resolution on site prevents:', choices: ['Battery waste', 'Discovering focus or coverage failures after demobilizing', 'Weather changes', 'Card corruption'], answer: 1, why: 'Field verification catches quality failures while re-flying is still cheap.' },
      { domain: 'Battery and Equipment Management', difficulty: 'easy', q: 'Batteries in storage should be kept:', choices: ['Fully charged', 'At manufacturer storage charge levels', 'Fully discharged', 'In direct sunlight'], answer: 1, why: 'Storage charge — neither full nor empty — preserves lithium battery longevity.' },
      { domain: 'Battery and Equipment Management', difficulty: 'medium', q: 'A swollen flight battery should be:', choices: ['Flown gently', 'Retired from service and disposed of properly', 'Frozen overnight', 'Punctured to deflate'], answer: 1, why: 'Swelling signals internal failure and fire risk — permanent retirement is the only option.' },
      { domain: 'Public Interaction and Privacy', difficulty: 'medium', q: 'When operating over or near private property with cameras, professional practice includes:', choices: ['Capturing anything visible', 'Respecting privacy expectations and applicable rules in planning and capture', 'Flying at night to avoid notice', 'Publishing footage freely'], answer: 1, why: 'Privacy considerations shape mission planning and data handling; legality and courtesy align.' },
      { domain: 'Public Interaction and Privacy', difficulty: 'easy', q: 'The best response to a curious onlooker approaching during flight is:', choices: ['The pilot turns to chat', 'Ground crew intercepts and answers at a safe distance', 'Ignore them entirely', 'Land on their car'], answer: 1, why: 'Ground crew handles the public so the pilot\u2019s attention never leaves the aircraft.' },
      { domain: 'Program Documentation and Compliance', difficulty: 'easy', q: 'Flight logs primarily serve to:', choices: ['Impress clients', 'Document operations for regulatory, insurance, and improvement purposes', 'Track weather only', 'Replace preflight checks'], answer: 1, why: 'Logs prove professionalism to regulators and insurers and feed the improvement cycle.' },
      { domain: 'Program Documentation and Compliance', difficulty: 'medium', q: 'Effective incident reviews are:', choices: ['Focused on finding who to blame', 'Blameless analyses that find root causes and update procedures', 'Skipped for minor events', 'Verbal only'], answer: 1, why: 'Blameless review surfaces real causes; written procedure updates prevent repetition.' },
    ],
  },
]
