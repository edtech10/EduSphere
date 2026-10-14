// Compact specs for Information Technology, Cybersecurity, and
// Engineering/Robotics/Safety tracks. Expanded by catalog-compact.ts.
import type { CompactTrack } from './catalog-compact'

export const TECH_COMPACT: CompactTrack[] = [
  {
    id: 'track_digital',
    name: 'Digital Productivity Readiness',
    shortName: 'Digital Productivity',
    category: 'it',
    weeks: 10,
    description:
      'Builds workplace-ready proficiency in word processing, spreadsheets, presentations, email, and file management — the digital productivity skills every office role expects.',
    credentialFocus: 'Mapped to Microsoft Office Specialist-style competency domains',
    schoolOverview:
      'Gives schools a verifiable way to certify baseline digital productivity across an entire cohort, with per-domain readiness evidence for each student.',
    studentOverview:
      'Master the documents, spreadsheets, presentations, and email workflows used in almost every job. Practice with realistic tasks and see your readiness score grow.',
    prerequisites: 'None. Basic computer familiarity is assumed.',
    alignmentNotes:
      'Modules are mapped to Microsoft Office Specialist-style competency domains across Word, Excel, and PowerPoint, plus general file and collaboration workflows.',
    domains: [
      'Word Processing', 'Spreadsheets', 'Presentations', 'File Management',
      'Email and Calendaring', 'Document Formatting', 'Data Organization', 'Collaboration Tools',
    ],
    modules: [
      {
        title: 'Productivity Software Foundations', description: 'Orients students to the office suite ecosystem and how applications share data.',
        lessons: [
          { title: 'The Office Suite Landscape', points: ['Word processors, spreadsheets, and presentation tools each optimize a different kind of communication', 'Ribbon interfaces group commands by task: Home, Insert, Review, View', 'File formats determine compatibility: .docx, .xlsx, .pptx, and universal formats like PDF', 'Templates give consistent structure for recurring document types', 'AutoSave and version history protect work stored in cloud locations', 'Accessibility checkers flag issues before documents are shared'] },
          { title: 'Interface Navigation and Shortcuts', points: ['The Quick Access Toolbar holds personalized one-click commands', 'Keyboard shortcuts like Ctrl+C/V/Z and Ctrl+S compound into major time savings', 'Tell Me / Search boxes locate commands without memorizing menus', 'Right-click context menus surface the most relevant actions for a selection', 'Zoom, split, and freeze controls keep large documents navigable', 'Status bar indicators reveal word count, view mode, and zoom level'] },
        ],
      },
      {
        title: 'Word Processing Fundamentals', description: 'Core document creation: entering, editing, and structuring text efficiently.',
        lessons: [
          { title: 'Creating and Editing Documents', points: ['Insertion point vs. selection: editing commands act on whichever is active', 'Nonprinting characters (Show/Hide ¶) reveal spacing and formatting problems', 'Find and Replace supports whole-word and case-sensitive matching', 'Cut, copy, and paste options control whether formatting travels with content', 'Undo history allows multi-step rollback of edits', 'Headers and footers repeat identifying information on every page'] },
          { title: 'Structuring Documents Professionally', points: ['Heading styles create a navigable outline and enable automatic tables of contents', 'Lists communicate sequence (numbered) or grouping (bulleted)', 'Page and section breaks control where content starts', 'Margins, orientation, and paper size are page-setup decisions made before printing', 'Columns organize newsletters and brochures', 'Document properties carry metadata like author, title, and keywords'] },
        ],
      },
      {
        title: 'Advanced Document Formatting', description: 'Tables, images, styles, and long-document tools for polished business documents.',
        lessons: [
          { title: 'Tables, Images, and Objects', points: ['Tables organize data in rows and columns with sortable structure', 'Text wrapping options control how images sit relative to text', 'Alignment and distribution tools keep layouts balanced', 'Captions label figures and tables for reference', 'Borders and shading distinguish header rows and callouts', 'Alt text makes embedded images accessible to screen readers'] },
          { title: 'Styles, Themes, and Long Documents', points: ['Styles apply consistent formatting with one click and update globally', 'Themes coordinate fonts and colors across the whole document', 'A table of contents built from heading styles updates automatically', 'Footnotes and endnotes document sources without interrupting flow', 'Track Changes records every edit for review and acceptance', 'Compare Documents merges revisions from two versions'] },
        ],
      },
      {
        title: 'Spreadsheet Essentials', description: 'Entering, organizing, and formatting data in worksheets.',
        lessons: [
          { title: 'Worksheet Structure and Data Entry', points: ['Cells are addressed by column letter and row number (A1 notation)', 'Data types — text, numbers, dates — determine how values sort and calculate', 'Fill handle copies values or extends series like months and quarters', 'Rows and columns can be inserted, deleted, hidden, and resized', 'Multiple worksheets organize related data within one workbook', 'Freeze panes keeps headers visible while scrolling'] },
          { title: 'Formatting Data for Readability', points: ['Number formats display currency, percentages, and dates consistently', 'Cell styles distinguish headers, totals, and input areas', 'Conditional formatting highlights values that meet criteria', 'Sorting reorders records by one or more columns', 'Filtering shows only rows that meet chosen criteria', 'Print areas and page setup control how sheets appear on paper'] },
        ],
      },
      {
        title: 'Formulas, Functions, and Charts', description: 'Calculation fluency and visual data communication.',
        lessons: [
          { title: 'Formulas and Core Functions', points: ['Every formula begins with = and follows standard operator order', 'SUM, AVERAGE, COUNT, MAX, and MIN answer the most common questions', 'Relative references (A1) adjust when copied; absolute references ($A$1) stay fixed', 'IF functions return different results based on a logical test', 'Cell ranges like A1:A10 name a contiguous block of cells', 'Error values like #DIV/0! and #NAME? signal specific formula problems'] },
          { title: 'Charts and Data Visualization', points: ['Column charts compare categories; line charts show trends over time', 'Pie charts show parts of a whole — best with few slices', 'Chart titles and axis labels make visuals self-explanatory', 'Data labels display exact values on chart elements', 'Choosing the right chart type is a communication decision, not decoration', 'Charts update automatically when underlying data changes'] },
        ],
      },
      {
        title: 'Presentation Design and Delivery', description: 'Building clear, professional slide decks and presenting them effectively.',
        lessons: [
          { title: 'Building Effective Slides', points: ['One idea per slide keeps audiences focused', 'Slide layouts position titles, content, and media consistently', 'Speaker notes carry detail that does not belong on the slide', 'Images and icons support points; they should never be the point', 'Slide masters control fonts, colors, and logo placement deck-wide', 'Transitions and animations should be subtle and purposeful'] },
          { title: 'Delivering and Sharing Presentations', points: ['Presenter view shows notes and upcoming slides to the speaker only', 'Rehearse timings to fit the allotted slot', 'Exporting to PDF preserves layout on any device', 'Handouts print multiple slides per page for audiences', 'Slide Show controls (B for black screen) recover audience attention', 'Accessibility means readable font sizes and sufficient color contrast'] },
        ],
      },
      {
        title: 'Email, Calendar, and Contacts', description: 'Professional communication and time management workflows.',
        lessons: [
          { title: 'Professional Email Practice', points: ['Subject lines summarize the message and its urgency', 'CC informs; BCC protects recipient privacy', 'Reply vs. Reply All is a judgment call with real consequences', 'Signatures standardize contact information', 'Attachments should be named clearly and referenced in the message', 'Professional tone avoids slang, all caps, and ambiguous humor'] },
          { title: 'Calendars and Scheduling', points: ['Appointments, meetings, and all-day events behave differently', 'Invitations track responses: accepted, tentative, declined', 'Recurring events automate standing meetings', 'Time zones matter when scheduling across regions', 'Sharing calendars coordinates team availability', 'Reminders and categories keep priorities visible'] },
        ],
      },
      {
        title: 'File and Cloud Management', description: 'Organizing, storing, syncing, and protecting digital files.',
        lessons: [
          { title: 'File Systems and Organization', points: ['Folders create hierarchy; consistent naming creates findability', 'File extensions identify format and default application', 'Search filters locate files by name, type, or date', 'Compression (zip) packages folders for transfer', 'Shortcuts link to files without duplicating them', 'Regular cleanup of Downloads and temp files maintains performance'] },
          { title: 'Cloud Storage and Backup', points: ['Cloud sync keeps files consistent across devices', 'Shared folders carry permissions: view, comment, or edit', 'Version history restores earlier states of a document', 'Offline access requires explicit sync settings', 'The 3-2-1 rule: three copies, two media types, one offsite', 'Deleting from a synced folder deletes everywhere — recycle bins matter'] },
        ],
      },
      {
        title: 'Collaboration and Sharing Workflows', description: 'Real-time co-authoring, comments, and review cycles.',
        lessons: [
          { title: 'Co-Authoring and Comments', points: ['Real-time co-authoring shows collaborators\' cursors live', 'Comments ask questions; tracked changes propose edits', '@mentions notify specific collaborators', 'Sharing links carry permission levels that should match intent', 'Check-in/check-out prevents conflicts in shared libraries', 'Review panes consolidate all feedback for acceptance or rejection'] },
          { title: 'Review Cycles and Finalizing', points: ['A draft → review → revise → approve cycle prevents version chaos', 'Compare and combine merges edits from multiple reviewers', 'Mark as Final discourages further editing', 'Restrict editing limits what recipients can change', 'Document inspection removes hidden metadata before external sharing', 'Exported PDFs create a stable record of the approved version'] },
        ],
      },
      {
        title: 'Final Readiness Review', description: 'Consolidated review and exam-day strategy for the productivity credential.',
        lessons: [
          { title: 'Full-Track Knowledge Map', points: ['Document skills: styles, tables, headers, and review tools', 'Spreadsheet skills: functions, references, formatting, and charts', 'Presentation skills: layouts, masters, and delivery controls', 'Communication skills: email etiquette and calendar coordination', 'File skills: organization, cloud sync, and backup habits', 'Collaboration skills: sharing, comments, and review cycles'] },
          { title: 'Exam-Day Strategy and Practice Review', points: ['Performance-based exams grade completed tasks, not recalled facts', 'Read the entire task before starting — partial answers lose points', 'Use any method that works: ribbon, right-click, or shortcut', 'Skip and return to tasks that stall you', 'Save frequently during the exam session', 'Review flagged items only after completing everything else'] },
        ],
      },
    ],
    questions: [
      { domain: 'Word Processing', difficulty: 'easy', q: 'Which feature automatically repeats text such as a document title at the top of every page?', choices: ['Footnote', 'Header', 'Caption', 'Endnote'], answer: 1, why: 'Headers (and footers) repeat content in the top (or bottom) margin of every page.' },
      { domain: 'Word Processing', difficulty: 'medium', q: 'You need to replace every instance of "Q3 Report" with "Q4 Report" but only where it appears as a whole word. Which Find and Replace option do you enable?', choices: ['Match case', 'Find whole words only', 'Use wildcards', 'Match prefix'], answer: 1, why: '"Find whole words only" prevents partial matches inside longer words.' },
      { domain: 'Spreadsheets', difficulty: 'easy', q: 'Every formula in a spreadsheet begins with which character?', choices: ['#', '=', '@', '$'], answer: 1, why: 'The equals sign tells the application to evaluate what follows as a formula.' },
      { domain: 'Spreadsheets', difficulty: 'medium', q: 'The formula =SUM($A$1:$A$10) is copied from cell B1 to C5. What does the range reference become?', choices: ['$B$1:$B$10', 'A1:A10', '$A$1:$A$10', '$B$5:$B$14'], answer: 2, why: 'Dollar signs make the reference absolute, so it never changes when copied.' },
      { domain: 'Presentations', difficulty: 'easy', q: 'Which view shows the speaker their notes and the next slide while the audience sees only the current slide?', choices: ['Slide Sorter', 'Normal view', 'Presenter view', 'Reading view'], answer: 2, why: 'Presenter view gives the speaker private controls and notes during delivery.' },
      { domain: 'Presentations', difficulty: 'medium', q: 'A deck uses inconsistent fonts after multiple people edited it. Which feature standardizes fonts and colors across all slides at once?', choices: ['Format Painter', 'Slide Master', 'Transitions pane', 'Handout Master'], answer: 1, why: 'The Slide Master controls fonts, colors, and layouts for the entire deck.' },
      { domain: 'File Management', difficulty: 'easy', q: 'What does compressing a folder into a .zip file primarily accomplish?', choices: ['Encrypts the contents', 'Packages files into a single smaller file for transfer', 'Converts files to PDF', 'Deletes duplicate files'], answer: 1, why: 'Zip compression bundles multiple files into one smaller archive for easy sharing.' },
      { domain: 'File Management', difficulty: 'medium', q: 'The 3-2-1 backup rule recommends:', choices: ['3 passwords, 2 devices, 1 cloud account', '3 copies, 2 media types, 1 offsite copy', '3 folders, 2 drives, 1 archive', '3 users, 2 permissions, 1 admin'], answer: 1, why: 'Three copies on two different media with one offsite protects against most data-loss scenarios.' },
      { domain: 'Email and Calendaring', difficulty: 'easy', q: 'When should you use BCC instead of CC?', choices: ['When the message is urgent', 'When recipients should not see each other\'s addresses', 'When attaching large files', 'When scheduling a meeting'], answer: 1, why: 'BCC hides recipient addresses, protecting privacy in group messages.' },
      { domain: 'Email and Calendaring', difficulty: 'medium', q: 'A colleague in another time zone proposes a meeting. What is the best practice?', choices: ['Assume your local time applies to everyone', 'Confirm the time zone explicitly in the invitation', 'Schedule at midnight to be safe', 'Avoid recurring meetings across zones entirely'], answer: 1, why: 'Explicit time-zone confirmation prevents missed meetings; most calendar tools display converted times.' },
      { domain: 'Document Formatting', difficulty: 'easy', q: 'Which feature builds an automatic, updatable table of contents?', choices: ['Manual typed list', 'Heading styles', 'Bookmarks', 'Hyperlinks'], answer: 1, why: 'Tables of contents are generated from heading styles and update as headings change.' },
      { domain: 'Document Formatting', difficulty: 'medium', q: 'Why add alt text to images in a document?', choices: ['It compresses the image', 'Screen readers announce it to users who cannot see the image', 'It improves print quality', 'It speeds up saving'], answer: 1, why: 'Alt text is the accessibility description assistive technology reads aloud.' },
      { domain: 'Data Organization', difficulty: 'easy', q: 'Which spreadsheet feature displays only rows meeting criteria you choose, without deleting other rows?', choices: ['Sort', 'Filter', 'Conditional formatting', 'Freeze panes'], answer: 1, why: 'Filtering temporarily hides non-matching rows while preserving all data.' },
      { domain: 'Data Organization', difficulty: 'medium', q: 'You want all overdue invoices in a column to appear red automatically. Which tool does this?', choices: ['Cell styles', 'Conditional formatting', 'Data validation', 'Text wrap'], answer: 1, why: 'Conditional formatting applies formatting when cell values meet defined rules.' },
      { domain: 'Collaboration Tools', difficulty: 'easy', q: 'In a shared document, what is the difference between a comment and a tracked change?', choices: ['Comments delete text; tracked changes add text', 'Comments ask or discuss; tracked changes propose specific edits', 'They are identical features', 'Comments are private; tracked changes are public'], answer: 1, why: 'Comments hold discussion; tracked changes record actual proposed edits for acceptance.' },
      { domain: 'Collaboration Tools', difficulty: 'medium', q: 'Before sending a shared workbook to an external partner, what should you check?', choices: ['That all fonts are decorative', 'The document inspector for hidden metadata and the sharing link\'s permission level', 'That animations are enabled', 'That the file is at least 10 MB'], answer: 1, why: 'Hidden metadata can leak internal information, and link permissions control what outsiders can do.' },
    ],
  },
  {
    id: 'track_itsupport',
    name: 'IT Support Readiness',
    shortName: 'IT Support',
    category: 'it',
    weeks: 14,
    description:
      'Prepares students for entry-level IT support roles: hardware, operating systems, troubleshooting method, networking basics, security hygiene, and help desk practice.',
    credentialFocus: 'Mapped to CompTIA A+/Tech+/Google IT Support-style competency domains',
    schoolOverview:
      'A structured pathway into IT careers with troubleshooting simulations and ticket-based practice — plus readiness documentation for work-based learning coordinators.',
    studentOverview:
      'Learn how computers, networks, and operating systems actually work, practice the troubleshooting method professionals use, and prove you are ready for a help desk or support role.',
    prerequisites: 'None. General computer use experience is helpful.',
    alignmentNotes:
      'Modules map to CompTIA A+/Tech+ and Google IT Support-style competency domains: hardware, operating systems, networking, security, operational procedures, and troubleshooting methodology.',
    domains: [
      'Hardware Components', 'Operating Systems', 'Troubleshooting Methodology', 'Networking Basics',
      'Security Fundamentals', 'Mobile and Peripheral Devices', 'Command-Line Tools', 'Customer Service and Ticketing',
      'Virtualization and Cloud Concepts',
    ],
    modules: [
      {
        title: 'Computing Foundations', description: 'How computers process, store, and move information.',
        lessons: [
          { title: 'How Computers Work', points: ['The CPU executes instructions; clock speed and core count shape performance', 'RAM holds active data; it clears when power is lost', 'Storage (SSD/HDD) retains data persistently', 'The motherboard connects every component and peripheral', 'Input, processing, output, and storage describe every computing task', 'Firmware/BIOS/UEFI initializes hardware before the OS loads'] },
          { title: 'Number Systems and Data', points: ['Binary represents all data as 0s and 1s', 'A byte is 8 bits; storage scales through KB, MB, GB, TB', 'Hexadecimal compactly represents binary values in memory addresses and color codes', 'ASCII and Unicode map characters to numeric values', 'Data transfer rates use bits per second; storage uses bytes', 'Understanding units prevents misreading specs and capacity reports'] },
        ],
      },
      {
        title: 'Hardware Components', description: 'Identifying, installing, and maintaining PC components.',
        lessons: [
          { title: 'Inside the Case', points: ['The PSU converts wall power to the voltages components need', 'CPU cooling — heatsinks, fans, thermal paste — prevents thermal throttling', 'RAM installs in matched slots for dual-channel performance', 'Expansion slots (PCIe) add GPUs, network cards, and storage controllers', 'Drive interfaces include SATA and the faster NVMe over M.2', 'Cable management improves airflow and serviceability'] },
          { title: 'Safe Handling and Upgrades', points: ['ESD wrist straps and mats prevent static damage to components', 'Power down and unplug before any internal work', 'Document cable and screw locations during disassembly', 'Compatibility checks: socket, chipset, form factor, wattage headroom', 'POST beep codes and diagnostic LEDs indicate boot failures', 'Firmware updates fix hardware-level bugs and add support'] },
        ],
      },
      {
        title: 'Operating Systems', description: 'Installing, configuring, and maintaining Windows and other desktop OSs.',
        lessons: [
          { title: 'Installation and Configuration', points: ['Clean install vs. upgrade: wipe-and-load vs. in-place preservation', 'Partitions divide a drive; formatting creates the file system (NTFS, exFAT)', 'Device drivers let the OS communicate with hardware', 'Windows Update delivers security patches and feature updates', 'User accounts separate privileges and personal data', 'System Restore snapshots allow rollback after bad changes'] },
          { title: 'Everyday Administration', points: ['Task Manager reveals CPU, memory, disk, and network usage per process', 'Services run background tasks; misconfigured startups slow boot', 'File Explorer options control extensions and hidden items', 'Settings vs. Control Panel: modern vs. legacy configuration surfaces', 'macOS and Linux desktops share the same concepts with different tools', 'Safe mode loads minimal drivers for diagnosis'] },
        ],
      },
      {
        title: 'Troubleshooting Methodology', description: 'The six-step professional troubleshooting process applied to real tickets.',
        lessons: [
          { title: 'The Six-Step Method', points: ['Step 1: Identify the problem — gather symptoms and user context', 'Step 2: Establish a theory of probable cause', 'Step 3: Test the theory; if wrong, escalate or re-theorize', 'Step 4: Establish a plan of action considering impact', 'Step 5: Implement the solution, one change at a time', 'Step 6: Verify full functionality and document findings'] },
          { title: 'Troubleshooting Simulations', points: ['"No display" tickets: check power, cable, input source, then GPU/RAM', '"No internet": isolate device vs. network vs. ISP with other devices', 'Slow performance: check startup programs, disk space, and thermal state', 'Printer failures: queue jams, drivers, and connectivity in that order', 'Blue screens: note stop codes and recent changes first', 'Documenting each test prevents repeating work and supports escalation'] },
        ],
      },
      {
        title: 'Networking Basics', description: 'How devices connect, address, and communicate on networks.',
        lessons: [
          { title: 'Network Devices and Media', points: ['Switches connect devices within a LAN; routers connect networks', 'Access points extend networks wirelessly', 'Ethernet cable categories (Cat5e/Cat6) determine speed capability', 'Modems translate between ISP signal and local network', 'Patch panels and wall jacks structure office cabling', 'PoE delivers power and data over one cable to cameras and APs'] },
          { title: 'Addressing and Core Protocols', points: ['IPv4 addresses use four octets (192.168.1.10); IPv6 uses hexadecimal groups', 'DHCP assigns addresses automatically; static addresses are set manually', 'DNS translates names to IP addresses', 'Default gateways forward traffic destined for other networks', 'NAT lets many devices share one public IP', 'ping and ipconfig/ifconfig are the first diagnostic commands'] },
        ],
      },
      {
        title: 'Security Fundamentals', description: 'Core threats, defenses, and security hygiene for support technicians.',
        lessons: [
          { title: 'Threats and Malware', points: ['Malware types: viruses, worms, trojans, ransomware, spyware', 'Phishing tricks users into revealing credentials or running payloads', 'Social engineering exploits people rather than technology', 'Indicators: pop-ups, slowness, unknown processes, disabled antivirus', 'Quarantine isolates suspected files; remediation removes and patches', 'User education is the cheapest effective control'] },
          { title: 'Defensive Practices', points: ['Least privilege: users get only the access their role requires', 'MFA blocks most credential-theft attacks', 'Strong passwords plus managers beat memorized weak ones', 'Firewalls filter traffic by port and application', 'Encryption protects data at rest and in transit', 'Patching closes the vulnerabilities exploits target'] },
        ],
      },
      {
        title: 'Mobile and Peripheral Devices', description: 'Laptops, mobile devices, printers, and common peripherals.',
        lessons: [
          { title: 'Laptops and Mobile Devices', points: ['Laptop parts are often proprietary; check service manuals before opening', 'Battery health cycles and calibration affect runtime', 'Mobile OS management: updates, app permissions, and device encryption', 'Sync and account configuration for email on phones', 'Hotspots and tethering share cellular data', 'Screen and digitizer replacement is the most common mobile repair'] },
          { title: 'Printers and Peripherals', points: ['Laser vs. inkjet: toner vs. ink, volume vs. photo quality', 'Printer sharing via network or print server', 'Driver issues cause most printing failures', 'Scanner and multifunction device configuration', 'USB-C, HDMI, DisplayPort: matching ports, cables, and adapters', 'KVM switches share peripherals across computers'] },
        ],
      },
      {
        title: 'Command-Line Tools', description: 'Essential CLI commands for diagnosis and administration.',
        lessons: [
          { title: 'Windows Command-Line Essentials', points: ['ipconfig shows address, gateway, and DNS configuration', 'ping tests reachability; tracert shows the path', 'sfc /scannow repairs corrupted system files', 'chkdsk checks disk integrity', 'tasklist and taskkill manage processes from the shell', 'dir, cd, copy, and robocopy handle files'] },
          { title: 'Concept Checks and Scripting Basics', points: ['Command-line tools are scriptable — repeatable and documentable', 'nslookup verifies DNS resolution directly', 'netstat reveals active connections and listening ports', 'Batch and PowerShell scripts automate repetitive fixes', 'Elevated prompts (Run as administrator) are required for system changes', 'Reading command output carefully is a core diagnostic skill'] },
        ],
      },
      {
        title: 'Customer Service and Ticketing', description: 'Professional support communication and ticket lifecycle management.',
        lessons: [
          { title: 'Help Desk Communication', points: ['Active listening: let the user fully describe the issue first', 'Avoid jargon; translate technical findings into plain language', 'Set expectations for timelines and next steps', 'Stay calm with frustrated users — de-escalate before diagnosing', 'Confirm the fix with the user before closing', 'Professional tone applies in chat and email, not just voice'] },
          { title: 'Ticket Workflows', points: ['Tickets capture contact, category, description, and priority', 'Severity reflects business impact, not user volume', 'Escalation tiers route issues to appropriate expertise', 'Knowledge-base articles turn solved tickets into self-service', 'SLAs define response and resolution targets', 'Clear documentation lets any technician pick up the ticket'] },
        ],
      },
      {
        title: 'Final Readiness Review', description: 'Full-track consolidation and timed-exam preparation.',
        lessons: [
          { title: 'Support Technician Knowledge Map', points: ['Hardware: components, compatibility, safe handling', 'Operating systems: install, configure, update, restore', 'Method: six steps, one change at a time, document everything', 'Networking: devices, addressing, DNS, DHCP, first commands', 'Security: threats, least privilege, MFA, patching', 'Service: communication, tickets, escalation, SLAs'] },
          { title: 'Timed-Exam Strategy', points: ['Performance scenarios reward methodical reading of the ticket', 'Eliminate physically impossible answers first', 'Most-troubleshooting questions test the method order', 'Flag and revisit; do not stall on one scenario', 'Watch for "FIRST" and "NEXT" in question stems', 'Review your weakest domain the day before, not everything'] },
        ],
      },
    ],
    questions: [
      { domain: 'Hardware Components', difficulty: 'easy', q: 'Which component supplies regulated power to all internal PC components?', choices: ['Motherboard', 'PSU', 'CPU', 'BIOS'], answer: 1, why: 'The power supply unit converts AC wall power to the DC voltages components require.' },
      { domain: 'Hardware Components', difficulty: 'medium', q: 'Before upgrading RAM, which three compatibility factors must you check?', choices: ['Color, brand, and price', 'Type (DDR generation), speed support, and available slots', 'Case size, fan count, and cable length', 'Operating system, monitor, and keyboard'], answer: 1, why: 'RAM must match the motherboard\'s supported generation, speed, and physical slots.' },
      { domain: 'Operating Systems', difficulty: 'easy', q: 'Which Windows tool shows CPU and memory usage per running process?', choices: ['File Explorer', 'Task Manager', 'Control Panel', 'Disk Management'], answer: 1, why: 'Task Manager lists processes with live CPU, memory, disk, and network usage.' },
      { domain: 'Operating Systems', difficulty: 'medium', q: 'A PC fails to boot after a driver update. Which startup option loads minimal drivers so you can roll back?', choices: ['Normal startup', 'Safe mode', 'Sleep mode', 'Fast startup'], answer: 1, why: 'Safe mode loads a minimal driver set, enabling diagnosis and rollback of bad updates.' },
      { domain: 'Troubleshooting Methodology', difficulty: 'easy', q: 'What is the FIRST step of the troubleshooting method?', choices: ['Test the theory', 'Identify the problem', 'Establish a plan', 'Document findings'], answer: 1, why: 'Diagnosis always begins by identifying the problem and gathering symptoms.' },
      { domain: 'Troubleshooting Methodology', difficulty: 'hard', type: 'scenario', q: 'A user reports "no internet." You confirm their Wi-Fi is connected. Other devices on the same network reach the internet normally. What is the BEST next step?', choices: ['Replace the router', 'Reinstall the operating system', 'Test the theory by checking the device\'s IP configuration', 'Call the ISP immediately'], answer: 2, why: 'Since other devices work, the cause is local to this device — verify IP/DHCP configuration next.' },
      { domain: 'Networking Basics', difficulty: 'easy', q: 'Which device connects multiple devices within a single LAN?', choices: ['Modem', 'Switch', 'Firewall', 'DNS server'], answer: 1, why: 'Switches forward frames between devices on the same local network.' },
      { domain: 'Networking Basics', difficulty: 'medium', q: 'Which protocol automatically assigns IP addresses to devices joining a network?', choices: ['DNS', 'DHCP', 'NAT', 'HTTP'], answer: 1, why: 'DHCP leases IP addresses, gateways, and DNS settings automatically.' },
      { domain: 'Security Fundamentals', difficulty: 'easy', q: 'An email claims your password expired and links to a look-alike login page. This is an example of:', choices: ['Ransomware', 'Phishing', 'A DDoS attack', 'A rootkit'], answer: 1, why: 'Phishing uses deceptive messages and fake pages to steal credentials.' },
      { domain: 'Security Fundamentals', difficulty: 'medium', q: 'Which control most directly blocks stolen-password account takeovers?', choices: ['Screen locks', 'Multi-factor authentication', 'Cable locks', 'Spam filters'], answer: 1, why: 'MFA requires a second factor, so a stolen password alone cannot grant access.' },
      { domain: 'Mobile and Peripheral Devices', difficulty: 'easy', q: 'Most printing failures reported to help desks trace back to:', choices: ['Monitor settings', 'Driver or queue issues', 'Keyboard faults', 'BIOS settings'], answer: 1, why: 'Corrupt drivers and stuck print queues cause the majority of printing tickets.' },
      { domain: 'Mobile and Peripheral Devices', difficulty: 'medium', q: 'Which connector carries video, data, and charging power over a single reversible plug?', choices: ['HDMI', 'USB-A', 'USB-C', 'RJ-45'], answer: 2, why: 'USB-C supports DisplayPort alt-mode video, data, and power delivery in one connector.' },
      { domain: 'Command-Line Tools', difficulty: 'easy', q: 'Which command displays a Windows PC\'s IP address, subnet mask, and default gateway?', choices: ['ping', 'ipconfig', 'tracert', 'chkdsk'], answer: 1, why: 'ipconfig reports the adapter\'s full IP configuration.' },
      { domain: 'Command-Line Tools', difficulty: 'medium', q: 'Which command repairs corrupted Windows system files?', choices: ['sfc /scannow', 'dir /s', 'netstat -a', 'tasklist'], answer: 0, why: 'System File Checker (sfc /scannow) scans and repairs protected system files.' },
      { domain: 'Customer Service and Ticketing', difficulty: 'easy', q: 'When a frustrated user contacts the help desk, what should the technician do first?', choices: ['Immediately remote into their machine', 'Let the user fully describe the issue and de-escalate calmly', 'Quote the SLA and end the call', 'Escalate to tier 2 without diagnosis'], answer: 1, why: 'Active listening and calm de-escalation come before any technical step.' },
      { domain: 'Customer Service and Ticketing', difficulty: 'medium', q: 'Why does every ticket need clear documentation of tests performed?', choices: ['To bill the user correctly', 'So any technician can continue the work without repeating steps', 'To inflate ticket counts', 'Documentation is optional in practice'], answer: 1, why: 'Documentation enables handoffs, escalation, and knowledge-base reuse.' },
      { domain: 'Virtualization and Cloud Concepts', difficulty: 'easy', q: 'What does a hypervisor do?', choices: ['Cools the CPU', 'Runs multiple virtual machines on one physical host', 'Encrypts network traffic', 'Assigns IP addresses'], answer: 1, why: 'A hypervisor virtualizes hardware so multiple VMs share one physical machine.' },
      { domain: 'Virtualization and Cloud Concepts', difficulty: 'medium', q: 'Which cloud service model provides virtual servers and storage while the customer manages the OS and applications?', choices: ['SaaS', 'PaaS', 'IaaS', 'DaaS'], answer: 2, why: 'IaaS provides infrastructure; the customer manages everything above the hypervisor.' },
    ],
  },
  {
    id: 'track_network',
    name: 'Networking Readiness',
    shortName: 'Networking',
    category: 'it',
    weeks: 14,
    description:
      'Covers network models, addressing, switching, routing, wireless, and network services — the foundation for networking credentials and infrastructure roles.',
    credentialFocus: 'Mapped to Cisco CCST Networking/Network+-style competency domains',
    schoolOverview:
      'Equips networking pathways with diagram-labeling practice, addressing drills, and readiness evidence that aligns with entry networking credentials.',
    studentOverview:
      'Learn how networks are designed, addressed, and secured — from cabling and switching to IP subnetting and wireless — with diagrams, drills, and a timed final practice test.',
    prerequisites: 'IT Support-level familiarity with computers and basic networks recommended.',
    alignmentNotes:
      'Mapped to Cisco CCST Networking and Network+-style competency domains: models and standards, addressing, infrastructure, network operations, and security basics.',
    domains: [
      'Network Models and Standards', 'IP Addressing and Subnetting', 'Switching', 'Routing',
      'Wireless Networks', 'Network Services', 'Network Security', 'Cabling and Topology',
      'Network Troubleshooting',
    ],
    modules: [
      {
        title: 'Network Models and Standards', description: 'OSI and TCP/IP models as shared language for network work.',
        lessons: [
          { title: 'The OSI Model', points: ['Seven layers: Physical, Data Link, Network, Transport, Session, Presentation, Application', 'Each layer serves the one above and relies on the one below', 'Troubleshooting by layer isolates problems systematically', 'Encapsulation wraps data in headers as it descends the stack', 'Devices live at layers: switches at L2, routers at L3', 'Mnemonics keep the order straight under exam pressure'] },
          { title: 'TCP/IP and Encapsulation', points: ['The TCP/IP suite condenses OSI into four practical layers', 'Segments, packets, and frames are data at different layers', 'Port numbers identify services: 80 HTTP, 443 HTTPS, 25 SMTP', 'TCP is connection-oriented with acknowledgments; UDP is fast and connectionless', 'Standards bodies (IEEE, IETF) publish the protocols', 'Model fluency turns vague symptoms into layer-specific tests'] },
        ],
      },
      {
        title: 'IP Addressing and Subnetting', description: 'IPv4/IPv6 addressing, subnet masks, and network division.',
        lessons: [
          { title: 'IPv4 Addressing in Depth', points: ['32 bits in four octets; each octet ranges 0–255', 'Network portion vs. host portion, divided by the subnet mask', 'Private ranges: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16', 'Loopback 127.0.0.1 tests the local stack', 'APIPA 169.254.x.x signals DHCP failure', 'Broadcast addresses reach every host on a subnet'] },
          { title: 'Subnetting Practice', points: ['Borrowing host bits creates more, smaller networks', '/24 gives 254 usable hosts; each borrowed bit halves hosts', 'CIDR notation counts network bits directly', 'Valid host ranges exclude network and broadcast addresses', 'Subnetting drills: given a requirement, choose the mask', 'IPv6 uses 128-bit hexadecimal addresses with prefix length'] },
        ],
      },
      {
        title: 'Switching', description: 'How switches forward frames and build reliable LANs.',
        lessons: [
          { title: 'Switch Operation', points: ['Switches learn MAC addresses by observing source frames', 'MAC address tables map addresses to ports with aging timers', 'Unknown destinations are flooded; known ones are forwarded', 'Full-duplex eliminates collisions on modern links', 'Store-and-forward checks frame integrity before forwarding', 'Auto-negotiation settles speed and duplex between devices'] },
          { title: 'VLANs and Segmentation', points: ['VLANs divide one physical switch into multiple logical networks', 'Access ports carry one VLAN; trunk ports carry many (802.1Q tags)', 'Segmentation improves security and contains broadcast traffic', 'Voice VLANs prioritize phone traffic on shared drops', 'Inter-VLAN communication requires a router or L3 switch', 'Documenting VLAN assignments prevents outages during changes'] },
        ],
      },
      {
        title: 'Routing', description: 'How routers move packets between networks.',
        lessons: [
          { title: 'Routing Fundamentals', points: ['Routers forward packets between different networks', 'Routing tables list destinations and next hops', 'Static routes are manual; dynamic protocols learn automatically', 'Default routes catch traffic with no specific match', 'The longest-prefix-match rule picks the most specific route', 'Each router hop decrements TTL, preventing loops'] },
          { title: 'Routing Protocols and NAT', points: ['OSPF is a link-state protocol for internal networks', 'Distance-vector protocols like RIP share routing tables periodically', 'NAT translates private addresses to public ones', 'Port forwarding exposes internal services deliberately', 'First-hop redundancy keeps gateways available', 'show ip route is the first command when paths fail'] },
        ],
      },
      {
        title: 'Wireless Networks', description: 'Wi-Fi standards, security, and deployment practice.',
        lessons: [
          { title: 'Wi-Fi Standards and Design', points: ['802.11 generations (n/ac/ax) trade range for throughput', '2.4 GHz travels farther; 5/6 GHz carry more data with less congestion', 'Channels overlap in 2.4 GHz; use 1, 6, 11', 'SSIDs identify networks; one AP can host several', 'Site surveys map coverage and interference', 'Placement, power, and antenna orientation shape coverage'] },
          { title: 'Wireless Security', points: ['WPA2 and WPA3 encrypt wireless traffic; WEP is broken', 'Strong passphrases protect pre-shared-key networks', 'Enterprise mode authenticates users individually (802.1X)', 'Guest networks isolate visitors from internal resources', 'Rogue APs mimic legitimate networks to harvest credentials', 'Disabling WPS closes a common brute-force path'] },
        ],
      },
      {
        title: 'Network Services', description: 'DHCP, DNS, and the services networks exist to deliver.',
        lessons: [
          { title: 'DHCP and DNS Operations', points: ['DHCP leases follow discover, offer, request, acknowledge', 'Reservations pin addresses to specific devices', 'DNS resolution: recursive queries, caching, and record types', 'A records map names to IPv4; AAAA to IPv6; CNAME aliases names', 'MX records direct email; PTR records reverse lookups', 'Flushing caches fixes stale-resolution symptoms'] },
          { title: 'Application Services and Ports', points: ['Web: HTTP 80, HTTPS 443 with TLS certificates', 'Email: SMTP 25/587, IMAP 143, POP3 110', 'File transfer: FTP 20/21, SFTP over SSH 22', 'Remote access: SSH 22, RDP 3389', 'Time sync via NTP keeps logs comparable', 'Port knowledge turns "the app is down" into targeted tests'] },
        ],
      },
      {
        title: 'Network Security', description: 'Firewalls, segmentation, and defense-in-depth for networks.',
        lessons: [
          { title: 'Firewalls and Filtering', points: ['Firewalls permit or deny traffic by rule sets', 'Stateful inspection tracks connections, not just packets', 'Default-deny posture permits only what is needed', 'DMZs isolate public-facing servers from internal networks', 'ACLs on routers filter by address, protocol, and port', 'Logging denied traffic reveals probing and attacks'] },
          { title: 'Network Defense Maps', points: ['Defense in depth layers controls: perimeter, network, host, application', 'IDS detects; IPS blocks inline', 'VPNs encrypt traffic across untrusted networks', 'Segmentation limits lateral movement after a breach', 'Network diagrams annotate trust boundaries and control points', 'Regular rule review removes stale, risky permissions'] },
        ],
      },
      {
        title: 'Cabling and Topology', description: 'Physical media, connectors, and network layout patterns.',
        lessons: [
          { title: 'Copper and Fiber Media', points: ['Twisted-pair categories: Cat5e gigabit, Cat6/6a ten-gigabit at distance limits', '100-meter maximum for copper Ethernet runs', 'Fiber types: multimode for buildings, single-mode for distance', 'Connectors: RJ-45 for copper, LC/SC for fiber', 'Plenum-rated cable is required in air-handling spaces', 'Cable testers verify continuity, pairs, and length'] },
          { title: 'Topologies and Documentation', points: ['Star topology dominates LANs; mesh increases resilience', 'Physical vs. logical topology: wiring vs. traffic flow', 'WAN links connect sites via fiber, copper, or wireless', 'Rack elevations and port maps speed every future change', 'Label both ends of every cable, every time', 'Diagram accuracy is an operational requirement, not decoration'] },
        ],
      },
      {
        title: 'Network Troubleshooting', description: 'Systematic diagnosis from physical layer up.',
        lessons: [
          { title: 'Layered Diagnosis Method', points: ['Start at Layer 1: cables, link lights, power', 'Verify addressing: ipconfig, gateway reachability', 'Test name resolution separately from connectivity', 'ping gateway, then internet IP, then domain name', 'tracert/traceroute localizes where paths break', 'Swap known-good components to isolate failures'] },
          { title: 'Tools and Scenario Drills', points: ['Cable testers, tone generators, and loopback plugs for physical faults', 'Wi-Fi analyzers reveal channel congestion', 'Packet captures show exactly what crosses the wire', 'Scenario: one user down vs. whole VLAN down vs. whole site', 'Scenario: intermittent wireless — interference, roaming, or capacity', 'Document the fix in the ticket and the knowledge base'] },
        ],
      },
      {
        title: 'Final Readiness Review', description: 'Consolidated networking review and timed-exam strategy.',
        lessons: [
          { title: 'Networking Knowledge Map', points: ['Models: OSI/TCP-IP layers, encapsulation, ports', 'Addressing: IPv4/IPv6, masks, subnetting drills', 'Switching: MAC learning, VLANs, trunks', 'Routing: tables, protocols, NAT, default routes', 'Wireless: standards, channels, WPA2/WPA3', 'Operations: DHCP, DNS, firewalls, layered troubleshooting'] },
          { title: 'Exam-Day Strategy', points: ['Subnetting speed comes from drilled bit patterns, not calculators', 'Diagram questions reward labeling each layer deliberately', 'Scenario stems hide the failing layer in symptom wording', 'Memorize the common port table cold', 'Flag long scenarios; bank quick wins first', 'Review wrong answers from practice — they map your gaps'] },
        ],
      },
    ],
    questions: [
      { domain: 'Network Models and Standards', difficulty: 'easy', q: 'At which OSI layer do routers primarily operate?', choices: ['Layer 1', 'Layer 2', 'Layer 3', 'Layer 7'], answer: 2, why: 'Routers forward packets based on Layer 3 (Network) addresses.' },
      { domain: 'Network Models and Standards', difficulty: 'medium', q: 'Which protocol is connection-oriented and guarantees delivery order?', choices: ['UDP', 'TCP', 'ICMP', 'ARP'], answer: 1, why: 'TCP establishes connections and acknowledges segments; UDP sends without guarantees.' },
      { domain: 'IP Addressing and Subnetting', difficulty: 'medium', q: 'How many usable host addresses does a /24 network provide?', choices: ['256', '254', '255', '252'], answer: 1, why: '256 addresses minus the network and broadcast addresses leaves 254 usable.' },
      { domain: 'IP Addressing and Subnetting', difficulty: 'hard', type: 'scenario', q: 'A host shows address 169.254.42.10. What does this indicate?', choices: ['The host has a valid public address', 'DHCP assignment failed and the host self-assigned an APIPA address', 'The DNS server is down', 'The switch port is disabled'], answer: 1, why: '169.254.0.0/16 is the APIPA range used when no DHCP lease is obtained.' },
      { domain: 'Switching', difficulty: 'easy', q: 'How does a switch learn which MAC address lives on which port?', choices: ['From DNS queries', 'By examining source addresses of incoming frames', 'From DHCP leases', 'From ARP broadcasts it generates'], answer: 1, why: 'Switches build MAC tables by recording the source address of frames per port.' },
      { domain: 'Switching', difficulty: 'medium', q: 'Which port type carries traffic for multiple VLANs using 802.1Q tags?', choices: ['Access port', 'Trunk port', 'Console port', 'Mirror port'], answer: 1, why: 'Trunk ports tag frames with VLAN IDs to carry many VLANs over one link.' },
      { domain: 'Routing', difficulty: 'easy', q: 'What does a router use to choose a packet\'s next hop?', choices: ['MAC address table', 'Routing table', 'ARP cache', 'DHCP pool'], answer: 1, why: 'Routing tables map destination networks to next hops.' },
      { domain: 'Routing', difficulty: 'medium', q: 'When multiple routes match a destination, which wins?', choices: ['The route learned first', 'The longest (most specific) prefix match', 'The route with the highest metric', 'The default route'], answer: 1, why: 'Longest-prefix match always selects the most specific route.' },
      { domain: 'Wireless Networks', difficulty: 'easy', q: 'Which wireless security standard should be avoided entirely because it is broken?', choices: ['WPA2', 'WPA3', 'WEP', '802.1X'], answer: 2, why: 'WEP encryption is trivially crackable and must not be used.' },
      { domain: 'Wireless Networks', difficulty: 'medium', q: 'Which three channels are the standard non-overlapping choices in 2.4 GHz?', choices: ['1, 5, 9', '1, 6, 11', '2, 7, 12', '3, 8, 13'], answer: 1, why: 'Channels 1, 6, and 11 do not overlap in the 2.4 GHz band.' },
      { domain: 'Network Services', difficulty: 'easy', q: 'Which DNS record type maps a hostname to an IPv4 address?', choices: ['MX', 'CNAME', 'A', 'PTR'], answer: 2, why: 'A records map names to IPv4 addresses; PTR reverses the lookup.' },
      { domain: 'Network Services', difficulty: 'medium', q: 'Which port does HTTPS use by default?', choices: ['80', '443', '25', '3389'], answer: 1, why: 'HTTPS uses TCP 443; HTTP uses 80.' },
      { domain: 'Network Security', difficulty: 'easy', q: 'What is the purpose of a DMZ?', choices: ['Speed up internal traffic', 'Isolate public-facing servers from the internal network', 'Assign IP addresses', 'Block all outbound email'], answer: 1, why: 'A DMZ exposes selected servers publicly while protecting internal systems.' },
      { domain: 'Network Security', difficulty: 'medium', q: 'What distinguishes an IPS from an IDS?', choices: ['IPS encrypts traffic; IDS does not', 'IPS sits inline and blocks; IDS only detects and alerts', 'IPS is wireless-only', 'There is no difference'], answer: 1, why: 'Intrusion Prevention Systems block traffic inline; Detection Systems alert passively.' },
      { domain: 'Cabling and Topology', difficulty: 'easy', q: 'What is the maximum recommended length for a copper Ethernet run?', choices: ['50 meters', '100 meters', '200 meters', '500 meters'], answer: 1, why: 'Copper Ethernet standards specify a 100-meter channel limit.' },
      { domain: 'Cabling and Topology', difficulty: 'medium', q: 'Which cable type is required in air-handling (plenum) spaces?', choices: ['PVC-jacketed cable', 'Plenum-rated cable', 'Coaxial cable', 'Shielded flat cable'], answer: 1, why: 'Plenum-rated jackets resist fire and emit less toxic smoke, as codes require.' },
      { domain: 'Network Troubleshooting', difficulty: 'medium', type: 'scenario', q: 'A user cannot reach any website by name, but pinging 8.8.8.8 succeeds. Where is the problem?', choices: ['Physical cabling', 'DNS resolution', 'The default gateway', 'The switch VLAN'], answer: 1, why: 'IP connectivity works but names fail — the fault is in DNS, not the path.' },
      { domain: 'Network Troubleshooting', difficulty: 'easy', q: 'What is the FIRST thing to check when a wired device has no network connection?', choices: ['Reinstall the OS', 'Link lights and cable seating', 'DNS records', 'Firewall rules'], answer: 1, why: 'Troubleshooting starts at Layer 1: physical connections and link indicators.' },
    ],
  },
  {
    id: 'track_cloud',
    name: 'Cloud Foundations Readiness',
    shortName: 'Cloud Foundations',
    category: 'it',
    weeks: 10,
    description:
      'Introduces cloud service models, deployment models, core compute/storage/networking services, pricing, and shared security responsibility.',
    credentialFocus: 'Mapped to Azure/AWS cloud fundamentals-style competency domains',
    schoolOverview:
      'Gives every technology pathway a common cloud vocabulary and readiness evidence for the most requested entry-level cloud credentials.',
    studentOverview:
      'Understand what the cloud actually is, how services are billed and secured, and how the major building blocks fit together — then validate it with practice exams.',
    prerequisites: 'None. IT Support-level concepts are helpful.',
    alignmentNotes:
      'Mapped to Azure Fundamentals and AWS Cloud Practitioner-style domains: cloud concepts, core services, security and compliance, and pricing and support.',
    domains: [
      'Cloud Concepts', 'Service Models', 'Deployment Models', 'Compute Services',
      'Storage Services', 'Cloud Networking', 'Security and Compliance', 'Pricing and Support',
    ],
    modules: [
      {
        title: 'Why Cloud', description: 'The business and technical case for cloud computing.',
        lessons: [
          { title: 'Cloud Characteristics and Benefits', points: ['On-demand self-service provisions resources in minutes', 'Elasticity scales capacity up and down with demand', 'Pay-as-you-go converts capital expense to operating expense', 'Global reach places workloads near users', 'Agility shortens the idea-to-deployment cycle', 'High availability comes from redundant design, not luck'] },
          { title: 'CapEx vs. OpEx and Shared Responsibility', points: ['Capital expenditure buys hardware up front; operating expense pays as consumed', 'Cloud shifts undifferentiated infrastructure work to the provider', 'The shared responsibility model divides security duties by service model', 'Customers always own their data, identities, and access policies', 'Providers secure the physical facilities and hardware', 'Understanding the boundary prevents dangerous assumptions'] },
        ],
      },
      {
        title: 'Service Models', description: 'IaaS, PaaS, and SaaS — what each provides and manages.',
        lessons: [
          { title: 'IaaS, PaaS, SaaS Compared', points: ['IaaS provides virtualized compute, storage, and networking', 'PaaS provides managed runtimes; customers deploy code only', 'SaaS delivers complete applications over the internet', 'Control decreases and convenience increases up the stack', 'Email service is classic SaaS; virtual machines are classic IaaS', 'Choosing a model is a control-versus-convenience trade'] },
          { title: 'Choosing the Right Model', points: ['Lift-and-shift migrations usually start as IaaS', 'New applications often target PaaS to skip server management', 'Commodity functions (email, CRM) default to SaaS', 'Hybrid approaches mix models per workload', 'Vendor lock-in grows with managed services — weigh portability', 'Cost profiles differ: idle VMs bill continuously; serverless bills per use'] },
        ],
      },
      {
        title: 'Deployment Models', description: 'Public, private, hybrid, and multi-cloud architectures.',
        lessons: [
          { title: 'Public, Private, and Hybrid', points: ['Public cloud shares provider infrastructure across customers', 'Private cloud dedicates infrastructure to one organization', 'Hybrid connects both, keeping sensitive systems close', 'Community cloud serves organizations with shared requirements', 'Regulatory needs often drive private or hybrid choices', 'Consistent management tooling matters in hybrid estates'] },
          { title: 'Regions, Zones, and Resilience', points: ['Regions are geographic clusters of data centers', 'Availability zones are isolated facilities within a region', 'Deploying across zones survives facility failures', 'Multi-region design survives regional outages', 'Data residency rules may dictate allowed regions', 'Latency goals place workloads near users'] },
        ],
      },
      {
        title: 'Compute Services', description: 'Virtual machines, containers, and serverless computing.',
        lessons: [
          { title: 'Virtual Machines and Scaling', points: ['VMs come in families tuned for compute, memory, or storage', 'Images capture configured disks for repeatable deployment', 'Scale sets add or remove instances with load', 'Right-sizing prevents paying for idle capacity', 'Spot/preemptible instances trade interruption risk for deep discounts', 'Load balancers distribute traffic across healthy instances'] },
          { title: 'Containers and Serverless', points: ['Containers package apps with their dependencies, portably', 'Orchestrators (Kubernetes-style) schedule and heal containers', 'Serverless functions run code on events with per-invocation billing', 'No servers to patch does not mean no responsibility', 'Cold starts and duration limits shape serverless design', 'The compute spectrum runs VM → container → function'] },
        ],
      },
      {
        title: 'Storage Services', description: 'Object, block, and file storage plus data lifecycle.',
        lessons: [
          { title: 'Storage Types', points: ['Object storage holds unstructured data at massive scale', 'Block storage attaches to VMs as virtual disks', 'File shares provide SMB/NFS-style shared folders', 'Hot, cool, and archive tiers trade access speed for cost', 'Durability replicates data across facilities', 'Choosing the wrong tier quietly doubles a storage bill'] },
          { title: 'Data Lifecycle and Protection', points: ['Lifecycle policies move data between tiers automatically', 'Versioning protects against accidental overwrites', 'Encryption at rest is the default expectation', 'Backup differs from replication — plan for both', 'Retention locks support compliance requirements', 'Soft delete windows allow recovery from mistakes'] },
        ],
      },
      {
        title: 'Cloud Networking', description: 'Virtual networks, connectivity, and content delivery.',
        lessons: [
          { title: 'Virtual Networks and Connectivity', points: ['Virtual networks segment customer environments logically', 'Subnets divide address space with routing and security rules', 'VPNs and dedicated links connect on-premises networks', 'Public vs. private endpoints control exposure', 'DNS services map names inside and outside the cloud', 'Network security groups filter traffic to resources'] },
          { title: 'Delivery at the Edge', points: ['CDNs cache content near users to cut latency', 'Global load balancing routes users to healthy regions', 'DDoS protection absorbs attacks at provider scale', 'Peering connects virtual networks directly', 'Bandwidth egress often carries the surprise costs', 'Monitoring flow logs reveals actual traffic patterns'] },
        ],
      },
      {
        title: 'Security and Compliance', description: 'Identity, encryption, and governance in the cloud.',
        lessons: [
          { title: 'Identity and Access', points: ['Identity is the primary security perimeter in cloud', 'MFA and conditional access protect sign-ins', 'Role-based access control grants least privilege', 'Service identities let applications authenticate securely', 'Just-in-time elevation limits standing admin rights', 'Regular access reviews remove stale permissions'] },
          { title: 'Compliance and Governance', points: ['Providers publish compliance certifications customers inherit partially', 'Policy-as-code enforces allowed regions, SKUs, and tags', 'Tagging enables cost allocation and ownership tracking', 'Encryption keys can be provider- or customer-managed', 'Audit logs answer who changed what, when', 'Compliance is shared: provider platform, customer configuration'] },
        ],
      },
      {
        title: 'Pricing and Support', description: 'Cost mechanics, calculators, and support tiers.',
        lessons: [
          { title: 'Cost Mechanics', points: ['Compute bills per second/hour of running resources', 'Storage bills per GB per month plus operations', 'Egress — data leaving the cloud — often costs most', 'Pricing calculators estimate before deployment', 'Budgets and alerts catch overruns early', 'Reservations and savings plans discount committed usage'] },
          { title: 'Cost Optimization and Support', points: ['Delete orphaned disks and idle VMs first', 'Auto-shutdown schedules stop dev environments overnight', 'Right-sizing matches instance size to measured load', 'Support tiers trade cost for response time', 'SLAs define uptime percentages and credits', 'Total cost of ownership includes staff time, not just invoices'] },
        ],
      },
      {
        title: 'Monitoring and Cloud Operations', description: 'Observing, logging, and operating cloud workloads reliably.',
        lessons: [
          { title: 'Monitoring and Alerts', points: ['Metrics quantify health: CPU, memory, latency, error rates', 'Dashboards surface the few numbers that matter per service', 'Alerts fire on thresholds before users notice problems', 'Logs capture events; centralized log search speeds diagnosis', 'Uptime is measured against the SLA percentage', 'Status pages communicate incidents transparently'] },
          { title: 'Operations and Automation', points: ['Infrastructure as code defines environments in reviewable files', 'Repeatable deployments beat manual console clicking', 'Auto-remediation restarts failed services automatically', 'Tagging standards make resources attributable', 'Change windows and rollbacks reduce deployment risk', 'Runbooks document responses to known incidents'] },
        ],
      },
      {
        title: 'Final Readiness Review', description: 'Consolidated cloud review and exam strategy.',
        lessons: [
          { title: 'Cloud Knowledge Map', points: ['Concepts: elasticity, agility, CapEx vs. OpEx', 'Models: IaaS/PaaS/SaaS and public/private/hybrid', 'Compute: VMs, containers, serverless, scaling', 'Storage: object/block/file, tiers, lifecycle', 'Networking: VNets, endpoints, CDN, egress', 'Security and cost: identity, shared responsibility, pricing levers'] },
          { title: 'Exam-Day Strategy', points: ['Fundamentals exams test vocabulary precision — know exact definitions', 'Scenario stems signal the model: "no server management" means PaaS or serverless', 'Shared responsibility questions hinge on the service model', 'Eliminate answers that promise the provider manages your data access', 'Cost questions usually target egress or idle resources', 'Flag and revisit long scenarios after banking quick definitions'] },
        ],
      },
    ],
    questions: [
      { domain: 'Cloud Concepts', difficulty: 'easy', q: 'Which cloud characteristic adjusts capacity automatically as demand changes?', choices: ['Elasticity', 'Latency', 'Serialization', 'Virtualization'], answer: 0, why: 'Elasticity is the ability to scale resources up and down with demand.' },
      { domain: 'Cloud Concepts', difficulty: 'medium', q: 'Cloud computing primarily converts IT spending from:', choices: ['OpEx to CapEx', 'CapEx to OpEx', 'Fixed cost to licensing', 'Labor to hardware'], answer: 1, why: 'Pay-as-you-go cloud replaces up-front capital purchases with operating expense.' },
      { domain: 'Service Models', difficulty: 'easy', q: 'A company uses a web-based email application with nothing to install or manage. This is:', choices: ['IaaS', 'PaaS', 'SaaS', 'On-premises'], answer: 2, why: 'Complete applications delivered over the internet are Software as a Service.' },
      { domain: 'Service Models', difficulty: 'medium', type: 'scenario', q: 'A team wants to deploy code without managing servers, patching, or runtimes. Which model fits best?', choices: ['IaaS', 'PaaS', 'Colocation', 'Bare metal'], answer: 1, why: 'PaaS provides managed runtimes so teams deploy code without server management.' },
      { domain: 'Deployment Models', difficulty: 'easy', q: 'An organization keeps sensitive databases in its own data center but runs its website in the public cloud. This is:', choices: ['Public cloud', 'Private cloud', 'Hybrid cloud', 'Community cloud'], answer: 2, why: 'Hybrid combines private infrastructure with public cloud services.' },
      { domain: 'Deployment Models', difficulty: 'medium', q: 'Availability zones exist primarily to:', choices: ['Reduce egress costs', 'Survive the failure of a single facility within a region', 'Speed up DNS', 'Increase storage capacity'], answer: 1, why: 'Zones are isolated facilities; deploying across them tolerates facility-level failure.' },
      { domain: 'Compute Services', difficulty: 'easy', q: 'Which compute option bills per invocation and requires no server management?', choices: ['Virtual machines', 'Serverless functions', 'Dedicated hosts', 'Containers on VMs'], answer: 1, why: 'Serverless functions run on events with per-use billing and no server administration.' },
      { domain: 'Compute Services', difficulty: 'medium', q: 'What is the main cost advantage of spot/preemptible instances?', choices: ['They never get interrupted', 'Deep discounts in exchange for possible interruption', 'Free storage included', 'No egress charges'], answer: 1, why: 'Spare capacity is sold cheaply but can be reclaimed by the provider.' },
      { domain: 'Storage Services', difficulty: 'easy', q: 'Which storage type is best for massive amounts of unstructured data like images and backups?', choices: ['Block storage', 'Object storage', 'Local SSD', 'RAM disk'], answer: 1, why: 'Object storage scales practically without limit for unstructured data.' },
      { domain: 'Storage Services', difficulty: 'medium', q: 'What do lifecycle policies automate?', choices: ['User account creation', 'Moving data between hot, cool, and archive tiers', 'VM scaling', 'Certificate renewal'], answer: 1, why: 'Lifecycle rules transition or expire data automatically to control storage cost.' },
      { domain: 'Cloud Networking', difficulty: 'easy', q: 'What does a CDN primarily improve?', choices: ['Database consistency', 'Content latency by caching near users', 'Identity security', 'Billing accuracy'], answer: 1, why: 'Content delivery networks cache content at edge locations close to users.' },
      { domain: 'Cloud Networking', difficulty: 'medium', q: 'Which cloud network charge most often surprises new customers?', choices: ['Inbound data transfer', 'Outbound (egress) data transfer', 'DNS queries within the region', 'Private IP allocation'], answer: 1, why: 'Egress — data leaving the provider — carries per-GB fees that accumulate quickly.' },
      { domain: 'Security and Compliance', difficulty: 'easy', q: 'In the shared responsibility model, what does the customer ALWAYS manage?', choices: ['Physical data center security', 'Their data and identity access policies', 'Hypervisor patching', 'Network hardware'], answer: 1, why: 'Data, identities, and access remain the customer\'s responsibility in every model.' },
      { domain: 'Security and Compliance', difficulty: 'medium', q: 'Which practice grants users only the permissions their role requires?', choices: ['Defense in depth', 'Least privilege', 'Zero downtime', 'Load balancing'], answer: 1, why: 'Least privilege minimizes the blast radius of compromised or misused accounts.' },
      { domain: 'Pricing and Support', difficulty: 'easy', q: 'What is the FIRST cost action for an account with runaway spend?', choices: ['Buy reservations immediately', 'Delete idle VMs and orphaned disks', 'Upgrade the support tier', 'Move all data to archive tier'], answer: 1, why: 'Idle resources are the most common waste; remove them before optimizing rates.' },
      { domain: 'Pricing and Support', difficulty: 'medium', q: 'What do reservations and savings plans require in exchange for discounts?', choices: ['Multi-year data contracts', 'Committed usage over a term', 'Premium support purchase', 'Dedicated hardware'], answer: 1, why: 'Committing to a usage level for one or three years earns significant discounts.' },
    ],
  },
  {
    id: 'track_dbweb',
    name: 'Database and Web Foundations Readiness',
    shortName: 'Database & Web',
    category: 'it',
    weeks: 12,
    description:
      'Introduces relational databases, SQL fundamentals, HTML/CSS structure, and JavaScript basics — the combined data and web foundation for IT specialist credentials.',
    credentialFocus: 'Mapped to entry-level IT specialist competency domains (data concepts, HTML/CSS, JavaScript basics)',
    schoolOverview:
      'A dual data-and-web foundation that feeds both IT and software pathways, with artifact-based practice and clear readiness evidence per domain.',
    studentOverview:
      'Learn how data is stored and queried, and how web pages are structured, styled, and made interactive — the two skill sets behind almost every technology career.',
    prerequisites: 'None. Digital Productivity-level computer fluency recommended.',
    alignmentNotes:
      'Mapped to entry-level IT specialist competency domains: core data concepts, relational databases and SQL, HTML/CSS document structure and styling, and foundational JavaScript.',
    domains: [
      'Data Concepts', 'Relational Design', 'SQL Queries', 'HTML Structure',
      'CSS Styling', 'JavaScript Basics', 'Web Forms and Validation', 'Data Integrity and Security',
    ],
    modules: [
      {
        title: 'Data Concepts', description: 'How organizations store, structure, and use data.',
        lessons: [
          { title: 'Types and Roles of Data', points: ['Structured data fits tables; unstructured data includes documents and media', 'Records are rows; fields are columns; values live in cells', 'Data types constrain values: text, number, date, boolean', 'Metadata describes data: format, source, and update time', 'Databases centralize data so many applications share one truth', 'Data quality dimensions: accuracy, completeness, consistency, timeliness'] },
          { title: 'Databases vs. Spreadsheets', points: ['Spreadsheets suit ad-hoc analysis; databases suit shared, concurrent use', 'Databases enforce types, relationships, and integrity rules', 'Concurrent access control prevents conflicting edits', 'Transactions group changes so they succeed or fail together', 'Queries retrieve exactly the needed slice at scale', 'Choosing the right tool prevents fragile workflows'] },
        ],
      },
      {
        title: 'Relational Design', description: 'Tables, keys, and relationships that keep data consistent.',
        lessons: [
          { title: 'Tables, Keys, and Relationships', points: ['Primary keys uniquely identify each row', 'Foreign keys reference primary keys in other tables', 'One-to-many relationships dominate business data (customers → orders)', 'Many-to-many relationships need junction tables', 'Nulls represent unknown values — handle them deliberately', 'ER diagrams sketch entities and relationships before building'] },
          { title: 'Normalization Basics', points: ['Normalization removes redundant storage of the same fact', 'First normal form: atomic values, no repeating groups', 'Second normal form: every column depends on the whole key', 'Third normal form: no transitive dependencies', 'Denormalization trades purity for read performance, deliberately', 'Design reviews catch redundancy before data accumulates'] },
        ],
      },
      {
        title: 'SQL Queries', description: 'Reading and writing SELECT statements with filtering, sorting, and joins.',
        lessons: [
          { title: 'SELECT, WHERE, ORDER BY', points: ['SELECT chooses columns; FROM names the table', 'WHERE filters rows with comparisons and logic', 'ORDER BY sorts ascending or descending', 'LIMIT/TOP caps returned rows', 'DISTINCT removes duplicate rows', 'Aliases rename columns and tables for readability'] },
          { title: 'Joins and Aggregation', points: ['INNER JOIN keeps matching rows from both tables', 'LEFT JOIN keeps all left rows, with nulls where no match', 'GROUP BY buckets rows for aggregate functions', 'COUNT, SUM, AVG, MIN, MAX summarize grouped data', 'HAVING filters groups after aggregation', 'Reading queries aloud in plain language verifies intent'] },
        ],
      },
      {
        title: 'HTML Structure', description: 'Semantic markup that gives web documents meaning.',
        lessons: [
          { title: 'Document Anatomy', points: ['HTML elements nest to form a document tree', 'The head carries metadata; the body carries content', 'Headings h1–h6 create document hierarchy', 'Paragraphs, lists, and links are the core content elements', 'Attributes configure elements: href, src, alt', 'Comments document intent without rendering'] },
          { title: 'Semantic and Accessible Markup', points: ['Semantic elements (header, nav, main, article, footer) describe purpose', 'Alt text describes images for screen readers and failed loads', 'Form labels associate text with inputs', 'Tables are for tabular data, not layout', 'Landmarks let assistive technology jump between regions', 'Validators catch structural errors before browsers do'] },
        ],
      },
      {
        title: 'CSS Styling', description: 'Selectors, the box model, and layout systems.',
        lessons: [
          { title: 'Selectors and the Cascade', points: ['Element, class, and ID selectors target progressively narrower sets', 'Specificity resolves conflicting rules', 'Inheritance passes text properties down the tree', 'External stylesheets keep presentation separate from content', 'Colors, fonts, and spacing carry the visual identity', 'Developer tools reveal which rules actually applied'] },
          { title: 'Box Model and Layout', points: ['Every element is a box: content, padding, border, margin', 'display: block vs. inline controls flow behavior', 'Flexbox aligns items along one axis', 'Grid places items in two dimensions', 'Media queries adapt layout to screen size', 'Consistent spacing scales create visual rhythm'] },
        ],
      },
      {
        title: 'JavaScript Basics', description: 'Variables, logic, and functions that make pages interactive.',
        lessons: [
          { title: 'Variables, Types, and Logic', points: ['let and const declare variables; const prevents reassignment', 'Core types: string, number, boolean, array, object', 'Conditionals branch execution on true/false tests', 'Loops repeat work over collections', 'Operators compare (===) and combine (&&, ||) values', 'console.log is the first debugging tool'] },
          { title: 'Functions and the DOM', points: ['Functions package reusable logic with inputs and outputs', 'Parameters make functions flexible; returns give results back', 'The DOM represents the page as objects JavaScript can change', 'querySelector finds elements; textContent and value read/write them', 'Event listeners run code on clicks, input, and submission', 'Small functions with clear names stay maintainable'] },
        ],
      },
      {
        title: 'Web Forms and Validation', description: 'Collecting user input correctly and safely.',
        lessons: [
          { title: 'Building Forms', points: ['Inputs come in types: text, email, number, date, checkbox, radio', 'name attributes define the keys submitted to the server', 'required, min, max, and pattern declare basic rules', 'Placeholder hints never replace labels', 'Grouping related fields with fieldset and legend aids comprehension', 'Submit buttons trigger the form\'s action'] },
          { title: 'Validation Strategy', points: ['Client-side validation gives instant feedback', 'Server-side validation is the security boundary — never skip it', 'Error messages should say what to fix and how', 'Validate format, presence, and range separately', 'Sanitizing input prevents injection attacks', 'Test forms with bad data, not just good data'] },
        ],
      },
      {
        title: 'Data Integrity and Security', description: 'Protecting data quality and confidentiality.',
        lessons: [
          { title: 'Integrity Constraints', points: ['NOT NULL and UNIQUE constraints enforce completeness and identity', 'Check constraints validate values at the database boundary', 'Referential integrity blocks orphan foreign keys', 'Transactions make multi-step changes atomic', 'Backups and tested restores protect against loss', 'Audit columns track creation and modification'] },
          { title: 'Data Security Basics', points: ['Least privilege limits accounts to needed operations', 'Parameterized queries prevent SQL injection', 'Encryption protects data in transit and at rest', 'Backups stored offline survive ransomware', 'Access logs reveal unusual query patterns', 'Never store passwords in plain text — hash them'] },
        ],
      },
      {
        title: 'Development Tools and Workflow', description: 'The toolchain behind database and web work: editors, browsers, and version control.',
        lessons: [
          { title: 'Editors, Browsers, and DevTools', points: ['Code editors provide syntax highlighting, linting, and autocomplete', 'Browser developer tools inspect HTML, CSS, and network traffic live', 'The console surfaces JavaScript errors and log output', 'Breakpoints pause execution to inspect variable values', 'View Source shows the delivered markup, not the live DOM', 'Local servers replicate production behavior during development'] },
          { title: 'Version Control Basics', points: ['Version control records every change with author and message', 'Commits are snapshots; small, frequent commits are safest', 'Branches isolate work until it is ready to merge', 'Pulling and pushing synchronize with shared remotes', 'Merge conflicts resolve by choosing or combining edits', 'Commit messages explain why, not just what'] },
        ],
      },
      {
        title: 'Final Readiness Review', description: 'Consolidated data-and-web review and exam preparation.',
        lessons: [
          { title: 'Data & Web Knowledge Map', points: ['Data: types, quality, databases vs. spreadsheets', 'Design: keys, relationships, normalization', 'SQL: SELECT, WHERE, JOIN, GROUP BY', 'HTML: semantic structure and accessibility', 'CSS: cascade, box model, flex and grid', 'JavaScript: variables, logic, functions, DOM'] },
          { title: 'Exam-Day Strategy', points: ['Read SQL questions by translating them to plain English', 'Markup questions often hinge on which element is semantic', 'Trace code line by line — write down variable values', 'Watch for === vs. = traps in logic questions', 'Answer every question; blanks score zero', 'Review your practice mistakes grouped by domain'] },
        ],
      },
    ],
    questions: [
      { domain: 'Data Concepts', difficulty: 'easy', q: 'Which is an example of structured data?', choices: ['A photograph', 'A table of customer records', 'A voicemail recording', 'A handwritten note'], answer: 1, why: 'Structured data fits a defined table/schema; media and free text are unstructured.' },
      { domain: 'Data Concepts', difficulty: 'medium', q: 'Which database property lets many users edit shared data without corrupting each other\'s work?', choices: ['Concurrent access control with transactions', 'Larger file size', 'Color-coded cells', 'AutoSave'], answer: 0, why: 'Databases coordinate concurrent edits with locking and transactions; spreadsheets cannot.' },
      { domain: 'Relational Design', difficulty: 'easy', q: 'What does a primary key guarantee?', choices: ['The table is encrypted', 'Each row can be uniquely identified', 'Queries run faster', 'Data is backed up'], answer: 1, why: 'A primary key uniquely identifies every row in a table.' },
      { domain: 'Relational Design', difficulty: 'medium', q: 'Students and classes have a many-to-many relationship. How is it modeled?', choices: ['A foreign key in Students', 'A junction (linking) table between them', 'A comma-separated list column', 'Two primary keys in Classes'], answer: 1, why: 'Junction tables hold pairs of foreign keys to represent many-to-many relationships.' },
      { domain: 'SQL Queries', difficulty: 'easy', q: 'Which SQL clause filters which rows are returned?', choices: ['SELECT', 'WHERE', 'ORDER BY', 'FROM'], answer: 1, why: 'WHERE restricts rows by condition; SELECT chooses columns.' },
      { domain: 'SQL Queries', difficulty: 'medium', type: 'scenario', q: 'You need each region\'s total sales. Which SQL features do you combine?', choices: ['WHERE and LIMIT', 'GROUP BY and SUM', 'DISTINCT and ORDER BY', 'JOIN and HAVING only'], answer: 1, why: 'GROUP BY buckets rows per region; SUM aggregates each bucket\'s sales.' },
      { domain: 'HTML Structure', difficulty: 'easy', q: 'Which element should wrap the main content of a page for accessibility?', choices: ['<div>', '<main>', '<span>', '<body> only'], answer: 1, why: 'The <main> landmark tells assistive technology where primary content lives.' },
      { domain: 'HTML Structure', difficulty: 'medium', q: 'Why is the alt attribute on images important?', choices: ['It speeds up loading', 'Screen readers announce it and it displays if the image fails', 'It is required for CSS', 'It improves SEO ranking only'], answer: 1, why: 'Alt text serves users who cannot see the image and appears when images fail.' },
      { domain: 'CSS Styling', difficulty: 'easy', q: 'In the box model, which layer sits between content and border?', choices: ['Margin', 'Padding', 'Outline', 'Shadow'], answer: 1, why: 'The order is content → padding → border → margin.' },
      { domain: 'CSS Styling', difficulty: 'medium', q: 'Which layout system places items in two dimensions (rows and columns)?', choices: ['Flexbox', 'Grid', 'Float', 'Inline-block'], answer: 1, why: 'CSS Grid is the two-dimensional layout system; Flexbox is one-dimensional.' },
      { domain: 'JavaScript Basics', difficulty: 'easy', q: 'Which declaration prevents a variable from being reassigned?', choices: ['var', 'let', 'const', 'function'], answer: 2, why: 'const creates a binding that cannot be reassigned.' },
      { domain: 'JavaScript Basics', difficulty: 'medium', q: 'What does document.querySelector("#total") return?', choices: ['All elements with class total', 'The first element with id "total"', 'Every input on the page', 'A string containing "total"'], answer: 1, why: 'querySelector returns the first element matching the CSS selector; # targets an id.' },
      { domain: 'Web Forms and Validation', difficulty: 'easy', q: 'Why must validation also run on the server when client-side validation exists?', choices: ['Servers are faster', 'Client-side checks can be bypassed; the server is the security boundary', 'HTML requires it', 'Browsers ignore required attributes'], answer: 1, why: 'Users can bypass browser validation, so the server must verify everything.' },
      { domain: 'Web Forms and Validation', difficulty: 'medium', q: 'Which attribute defines the key a field\'s value is submitted under?', choices: ['id', 'name', 'class', 'placeholder'], answer: 1, why: 'The name attribute becomes the key in submitted form data.' },
      { domain: 'Data Integrity and Security', difficulty: 'easy', q: 'How do parameterized queries protect a database?', choices: ['They encrypt the tables', 'They separate code from data, preventing SQL injection', 'They speed up joins', 'They require stronger passwords'], answer: 1, why: 'Parameters are never executed as SQL, so injected input cannot alter the query.' },
      { domain: 'Data Integrity and Security', difficulty: 'medium', q: 'What does referential integrity prevent?', choices: ['Duplicate table names', 'Foreign keys pointing to nonexistent rows', 'Slow queries', 'Unencrypted connections'], answer: 1, why: 'Referential integrity blocks orphan references between tables.' },
    ],
  },
  {
    id: 'track_cyberfound',
    name: 'Cybersecurity Foundations Readiness',
    shortName: 'Cybersecurity Foundations',
    category: 'cybersecurity',
    weeks: 12,
    description:
      'Builds the security mindset: threats, vulnerabilities, defenses, access control, and safe digital practice — the entry point to every cybersecurity pathway.',
    credentialFocus: 'Mapped to Cisco CCST Cybersecurity-style competency domains',
    schoolOverview:
      'Establishes a security baseline across your technology students with phishing-triage and risk-ranking practice, plus readiness documentation per domain.',
    studentOverview:
      'Learn how attacks actually work and how defenders stop them. Practice spotting phishing, ranking risks, and applying the controls professionals rely on.',
    prerequisites: 'None. IT Support-level concepts are helpful.',
    alignmentNotes:
      'Mapped to Cisco CCST Cybersecurity-style competency domains: security principles, threats and vulnerabilities, network and endpoint security, and security operations basics.',
    domains: [
      'Security Principles', 'Threats and Attack Types', 'Vulnerabilities and Risk', 'Access Control',
      'Cryptography Basics', 'Network Security Concepts', 'Endpoint Protection', 'Security Operations',
    ],
    modules: [
      {
        title: 'Security Principles', description: 'The CIA triad and the principles behind every security decision.',
        lessons: [
          { title: 'The CIA Triad', points: ['Confidentiality: only authorized parties read the data', 'Integrity: data is accurate and unaltered', 'Availability: systems work when needed', 'Every control serves at least one leg of the triad', 'Trade-offs are real: maximal confidentiality can hurt availability', 'Exam scenarios ask which property an attack violated'] },
          { title: 'Defense in Depth and Least Privilege', points: ['Layered controls ensure no single failure is fatal', 'Physical, network, host, application, and data layers each contribute', 'Least privilege grants only the access a role requires', 'Separation of duties prevents one person completing fraud alone', 'Need-to-know limits even authorized roles', 'Default-deny is safer than default-allow'] },
        ],
      },
      {
        title: 'Threats and Attack Types', description: 'The attack catalog: malware, phishing, and network attacks.',
        lessons: [
          { title: 'Malware and Social Engineering', points: ['Viruses attach to programs; worms self-propagate across networks', 'Trojans pose as legitimate software', 'Ransomware encrypts files and demands payment', 'Spyware harvests keystrokes and credentials quietly', 'Phishing, vishing, and smishing exploit the human layer', 'Pretexting builds a believable story to extract information'] },
          { title: 'Network and Application Attacks', points: ['DoS/DDoS overwhelm services with traffic', 'Man-in-the-middle intercepts communications', 'SQL injection smuggles commands through input fields', 'Cross-site scripting injects scripts into pages others view', 'Password attacks: brute force, spraying, credential stuffing', 'Zero-days exploit unpatched, unknown vulnerabilities'] },
        ],
      },
      {
        title: 'Vulnerabilities and Risk', description: 'Identifying weaknesses and ranking risk rationally.',
        lessons: [
          { title: 'Vulnerability Concepts', points: ['A vulnerability is a weakness; a threat exploits it; risk is likelihood × impact', 'Unpatched software is the most common doorway', 'Misconfiguration exposes more systems than exotic exploits', 'CVE identifiers catalog known vulnerabilities', 'Scanners enumerate weaknesses before attackers do', 'Penetration testing validates defenses safely and legally'] },
          { title: 'Risk Ranking Practice', points: ['Rate likelihood and impact separately, then combine', 'Critical data plus easy exploit equals immediate action', 'Some risks are accepted, transferred, or mitigated — decide explicitly', 'A risk register documents decisions and owners', 'Ranked backlogs beat panic-driven patching', 'Business context determines what "critical" means'] },
        ],
      },
      {
        title: 'Access Control', description: 'Authentication, authorization, and accounting in practice.',
        lessons: [
          { title: 'Authentication Factors', points: ['Something you know: passwords and PINs', 'Something you have: tokens, phones, smart cards', 'Something you are: biometrics', 'MFA combines factors from different categories', 'Password managers enable unique, strong credentials', 'Passkeys replace passwords with phishing-resistant cryptography'] },
          { title: 'Authorization and Account Hygiene', points: ['Authorization decides what an authenticated identity may do', 'Role-based access control assigns permissions to roles, not people', 'Onboarding, transfer, and offboarding must update access', 'Dormant accounts are attack surface — disable them', 'Privileged accounts need extra monitoring and MFA', 'Access reviews recertify permissions on a schedule'] },
        ],
      },
      {
        title: 'Cryptography Basics', description: 'Encryption, hashing, and certificates explained practically.',
        lessons: [
          { title: 'Encryption and Hashing', points: ['Symmetric encryption uses one shared key — fast but hard to distribute', 'Asymmetric encryption uses public/private key pairs', 'Hashing is one-way; it verifies integrity and stores passwords', 'Salting defeats rainbow-table attacks on password hashes', 'TLS encrypts web traffic using certificates', 'Encryption protects data at rest, in transit, and increasingly in use'] },
          { title: 'Certificates and Trust', points: ['Certificates bind a public key to an identity', 'Certificate authorities vouch for certificates', 'The padlock means encrypted channel, not honest site', 'Expired or mismatched certificates trigger browser warnings', 'Self-signed certificates have no third-party trust', 'HTTPS protects content from eavesdropping and tampering'] },
        ],
      },
      {
        title: 'Network Security Concepts', description: 'Firewalls, segmentation, VPNs, and wireless security.',
        lessons: [
          { title: 'Perimeter and Segmentation', points: ['Firewalls filter traffic by rules', 'DMZs host public services apart from internal networks', 'VLANs segment internal traffic by trust level', 'NAC verifies devices before granting network access', 'Honeypots detect attackers by offering fake targets', 'Zero trust verifies every request, inside or outside'] },
          { title: 'VPNs and Wireless Defense', points: ['VPN tunnels encrypt traffic over untrusted networks', 'Site-to-site VPNs connect offices; remote-access VPNs connect people', 'WPA2/WPA3 secure Wi-Fi; WEP is obsolete', 'Guest networks isolate visitors', 'Rogue access points impersonate legitimate Wi-Fi', 'Strong passphrases and disabled WPS close common holes'] },
        ],
      },
      {
        title: 'Endpoint Protection', description: 'Securing devices where users and data meet.',
        lessons: [
          { title: 'Malware Defenses on Devices', points: ['Antivirus/EDR detect known signatures and suspicious behavior', 'Application allowlisting runs only approved software', 'Full-disk encryption protects lost and stolen devices', 'Host firewalls block unsolicited inbound connections', 'Patching the OS and applications closes exploited holes', 'Removable media policies limit a classic infection path'] },
          { title: 'Safe User Practices', points: ['Lock screens when stepping away', 'Verify unexpected requests through a second channel', 'Report suspicious messages instead of deleting them', 'Separate work and personal accounts and data', 'Public Wi-Fi requires a VPN for sensitive work', 'Backups make ransomware an inconvenience, not a catastrophe'] },
        ],
      },
      {
        title: 'Security Operations', description: 'Monitoring, logging, and the first response to incidents.',
        lessons: [
          { title: 'Monitoring and Logs', points: ['Logs record authentication, changes, and network flows', 'SIEM platforms correlate events across systems', 'Baselines define normal so anomalies stand out', 'Alert fatigue is real — tune rules to signal over noise', 'Time synchronization makes cross-system correlation possible', 'Retention policies balance investigation needs and storage cost'] },
          { title: 'First Response Steps', points: ['Confirm and classify the incident before acting', 'Contain first: isolate affected systems', 'Preserve evidence — do not wipe prematurely', 'Communicate per the escalation matrix', 'Document a timeline from first alert onward', 'Post-incident review converts pain into improvement'] },
        ],
      },
      {
        title: 'Governance, Risk, and Compliance Basics', description: 'How organizations organize security decisions, policies, and accountability.',
        lessons: [
          { title: 'Policies and Accountability', points: ['Security policies set the rules everyone answers to', 'Acceptable use, password, and data handling policies are the core trio', 'Roles and responsibilities make security someone’s job, not everyone’s afterthought', 'Policies without enforcement are suggestions', 'Exceptions need documented approval and expiry dates', 'Policy review cycles keep rules current with threats'] },
          { title: 'Risk and Compliance Basics', points: ['Risk registers track identified risks, owners, and treatment', 'Compliance maps controls to obligations like privacy regulations', 'Data classification drives handling rules', 'Vendor risk matters — third parties hold your data', 'Awareness training turns policy into behavior', 'Metrics and reporting keep leadership engaged'] },
        ],
      },
      {
        title: 'Final Readiness Review', description: 'Consolidated security review and exam preparation.',
        lessons: [
          { title: 'Security Knowledge Map', points: ['Principles: CIA triad, defense in depth, least privilege', 'Threats: malware families, phishing, network attacks', 'Risk: likelihood × impact, registers, treatment options', 'Access: factors, MFA, RBAC, account hygiene', 'Crypto: symmetric vs. asymmetric, hashing, certificates', 'Operations: monitoring, containment, evidence, timelines'] },
          { title: 'Exam-Day Strategy', points: ['Identify which CIA property a scenario violates before answering', 'Distinguish detection (IDS, logs) from prevention (IPS, firewall)', 'Authentication questions hinge on factor categories', '"FIRST" and "BEST" stems test process order, not just facts', 'Eliminate answers that violate least privilege', 'Practice phishing triage until the red flags are reflexive'] },
        ],
      },
    ],
    questions: [
      { domain: 'Security Principles', difficulty: 'easy', q: 'Ransomware encrypting a hospital\'s records primarily violates which CIA property?', choices: ['Confidentiality', 'Integrity', 'Availability', 'Authentication'], answer: 2, why: 'Encrypted, unusable records are unavailable — an availability attack.' },
      { domain: 'Security Principles', difficulty: 'medium', q: 'Why does separation of duties reduce fraud?', choices: ['It doubles staffing', 'No single person can complete a fraudulent transaction alone', 'It encrypts financial data', 'It removes the need for audits'], answer: 1, why: 'Splitting critical steps across people requires collusion, which sharply raises difficulty.' },
      { domain: 'Threats and Attack Types', difficulty: 'easy', q: 'Which malware self-replicates across networks without attaching to a host program?', choices: ['Virus', 'Worm', 'Trojan', 'Spyware'], answer: 1, why: 'Worms propagate on their own; viruses need a host program.' },
      { domain: 'Threats and Attack Types', difficulty: 'medium', type: 'scenario', q: 'An employee gets a text claiming to be from IT, asking them to verify their password via a link. This attack is:', choices: ['Vishing', 'Smishing', 'Whaling', 'Pharming'], answer: 1, why: 'Phishing delivered by SMS text message is smishing.' },
      { domain: 'Vulnerabilities and Risk', difficulty: 'easy', q: 'Risk is best described as:', choices: ['A weakness in software', 'Likelihood × impact of a threat exploiting a vulnerability', 'Any hacker activity', 'The cost of antivirus software'], answer: 1, why: 'Risk combines how likely exploitation is with how bad the result would be.' },
      { domain: 'Vulnerabilities and Risk', difficulty: 'medium', q: 'What is a CVE identifier?', choices: ['A type of firewall rule', 'A public catalog entry for a known vulnerability', 'An encryption standard', 'A password policy'], answer: 1, why: 'CVEs uniquely catalog publicly known vulnerabilities for tracking and patching.' },
      { domain: 'Access Control', difficulty: 'easy', q: 'A fingerprint scan is which authentication factor?', choices: ['Something you know', 'Something you have', 'Something you are', 'Somewhere you are'], answer: 2, why: 'Biometrics are "something you are."' },
      { domain: 'Access Control', difficulty: 'medium', q: 'Why does MFA require factors from DIFFERENT categories?', choices: ['It looks more secure', 'Two factors of the same type share the same weaknesses', 'Regulations require exactly two', 'Different categories are faster'], answer: 1, why: 'Two passwords can both be phished; a password plus a phone cannot.' },
      { domain: 'Cryptography Basics', difficulty: 'easy', q: 'Hashing differs from encryption because hashing:', choices: ['Is faster', 'Is one-way and cannot be decrypted', 'Uses larger keys', 'Requires certificates'], answer: 1, why: 'Hashes are irreversible digests; encryption is reversible with the key.' },
      { domain: 'Cryptography Basics', difficulty: 'medium', q: 'A browser warns that a site\'s certificate is expired. The safest interpretation is:', choices: ['The site is definitely malicious', 'The encrypted channel\'s identity can no longer be verified — do not proceed with sensitive data', 'The site uses old HTML', 'The padlock guarantees safety anyway'], answer: 1, why: 'An expired certificate breaks the trust chain; the padlock alone never proves honesty.' },
      { domain: 'Network Security Concepts', difficulty: 'easy', q: 'What does a VPN provide over public Wi-Fi?', choices: ['Faster speeds', 'An encrypted tunnel that hides traffic from local eavesdroppers', 'Automatic virus removal', 'Free data'], answer: 1, why: 'VPNs encrypt traffic between the device and the VPN endpoint.' },
      { domain: 'Network Security Concepts', difficulty: 'medium', q: 'Zero trust architecture means:', choices: ['Trust nothing inside the network either — verify every request', 'Disable all user accounts', 'Only use wired networks', 'Block all internet access'], answer: 0, why: 'Zero trust removes implicit trust based on network location.' },
      { domain: 'Endpoint Protection', difficulty: 'easy', q: 'Which control protects data on a lost laptop?', choices: ['Screen saver', 'Full-disk encryption', 'A strong wallpaper', 'Sticky notes with hints'], answer: 1, why: 'Full-disk encryption renders the drive unreadable without the key.' },
      { domain: 'Endpoint Protection', difficulty: 'medium', q: 'Application allowlisting improves security because:', choices: ['It speeds up boot time', 'Only approved software can execute', 'It removes all malware automatically', 'It replaces patching'], answer: 1, why: 'Allowlisting blocks unapproved executables — including most malware — by default.' },
      { domain: 'Security Operations', difficulty: 'easy', q: 'What is the FIRST priority when responding to a confirmed security incident?', choices: ['Wipe the affected systems', 'Contain the incident to limit spread', 'Notify the press', 'Reboot all servers'], answer: 1, why: 'Containment limits damage before eradication and recovery begin.' },
      { domain: 'Security Operations', difficulty: 'medium', q: 'Why is synchronized time critical across systems in security monitoring?', choices: ['It saves battery', 'It makes cross-system event correlation in logs possible', 'It speeds up the network', 'It satisfies licensing'], answer: 1, why: 'Correlating events across systems requires aligned timestamps.' },
    ],
  },
  {
    id: 'track_secplus',
    name: 'Security+ Foundations Readiness',
    shortName: 'Security+ Foundations',
    category: 'cybersecurity',
    weeks: 14,
    description:
      'Extends foundations into security operations: architecture, governance, incident response, and the control frameworks behind entry-level security roles.',
    credentialFocus: 'Mapped to entry-level security operations competency domains',
    schoolOverview:
      'A second-tier security track that produces readiness evidence across architecture, operations, and governance domains for your security pathway.',
    studentOverview:
      'Go deeper into how organizations defend themselves: architecture decisions, control types, incident handling, and governance — with realistic triage practice.',
    prerequisites: 'Cybersecurity Foundations or equivalent knowledge recommended.',
    alignmentNotes:
      'Mapped to entry-level security operations competency domains: general security concepts, architecture, operations, and program governance.',
    domains: [
      'Security Architecture', 'Control Types', 'Identity Management', 'Incident Response',
      'Governance and Compliance', 'Physical Security', 'Resilience and Recovery', 'Secure Application Concepts',
    ],
    modules: [
      {
        title: 'Security Architecture', description: 'Designing systems that resist attack by construction.',
        lessons: [
          { title: 'Secure Design Principles', points: ['Attack surface reduction: fewer exposed services, fewer paths in', 'Secure defaults fail closed, not open', 'Segmentation contains compromise to one zone', 'High availability design survives both failures and attacks', 'Embedded and IoT devices need special attention — they rarely patch', 'Architecture reviews catch design flaws before deployment'] },
          { title: 'Cloud and Hybrid Architecture', points: ['Cloud security posture differs by service model', 'CASBs mediate between users and cloud services', 'SDN centralizes network control for consistent policy', 'Data classification drives placement decisions', 'Shadow IT creates unmanaged exposure — provide sanctioned alternatives', 'Architecture diagrams must show trust boundaries explicitly'] },
        ],
      },
      {
        title: 'Control Types', description: 'Technical, managerial, and operational controls by function.',
        lessons: [
          { title: 'Categories and Functions', points: ['Technical controls: firewalls, encryption, ACLs', 'Managerial controls: policies, risk assessments, standards', 'Operational controls: awareness training, guards, procedures', 'Preventive, detective, corrective, deterrent, compensating functions', 'Compensating controls substitute when primary controls are infeasible', 'Control selection maps to identified risks, not preference'] },
          { title: 'Mapping Controls to Scenarios', points: ['A camera is detective; a fence is preventive', 'An incident response plan is corrective/managerial', 'MFA is preventive and technical', 'Audit logs are detective and technical', 'Scenario questions test function × category fluency', 'One safeguard often serves multiple functions — identify the primary'] },
        ],
      },
      {
        title: 'Identity Management', description: 'Lifecycle, federation, and privileged access.',
        lessons: [
          { title: 'Identity Lifecycle and Federation', points: ['Provisioning creates accounts with role-based defaults', 'Deprovisioning must be immediate at separation', 'SSO reduces password sprawl with centralized authentication', 'Federation trusts identities across organizations', 'SAML and OAuth/OpenID Connect are the standard protocols', 'Directory services anchor identity for the enterprise'] },
          { title: 'Privileged Access Management', points: ['Admin accounts are the highest-value targets', 'Vaulted credentials with checkout and recording', 'Just-in-time elevation removes standing privilege', 'Separate admin and daily-use accounts', 'Session recording deters and documents misuse', 'Service accounts need rotation and least privilege too'] },
        ],
      },
      {
        title: 'Incident Response', description: 'The IR lifecycle from preparation to lessons learned.',
        lessons: [
          { title: 'The IR Lifecycle', points: ['Preparation: plans, tools, and trained people before incidents', 'Detection and analysis: validate and classify events', 'Containment: stop the spread with minimal collateral damage', 'Eradication and recovery: remove, rebuild, restore', 'Lessons learned: feed improvements back into preparation', 'Playbooks standardize response for common incident types'] },
          { title: 'Evidence and Forensics Basics', points: ['Chain of custody documents who handled evidence and when', 'Order of volatility: capture memory before disk before logs', 'Forensic images preserve originals; work on copies', 'Hashing proves evidence integrity', 'Legal hold suspends routine deletion', 'Documentation quality determines whether evidence is usable'] },
        ],
      },
      {
        title: 'Governance and Compliance', description: 'Policies, frameworks, and audit expectations.',
        lessons: [
          { title: 'Policies and Frameworks', points: ['Policies state intent; standards specify requirements; procedures give steps', 'Frameworks organize controls into recognized catalogs', 'Acceptable use policies define permitted behavior', 'Data handling policies map to classification levels', 'Change management governs how systems may be modified', 'Exceptions require documented approval and expiry'] },
          { title: 'Compliance and Audit', points: ['Audits test whether controls exist and operate', 'Evidence collection is continuous, not a pre-audit scramble', 'Regulatory drivers depend on data types and industry', 'Third-party assessments add independent credibility', 'Findings need owners, deadlines, and verification', 'Compliance is a floor, not a security guarantee'] },
        ],
      },
      {
        title: 'Physical Security', description: 'Protecting the spaces where systems live.',
        lessons: [
          { title: 'Facility Controls', points: ['Layered perimeters: fencing, lighting, locks, guards', 'Badge systems log entry and restrict zones', 'Mantraps prevent tailgating into secure areas', 'Cameras deter and document', 'Environmental controls: HVAC, fire suppression, humidity', 'Equipment closets and data rooms need the same rigor as entrances'] },
          { title: 'Media and Device Security', points: ['Sensitive documents require secure disposal — shredding, pulping', 'Degaussing or destruction retires magnetic media', 'Clean-desk policies reduce opportunistic exposure', 'Asset inventories track where sensitive data physically lives', 'Visitor management includes escort and logging', 'Printed output trays are an overlooked leak'] },
        ],
      },
      {
        title: 'Resilience and Recovery', description: 'Keeping the organization running through disruption.',
        lessons: [
          { title: 'Backup and Recovery', points: ['RPO limits acceptable data loss; RTO limits acceptable downtime', 'Full, incremental, and differential backups trade speed for storage', 'Offsite and offline copies survive site loss and ransomware', 'Untested backups are hopes, not backups', 'Restore drills measure real recovery time', 'Immutable backups resist tampering'] },
          { title: 'Continuity Planning', points: ['Business impact analysis prioritizes what must recover first', 'Hot, warm, and cold sites trade cost for recovery speed', 'Tabletop exercises walk through scenarios safely', 'Communication trees keep people informed during chaos', 'Alternate suppliers and manual workarounds extend resilience', 'Plans age — review after every incident and annually'] },
        ],
      },
      {
        title: 'Secure Application Concepts', description: 'How software stays secure from development to deployment.',
        lessons: [
          { title: 'Secure Development Basics', points: ['Input validation stops injection at the boundary', 'Output encoding prevents script injection into pages', 'Secrets never live in source code', 'Dependency scanning catches vulnerable libraries', 'Code review and testing are security controls', 'Shift-left: find flaws in development, not production'] },
          { title: 'Deployment and Hardening', points: ['Baselines define approved, hardened configurations', 'Disable unnecessary services and ports', 'Change control gates what reaches production', 'Sandboxing isolates risky execution', 'Patch cadence balances stability and exposure', 'Vulnerability scans verify hardening continuously'] },
        ],
      },
      {
        title: 'Security Assessment and Testing', description: 'Finding weaknesses before attackers do: scanning, testing, and exercises.',
        lessons: [
          { title: 'Vulnerability Assessment', points: ['Scanners enumerate known weaknesses across systems', 'Credentialed scans see patch levels; uncredentialed scans see the attacker view', 'Results are prioritized by severity and asset value', 'False positives must be verified, not assumed', 'Scan cadence matches how fast the environment changes', 'Remediation tracking closes the loop on findings'] },
          { title: 'Testing and Exercises', points: ['Penetration tests simulate real attacks with permission', 'Tabletop exercises test decision-making without touching systems', 'Red teams attack; blue teams defend; purple teams share learning', 'Rules of engagement protect production during tests', 'Bug bounties crowdsource vulnerability discovery', 'Findings become prioritized remediation work'] },
        ],
      },
      {
        title: 'Final Readiness Review', description: 'Consolidated operations review and exam preparation.',
        lessons: [
          { title: 'Security Operations Knowledge Map', points: ['Architecture: surface reduction, segmentation, trust boundaries', 'Controls: category × function fluency', 'Identity: lifecycle, federation, privileged access', 'IR: lifecycle order, evidence handling, volatility', 'Governance: policy hierarchy, audit evidence', 'Resilience: RPO/RTO, backups, continuity options'] },
          { title: 'Exam-Day Strategy', points: ['Control-type questions: name the category and function separately', 'IR questions almost always test lifecycle order', 'RPO is about data; RTO is about time — keep them straight', 'Eliminate answers that skip containment', 'Governance stems often hinge on policy vs. procedure vs. standard', 'Two passes: bank confident answers, then work scenarios'] },
        ],
      },
    ],
    questions: [
      { domain: 'Security Architecture', difficulty: 'easy', q: 'Reducing attack surface primarily means:', choices: ['Buying bigger firewalls', 'Removing or disabling unnecessary services and entry points', 'Adding more users', 'Increasing bandwidth'], answer: 1, why: 'Every unnecessary service or open port is a potential way in; removing them shrinks the attack surface.' },
      { domain: 'Security Architecture', difficulty: 'medium', q: 'Why do trust boundaries belong on architecture diagrams?', choices: ['For decoration', 'They show where controls must mediate between zones of different trust', 'They map cable routes', 'They list IP addresses'], answer: 1, why: 'Trust boundaries mark where traffic crosses between zones and needs control enforcement.' },
      { domain: 'Control Types', difficulty: 'easy', q: 'A security camera is primarily which type of control?', choices: ['Preventive', 'Detective', 'Corrective', 'Compensating'], answer: 1, why: 'Cameras detect and record events; they do not physically stop them.' },
      { domain: 'Control Types', difficulty: 'medium', q: 'A policy requiring MFA is which control category?', choices: ['Technical', 'Managerial', 'Operational', 'Physical'], answer: 1, why: 'Policies are managerial controls; the MFA mechanism itself is technical.' },
      { domain: 'Identity Management', difficulty: 'easy', q: 'Why must deprovisioning happen immediately when an employee leaves?', choices: ['To free up licenses only', 'Departed-user accounts are prime targets for misuse', 'It speeds up payroll', 'It is optional best practice'], answer: 1, why: 'Active accounts belonging to former staff are a classic breach vector.' },
      { domain: 'Identity Management', difficulty: 'medium', q: 'Just-in-time elevation improves privileged access security by:', choices: ['Making admin passwords longer', 'Granting admin rights only for the window they are needed', 'Recording all screens', 'Removing MFA requirements'], answer: 1, why: 'Standing privilege disappears; elevated rights exist only when justified and expire.' },
      { domain: 'Incident Response', difficulty: 'easy', q: 'What is the correct order of the IR lifecycle?', choices: ['Containment, preparation, detection, recovery', 'Preparation, detection/analysis, containment, eradication/recovery, lessons learned', 'Recovery, containment, preparation, detection', 'Detection, lessons learned, preparation, containment'], answer: 1, why: 'The lifecycle runs prepare → detect → contain → eradicate/recover → learn.' },
      { domain: 'Incident Response', difficulty: 'medium', q: 'During evidence collection, why is memory captured before disk?', choices: ['Memory is larger', 'Order of volatility — memory contents vanish at power-off', 'Disks are less important', 'Memory is easier to read'], answer: 1, why: 'The most volatile evidence is captured first so nothing is lost.' },
      { domain: 'Governance and Compliance', difficulty: 'easy', q: 'Which document provides step-by-step instructions for a task?', choices: ['Policy', 'Standard', 'Procedure', 'Framework'], answer: 2, why: 'Procedures give the steps; policies state intent and standards set requirements.' },
      { domain: 'Governance and Compliance', difficulty: 'medium', q: 'Why is continuous evidence collection better than pre-audit scrambles?', choices: ['It is cheaper in software licenses', 'It proves controls operated over time, not just at audit time', 'Auditors prefer digital files', 'It eliminates the need for policies'], answer: 1, why: 'Audits test operating effectiveness over a period, which requires ongoing evidence.' },
      { domain: 'Physical Security', difficulty: 'easy', q: 'A mantrap primarily prevents:', choices: ['Fire spread', 'Tailgating into secure areas', 'Water damage', 'Power surges'], answer: 1, why: 'Mantraps use two interlocking doors to stop unauthorized followers.' },
      { domain: 'Physical Security', difficulty: 'medium', q: 'Retired drives with sensitive data should be:', choices: ['Deleted normally', 'Degaussed or physically destroyed', 'Sold online', 'Reformatted once'], answer: 1, why: 'Deletion and reformatting leave recoverable data; degaussing or destruction does not.' },
      { domain: 'Resilience and Recovery', difficulty: 'easy', q: 'RTO measures:', choices: ['How much data can be lost', 'How quickly systems must be restored', 'Backup file size', 'Network speed'], answer: 1, why: 'Recovery Time Objective is the maximum tolerable downtime; RPO is about data loss.' },
      { domain: 'Resilience and Recovery', difficulty: 'medium', q: 'Which backup type copies only data changed since the last FULL backup?', choices: ['Full', 'Incremental', 'Differential', 'Snapshot'], answer: 2, why: 'Differential captures changes since the last full; incremental since the last backup of any kind.' },
      { domain: 'Secure Application Concepts', difficulty: 'easy', q: 'Where should API keys and passwords NEVER be stored?', choices: ['In a secrets manager', 'In source code', 'In environment variables', 'In a vault'], answer: 1, why: 'Source code is copied, shared, and archived — embedded secrets inevitably leak.' },
      { domain: 'Secure Application Concepts', difficulty: 'medium', q: '"Shift-left" security means:', choices: ['Testing only before release', 'Finding and fixing flaws earlier in development', 'Moving servers west', 'Reducing the security team'], answer: 1, why: 'Earlier detection (left on the timeline) is dramatically cheaper and safer.' },
    ],
  },
  {
    id: 'track_netdef',
    name: 'Network Defense Readiness',
    shortName: 'Network Defense',
    category: 'cybersecurity',
    weeks: 12,
    description:
      'Defensive networking in depth: firewall rule design, segmentation, VPNs, intrusion detection, wireless hardening, and traffic analysis.',
    credentialFocus: 'Mapped to network security and endpoint protection competency domains',
    schoolOverview:
      'Gives your security pathway a defense-focused track with firewall rule labs, segmentation maps, and detection scenarios — documented per student.',
    studentOverview:
      'Learn to defend networks for real: write firewall rules, design segmentation, analyze traffic, and hunt intrusions with hands-on scenarios.',
    prerequisites: 'Networking or Cybersecurity Foundations recommended.',
    alignmentNotes:
      'Mapped to network security and endpoint protection competency domains: perimeter defense, segmentation, monitoring, and secure connectivity.',
    domains: [
      'Firewall Design', 'Network Segmentation', 'Intrusion Detection and Prevention', 'VPN and Remote Access',
      'Wireless Defense', 'Traffic Analysis', 'Endpoint Hardening', 'Defense Monitoring',
    ],
    modules: [
      {
        title: 'Firewall Design', description: 'Rule logic, policy structure, and firewall placement.',
        lessons: [
          { title: 'Rule Logic and Policy', points: ['Rules match source, destination, port, and protocol', 'First-match wins — rule order is policy', 'Implicit deny-all ends every rule set', 'Specific permits above general denies', 'Egress rules control what leaves, not just what enters', 'Rule documentation (owner, purpose, expiry) prevents rot'] },
          { title: 'Firewall Architecture', points: ['Network firewalls guard segments; host firewalls guard devices', 'Stateful inspection tracks connections', 'Next-generation firewalls identify applications, not just ports', 'WAFs protect web applications at layer 7', 'Placement matters: perimeter, internal segments, and cloud', 'Change control applies to firewall rules like any production change'] },
        ],
      },
      {
        title: 'Network Segmentation', description: 'Zones, VLANs, and containment design.',
        lessons: [
          { title: 'Segmentation Strategy', points: ['Segment by trust level and function: users, servers, guests, IoT', 'Inter-zone traffic crosses a firewall with explicit rules', 'Flat networks let one compromise reach everything', 'Microsegmentation isolates workloads individually', 'Jump boxes mediate admin access to sensitive zones', 'Segmentation maps document zones and allowed flows'] },
          { title: 'Implementing Segments', points: ['VLANs plus ACLs enforce logical separation', 'Default-deny between zones, permit by exception', 'Management interfaces belong in a dedicated segment', 'Printer and IoT segments restrict chatty, vulnerable devices', 'Test rules with scans from each zone', 'Review flows quarterly — applications drift'] },
        ],
      },
      {
        title: 'Intrusion Detection and Prevention', description: 'IDS/IPS deployment, tuning, and response.',
        lessons: [
          { title: 'IDS vs. IPS Deployment', points: ['IDS monitors passively and alerts', 'IPS sits inline and blocks in real time', 'Network sensors watch segments; host agents watch devices', 'Signature detection matches known attacks; anomaly detection flags the unusual', 'False positives bury real alerts — tune aggressively', 'Sensor placement at choke points maximizes visibility'] },
          { title: 'Alert Triage Workflow', points: ['Validate: is the alert real and relevant?', 'Scope: which systems and users are involved?', 'Prioritize by asset value and attack progress', 'Correlate with firewall, DNS, and authentication logs', 'Escalate per the incident matrix', 'Feed tuning lessons back into detection rules'] },
        ],
      },
      {
        title: 'VPN and Remote Access', description: 'Secure connectivity for remote users and sites.',
        lessons: [
          { title: 'VPN Technologies', points: ['IPsec tunnels encrypt site-to-site links', 'TLS-based VPNs dominate remote user access', 'Split tunneling trades performance for exposure', 'Full tunnel routes everything through the protected network', 'MFA on VPN access is non-negotiable', 'Client posture checks verify device health before connecting'] },
          { title: 'Remote Access Hardening', points: ['Never expose RDP/SSH directly to the internet', 'Bastion hosts concentrate and monitor administrative entry', 'Certificates beat passwords for machine authentication', 'Session timeouts limit abandoned connections', 'Log and review remote access like physical entry', 'Emergency access paths need equal protection'] },
        ],
      },
      {
        title: 'Wireless Defense', description: 'Securing the RF perimeter.',
        lessons: [
          { title: 'Enterprise Wireless Security', points: ['WPA3-Enterprise with 802.1X authenticates users individually', 'Certificate-based EAP methods resist credential theft', 'Rogue AP detection scans for unauthorized radios', 'Separate SSIDs for corporate, guest, and IoT with distinct segments', 'Disable WPS and legacy protocols', 'Controller logs record association and authentication events'] },
          { title: 'Wireless Threats', points: ['Evil twins impersonate legitimate APs to harvest credentials', 'Deauthentication attacks force reconnections for capture', 'War driving maps exposed networks from outside', 'Weak passphrases fall to offline dictionary attacks', 'Site surveys double as security assessments', 'Guest isolation prevents lateral movement from visitor devices'] },
        ],
      },
      {
        title: 'Traffic Analysis', description: 'Reading packets, flows, and baselines.',
        lessons: [
          { title: 'Packet and Flow Analysis', points: ['Packet capture shows exactly what crossed the wire', 'Flow records (NetFlow-style) summarize conversations at scale', 'Baselines define normal volume, ports, and partners', 'Spikes, scans, and beacons stand out from baselines', 'DNS logs reveal command-and-control patterns', 'Encrypted traffic still leaks metadata: timing, size, destination'] },
          { title: 'Hunting with Network Data', points: ['Long-lived low-and-slow connections suggest exfiltration', 'Regular interval callbacks indicate beaconing malware', 'Unexpected protocols on standard ports hide tunnels', 'Internal hosts scanning others signal compromise', 'Correlate with threat intelligence feeds', 'Document hunt hypotheses and outcomes'] },
        ],
      },
      {
        title: 'Endpoint Hardening', description: 'Securing the devices at the network edge.',
        lessons: [
          { title: 'Host Hardening Baselines', points: ['CIS-style baselines define hardened configurations', 'Remove unneeded software and disable unneeded services', 'Host firewalls restrict inbound and outbound traffic', 'EDR agents provide visibility and response capability', 'Disk encryption protects data at rest', 'Patch management closes exploited vulnerabilities'] },
          { title: 'Endpoint Policy Enforcement', points: ['Group Policy/MDM push consistent settings at scale', 'USB restrictions limit malware paths and data theft', 'Application control blocks unapproved executables', 'Local admin rights are granted sparingly and monitored', 'Compliance scanning verifies drift from baseline', 'Lost-device procedures combine encryption, remote wipe, and reporting'] },
        ],
      },
      {
        title: 'Defense Monitoring', description: 'Operating the defensive stack day to day.',
        lessons: [
          { title: 'The Monitoring Pipeline', points: ['Collect: logs from firewalls, endpoints, identity, DNS', 'Normalize: consistent formats enable correlation', 'Alert: rules and models elevate what matters', 'Investigate: pivot across sources with context', 'Respond: contain and escalate per playbook', 'Improve: every investigation tunes the pipeline'] },
          { title: 'Metrics and Continuous Improvement', points: ['Mean time to detect and respond measure program health', 'Coverage maps show which assets feed which sources', 'Purple-team exercises test detection against real techniques', 'Alert quality beats alert quantity', 'Runbooks capture institutional knowledge', 'Report trends to leadership in business language'] },
        ],
      },
      {
        title: 'Threat Landscape for Networks', description: 'The attack patterns defenders design networks against.',
        lessons: [
          { title: 'Network Attack Patterns', points: ['Reconnaissance: scanning and enumeration precede attacks', 'Lateral movement spreads from the first foothold', 'Command-and-control channels call home for instructions', 'Exfiltration moves data out slowly to avoid notice', 'Supply-chain compromise enters through trusted vendors', 'Insider threats bypass perimeter defenses entirely'] },
          { title: 'Designing Against the Patterns', points: ['Assume breach: design for detection, not just prevention', 'Egress filtering breaks command-and-control callbacks', 'Segmentation slows lateral movement measurably', 'DNS security blocks known-bad destinations', 'Deception assets catch movement early', 'Threat modeling maps likely paths before attackers find them'] },
        ],
      },
      {
        title: 'Final Readiness Review', description: 'Consolidated defense review and exam preparation.',
        lessons: [
          { title: 'Network Defense Knowledge Map', points: ['Firewalls: rule order, stateful logic, placement', 'Segmentation: zones, VLANs, default-deny between trusts', 'Detection: IDS vs. IPS, signatures vs. anomalies, triage', 'Remote access: VPN types, MFA, bastion patterns', 'Wireless: WPA3-Enterprise, rogue APs, evil twins', 'Analysis: baselines, beacons, exfiltration patterns'] },
          { title: 'Exam-Day Strategy', points: ['Rule-order questions: trace the first match carefully', 'Segmentation scenarios: identify which zones must talk, deny the rest', 'IDS vs. IPS questions hinge on inline vs. passive', 'Beaconing clues: regular intervals, small payloads, odd destinations', 'Draw the zone map on scratch paper for scenario questions', 'Review your practice mistakes by domain the day before'] },
        ],
      },
    ],
    questions: [
      { domain: 'Firewall Design', difficulty: 'easy', q: 'In a firewall rule set, which rule applies when multiple rules match a packet?', choices: ['The last rule', 'The first matching rule', 'The most permissive rule', 'The deny-all rule'], answer: 1, why: 'Firewalls evaluate rules top-down and stop at the first match.' },
      { domain: 'Firewall Design', difficulty: 'medium', q: 'What should the LAST rule in every firewall policy be?', choices: ['Permit all', 'Implicit or explicit deny-all', 'Log all', 'Allow ICMP'], answer: 1, why: 'Default-deny ensures anything not explicitly permitted is blocked.' },
      { domain: 'Network Segmentation', difficulty: 'easy', q: 'What is the main security benefit of network segmentation?', choices: ['Faster internet', 'A compromise in one zone cannot easily reach others', 'Fewer switches needed', 'Simpler passwords'], answer: 1, why: 'Segmentation contains breaches by forcing inter-zone traffic through controls.' },
      { domain: 'Network Segmentation', difficulty: 'medium', q: 'Guest Wi-Fi should be configured to:', choices: ['Share the corporate VLAN', 'Sit in its own segment with no internal access', 'Use no encryption for convenience', 'Allow access to printers and file shares'], answer: 1, why: 'Guest devices are untrusted; isolate them from internal resources entirely.' },
      { domain: 'Intrusion Detection and Prevention', difficulty: 'easy', q: 'The key difference between IDS and IPS:', choices: ['IDS is older', 'IPS sits inline and can block; IDS monitors and alerts', 'IDS is hardware; IPS is software', 'IPS cannot generate alerts'], answer: 1, why: 'IPS acts on traffic in real time; IDS observes out-of-band.' },
      { domain: 'Intrusion Detection and Prevention', difficulty: 'medium', q: 'Why does alert tuning matter?', choices: ['It reduces license costs', 'False positives bury real attacks and exhaust analysts', 'It speeds up the network', 'It is required by insurance'], answer: 1, why: 'Alert fatigue from false positives causes real incidents to be missed.' },
      { domain: 'VPN and Remote Access', difficulty: 'easy', q: 'Why should RDP never be exposed directly to the internet?', choices: ['It is too slow', 'It is constantly scanned and brute-forced', 'It uses too much bandwidth', 'It requires licenses'], answer: 1, why: 'Exposed RDP is one of the most-attacked services; use VPN or a gateway with MFA.' },
      { domain: 'VPN and Remote Access', difficulty: 'medium', q: 'Full tunnel vs. split tunnel VPN — the security trade-off is:', choices: ['Full tunnel is faster', 'Split tunnel sends some traffic outside inspection; full tunnel routes all through security controls', 'Split tunnel encrypts more', 'They are identical'], answer: 1, why: 'Split tunneling lets traffic bypass the organization\'s inspection and controls.' },
      { domain: 'Wireless Defense', difficulty: 'easy', q: 'An "evil twin" attack involves:', choices: ['Two legitimate APs', 'A rogue AP impersonating a legitimate network to capture credentials', 'Doubling Wi-Fi speed', 'Bluetooth pairing'], answer: 1, why: 'Attackers clone the SSID so victims connect to the malicious AP.' },
      { domain: 'Wireless Defense', difficulty: 'medium', q: 'Why is WPA3-Enterprise with 802.1X stronger than a shared passphrase?', choices: ['It uses longer passwords', 'Each user authenticates individually, so one leak doesn\'t expose everyone', 'It has a stronger antenna', 'It hides the SSID automatically'], answer: 1, why: 'Per-user authentication removes the single shared secret and enables revocation.' },
      { domain: 'Traffic Analysis', difficulty: 'easy', q: 'Regular small connections to the same external host every 60 seconds likely indicate:', choices: ['Normal browsing', 'Malware beaconing to command-and-control', 'Software updates only', 'DNS misconfiguration'], answer: 1, why: 'Steady-interval callbacks are the classic beaconing pattern.' },
      { domain: 'Traffic Analysis', difficulty: 'medium', q: 'What can be analyzed even when traffic is encrypted?', choices: ['Message contents', 'Metadata: timing, size, and destination', 'User passwords', 'File names'], answer: 1, why: 'Encryption hides content but not flow metadata, which still reveals patterns.' },
      { domain: 'Endpoint Hardening', difficulty: 'easy', q: 'The FIRST step of hardening a workstation is usually:', choices: ['Install games for testing', 'Apply a baseline: remove unneeded software and disable unneeded services', 'Disable the firewall', 'Share the C: drive'], answer: 1, why: 'Reducing installed software and services shrinks the attack surface.' },
      { domain: 'Endpoint Hardening', difficulty: 'medium', q: 'Why restrict local administrator rights?', choices: ['To annoy users', 'Malware running as a standard user can do far less damage', 'It speeds up login', 'It saves disk space'], answer: 1, why: 'Most malware inherits the user\'s rights; standard rights contain the damage.' },
      { domain: 'Defense Monitoring', difficulty: 'easy', q: 'MTTD stands for:', choices: ['Mean time to detect', 'Maximum time to deploy', 'Mean time to download', 'Minimum threat detection'], answer: 0, why: 'Mean time to detect measures how quickly incidents are discovered.' },
      { domain: 'Defense Monitoring', difficulty: 'medium', type: 'scenario', q: 'Your SIEM shows an internal workstation scanning many other internal hosts on port 445. The BEST first response is:', choices: ['Ignore it — scanning is normal', 'Isolate the workstation and investigate for compromise', 'Reboot the firewall', 'Block port 445 network-wide immediately'], answer: 1, why: 'Internal scanning suggests a compromised host; contain it, then investigate.' },
    ],
  },
  {
    id: 'track_ir',
    name: 'Incident Response Readiness',
    shortName: 'Incident Response',
    category: 'cybersecurity',
    weeks: 12,
    description:
      'The full incident response discipline: preparation, detection, triage, containment, forensics basics, communication, and post-incident improvement.',
    credentialFocus: 'Mapped to triage, risk, and response workflow competency domains',
    schoolOverview:
      'Builds response capability with realistic incident timelines and triage drills — and documents each student\'s readiness across the response workflow.',
    studentOverview:
      'Practice what to do when things go wrong: detect, triage, contain, communicate, and learn. Work realistic incident timelines against the clock.',
    prerequisites: 'Cybersecurity Foundations recommended.',
    alignmentNotes:
      'Mapped to incident triage, risk assessment, and response workflow competency domains used across security operations roles.',
    domains: [
      'IR Planning and Preparation', 'Detection and Analysis', 'Triage and Prioritization', 'Containment Strategies',
      'Eradication and Recovery', 'Forensics Fundamentals', 'Incident Communication', 'Post-Incident Improvement',
    ],
    modules: [
      {
        title: 'IR Planning and Preparation', description: 'Plans, playbooks, and readiness before incidents strike.',
        lessons: [
          { title: 'IR Plans and Playbooks', points: ['The IR plan defines roles, authority, and escalation paths', 'Playbooks give step-by-step response for common incident types', 'Contact lists must be current and tested', 'A jump kit contains forensic tools, write blockers, and documentation', 'Tabletop exercises reveal plan gaps safely', 'Plans stored only on the network are useless when the network is down'] },
          { title: 'Building Response Capability', points: ['An IR team blends IT, security, legal, communications, and leadership', 'Retainers with external IR firms add surge capacity', 'Tool readiness: logging enabled, agents deployed, access verified', 'Baseline documentation makes anomalies recognizable', 'Insurance and legal contacts belong in the plan', 'Practice cadence: at least annual tabletop plus technical drills'] },
        ],
      },
      {
        title: 'Detection and Analysis', description: 'From alert to validated incident.',
        lessons: [
          { title: 'Detection Sources', points: ['SIEM correlation, EDR alerts, IDS/IPS, and user reports', 'Threat intelligence adds context to indicators', 'False positive handling without dismissing real signals', 'Alert enrichment: asset owner, criticality, recent changes', 'Detection gaps live in unmonitored systems — map coverage', 'Every detection rule needs an owner and a playbook'] },
          { title: 'Analysis and Validation', points: ['Validate before escalating: is this real, and is it still active?', 'Scope the blast radius: users, systems, data', 'Classify by type: malware, unauthorized access, DoS, data exposure', 'Document the timeline from the first observable event', 'Indicators of compromise guide the search across the estate', 'Preserve initial evidence even while scoping'] },
        ],
      },
      {
        title: 'Triage and Prioritization', description: 'Deciding what gets handled first and why.',
        lessons: [
          { title: 'Triage Method', points: ['Prioritize by asset criticality × attack progress × business impact', 'Active data theft outranks dormant malware', 'Consider spread speed — wormable incidents jump the queue', 'A triage matrix makes decisions consistent under pressure', 'Declare severity levels explicitly so escalation is unambiguous', 'Re-triage as facts change — priorities move'] },
          { title: 'Triage Drills', points: ['Scenario: ransomware on one workstation vs. on a file server', 'Scenario: phishing click by a standard user vs. a finance admin', 'Scenario: website defacement vs. database exfiltration', 'Justify rankings aloud — reasoning is the skill', 'Time-box triage decisions; perfection is the enemy of containment', 'Record the rationale for later review'] },
        ],
      },
      {
        title: 'Containment Strategies', description: 'Stopping the spread with the least collateral damage.',
        lessons: [
          { title: 'Containment Options', points: ['Network isolation: VLAN quarantine, switch shutdown, firewall blocks', 'Account containment: disable, force password resets, revoke tokens', 'Host isolation via EDR without powering off', 'Segmentation pays off exactly here', 'Balance evidence preservation against urgency to stop spread', 'Document every containment action with timestamps'] },
          { title: 'Containment Scenarios', points: ['Ransomware: isolate segments fast; do not power off blindly', 'Compromised credentials: revoke sessions, not just passwords', 'Insider misuse: quiet containment preserves evidence', 'Web server defacement: snapshot before restoring', 'Business email compromise: freeze wire-transfer workflows', 'Communicate containment to affected teams in plain terms'] },
        ],
      },
      {
        title: 'Eradication and Recovery', description: 'Removing the threat and restoring trusted operations.',
        lessons: [
          { title: 'Eradication Steps', points: ['Remove malware, persistence mechanisms, and attacker accounts', 'Patch or mitigate the exploited vulnerability', 'Reset every credential the attacker could have touched', 'Rebuild from known-good images rather than cleaning in place when in doubt', 'Hunt for lateral movement before declaring eradication', 'Verify eradication with targeted scanning'] },
          { title: 'Safe Recovery', points: ['Restore in stages, monitoring closely for reinfection', 'Validate backups are clean before restoring', 'Tighten monitoring on recovered systems temporarily', 'Confirm business function with owners before declaring done', 'Document root cause and fix verification', 'Return to normal monitoring only after a quiet period'] },
        ],
      },
      {
        title: 'Forensics Fundamentals', description: 'Evidence handling for responders who are not full-time forensicators.',
        lessons: [
          { title: 'Evidence Handling', points: ['Chain of custody documents possession continuously', 'Work from forensic images, never originals', 'Hash evidence at acquisition and verify before analysis', 'Order of volatility: memory, then disk, then logs', 'Timestamp everything in a consistent time zone', 'Legal counsel decides involvement of law enforcement'] },
          { title: 'Everyday Forensic Skills', points: ['Timeline analysis reconstructs the attack sequence', 'Log review across authentication, DNS, and EDR sources', 'Identify persistence: startup items, scheduled tasks, new accounts', 'Extract indicators for estate-wide hunting', 'Write findings so a non-specialist can follow', 'Know your limits — engage specialists for legal-grade work'] },
        ],
      },
      {
        title: 'Incident Communication', description: 'Who needs to know what, when, and in what words.',
        lessons: [
          { title: 'Internal and External Communication', points: ['A communication matrix predefines audiences and channels', 'Executives need impact, options, and decisions — not packet dumps', 'Legal and regulatory notification clocks start at discovery', 'Customers, partners, and media require coordinated messaging', 'Use out-of-band channels if primary systems are compromised', 'Never speculate — communicate verified facts and next update times'] },
          { title: 'Writing the Incident Record', points: ['The incident log is the single source of truth during response', 'Record facts, decisions, actions, and timestamps', 'Separate facts from hypotheses explicitly', 'Status reports on a fixed cadence reduce rumor', 'Templates speed consistent reporting under stress', 'The record becomes the post-incident review backbone'] },
        ],
      },
      {
        title: 'Post-Incident Improvement', description: 'Converting incidents into stronger defenses.',
        lessons: [
          { title: 'Lessons-Led Reviews', points: ['Blameless reviews focus on systems, not scapegoats', 'What worked, what failed, what was missing', 'Action items get owners and deadlines', 'Update playbooks, detection rules, and controls', 'Share sanitized lessons with the wider team', 'Track action item completion — reviews without follow-through are theater'] },
          { title: 'Measuring Response', points: ['Time to detect, contain, and recover trend over incidents', 'Recurrence of the same root cause signals systemic gaps', 'Exercise findings count as improvement opportunities too', 'Metrics justify investment in people and tooling', 'Maturity models guide multi-year improvement', 'Celebrate catches and improvements, not just quiet quarters'] },
        ],
      },
      {
        title: 'Incident Types and Case Walkthroughs', description: 'Anatomy of the incidents responders actually face.',
        lessons: [
          { title: 'Common Incident Patterns', points: ['Ransomware: fast encryption, extortion, tight containment windows', 'Business email compromise: social engineering plus payment fraud', 'Data breaches: quiet access, slow discovery, heavy reporting duties', 'Insider incidents: authorized access misused', 'Web attacks: defacement, injection, and application abuse', 'DDoS: availability attacks requiring upstream help'] },
          { title: 'Guided Case Walkthroughs', points: ['Walk a ransomware case from detection to recovery timeline', 'Walk a phishing case from click to credential reset to mailbox rules', 'Walk an insider case with quiet containment and HR coordination', 'Identify decision points where the outcome changed', 'Extract the playbook improvements each case produced', 'Practice narrating a timeline clearly — it is a core responder skill'] },
        ],
      },
      {
        title: 'Final Readiness Review', description: 'Consolidated response review and timed-exam preparation.',
        lessons: [
          { title: 'Incident Response Knowledge Map', points: ['Preparation: plans, playbooks, team, tools', 'Detection: sources, validation, scoping, timelines', 'Triage: criticality × progress × impact', 'Containment: options with evidence awareness', 'Recovery: eradicate, rebuild, verify, monitor', 'Communication and review: matrix, record, lessons, metrics'] },
          { title: 'Exam-Day Strategy', points: ['Lifecycle-order questions dominate — know the phases cold', '"FIRST action" stems usually mean validate or contain', 'Evidence questions test volatility order and chain of custody', 'Communication scenarios reward factual, timed updates', 'Scenario timelines: order the response steps before answering', 'Flag long scenarios, bank definitions, return with time'] },
        ],
      },
    ],
    questions: [
      { domain: 'IR Planning and Preparation', difficulty: 'easy', q: 'Why should printed/offline copies of the IR plan exist?', choices: ['For decoration', 'The network may be unavailable during the incident', 'Auditors require paper', 'It is tradition'], answer: 1, why: 'A plan stored only on compromised systems is unreachable exactly when needed.' },
      { domain: 'IR Planning and Preparation', difficulty: 'medium', q: 'A playbook differs from the IR plan because playbooks:', choices: ['Are longer', 'Give step-by-step response for specific incident types', 'Are optional appendices', 'List only contacts'], answer: 1, why: 'Plans define structure; playbooks operationalize response per scenario.' },
      { domain: 'Detection and Analysis', difficulty: 'easy', q: 'What is the FIRST analytical step after an alert fires?', choices: ['Shut down the network', 'Validate whether the alert represents a real incident', 'Notify customers', 'Restore from backup'], answer: 1, why: 'Validation prevents wasted response effort on false positives.' },
      { domain: 'Detection and Analysis', difficulty: 'medium', q: 'Scoping an incident means determining:', choices: ['The attacker\'s identity', 'Which systems, users, and data are affected', 'The total cost', 'Who to blame'], answer: 1, why: 'Scope defines the blast radius and drives containment decisions.' },
      { domain: 'Triage and Prioritization', difficulty: 'medium', type: 'scenario', q: 'Two incidents are active: dormant adware on a kiosk and ransomware encrypting the finance file server. Which gets priority and why?', choices: ['The kiosk — it was discovered first', 'The ransomware — critical asset plus active, fast-moving damage', 'Neither — handle alphabetically', 'Both equally always'], answer: 1, why: 'Triage weighs asset criticality and attack progress; active ransomware on finance wins.' },
      { domain: 'Triage and Prioritization', difficulty: 'easy', q: 'Why declare severity levels explicitly?', choices: ['For billing', 'So escalation and expectations are unambiguous', 'To impress auditors', 'Severity is arbitrary'], answer: 1, why: 'Declared severity aligns the whole organization on urgency and authority.' },
      { domain: 'Containment Strategies', difficulty: 'easy', q: 'Why avoid powering off a compromised host when possible?', choices: ['Boot takes too long', 'Volatile evidence in memory is lost', 'It voids the warranty', 'Users dislike it'], answer: 1, why: 'RAM holds malware artifacts and connections that vanish at power-off.' },
      { domain: 'Containment Strategies', difficulty: 'medium', q: 'A compromised user account requires which containment actions?', choices: ['Password reset only', 'Disable/revoke sessions and tokens, reset credentials, review recent activity', 'Send a warning email', 'Nothing until Monday'], answer: 1, why: 'Attackers persist via tokens and sessions; revocation plus review contains fully.' },
      { domain: 'Eradication and Recovery', difficulty: 'easy', q: 'Why rebuild from a known-good image instead of cleaning an infected system?', choices: ['It is always faster', 'Hidden persistence mechanisms may survive cleaning', 'Images are cheaper', 'Cleaning voids licenses'], answer: 1, why: 'Rebuilding guarantees a clean state; cleaning risks missed persistence.' },
      { domain: 'Eradication and Recovery', difficulty: 'medium', q: 'Before restoring from backup after ransomware, you must verify:', choices: ['The backup drive is labeled', 'The backups themselves are not infected/encrypted', 'The room temperature', 'The insurance policy'], answer: 1, why: 'Restoring infected backups reintroduces the malware.' },
      { domain: 'Forensics Fundamentals', difficulty: 'easy', q: 'Chain of custody documents:', choices: ['Network topology', 'Who possessed evidence, when, and what they did', 'Employee schedules', 'Software licenses'], answer: 1, why: 'Continuous possession records make evidence legally defensible.' },
      { domain: 'Forensics Fundamentals', difficulty: 'medium', q: 'The order of volatility says to capture in which order?', choices: ['Disk, then memory, then logs', 'Memory, then disk, then archived logs', 'Logs, then disk, then memory', 'Any order works'], answer: 1, why: 'Most volatile first: memory disappears at power-off; archives persist longest.' },
      { domain: 'Incident Communication', difficulty: 'easy', q: 'Executives during a breach primarily need:', choices: ['Raw packet captures', 'Impact, options, and decisions required', 'Blame assignments', 'Daily code diffs'], answer: 1, why: 'Leadership communication is decision-oriented, not technical.' },
      { domain: 'Incident Communication', difficulty: 'medium', q: 'When normal email may be compromised, teams should:', choices: ['Stop communicating', 'Use pre-planned out-of-band channels', 'Post updates publicly', 'Wait for forensics'], answer: 1, why: 'Out-of-band channels keep coordination private from the attacker.' },
      { domain: 'Post-Incident Improvement', difficulty: 'easy', q: 'Blameless post-incident reviews focus on:', choices: ['Who to fire', 'Systemic causes and improvements', 'Legal liability', 'Vendor contracts'], answer: 1, why: 'Blame suppresses reporting; system focus surfaces real fixes.' },
      { domain: 'Post-Incident Improvement', difficulty: 'medium', q: 'The same root cause appearing in multiple incidents signals:', choices: ['Bad luck', 'A systemic gap that point fixes are not addressing', 'Coincidence', 'Successful defense'], answer: 1, why: 'Recurring root causes mean the underlying weakness was never fixed.' },
    ],
  },
  {
    id: 'track_preeng',
    name: 'Pre-Engineering Readiness',
    shortName: 'Pre-Engineering',
    category: 'engineering',
    weeks: 14,
    description:
      'Builds the math, physics, and design-thinking foundation for engineering pathways: forces, energy, materials, measurement, and the engineering design process.',
    credentialFocus: 'Mapped to pre-engineering foundation competency domains',
    schoolOverview:
      'A rigorous on-ramp for engineering pathways that documents math and physics readiness per student — evidence for program review and parent communication.',
    studentOverview:
      'Learn to think like an engineer: apply math and physics to real problems, design and test solutions, and document your work the way professionals do.',
    prerequisites: 'Algebra I completed or concurrent.',
    alignmentNotes:
      'Mapped to pre-engineering foundation domains: applied mathematics, physics fundamentals, materials, measurement, drawing interpretation, and design thinking.',
    domains: [
      'Applied Mathematics', 'Physics of Forces and Motion', 'Energy and Power', 'Materials Science Basics',
      'Measurement and Units', 'Technical Drawing Interpretation', 'Design Thinking', 'Data and Experimentation',
    ],
    modules: [
      {
        title: 'Applied Mathematics', description: 'The algebra, geometry, and trigonometry engineers use daily.',
        lessons: [
          { title: 'Algebra in Engineering Context', points: ['Solving equations isolates unknowns in design formulas', 'Unit analysis catches algebraic errors instantly', 'Ratios and proportions scale designs up and down', 'Percentages express tolerances and efficiencies', 'Scientific notation handles very large and small values', 'Rearranging formulas before substituting values reduces error'] },
          { title: 'Geometry and Trigonometry', points: ['Area and volume calculations size materials and capacity', 'Right-triangle trig resolves forces into components', 'Sine, cosine, and tangent relate angles to side ratios', 'Pythagorean theorem finds resultant magnitudes', 'Angles in structures determine load paths', 'Scale drawings convert between paper and reality'] },
        ],
      },
      {
        title: 'Physics of Forces and Motion', description: 'Statics and dynamics fundamentals.',
        lessons: [
          { title: 'Forces and Equilibrium', points: ['A force is a push or pull with magnitude and direction', 'Newton\'s third law: every action has an equal opposite reaction', 'Free-body diagrams isolate forces acting on an object', 'Equilibrium means net force equals zero — structures must achieve it', 'Friction resists sliding and enables grip', 'Weight is mass times gravitational acceleration'] },
          { title: 'Motion Basics', points: ['Speed, velocity, and acceleration are distinct quantities', 'Distance-time graphs reveal motion patterns', 'Newton\'s second law: F = ma links force and acceleration', 'Momentum explains collisions and braking', 'Circular motion requires inward (centripetal) force', 'Real motion problems start with a clear diagram'] },
        ],
      },
      {
        title: 'Energy and Power', description: 'Energy forms, transformation, and efficiency.',
        lessons: [
          { title: 'Energy Forms and Transformation', points: ['Kinetic energy depends on motion; potential on position', 'Chemical, electrical, thermal, and mechanical energy interconvert', 'Conservation of energy: transformed, never created or destroyed', 'Work equals force times distance', 'Energy losses appear as heat', 'Sankey-style thinking traces where input energy goes'] },
          { title: 'Power and Efficiency', points: ['Power is the rate of doing work: watts', 'Efficiency = useful output ÷ total input', 'No real machine reaches 100% efficiency', 'Electrical power: P = V × I', 'Efficiency improvements compound in systems', 'Comparing devices by efficiency is an engineering habit'] },
        ],
      },
      {
        title: 'Materials Science Basics', description: 'How material properties drive design choices.',
        lessons: [
          { title: 'Material Properties', points: ['Strength: resistance to breaking under load', 'Stiffness: resistance to bending — different from strength', 'Ductility lets metals deform without fracturing', 'Brittleness fails suddenly without warning', 'Density trades weight against strength', 'Corrosion resistance determines maintenance burden'] },
          { title: 'Choosing Materials', points: ['Metals, polymers, ceramics, and composites each have niches', 'Property trade-offs drive selection: no perfect material', 'Cost and manufacturability constrain choices', 'Fatigue causes failure below rated strength over cycles', 'Safety factors cover uncertainty and misuse', 'Life-cycle thinking includes sourcing and disposal'] },
        ],
      },
      {
        title: 'Measurement and Units', description: 'Precision, accuracy, and the SI system.',
        lessons: [
          { title: 'SI Units and Conversion', points: ['SI base units: meter, kilogram, second, ampere, kelvin', 'Prefixes scale by powers of ten: kilo, milli, micro', 'Unit conversion multiplies by conversion factors that equal one', 'Derived units: newton, joule, watt, pascal', 'Carrying units through calculations validates the answer', 'US customary conversions are a frequent exam trap'] },
          { title: 'Precision and Error', points: ['Accuracy is closeness to truth; precision is repeatability', 'Significant figures communicate measurement confidence', 'Instrument resolution limits meaningful digits', 'Systematic errors bias; random errors scatter', 'Calibration ties instruments to standards', 'Uncertainty belongs in reported results'] },
        ],
      },
      {
        title: 'Technical Drawing Interpretation', description: 'Reading the universal language of engineering drawings.',
        lessons: [
          { title: 'Views and Projections', points: ['Orthographic projection shows front, top, and side views', 'Isometric views show 3D form pictorially', 'Hidden lines reveal obscured edges', 'Section views expose internal features', 'Scale links drawing size to real size', 'Title blocks carry part name, number, material, and revision'] },
          { title: 'Dimensions and Tolerances', points: ['Dimensions define size; notes define process', 'Tolerances specify acceptable variation', 'Tight tolerances cost more — apply deliberately', 'Datums anchor measurements', 'Symbols standardize meaning across shops', 'Reading drawings before building prevents expensive mistakes'] },
        ],
      },
      {
        title: 'Design Thinking', description: 'Structured problem solving from need to solution.',
        lessons: [
          { title: 'Defining Problems and Criteria', points: ['A problem statement names need, user, and constraints', 'Criteria define success; constraints limit options', 'Requirements are testable, not vague', 'Research existing solutions before inventing', 'Stakeholders reveal needs interviews miss', 'A good definition makes ideation productive'] },
          { title: 'Ideation and Trade-offs', points: ['Brainstorming defers judgment to maximize options', 'Sketching communicates ideas faster than words', 'Decision matrices weigh options against criteria', 'Trade-offs are explicit choices, not failures', 'Iteration assumes first solutions improve with feedback', 'Document rejected ideas — they save future time'] },
        ],
      },
      {
        title: 'Data and Experimentation', description: 'Testing ideas honestly with data.',
        lessons: [
          { title: 'Designing Experiments', points: ['A hypothesis predicts a measurable outcome', 'Change one variable at a time', 'Controls isolate what you are testing', 'Repeated trials reveal reliability', 'Data tables organize results for analysis', 'Graphs expose patterns tables hide'] },
          { title: 'Analyzing and Communicating Results', points: ['Mean, median, and range summarize datasets', 'Outliers deserve explanation, not deletion', 'Conclusions must follow the data, not preferences', 'Failure analysis asks why, then redesigns', 'Lab notebooks document process and prove rigor', 'Clear graphs and units make results defensible'] },
        ],
      },
      {
        title: 'Engineering Careers and Professional Practice', description: 'The disciplines, ethics, and habits of the engineering profession.',
        lessons: [
          { title: 'Engineering Disciplines', points: ['Civil, mechanical, electrical, chemical, and software anchor the field', 'Aerospace, biomedical, industrial, and environmental extend it', 'Each discipline shares the same design process', 'Interdisciplinary teams build most modern products', 'Technician, technologist, and engineer roles form a career ladder', 'Credentials and licensure mark professional milestones'] },
          { title: 'Ethics and Professional Habits', points: ['Public safety is the engineer’s first obligation', 'Honest reporting of data and errors is non-negotiable', 'Peer review catches what individuals miss', 'Lifelong learning keeps skills current', 'Documentation is a professional deliverable, not a chore', 'Mentorship flows in both directions across a career'] },
        ],
      },
      {
        title: 'Final Readiness Review', description: 'Consolidated pre-engineering review and exam strategy.',
        lessons: [
          { title: 'Pre-Engineering Knowledge Map', points: ['Math: algebra, trig, unit analysis', 'Physics: forces, motion, energy, power', 'Materials: properties, trade-offs, safety factors', 'Measurement: SI units, precision, error', 'Drawings: views, dimensions, tolerances', 'Design: criteria, ideation, testing, iteration'] },
          { title: 'Exam-Day Strategy', points: ['Write units beside every number', 'Draw the free-body or geometry before computing', 'Estimate magnitude to sanity-check answers', 'Show method — partial credit rewards process', 'Convert units first in mixed-unit problems', 'Review your error log from practice sets'] },
        ],
      },
    ],
    questions: [
      { domain: 'Applied Mathematics', difficulty: 'easy', q: 'To convert 2.5 meters to millimeters, you multiply by:', choices: ['10', '100', '1,000', '0.001'], answer: 2, why: 'One meter equals 1,000 millimeters; 2.5 m = 2,500 mm.' },
      { domain: 'Applied Mathematics', difficulty: 'medium', q: 'A force of 30 N acts at an angle. Resolving it into components uses:', choices: ['The Pythagorean theorem only', 'Sine and cosine of the angle', 'Long division', 'Percent error'], answer: 1, why: 'Components are F·cos(θ) horizontal and F·sin(θ) vertical.' },
      { domain: 'Physics of Forces and Motion', difficulty: 'easy', q: 'A structure in equilibrium has:', choices: ['No forces acting', 'Net force of zero', 'Maximum velocity', 'No mass'], answer: 1, why: 'Equilibrium means all forces balance — net force is zero.' },
      { domain: 'Physics of Forces and Motion', difficulty: 'medium', q: 'Newton\'s second law states:', choices: ['F = m/a', 'F = ma', 'E = mc²', 'P = IV'], answer: 1, why: 'Force equals mass times acceleration.' },
      { domain: 'Energy and Power', difficulty: 'easy', q: 'Power is defined as:', choices: ['Force times distance', 'The rate of doing work', 'Mass times gravity', 'Voltage squared'], answer: 1, why: 'Power = work ÷ time, measured in watts.' },
      { domain: 'Energy and Power', difficulty: 'medium', q: 'A motor consumes 500 W and delivers 400 W of useful work. Its efficiency is:', choices: ['125%', '80%', '20%', '100%'], answer: 1, why: 'Efficiency = 400 ÷ 500 = 0.80 = 80%.' },
      { domain: 'Materials Science Basics', difficulty: 'easy', q: 'A material that deforms significantly before breaking is described as:', choices: ['Brittle', 'Ductile', 'Dense', 'Corroded'], answer: 1, why: 'Ductility is the ability to deform without fracturing.' },
      { domain: 'Materials Science Basics', difficulty: 'medium', q: 'Why do designs include a safety factor?', choices: ['To increase cost', 'To cover uncertainty in loads, materials, and misuse', 'To speed manufacturing', 'To improve appearance'], answer: 1, why: 'Safety factors protect against variability and unknowns in real use.' },
      { domain: 'Measurement and Units', difficulty: 'easy', q: 'Which is NOT an SI base unit?', choices: ['Meter', 'Kilogram', 'Newton', 'Second'], answer: 2, why: 'The newton is derived (kg·m/s²); meter, kilogram, and second are base units.' },
      { domain: 'Measurement and Units', difficulty: 'medium', q: 'Precision differs from accuracy in that precision describes:', choices: ['Closeness to the true value', 'Repeatability of measurements', 'The number of decimals', 'Instrument cost'], answer: 1, why: 'Precision is consistency; accuracy is closeness to truth.' },
      { domain: 'Technical Drawing Interpretation', difficulty: 'easy', q: 'Dashed lines on an orthographic drawing indicate:', choices: ['Cutting planes', 'Hidden edges', 'Centerlines', 'Dimensions'], answer: 1, why: 'Hidden (dashed) lines show edges obscured by material.' },
      { domain: 'Technical Drawing Interpretation', difficulty: 'medium', q: 'Where do you find a part\'s revision and material on a drawing?', choices: ['In the isometric view', 'In the title block', 'On the dimension lines', 'In the scale note only'], answer: 1, why: 'Title blocks standardize part identity, material, scale, and revision.' },
      { domain: 'Design Thinking', difficulty: 'easy', q: 'In a design brief, criteria differ from constraints because criteria:', choices: ['Limit options', 'Define what success looks like', 'Are optional', 'Set the budget'], answer: 1, why: 'Criteria measure success; constraints restrict possible solutions.' },
      { domain: 'Design Thinking', difficulty: 'medium', q: 'A decision matrix is used to:', choices: ['Draw parts to scale', 'Compare design options against weighted criteria', 'Calculate forces', 'Write reports'], answer: 1, why: 'Matrices make multi-criteria trade-offs explicit and defensible.' },
      { domain: 'Data and Experimentation', difficulty: 'easy', q: 'A controlled experiment changes:', choices: ['All variables at once', 'One variable at a time', 'No variables', 'The hypothesis only'], answer: 1, why: 'Isolating one variable reveals its specific effect.' },
      { domain: 'Data and Experimentation', difficulty: 'medium', type: 'scenario', q: 'Three test results are 9.8, 10.1, and 19.7 N. The best practice for the outlier is:', choices: ['Delete it silently', 'Investigate the cause, then document the decision to keep or exclude it', 'Average all three and move on', 'Round it to 10'], answer: 1, why: 'Outliers need explained, documented treatment — never silent deletion.' },
    ],
  },
  {
    id: 'track_robotics',
    name: 'Robotics Readiness',
    shortName: 'Robotics',
    category: 'engineering',
    weeks: 14,
    description:
      'Covers robot anatomy, sensors, actuators, control systems, programming logic, and safe operation — preparing students for robotics credentials and competitions.',
    credentialFocus: 'Mapped to robotics systems competency domains',
    schoolOverview:
      'A complete robotics readiness pathway with subsystem maps, wiring logic, and programming practice — with per-domain readiness reporting.',
    studentOverview:
      'Understand how robots sense, decide, and act. Build, wire, program, and debug through guided lessons and realistic troubleshooting scenarios.',
    prerequisites: 'None. Pre-Engineering concepts are helpful.',
    alignmentNotes:
      'Mapped to robotics systems competency domains: mechanical structure, electrical systems, sensors, actuators, control logic, programming, and safety.',
    domains: [
      'Robot Subsystems', 'Sensors and Input', 'Actuators and Motors', 'Power Systems',
      'Control Systems', 'Programming Logic', 'Wiring and Electronics', 'Robotics Safety',
    ],
    modules: [
      {
        title: 'Robot Subsystems', description: 'The anatomy of a robot: structure, motion, sensing, control, and power.',
        lessons: [
          { title: 'The Five-Subsystem Map', points: ['Structure: frame and mechanical support', 'Motion: motors, gears, wheels, arms', 'Sensing: inputs about the environment and the robot itself', 'Control: the controller running the program', 'Power: batteries and regulation feeding everything', 'Every malfunction belongs to a subsystem — isolate before fixing'] },
          { title: 'Mechanical Foundations', points: ['Frames balance strength, weight, and access', 'Gear ratios trade speed for torque', 'Drivetrain types: tank, omni, mecanum', 'Drivetrain choice follows the task', 'Fasteners and bearings determine reliability', 'CAD models catch interference before cutting metal'] },
        ],
      },
      {
        title: 'Sensors and Input', description: 'How robots perceive the world and themselves.',
        lessons: [
          { title: 'Digital and Analog Sensors', points: ['Limit switches and bump sensors return digital on/off states', 'Potentiometers and encoders report position', 'Ultrasonic sensors measure distance with sound pulses', 'Gyroscopes track rotation and heading', 'Line sensors read reflected light intensity', 'Sensor choice follows what physical quantity you must measure'] },
          { title: 'Using Sensor Data Well', points: ['Analog signals need scaling to engineering units', 'Noise requires filtering or averaging', 'Calibration maps raw readings to reality', 'Mounting position determines what a sensor actually sees', 'Always plan for sensor failure behavior', 'Log sensor values while debugging — guesswork wastes time'] },
        ],
      },
      {
        title: 'Actuators and Motors', description: 'Making robots move: motors, servos, and pneumatics.',
        lessons: [
          { title: 'DC Motors and Gearboxes', points: ['DC motors convert electrical energy to rotation', 'Torque and speed trade through gearing', 'Motor controllers vary speed with PWM signals', 'Stall current damages motors — protect against jams', 'Encoder feedback closes the loop on position and speed', 'Match motor specs to load, not hopes'] },
          { title: 'Servos and Pneumatics', points: ['Servos hold commanded angles — ideal for arms and grippers', 'Servo range and torque limit what they can lift', 'Pneumatics deliver strong, fast linear motion', 'Compressors, tanks, regulators, and solenoids form the air path', 'Solenoid valves switch air on electrical command', 'Pneumatic systems need pressure-rated fittings and inspection'] },
        ],
      },
      {
        title: 'Power Systems', description: 'Batteries, regulation, and electrical budgeting.',
        lessons: [
          { title: 'Batteries and Regulation', points: ['Voltage must match system requirements', 'Capacity (mAh) determines runtime', 'Voltage regulators protect sensitive electronics', 'Fuses and breakers protect wiring from shorts', 'Battery chemistry affects weight, safety, and charging', 'Low voltage causes brownouts and erratic behavior'] },
          { title: 'Power Budgeting', points: ['Sum the current draw of every device', 'Peak loads occur at motor stall — plan for them', 'Wire gauge must carry the current safely', 'Connectors are a common failure point under vibration', 'A power budget catches overloads on paper first', 'Measure actual draw with a meter to verify the budget'] },
        ],
      },
      {
        title: 'Control Systems', description: 'Open-loop vs. closed-loop control and feedback.',
        lessons: [
          { title: 'Open and Closed Loops', points: ['Open-loop commands without checking results', 'Closed-loop compares output to target and corrects', 'Feedback requires a sensor measuring the controlled quantity', 'Setpoint, error, output: the closed-loop vocabulary', 'Line following is closed-loop; timed driving is open-loop', 'Feedback converts fragile motion into reliable motion'] },
          { title: 'Intro to PID Thinking', points: ['Proportional control reacts to current error', 'Integral terms eliminate persistent offset', 'Derivative terms damp oscillation', 'Tuning balances speed against stability', 'Overcorrection causes oscillation around the target', 'Start with P only, then add terms deliberately'] },
        ],
      },
      {
        title: 'Programming Logic', description: 'Sequences, loops, conditionals, and state machines for robots.',
        lessons: [
          { title: 'Program Structures', points: ['Sequences execute commands in order', 'Loops repeat behaviors until conditions change', 'Conditionals branch on sensor values', 'Variables store readings, counts, and states', 'Functions package reusable behaviors', 'Comments and naming keep programs debuggable'] },
          { title: 'State Machines and Debugging', points: ['A state machine defines modes and the transitions between them', 'Autonomous routines are state machines: wait, drive, turn, act', 'Debugging: print values, isolate subsystems, change one thing', 'Edge cases — sensor failure, blocked path — need explicit handling', 'Test incrementally: subsystem first, integration second', 'Match logs to physical behavior to find the true fault'] },
        ],
      },
      {
        title: 'Wiring and Electronics', description: 'Safe, reliable robot electrical work.',
        lessons: [
          { title: 'Wiring Practice', points: ['Polarity matters: reversed power destroys electronics', 'Crimp and solder connections must survive vibration', 'Color conventions prevent dangerous confusion', 'Strain relief protects connections from tugging', 'Label both ends of every wire', 'Neat routing prevents pinches and shorts'] },
          { title: 'Circuits and Testing', points: ['Series circuits share current; parallel circuits share voltage', 'Ohm\'s law links voltage, current, and resistance', 'A multimeter measures voltage, continuity, and current', 'Continuity checks find broken connections fast', 'Short circuits draw dangerous current — fuse protection is essential', 'Test power rails before connecting expensive electronics'] },
        ],
      },
      {
        title: 'Robotics Safety', description: 'Shop and pit safety for build and competition environments.',
        lessons: [
          { title: 'Personal and Shop Safety', points: ['Safety glasses are mandatory around tools and robots', 'Tie back hair; no loose clothing near rotating parts', 'Disconnect power before working on mechanisms', 'Treat every robot as ready to move unexpectedly', 'Battery charging follows the manufacturer\'s procedure', 'Report damaged tools and batteries immediately'] },
          { title: 'Safe Testing Procedure', points: ['First power-up happens on blocks — wheels off the ground', 'E-stop or quick disconnect within reach', 'Clear the area before enabling motors', 'Test at reduced power first', 'One person commands the robot during tests', 'Post-test inspection catches loosened hardware early'] },
        ],
      },
      {
        title: 'Robot Design Challenge Workflow', description: 'Applying the whole robotics toolkit to a timed design challenge.',
        lessons: [
          { title: 'Challenge Analysis and Strategy', points: ['Read the rules twice; scoring drives strategy', 'List required and optional capabilities', 'Rank tasks by points per second of effort', 'Simple, reliable mechanisms beat clever, fragile ones', 'Allocate build time to the highest-value capability', 'Mock matches expose failure modes early'] },
          { title: 'Build, Test, Iterate', points: ['Prototype subsystems before integrating them', 'Driver practice multiplies mechanical performance', 'Reliability testing means running the full match cycle repeatedly', 'Repair time is part of the design — access panels matter', 'Keep a pit kit: spares, tools, and documentation', 'Post-event analysis feeds the next design'] },
        ],
      },
      {
        title: 'Final Readiness Review', description: 'Consolidated robotics review and timed-exam preparation.',
        lessons: [
          { title: 'Robotics Knowledge Map', points: ['Subsystems: structure, motion, sensing, control, power', 'Sensors: what each measures and how data is used', 'Actuators: motors, servos, pneumatics and their limits', 'Power: budgeting, regulation, protection', 'Control: open vs. closed loop, PID intuition', 'Programming: structures, state machines, debugging'] },
          { title: 'Exam-Day Strategy', points: ['Subsystem questions: identify the failing subsystem first', 'Control questions hinge on whether feedback exists', 'Safety questions have one defensible answer — take it', 'Units matter in motor and power calculations', 'Trace program logic line by line on paper', 'Review your missed practice questions by domain'] },
        ],
      },
    ],
    questions: [
      { domain: 'Robot Subsystems', difficulty: 'easy', q: 'A robot arm droops under load. Which subsystem is most directly responsible?', choices: ['Sensing', 'Motion (mechanical/actuation)', 'Power cabling color', 'Programming comments'], answer: 1, why: 'Droop under load is a motion/actuation capacity issue — torque vs. load.' },
      { domain: 'Robot Subsystems', difficulty: 'medium', q: 'Increasing a gearbox\'s reduction ratio:', choices: ['Increases speed and torque', 'Increases torque and decreases speed', 'Decreases both', 'Has no effect'], answer: 1, why: 'Gearing trades speed for torque proportionally.' },
      { domain: 'Sensors and Input', difficulty: 'easy', q: 'Which sensor measures distance using sound pulses?', choices: ['Gyroscope', 'Ultrasonic sensor', 'Potentiometer', 'Limit switch'], answer: 1, why: 'Ultrasonic sensors time reflected sound to compute distance.' },
      { domain: 'Sensors and Input', difficulty: 'medium', type: 'scenario', q: 'A line-following robot behaves erratically near windows. The MOST likely cause is:', choices: ['Dead battery', 'Sunlight interfering with the optical line sensor', 'Wrong gear ratio', 'Loose wheel'], answer: 1, why: 'Infrared sunlight floods optical sensors; shading or threshold adjustment fixes it.' },
      { domain: 'Actuators and Motors', difficulty: 'easy', q: 'Servos differ from plain DC motors because servos:', choices: ['Use no electricity', 'Hold a commanded angle with internal feedback', 'Spin only continuously', 'Require no controller'], answer: 1, why: 'Servos integrate feedback to reach and hold positions.' },
      { domain: 'Actuators and Motors', difficulty: 'medium', q: 'Holding a stalled motor powered damages it because:', choices: ['It spins too fast', 'Stall current is maximum and overheats the windings', 'The gears strip immediately', 'The battery drains slowly'], answer: 1, why: 'At stall, back-EMF vanishes and current peaks, overheating the motor.' },
      { domain: 'Power Systems', difficulty: 'easy', q: 'Battery capacity in mAh tells you:', choices: ['Maximum voltage', 'How long the battery can supply a given current', 'Physical size', 'Charge speed'], answer: 1, why: 'Capacity × current draw determines runtime.' },
      { domain: 'Power Systems', difficulty: 'medium', q: 'A robot resets whenever both drive motors start. The MOST likely cause is:', choices: ['Bad sensors', 'Voltage sag (brownout) from inrush current', 'Too much code', 'Wrong wheel diameter'], answer: 1, why: 'Motor inrush sags the rail below the controller\'s minimum, causing resets.' },
      { domain: 'Control Systems', difficulty: 'easy', q: 'Closed-loop control requires:', choices: ['A faster motor', 'A sensor providing feedback on the controlled quantity', 'A bigger battery', 'More code lines'], answer: 1, why: 'Feedback from a sensor is what closes the loop.' },
      { domain: 'Control Systems', difficulty: 'medium', q: 'Driving a fixed time without sensors is what kind of control?', choices: ['Closed-loop', 'Open-loop', 'PID', 'Adaptive'], answer: 1, why: 'Timed driving never checks results — the definition of open-loop.' },
      { domain: 'Programming Logic', difficulty: 'easy', q: 'Which structure repeats an action until a condition changes?', choices: ['Sequence', 'Loop', 'Comment', 'Variable'], answer: 1, why: 'Loops repeat; conditionals branch; sequences run in order.' },
      { domain: 'Programming Logic', difficulty: 'medium', q: 'The best first debugging step for a misbehaving autonomous routine is:', choices: ['Rewrite everything', 'Print/log sensor and state values and compare to physical behavior', 'Replace the battery', 'Add more motors'], answer: 1, why: 'Observed data isolates whether the fault is sensing, logic, or actuation.' },
      { domain: 'Wiring and Electronics', difficulty: 'easy', q: 'Which multimeter mode quickly finds a broken wire?', choices: ['Voltage', 'Continuity', 'Temperature', 'Frequency'], answer: 1, why: 'Continuity mode beeps when a circuit path is intact.' },
      { domain: 'Wiring and Electronics', difficulty: 'medium', q: 'Reversed polarity on a motor controller typically causes:', choices: ['Slower operation', 'Immediate electronic damage', 'Better efficiency', 'Nothing'], answer: 1, why: 'Most controllers have no reverse-polarity protection; damage is instant.' },
      { domain: 'Robotics Safety', difficulty: 'easy', q: 'First power-up of a drivetrain should happen:', choices: ['On the competition field', 'On blocks with wheels off the ground and area clear', 'In a crowded pit', 'With the battery already low'], answer: 1, why: 'Blocks prevent unexpected motion from hurting people or the robot.' },
      { domain: 'Robotics Safety', difficulty: 'medium', q: 'Why is hair tied back and loose clothing prohibited near robots?', choices: ['Dress code preference', 'Entanglement in rotating parts causes severe injury', 'It affects Wi-Fi', 'Static electricity only'], answer: 1, why: 'Rotating shafts and gears grab loose material in milliseconds.' },
    ],
  },
  {
    id: 'track_robmfg',
    name: 'Robotics in Manufacturing Fundamentals Readiness',
    shortName: 'Manufacturing Robotics',
    category: 'engineering',
    weeks: 12,
    description:
      'Industrial robotics and automation: robot types, work cells, end effectors, PLCs, safety systems, and manufacturing process integration.',
    credentialFocus: 'Mapped to manufacturing robotics and automation competency domains',
    schoolOverview:
      'Connects your robotics program to manufacturing careers with work-cell design, safety systems, and automation reasoning — documented for industry partners.',
    studentOverview:
      'See how factories actually automate: industrial robot arms, work cells, sensors, PLCs, and the safety systems that protect people working beside machines.',
    prerequisites: 'Robotics or Pre-Engineering recommended.',
    alignmentNotes:
      'Mapped to manufacturing robotics and automation competency domains: industrial robot types, end effectors, work-cell design, PLC fundamentals, and machine safety.',
    domains: [
      'Industrial Robot Types', 'End Effectors and Tooling', 'Work Cell Design', 'PLC Fundamentals',
      'Machine Safety Systems', 'Manufacturing Processes', 'Automation Sensors', 'Quality and Maintenance',
    ],
    modules: [
      {
        title: 'Industrial Robot Types', description: 'Articulated arms, SCARA, delta, and collaborative robots.',
        lessons: [
          { title: 'Robot Arm Configurations', points: ['Articulated (6-axis) arms offer maximum flexibility', 'SCARA robots excel at fast horizontal assembly', 'Delta robots dominate high-speed pick-and-place', 'Cartesian robots move on linear axes — simple and precise', 'Payload and reach define robot selection', 'Repeatability matters more than accuracy in production'] },
          { title: 'Collaborative Robots', points: ['Cobots sense contact and stop to work beside people', 'Force and speed limits enable fenceless operation', 'Risk assessment still determines required safeguards', 'Cobots suit small-batch, mixed production', 'Teach pendants and hand-guiding simplify programming', 'Collaborative does not mean harmless — assessment is mandatory'] },
        ],
      },
      {
        title: 'End Effectors and Tooling', description: 'Grippers, welders, and tool changers — where robots meet work.',
        lessons: [
          { title: 'Gripper Selection', points: ['Parallel, angular, and vacuum grippers suit different parts', 'Grip force must hold without damaging the part', 'Vacuum cups need clean, non-porous surfaces', 'Compliance handles part variation', 'Tool center point calibration makes motion accurate', 'Quick-change systems let one robot do many jobs'] },
          { title: 'Process Tooling', points: ['Welding torches, dispensers, and spindles turn arms into workers', 'Dress packages route cables and hoses safely', 'Tool weight counts against payload', 'Sensors verify part presence in the gripper', 'Tool wear affects quality — schedule inspection', 'Guarding covers pinch points at the tool, not just the fence'] },
        ],
      },
      {
        title: 'Work Cell Design', description: 'Laying out robots, fixtures, conveyors, and people.',
        lessons: [
          { title: 'Cell Layout Principles', points: ['Cycle time drives the whole design', 'Reach studies verify the robot covers all stations', 'Part presentation consistency enables automation', 'Conveyors and fixtures feed parts repeatably', 'Ergonomic load stations protect human coworkers', 'Simulation catches collisions before hardware exists'] },
          { title: 'Cell Integration', points: ['Handshakes between robot, PLC, and machines coordinate sequence', 'Interlocks prevent motion when conditions are unsafe', 'Poka-yoke (error-proofing) fixtures stop bad assemblies', 'Buffers absorb timing variation between stations', 'Changeover design determines flexibility', 'OEE — availability, performance, quality — measures cell health'] },
        ],
      },
      {
        title: 'PLC Fundamentals', description: 'The programmable logic controller at the heart of automation.',
        lessons: [
          { title: 'PLC Basics', points: ['PLCs read inputs, execute logic, and drive outputs continuously', 'Scan cycle: read, execute, write — thousands of times per second', 'Inputs: sensors and buttons; outputs: motors, valves, lights', 'Ladder logic reads like electrical schematics', 'Discrete vs. analog I/O matches signal types', 'Industrial hardening makes PLCs survive factory floors'] },
          { title: 'Reading Ladder Logic', points: ['Rungs evaluate left to right, top to bottom', 'Normally open contacts pass power when true', 'Coils drive outputs at rung end', 'Seal-in circuits latch outputs until a stop condition', 'Timers and counters build sequences', 'Trace logic on paper before changing live programs'] },
        ],
      },
      {
        title: 'Machine Safety Systems', description: 'Guarding, e-stops, and safety-rated controls.',
        lessons: [
          { title: 'Guarding and Protective Devices', points: ['Fixed guards physically block hazard zones', 'Interlocked gates stop motion when opened', 'Light curtains halt machines when beams break', 'E-stops are for emergencies, not routine stops', 'Safety relays monitor protective devices reliably', 'Risk assessment determines the required safety level'] },
          { title: 'Lockout/Tagout', points: ['LOTO isolates energy before maintenance', 'Lock, tag, and try: verify zero energy', 'Stored energy — air, springs, gravity — must be released', 'Each worker applies their own lock', 'Only the lock\'s owner removes it', 'LOTO violations are a leading cause of industrial injury'] },
        ],
      },
      {
        title: 'Manufacturing Processes', description: 'Machining, forming, joining, and additive processes.',
        lessons: [
          { title: 'Core Processes', points: ['Machining removes material: milling, turning, drilling', 'Forming reshapes material: stamping, bending, molding', 'Joining combines parts: welding, fastening, adhesive', 'Additive manufacturing builds parts layer by layer', 'Casting pours liquid material into molds', 'Process selection follows material, volume, and tolerance'] },
          { title: 'Process Capability', points: ['Tolerances define acceptable variation', 'Capability measures how well a process holds tolerance', 'Fixtures locate parts repeatably', 'Cutting parameters trade speed against tool life', 'Inspection plans verify critical dimensions', 'Automation magnifies both good and bad process design'] },
        ],
      },
      {
        title: 'Automation Sensors', description: 'The sensing layer of the automated factory.',
        lessons: [
          { title: 'Industrial Sensor Types', points: ['Photoelectric sensors detect presence with light beams', 'Inductive sensors detect metal without contact', 'Capacitive sensors detect non-metals and liquids', 'Encoders track shaft position and speed', 'Vision systems inspect, guide, and read codes', 'Pressure and flow sensors watch pneumatic systems'] },
          { title: 'Sensor Integration', points: ['PNP vs. NPN wiring must match the input card', 'Debouncing prevents false triggers', 'Sensor placement determines detection reliability', 'Ambient light, dust, and vibration defeat poorly chosen sensors', 'Diagnostics should report sensor state to operators', 'Spare sensors and documented settings shorten downtime'] },
        ],
      },
      {
        title: 'Quality and Maintenance', description: 'Keeping automated cells producing good parts.',
        lessons: [
          { title: 'Quality in Automation', points: ['In-process checks catch defects at the source', 'SPC charts distinguish normal variation from drift', 'Traceability links parts to process data', 'Gauge R&R validates the measurement system itself', 'Reject chutes and verification sensors stop escapes', 'Quality data drives process adjustment, not blame'] },
          { title: 'Maintenance Fundamentals', points: ['Preventive maintenance follows schedules and checklists', 'Predictive maintenance watches vibration and temperature trends', 'Spare-part strategy balances cost against downtime', 'Lubrication and cleaning prevent most mechanical wear', 'Documented procedures make maintenance repeatable', 'Downtime analysis targets the biggest losses first'] },
        ],
      },
      {
        title: 'Automation Economics', description: 'Justifying and evaluating automation investments.',
        lessons: [
          { title: 'The Business Case for Automation', points: ['Payback period compares investment to annual savings', 'Labor, scrap, and throughput gains feed the calculation', 'Hidden costs: integration, training, maintenance, tooling', 'Hidden gains: consistency, safety, and data capture', 'Utilization determines whether the economics work', 'Start with the bottleneck process, not the flashiest one'] },
          { title: 'Scaling Automation', points: ['Pilot cells prove concepts before rollout', 'Standard cells replicate faster than custom ones', 'Operator training determines adoption success', 'Maintenance capability must grow with automation', 'Data from automated cells drives further improvement', 'Automation strategy follows product and volume strategy'] },
        ],
      },
      {
        title: 'Final Readiness Review', description: 'Consolidated manufacturing robotics review and exam strategy.',
        lessons: [
          { title: 'Manufacturing Robotics Knowledge Map', points: ['Robots: configurations, payload, repeatability', 'Tooling: grippers, process tools, TCP', 'Cells: cycle time, layout, interlocks, OEE', 'PLCs: scan cycle, I/O, ladder logic', 'Safety: guarding, light curtains, e-stops, LOTO', 'Processes and quality: capability, SPC, maintenance'] },
          { title: 'Exam-Day Strategy', points: ['Safety questions have exactly one correct answer — choose it', 'Ladder logic: trace left to right on paper', 'Cycle-time questions: find the bottleneck station', 'Robot selection questions test payload and reach fit', 'LOTO steps have a fixed order — know it', 'Review missed practice questions grouped by domain'] },
        ],
      },
    ],
    questions: [
      { domain: 'Industrial Robot Types', difficulty: 'easy', q: 'Which robot type dominates high-speed pick-and-place of small parts?', choices: ['Articulated 6-axis', 'Delta', 'Cartesian gantry', 'Collaborative'], answer: 1, why: 'Delta robots\' parallel design enables very fast, light pick-and-place.' },
      { domain: 'Industrial Robot Types', difficulty: 'medium', q: 'Repeatability differs from accuracy in that repeatability is:', choices: ['Hitting the true coordinate', 'Returning to the same taught position consistently', 'Moving faster', 'Lifting heavier loads'], answer: 1, why: 'Production cares that the robot returns to the same spot every cycle.' },
      { domain: 'End Effectors and Tooling', difficulty: 'easy', q: 'Vacuum grippers work best on:', choices: ['Porous, dusty surfaces', 'Clean, non-porous flat surfaces', 'Hot surfaces', 'Sharp-edged parts'], answer: 1, why: 'Vacuum cups need a seal; porous or dirty surfaces leak.' },
      { domain: 'End Effectors and Tooling', difficulty: 'medium', q: 'Why must tool center point (TCP) be calibrated after changing tooling?', choices: ['For warranty purposes', 'So programmed motions are accurate relative to the new tool\'s working point', 'To reduce noise', 'To save power'], answer: 1, why: 'Programs reference the TCP; a new tool moves the working point.' },
      { domain: 'Work Cell Design', difficulty: 'easy', q: 'Cycle time in a work cell is:', choices: ['The lunch break length', 'The time to complete one full production cycle', 'Robot boot time', 'Conveyor length'], answer: 1, why: 'Cycle time is the per-part production interval — the cell\'s core metric.' },
      { domain: 'Work Cell Design', difficulty: 'medium', type: 'scenario', q: 'A cell\'s robot waits 8 seconds per cycle for a slow press. The best first improvement targets:', choices: ['Faster robot motions', 'The press — the bottleneck defines cycle time', 'New grippers', 'Brighter lighting'], answer: 1, why: 'Throughput is set by the slowest station; optimizing elsewhere changes nothing.' },
      { domain: 'PLC Fundamentals', difficulty: 'easy', q: 'The PLC scan cycle order is:', choices: ['Write, read, execute', 'Read inputs, execute logic, write outputs', 'Execute, write, read', 'Random'], answer: 1, why: 'PLCs continuously read inputs, solve logic, then update outputs.' },
      { domain: 'PLC Fundamentals', difficulty: 'medium', q: 'In ladder logic, a seal-in (latch) circuit:', choices: ['Stops the motor immediately', 'Keeps an output energized after the start button releases, until a stop condition', 'Reverses the motor', 'Measures current'], answer: 1, why: 'The output\'s own contact parallels the start button, maintaining the rung.' },
      { domain: 'Machine Safety Systems', difficulty: 'easy', q: 'An emergency stop is intended for:', choices: ['Routine cycle stops', 'Emergencies only — not normal operation', 'Pausing for lunch', 'Speed control'], answer: 1, why: 'E-stops are safety devices for abnormal conditions, not operational stops.' },
      { domain: 'Machine Safety Systems', difficulty: 'medium', q: 'The correct lockout/tagout sequence is:', choices: ['Try, lock, tag', 'Shut down, isolate energy, lock, tag, release stored energy, try (verify)', 'Tag, work, unlock', 'Lock the door and begin'], answer: 1, why: 'LOTO requires isolation, personal locks/tags, stored-energy release, and verification.' },
      { domain: 'Manufacturing Processes', difficulty: 'easy', q: 'Milling and turning are examples of:', choices: ['Forming', 'Machining (material removal)', 'Joining', 'Casting'], answer: 1, why: 'Both cut material away to reach final shape.' },
      { domain: 'Manufacturing Processes', difficulty: 'medium', q: 'Additive manufacturing builds parts by:', choices: ['Cutting from solid stock', 'Depositing material layer by layer', 'Pouring into molds', 'Stamping sheets'], answer: 1, why: 'Layer-by-layer deposition defines additive processes like 3D printing.' },
      { domain: 'Automation Sensors', difficulty: 'easy', q: 'Inductive proximity sensors detect:', choices: ['Any object', 'Metal objects without contact', 'Only liquids', 'Colors'], answer: 1, why: 'Inductive sensors sense metal via electromagnetic fields.' },
      { domain: 'Automation Sensors', difficulty: 'medium', q: 'A photoelectric sensor false-triggers near a sunny loading dock. The best fix is:', choices: ['Replace the PLC', 'Shade the sensor or choose a model immune to ambient light', 'Remove the sensor', 'Add more triggers'], answer: 1, why: 'Ambient light overwhelms the receiver; shielding or polarized/background-suppression models fix it.' },
      { domain: 'Quality and Maintenance', difficulty: 'easy', q: 'SPC charts are used to:', choices: ['Schedule shifts', 'Distinguish normal process variation from drift requiring action', 'Order raw material', 'Design logos'], answer: 1, why: 'Statistical process control separates common-cause noise from real change.' },
      { domain: 'Quality and Maintenance', difficulty: 'medium', q: 'Predictive maintenance differs from preventive maintenance because it:', choices: ['Costs nothing', 'Uses measured condition trends (vibration, temperature) to time intervention', 'Follows a calendar', 'Requires no sensors'], answer: 1, why: 'Predictive maintenance acts on actual equipment condition, not fixed intervals.' },
    ],
  },
  {
    id: 'track_cad',
    name: 'Autodesk CAD Readiness',
    shortName: 'CAD Design',
    category: 'engineering',
    weeks: 14,
    description:
      'Computer-aided design from sketch to model to drawing: 2D drafting, 3D parametric modeling, assemblies, and documentation.',
    credentialFocus: 'Mapped to AutoCAD, Inventor, and Fusion-style competency domains',
    schoolOverview:
      'A complete CAD readiness pathway covering 2D drafting and 3D parametric modeling, with part-identification practice and documented readiness.',
    studentOverview:
      'Learn to design like an engineer: precise 2D drafting, parametric 3D models, assemblies that move, and professional drawings ready for manufacturing.',
    prerequisites: 'None. Basic geometry is helpful.',
    alignmentNotes:
      'Mapped to AutoCAD, Inventor, and Fusion-style competency domains: drawing setup, 2D geometry, parametric sketching, features, assemblies, and documentation.',
    domains: [
      'Drawing Setup and Navigation', '2D Geometry and Editing', 'Dimensions and Annotation', 'Parametric Sketching',
      '3D Features', 'Assemblies and Constraints', 'Technical Documentation', 'Design for Manufacturing',
    ],
    modules: [
      {
        title: 'Drawing Setup and Navigation', description: 'Workspaces, units, layers, and view control.',
        lessons: [
          { title: 'Workspace and Units', points: ['Set units before drawing — inches vs. millimeters changes everything', 'Model space holds geometry; paper space holds sheets', 'Templates carry standards: units, layers, title blocks', 'Grid and snap modes speed precise placement', 'Save early, save often, use versioned names', 'Zoom extents recovers a lost view instantly'] },
          { title: 'Layers and Properties', points: ['Layers organize geometry by function: object, hidden, center, dims', 'Color and linetype by layer keep drawings consistent', 'Freeze unused layers to simplify the view', 'The Properties palette edits any selected object', 'Matching properties standardizes existing objects', 'Never draw everything on layer 0 in shared files'] },
        ],
      },
      {
        title: '2D Geometry and Editing', description: 'Creating and modifying precise 2D shapes.',
        lessons: [
          { title: 'Drawing Commands', points: ['Line, circle, arc, and rectangle create most geometry', 'Object snaps lock to endpoints, midpoints, and centers', 'Polar tracking and ortho constrain angles', 'Polygons and ellipses cover special shapes', 'Polylines create connected single objects', 'Coordinates can be absolute, relative, or polar'] },
          { title: 'Editing Commands', points: ['Move, copy, rotate, and mirror reposition geometry', 'Trim and extend clean up intersections', 'Fillet and chamfer finish corners', 'Offset creates parallel geometry at set distance', 'Array repeats objects in patterns', 'Grips edit quickly without commands'] },
        ],
      },
      {
        title: 'Dimensions and Annotation', description: 'Communicating size and requirements unambiguously.',
        lessons: [
          { title: 'Dimensioning Practice', points: ['Dimensions belong on their own layer', 'Dimension to features that matter functionally', 'Avoid duplicate dimensions — each size once', 'Baseline and continue chains speed placement', 'Dimension styles standardize arrows, text, and units', 'Leaders and notes carry manufacturing instructions'] },
          { title: 'Tolerances and Symbols', points: ['Tolerances state allowable variation', 'Tighter tolerances cost more — apply with intent', 'Standard symbols communicate across shops', 'Center marks identify hole locations', 'Text height must stay legible at plot scale', 'A complete drawing needs no verbal explanation'] },
        ],
      },
      {
        title: 'Parametric Sketching', description: 'Constrained sketches as the foundation of 3D models.',
        lessons: [
          { title: 'Sketch Geometry and Constraints', points: ['Sketches live on planes or faces', 'Geometric constraints: coincident, parallel, perpendicular, tangent', 'Dimensional constraints drive exact sizes', 'A fully constrained sketch turns black — the goal', 'Construction geometry guides without appearing in the model', 'Sketch on origin planes for predictable behavior'] },
          { title: 'Design Intent in Sketches', points: ['Design intent: how the model should respond to change', 'Reference dimensions from functional datums', 'Symmetry constraints enforce balance automatically', 'Avoid over-constraining — conflicts break sketches', 'Parameters name key dimensions for quick edits', 'Sketch quality determines model stability'] },
        ],
      },
      {
        title: '3D Features', description: 'Extrude, revolve, fillet, and shell — building real parts.',
        lessons: [
          { title: 'Solid Features', points: ['Extrude adds or removes material along a path', 'Revolve spins a profile around an axis', 'Hole features place standard fasteners precisely', 'Fillets and chamfers finish edges for safety and strength', 'Shell hollows a solid to uniform wall thickness', 'Feature order matters — the tree is a recipe'] },
          { title: 'Editing and Robust Models', points: ['Edit the sketch or feature, not the picture', 'Roll back the feature tree to diagnose failures', 'Patterns repeat features linearly or circularly', 'Mirrored features enforce symmetry', 'Suppress features to test design variants', 'Rebuild errors usually trace to lost sketch references'] },
        ],
      },
      {
        title: 'Assemblies and Constraints', description: 'Combining parts into working mechanisms.',
        lessons: [
          { title: 'Building Assemblies', points: ['Assemblies reference part files — they do not copy them', 'Ground the first component to anchor the assembly', 'Mate constraints join faces and axes', 'Insert and flush constraints position fasteners and parts', 'Degrees of freedom drop as constraints accumulate', 'Interference checks find overlapping parts'] },
          { title: 'Motion and Presentation', points: ['Motion constraints simulate gears and rotation', 'Drive constraints animate mechanisms', 'Exploded views document assembly order', 'Section views reveal internal fit', 'Bill of materials lists components automatically', 'Verify motion through the full range, not just one pose'] },
        ],
      },
      {
        title: 'Technical Documentation', description: 'Drawings that manufacturers can build from.',
        lessons: [
          { title: 'Drawing Views', points: ['Base view choice determines everything downstream', 'Projected views follow first- or third-angle convention', 'Section views expose internal geometry', 'Detail views enlarge small features', 'Broken views shorten long parts', 'View scale must balance clarity and sheet space'] },
          { title: 'Complete Drawing Packages', points: ['Title block: part number, material, revision, approvals', 'Revision tables track every change', 'General notes cover defaults and standards', 'Balloons tie BOM items to views', 'Export formats: PDF for review, STEP/DXF for manufacture', 'Check every dimension against the model before release'] },
        ],
      },
      {
        title: 'Design for Manufacturing', description: 'Designing parts that can actually be made.',
        lessons: [
          { title: 'DFM Principles', points: ['Uniform wall thickness prevents molding defects', 'Draft angles release parts from molds', 'Generous fillets reduce stress and machining cost', 'Avoid features requiring special tooling', 'Standard hole sizes use standard drills', 'Tolerances tighter than needed inflate cost dramatically'] },
          { title: 'Material and Process Awareness', points: ['Machining favors prismatic shapes and accessible features', 'Sheet metal follows bend rules and K-factors', '3D printing enables complexity but needs orientation planning', 'Casting requires draft and uniform sections', 'Weldments need joint access and distortion allowance', 'Ask the manufacturer early — redesigns cost more later'] },
        ],
      },
      {
        title: 'CAD Data Management and Collaboration', description: 'Managing files, versions, and team workflows around CAD data.',
        lessons: [
          { title: 'File Management Discipline', points: ['Naming conventions make files findable years later', 'Assemblies reference part files — move files and links break', 'Pack-and-go collects all referenced files for transfer', 'Version control tracks design history', 'Released files are read-only to prevent accidental edits', 'Backup discipline protects months of modeling work'] },
          { title: 'Team CAD Workflows', points: ['Shared libraries standardize common parts', 'Design reviews catch issues before drawings release', 'Markup tools communicate changes directly on the model', 'Cloud collaboration keeps distributed teams synchronized', 'Export control and IP protection matter for shared designs', 'Hand-off checklists keep manufacturing informed'] },
        ],
      },
      {
        title: 'Final Readiness Review', description: 'Consolidated CAD review and timed-exam strategy.',
        lessons: [
          { title: 'CAD Knowledge Map', points: ['Setup: units, layers, templates', '2D: draw and edit with snaps and precision input', 'Annotation: dimensions, tolerances, symbols', 'Sketching: constraints, design intent', 'Features: extrude, revolve, fillet, tree management', 'Assemblies and drawings: constraints, views, BOMs'] },
          { title: 'Exam-Day Strategy', points: ['Performance tasks grade the finished model — verify before submitting', 'Check units first in every task', 'Fully constrain sketches before leaving them', 'Use the most efficient command — any correct method scores', 'Read drawing questions view by view', 'Practice timed part builds until workflows are automatic'] },
        ],
      },
    ],
    questions: [
      { domain: 'Drawing Setup and Navigation', difficulty: 'easy', q: 'Why set drawing units before starting geometry?', choices: ['For appearance', 'All measurements and downstream manufacturing depend on them', 'To save file space', 'It is optional'], answer: 1, why: 'Wrong units corrupt every dimension and any exported part.' },
      { domain: 'Drawing Setup and Navigation', difficulty: 'medium', q: 'Layers primarily serve to:', choices: ['Speed the computer', 'Organize geometry by function with controlled visibility and properties', 'Encrypt drawings', 'Add colors for decoration'], answer: 1, why: 'Layer discipline keeps shared drawings readable and consistent.' },
      { domain: '2D Geometry and Editing', difficulty: 'easy', q: 'Which snap locks precisely to the middle of a line?', choices: ['Endpoint', 'Midpoint', 'Center', 'Node'], answer: 1, why: 'Midpoint snap targets the center of linear objects.' },
      { domain: '2D Geometry and Editing', difficulty: 'medium', q: 'Which command creates a copy of geometry parallel at a set distance?', choices: ['Mirror', 'Offset', 'Array', 'Scale'], answer: 1, why: 'Offset produces parallel copies at a specified gap.' },
      { domain: 'Dimensions and Annotation', difficulty: 'easy', q: 'A dimension should appear on a drawing:', choices: ['As many times as possible', 'Exactly once', 'Only on the front view', 'Only if round'], answer: 1, why: 'Duplicate dimensions risk contradiction after revisions.' },
      { domain: 'Dimensions and Annotation', difficulty: 'medium', q: 'Why apply tight tolerances sparingly?', choices: ['They are hard to type', 'Manufacturing cost rises sharply with tolerance tightness', 'They look cluttered', 'Standards forbid them'], answer: 1, why: 'Precision processes and inspection make tight tolerances expensive.' },
      { domain: 'Parametric Sketching', difficulty: 'easy', q: 'A fully constrained sketch:', choices: ['Cannot be edited ever', 'Has its shape and position completely defined — the design goal', 'Is broken', 'Uses only circles'], answer: 1, why: 'Full constraint means predictable behavior when dimensions change.' },
      { domain: 'Parametric Sketching', difficulty: 'medium', q: 'Design intent in a sketch means:', choices: ['Making it look nice', 'Structuring constraints so the model updates correctly when sizes change', 'Using many colors', 'Avoiding dimensions'], answer: 1, why: 'Intent-driven models survive edits; sloppy ones collapse.' },
      { domain: '3D Features', difficulty: 'easy', q: 'Which feature spins a sketch profile around an axis?', choices: ['Extrude', 'Revolve', 'Fillet', 'Shell'], answer: 1, why: 'Revolve creates turned shapes like shafts and knobs.' },
      { domain: '3D Features', difficulty: 'medium', q: 'Why does feature ORDER matter in a parametric model?', choices: ['It affects file size only', 'Later features depend on earlier geometry — the tree is a recipe', 'It changes the color', 'It does not matter'], answer: 1, why: 'Each feature builds on previous ones; reordering can break references.' },
      { domain: 'Assemblies and Constraints', difficulty: 'easy', q: 'The first component placed in an assembly should be:', choices: ['The smallest screw', 'Grounded to anchor the assembly', 'Hidden', 'Deleted later'], answer: 1, why: 'A grounded base component gives all others a stable reference.' },
      { domain: 'Assemblies and Constraints', difficulty: 'medium', q: 'An interference check detects:', choices: ['Slow computers', 'Components occupying the same space', 'Missing drawings', 'Wrong colors'], answer: 1, why: 'Interference detection finds parts that physically overlap.' },
      { domain: 'Technical Documentation', difficulty: 'easy', q: 'Section views are used to:', choices: ['Decorate the title block', 'Reveal internal features by cutting the part', 'Enlarge the drawing', 'Hide dimensions'], answer: 1, why: 'Sections expose interior geometry hidden in exterior views.' },
      { domain: 'Technical Documentation', difficulty: 'medium', q: 'Balloons on an assembly drawing connect:', choices: ['Views to the title block', 'BOM line items to components in the views', 'Notes to the border', 'Revisions to dates'], answer: 1, why: 'Balloon numbers match the bill of materials item numbers.' },
      { domain: 'Design for Manufacturing', difficulty: 'easy', q: 'Uniform wall thickness matters most in which process?', choices: ['Laser cutting', 'Injection molding', 'Hand filing', 'Painting'], answer: 1, why: 'Uneven walls cool unevenly, causing sink and warp in molded parts.' },
      { domain: 'Design for Manufacturing', difficulty: 'medium', type: 'scenario', q: 'A designed bracket needs a hole size no standard drill makes. The DFM-correct response is:', choices: ['Keep it — it looks precise', 'Resize to the nearest standard drill size if function allows', 'Delete the hole', 'Tolerance it tighter'], answer: 1, why: 'Standard sizes use standard tooling; custom sizes add cost and error.' },
    ],
  },
  {
    id: 'track_osha10g',
    name: 'OSHA 10 General Industry Readiness',
    shortName: 'OSHA 10 General Industry',
    category: 'engineering',
    weeks: 8,
    description:
      'Workplace safety fundamentals for general industry: hazard recognition, walking-working surfaces, electrical, PPE, hazard communication, and emergency action.',
    credentialFocus: 'Mapped to OSHA 10 general industry topic categories',
    schoolOverview:
      'Prepares students for OSHA 10 general industry training with hazard-spotting practice and documented completion of every required topic category.',
    studentOverview:
      'Learn to recognize, avoid, and report workplace hazards — the knowledge that keeps you and your coworkers safe and that employers require.',
    prerequisites: 'None.',
    alignmentNotes:
      'Mapped to OSHA 10 general industry topic categories: introduction to OSHA, hazard recognition, PPE, electrical safety, hazard communication, walking-working surfaces, and emergency planning. EduSphere USA provides readiness preparation, not OSHA outreach training certification.',
    domains: [
      'OSHA Rights and Responsibilities', 'Hazard Recognition', 'Personal Protective Equipment', 'Electrical Safety',
      'Hazard Communication', 'Walking and Working Surfaces', 'Emergency Action and Fire', 'Machine Guarding',
    ],
    modules: [
      {
        title: 'OSHA Rights and Responsibilities', description: 'Worker rights, employer duties, and how OSHA operates.',
        lessons: [
          { title: 'Worker Rights', points: ['Workers have the right to a safe workplace', 'The right to know about hazards and access exposure records', 'The right to file a complaint without retaliation', 'The right to refuse work presenting imminent danger, with protections', 'Training must be provided in a language workers understand', 'Whistleblower protections guard reporting'] },
          { title: 'Employer Responsibilities and Inspections', points: ['Employers must provide a workplace free from recognized hazards', 'The General Duty Clause covers unregulated serious hazards', 'Recordkeeping tracks injuries and illnesses (300 logs)', 'OSHA inspections follow a priority order: imminent danger first', 'Citations carry penalties scaled by severity and willfulness', 'Posting requirements keep rights visible in the workplace'] },
        ],
      },
      {
        title: 'Hazard Recognition', description: 'Seeing hazards before they hurt someone.',
        lessons: [
          { title: 'Hazard Categories', points: ['Safety hazards: slips, trips, falls, moving machinery', 'Chemical hazards: solvents, dusts, fumes', 'Biological hazards: bloodborne pathogens, mold', 'Physical hazards: noise, heat, radiation', 'Ergonomic hazards: repetition, force, awkward posture', 'Workplace violence is a recognized hazard category'] },
          { title: 'Hazard Spotting Practice', points: ['Walk the area systematically: floor, work height, overhead', 'Follow the energy: electrical, mechanical, stored, thermal', 'Watch the task, not just the area', 'Near-miss reports predict injuries — report them', 'The hierarchy of controls: eliminate, substitute, engineer, administrate, PPE', 'Photos and notes make hazard reports actionable'] },
        ],
      },
      {
        title: 'Personal Protective Equipment', description: 'Selecting, using, and maintaining PPE correctly.',
        lessons: [
          { title: 'PPE Types and Selection', points: ['Head, eye/face, hearing, respiratory, hand, and foot protection', 'Hazard assessment drives PPE selection', 'PPE is the LAST line of defense, not the first', 'Gloves must match the chemical or cut hazard', 'Safety glasses vs. goggles vs. face shields for different exposures', 'Hi-vis clothing makes workers visible to equipment operators'] },
          { title: 'Fit, Use, and Limits', points: ['PPE only works when it fits — respirators require fit testing', 'Damaged PPE is no PPE: inspect before each use', 'Training covers donning, doffing, and disposal', 'Employers provide and replace PPE at no cost', 'PPE does not remove the hazard — engineering controls come first', 'Comfort and compliance improve with proper sizing'] },
        ],
      },
      {
        title: 'Electrical Safety', description: 'Shock, arc flash, and safe work practices.',
        lessons: [
          { title: 'Electrical Hazards', points: ['Shock severity depends on current path and duration', 'Arc flash produces extreme heat and blast', 'Overhead lines kill through contact with equipment, not just touch', 'Damaged cords and missing ground prongs are common killers', 'Wet conditions multiply shock risk', 'Only qualified persons work on energized equipment'] },
          { title: 'Safe Electrical Practices', points: ['De-energize before work; lockout/tagout applies to electrical energy', 'Test before touch: verify zero energy', 'GFCIs protect against ground faults in wet areas', 'Insulated tools and gloves for electrical work', 'Panel clearances keep access and airflow safe', 'Extension cords are temporary, never permanent wiring'] },
        ],
      },
      {
        title: 'Hazard Communication', description: 'Labels, Safety Data Sheets, and chemical handling.',
        lessons: [
          { title: 'Labels and SDS', points: ['Every container needs a label: identity, pictograms, warnings', 'SDS sections cover hazards, first aid, handling, and disposal', 'Pictograms communicate across languages', 'SDSs must be accessible to workers at all times', 'Secondary containers need labels too', 'Inventory lists tie labels to SDSs'] },
          { title: 'Safe Chemical Handling', points: ['Read the SDS before first use of any chemical', 'Ventilation controls airborne exposure', 'Never mix chemicals unless the process specifies it', 'Store incompatible chemicals apart', 'Spill procedures and kits must be known before spills happen', 'PPE for chemicals comes from the SDS, not guesswork'] },
        ],
      },
      {
        title: 'Walking and Working Surfaces', description: 'Falls, ladders, scaffolds, and housekeeping.',
        lessons: [
          { title: 'Fall Prevention', points: ['Falls are a leading cause of workplace death', 'Guardrails protect edges and openings', 'Hole covers must be secured and marked', 'Fall protection is required at set heights by industry', 'Housekeeping prevents slips and trips', 'Wet floors need signs and cleanup'] },
          { title: 'Ladders and Scaffolds', points: ['Inspect ladders before use; damaged ones get tagged out', 'Three points of contact at all times', 'Extension ladders extend three feet past the landing', 'Scaffolds require guardrails and stable footing', 'Never exceed load ratings', 'Competent persons inspect scaffolds before each shift'] },
        ],
      },
      {
        title: 'Emergency Action and Fire', description: 'Preparing for fires, evacuations, and emergencies.',
        lessons: [
          { title: 'Emergency Action Plans', points: ['EAPs define alarms, routes, assembly points, and accountability', 'Know two ways out of your work area', 'Exit routes stay clear and marked', 'Evacuation wardens sweep and account for people', 'Never re-enter until cleared', 'Drills make evacuation automatic'] },
          { title: 'Fire Basics and Extinguishers', points: ['Fire needs fuel, heat, and oxygen — remove one to extinguish', 'Extinguisher classes: A ordinary, B flammable liquids, C electrical', 'PASS: Pull, Aim, Squeeze, Sweep', 'Fight only small fires with a clear escape behind you', 'Storage and housekeeping prevent most fires', 'Hot-work permits control welding and cutting ignition'] },
        ],
      },
      {
        title: 'Machine Guarding', description: 'Keeping people and moving parts separated.',
        lessons: [
          { title: 'Guarding Requirements', points: ['Point of operation guards protect where work happens', 'Rotating parts, nip points, and pinch points require barriers', 'Guards must not be removed or bypassed', 'Interlocks stop machines when guards open', 'Safeguarding devices: two-hand controls, presence sensing', 'Report missing or damaged guards immediately'] },
          { title: 'Safe Machine Operation', points: ['Never reach into a running machine', 'Loose clothing and jewelry snag in rotating parts', 'Jam clearing requires lockout, not just stop buttons', 'Training precedes operation of any machine', 'Horseplay near machinery causes serious injuries', 'Guarding applies to conveyors, presses, saws, and mixers alike'] },
        ],
      },
      {
        title: 'Ergonomics and Materials Handling', description: 'Protecting the body during lifting and repetitive work.',
        lessons: [
          { title: 'Ergonomics Fundamentals', points: ['Ergonomic injuries develop from repetition, force, and posture', 'Neutral postures reduce strain on joints and spine', 'Workstation setup: monitor height, chair support, keyboard position', 'Microbreaks interrupt cumulative strain', 'Early symptoms — tingling and soreness — deserve reporting', 'Job rotation spreads repetitive stress across workers'] },
          { title: 'Safe Lifting and Handling', points: ['Plan the lift: path, weight, grip, and help', 'Lift with the legs, keep the load close, avoid twisting', 'Team lifts and mechanical aids for heavy or awkward loads', 'Push rather than pull carts where possible', 'Conveyors and hoists beat manual handling', 'Report pain early — chronic injuries start small'] },
        ],
      },
      {
        title: 'Final Readiness Review', description: 'Consolidated safety review and exam preparation.',
        lessons: [
          { title: 'General Industry Knowledge Map', points: ['Rights: safe workplace, know hazards, complain without retaliation', 'Hazards: safety, chemical, biological, physical, ergonomic', 'PPE: last resort, fit-tested, employer-provided', 'Electrical: de-energize, test before touch, GFCI', 'HazCom: labels, SDSs, pictograms', 'Surfaces, fire, guarding: falls, PASS, point-of-operation'] },
          { title: 'Exam-Day Strategy', points: ['Safety questions have one defensible answer — the safest one', 'Hierarchy of controls order appears constantly', 'Know extinguisher classes and PASS cold', 'Rights questions emphasize no-retaliation protections', 'Scenario questions reward eliminate-substitute-engineer thinking', 'Review missed practice questions by domain'] },
        ],
      },
    ],
    questions: [
      { domain: 'OSHA Rights and Responsibilities', difficulty: 'easy', q: 'Workers who report hazards to OSHA are protected from:', choices: ['Pay reduction only', 'Retaliation by their employer', 'Having to work overtime', 'Nothing'], answer: 1, why: 'Whistleblower protections prohibit retaliation for safety complaints.' },
      { domain: 'OSHA Rights and Responsibilities', difficulty: 'medium', q: 'The General Duty Clause requires employers to:', choices: ['Pay overtime', 'Provide a workplace free from recognized serious hazards', 'Offer health insurance', 'Hold monthly meetings'], answer: 1, why: 'It covers serious recognized hazards even without a specific standard.' },
      { domain: 'Hazard Recognition', difficulty: 'easy', q: 'In the hierarchy of controls, the FIRST choice is always:', choices: ['PPE', 'Elimination of the hazard', 'Warning signs', 'Training'], answer: 1, why: 'Removing the hazard beats managing exposure to it.' },
      { domain: 'Hazard Recognition', difficulty: 'medium', type: 'scenario', q: 'A worker reports several near-misses at a loading dock. The best organizational response is:', choices: ['Ignore — nobody was hurt', 'Investigate and correct conditions; near-misses predict injuries', 'Discipline the reporter', 'Wait for an injury to justify action'], answer: 1, why: 'Near-misses are free warnings; acting on them prevents injuries.' },
      { domain: 'Personal Protective Equipment', difficulty: 'easy', q: 'PPE is considered:', choices: ['The first line of defense', 'The last line of defense after other controls', 'A substitute for guards', 'Optional decoration'], answer: 1, why: 'PPE protects only the wearer and fails if misused; it is the final control.' },
      { domain: 'Personal Protective Equipment', difficulty: 'medium', q: 'Respirators require which step before use?', choices: ['Painting', 'Fit testing for each user', 'Sharing between shifts', 'Washing with solvent'], answer: 1, why: 'Protection depends on a face seal; fit testing verifies it per user.' },
      { domain: 'Electrical Safety', difficulty: 'easy', q: 'Before working on equipment, electrical energy must be:', choices: ['Increased', 'De-energized, locked out, and verified', 'Ignored', 'Photographed'], answer: 1, why: 'Isolate, lock/tag, then test before touch.' },
      { domain: 'Electrical Safety', difficulty: 'medium', q: 'GFCIs protect workers by:', choices: ['Boosting voltage', 'Cutting power when current leaks through an unintended path', 'Grounding the building', 'Cooling equipment'], answer: 1, why: 'Ground-fault circuit interrupters trip on leakage current — critical in wet areas.' },
      { domain: 'Hazard Communication', difficulty: 'easy', q: 'Where do you find first-aid measures for a chemical?', choices: ['The purchase order', 'The Safety Data Sheet', 'The shipping label only', 'A coworker\'s memory'], answer: 1, why: 'SDSs standardize hazard, handling, and first-aid information.' },
      { domain: 'Hazard Communication', difficulty: 'medium', q: 'A spray bottle filled from a larger container must have:', choices: ['No label — it is temporary', 'Its own label with identity and hazard warnings', 'A price tag', 'A colored cap only'], answer: 1, why: 'Secondary containers require labels so nobody uses the contents blind.' },
      { domain: 'Walking and Working Surfaces', difficulty: 'easy', q: 'Proper ladder use includes:', choices: ['Leaning it at any angle', 'Maintaining three points of contact', 'Carrying tools in hands while climbing', 'Standing on the top rung'], answer: 1, why: 'Three points of contact keeps climbers stable; the top rung is prohibited.' },
      { domain: 'Walking and Working Surfaces', difficulty: 'medium', q: 'A floor hole cover must be:', choices: ['Cardboard', 'Secured against displacement and marked', 'Optional during the day', 'Painted only'], answer: 1, why: 'Unsecured or unmarked covers become their own hazard.' },
      { domain: 'Emergency Action and Fire', difficulty: 'easy', q: 'PASS stands for:', choices: ['Push, Aim, Spray, Shout', 'Pull, Aim, Squeeze, Sweep', 'Point, Alarm, Stop, Stand', 'Pull, Activate, Spray, Stop'], answer: 1, why: 'Pull the pin, Aim at the base, Squeeze the handle, Sweep side to side.' },
      { domain: 'Emergency Action and Fire', difficulty: 'medium', q: 'A Class C fire involves:', choices: ['Wood and paper', 'Flammable liquids', 'Energized electrical equipment', 'Metals'], answer: 2, why: 'C = electrical; water-based extinguishers on energized equipment conduct current.' },
      { domain: 'Machine Guarding', difficulty: 'easy', q: 'A guard protecting the point of operation protects:', choices: ['The power cord', 'Where the machine performs work on material', 'The floor', 'The control panel'], answer: 1, why: 'Point-of-operation guarding shields the cutting/shaping zone.' },
      { domain: 'Machine Guarding', difficulty: 'medium', q: 'Clearing a machine jam safely requires:', choices: ['Reaching in quickly', 'Lockout/tagout — a stop button alone is not isolation', 'Asking a coworker to watch', 'Using a stick while it runs'], answer: 1, why: 'Stop buttons do not remove energy; jams are cleared only under LOTO.' },
    ],
  },
  {
    id: 'track_osha10c',
    name: 'OSHA 10 Construction Readiness',
    shortName: 'OSHA 10 Construction',
    category: 'engineering',
    weeks: 8,
    description:
      'Construction-site safety: the Focus Four hazards (falls, struck-by, caught-in/between, electrocution), scaffolding, excavation, and tool safety.',
    credentialFocus: 'Mapped to OSHA 10 construction topic categories',
    schoolOverview:
      'Prepares construction pathway students for OSHA 10 training with hazard-spotting scenarios and documented coverage of every required topic category.',
    studentOverview:
      'Construction is rewarding and dangerous in specific, predictable ways. Learn the Focus Four hazards and the practices that bring crews home safe.',
    prerequisites: 'None.',
    alignmentNotes:
      'Mapped to OSHA 10 construction topic categories: Focus Four hazards, scaffolding, excavation, tools, PPE, and health hazards. EduSphere USA provides readiness preparation, not OSHA outreach training certification.',
    domains: [
      'Focus Four: Falls', 'Focus Four: Struck-By', 'Focus Four: Caught-In/Between', 'Focus Four: Electrocution',
      'Scaffolding Safety', 'Excavation Safety', 'Tool and Equipment Safety', 'Health Hazards in Construction',
    ],
    modules: [
      {
        title: 'Focus Four: Falls', description: 'The leading killer in construction and its controls.',
        lessons: [
          { title: 'Fall Hazards and Protection', points: ['Falls cause more construction deaths than any other hazard', 'Fall protection required at 6 feet in construction', 'Guardrails, safety nets, and personal fall arrest are the options', 'Unprotected edges, openings, and skylights are deadly traps', 'Ladders and stairs need the same rigor as scaffolds', 'Cover and mark every hole, every time'] },
          { title: 'Personal Fall Arrest Systems', points: ['A full system: anchor, harness, connecting device', 'Anchors must hold 5,000 pounds per worker', 'Inspect harnesses before each use — webbing, stitching, hardware', 'Calculate fall clearance before tying off', 'Swing falls require anchor placement above and near', 'Rescue plans matter: suspension trauma kills after the fall is arrested'] },
        ],
      },
      {
        title: 'Focus Four: Struck-By', description: 'Falling objects, vehicles, and flying debris.',
        lessons: [
          { title: 'Struck-By Hazards', points: ['Falling tools and materials from heights above', 'Vehicle and equipment backing incidents', 'Flying particles from cutting, grinding, and nailing', 'Swinging loads from cranes and hoists', 'Unsecured walls and masonry during construction', 'Hi-vis clothing and hard hats are the visible baseline'] },
          { title: 'Struck-By Controls', points: ['Barricade and sign zones below overhead work', 'Toe boards and nets catch falling objects', 'Spotters and alarms protect workers near backing equipment', 'Never walk under suspended loads', 'Eye protection for any particle-producing task', 'Traffic control separates workers from vehicles'] },
        ],
      },
      {
        title: 'Focus Four: Caught-In/Between', description: 'Trench collapses, machinery, and crushing hazards.',
        lessons: [
          { title: 'Caught-In Hazards', points: ['Trench walls collapse without warning — a cubic yard of soil weighs as much as a car', 'Unguarded moving parts pull in clothing and limbs', 'Workers get crushed between equipment and fixed objects', 'Unstable structures trap workers during demolition', 'Never enter an unprotected trench deeper than 5 feet', 'Even shallow trenches can kill'] },
          { title: 'Caught-In Controls', points: ['Protective systems: sloping, shoring, shielding (trench boxes)', 'Machine guards stay in place, always', 'Lockout equipment before clearing jams', 'Establish crush-zone awareness around equipment swing radii', 'Competent person inspects trenches daily', 'Soil type changes protection requirements'] },
        ],
      },
      {
        title: 'Focus Four: Electrocution', description: 'Power lines, temporary power, and tool hazards.',
        lessons: [
          { title: 'Electrical Hazards on Site', points: ['Overhead lines: maintain clearance distances', 'Assume every line is energized', 'Temporary power needs GFCI protection', 'Damaged cords and tools kill', 'Underground utilities require locate services before digging', 'Wet site conditions multiply risk'] },
          { title: 'Electrical Controls', points: ['GFCIs or assured equipment grounding on all temporary power', 'Inspect cords daily; remove damaged ones from service', 'Lockout during electrical work', 'Non-conductive ladders near electrical hazards', 'Call before you dig — utility locates are free', 'Qualified persons only for electrical work'] },
        ],
      },
      {
        title: 'Scaffolding Safety', description: 'Erection, inspection, and safe use of scaffolds.',
        lessons: [
          { title: 'Scaffold Requirements', points: ['Scaffolds support four times their intended load', 'Full planking between uprights', 'Guardrails above 10 feet', 'Stable, level base plates and mud sills', 'Access via ladders or stairs — never cross-bracing', 'No work on scaffolds in storms or high wind'] },
          { title: 'Inspection and Use', points: ['A competent person inspects before each shift', 'Tags communicate scaffold status', 'Never move occupied scaffolds', 'Keep tools and materials organized to prevent falls below', 'Overhead protection when work happens above', 'Alterations only by qualified persons'] },
        ],
      },
      {
        title: 'Excavation Safety', description: 'Trenching and excavation protective systems.',
        lessons: [
          { title: 'Trench Hazards and Soils', points: ['Cave-ins are the primary excavation killer', 'Soil types (A, B, C) determine stability', 'Water accumulation weakens trench walls', 'Surcharge loads near edges increase collapse risk', 'Vibration from traffic destabilizes walls', 'Atmosphere testing for trenches over 4 feet where hazards exist'] },
          { title: 'Protective Systems', points: ['Sloping and benching cut walls back at safe angles', 'Shoring supports walls with hydraulic or timber systems', 'Trench shields protect workers inside', 'Protection required at 5 feet unless rock', 'Ladders within 25 feet of every worker', 'Spoil piles set back at least 2 feet from edges'] },
        ],
      },
      {
        title: 'Tool and Equipment Safety', description: 'Power tools, powder-actuated tools, and heavy equipment.',
        lessons: [
          { title: 'Power Tool Safety', points: ['Guards in place on saws and grinders', 'Inspect cords, bits, and blades before use', 'Disconnect power before changing accessories', 'Correct tool for the job — no improvisation', 'Eye and hearing protection as standard', 'Kickback control on saws and drills'] },
          { title: 'Heavy Equipment and Vehicles', points: ['Seat belts in equipment with ROPS', 'Daily pre-operation inspections', 'Backup alarms and spotters', 'No riders unless seats are provided', 'Park with attachments lowered and brakes set', 'Operators trained and authorized per equipment type'] },
        ],
      },
      {
        title: 'Health Hazards in Construction', description: 'Silica, noise, heat, and chemical exposures.',
        lessons: [
          { title: 'Silica, Dust, and Chemicals', points: ['Crystalline silica from cutting concrete causes silicosis', 'Wet methods and vacuum attachments control dust', 'Respirators required when controls cannot reduce exposure', 'Lead and asbestos in older buildings require special procedures', 'Solvent vapors need ventilation', 'Safety Data Sheets govern chemical handling on site'] },
          { title: 'Noise, Heat, and Environment', points: ['Prolonged noise above limits requires hearing protection', 'Heat illness progresses: cramps, exhaustion, stroke', 'Water, rest, and shade prevent heat illness', 'New workers face the highest heat risk — acclimatize', 'Cold stress is equally real in winter work', 'Sanitation and drinking water are required on every site'] },
        ],
      },
      {
        title: 'Cranes, Rigging, and Materials Handling', description: 'Safe lifting operations on construction sites.',
        lessons: [
          { title: 'Crane and Lift Safety', points: ['Only qualified operators run cranes', 'Lift plans define load, radius, and capacity', 'Load charts limit lifts by configuration', 'Ground conditions and outriggers stabilize the crane', 'Power line clearance distances apply to booms', 'Suspended loads never travel over workers'] },
          { title: 'Rigging Fundamentals', points: ['Inspect slings and hardware before every lift', 'Sling angles change tension dramatically', 'Rated capacities must exceed the load', 'Hand signals standardize communication with operators', 'Tag lines control swinging loads', 'Damaged rigging is destroyed, not repaired in place'] },
        ],
      },
      {
        title: 'Final Readiness Review', description: 'Consolidated construction safety review and exam preparation.',
        lessons: [
          { title: 'Construction Safety Knowledge Map', points: ['Focus Four: falls, struck-by, caught-in, electrocution', 'Fall protection at 6 feet; anchors at 5,000 lb', 'Trenches: protective systems at 5 feet, competent person daily', 'Scaffolds: guardrails at 10 feet, 4× load capacity', 'GFCIs on all temporary power', 'Health: silica controls, hearing protection, heat illness prevention'] },
          { title: 'Exam-Day Strategy', points: ['Focus Four questions dominate — know the triggers and controls', 'Height thresholds (6 ft, 10 ft, 5 ft) appear constantly', 'The safest option is the answer', 'Competent-person duties are frequently tested', 'Scenario questions reward systematic hazard identification', 'Review missed practice questions by domain'] },
        ],
      },
    ],
    questions: [
      { domain: 'Focus Four: Falls', difficulty: 'easy', q: 'In construction, fall protection is generally required at what height?', choices: ['4 feet', '6 feet', '10 feet', '15 feet'], answer: 1, why: 'Construction standards trigger fall protection at 6 feet.' },
      { domain: 'Focus Four: Falls', difficulty: 'medium', q: 'A personal fall arrest anchor point must support how much per attached worker?', choices: ['500 lb', '1,000 lb', '5,000 lb', '10,000 lb'], answer: 2, why: 'Anchors must hold 5,000 pounds per worker (or be designed with a safety factor of two).' },
      { domain: 'Focus Four: Struck-By', difficulty: 'easy', q: 'The best protection when working below overhead tasks is:', choices: ['Walking fast', 'Barricaded zones plus hard hats and toe boards/nets above', 'Looking up constantly', 'Working at night'], answer: 1, why: 'Physical barriers and exclusion zones prevent struck-by incidents from falling objects.' },
      { domain: 'Focus Four: Struck-By', difficulty: 'medium', q: 'Workers near backing vehicles are protected primarily by:', choices: ['Luck', 'Spotters, alarms, and hi-vis clothing', 'Headphones', 'Speed limits only'], answer: 1, why: 'Backing incidents kill; visibility aids plus spotters are the control stack.' },
      { domain: 'Focus Four: Caught-In/Between', difficulty: 'easy', q: 'A trench deeper than 5 feet requires:', choices: ['Extra workers', 'A protective system: sloping, shoring, or shielding', 'Only a warning sign', 'Faster digging'], answer: 1, why: 'Protective systems are mandatory at 5 feet unless in stable rock.' },
      { domain: 'Focus Four: Caught-In/Between', difficulty: 'medium', type: 'scenario', q: 'A worker climbs into a 4-foot trench "just for a minute." The correct view is:', choices: ['Fine under 5 feet always', 'Even shallow trenches can collapse — assess soil and protect as needed', 'Only deep trenches matter', 'Add a ladder and proceed'], answer: 1, why: 'Depth exemptions are conditional; shallow collapses have killed workers.' },
      { domain: 'Focus Four: Electrocution', difficulty: 'easy', q: 'Temporary power on construction sites must have:', choices: ['Longer cords', 'GFCI protection or an assured grounding program', 'Higher voltage', 'Plastic plugs'], answer: 1, why: 'Ground faults are the electrocution mechanism GFCIs interrupt.' },
      { domain: 'Focus Four: Electrocution', difficulty: 'medium', q: 'Before digging, crews must:', choices: ['Guess utility locations', 'Contact utility locate services to mark underground lines', 'Dig by hand everywhere', 'Skip locates for small holes'], answer: 1, why: 'Striking buried electrical lines is lethal; locates are free and required.' },
      { domain: 'Scaffolding Safety', difficulty: 'easy', q: 'Scaffolds must be designed to support:', choices: ['Exactly their load', 'Four times the intended load', 'Twice the worker weight', 'Any load with rope'], answer: 1, why: 'The 4:1 safety factor is a core scaffold requirement.' },
      { domain: 'Scaffolding Safety', difficulty: 'medium', q: 'Who inspects scaffolds before each work shift?', choices: ['Any worker', 'A competent person', 'The site owner', 'The material supplier'], answer: 1, why: 'Competent persons can identify hazards and have authority to correct them.' },
      { domain: 'Excavation Safety', difficulty: 'easy', q: 'Spoil piles must be kept how far from trench edges?', choices: ['Right at the edge', 'At least 2 feet back', '10 feet minimum by law', 'Distance does not matter'], answer: 1, why: 'Two feet keeps surcharge weight from collapsing the wall.' },
      { domain: 'Excavation Safety', difficulty: 'medium', q: 'Which soil type is MOST stable?', choices: ['Type A', 'Type B', 'Type C', 'Saturated fill'], answer: 0, why: 'Type A (e.g., clay) is most cohesive; Type C (sand/gravel) is least stable.' },
      { domain: 'Tool and Equipment Safety', difficulty: 'easy', q: 'Before changing a saw blade, you must:', choices: ['Work faster', 'Disconnect the power source', 'Wear gloves only', 'Ask permission'], answer: 1, why: 'Disconnecting power prevents accidental startup during blade changes.' },
      { domain: 'Tool and Equipment Safety', difficulty: 'medium', q: 'ROPS on heavy equipment works together with:', choices: ['Radios', 'Seat belts — ROPS protects only belted operators', 'Paint', 'Lights'], answer: 1, why: 'Rollover protection structures protect the operator zone only when the operator stays in it.' },
      { domain: 'Health Hazards in Construction', difficulty: 'easy', q: 'Cutting concrete dry creates which serious hazard?', choices: ['Noise only', 'Respirable crystalline silica dust', 'Cold stress', 'Vibration only'], answer: 1, why: 'Silica dust causes irreversible silicosis; wet methods or vacuum extraction control it.' },
      { domain: 'Health Hazards in Construction', difficulty: 'medium', q: 'Heat illness prevention on site centers on:', choices: ['Working faster to finish early', 'Water, rest, shade, and acclimatization for new workers', 'Energy drinks', 'Ignoring early symptoms'], answer: 1, why: 'Hydration, breaks, shade, and gradual acclimatization prevent heat stroke deaths.' },
    ],
  },
  {
    id: 'track_edp',
    name: 'Engineering Design Process Readiness',
    shortName: 'Engineering Design Process',
    category: 'engineering',
    weeks: 10,
    description:
      'The complete engineering design process: define, research, ideate, prototype, test, iterate, and communicate — the meta-skill behind every engineering discipline.',
    credentialFocus: 'Mapped to engineering design process competency domains',
    schoolOverview:
      'Gives engineering and STEM programs a shared design methodology with portfolio-ready documentation practice and per-domain readiness reporting.',
    studentOverview:
      'Learn the process engineers use to solve real problems — from defining needs through prototyping and testing to presenting a defensible final design.',
    prerequisites: 'None.',
    alignmentNotes:
      'Mapped to engineering design process competency domains: problem definition, research, requirements, ideation, prototyping, testing, iteration, and technical communication.',
    domains: [
      'Problem Definition', 'Research and Benchmarking', 'Requirements and Constraints', 'Ideation Techniques',
      'Prototyping', 'Testing and Evaluation', 'Iteration and Optimization', 'Technical Communication',
    ],
    modules: [
      {
        title: 'Problem Definition', description: 'Framing the real problem before solving anything.',
        lessons: [
          { title: 'Finding the Real Problem', points: ['Symptoms disguise root causes — ask why repeatedly', 'A problem statement names user, need, and context', 'Scope too broad stalls teams; too narrow wastes opportunity', 'Stakeholder interviews reveal unstated needs', 'Observable evidence beats assumptions', 'Write the problem before proposing any solution'] },
          { title: 'Framing for Design', points: ['"How might we" questions open solution space', 'User stories capture need from the user\'s perspective', 'Context of use shapes every design decision', 'Success looks measurable: what changes for the user?', 'Reframe checkpoints prevent solving the wrong problem', 'A shared definition aligns the whole team'] },
        ],
      },
      {
        title: 'Research and Benchmarking', description: 'Learning from existing solutions and constraints.',
        lessons: [
          { title: 'Researching Existing Solutions', points: ['Existing products reveal what works and what fails', 'Patent searches show the solution landscape', 'User reviews expose real pain points', 'Competitor analysis finds gaps and standards', 'Academic and trade sources deepen technical grounding', 'Document sources for credibility'] },
          { title: 'Benchmarking and Standards', points: ['Benchmarks quantify how well current solutions perform', 'Industry standards define safety and interoperability', 'Regulations are constraints discovered early or expensively late', 'Benchmark tables compare options on equal criteria', 'Reverse engineering teaches proven design decisions', 'Standards compliance is a design input, not an afterthought'] },
        ],
      },
      {
        title: 'Requirements and Constraints', description: 'Turning needs into testable engineering targets.',
        lessons: [
          { title: 'Writing Requirements', points: ['Requirements are specific, measurable, and testable', '"Must" vs. "should" separates mandatory from desirable', 'Quantify: speeds, weights, capacities, lifetimes', 'Every requirement traces to a user need', 'Ambiguous requirements cause disputes at test time', 'Requirements documents are living, versioned artifacts'] },
          { title: 'Managing Constraints', points: ['Constraints: budget, time, materials, regulations, environment', 'Constraints focus creativity rather than killing it', 'Trade studies balance conflicting requirements', 'Feasibility checks kill impossible paths early', 'Constraint changes must trigger requirement review', 'Document assumptions — they fail silently otherwise'] },
        ],
      },
      {
        title: 'Ideation Techniques', description: 'Generating many solutions before choosing one.',
        lessons: [
          { title: 'Structured Brainstorming', points: ['Quantity first: defer judgment during generation', 'Build on others\' ideas instead of competing', 'Sketching communicates faster than description', 'SCAMPER prompts: substitute, combine, adapt, modify, put to other use, eliminate, reverse', 'Analogies from nature and other industries unlock ideas', 'Time-boxed rounds keep energy high'] },
          { title: 'Selecting Concepts', points: ['Concept sketches make options comparable', 'Pugh matrices score concepts against criteria', 'Dot voting captures team judgment quickly', 'Combine the best features of multiple concepts', 'Kill criteria eliminate weak concepts honestly', 'The chosen concept gets a clear rationale on record'] },
        ],
      },
      {
        title: 'Prototyping', description: 'Making ideas testable fast and cheap.',
        lessons: [
          { title: 'Prototype Fidelity', points: ['Low-fidelity prototypes answer big questions cheaply', 'Cardboard, foam, and sketches test form and flow', 'High-fidelity prototypes validate function and durability', 'Prototype only what the current question requires', '3D printing compresses iteration cycles to hours', 'Every prototype needs a question it answers'] },
          { title: 'Building and Documenting', points: ['Bill of materials tracks every part', 'Build logs record what actually happened, not the plan', 'Deviations from drawings get noted and explained', 'Safety review before any powered test', 'Photos at each stage save documentation pain later', 'Version prototypes so results map to changes'] },
        ],
      },
      {
        title: 'Testing and Evaluation', description: 'Getting honest answers from tests.',
        lessons: [
          { title: 'Designing Tests', points: ['Tests map to requirements — one test per requirement minimum', 'Define pass/fail criteria before running', 'Control variables so results mean something', 'Instrument measurements instead of eyeballing', 'Test to failure to find real limits', 'Safety review precedes every destructive test'] },
          { title: 'Evaluating Results', points: ['Data tables and graphs make patterns visible', 'Compare results against criteria, not hopes', 'Unexpected results are information, not embarrassment', 'Statistical thinking separates signal from noise', 'User testing reveals what lab tests miss', 'Document failures as carefully as successes'] },
        ],
      },
      {
        title: 'Iteration and Optimization', description: 'Improving designs through cycles.',
        lessons: [
          { title: 'The Iteration Loop', points: ['Test → analyze → redesign → retest is the core loop', 'Change one thing per iteration when isolating causes', 'Track versions so improvements are provable', 'Diminishing returns signal readiness to finalize', 'Regression testing ensures fixes did not break what worked', 'Iteration count is a badge of rigor, not failure'] },
          { title: 'Optimization Thinking', points: ['Optimize the metric that matters to the user', 'Trade-offs: lighter vs. stronger vs. cheaper', 'Sensitivity analysis finds the high-leverage parameters', 'Local optimization can hurt the system — keep the whole in view', 'Robustness beats peak performance in real conditions', 'Stop criteria prevent endless polishing'] },
        ],
      },
      {
        title: 'Technical Communication', description: 'Presenting and documenting engineering work.',
        lessons: [
          { title: 'Engineering Documentation', points: ['The design portfolio tells the whole story: problem to proof', 'Engineering notebooks are dated, witnessed, and never erased', 'Drawings and models need revision control', 'Reports follow: summary, problem, process, results, conclusions', 'Citations credit sources and standards', 'Documentation written at the end is fiction — write as you go'] },
          { title: 'Presenting Designs', points: ['Lead with the problem and the outcome', 'Show the evidence: tests, data, iterations', 'Anticipate the hard questions on cost and failure modes', 'Demos beat slides when they are safe and reliable', 'Acknowledge limitations honestly — credibility compounds', 'Tailor depth to the audience: executives vs. engineers'] },
        ],
      },
      {
        title: 'Teamwork and Project Management', description: 'Delivering design work through teams, schedules, and budgets.',
        lessons: [
          { title: 'Engineering Teamwork', points: ['Clear roles prevent both gaps and duplicated effort', 'Standups synchronize work in minutes', 'Decisions need owners and deadlines', 'Constructive disagreement improves designs; personal conflict destroys them', 'Shared documents and version control prevent chaos', 'Credit and accountability travel together'] },
          { title: 'Managing Design Projects', points: ['Work breakdown structures divide projects into tasks', 'Gantt charts schedule dependencies', 'Milestones mark verifiable progress', 'Budget tracking catches overruns early', 'Risk registers list what could go wrong and the mitigation plan', 'Scope control keeps one-more-feature requests from sinking the schedule'] },
        ],
      },
      {
        title: 'Final Readiness Review', description: 'Consolidated design-process review and exam preparation.',
        lessons: [
          { title: 'Design Process Knowledge Map', points: ['Define: problem statements, users, context', 'Research: benchmarks, standards, prior art', 'Requirements: measurable, traceable, testable', 'Ideate: quantity, defer judgment, select with matrices', 'Prototype and test: fidelity matched to questions', 'Iterate and communicate: loops, versions, honest reporting'] },
          { title: 'Exam-Day Strategy', points: ['Process-order questions: know the stage sequence', 'Requirements questions test measurability', 'Scenario questions reward evidence over opinion', 'Identify which stage a described activity belongs to', 'Vocabulary precision: prototype vs. model vs. mock-up', 'Review missed practice questions by domain'] },
        ],
      },
    ],
    questions: [
      { domain: 'Problem Definition', difficulty: 'easy', q: 'A good problem statement includes:', choices: ['The chosen solution', 'User, need, and context — without prescribing a solution', 'The budget only', 'Team member names'], answer: 1, why: 'Problem statements define the need; embedding a solution kills exploration.' },
      { domain: 'Problem Definition', difficulty: 'medium', q: 'Asking "why" repeatedly about a problem is a technique to:', choices: ['Annoy stakeholders', 'Reach the root cause beneath symptoms', 'Delay decisions', 'Write reports'], answer: 1, why: 'Iterated "why" peels symptoms back to the underlying cause.' },
      { domain: 'Research and Benchmarking', difficulty: 'easy', q: 'Benchmarking means:', choices: ['Copying competitors', 'Measuring existing solutions against equal criteria to set targets', 'Sitting on benches', 'Skipping research'], answer: 1, why: 'Benchmarks quantify the current state of the art for comparison.' },
      { domain: 'Research and Benchmarking', difficulty: 'medium', q: 'Why search patents during research?', choices: ['To infringe them', 'To map the existing solution landscape and avoid rework or conflict', 'It is legally required', 'To find employees'], answer: 1, why: 'Patents reveal what has been tried, claimed, and proven.' },
      { domain: 'Requirements and Constraints', difficulty: 'easy', q: 'Which is a well-formed requirement?', choices: ['The device should be fast', 'The device must process one record in under 2 seconds', 'Make it nice', 'Cheap if possible'], answer: 1, why: 'Requirements must be specific, measurable, and testable.' },
      { domain: 'Requirements and Constraints', difficulty: 'medium', q: 'Constraints differ from requirements because constraints:', choices: ['Are optional', 'Limit the solution space (budget, time, materials, regulations)', 'Define success metrics', 'Are set by users'], answer: 1, why: 'Constraints bound what is possible; requirements define what is needed.' },
      { domain: 'Ideation Techniques', difficulty: 'easy', q: 'The first rule of brainstorming is:', choices: ['Judge ideas immediately', 'Defer judgment and maximize quantity', 'Only experts speak', 'One idea per person'], answer: 1, why: 'Early criticism kills the divergent thinking ideation needs.' },
      { domain: 'Ideation Techniques', difficulty: 'medium', q: 'A Pugh matrix is used to:', choices: ['Draw sketches', 'Score and compare concepts against weighted criteria', 'Calculate stress', 'Schedule tasks'], answer: 1, why: 'Pugh matrices structure concept selection against criteria.' },
      { domain: 'Prototyping', difficulty: 'easy', q: 'Low-fidelity prototypes are best for:', choices: ['Final customer demos', 'Answering big questions cheaply and early', 'Manufacturing', 'Certification testing'], answer: 1, why: 'Cheap prototypes de-risk concepts before expensive builds.' },
      { domain: 'Prototyping', difficulty: 'medium', q: 'Every prototype should begin with:', choices: ['A 3D printer', 'A question the prototype is meant to answer', 'A budget request', 'A team photo'], answer: 1, why: 'Purpose-driven prototyping prevents wasted build effort.' },
      { domain: 'Testing and Evaluation', difficulty: 'easy', q: 'Pass/fail criteria should be defined:', choices: ['After seeing results', 'Before running the test', 'Only for failures', 'By management later'], answer: 1, why: 'Predefined criteria prevent rationalizing results after the fact.' },
      { domain: 'Testing and Evaluation', difficulty: 'medium', type: 'scenario', q: 'A prototype fails a load test at 40% of the requirement. The engineering response is:', choices: ['Hide the result', 'Document the failure, analyze the cause, and redesign', 'Lower the requirement quietly', 'Blame the materials supplier'], answer: 1, why: 'Failures are data: document, analyze, iterate.' },
      { domain: 'Iteration and Optimization', difficulty: 'easy', q: 'Why change one variable per iteration when debugging a design?', choices: ['It is slower but traditional', 'Multiple simultaneous changes make causes impossible to isolate', 'Tools allow only one', 'It saves materials only'], answer: 1, why: 'Single-variable changes attribute effects to causes.' },
      { domain: 'Iteration and Optimization', difficulty: 'medium', q: 'Diminishing returns in iteration signal:', choices: ['Team failure', 'Approaching the practical optimum — time to finalize', 'Need for more budget', 'A broken prototype'], answer: 1, why: 'When improvements shrink per cycle, the design is converging.' },
      { domain: 'Technical Communication', difficulty: 'easy', q: 'Engineering notebook entries should be:', choices: ['Erased and rewritten neatly', 'Dated, permanent, and written as work happens', 'Optional', 'Typed only'], answer: 1, why: 'Contemporaneous, permanent records establish rigor and provenance.' },
      { domain: 'Technical Communication', difficulty: 'medium', q: 'When presenting to executives versus engineers, the content should differ in:', choices: ['Honesty', 'Depth of technical detail — outcomes and decisions for executives, method and evidence for engineers', 'Slide color', 'Length only'], answer: 1, why: 'Audience-appropriate depth keeps both credibility and attention.' },
    ],
  },
]