export const resumeData = {
  personalInfo: {
    name: "K BHAVANA JAYARAM",
    title: "Electrical & Electronics Engineer | Embedded Systems & IoT Specialization",
    email: "bhavana.1si23ee018@gmail.com",
    phone: "+917022397655",
    github: "https://github.com/BhavanaJayaram05",
    linkedin: "https://www.linkedin.com/in/k-bhavana-jayaram",
    location: "Tumkur, Karnataka, India",
    objective: "Electrical and Electronics Engineering student with hands-on experience in Embedded Systems, IoT, and smart energy solutions. Passionate about designing sustainable engineering systems and solving real-world challenges through innovation, analytical thinking, and teamwork while delivering high-quality engineering solutions.",
    photo: "https://lh3.googleusercontent.com/d/1_5Rk" // Placeholder or reference to uploaded photo
  },
  
  statistics: [
    { label: "CGPA", value: "8.4 / 10", description: "SIT Tumkur", icon: "GraduationCap" },
    { label: "Projects", value: "6 Total", description: "3 Core + 3 Upcoming", icon: "Cpu" },
    { label: "Achievements", value: "Top 3 Wins", description: "National Hackathons", icon: "Trophy" },
    { label: "Certifications", value: "3 Professional", description: "Cisco & CodeChef", icon: "Award" },
    { label: "IEEE Membership", value: "Active", description: "Photonics & COMSOC", icon: "Users" }
  ],

  education: [
    {
      institution: "Siddaganga Institute of Technology, Tumkur",
      degree: "Bachelor of Engineering in Electrical and Electronics",
      duration: "Oct 2023 - Present",
      grade: "CGPA: 8.4",
      details: "Focusing on Embedded Systems, Power Electronics, Smart Grid integration, Electric Vehicles, and IoT applications. Active participation in IEEE workshops and projects."
    },
    {
      institution: "Sapthagiri Pre-University College, Tumkur",
      degree: "Class 11 - 12 (PCMB)",
      duration: "June 2021 - April 2023",
      grade: "Percentage: 93.77%",
      details: "Core subjects: Physics, Chemistry, Mathematics, Biology. Graduated with distinction."
    },
    {
      institution: "Bishop Sargent School, Tumkur",
      degree: "SSLC (Secondary School Leaving Certificate)",
      duration: "July 2020 - April 2021",
      grade: "Percentage: 87.35%",
      details: "Completed secondary education with strong foundations in science and mathematics."
    }
  ],

  skills: {
    programming: [
      { name: "C++", level: 85 },
      { name: "Embedded C", level: 90 },
      { name: "Python (basic)", level: 60 }
    ],
    software: [
      { name: "MATLAB", level: 80 },
      { name: "Simulink", level: 75 },
      { name: "Arduino IDE", level: 90 },
      { name: "GitHub", level: 85 },
      { name: "MS Excel", level: 80 }
    ],
    embeddedAndIoT: [
      { name: "Arduino Microcontrollers", level: 90 },
      { name: "ESP32 DevKit", level: 85 },
      { name: "Sensor Interfacing", level: 90 },
      { name: "ADC (Analog to Digital Conversion)", level: 85 },
      { name: "UART Communication", level: 80 },
      { name: "I2C Communication Protocol", level: 85 }
    ],
    coreDomains: [
      "Embedded Systems",
      "Internet of Things (IoT)",
      "Power Systems",
      "Power Electronics",
      "Analog & Digital Electronics",
      "Renewable Energy Systems",
      "Electric Vehicles (EV)"
    ],
    professional: [
      "Problem Solving",
      "Analytical Thinking",
      "Leadership",
      "Teamwork",
      "Project Planning",
      "Technical Communication"
    ]
  },

  projects: [
    {
      id: "water-conservation-tankers",
      title: "IoT-Based Water Conservation and Safety Monitoring System for Road Tankers",
      shortDesc: "An IoT-enabled smart monitoring and automation system that minimizes water spillage, prevents leakage, automates tanker operations, and improves driver safety using ESP32, multiple sensors, and real-time monitoring.",
      achievement: "🏆 1st Prize Winner – Ambition 2.0 National Hackathon | BIT Bengaluru. Awarded First Place for designing and prototyping an IoT-Based Water Conservation and Safety Monitoring System for Road Tankers, contributing to sustainable engineering solutions, and smart transportation infrastructure through real-time monitoring, automated leakage prevention, driver safety, and cloud-enabled IoT telemetry.",
      tags: [
  "ESP32",
  "IoT",
  "Embedded Systems",
  "Water Conservation",
  "Automation",
  "Sensors",
  "Arduino",
  "Web Dashboard"
],
      overview: "This project presents an IoT-Based Water Conservation and Safety Monitoring System designed for road water tankers. The system continuously monitors water level, internal pressure, outlet leakage, temperature, motion, and tanker conditions using multiple sensors connected to an ESP32 controller. It automatically controls the tanker lid, outlet valve, water pump, and safety alerts to prevent water loss during filling, transportation, and delivery. Real-time monitoring through a web dashboard improves operational efficiency, reduces manual intervention, and enhances driver safety.",
      problemStatement: "Water tankers experience significant water loss due to open lids, pressure buildup, sloshing during vehicle movement, leaking outlet valves, and manual operational errors. These issues waste nearly 50 liters of water per trip, reduce transportation efficiency, increase maintenance costs, and create safety hazards for both drivers and road users. Existing tanker systems lack intelligent automation for monitoring and preventing these problems.",
      objectives: [
  "Prevent water spillage during tanker transportation.",
  "Automatically control tanker lid based on pressure conditions.",
  "Detect and eliminate outlet valve leakage.",
  "Monitor real-time water level during filling operations.",
  "Automate water pump operation to prevent overflow.",
  "Improve driver safety using motion and pressure sensing.",
  "Provide live IoT monitoring through a web-based dashboard.",
  "Reduce manual intervention and improve water conservation."
],
      hardwareUsed: [
  "ESP32 Development Board",
  "BMP280 Pressure Sensor",
  "MPU6050 Accelerometer & Gyroscope",
  "HC-SR04 Ultrasonic Sensor",
  "YF-S201 Water Flow Sensor",
  "DHT11 Temperature Sensor",
  "PIR Motion Sensor",
  "SG90 Servo Motor",
  "12V Solenoid Valve",
  "Relay Module",
  "DC Water Pump",
  "OLED Display",
  "Push Button",
  "Power Supply"
],
      softwareUsed: [
        "Arduino IDE (Firmware coding in C/C++)",
        "Blynk Cloud IoT / Adafruit IO (Dashboard interface)",
        "ThingSpeak (Data logging and historical analytical graphing)",
        "C++ Core Embedded Libraries"
      ],
      components: [
  {name: "ESP32",role: "Acts as the main controller by collecting sensor data, processing automation logic, and hosting the web dashboard."},
  {name: "BMP280 Pressure Sensor",role: "Monitors internal tanker pressure to prevent unsafe pressure buildup."},
  {name: "HC-SR04 Ultrasonic Sensor",role: "Measures water level and automates filling operations."},
  {name: "MPU6050 Accelerometer",role: "Detects vehicle motion, braking, and sloshing conditions."},
  {name: "Flow Sensor",role: "Measures outlet flow and detects leakage."},
  {name: "Servo Motor",role: "Automatically opens and closes the tanker lid."},
  {name: "Solenoid Valve",role: "Provides leak-proof outlet water control."},
  {name: "Relay Module",role: "Controls the water pump and outlet valve."}
],
      blockDiagram: "System Architecture Diagram",
      circuitDiagram: "",
      workingPrinciple: "The ultrasonic sensor measures the air gap inside the tank, calculating water depth. The MPU6050 monitors the tanker's motion. If high deceleration is detected (causing sloshing), the system waits for the water surface to stabilize before logging level readings to prevent false alarms. The flow sensor monitors outflow. If water flow is registered without user authorization (registered on the Cloud), the system marks it as an error, automatically triggers the 12V Solenoid Valve to shut the pipeline, and transmits an alert notification to the cloud dashboard.",
      results: "The developed prototype successfully monitored tanker conditions in real time and automatically controlled the lid, pump and outlet valve. The system accurately detected water level, leakage, pressure changes and tanker movement while providing live data through the ESP32 web dashboard. The prototype demonstrated effective reduction of water loss, improved operational safety and minimized manual intervention.",
      challenges: [
    "Integrating multiple sensors simultaneously on the ESP32 without communication conflicts.",
    "Achieving accurate water level measurement during tanker movement.",
    "Calibrating the flow sensor for precise leakage detection.",
    "Synchronizing real-time sensor updates with the web dashboard.",
    "Optimizing Wi-Fi communication while maintaining stable sensor readings."
],
      futureScope: [
    "Integrate GPS tracking for live tanker location monitoring.",
    "Add GSM/4G communication for remote alerts without Wi-Fi.",
    "Implement AI-based leakage prediction and preventive maintenance.",
    "Develop a dedicated Android/iOS mobile application.",
    "Integrate cloud analytics for fleet-wide tanker monitoring.",
    "Support multiple tanker management through a centralized dashboard."
],

      gallery: ["/projects/water-conservation/hero.jpg",
  "/projects/water-conservation/prototype.jpg",
  "/projects/water-conservation/block-diagram.jpg",
  "/projects/water-conservation/overflow.jpg",
  "/projects/water-conservation/tanker.jpg"],
      demoVideo: "",
      githubRepo: ""
    },
    {
      id: "smart-energy-meter",
      title: "IoT Enabled Bidirectional Smart Energy Meter with Net Billing, Load Control & Renewable Integration",
      shortDesc: "A bidirectional smart energy meter for real-time monitoring of power consumption and solar/renewable energy generation.",
      tags: ["ESP32", "IoT", "Renewable Energy", "Smart Grid"],
      overview: "As rooftop solar installations grow, grid operators need bidirectional monitoring. This project delivers an IoT smart meter that measures electricity taken from the grid and solar power fed back into the grid, enabling automated billing and smart load shedding.",
      problemStatement: "Traditional electricity meters can only record energy flow in one direction. When a building generates solar energy, regular meters fail to track the energy sent back to the grid, hindering net-metering and billing transparency.",
      objectives: [
        "Build a high-accuracy, dual-direction power measurement unit.",
        "Implement net energy calculation (Imported Energy - Exported Energy).",
        "Enable remote load connect/disconnect via Web Dashboard.",
        "Integrate cloud logging for real-time demand monitoring."
      ],
      hardwareUsed: [
        "ESP32 NodeMCU Development Board",
        "SCT-013-000 Non-invasive AC Current Transformer (Up to 100A)",
        "ZMPT101B Active AC Single-Phase Voltage Transformer Module",
        "40A Solid State Relay (SSR) for smart power isolation",
        "0.96-inch I2C OLED display for offline interface reading"
      ],
      softwareUsed: [
        "Arduino IDE (Embedded programming)",
        "EmonLib Library (For calculating RMS voltage, current, and real power)",
        "ThingSpeak Cloud Service (For telemetry graphs)",
        "HTML/CSS/JS (For custom admin relay control dashboard)"
      ],
      components: [
        { name: "SCT-013 Sensor", role: "Clamped around live AC wire to generate a proportional milliamp current output." },
        { name: "ZMPT101B Module", role: "Transforms 230V AC mains voltage to a safe 0-5V analog wave for the ESP32 ADC." },
        { name: "Solid State Relay", role: "Tripped by ESP32 to disconnect heavy home appliances if budget threshold is exceeded." },
        { name: "ESP32 Chip", role: "Samples voltage/current waveforms at 1kHz, computes active power and sends calculations to the cloud." }
      ],
      blockDiagram: "230V AC Line -> SCT-013 & ZMPT101B -> ESP32 MCU\nESP32 -> Solid State Relay -> Consumer Load\nESP32 -> OLED Screen\nESP32 -> Router -> ThingSpeak Cloud (Billing Engine)",
      circuitDiagram: "SCT-013 output -> Burden resistor -> 1.65V DC offset circuit -> ESP32 GPIO 34 (ADC)\nZMPT101B VCC -> 5V; Out -> ESP32 GPIO 35 (ADC)\nOLED SDA/SCL -> ESP32 GPIO 21/22 (I2C)\nSSR Control Terminal -> 220 Ohm Resistor -> ESP32 GPIO 4 (Digital Output)",
      workingPrinciple: "The current and voltage sensors continuously sample the AC mains waveforms. The ESP32 utilizes the EmonLib algorithm to calculate the phase difference between voltage and current. Depending on the phase angle, power is classified as imported (load consuming) or exported (solar generator feeding back). Net power is integrated over time to compute Net Kilowatt-Hours (kWh). Telemetry is uploaded to ThingSpeak every 15 seconds, and bills are automatically computed based on standard tariff structures.",
      results: "The bidirectional meter successfully calibrated solar feeding profiles. It showed an accuracy deviation of less than 2.8% compared to commercial household meters, and executed remote load disconnect commands under 0.8 seconds.",
      challenges: [
        "Computing phase angles correctly with phase shifts introduced by sensors. Solved by writing software calibration scripts inside the ESP32 code to adjust phase offsets.",
        "Safe sampling of AC mains. Resolved by implementing optocoupled isolation inside the ZMPT101B module to isolate low-power digital boards from mains power."
      ],
      futureScope: [
        "Include multi-phase (three-phase) measurement capabilities.",
        "Implement machine learning model on historical usage data to predict next month's energy bill.",
        "Develop an Android/iOS mobile application for notification warnings when power consumption spikes."
      ],
      gallery: [],
      demoVideo: "",
      githubRepo: ""
    },
    {
      id: "ev-bms",
      title: "IoT-Based Smart Battery Management System for EVs",
      shortDesc: "A battery management system ensuring cell health, safety, thermal protection, and cell balancing for Electric Vehicles.",
      tags: ["Arduino", "MATLAB", "BMS", "EVs"],
      overview: "Lithium-ion batteries in Electric Vehicles require continuous monitoring to operate safely. This project implements a Smart Battery Management System (BMS) that monitors cell voltages, currents, temperatures, and performs active cell balancing to maximize pack longevity.",
      problemStatement: "Li-ion batteries are vulnerable to overcharging, over-discharging, and thermal runaway. If single cells within a series pack become unbalanced, it reduces the overall pack capacity and poses severe explosion or fire hazards.",
      objectives: [
        "Monitor individual cell voltages in a series battery pack.",
        "Log pack temperature to prevent thermal runaway.",
        "Execute active or passive cell balancing to equalize state of charge (SoC).",
        "Provide emergency cutoff signal to isolation relays during faults."
      ],
      hardwareUsed: [
        "Arduino Uno / ESP32 (Controller board)",
        "NTC 10K Thermistors (For temperature tracking across hot cells)",
        "Voltage Divider Resistor network / Analog Multiplexer (For individual cell voltage sampling)",
        "MOSFET Switches (For discharge load shunt balancing)",
        "Current Shunt Resistor (For pack current measurement)",
        "Mechanical power relays (Pack isolation)"
      ],
      softwareUsed: [
        "MATLAB & Simulink (For simulating battery cell models and charge/discharge curves)",
        "Arduino IDE (BMS protection firmware)",
        "ThingSpeak (Remote dashboard logging)"
      ],
      components: [
        { name: "Arduino Uno", role: "Reads analog sensors, compares values to limits, manages balance MOSFETs." },
        { name: "NTC Thermistor", role: "Fixed onto battery cells to read internal thermal levels." },
        { name: "MOSFET Shunts", role: "Switched ON to bleed charge from high-voltage cells during pack balancing." },
        { name: "Relay Circuit", role: "Cuts off charge or discharge paths if any cell goes out of safe limits (e.g. > 4.2V or < 2.8V)." }
      ],
      blockDiagram: "4S Li-Ion Cell Pack -> Resistor tap network -> Arduino ADC\nThermistors -> Arduino ADC\nArduino -> MOSFET balancing array -> Bleed resistors\nArduino -> Pack Isolation Relays -> Charger/Load",
      circuitDiagram: "Cell 1 (+) -> 10k/10k divider -> Arduino A0\nCell 2 (+) -> 20k/10k divider -> Arduino A1\nCell 3 (+) -> 30k/10k divider -> Arduino A2\nCell 4 (+) -> 40k/10k divider -> Arduino A3\nArduino D5, D6, D7, D8 -> Gate pins of logic-level MOSFETs (IRLZ44N) connected across cells with 10-ohm power resistors.",
      workingPrinciple: "The system samples the voltage of each series cell. Since Arduino inputs share a common ground, voltage dividers are used to drop cell potential to under 5V, and software subtraction yields individual cell voltages. If the difference between the highest and lowest cell exceeds 50mV during charging, the system triggers the balancing MOSFET for the highest cell, diverting charge current through a power resistor until balance is restored. Thermal levels are monitored; if cell temp exceeds 55°C, the main pack relay is tripped immediately.",
      results: "MATLAB simulations confirmed charging safety models. The physical 4S battery prototype successfully balanced cells with a 120mV discrepancy within 45 minutes of charge cycle, and successfully isolated the load during simulated short circuit tests.",
      challenges: [
        "Inaccuracy in voltage dividers due to resistor tolerances. Solved by measuring actual resistor values using a digital multimeter and hardcoding calibration correction factors into the code.",
        "Common ground reference issue for series voltage tap. Solved by implementing an isolated differential amplifier circuit in the hardware design."
      ],
      futureScope: [
        "Integrate a dedicated BMS IC (e.g., LTC6804) for automotive-grade cell monitoring.",
        "Implement State-of-Charge (SoC) and State-of-Health (SoH) prediction using Kalman Filtering algorithms.",
        "Connect to the EV's CAN Bus network to report pack parameters directly to the main vehicle controller."
      ],
      gallery: [],
      demoVideo: "",
      githubRepo: ""
    },
    {
      id: "upcoming-placeholder-1",
      title: "[Upcoming Project 1] Smart Home Automation System",
      shortDesc: "An upcoming hardware project focusing on smart home relay controls, voice inputs, and automated scheduling.",
      tags: ["Hardware", "Placeholder", "IoT"],
      overview: "[Placeholder Overview: To be filled with your project details later. This page is set up with all 15 required sections and is fully ready to display your schematic diagrams, codes, and project specifications.]",
      problemStatement: "[Placeholder Problem Statement: Describe the issue your project solves here.]",
      objectives: [
        "[Placeholder Objective 1: List the primary objective of this project.]",
        "[Placeholder Objective 2: List secondary achievements of this project.]"
      ],
      hardwareUsed: [
        "[Placeholder Hardware 1 (e.g. ESP8266, Relay modules)]",
        "[Placeholder Hardware 2 (e.g. PIR motion sensors, DHT22 temperature sensor)]"
      ],
      softwareUsed: [
        "[Placeholder Software 1 (e.g. Arduino IDE)]",
        "[Placeholder Software 2 (e.g. Blynk app, ESP Rainmaker)]"
      ],
      components: [
        { name: "[Placeholder Component Name]", role: "[Placeholder Component Role in Circuit]" }
      ],
      blockDiagram: "[Placeholder Block Diagram: Describe the flow of signals from inputs to output load here.]",
      circuitDiagram: "[Placeholder Circuit Diagram: Pin connections and wiring layout details will go here.]",
      workingPrinciple: "[Placeholder Working Principle: Explain the step-by-step logic of how the microcontrollers and sensors interact to execute the code instructions.]",
      results: "[Placeholder Results: What did the final testing show? What parameters were measured?]",
      challenges: [
        "[Placeholder Challenge 1: Describe any debugging or design issues faced during the build.]",
        "[Placeholder Challenge 2: Explain how the issue was fixed.]"
      ],
      futureScope: [
        "[Placeholder Future Scope 1: What features would you add in the next version?]",
        "[Placeholder Future Scope 2: How can this system be optimized further?]"
      ],
      gallery: [],
      demoVideo: "",
      githubRepo: ""
    },
    {
      id: "upcoming-placeholder-2",
      title: "[Upcoming Project 2] Autonomous Line Following Robot",
      shortDesc: "An upcoming robotics project focusing on IR array sensor calibration, differential drive motors, and PID control algorithms.",
      tags: ["Robotics", "Placeholder", "Embedded Systems"],
      overview: "[Placeholder Overview: To be filled with your project details later. This page is set up with all 15 required sections and is fully ready to display your schematic diagrams, codes, and project specifications.]",
      problemStatement: "[Placeholder Problem Statement: Describe the issue your project solves here.]",
      objectives: [
        "[Placeholder Objective 1: List the primary objective of this project.]",
        "[Placeholder Objective 2: List secondary achievements of this project.]"
      ],
      hardwareUsed: [
        "[Placeholder Hardware 1 (e.g. Arduino Uno, L298N Motor Driver)]",
        "[Placeholder Hardware 2 (e.g. 5-Channel IR Sensor Array, BO DC Motors)]"
      ],
      softwareUsed: [
        "[Placeholder Software 1 (e.g. Arduino IDE)]",
        "[Placeholder Software 2 (e.g. PID Control Library)]"
      ],
      components: [
        { name: "[Placeholder Component Name]", role: "[Placeholder Component Role in Circuit]" }
      ],
      blockDiagram: "[Placeholder Block Diagram: Describe the flow of signals from inputs to output load here.]",
      circuitDiagram: "[Placeholder Circuit Diagram: Pin connections and wiring layout details will go here.]",
      workingPrinciple: "[Placeholder Working Principle: Explain the step-by-step logic of how the microcontrollers and sensors interact to execute the code instructions.]",
      results: "[Placeholder Results: What did the final testing show? What parameters were measured?]",
      challenges: [
        "[Placeholder Challenge 1: Describe any debugging or design issues faced during the build.]",
        "[Placeholder Challenge 2: Explain how the issue was fixed.]"
      ],
      futureScope: [
        "[Placeholder Future Scope 1: What features would you add in the next version?]",
        "[Placeholder Future Scope 2: How can this system be optimized further?]"
      ],
      gallery: [],
      demoVideo: "",
      githubRepo: ""
    },
    {
      id: "upcoming-placeholder-3",
      title: "[Upcoming Project 3] Dual-Axis Solar Tracking System",
      shortDesc: "An upcoming renewable energy project using LDR sensors and servo motors to orient a solar panel towards the sun.",
      tags: ["Power Systems", "Placeholder", "Renewable Energy"],
      overview: "[Placeholder Overview: To be filled with your project details later. This page is set up with all 15 required sections and is fully ready to display your schematic diagrams, codes, and project specifications.]",
      problemStatement: "[Placeholder Problem Statement: Describe the issue your project solves here.]",
      objectives: [
        "[Placeholder Objective 1: List the primary objective of this project.]",
        "[Placeholder Objective 2: List secondary achievements of this project.]"
      ],
      hardwareUsed: [
        "[Placeholder Hardware 1 (e.g. Arduino Nano, SG90 Servo Motors)]",
        "[Placeholder Hardware 2 (e.g. Light Dependent Resistors (LDR), Solar Panel)]"
      ],
      softwareUsed: [
        "[Placeholder Software 1 (e.g. Arduino IDE)]",
        "[Placeholder Software 2 (e.g. MATLAB for plotting efficiency graphs)]"
      ],
      components: [
        { name: "[Placeholder Component Name]", role: "[Placeholder Component Role in Circuit]" }
      ],
      blockDiagram: "[Placeholder Block Diagram: Describe the flow of signals from inputs to output load here.]",
      circuitDiagram: "[Placeholder Circuit Diagram: Pin connections and wiring layout details will go here.]",
      workingPrinciple: "[Placeholder Working Principle: Explain the step-by-step logic of how the microcontrollers and sensors interact to execute the code instructions.]",
      results: "[Placeholder Results: What did the final testing show? What parameters were measured?]",
      challenges: [
        "[Placeholder Challenge 1: Describe any debugging or design issues faced during the build.]",
        "[Placeholder Challenge 2: Explain how the issue was fixed.]"
      ],
      futureScope: [
        "[Placeholder Future Scope 1: What features would you add in the next version?]",
        "[Placeholder Future Scope 2: How can this system be optimized further?]"
      ],
      gallery: [],
      demoVideo: "",
      githubRepo: ""
    }
  ],

  achievements: [
    {
      title: "1st Prize – Ambition 2.0 National Hackathon",
      organization: "BIT Bangalore",
      description: "Won the first position at the national level hackathon for prototyping an innovative IoT-based water conservation and safety telemetry system for highway tankers."
    },
    {
      title: "2nd Runner Up – Technisium 2025",
      organization: "Hobby Project Competition",
      description: "Secured third place for designing and building an operational bidirectional smart energy meter with load connect/disconnect and cloud analytics."
    },
    {
      title: "Top 5 Finalist – TE Sustainability Cup 2026",
      organization: "TE Connectivity",
      description: "Emerged in the top 5 nationwide for pitching a scalable EV Battery Management System focusing on passive balancing safety mechanisms and cell diagnostics."
    }
  ],

  internship: {
    title: "IoT & Robotics Industrial Training",

    organization: "Rinex Organization",

    duration: "2025",

    grade: "A+",

    certificateId: "ITR25-RNC0-9988",

    certificate: "/certificates/rinex-certificate.jpg",

    details:
        "Successfully completed an Online Industrial Training Program in IoT and Robotics offered by Rinex Organization. Gained practical knowledge of embedded systems, Arduino programming, sensor interfacing, IoT concepts, and automation through structured online learning, practical exercises, and project-based activities. Successfully completed the program with Grade A+."
},

  certifications: [
    {
      title: "Python Essentials 1",
      issuer: "Cisco Networking Academy",
      description: "Covers fundamental programming concepts including control flows, basic algorithms, data structures, and object-oriented paradigms in Python."
    },
    {
      title: "C++ Programming",
      issuer: "CodeChef",
      description: "Validated skill in core C++ programming, data structures, pointer mechanics, and standard library functionalities."
    },
    {
      title: "Certified in Internet of Things and Robotics",
      issuer: "Rinex Organization",
      grade: "Grade A+",
      description: "Professional industrial certification proving proficiency in design, assembly, coding, and remote control of sensor-equipped robotic and cloud units."
    }
  ],

  ieeeActivities: {
    role: "Active Member",
    chapter: "IEEE Photonics & COMSOC Joint Chapter (SIT)",
    description: "Contributed to planning, marketing, and executing technical workshops, national-level hackathons, seminars, student events, and direct industry interaction programs. Worked with executive team members to build student tech community awareness."
  }
};
