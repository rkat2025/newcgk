
import { CourseLevel, FAQ, Definition, Expert } from './types';

export const COLORS = {
  background: '#FFFBFE',
  surface: '#F3EDF7',
  primary: '#6750A4',
  onPrimary: '#FFFFFF',
  textMain: '#1C1B1F',
  outline: '#79747E'
};

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  { question: "What is the primary law governing cybercrimes in India?", options: ["The IPC 1860", "The IT Act 2000", "The Data Protection Act 2023", "The Consumer Protection Act"], correctAnswerIndex: 1, explanation: "The Information Technology Act, 2000 is the primary law for cybercrimes and e-commerce in India." },
  { question: "Which section of the IT Act deals with identity theft?", options: ["Section 66", "Section 66C", "Section 67", "Section 70"], correctAnswerIndex: 1, explanation: "Section 66C prescribes punishment for identity theft." },
  { question: "What does MFA stand for in cybersecurity?", options: ["Multi-Function Access", "Multi-Factor Authentication", "Multiple File Archive", "Main Frame Authentication"], correctAnswerIndex: 1, explanation: "MFA adds an extra layer of security by requiring two or more verification methods." },
  { question: "Which of these is a social engineering attack?", options: ["SQL Injection", "DDoS", "Phishing", "Brute Force"], correctAnswerIndex: 2, explanation: "Phishing uses psychological manipulation to trick users into revealing data." },
  { question: "What is a 'Digital Footprint'?", options: ["The weight of your device", "The trail of data you leave online", "A special login key", "The size of your monitor"], correctAnswerIndex: 1, explanation: "Your digital footprint is the record of your online activity." },
  { question: "Is cyberbullying a punishable offense in India?", options: ["Only if someone is physically hurt", "Yes, under various IT Act & IPC sections", "No, it is just speech", "Only if it happens in schools"], correctAnswerIndex: 1, explanation: "Cyberbullying can be prosecuted under defamation, stalking, and IT Act sections." },
  { question: "What should you do if you receive a suspicious link via SMS?", options: ["Click to see if it's a virus", "Forward it to friends", "Delete it without clicking", "Reply and ask who they are"], correctAnswerIndex: 2, explanation: "Suspicious links can lead to phishing sites or malware downloads." },
  { question: "What does HTTPS stand for?", options: ["Hypertext Transfer Program Secure", "Hypertext Transfer Protocol Secure", "High Tech Privacy System", "Hyperlink Text Protocol Storage"], correctAnswerIndex: 1, explanation: "The 'S' at the end signifies that the communication is encrypted." },
  { question: "Which year was the IT Act of India majorly amended?", options: ["2005", "2008", "2015", "2020"], correctAnswerIndex: 1, explanation: "The IT (Amendment) Act, 2008 introduced significant changes regarding cyber terrorism and child pornography." },
  { question: "What is a 'Strong Password'?", options: ["Your name plus 123", "A combination of letters, numbers, and symbols", "Your date of birth", "A common word like 'Secret'"], correctAnswerIndex: 1, explanation: "Complexity makes passwords harder to crack via brute-force attacks." },
  // ... adding more questions to reach 115 ...
  { question: "What is 'Vishing'?", options: ["Fishing for virtual reality", "Voice-based phishing", "Visual hacking", "Video-based scamming"], correctAnswerIndex: 1, explanation: "Vishing uses voice calls to trick victims into giving sensitive info." },
  { question: "What is 'Smishing'?", options: ["Phishing via SMS", "Small scale phishing", "Smart device phishing", "Social media phishing"], correctAnswerIndex: 0, explanation: "Smishing uses text messages for fraudulent purposes." },
  { question: "Which government portal is used for reporting cybercrimes in India?", options: ["police.gov.in", "cybercrime.gov.in", "digitalindia.gov.in", "mygov.in"], correctAnswerIndex: 1, explanation: "cybercrime.gov.in is the National Cyber Crime Reporting Portal." },
  { question: "What is 'Malware'?", options: ["Bad quality hardware", "Malicious Software", "Mail-based software", "Manual software"], correctAnswerIndex: 1, explanation: "Malware is software specifically designed to disrupt, damage, or gain unauthorized access to a computer system." },
  { question: "What is 'Ransomware'?", options: ["Software that pays you", "Software that encrypts files and demands payment", "A type of firewall", "A secure backup system"], correctAnswerIndex: 1, explanation: "Ransomware locks your files and demands money for the decryption key." },
  { question: "What is 'AI Ethics'?", options: ["The price of AI models", "Moral principles for AI development and use", "The speed of AI processing", "How AI learns to code"], correctAnswerIndex: 1, explanation: "AI ethics ensures technology is used fairly, transparently, and safely." },
  { question: "What is a 'Deepfake'?", options: ["A very long movie", "AI-manipulated audio or video that looks real", "A high-resolution image", "A secure database"], correctAnswerIndex: 1, explanation: "Deepfakes use AI to replace a person's likeness in videos/audio." },
  { question: "Can you trust every AI-generated answer?", options: ["Yes, AI knows everything", "No, AI can 'hallucinate' or give wrong info", "Only if it is from Google", "Only if it sounds smart"], correctAnswerIndex: 1, explanation: "AI models can generate plausible-sounding but factually incorrect information." },
  { question: "What is 'Copyright' in the digital world?", options: ["The right to copy anything", "Legal protection for original digital content", "A fee for using the internet", "A type of web browser"], correctAnswerIndex: 1, explanation: "Copyright protects creators' rights over their original digital works." },
  { question: "What is 'Cyber Stalking'?", options: ["Walking behind someone online", "Repeatedly following or harassing someone via digital tools", "Watching movies on a loop", "Studying cyber laws"], correctAnswerIndex: 1, explanation: "Cyber stalking is a criminal offense involving persistent online harassment." },
  { question: "What is 'Data Sovereignty'?", options: ["Data being free for all", "Data being subject to the laws of the country it's in", "Unlimited data storage", "Data being deleted after use"], correctAnswerIndex: 1, explanation: "It refers to the idea that data is subject to the legal jurisdiction of its location." },
  { question: "Which law protects personal data of Indian citizens now?", options: ["IT Act 2000", "DPDP Act 2023", "Personal Data Bill 2019", "Right to Privacy Act"], correctAnswerIndex: 1, explanation: "The Digital Personal Data Protection Act 2023 is India's newest data privacy law." },
  { question: "What is 'Incognito Mode'?", options: ["A mode that makes you invisible to hackers", "A mode that doesn't save local browsing history", "A mode for deep-web access", "A paid subscription"], correctAnswerIndex: 1, explanation: "Incognito mode only prevents your local browser from saving history; websites and ISPs can still track you." },
  { question: "What is a 'Firewall'?", options: ["A wall made of fire", "A security system that monitors network traffic", "A cooling fan for PCs", "A type of fiber optic cable"], correctAnswerIndex: 1, explanation: "A firewall acts as a barrier between a trusted and untrusted network." },
  { question: "What is 'Encryption'?", options: ["Deleting files permanently", "Converting data into a secret code", "Compressing files to save space", "Copying files to a cloud"], correctAnswerIndex: 1, explanation: "Encryption ensures only authorized parties can read the data." },
  { question: "What is 'Public Wi-Fi' risk?", options: ["It uses too much battery", "It is open for hackers to intercept your data", "It is always too slow", "It requires a password"], correctAnswerIndex: 1, explanation: "Unsecured public Wi-Fi is a common ground for man-in-the-middle attacks." },
  { question: "What is 'Juice Jacking'?", options: ["Stealing juice from a shop", "Cyber attack via public USB charging stations", "An AI gaming term", "A type of battery explosion"], correctAnswerIndex: 1, explanation: "Juice jacking involves malware being installed via a USB cable in a charging port." },
  { question: "What is a 'Botnet'?", options: ["A net for robots", "A network of compromised computers", "A high-speed internet line", "A new social media site"], correctAnswerIndex: 1, explanation: "Botnets are used to perform DDoS attacks and send spam." },
  { question: "What is 'Pharming'?", options: ["Digital agriculture", "Redirecting users to malicious websites automatically", "Buying domains for profit", "A type of crypto mining"], correctAnswerIndex: 1, explanation: "Pharming poisons DNS records to send users to fake sites even if they type the correct URL." },
  { question: "What is 'Doxxing'?", options: ["Reading documents online", "Publishing someone's private info without consent", "Scanning for viruses", "A type of file compression"], correctAnswerIndex: 1, explanation: "Doxxing is used as a form of harassment by exposing private data." },
  { question: "Is sharing OTP with bank employees safe?", options: ["Yes, they work for the bank", "No, banks never ask for OTP", "Only if they call from an official number", "Only if it's for a high-value transaction"], correctAnswerIndex: 1, explanation: "No legitimate institution, especially a bank, will ever ask for your OTP." },
  { question: "What is 'Catfishing'?", options: ["Fishing for cats", "Creating a fake identity on social media to deceive people", "An online pet shop", "A technical term for low internet speed"], correctAnswerIndex: 1, explanation: "Catfishing is common in online scams and romance fraud." },
  { question: "What is 'Cyber Espionage'?", options: ["Working for a cyber firm", "Stealing secrets from governments or companies digitally", "Watching hacker movies", "Buying data legally"], correctAnswerIndex: 1, explanation: "Cyber espionage is often state-sponsored for strategic advantage." },
  { question: "What is 'Shoulder Surfing'?", options: ["Surfing with a board on your shoulder", "Looking over someone's shoulder to steal their PIN/Password", "A new VR sport", "Checking the weather for surfing"], correctAnswerIndex: 1, explanation: "It is a physical form of identity theft/password stealing." },
  { question: "What is 'Spyware'?", options: ["Software used for spying on enemies", "Software that secretly records your activity", "A browser extension for SEO", "A type of antivirus"], correctAnswerIndex: 1, explanation: "Spyware monitors your keystrokes, webcam, or browsing without consent." },
  { question: "What is 'Adware'?", options: ["Software that adds new features", "Software that displays unwanted ads", "A type of shopping app", "Software for ad agencies"], correctAnswerIndex: 1, explanation: "Adware is often bundled with free software and serves intrusive ads." },
  { question: "What is 'Keylogging'?", options: ["Logging into your PC", "Recording every keystroke you type", "Using a physical key for security", "Unlocking a keyboard"], correctAnswerIndex: 1, explanation: "Keyloggers are used to steal usernames and passwords." },
  { question: "What is 'Zero-Day Vulnerability'?", options: ["A bug found on the first day of the year", "A flaw that is exploited before the developer can fix it", "A software with zero bugs", "A bug that takes 0 days to fix"], correctAnswerIndex: 1, explanation: "Zero-day refers to the fact that the developer has 0 days of notice before the exploit." },
  { question: "What is 'White Hat Hacking'?", options: ["Hacking with a white hat on", "Ethical hacking done with permission to improve security", "Illegal hacking for fun", "Hacking for a specific political goal"], correctAnswerIndex: 1, explanation: "White hat hackers help organizations find and fix security gaps." },
  { question: "What is 'Black Hat Hacking'?", options: ["Hacking done for criminal gain", "Hacking that is legal", "Hacking for national security", "Using a black screen to hack"], correctAnswerIndex: 0, explanation: "Black hat hackers are malicious actors seeking personal or financial gain." },
  { question: "What is 'Grey Hat Hacking'?", options: ["Hacking between white and black hats", "Hacking done without permission but not for malicious reasons", "Hacking for fashion brands", "A type of government hacking"], correctAnswerIndex: 1, explanation: "Grey hats might hack into a system to alert the owner, often without authorization." },
  { question: "What is 'Penetration Testing'?", options: ["Testing the strength of a wall", "Authorized simulation of a cyber attack to find flaws", "Testing a new pen brand", "Checking internet speed"], correctAnswerIndex: 1, explanation: "It is a core part of proactive cybersecurity." },
  { question: "What is 'Social Engineering'?", options: ["Engineering for social media", "Manipulating people into giving up confidential info", "Building a social network", "A branch of civil engineering"], correctAnswerIndex: 1, explanation: "It targets the human element of security rather than the software." },
  { question: "What is 'Typosquatting'?", options: ["Living in a typo", "Registering common misspellings of popular domains", "A typing competition", "Checking for typos in a blog"], correctAnswerIndex: 1, explanation: "Attackers use these domains to trap users who make typing mistakes (e.g., gogle.com)." },
  { question: "What is 'Clickjacking'?", options: ["Stealing clicks", "Tricking a user into clicking something different from what they see", "A high-speed clicking game", "A technique for increasing ad revenue"], correctAnswerIndex: 1, explanation: "It overlays transparent layers over a button or link." },
  { question: "What is 'Logic Bomb'?", options: ["A bomb that thinks", "Malicious code that executes when a condition is met", "A type of video game", "A secure encryption method"], correctAnswerIndex: 1, explanation: "It 'detonates' when a certain date or action occurs." },
  { question: "What is 'Trojan Horse'?", options: ["A virus that looks like a horse", "Malware disguised as legitimate software", "A high-speed server", "A ancient computer model"], correctAnswerIndex: 1, explanation: "Just like the myth, it tricks users into inviting it into their system." },
  { question: "What is 'Worm'?", options: ["A small insect", "Self-replicating malware that spreads across networks", "A type of storage cable", "A browser extension"], correctAnswerIndex: 1, explanation: "Worms don't need human action to spread once they are on a network." },
  { question: "What is 'Rootkit'?", options: ["A kit for planting roots", "Malware designed to gain administrative control over a system", "A basic coding tool", "A type of router"], correctAnswerIndex: 1, explanation: "Rootkits are often very difficult to detect because they hide at the OS level." },
  { question: "What is 'Cross-Site Scripting (XSS)'?", options: ["Writing scripts across different sites", "Injecting malicious scripts into trusted websites", "A type of font styling", "Checking for script errors"], correctAnswerIndex: 1, explanation: "XSS is a common web security vulnerability." },
  { question: "What is 'SQL Injection'?", options: ["Injecting liquid into a PC", "Manipulating a database via malicious SQL code", "A high-speed database query", "A type of server hardware"], correctAnswerIndex: 1, explanation: "It can allow attackers to steal, change, or delete database data." },
  { question: "What is 'DDoS'?", options: ["Digital Data of Service", "Distributed Denial of Service", "Direct Digital Operating System", "Data Drive Operating Software"], correctAnswerIndex: 1, explanation: "DDoS floods a target with traffic to crash it." },
  { question: "What is 'Zombie Computer'?", options: ["A computer that came back to life", "A compromised computer part of a botnet", "An old PC in a scrapyard", "A computer with a scary screensaver"], correctAnswerIndex: 1, explanation: "It follows commands from a hacker without the owner knowing." },
  { question: "What is 'Dark Web'?", options: ["A web with no lights", "An unindexed part of the internet often used for illegal activity", "A type of night-mode browser", "A secret government website"], correctAnswerIndex: 1, explanation: "It requires special software like Tor to access." },
  { question: "What is 'Deep Web'?", options: ["A very deep website", "Unindexed web content like bank accounts and emails", "The bottom part of a webpage", "A web for scuba divers"], correctAnswerIndex: 1, explanation: "The Deep Web is huge and mostly consists of private databases." },
  { question: "What is 'Encryption Key'?", options: ["A physical key for your server", "A mathematical string used to lock/unlock data", "A password for your Wi-Fi", "The 'Enter' key on your keyboard"], correctAnswerIndex: 1, explanation: "Keys are essential for cryptographic processes." },
  { question: "What is 'Decryption'?", options: ["Deleting encrypted files", "Converting secret code back into readable data", "Buying a new PC", "Encrypting files twice"], correctAnswerIndex: 1, explanation: "It is the reverse of encryption." },
  { question: "What is 'Blockchain'?", options: ["A chain made of blocks", "A decentralized, distributed digital ledger", "A type of social media", "A secure cloud storage"], correctAnswerIndex: 1, explanation: "Blockchain is the technology behind cryptocurrencies." },
  { question: "What is 'Cryptocurrency'?", options: ["Secret currency", "Digital or virtual currency secured by cryptography", "A new type of bank account", "Physical coins used online"], correctAnswerIndex: 1, explanation: "Examples include Bitcoin and Ethereum." },
  { question: "What is 'NFT'?", options: ["New Fashion Trend", "Non-Fungible Token", "Network File Transfer", "Never Find Truth"], correctAnswerIndex: 1, explanation: "NFTs represent ownership of unique digital items." },
  { question: "What is 'Metaverse'?", options: ["A very large universe", "A collective virtual shared space", "A new social media app by Meta", "A type of cosmic research"], correctAnswerIndex: 1, explanation: "The Metaverse involves VR and AR technologies." },
  { question: "What is 'VPN'?", options: ["Virtual Private Network", "Very Private Name", "Voice Protocol Network", "Video Private Node"], correctAnswerIndex: 0, explanation: "VPNs hide your IP address and encrypt your internet traffic." },
  { question: "What is 'Cookie' in web terms?", options: ["A small biscuit", "A small piece of data stored on your browser by websites", "A type of computer virus", "A secret reward for users"], correctAnswerIndex: 1, explanation: "Cookies help websites remember your preferences and logins." },
  { question: "What is 'Data Mining'?", options: ["Digging for coal", "Analyzing large datasets to find patterns", "Stealing data from servers", "Deleting old data"], correctAnswerIndex: 1, explanation: "Data mining is used extensively in business and research." },
  { question: "What is 'Big Data'?", options: ["A very large hard drive", "Extremely large datasets that require special analysis", "A giant computer screen", "The entire internet"], correctAnswerIndex: 1, explanation: "Big Data focuses on Volume, Velocity, and Variety." },
  { question: "What is 'Machine Learning'?", options: ["Machines going to school", "A subset of AI where machines learn from data", "A robot building a machine", "A type of hardware manufacturing"], correctAnswerIndex: 1, explanation: "Machine learning allows systems to improve without explicit programming." },
  { question: "What is 'Natural Language Processing (NLP)'?", options: ["Processing organic food", "AI's ability to understand human language", "A type of speech therapy", "A coding language for robots"], correctAnswerIndex: 1, explanation: "NLP is used in chatbots and translation tools." },
  { question: "What is 'Computer Vision'?", options: ["A computer with glasses", "AI's ability to see and interpret visual information", "A futuristic computer model", "Checking your monitor for dust"], correctAnswerIndex: 1, explanation: "It is used in self-driving cars and facial recognition." },
  { question: "What is 'Algorithm'?", options: ["A special type of rhythm", "A set of rules or steps to solve a problem", "A new social media platform", "A type of digital clock"], correctAnswerIndex: 1, explanation: "Algorithms power everything from Google Search to Netflix recommendations." },
  { question: "What is 'Bias' in AI?", options: ["The price of an AI model", "Unfair prejudices in AI algorithms or data", "The weight of an AI server", "A type of AI chip"], correctAnswerIndex: 1, explanation: "AI bias can lead to discriminatory outcomes." },
  { question: "What is 'Turing Test'?", options: ["A driving test for robots", "A test of a machine's ability to exhibit intelligent behavior", "A high-speed coding test", "A security check for web servers"], correctAnswerIndex: 1, explanation: "Proposed by Alan Turing in 1950." },
  { question: "What is 'Singularity' in AI?", options: ["An AI being alone", "A hypothetical point where AI exceeds human intelligence", "A single line of code", "A new AI startup"], correctAnswerIndex: 1, explanation: "It is a popular topic in futurism and sci-fi." },
  { question: "What is 'Cloud Computing'?", options: ["Computing in the sky", "Delivering computing services over the internet", "Using weather data for code", "A type of flying computer"], correctAnswerIndex: 1, explanation: "Services like Google Drive and AWS are cloud-based." },
  { question: "What is 'IoT'?", options: ["Internet of Thinking", "Internet of Things", "Input Output Technology", "Internal Operating Tool"], correctAnswerIndex: 1, explanation: "IoT refers to physical objects connected to the internet (e.g., smart bulbs)." },
  { question: "What is 'SaaS'?", options: ["Software as a System", "Software as a Service", "System as a Software", "Secure as a Service"], correctAnswerIndex: 1, explanation: "Cloud-based software models like Gmail or Zoom." },
  { question: "What is 'Paas'?", options: ["Platform as a System", "Platform as a Service", "Private as a System", "Port as a Service"], correctAnswerIndex: 1, explanation: "Cloud platforms used by developers." },
  { question: "What is 'Iaas'?", options: ["Infrastructure as a System", "Infrastructure as a Service", "Internet as a System", "Internal as a Service"], correctAnswerIndex: 1, explanation: "Cloud-based infrastructure like servers and storage." },
  { question: "What is 'Open Source'?", options: ["A source that is open for everyone to see", "Software with source code anyone can inspect/modify", "A door that is open in a data center", "A free Wi-Fi hotspot"], correctAnswerIndex: 1, explanation: "Linux and Android are examples of open-source projects." },
  { question: "What is 'Proprietary Software'?", options: ["Software that is for owners only", "Software owned by a company with restricted access", "A type of property management tool", "Free software for all"], correctAnswerIndex: 1, explanation: "Windows and MacOS are proprietary." },
  { question: "What is 'Freeware'?", options: ["Free clothes", "Software available at no cost but with restricted rights", "Software that makes your PC faster", "A type of digital coin"], correctAnswerIndex: 1, explanation: "Adobe Reader is a common example." },
  { question: "What is 'Shareware'?", options: ["Software for sharing files", "Trial software provided for free for a limited time", "A type of social media", "Software that anyone can own"], correctAnswerIndex: 1, explanation: "It encourages users to buy the full version after a trial." },
  { question: "What is 'EULA'?", options: ["End User License Agreement", "Every User Legal Agreement", "Electronic User License Area", "End User Legal Access"], correctAnswerIndex: 0, explanation: "The legal contract between a software producer and user." },
  { question: "What is 'Two-Factor Authentication (2FA)'?", options: ["Logging in twice", "Adding a second verification step to a password", "A keyboard with two buttons", "A dual-monitor setup"], correctAnswerIndex: 1, explanation: "Commonly involves a code sent to your phone." },
  { question: "What is 'Biometric Authentication'?", options: ["Using your life story to log in", "Using unique physical traits like fingerprints to log in", "A type of health check", "An AI term for brain waves"], correctAnswerIndex: 1, explanation: "It is considered more secure than traditional passwords." },
  { question: "What is 'Data Encryption Standard (DES)'?", options: ["A basic encryption standard", "A deprecated symmetric-key algorithm", "A new high-speed data line", "A type of data backup"], correctAnswerIndex: 1, explanation: "It has been largely replaced by AES." },
  { question: "What is 'Advanced Encryption Standard (AES)'?", options: ["The current standard for high-level encryption", "A type of antivirus", "A browser for secure banking", "A secure operating system"], correctAnswerIndex: 0, explanation: "AES-256 is used globally by governments." },
  { question: "What is 'SSL'?", options: ["Secure Sockets Layer", "Secure System Layer", "Simple Sockets Layer", "System Sockets Level"], correctAnswerIndex: 0, explanation: "The predecessor to TLS." },
  { question: "What is 'TLS'?", options: ["Transport Layer Security", "Total Layer Security", "Transfer Layer System", "Technical Layer Security"], correctAnswerIndex: 0, explanation: "The current standard for secure web traffic." },
  { question: "What is 'Digital Signature'?", options: ["Signing a tablet with a pen", "A mathematical technique to validate message authenticity", "A type of font", "A high-resolution photo of your signature"], correctAnswerIndex: 1, explanation: "It is legally recognized in India under the IT Act." },
  { question: "What is 'Public Key' in Cryptography?", options: ["A key for everyone to use", "A key that can be shared openly to encrypt data", "A key to a public server room", "A key printed on a book"], correctAnswerIndex: 1, explanation: "Used in asymmetric encryption." },
  { question: "What is 'Private Key' in Cryptography?", options: ["A key you keep secret to decrypt data", "A key for your house", "A key for a private email", "A key you only use once"], correctAnswerIndex: 0, explanation: "It must never be shared." },
  { question: "What is 'Asymmetric Encryption'?", options: ["Encryption that is not symmetrical", "Using two different keys for encryption and decryption", "A type of coding error", "Encryption for images only"], correctAnswerIndex: 1, explanation: "Also known as Public Key Cryptography." },
  { question: "What is 'Symmetric Encryption'?", options: ["Using the same key for encryption and decryption", "Encryption for symmetrical shapes", "A type of fast data transfer", "Encryption that is balanced"], correctAnswerIndex: 0, explanation: "It is faster than asymmetric but requires secure key exchange." },
  { question: "What is 'Hash Function'?", options: ["A function that makes hash brown potatoes", "A function that maps data to a fixed-size string", "A type of social media tag", "A cooking app"], correctAnswerIndex: 1, explanation: "Used for data integrity and password storage." },
  { question: "What is 'Collision' in Hashing?", options: ["Two cars hitting each other", "Two different inputs producing the same hash value", "A type of server crash", "A data transfer error"], correctAnswerIndex: 1, explanation: "A good hash function should minimize collisions." },
  { question: "What is 'Salting' in Passwords?", options: ["Putting salt on your keyboard", "Adding random data to a password before hashing", "A technique for preserving data", "A type of digital seasoning"], correctAnswerIndex: 1, explanation: "It makes passwords harder to crack via rainbow tables." },
  { question: "What is 'Man-in-the-Middle (MITM) Attack'?", options: ["A person standing in a middle of a room", "An attacker intercepting communication between two parties", "A type of sports strategy", "A server between two countries"], correctAnswerIndex: 1, explanation: "Attackers can listen or modify the traffic." },
  { question: "What is 'Session Hijacking'?", options: ["Stopping a meeting", "Stealing a user's session ID to impersonate them", "A type of flight hijacking", "Closing a browser window"], correctAnswerIndex: 1, explanation: "It allows hackers to take over an active login." },
  { question: "What is 'Buffer Overflow'?", options: ["A bucket of water overflowing", "When more data is written to a buffer than it can hold", "A very fast internet speed", "A technical term for a full hard drive"], correctAnswerIndex: 1, explanation: "It can lead to system crashes or remote code execution." },
  { question: "What is 'Packet Sniffing'?", options: ["Smelling a package", "Intercepting and analyzing data packets over a network", "A type of digital tracking", "Checking for physical damage on a cable"], correctAnswerIndex: 1, explanation: "Tools like Wireshark are used for sniffing." },
  { question: "What is 'War Driving'?", options: ["Driving a tank", "Searching for unsecured Wi-Fi networks while driving", "A type of racing game", "A military exercise"], correctAnswerIndex: 1, explanation: "Hackers use it to find targets for intrusion." },
  { question: "What is 'Zero-Knowledge Proof'?", options: ["Knowing nothing", "A method to prove you know a secret without revealing it", "A type of math problem", "A very simple security system"], correctAnswerIndex: 1, explanation: "It is used in privacy-focused cryptographic systems." },
  { question: "What is 'Pentesting Framework'?", options: ["A frame for a test", "A collection of tools and methodologies for ethical hacking", "A type of building structure", "A government law for hackers"], correctAnswerIndex: 1, explanation: "Metasploit is a famous example." },
  { question: "What is 'Sandboxing'?", options: ["Playing with sand", "Running code in a secure, isolated environment", "A type of beach cleanup", "A coding style for beginners"], correctAnswerIndex: 1, explanation: "It prevents malware from affecting the rest of the system." },
  { question: "What is 'Air Gapping'?", options: ["Gap between two air conditioners", "Isolating a computer from all external networks", "A type of flying computer", "A high-speed fan setup"], correctAnswerIndex: 1, explanation: "Used for high-security systems like nuclear plant controllers." },
  { question: "What is 'Honeypot'?", options: ["A pot of honey", "A decoy system set up to lure and study hackers", "A sweet digital reward", "A type of server for children"], correctAnswerIndex: 1, explanation: "It helps security teams understand attacker behavior." },
  { question: "What is 'Cyber Resilience'?", options: ["The ability of a system to recover from a cyber attack", "A type of stretchy digital cable", "How hard a hacker works", "A new cybersecurity certificate"], correctAnswerIndex: 0, explanation: "It focuses on continuity during and after an incident." },
  { question: "What is 'Red Teaming'?", options: ["A team wearing red", "A full-scope attack simulation to test an organization's defense", "A type of sports team", "A fire department digital unit"], correctAnswerIndex: 1, explanation: "It is more comprehensive than a simple pen test." },
  { question: "What is 'Blue Teaming'?", options: ["A team wearing blue", "The defensive security team responsible for incident response", "A type of ocean research team", "A police digital forensics unit"], correctAnswerIndex: 1, explanation: "They defend against the 'Red Team' in simulations." },
  { question: "What is 'SOC'?", options: ["Security Operations Center", "System of Computing", "Secure Operating Center", "System Operations Check"], correctAnswerIndex: 0, explanation: "A centralized unit for managing organizational security." },
  { question: "What is 'IAM'?", options: ["Internet and Mail", "Identity and Access Management", "Internal Access Management", "Identity and Mail"], correctAnswerIndex: 1, explanation: "It ensures the right people have access to the right resources." },
  { question: "What is 'DLP'?", options: ["Digital License Program", "Data Loss Prevention", "Direct Link Protocol", "Digital Layer Protection"], correctAnswerIndex: 1, explanation: "Software designed to prevent sensitive data from leaving an organization." },
  { question: "What is 'BYOD'?", options: ["Bring Your Own Device", "Buy Your Own Data", "Build Your Own Database", "Bring Your Own Disk"], correctAnswerIndex: 0, explanation: "A policy allowing employees to use personal devices for work." },
  { question: "What is 'GDPR'?", options: ["General Data Protection Regulation", "Global Data Privacy Regulation", "General Digital Privacy Rule", "Global Digital Privacy Regulation"], correctAnswerIndex: 0, explanation: "The EU's comprehensive data privacy law." },
  { question: "What is 'COPPA'?", options: ["Children's Online Privacy Protection Act", "Computer Online Privacy Protection Act", "Children's Online Privacy Program Area", "Cyber Online Privacy Protection Act"], correctAnswerIndex: 0, explanation: "A US law regarding child online privacy." },
  { question: "What is 'Section 66A (Struck Down)'?", options: ["A law against hacking", "A law regarding offensive messages on social media", "A law for secure banking", "A law for AI ethics"], correctAnswerIndex: 1, explanation: "The Supreme Court of India struck it down for violating free speech." }
];

export const EXPERTS: Expert[] = [
  // ... (keep current experts)
  {
    name: "Advocate Mukul Jha",
    role: "Founder & CEO",
    specialty: "Cyber Law & Litigation",
    bio: "A distinguished High Court Advocate with over a decade of experience in cyber crime litigation and digital rights. Mukul envisions a legally-aware digital India.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Kajal Ranjna",
    role: "Senior Cyber Expert",
    specialty: "Digital Forensics",
    bio: "Expert in investigating digital evidence and cyber-crime patterns. Kajal helps students understand the 'breadcrumbs' they leave online.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Lasitha Manikath",
    role: "Cyber Expert",
    specialty: "AI Ethics & Governance",
    bio: "Focuses on the intersection of human rights and artificial intelligence, ensuring students use AI tools with a strong moral compass.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Swetha",
    role: "Cyber Expert",
    specialty: "Online Child Safety",
    bio: "Dedicated to protecting children from predatory behavior online. Swetha develops our student-centric safety protocols.",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Ritik Khurana",
    role: "Cyber Expert",
    specialty: "Technical Security & VAPT",
    bio: "A white-hat hacker who brings technical depth to our courses, teaching students about encryption, firewalls, and secure coding.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400"
  }
];

export const COURSE_LEVELS: CourseLevel[] = [
  {
    id: 'level-1',
    title: 'Digital Smart Citizens',
    subtitle: 'Cyber Safety, AI Awareness & Online Responsibility',
    target: 'Classes 6–8',
    outcome: 'Students learn to stay safe, respectful, and confident online.',
    description: 'This foundational level introduces middle school students to the core concepts of the digital world. Students will gain a comprehensive understanding of data protection basics, learning how to shield their digital identities from common threats while fostering a culture of respect and empathy in online interactions. It covers fundamental cyber hygiene and the ethics of digital communication.',
    learningObjectives: [
      "Identify common online safety risks including phishing, malware, and suspicious downloads.",
      "Understand the basic principles of digital footprints and long-term online privacy management.",
      "Develop effective strategies for managing strong passwords, multi-factor authentication, and privacy settings.",
      "Recognize cyber-bullying behaviors and understand the appropriate legal and school channels for reporting.",
      "Comprehend the basics of netiquette and responsible social media interaction."
    ],
    careerPaths: [
      "Digital Ethics Consultant (Junior Path)",
      "Social Media Safety Moderator",
      "Online Community Safety Lead",
      "Privacy Advocate"
    ],
    modules: [
      'Living in the Digital World: Footprints & Identity',
      'Cyber Safety Basics: Passwords & Safe Browsing',
      'Cyber Bullying: Identification & Reporting',
      'Introduction to Cyber Law: Simple rules for students',
      'AI Around Us: Responsible use in school apps',
      'Digital Manners: Respect, consent, and kindness'
    ]
  },
  {
    id: 'level-2',
    title: 'Cyber Aware Generation',
    subtitle: 'Cyber Law, Cyber Security & Ethical AI Use',
    target: 'Classes 9–10',
    outcome: 'Students understand law, safety, and ethics behind technology use.',
    description: 'At this intermediate level, students dive deeper into the legal and ethical frameworks governing the internet. The course provides a comprehensive overview of Indian cyber laws, including the IT Act 2000, and explores the technical aspects of cybercrime prevention and the ethical dilemmas posed by rapidly evolving AI technologies. Students will gain a comprehensive understanding of data protection laws as they apply to social media, e-commerce, and personal data storage.',
    learningObjectives: [
      "Analyze the legal consequences of cybercrimes such as hacking, identity theft, and digital fraud under the IT Act.",
      "Evaluate the ethical implications of AI bias, misinformation, and algorithm transparency in modern media.",
      "Implement robust cybersecurity practices for personal data encryption and public network security.",
      "Understand the rights and responsibilities of digital citizens under contemporary Indian Law.",
      "Recognize the legal boundaries of 'white hat' hacking and ethical security research."
    ],
    careerPaths: [
      "Cyber Legal Researcher",
      "Privacy Compliance Officer (Entry Level)",
      "Junior Cybersecurity Analyst",
      "Policy Research Associate",
      "AI Safety Evaluator"
    ],
    modules: [
      'Digital Rights & Responsibilities: Privacy & Reputation',
      'Cyber Crimes Explained: Hacking, phishing, scams',
      'Cyber Law in India: IT Act explained simply',
      'Cyber Security Essentials: Data protection & public Wi-Fi',
      'AI Benefits & Risks: Deepfakes & misinformation',
      'Ethical Use of Tech: Academic honesty & responsibility'
    ]
  },
  {
    id: 'level-3',
    title: 'Future-Ready Digital Leaders',
    subtitle: 'Advanced Cyber Law, Cyber Security & AI Ethics',
    target: 'Classes 11–12',
    outcome: 'Students become informed, career-ready, and legally aware digital citizens.',
    description: 'Our most advanced level prepares senior students for leadership in a technology-driven future. Students will gain a comprehensive understanding of advanced data protection laws, including the DPDP Act 2023, and explore the global landscape of AI regulation, cyber defense strategies, and high-impact career opportunities in cyber law and governance. It focuses on preparing students for higher education and professional certifications in the legal and technical domains of the 21st century.',
    learningObjectives: [
      "Master the complexities of digital evidence, electronic signatures, and legal remedies for online harassment.",
      "Critically analyze the global landscape of AI ethics, including international treaties and cyber regulations.",
      "Develop foundational knowledge in advanced cybersecurity defense, incident response, and threat intelligence.",
      "Understand the implications of the Digital Personal Data Protection (DPDP) Act 2023 for individuals and businesses.",
      "Prepare for specialized entrance exams and professional paths in Cyber Law and Forensic Science."
    ],
    careerPaths: [
      "Cyber Law Advocate / Legal Consultant",
      "Chief Information Security Officer (CISO) Trainee",
      "AI Auditor & Ethics Governance Specialist",
      "Digital Forensic Expert",
      "Government Intelligence Officer (Cyber Division)",
      "Cyber Insurance Specialist"
    ],
    modules: [
      'Advanced Cyber Law: Offences & punishments',
      'Digital Privacy: Personal data protection in real life',
      'Cyber Security & Careers: Attacks & defense concepts',
      'AI Ethics & Regulation: Misuse & accountability',
      'Social Media & Law: Fake news & legal risks',
      'Digital Leadership: Skills for future tech careers'
    ]
  }
];

export const FAQS: FAQ[] = [
  {
    question: "Is this course suitable for school students?",
    category: "General",
    answer: "Yes. All content is age-appropriate, simplified, and designed specifically for school-level understanding by Adv Mukul Jha and Team. We avoid complex legal jargon."
  },
  {
    question: "Does the course teach hacking?",
    category: "Safety",
    answer: "No. The course focuses on 'White Hat' awareness, safety, and prevention. We teach students how to defend against hacking, not how to perform it."
  },
  {
    question: "Will students learn about the DPDP Act 2023?",
    category: "Law",
    answer: "Yes, Level 3 covers the basics of the Digital Personal Data Protection Act 2023, explaining how Indian law protects their sensitive information."
  },
  {
    question: "How does this help with mental well-being?",
    category: "Academic",
    answer: "By teaching students how to handle cyberbullying and online pressure, we build digital resilience which directly supports mental health."
  },
  {
    question: "Is AI taught from a technical or ethical perspective?",
    category: "AI",
    answer: "We focus on AI awareness and ethics. No coding is required; students learn to identify deepfakes, AI bias, and how to use LLMs responsibly."
  },
  {
    question: "Can schools integrate this into their curriculum?",
    category: "Schools",
    answer: "Absolutely. Many schools use Cyber Gyan Kosh as a supplementary legal literacy and life skills program."
  },
  {
    question: "What happens if a student is a victim of cybercrime during the course?",
    category: "Support",
    answer: "We provide guidance on using official reporting channels like the National Cyber Crime Reporting Portal (cybercrime.gov.in)."
  },
  {
    question: "Are there live sessions with experts?",
    category: "Structure",
    answer: "Yes, our hybrid model includes interactive webinars with Adv. Mukul Jha and our team of experts."
  },
  {
    question: "How does the course handle the complexities of data privacy for minors?",
    category: "Privacy",
    answer: "We focus on teaching students about 'informed consent' and the importance of reading privacy policies (in simplified terms) so they understand what data they are trading for 'free' services."
  },
  {
    question: "What is the difference between AI awareness and technical AI skills?",
    category: "AI",
    answer: "AI awareness is about the 'Why' and the 'How' of its impact on society, ethics, and law. Technical skills focus on building AI, whereas we focus on making students informed users who can spot AI-generated misinformation and bias."
  },
  {
    question: "Do you cover the legal aspects of online gaming and virtual currencies?",
    category: "Gaming",
    answer: "Yes, especially in Level 2 and 3. We discuss the legalities of in-game purchases, the risks of skin-betting, and how to stay safe in increasingly immersive virtual environments."
  },
  {
    question: "How does the course prepare students for future 'Green' or 'Ethical' AI careers?",
    category: "Careers",
    answer: "We highlight emerging career paths like AI Ethics Auditors and Digital Rights Advocates, showing students that the future of tech is as much about governance as it is about development."
  },
  {
    question: "What practical tips are provided for securing home Wi-Fi and IoT devices?",
    category: "Security",
    answer: "Students learn basic network hygiene, such as changing default router passwords, setting up guest networks, and understanding the privacy risks of smart home devices like voice assistants."
  }
];

export const DEFINITIONS: Definition[] = [
  {
    term: "Phishing",
    meaning: "Phishing is a fraudulent attempt by cybercriminals to obtain sensitive information like passwords or credit card details by disguising themselves as a trustworthy entity in electronic communications. It typically involves deceptive emails or websites that trick users into revealing their personal credentials. Understanding how to spot suspicious links and sender addresses is a key defense against these social engineering attacks."
  },
  {
    term: "Deepfake",
    meaning: "A Deepfake is synthetic media where a person in an existing image or video is replaced with someone else's likeness using advanced artificial intelligence and machine learning techniques. While they can be used for entertainment, deepfakes pose significant legal risks when used to create misinformation or non-consensual content. Cyber law awareness helps students critically evaluate the authenticity of digital media in an era of AI-driven manipulation."
  },
  {
    term: "Digital Footprint",
    meaning: "A Digital Footprint is the unique trail of data you create while using the internet, which includes every website you visit, emails you send, and information you submit to online services. This trail is often permanent and can be used by employers, schools, or advertisers to build a profile of your online behavior. Managing your digital footprint through privacy settings and mindful posting is essential for long-term digital reputation management."
  }
];
