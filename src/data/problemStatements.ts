export interface ProblemStatement {
  id: string;
  title: string;
  category: string[]; // e.g. ["Software", "AI/ML", "Agriculture"]
  ministry: string;
  description: string;
  deliverables: string[];
}

export const problemStatements: ProblemStatement[] = [
  {
    id: "SIH1322",
    title: "AI-based Crop Disease Detection & Remediation Advisor",
    category: ["Software", "AI/ML", "Agriculture"],
    ministry: "Ministry of Agriculture & Farmers Welfare",
    description: "Farmers lose a substantial percentage of crops due to undetected or late-diagnosed plant diseases. Build an offline-capable mobile application using lightweight convolutional neural networks (CNNs) that allows farmers to photograph infected leaves, instantly diagnoses the disease, and provides both organic and chemical remediation steps in multiple regional languages.",
    deliverables: [
      "Offline-first mobile application code (React Native/Flutter preferred)",
      "Trained quantized mobile-friendly machine learning model (TFLite)",
      "Local database of remedies with translation support for 12 regional languages",
      "Interactive analytics dashboard for district agriculture officers"
    ]
  },
  {
    id: "SIH1323",
    title: "Smart IoT Wearable Safety Helmet for Underground Coal Miners",
    category: ["Hardware", "CleanTech"],
    ministry: "Ministry of Coal",
    description: "Develop a robust, intrinsically safe smart helmet for underground coal miners. The device must monitor hazardous ambient gases (carbon monoxide, methane), detect falls/impacts, track vital signs (body temperature, heart rate), and provide local emergency alarms. The helmet must transmit telemetry using long-range mesh networking (LoRaWAN) to a centralized surface command dashboard.",
    deliverables: [
      "Circuit schematics and Gerber layout files for the PCB",
      "Embedded C/C++ firmware codebase for microcontrollers (ESP32/STM32)",
      "Central monitoring dashboard UI with real-time alerting system",
      "3D CAD designs (STEP files) for the integrated helmet compartment"
    ]
  },
  {
    id: "SIH1324",
    title: "Non-Invasive Glucometer using Near-Infrared Spectroscopy",
    category: ["Hardware", "MedTech"],
    ministry: "Ministry of Health and Family Welfare",
    description: "Design a non-invasive blood glucose monitoring system that uses near-infrared (NIR) optical sensors to determine blood sugar levels through skin contact without painful needle pricks. The device must account for diverse skin tones, ambient temperatures, and finger thicknesses using a localized calibration algorithm.",
    deliverables: [
      "Spectroscopy optical sensor setup documentation and circuit diagrams",
      "Calibration algorithm (Python/C) with error margin validation under 10%",
      "Companion mobile app for historical blood sugar tracking and alerts",
      "Physical prototype housing and casing CAD model"
    ]
  },
  {
    id: "SIH1325",
    title: "Decentralized Peer-to-Peer Solar Energy Trading Platform",
    category: ["Software", "CleanTech"],
    ministry: "Ministry of New and Renewable Energy",
    description: "Create a secure, decentralized web application for microgrid environments. The application will enable residential properties with solar rooftop panels to trade excess energy output directly with neighboring consumer nodes. Utilize blockchain smart contracts for instant billing, escrow, and automated grid-load balancing calculations.",
    deliverables: [
      "Smart contracts (Solidity/Rust) deployed on a testnet",
      "Web-based trading portal with energy generation & consumption dashboard",
      "P2P billing simulator showing financial transactions",
      "Detailed system architecture showing grid-level security interfaces"
    ]
  },
  {
    id: "SIH1326",
    title: "Automated Robotic Sorting of Municipal Plastic Waste",
    category: ["Hardware", "CleanTech"],
    ministry: "Ministry of Environment, Forest and Climate Change",
    description: "Design an automated conveyor belt system that utilizes computer vision to identify, categorize, and physical sort municipal plastic waste (PET, HDPE, LDPE, PP, PS) in real-time. The robotic actuator should automatically redirect categorized plastics into respective collection bins.",
    deliverables: [
      "Computer vision classification model (YOLO-based) achieving >92% accuracy",
      "Pneumatic/Robotic actuator control scripts (ROS/Arduino code)",
      "CAD models and simulated assembly of the physical conveyor belt",
      "Real-time sorting throughput dashboard UI"
    ]
  },
  {
    id: "SIH1327",
    title: "Multilingual Voice-to-Voice AI Assistant for Rural Banking",
    category: ["Software", "AI/ML", "Student Innovation"],
    ministry: "Ministry of Finance",
    description: "Rural populations often struggle to navigate text-heavy digital banking applications. Build a voice-only conversational agent that supports local dialects (Bhojpuri, Malvi, Tamil, Marathi) to execute basic banking tasks, check account balances, explain loan schemes, and detect fraud warnings through plain spoken speech.",
    deliverables: [
      "Voice activity detection & automatic speech recognition pipeline",
      "Text-to-speech module optimized for regional Indian inflections",
      "Secure backend simulator integrating with mock banking APIs",
      "Speech-driven user interface prototype for low-end smartphones"
    ]
  },
  {
    id: "SIH1328",
    title: "Smart Water Quality Monitoring & Leakage Detection Network",
    category: ["Hardware", "CleanTech", "Student Innovation"],
    ministry: "Ministry of Jal Shakti",
    description: "Develop a sensor node network to monitor water quality (pH, turbidity, temperature, TDS) and identify leaks in local distribution pipelines. The nodes should be solar-powered and report anomalies back to municipal corporations with exact GPS coordinates using cellular telemetry.",
    deliverables: [
      "Telemetry sensor node schematic and power consumption budget sheet",
      "Anomaly detection model for pressure drop / leakage identification",
      "GIS dashboard showcasing water quality overlay on municipal map",
      "Physical prototype enclosure with IP67 waterproofing design"
    ]
  },
  {
    id: "SIH1329",
    title: "AI-Powered Medical Diagnosis Support for Rural Health Sub-Centers",
    category: ["Software", "AI/ML", "MedTech"],
    ministry: "Ministry of Health and Family Welfare",
    description: "Build a diagnostic decision support tool for remote ASHA workers. The tool accepts patient vitals, symptoms, and localized health history, processes it via clinical guidelines (like WHO Integrated Management), and generates risk assessments for maternal health, pediatric infections, and chronic conditions to guide referral decisions.",
    deliverables: [
      "Mobile web application optimizing for extremely low bandwidth",
      "WHO/clinical rule-engine workflow designer and digital questionnaire",
      "Encrypted patient registry with offline data sync capabilities",
      "Automatic PDF report generator for referral clinics"
    ]
  }
];
