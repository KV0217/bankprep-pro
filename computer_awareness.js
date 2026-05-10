if(typeof Q==='undefined')window.Q=[];

// ─────────────────────────────────────────────────────────────────────────────
// COMPUTER AWARENESS — Study Notes
// ─────────────────────────────────────────────────────────────────────────────

window.COMPUTER_STUDY = {
  label: 'Computer Awareness',

  basics: {
    title: 'Computer Basics',
    intro: 'A computer is an electronic device that processes data according to instructions (program) and produces output. Computers have evolved through five generations and are classified by size and purpose. Understanding the CPU, memory hierarchy, and generations is essential for SBI PO / RBI Grade B exams.',
    formulas: [],
    tips: [
      '5 Generations: 1G-Vacuum tubes, 2G-Transistors, 3G-ICs, 4G-Microprocessors, 5G-AI/Parallel processing',
      'CPU = ALU + CU + Registers. ALU does arithmetic and logic; CU controls sequence of operations.',
      'Memory hierarchy (fastest to slowest): Registers → Cache → RAM → ROM → Secondary Storage',
      'Types by size: Supercomputer > Mainframe > Minicomputer > Microcomputer (PC) > Embedded',
      'MIPS = Million Instructions Per Second (speed measure). FLOPS for floating point.',
      'Bus types: Data bus (transfers data), Address bus (specifies location), Control bus (signals)',
      'Word size = number of bits CPU processes at once. 64-bit CPU is now standard.',
      'Fetch-Decode-Execute cycle: the basic operation cycle of every CPU'
    ],
    examples: [
      { q: 'Which generation of computers used transistors?', ans: 'Second Generation (1956–1963)' },
      { q: 'What does ALU stand for and what does it do?', ans: 'Arithmetic Logic Unit — performs arithmetic (+,-,×,÷) and logical (AND,OR,NOT) operations' },
      { q: 'Name the fastest memory in the memory hierarchy.', ans: 'CPU Registers (fastest, smallest, most expensive per byte)' }
    ]
  },

  io_devices: {
    title: 'Input / Output Devices',
    intro: 'Input devices send data INTO the computer; output devices send processed data OUT. Some devices (e.g., touch screen, network card) are both. Recognising device categories and examples is a common exam topic.',
    formulas: [],
    tips: [
      'Input: Keyboard, Mouse, Scanner, Microphone, Webcam, Barcode Reader, OMR, OCR, MICR, Joystick, Light pen',
      'Output: Monitor (VDU), Printer, Speaker, Projector, Plotter',
      'Both: Touch screen, Modem, Network Interface Card (NIC), Hard disk (reads & writes)',
      'MICR — Magnetic Ink Character Recognition — used in bank cheques',
      'OMR — Optical Mark Recognition — used in MCQ answer sheets',
      'OCR — Optical Character Recognition — converts typed/printed text to editable digital text',
      'Inkjet printers spray tiny ink droplets; Laser printers use heat and toner powder',
      'DPI (Dots Per Inch) measures printer/scanner resolution. Higher DPI = sharper output'
    ],
    examples: [
      { q: 'Which device is used for reading bank cheques?', ans: 'MICR (Magnetic Ink Character Recognition)' },
      { q: 'Is a modem an input or output device?', ans: 'Both — it modulates (sends) and demodulates (receives) signals' }
    ]
  },

  storage: {
    title: 'Storage Devices',
    intro: 'Storage devices hold data permanently or semi-permanently. Primary storage (RAM/ROM) is directly accessed by the CPU. Secondary storage (HDD, SSD, USB, optical discs) stores data long-term. Understanding capacities, speeds, and use cases is tested in bank exams.',
    formulas: [
      '1 KB = 1024 Bytes, 1 MB = 1024 KB, 1 GB = 1024 MB, 1 TB = 1024 GB',
      '1 Nibble = 4 bits, 1 Byte = 8 bits, 1 Word = 2 Bytes (typically)'
    ],
    tips: [
      'HDD uses magnetic platters + moving read/write head. Slower but cheaper per GB.',
      'SSD uses NAND flash memory chips — no moving parts, much faster, lighter, shock-resistant.',
      'Cache memory: ultra-fast SRAM between CPU and RAM. L1 (fastest, smallest) → L2 → L3.',
      'USB Flash Drive = portable solid-state storage using flash memory.',
      'CD capacity ~700 MB; DVD ~4.7 GB (single-layer); Blu-ray ~25 GB (single-layer).',
      'ROM is non-volatile (data retained without power). RAM is volatile.',
      'EEPROM (Electrically Erasable Programmable ROM) — used in BIOS chips.',
      'Access time: Cache < RAM < SSD < HDD < Optical'
    ],
    examples: [
      { q: 'What type of memory is used in USB flash drives?', ans: 'Flash memory (NAND flash) — a type of EEPROM' },
      { q: 'Why is SSD preferred over HDD for OS drives?', ans: 'SSD has no moving parts, provides much faster read/write speeds, and is more reliable' }
    ]
  },

  operating_systems: {
    title: 'Operating Systems',
    intro: 'An Operating System (OS) is system software that manages hardware and software resources and provides services to application programs. It acts as an interface between the user and hardware. Common OSes include Windows, Linux, macOS, Android, and iOS.',
    formulas: [],
    tips: [
      'Functions of OS: Process management, Memory management, File management, Device management, Security, UI',
      'Booting: Cold boot = starting from power-off. Warm boot = restart without power-off (Ctrl+Alt+Del).',
      'BIOS (Basic Input/Output System) runs first during boot — initialises hardware (POST = Power-On Self Test).',
      'Types of OS: Batch, Time-sharing, Real-time (RTOS), Distributed, Network, Mobile',
      'Linux is open-source. Kernel of Linux written by Linus Torvalds (1991).',
      'Windows NT kernel underpins Windows XP/Vista/7/8/10/11.',
      'GUI (Graphical User Interface) vs CLI (Command Line Interface / Terminal).',
      'Multitasking = running multiple processes seemingly simultaneously on one CPU via time-slicing.',
      'Process states: New → Ready → Running → Waiting → Terminated',
      'Deadlock: two or more processes waiting forever for each other\'s resources'
    ],
    examples: [
      { q: 'What happens during POST?', ans: 'Power-On Self Test — BIOS checks RAM, CPU, keyboard, and other hardware before loading the OS' },
      { q: 'What is the kernel of an OS?', ans: 'The core part of the OS that manages CPU, memory, and hardware; runs in privileged mode' }
    ]
  },

  ms_office: {
    title: 'MS Office (Word, Excel, PowerPoint)',
    intro: 'Microsoft Office is the most widely used productivity suite. Questions on MS Word shortcuts, Excel functions, and PowerPoint features appear frequently in SBI PO Mains and Clerk exams. Knowing keyboard shortcuts and function-key assignments is crucial.',
    formulas: [
      'Excel: =SUM(A1:A10), =AVERAGE(), =COUNT(), =COUNTIF(), =VLOOKUP(), =IF(), =MAX(), =MIN()',
      'Cell reference: A1 (relative), $A$1 (absolute), $A1 or A$1 (mixed)'
    ],
    tips: [
      'MS Word shortcuts: Ctrl+B=Bold, Ctrl+I=Italic, Ctrl+U=Underline, Ctrl+Z=Undo, Ctrl+Y=Redo',
      'Ctrl+Home=Beginning of document, Ctrl+End=End of document, F7=Spell check',
      'Ctrl+S=Save, Ctrl+P=Print, Ctrl+C=Copy, Ctrl+X=Cut, Ctrl+V=Paste, Ctrl+A=Select All',
      'Word default file extension: .docx (older .doc). Excel: .xlsx. PowerPoint: .pptx',
      'Excel: F2=Edit cell, F4=Repeat/Toggle absolute reference, F11=Create chart',
      'VLOOKUP syntax: =VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])',
      'Excel columns go A-Z, AA-AZ, … Total 16,384 columns; 1,048,576 rows in one sheet.',
      'PowerPoint: F5=Start slideshow from beginning, Shift+F5=from current slide',
      'Mail Merge in Word links a main document to a data source (e.g., Excel list) for bulk letters',
      'Track Changes (Ctrl+Shift+E in Word) records edits made by reviewers'
    ],
    examples: [
      { q: 'Which Excel function looks up a value in the first column of a table?', ans: 'VLOOKUP — Vertical Lookup' },
      { q: 'What is the keyboard shortcut to insert a hyperlink in MS Word?', ans: 'Ctrl + K' }
    ]
  },

  internet_networking: {
    title: 'Internet & Networking',
    intro: 'Networking connects computers to share resources and data. The Internet is a global network of networks using the TCP/IP protocol suite. Understanding LAN/WAN/MAN, IP addressing, protocols, and web concepts is essential for banking exams.',
    formulas: [
      'IPv4: 32-bit address in 4 octets (e.g., 192.168.1.1). Range per octet: 0–255',
      'IPv6: 128-bit address written as 8 groups of 4 hex digits',
      'Bandwidth = data transfer capacity (bps — bits per second)'
    ],
    tips: [
      'LAN (Local Area Network): small geographic area (office/home). MAN: city-wide. WAN: country/worldwide.',
      'TCP/IP: Transmission Control Protocol / Internet Protocol — the foundation of Internet communication.',
      'HTTP (port 80) — Hypertext Transfer Protocol. HTTPS (port 443) — HTTP Secure (uses SSL/TLS).',
      'URL = Protocol + Domain + Path (e.g., https://www.sbi.co.in/careers)',
      'DNS (Domain Name System): translates domain names to IP addresses.',
      'FTP (port 21): File Transfer Protocol. SMTP (25): email sending. POP3 (110)/IMAP (143): email receiving.',
      'WWW (World Wide Web) was invented by Tim Berners-Lee in 1989 at CERN.',
      'IP address classes: Class A (1-126), Class B (128-191), Class C (192-223).',
      'Router: connects different networks. Switch: connects devices in same network. Hub: broadcasts to all.',
      'Bandwidth vs Speed: Bandwidth = capacity; Throughput = actual data transferred per second',
      'Modem converts digital signals (computer) to analog (phone line) and vice versa',
      'Firewall: monitors and controls incoming/outgoing network traffic based on rules'
    ],
    examples: [
      { q: 'What does DNS do?', ans: 'Domain Name System translates human-readable domain names (e.g., google.com) into IP addresses' },
      { q: 'Difference between HTTP and HTTPS?', ans: 'HTTPS encrypts data using SSL/TLS, making it secure; HTTP transmits data in plain text' }
    ]
  },

  database: {
    title: 'Database & DBMS',
    intro: 'A Database is an organized collection of structured data. A Database Management System (DBMS) is software that manages databases (e.g., MySQL, Oracle, SQL Server). Relational DBMS uses tables with rows and columns. SQL is the standard query language.',
    formulas: [],
    tips: [
      'DBMS types: Relational (RDBMS), Hierarchical, Network, Object-oriented',
      'SQL commands: DDL (CREATE, ALTER, DROP), DML (INSERT, UPDATE, DELETE), DQL (SELECT), DCL (GRANT, REVOKE), TCL (COMMIT, ROLLBACK)',
      'Primary Key: uniquely identifies each row; cannot be NULL or duplicate.',
      'Foreign Key: links one table to the primary key of another table (referential integrity).',
      'Normalization: organizing data to reduce redundancy. Forms: 1NF, 2NF, 3NF, BCNF.',
      'ACID properties (transactions): Atomicity, Consistency, Isolation, Durability.',
      'INDEX: speeds up data retrieval but slows INSERT/UPDATE operations.',
      'JOIN types: INNER JOIN (matching rows), LEFT JOIN (all left + matching right), RIGHT JOIN, FULL JOIN',
      'NULL in SQL means missing/unknown value — not zero or empty string',
      'View: a virtual table based on the result of a SELECT query'
    ],
    examples: [
      { q: 'What is a primary key?', ans: 'A column (or combination) that uniquely identifies each record in a table; cannot be NULL or duplicate' },
      { q: 'What does SELECT * FROM Employees WHERE Salary > 50000; do?', ans: 'Retrieves all columns of all rows in the Employees table where Salary exceeds 50000' }
    ]
  },

  programming: {
    title: 'Programming Languages',
    intro: 'Programming languages let humans give instructions to computers. They evolved through five generations — from machine code to natural language. Languages are classified as compiled or interpreted, and as low-level or high-level.',
    formulas: [],
    tips: [
      '1GL: Machine language (binary 0s and 1s). 2GL: Assembly language (mnemonics like MOV, ADD). 3GL: High-level (C, Java, Python). 4GL: Very high-level / application-specific (SQL, MATLAB). 5GL: AI/natural language (Prolog).',
      'Compiled languages (C, C++, Java*): source code translated to machine code before execution — faster runtime.',
      'Interpreted languages (Python, JavaScript, Ruby): source code translated line-by-line at runtime — easier to debug.',
      'Java uses JVM (Java Virtual Machine) — compiled to bytecode then interpreted → "Write once, run anywhere".',
      'Assembler: translates assembly language to machine code. Compiler: high-level to machine code. Interpreter: executes high-level code directly.',
      'Algorithm: step-by-step procedure to solve a problem. Flowchart: graphical representation.',
      'OOP concepts: Encapsulation, Inheritance, Polymorphism, Abstraction',
      'Open source languages: Python, Java, PHP, Ruby, JavaScript'
    ],
    examples: [
      { q: 'What is the difference between a compiler and an interpreter?', ans: 'Compiler translates entire program to machine code before execution; interpreter translates and executes line by line' }
    ]
  },

  cybersecurity: {
    title: 'Cybersecurity',
    intro: 'Cybersecurity protects computers, networks, and data from unauthorized access, damage, or attacks. With rising digital banking, cyber threats are highly relevant. Topics include malware types, encryption, authentication, and safe practices.',
    formulas: [],
    tips: [
      'Malware types: Virus (attaches to files), Worm (self-replicating, spreads over network), Trojan (disguised as legitimate), Ransomware (encrypts files, demands ransom), Spyware (monitors user activity), Adware (shows unwanted ads)',
      'Phishing: fraudulent emails/websites that trick users into revealing credentials or financial info.',
      'Firewall: hardware or software that monitors network traffic and blocks unauthorized access.',
      'Encryption: converts plaintext to ciphertext using an algorithm + key. Decryption reverses it.',
      'Symmetric encryption: same key for encrypt and decrypt (AES, DES). Asymmetric: key pair (RSA) — public key encrypts, private key decrypts.',
      'SSL/TLS: encrypts data between browser and server — shown as HTTPS + padlock icon.',
      'Two-Factor Authentication (2FA): password + OTP/biometric for added security.',
      'DoS (Denial of Service): floods a server with requests to make it unavailable. DDoS = distributed (from many systems).',
      'VPN (Virtual Private Network): creates an encrypted tunnel for secure remote access.',
      'Digital Signature: uses asymmetric cryptography to verify sender identity and data integrity'
    ],
    examples: [
      { q: 'What is ransomware?', ans: 'Malware that encrypts the victim\'s files and demands payment (ransom) for the decryption key' },
      { q: 'What is the difference between a virus and a worm?', ans: 'A virus attaches to a host file and spreads when the file is shared; a worm self-replicates and spreads automatically over networks without needing a host file' }
    ]
  },

  number_systems: {
    title: 'Number Systems',
    intro: 'Computers work in binary (base-2). Other number systems — octal (base-8) and hexadecimal (base-16) — are used as convenient shorthand. Converting between systems and performing binary arithmetic is tested in bank exams.',
    formulas: [
      'Decimal to Binary: repeatedly divide by 2, collect remainders in reverse',
      'Binary to Decimal: multiply each bit by 2^position (from right, starting at 0)',
      'Binary to Hex: group binary in sets of 4 from right (0000=0 … 1111=F)',
      'Hex digits: 0-9, A=10, B=11, C=12, D=13, E=14, F=15',
      'Binary addition: 0+0=0, 0+1=1, 1+1=10 (carry 1), 1+1+1=11'
    ],
    tips: [
      'Decimal 10 = Binary 1010 = Hex A = Octal 12',
      'Decimal 255 = Binary 11111111 = Hex FF',
      '2^8 = 256, 2^10 = 1024 (1 KB), 2^16 = 65536, 2^20 ≈ 1 million (1 MB)',
      'Hexadecimal is widely used in memory addresses and color codes (#RRGGBB in web)',
      'BCD (Binary Coded Decimal): each decimal digit represented by 4-bit binary group',
      '1\'s complement: invert all bits. 2\'s complement: 1\'s complement + 1 (used for negative numbers in CPUs)'
    ],
    examples: [
      { q: 'Convert decimal 45 to binary.', ans: '45 ÷ 2: 22 R1, 11 R0, 5 R1, 2 R1, 1 R0, 0 R1 → read remainders bottom-up: 101101' },
      { q: 'What is the decimal value of binary 11001?', ans: '1×16 + 1×8 + 0×4 + 0×2 + 1×1 = 25' }
    ]
  },

  abbreviations: {
    title: 'Computer Abbreviations',
    intro: 'A wide range of computer abbreviations appear in SBI PO Mains and RBI Grade B exams. These span hardware, software, networking, and internet domains.',
    formulas: [],
    tips: [
      'CPU — Central Processing Unit | ALU — Arithmetic Logic Unit | CU — Control Unit',
      'RAM — Random Access Memory | ROM — Read Only Memory | DRAM — Dynamic RAM | SRAM — Static RAM',
      'HDD — Hard Disk Drive | SSD — Solid State Drive | USB — Universal Serial Bus',
      'BIOS — Basic Input Output System | POST — Power On Self Test | OS — Operating System',
      'HTML — HyperText Markup Language | HTTP — HyperText Transfer Protocol | HTTPS — HTTP Secure',
      'URL — Uniform Resource Locator | IP — Internet Protocol | TCP — Transmission Control Protocol',
      'DNS — Domain Name System | ISP — Internet Service Provider | WWW — World Wide Web',
      'LAN — Local Area Network | WAN — Wide Area Network | MAN — Metropolitan Area Network',
      'FTP — File Transfer Protocol | SMTP — Simple Mail Transfer Protocol | POP3 — Post Office Protocol v3',
      'IMAP — Internet Message Access Protocol | VPN — Virtual Private Network',
      'PDF — Portable Document Format | GUI — Graphical User Interface | CLI — Command Line Interface',
      'OOP — Object-Oriented Programming | API — Application Programming Interface',
      'SQL — Structured Query Language | DBMS — Database Management System | RDBMS — Relational DBMS',
      'AI — Artificial Intelligence | ML — Machine Learning | IoT — Internet of Things',
      'OCR — Optical Character Recognition | OMR — Optical Mark Recognition | MICR — Magnetic Ink Character Recognition',
      'UPS — Uninterruptible Power Supply | LCD — Liquid Crystal Display | LED — Light Emitting Diode',
      'HDMI — High Definition Multimedia Interface | VGA — Video Graphics Array',
      'Wi-Fi — Wireless Fidelity | NIC — Network Interface Card | MAC — Media Access Control',
      'SSL — Secure Sockets Layer | TLS — Transport Layer Security | OTP — One Time Password',
      'DoS — Denial of Service | DDoS — Distributed Denial of Service | VPN — Virtual Private Network',
      'PNG — Portable Network Graphics | JPEG — Joint Photographic Experts Group | GIF — Graphics Interchange Format',
      'MP3 — MPEG-1 Audio Layer 3 | MPEG — Moving Picture Experts Group',
      'ASCII — American Standard Code for Information Interchange | UNICODE — Universal Code',
      'BCD — Binary Coded Decimal | MHz — MegaHertz | GHz — GigaHertz | MIPS — Million Instructions Per Second',
      'VLSI — Very Large Scale Integration | IC — Integrated Circuit | PCB — Printed Circuit Board',
      'IDE — Integrated Development Environment | JVM — Java Virtual Machine | JDK — Java Development Kit',
      'PHP — Hypertext Preprocessor | CSS — Cascading Style Sheets | XML — eXtensible Markup Language',
      'JSON — JavaScript Object Notation | AJAX — Asynchronous JavaScript And XML',
      'QR — Quick Response | NFC — Near Field Communication | RFID — Radio Frequency Identification',
      'GPS — Global Positioning System | GSM — Global System for Mobile | CDMA — Code Division Multiple Access',
      'ATM — Automated Teller Machine | PIN — Personal Identification Number | OTP — One Time Password',
      'NEFT — National Electronic Funds Transfer | RTGS — Real Time Gross Settlement | IMPS — Immediate Payment Service',
      'UPI — Unified Payments Interface | NACH — National Automated Clearing House',
      'SWIFT — Society for Worldwide Interbank Financial Telecommunication',
      'EMV — Europay Mastercard Visa (chip card standard) | NFC used in contactless payments',
      'ECS — Electronic Clearing Service | CBS — Core Banking Solution | IFSC — Indian Financial System Code'
    ],
    examples: []
  }
};

// ─────────────────────────────────────────────────────────────────────────────
// MCQ BANK — Computer Awareness (60 questions)
// ─────────────────────────────────────────────────────────────────────────────

// ── COMPUTER BASICS (8 questions) ──────────────────────────────────────────
Q.push(
{id:'ca_basics_1',s:'computer',t:'computer_basics',d:'easy',
 q:'Which generation of computers was characterized by the use of vacuum tubes?',
 o:['First Generation','Second Generation','Third Generation','Fourth Generation'],
 c:0,
 e:'First Generation computers (1940–1956) used vacuum tubes for circuitry and magnetic drums for memory. Examples: ENIAC, UNIVAC. They were large, consumed enormous power, and generated a lot of heat.',
 x:['sbi_mains']},

{id:'ca_basics_2',s:'computer',t:'computer_basics',d:'medium',
 q:'Which component of the CPU performs arithmetic and logical operations?',
 o:['Control Unit','Memory Unit','Arithmetic Logic Unit','Register'],
 c:2,
 e:'The Arithmetic Logic Unit (ALU) performs all arithmetic operations (+, -, ×, ÷) and logical operations (AND, OR, NOT, XOR). The Control Unit coordinates and directs the operation of all other units.',
 x:['sbi_mains']},

{id:'ca_basics_3',s:'computer',t:'computer_basics',d:'medium',
 q:'What is the correct order of the memory hierarchy from fastest to slowest?',
 o:['RAM → Cache → Registers → HDD','Registers → Cache → RAM → Secondary Storage','Cache → Registers → RAM → ROM','RAM → Registers → ROM → Cache'],
 c:1,
 e:'Memory hierarchy from fastest to slowest: CPU Registers (nanoseconds, bytes) → Cache (L1/L2/L3) → RAM (main memory) → Secondary Storage (HDD/SSD). Faster memories are smaller and more expensive per byte.',
 x:['sbi_mains']},

{id:'ca_basics_4',s:'computer',t:'computer_basics',d:'medium',
 q:'The Fifth Generation of computers is associated with which technology?',
 o:['Transistors','Integrated Circuits','Microprocessors','Artificial Intelligence and Parallel Processing'],
 c:3,
 e:'Fifth Generation computers (1980s–present) are based on Artificial Intelligence, machine learning, and massive parallel processing. Examples include expert systems and modern AI chips like Google\'s TPU.',
 x:['sbi_mains']},

{id:'ca_basics_5',s:'computer',t:'computer_basics',d:'easy',
 q:'Which of the following is NOT a type of computer based on size?',
 o:['Supercomputer','Mainframe','Minicomputer','Superscalar'],
 c:3,
 e:'Computers are classified by size/power as: Supercomputer, Mainframe, Minicomputer (Midrange), Microcomputer (PC), and Embedded computers. "Superscalar" is a CPU architecture term (ability to execute multiple instructions per clock cycle), not a computer type.',
 x:['sbi_mains']},

{id:'ca_basics_6',s:'computer',t:'computer_basics',d:'medium',
 q:'The basic operational cycle of a CPU is called:',
 o:['Boot cycle','Fetch-Decode-Execute cycle','Input-Process-Output cycle','Compile-Link-Run cycle'],
 c:1,
 e:'Every CPU operates on the Fetch-Decode-Execute cycle: (1) Fetch the instruction from memory into the instruction register, (2) Decode it to determine the operation, (3) Execute the operation. This repeats billions of times per second.',
 x:['sbi_mains']},

{id:'ca_basics_7',s:'computer',t:'computer_basics',d:'hard',
 q:'In a 64-bit operating system, what does "64-bit" refer to?',
 o:['Maximum RAM supported is 64 GB','The CPU processes 64 bits of data per clock cycle','The hard disk stores 64 GB per sector','The monitor displays 64-bit colour'],
 c:1,
 e:'In a 64-bit system, the CPU\'s word size is 64 bits — it processes 64 bits of data simultaneously. This also allows addressing up to 2^64 memory locations (~16 exabytes of RAM theoretically), far more than 32-bit systems (4 GB max).',
 x:['sbi_mains']},

{id:'ca_basics_8',s:'computer',t:'computer_basics',d:'medium',
 q:'Which type of computer is used for complex scientific calculations like weather forecasting and nuclear simulations?',
 o:['Mainframe Computer','Minicomputer','Supercomputer','Personal Computer'],
 c:2,
 e:'Supercomputers are the fastest and most powerful computers, used for computationally intensive tasks such as weather forecasting, nuclear simulations, climate research, and cryptography. Examples: PARAM (India), Summit (USA), Frontier (USA).',
 x:['sbi_mains']}
);

// ── INPUT / OUTPUT DEVICES (6 questions) ───────────────────────────────────
Q.push(
{id:'ca_io_1',s:'computer',t:'io_devices',d:'easy',
 q:'Which device is used in banks to read account numbers printed in magnetic ink at the bottom of cheques?',
 o:['OCR','OMR','MICR','Barcode Reader'],
 c:2,
 e:'MICR (Magnetic Ink Character Recognition) uses special magnetic ink to print characters (MICR code) at the bottom of bank cheques. MICR readers scan these characters to process cheques quickly and accurately. It is used by the RBI and banks in India.',
 x:['sbi_mains']},

{id:'ca_io_2',s:'computer',t:'io_devices',d:'medium',
 q:'Which of the following is an example of both an input and output device?',
 o:['Keyboard','Monitor','Touch Screen','Printer'],
 c:2,
 e:'A touch screen functions as both an input device (detecting touch/finger gestures) and an output device (displaying visual information). Other dual-purpose devices include modems and network interface cards.',
 x:['sbi_mains']},

{id:'ca_io_3',s:'computer',t:'io_devices',d:'medium',
 q:'OCR technology is most commonly used to:',
 o:['Read magnetic ink on cheques','Convert printed or handwritten text into digital/editable format','Detect multiple choice answers on answer sheets','Read barcodes on products'],
 c:1,
 e:'OCR (Optical Character Recognition) software analyses scanned images of text and converts them into machine-readable/editable text. It is used in digitizing printed documents, books, and forms. OMR is used for answer sheets; MICR for cheques; barcode readers for product codes.',
 x:['sbi_mains']},

{id:'ca_io_4',s:'computer',t:'io_devices',d:'easy',
 q:'Which type of printer uses heat to fuse toner powder onto paper?',
 o:['Inkjet Printer','Dot Matrix Printer','Laser Printer','Plotter'],
 c:2,
 e:'Laser printers use a laser beam to create an electrostatic image on a drum, which attracts toner (powdered ink). Heat from a fuser unit melts the toner permanently onto the paper. They are faster and produce sharper output than inkjet printers.',
 x:['sbi_mains']},

{id:'ca_io_5',s:'computer',t:'io_devices',d:'medium',
 q:'A plotter is a type of output device primarily used for:',
 o:['Printing text documents at high speed','Producing large-scale drawings, blueprints, and engineering designs','Scanning photographs at high resolution','Converting audio signals to digital data'],
 c:1,
 e:'Plotters are specialized output devices that draw continuous lines using pens or cutting tools. They are used for CAD/CAM engineering drawings, architectural blueprints, maps, and banners where precision vector graphics over large formats are needed.',
 x:['sbi_mains']},

{id:'ca_io_6',s:'computer',t:'io_devices',d:'medium',
 q:'OMR (Optical Mark Recognition) is commonly used in:',
 o:['Reading bank cheque serial numbers','Evaluating multiple-choice answer sheets and surveys','Converting handwritten text to digital format','Reading product barcodes at retail stores'],
 c:1,
 e:'OMR detects the presence or absence of marks (pencil/pen shading) in predefined positions on a form. It is widely used for evaluating MCQ answer sheets (competitive exams like UPSC, banking), surveys, and ballot forms due to its high speed and accuracy.',
 x:['sbi_mains']}
);

// ── STORAGE DEVICES (6 questions) ──────────────────────────────────────────
Q.push(
{id:'ca_storage_1',s:'computer',t:'storage_devices',d:'easy',
 q:'Which of the following is a NON-VOLATILE memory that retains data without power?',
 o:['RAM','Cache Memory','DRAM','ROM'],
 c:3,
 e:'ROM (Read Only Memory) is non-volatile — it retains its contents even when power is off. RAM (including DRAM and SRAM) and Cache are volatile — they lose data when power is removed. ROM stores firmware like BIOS.',
 x:['sbi_mains']},

{id:'ca_storage_2',s:'computer',t:'storage_devices',d:'medium',
 q:'What is the storage capacity of a standard single-layer DVD?',
 o:['700 MB','4.7 GB','8.5 GB','25 GB'],
 c:1,
 e:'A standard single-layer, single-sided DVD (DVD-5) holds approximately 4.7 GB of data. A CD holds ~700 MB. A dual-layer DVD (DVD-9) holds ~8.5 GB. A single-layer Blu-ray disc holds 25 GB.',
 x:['sbi_mains']},

{id:'ca_storage_3',s:'computer',t:'storage_devices',d:'medium',
 q:'Which advantage does an SSD have over a traditional HDD?',
 o:['Higher storage capacity per rupee','Uses magnetic platters for reliability','Faster read/write speeds and no moving parts','Generates more heat during operation'],
 c:2,
 e:'SSDs (Solid State Drives) use NAND flash memory with no moving mechanical parts. This gives them much faster read/write speeds, lower access times, lower power consumption, and greater resistance to physical shock compared to HDDs, which use spinning magnetic platters.',
 x:['sbi_mains']},

{id:'ca_storage_4',s:'computer',t:'storage_devices',d:'easy',
 q:'Cache memory is located:',
 o:['On the hard disk drive','Inside the CPU or between CPU and RAM','On the motherboard near the power supply','Inside the RAM module'],
 c:1,
 e:'Cache memory (L1, L2, L3) is an ultra-fast SRAM-based memory located inside the CPU chip or between the CPU and main RAM. It stores frequently accessed data and instructions to reduce the time the CPU spends waiting for data from the slower RAM.',
 x:['sbi_mains']},

{id:'ca_storage_5',s:'computer',t:'storage_devices',d:'medium',
 q:'1 Terabyte (TB) is equal to:',
 o:['1000 GB','1024 MB','1024 GB','1000 MB'],
 c:2,
 e:'In computing, 1 TB = 1024 GB (binary/IEC standard). The hierarchy is: 1 KB = 1024 Bytes, 1 MB = 1024 KB, 1 GB = 1024 MB, 1 TB = 1024 GB, 1 PB = 1024 TB. Note: Hard disk manufacturers sometimes use 1 TB = 1000 GB (decimal), causing a small apparent size difference.',
 x:['sbi_mains']},

{id:'ca_storage_6',s:'computer',t:'storage_devices',d:'hard',
 q:'Which type of ROM can be erased using ultraviolet light and reprogrammed electrically?',
 o:['PROM','EEPROM','EPROM','Mask ROM'],
 c:2,
 e:'EPROM (Erasable Programmable Read-Only Memory) can be erased by exposing it to strong ultraviolet (UV) light through a quartz window, then reprogrammed electrically. EEPROM (Electrically Erasable PROM) can be erased and reprogrammed electrically without UV light. PROM can be programmed once only. Mask ROM is programmed at manufacture.',
 x:['sbi_mains']}
);

// ── OPERATING SYSTEMS (6 questions) ────────────────────────────────────────
Q.push(
{id:'ca_os_1',s:'computer',t:'operating_systems',d:'easy',
 q:'Which of the following is the FIRST program to run when a computer is switched on?',
 o:['Operating System','Application Software','BIOS/UEFI','Word Processor'],
 c:2,
 e:'BIOS (Basic Input/Output System) or its modern successor UEFI (Unified Extensible Firmware Interface) is stored in ROM and executes first when the computer powers on. It performs POST (Power-On Self Test) to check hardware, then locates and loads the operating system from the boot device.',
 x:['sbi_mains']},

{id:'ca_os_2',s:'computer',t:'operating_systems',d:'medium',
 q:'Which of the following is NOT a function of an Operating System?',
 o:['Process Management','Memory Management','Compiling source code into executable programs','File and Device Management'],
 c:2,
 e:'Compiling source code is the job of a compiler (separate software), not the OS. Functions of an OS include: process management, memory management, file system management, device management, user interface, and security/access control.',
 x:['sbi_mains']},

{id:'ca_os_3',s:'computer',t:'operating_systems',d:'medium',
 q:'Linux operating system was originally created by:',
 o:['Bill Gates','Steve Jobs','Linus Torvalds','Dennis Ritchie'],
 c:2,
 e:'Linus Torvalds created the Linux kernel in 1991 as a free, open-source alternative to Unix. Linux is now the dominant OS for servers, supercomputers, and Android devices. Dennis Ritchie created the C language and co-developed Unix.',
 x:['sbi_mains']},

{id:'ca_os_4',s:'computer',t:'operating_systems',d:'medium',
 q:'What is a "warm boot" (soft reboot) of a computer?',
 o:['Starting the computer from a completely powered-off state','Restarting the computer without switching off the power','Installing a new operating system','Running antivirus during startup'],
 c:1,
 e:'A warm boot (soft reboot) restarts the computer while it remains powered on — e.g., using Ctrl+Alt+Del or the Restart option. A cold boot (hard start) involves powering the computer completely off and then back on. Warm boot is faster as it skips some hardware initialisation steps.',
 x:['sbi_mains']},

{id:'ca_os_5',s:'computer',t:'operating_systems',d:'hard',
 q:'Which scheduling algorithm gives the CPU to the process that has been waiting the longest?',
 o:['Shortest Job First (SJF)','Round Robin','First Come First Served (FCFS)','Priority Scheduling'],
 c:2,
 e:'First Come First Served (FCFS) is the simplest CPU scheduling algorithm — processes are executed in the order they arrive in the ready queue (like a queue at a bank). It is non-preemptive but can cause the "convoy effect" where short processes wait behind a long one.',
 x:['sbi_mains']},

{id:'ca_os_6',s:'computer',t:'operating_systems',d:'medium',
 q:'Which Windows keyboard shortcut opens the Task Manager directly?',
 o:['Ctrl + Alt + Delete','Ctrl + Shift + Esc','Alt + F4','Windows key + R'],
 c:1,
 e:'Ctrl + Shift + Esc directly opens Task Manager in Windows. Ctrl + Alt + Delete opens a security screen with Task Manager as one option. Task Manager shows running processes, CPU/RAM usage, and allows force-quitting unresponsive applications.',
 x:['sbi_mains']}
);

// ── MS OFFICE (8 questions) ────────────────────────────────────────────────
Q.push(
{id:'ca_office_1',s:'computer',t:'ms_office',d:'easy',
 q:'Which keyboard shortcut is used to UNDO the last action in MS Word?',
 o:['Ctrl + Y','Ctrl + Z','Ctrl + U','Ctrl + X'],
 c:1,
 e:'Ctrl + Z is the universal Undo shortcut in MS Office (Word, Excel, PowerPoint) and most Windows applications. Ctrl + Y is Redo (repeats the last action). Ctrl + U applies underline formatting. Ctrl + X cuts selected text.',
 x:['sbi_mains']},

{id:'ca_office_2',s:'computer',t:'ms_office',d:'easy',
 q:'What is the default file extension for an MS Word document (Office 2007 and later)?',
 o:['.doc','.txt','.docx','.rtf'],
 c:2,
 e:'From MS Office 2007 onwards, Word documents are saved in the .docx format (Office Open XML format). The older .doc format was used in Word 97–2003. Excel uses .xlsx and PowerPoint uses .pptx in the new format.',
 x:['sbi_mains']},

{id:'ca_office_3',s:'computer',t:'ms_office',d:'medium',
 q:'Which MS Excel function is used to find a value in the first column of a table and return a value from another column in the same row?',
 o:['HLOOKUP','INDEX','VLOOKUP','MATCH'],
 c:2,
 e:'VLOOKUP (Vertical Lookup) searches the first column of a table range for a value and returns data from a specified column in the same row. Syntax: =VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup]). HLOOKUP does the same horizontally across the first row.',
 x:['sbi_mains']},

{id:'ca_office_4',s:'computer',t:'ms_office',d:'medium',
 q:'In MS Excel, what does the formula =COUNTIF(A1:A10,">=50") calculate?',
 o:['Sum of all values ≥ 50 in A1:A10','Number of cells in A1:A10 with values ≥ 50','Average of cells in A1:A10 with values ≥ 50','Count of all non-empty cells in A1:A10'],
 c:1,
 e:'COUNTIF counts cells within a range that meet a specified condition. =COUNTIF(A1:A10,">=50") counts how many cells in the range A1:A10 contain values greater than or equal to 50. For summing, use SUMIF; for averaging, use AVERAGEIF.',
 x:['sbi_mains']},

{id:'ca_office_5',s:'computer',t:'ms_office',d:'medium',
 q:'Which function key is used to start a PowerPoint slideshow from the BEGINNING?',
 o:['F1','F5','F7','F11'],
 c:1,
 e:'F5 starts the PowerPoint presentation from the very first slide. Shift + F5 starts the slideshow from the current slide. F7 runs spell check in MS Office applications. F1 opens Help. F11 creates a chart in Excel.',
 x:['sbi_mains']},

{id:'ca_office_6',s:'computer',t:'ms_office',d:'medium',
 q:'In MS Excel, a cell reference like $B$4 is called:',
 o:['Relative Reference','Mixed Reference','Absolute Reference','Named Reference'],
 c:2,
 e:'An Absolute Reference (e.g., $B$4) uses dollar signs to lock both the column letter and row number. When you copy a formula with an absolute reference, the cell address does not change. A Relative Reference (e.g., B4) adjusts when copied. A Mixed Reference locks either the row or column (e.g., $B4 or B$4).',
 x:['sbi_mains']},

{id:'ca_office_7',s:'computer',t:'ms_office',d:'hard',
 q:'The "Mail Merge" feature in MS Word is used to:',
 o:['Merge two Word documents into one file','Send emails directly from within Word','Create personalised letters or labels by combining a document template with a data source','Convert a Word file to PDF format'],
 c:2,
 e:'Mail Merge allows you to create multiple personalised documents (letters, envelopes, labels, emails) by combining a Word template with a data source such as an Excel spreadsheet or Access database. Each record in the data source generates a customised copy of the document.',
 x:['sbi_mains']},

{id:'ca_office_8',s:'computer',t:'ms_office',d:'medium',
 q:'Which MS Word feature records all changes made to a document so reviewers can see edits?',
 o:['Mail Merge','AutoCorrect','Track Changes','Compare Documents'],
 c:2,
 e:'Track Changes (shortcut: Ctrl+Shift+E in older Word, or found in the Review tab) records all insertions, deletions, and formatting changes in a document. Each reviewer\'s changes are shown in a distinct colour. The document author can then Accept or Reject each change.',
 x:['sbi_mains']}
);

// ── INTERNET & NETWORKING (8 questions) ────────────────────────────────────
Q.push(
{id:'ca_net_1',s:'computer',t:'internet_networking',d:'easy',
 q:'The World Wide Web (WWW) was invented by:',
 o:['Bill Gates','Tim Berners-Lee','Vint Cerf','Charles Babbage'],
 c:1,
 e:'Tim Berners-Lee invented the World Wide Web in 1989 while working at CERN in Switzerland. He created the first web browser, web server, and defined HTML, HTTP, and URLs. The Web is an information system on the Internet, not the Internet itself.',
 x:['sbi_mains']},

{id:'ca_net_2',s:'computer',t:'internet_networking',d:'medium',
 q:'Which network covers the largest geographical area?',
 o:['LAN','MAN','WAN','PAN'],
 c:2,
 e:'WAN (Wide Area Network) covers the largest geographic area — spanning cities, countries, or continents. The Internet is the largest WAN. MAN (Metropolitan Area Network) covers a city. LAN (Local Area Network) covers a building/campus. PAN (Personal Area Network) covers a few meters around a person (Bluetooth).',
 x:['sbi_mains']},

{id:'ca_net_3',s:'computer',t:'internet_networking',d:'medium',
 q:'What is the function of a DNS (Domain Name System) server?',
 o:['Assigns IP addresses automatically to devices on a network','Translates human-readable domain names into IP addresses','Encrypts web traffic between browser and server','Routes data packets between different networks'],
 c:1,
 e:'DNS acts as the "phone book" of the Internet. When you type www.rbi.org.in, your browser contacts a DNS server which translates this domain name into the corresponding IP address (e.g., 203.0.113.5) so your computer can connect to the correct server.',
 x:['sbi_mains']},

{id:'ca_net_4',s:'computer',t:'internet_networking',d:'medium',
 q:'HTTPS differs from HTTP primarily because HTTPS:',
 o:['Loads web pages faster','Uses a different port number and encrypts data using SSL/TLS','Works only on mobile devices','Is used only for email communication'],
 c:1,
 e:'HTTPS (HTTP Secure) encrypts all data transmitted between the browser and web server using SSL (Secure Sockets Layer) or TLS (Transport Layer Security). HTTPS uses port 443; HTTP uses port 80. Encrypted connections are essential for banking, e-commerce, and login pages. The padlock icon in the browser indicates HTTPS.',
 x:['sbi_mains']},

{id:'ca_net_5',s:'computer',t:'internet_networking',d:'medium',
 q:'Which protocol is used to send emails from a client to a mail server?',
 o:['POP3','IMAP','SMTP','FTP'],
 c:2,
 e:'SMTP (Simple Mail Transfer Protocol, port 25/587) is used to send emails from a mail client to a mail server and between mail servers. POP3 (port 110) and IMAP (port 143) are used to receive/retrieve emails from the mail server to the client.',
 x:['sbi_mains']},

{id:'ca_net_6',s:'computer',t:'internet_networking',d:'hard',
 q:'An IPv4 address consists of how many bits?',
 o:['16 bits','32 bits','64 bits','128 bits'],
 c:1,
 e:'IPv4 (Internet Protocol version 4) addresses are 32 bits long, written as four octets in dotted-decimal notation (e.g., 192.168.1.1). Each octet ranges from 0–255. This gives ~4.3 billion unique addresses, now almost exhausted. IPv6 uses 128-bit addresses to solve this.',
 x:['sbi_mains']},

{id:'ca_net_7',s:'computer',t:'internet_networking',d:'medium',
 q:'Which network device connects multiple computers within a LAN and sends data only to the intended recipient device (unlike a hub which broadcasts to all)?',
 o:['Router','Hub','Switch','Modem'],
 c:2,
 e:'A Switch operates at Layer 2 (Data Link Layer) and uses MAC addresses to forward data frames only to the specific port connected to the destination device. A Hub broadcasts to all ports. A Router connects different networks and works at Layer 3. A Modem connects a home network to the ISP.',
 x:['sbi_mains']},

{id:'ca_net_8',s:'computer',t:'internet_networking',d:'medium',
 q:'What does "URL" stand for, and which of the following is a complete URL?',
 o:['Uniform Resource Locator — https://www.rbi.org.in/careers','Universal Reference Link — rbi.org.in','Unified Routing Language — rbi@careers.in','Uniform Resource Language — www//rbi.in'],
 c:0,
 e:'URL stands for Uniform Resource Locator. A complete URL includes: Protocol (https://), domain name (www.rbi.org.in), and optionally a path (/careers). URLs are used to identify and locate resources on the Internet. An email address like rbi@careers.in is not a URL.',
 x:['sbi_mains']}
);

// ── DATABASE (6 questions) ──────────────────────────────────────────────────
Q.push(
{id:'ca_db_1',s:'computer',t:'database',d:'easy',
 q:'In a relational database, a Primary Key is:',
 o:['A key that links two tables together','A column or set of columns that uniquely identifies each row and cannot be NULL','The first column of any database table','A key used only for sorting records'],
 c:1,
 e:'A Primary Key uniquely identifies each record in a table. It cannot contain NULL values and cannot have duplicate values. A table can have only one primary key. It is used to enforce entity integrity in a relational database.',
 x:['sbi_mains']},

{id:'ca_db_2',s:'computer',t:'database',d:'medium',
 q:'Which SQL command is used to retrieve data from a database table?',
 o:['INSERT','UPDATE','SELECT','CREATE'],
 c:2,
 e:'SELECT is the DQL (Data Query Language) command used to retrieve data. Syntax: SELECT column1, column2 FROM table WHERE condition. INSERT adds new rows; UPDATE modifies existing rows; DELETE removes rows; CREATE makes new tables/databases.',
 x:['sbi_mains']},

{id:'ca_db_3',s:'computer',t:'database',d:'medium',
 q:'A Foreign Key in a relational database is used to:',
 o:['Create unique index on a column','Establish a link between two tables by referencing the Primary Key of another table','Prevent NULL values in a column','Encrypt sensitive data in a table'],
 c:1,
 e:'A Foreign Key is a column (or set of columns) in one table that references the Primary Key in another table. It enforces referential integrity — meaning you cannot insert a value in the foreign key column that does not exist in the referenced primary key column.',
 x:['sbi_mains']},

{id:'ca_db_4',s:'computer',t:'database',d:'medium',
 q:'Which of the following represents the ACID property "Atomicity" in database transactions?',
 o:['All concurrent transactions are isolated from each other','A transaction either completes fully or is rolled back completely — no partial execution','Data remains consistent before and after a transaction','Committed data is permanently saved even if the system crashes'],
 c:1,
 e:'Atomicity (the "A" in ACID) means a transaction is treated as an indivisible unit — all operations succeed (commit) or all fail and are rolled back. For example, in a bank transfer, both the debit and credit must succeed; if either fails, neither should occur.',
 x:['sbi_mains']},

{id:'ca_db_5',s:'computer',t:'database',d:'hard',
 q:'Which SQL clause is used to filter groups after a GROUP BY operation?',
 o:['WHERE','HAVING','FILTER','GROUP FILTER'],
 c:1,
 e:'HAVING filters the results of GROUP BY aggregations. WHERE filters individual rows before grouping. Example: SELECT Department, COUNT(*) FROM Employees GROUP BY Department HAVING COUNT(*) > 5 — this shows only departments with more than 5 employees.',
 x:['sbi_mains']},

{id:'ca_db_6',s:'computer',t:'database',d:'medium',
 q:'What is the purpose of normalization in database design?',
 o:['To speed up query execution by adding more indexes','To reduce data redundancy and improve data integrity by organizing data into related tables','To encrypt sensitive data stored in tables','To create backup copies of the database automatically'],
 c:1,
 e:'Normalization is the process of structuring a relational database to reduce data redundancy and improve data integrity. Normal forms (1NF, 2NF, 3NF, BCNF) define rules to eliminate duplicate data and ensure logical data dependencies. This prevents anomalies during insert, update, and delete operations.',
 x:['sbi_mains']}
);

// ── NUMBER SYSTEMS (5 questions) ───────────────────────────────────────────
Q.push(
{id:'ca_num_1',s:'computer',t:'number_systems',d:'medium',
 q:'What is the binary representation of the decimal number 45?',
 o:['101011','101101','101100','110101'],
 c:1,
 e:'Convert 45 to binary by successive division: 45÷2=22R1, 22÷2=11R0, 11÷2=5R1, 5÷2=2R1, 2÷2=1R0, 1÷2=0R1. Reading remainders from bottom to top: 101101. Verify: 32+8+4+1 = 45. ✓',
 x:['sbi_mains']},

{id:'ca_num_2',s:'computer',t:'number_systems',d:'medium',
 q:'What is the decimal equivalent of the binary number 11010?',
 o:['24','26','28','30'],
 c:1,
 e:'11010 in binary: 1×2^4 + 1×2^3 + 0×2^2 + 1×2^1 + 0×2^0 = 16 + 8 + 0 + 2 + 0 = 26. Positions are counted from right starting at 0.',
 x:['sbi_mains']},

{id:'ca_num_3',s:'computer',t:'number_systems',d:'medium',
 q:'The hexadecimal number system uses which base?',
 o:['Base 2','Base 8','Base 10','Base 16'],
 c:3,
 e:'Hexadecimal (hex) is base-16, using digits 0–9 and letters A–F (where A=10, B=11, C=12, D=13, E=14, F=15). It is widely used as a compact representation of binary data — each hex digit represents exactly 4 binary bits (nibble). For example, binary 1111 1010 = FA in hex.',
 x:['sbi_mains']},

{id:'ca_num_4',s:'computer',t:'number_systems',d:'hard',
 q:'What is the hexadecimal equivalent of the decimal number 255?',
 o:['EF','FE','FF','F0'],
 c:2,
 e:'255 ÷ 16 = 15 remainder 15. So 255 = 15×16 + 15 = FF in hex (since F=15). Alternatively, 255 in binary is 11111111 (eight 1s). Grouping into two nibbles: 1111 1111 = F F = FF. This is the maximum value of a single byte.',
 x:['sbi_mains']},

{id:'ca_num_5',s:'computer',t:'number_systems',d:'medium',
 q:'In the binary number system, what is the result of 1011 + 0110?',
 o:['10001','10000','10100','11001'],
 c:0,
 e:'Binary addition: 1011 + 0110. Right to left: 1+0=1; 1+1=10 (write 0 carry 1); 0+1+1(carry)=10 (write 0 carry 1); 1+0+1(carry)=10 (write 0 carry 1). Final carry gives 10001. Verify in decimal: 11 + 6 = 17 = 10001 in binary. ✓',
 x:['sbi_mains']}
);

// ── CYBERSECURITY & GENERAL COMPUTER KNOWLEDGE (7 questions) ───────────────
Q.push(
{id:'ca_cyber_1',s:'computer',t:'cybersecurity',d:'easy',
 q:'Which type of malware disguises itself as legitimate software to trick users into installing it, but performs malicious actions in the background?',
 o:['Virus','Worm','Trojan Horse','Ransomware'],
 c:2,
 e:'A Trojan Horse (or Trojan) appears to be legitimate software (e.g., a free game, utility) but secretly performs malicious actions such as stealing data, opening backdoors, or downloading other malware. Unlike viruses, Trojans do not self-replicate. The name comes from the Greek myth of the Trojan Horse.',
 x:['sbi_mains']},

{id:'ca_cyber_2',s:'computer',t:'cybersecurity',d:'medium',
 q:'What is phishing?',
 o:['A technique to accelerate internet speed by routing through proxy servers','A fraudulent attempt to obtain sensitive information (passwords, credit card numbers) by disguising as a trustworthy entity in electronic communication','Unauthorized access to a computer system through software vulnerabilities','A method of encrypting data for secure transmission'],
 c:1,
 e:'Phishing is a social engineering attack where cybercriminals send fraudulent emails or create fake websites that appear legitimate (e.g., impersonating SBI or RBI) to trick users into revealing credentials, OTPs, or financial details. "Spear phishing" targets specific individuals; "whaling" targets executives.',
 x:['sbi_mains']},

{id:'ca_cyber_3',s:'computer',t:'cybersecurity',d:'medium',
 q:'What does a firewall do in a computer network?',
 o:['Speeds up internet connection by caching frequently visited websites','Monitors and controls incoming and outgoing network traffic based on predefined security rules','Encrypts all data stored on the hard disk','Automatically backs up files to a remote server'],
 c:1,
 e:'A firewall is a network security system (hardware or software) that monitors and controls network traffic based on security rules. It creates a barrier between a trusted internal network and untrusted external networks (like the Internet). It can block malicious traffic, unauthorized access attempts, and specific ports or IP addresses.',
 x:['sbi_mains']},

{id:'ca_cyber_4',s:'computer',t:'cybersecurity',d:'medium',
 q:'Which encryption method uses the SAME key for both encryption and decryption?',
 o:['Asymmetric Encryption','Public Key Encryption','Symmetric Encryption','Hash Function'],
 c:2,
 e:'Symmetric encryption uses one shared secret key for both encrypting and decrypting data. It is fast and suitable for large data (e.g., AES — Advanced Encryption Standard, DES). Asymmetric encryption (RSA) uses a key pair: public key to encrypt, private key to decrypt. SSL/TLS uses asymmetric for key exchange, then symmetric for data.',
 x:['sbi_mains']},

{id:'ca_cyber_5',s:'computer',t:'cybersecurity',d:'hard',
 q:'What is a DDoS (Distributed Denial of Service) attack?',
 o:['An attack that steals data by intercepting network traffic','An attack that floods a server with traffic from multiple compromised systems to make it unavailable to legitimate users','Unauthorized login to a system using stolen credentials','Installing spyware on a target system remotely'],
 c:1,
 e:'In a DDoS (Distributed Denial of Service) attack, thousands of compromised computers (a "botnet") simultaneously flood a target server or network with massive traffic, overwhelming its resources. This makes the service unavailable to legitimate users. DDoS differs from DoS in that it uses multiple distributed sources, making it harder to block.',
 x:['sbi_mains']},

{id:'ca_cyber_6',s:'computer',t:'cybersecurity',d:'medium',
 q:'Two-Factor Authentication (2FA) improves security by requiring:',
 o:['Two different passwords for the same account','Something you know (password) AND something you have or are (OTP/biometric)','Logging in from two different devices simultaneously','Changing the password every two days'],
 c:1,
 e:'Two-Factor Authentication (2FA) adds a second layer of security beyond just a password. The factors are: (1) Something you know — password/PIN, (2) Something you have — OTP on mobile/hardware token, (3) Something you are — biometric (fingerprint, face). 2FA requires any two of these factors, making account compromise much harder.',
 x:['sbi_mains']},

{id:'ca_cyber_7',s:'computer',t:'cybersecurity',d:'medium',
 q:'Ransomware is a type of malware that:',
 o:['Monitors user keystrokes and sends them to an attacker','Displays unwanted advertisements on the screen','Encrypts the victim\'s files and demands payment for the decryption key','Replicates itself automatically across networks without user action'],
 c:2,
 e:'Ransomware encrypts the victim\'s files or entire system, making data inaccessible. The attackers then demand a ransom (typically in cryptocurrency for anonymity) in exchange for the decryption key. Notable examples include WannaCry (2017) and Petya. Keyloggers monitor keystrokes; adware shows ads; worms self-replicate.',
 x:['sbi_mains']}
);

// Total: adds ~60 questions to Q[]
